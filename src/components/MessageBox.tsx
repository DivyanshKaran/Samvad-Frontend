import { ChatMessageList } from "@/components/ui/chat/chat-message-list";
import {
  ChatBubble,
  ChatBubbleAvatar,
  ChatBubbleMessage,
} from "@/components/ui/chat/chat-bubble";
import { ChatInput } from "@/components/ui/chat/chat-input";
import { Button } from "@/components/ui/Button";
import { CornerDownLeft } from "lucide-react";

interface UserMessageProps {
  message: string;
  imageSrc: string;
}

interface FriendMessageProps {
  message: string;
  imageSrc: string;
}

function UserMessage({ message, imageSrc }: UserMessageProps) {
  return (
    <ChatBubble className="self-start">
      <ChatBubbleMessage>{message}</ChatBubbleMessage>
      <ChatBubbleAvatar src={imageSrc} />
    </ChatBubble>
  );
}

function FriendMessage({ message, imageSrc }: FriendMessageProps) {
  return (
    <ChatBubble className="self-end">
      <ChatBubbleAvatar src={imageSrc} />
      <ChatBubbleMessage>{message}</ChatBubbleMessage>
    </ChatBubble>
  );
}

const message = [
  {
    username: "akshat11sri",
    message: "",
    imagesrc: "./akshat.jpg",
  },
  {
    username: "akshat11sri",
    message: "MacDeMarco is best",
    imagesrc: "./akshat.jpg",
  },
  {
    username: "akshat11sri",
    message: "MacDeMarco is best",
    imagesrc: "./akshat.jpg",
  },
  {
    username: "akshat11sri",
    message: "MacDeMarco is best",
    imagesrc: "./akshat.jpg",
  },
  {
    username: "akshat11sri",
    message: "MacDeMarco is best",
    imagesrc: "./akshat.jpg",
  },
];

export default function MessageBox() {
  return (
    <>
      <ChatMessageList></ChatMessageList>
      <div className="flex-1" />
      <ChatInput placeholder="Type your message here..." />
      <Button size="sm" className="ml-auto gap-1.5">
        Send Message
        <CornerDownLeft className="size-3.5" />
      </Button>
    </>
  );
}
