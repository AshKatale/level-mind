"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Send, Plus, History } from "lucide-react";
import axios from "axios";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return; // Prevent sending empty input

    // Add user message to the chat
    setMessages((prevMessages) => [
      ...prevMessages,
      { id: Date.now(), content: input, isUser: true },
    ]);

    try {
      // Make the API request
      const response = await axios.post("/api/langflow", {
        inputValue: input,
      });

      // Log the raw response for debugging
      console.log("API Response:", response);

      // Extract AI response
      const aiMessage =
        response.data?.outputs?.[0]?.outputs?.[0]?.text ||
        "No response from AI";

      // Add AI response to the chat
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: Date.now() + 1, content: aiMessage, isUser: false },
      ]);
    } catch (error) {
      console.error("Error during API call:", error);

      // Add an error message to the chat
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          id: Date.now() + 1,
          content: "Something went wrong. Please try again.",
          isUser: false,
        },
      ]);
    } finally {
      // Clear the input field
      setInput("");
    }
  };

  return (
    <div className="flex h-min bg-background dark text-white pt-16">
      {/* Sidebar */}
      <div className="w-64 border-r border-border bg-card">
        <div className="p-4">
          <Button className="w-full justify-start gap-2" variant="secondary">
            <Plus size={16} />
            New Chat
          </Button>
        </div>

        <ScrollArea className="h-[calc(100vh-8rem)]">
          <div className="space-y-2 p-4">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <History size={16} />
              Recent Chats
            </Button>

            <Separator className="my-4" />
          </div>
        </ScrollArea>
      </div>

      {/* Chat Area */}
      <div className="flex flex-1 flex-col bg-background">
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.isUser ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`rounded-lg px-4 py-2 max-w-[80%] ${
                    message.isUser
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {messages.length === 0 && (
              <div className="text-center text-muted-foreground">
                <p>No messages yet. Start a conversation!</p>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Input Area */}
        <div className="border-t border-border p-4 bg-card">
          <div className="flex gap-2">
            <Input
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1"
            />
            <Button onClick={handleSend}>
              <Send size={16} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
