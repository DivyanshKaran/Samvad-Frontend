import { ChatMessageList } from "@/components/ui/chat/chat-message-list";
import {
  ChatBubble,
  ChatBubbleAvatar,
  ChatBubbleMessage,
} from "@/components/ui/chat/chat-bubble";
import { ChatInput } from "@/components/ui/chat/chat-input";
import { Button } from "@/components/ui/Button";
import { CornerDownLeft } from "lucide-react";
export default function Chat() {
  return (
    <>
      <ChatMessageList>
        <ChatBubble>
          <ChatBubbleAvatar />
          <ChatBubbleMessage>Message and other content here</ChatBubbleMessage>
        </ChatBubble>
      </ChatMessageList>
      <ChatMessageList>
        <ChatBubble>
          <ChatBubbleMessage>is this by me or you?</ChatBubbleMessage>
          <ChatBubbleAvatar />
        </ChatBubble>
      </ChatMessageList>
      <div className="flex-1" />
      <ChatInput placeholder="Type your message here..." />
      <Button size="sm" className="ml-auto gap-1.5">
        Send Message
        <CornerDownLeft className="size-3.5" />
      </Button>
    </>
  );
}
