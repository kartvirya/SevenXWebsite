import { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { apiRequest } from '@/lib/queryClient';
import { MessageSquare, X, Loader2, ChevronDown, Send } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Initial welcome message
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          text: "Hi there! 👋 I'm the 7xSolution AI assistant. How can I help you with your digital marketing or IT needs today?",
          isUser: false,
          timestamp: new Date()
        }
      ]);
    }
  }, []);

  // Auto-scroll to the bottom of the messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || isLoading) return;

    // Add user message to chat
    const userMessage = {
      text: message,
      isUser: true,
      timestamp: new Date()
    };
    setMessages((prev) => [...prev, userMessage]);
    setMessage('');
    setIsLoading(true);

    try {
      // Send request to chatbot API
      const response = await apiRequest({
        url: '/api/chatbot',
        method: 'POST',
        body: { message: message.trim() }
      });

      if (response && typeof response === 'object' && 'reply' in response) {
        // Add bot response to chat
        setMessages((prev) => [
          ...prev,
          {
            text: response.reply as string,
            isUser: false,
            timestamp: new Date()
          }
        ]);
      } else {
        throw new Error('Failed to get a valid response');
      }
    } catch (error) {
      console.error('Error getting chatbot response:', error);
      // Add error message
      setMessages((prev) => [
        ...prev,
        {
          text: "I'm sorry, I'm having trouble connecting right now. Please try again later or contact our team directly.",
          isUser: false,
          timestamp: new Date()
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  // Format timestamp
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Chatbot Button */}
      <Button 
        onClick={() => setIsOpen(!isOpen)} 
        className="fixed bottom-4 right-4 z-50 rounded-full p-3 shadow-lg bg-[#6FCFAB] hover:bg-[#6FCFAB]/90 text-black"
        aria-label="Open chat"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </Button>

      {/* Chatbot Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed bottom-20 right-4 z-50 w-[350px] h-[500px] bg-white rounded-lg shadow-xl flex flex-col border border-gray-200"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {/* Header */}
            <div className="bg-[#6FCFAB] text-black px-4 py-3 rounded-t-lg flex justify-between items-center">
              <div className="flex items-center gap-2">
                <MessageSquare size={20} />
                <h3 className="font-bold">7xSolution Assistant</h3>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 rounded-full hover:bg-[#6FCFAB]/20 text-black"
              >
                <ChevronDown size={18} />
              </Button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
              {messages.map((msg, index) => (
                <div 
                  key={index} 
                  className={`mb-4 max-w-[85%] ${msg.isUser ? 'ml-auto' : 'mr-auto'}`}
                >
                  <div 
                    className={`rounded-lg p-3 ${
                      msg.isUser ? 'bg-[#6FCFAB] text-black' : 'bg-gray-200 text-gray-800'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                  </div>
                  <div className={`text-xs text-gray-500 mt-1 ${msg.isUser ? 'text-right' : 'text-left'}`}>
                    {formatTime(msg.timestamp)}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="mb-4 max-w-[85%] mr-auto">
                  <div className="rounded-lg p-3 bg-gray-200 text-gray-800">
                    <div className="flex items-center">
                      <Loader2 size={16} className="animate-spin mr-2" />
                      <p className="text-sm">Thinking...</p>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSubmit} className="p-3 border-t border-gray-200 bg-white rounded-b-lg">
              <div className="relative">
                <Textarea
                  ref={inputRef}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message..."
                  className="resize-none pr-10 min-h-[60px] max-h-[120px] text-sm"
                  disabled={isLoading}
                />
                <Button 
                  type="submit" 
                  size="icon"
                  disabled={isLoading || !message.trim()}
                  className="absolute right-2 bottom-2 h-8 w-8 bg-[#6FCFAB] hover:bg-[#6FCFAB]/90 text-black"
                >
                  <Send size={16} />
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                This AI assistant is powered by Hugging Face.
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}