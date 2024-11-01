import {
  Avatar,
  AvatarBadge,
  Box,
  Flex,
  Image,
  Stack,
  Text,
  WrapItem,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRecoilState, useRecoilValue } from "recoil";
import userAtom from "../atoms/userAtom";
import { BsCheck2All, BsFillImageFill } from "react-icons/bs";
import { selectedConversationAtom } from "../atoms/messagesAtom";

const Conversation = ({ conversation, isOnline }) => {
  const [selectedConversation, setSelectedConversation] = useRecoilState(
    selectedConversationAtom
  );

  const user = conversation.participants[0];
  const currentUser = useRecoilValue(userAtom);
  const lastMessage = conversation.lastMessage;

  const hoverBg = useColorModeValue("gray.200", "gray.700");
  const selectedBg = useColorModeValue("gray.400", "gray.600");

  const handleConversationSelect = () => {
    setSelectedConversation({
      _id: conversation._id,
      userId: user._id,
      userProfilePic: user.profilePic,
      username: user.username,
      mock: conversation.mock,
    });
  };

  return (
    <Flex
      gap={4}
      alignItems="center"
      p={2}
      borderRadius="md"
      cursor="pointer"
      onClick={handleConversationSelect}
      bg={selectedConversation?._id === conversation._id ? selectedBg : ""}
      _hover={{
        bg: hoverBg,
      }}
    >
      <WrapItem>
        <Avatar size={{ base: "xs", sm: "sm", md: "md" }} src={user.profilePic}>
          {isOnline && <AvatarBadge boxSize="1em" bg="green.500" />}
        </Avatar>
      </WrapItem>

      <Stack direction="column" fontSize={{ base: "xs", md: "sm" }}>
        <Text fontWeight="700" display="flex" alignItems="center">
          {user.username}
          {user.isVerified && <Image src="/verified.png" w={4} h={4} ml={1} />}
        </Text>

        <Text fontSize="xs" display="flex" alignItems="center" gap={1}>
          {currentUser._id === lastMessage.sender && (
            <Box color={lastMessage.seen ? "blue.400" : ""}>
              <BsCheck2All size={16} />
            </Box>
          )}
          {lastMessage.text ? (
            lastMessage.text.length > 18 ? (
              `${lastMessage.text.substring(0, 18)}...`
            ) : (
              lastMessage.text
            )
          ) : (
            <BsFillImageFill size={16} />
          )}
        </Text>
      </Stack>
    </Flex>
  );
};

export default Conversation;
