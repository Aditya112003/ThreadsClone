import { Box, Flex, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useShowToast from "../hooks/useShowToast";
import Post from "../components/Post";
import { useRecoilState } from "recoil";
import postsAtom from "../atoms/postsAtom";
import SuggestedUsers from "../components/SuggestedUsers";

const HomePage = () => {
  const [posts, setPosts] = useRecoilState(postsAtom);
  const [loading, setLoading] = useState(true);
  const showToast = useShowToast();

  useEffect(() => {
    const getFeedPosts = async () => {
      setLoading(true);
      setPosts([]);
      try {
        const res = await fetch("/api/posts/feed");
        const data = await res.json();
        if (data.error) {
          showToast("Error", data.error, "error");
          return;
        }
        setPosts(data);
      } catch (error) {
        showToast("Error", error.message, "error");
      } finally {
        setLoading(false);
      }
    };
    getFeedPosts();
  }, [showToast, setPosts]);

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      gap="10"
      alignItems="flex-start"
    >
      <Box flex={{ base: 1, md: 70 }} mb={{ base: 4, md: 0 }}>
        {!loading && posts.length === 0 && (
          <h1>Follow some users to see the feed</h1>
        )}

        {loading && (
          <Flex justify="center">
            <Spinner size="xl" />
          </Flex>
        )}

        {posts.map((post) => (
          <Post key={post._id} post={post} postedBy={post.postedBy} />
        ))}
      </Box>

      {/* Suggested Users box, centered on the page */}
      <Box
        flex={{ base: 1, md: 30 }}
        maxW="300px"
        mx="auto" // Center horizontally
        display="block"
      >
        <SuggestedUsers />
      </Box>
    </Flex>
  );
};

export default HomePage;
