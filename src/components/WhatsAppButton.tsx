import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phone = "231887303826";
  const message = encodeURIComponent("Hello Alphez Digital Solutions! I'd like to learn more about your services.");
  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ebe57] flex items-center justify-center shadow-[0_8px_32px_hsl(142_70%_45%_/_0.45)] hover:scale-110 transition-all duration-300 group"
    >
      <MessageCircle className="w-7 h-7 text-white" />
      <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-card border border-border text-xs font-medium text-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat with us
      </span>
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
    </a>
  );
};

export default WhatsAppButton;
