import { motion } from "framer-motion";
import { Play, Heart, MessageCircle, Send, Bookmark } from "lucide-react";

interface VideoPreviewProps {
  onStart: () => void;
}

const VideoPreview = ({ onStart }: VideoPreviewProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto"
    >
      <div className="glass-card rounded-3xl overflow-hidden glow-effect">
        {/* Video Container */}
        <div className="relative aspect-[9/16] bg-gradient-to-br from-secondary to-card">
          {/* Fake video content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <Play className="w-16 h-16 text-foreground/50 ml-2" />
            </div>
          </div>

          {/* Instagram UI overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/80 to-transparent">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent" />
              <div>
                <p className="text-sm font-semibold">giveaway_official</p>
                <p className="text-xs text-muted-foreground">Sponsored</p>
              </div>
            </div>
            <p className="text-sm text-foreground/80 line-clamp-2">
              🎁 HUGE GIVEAWAY! Comment below to enter... 
              <span className="text-primary">#giveaway</span>
            </p>
          </div>

          {/* Side actions */}
          <div className="absolute right-4 bottom-24 flex flex-col gap-6">
            <div className="flex flex-col items-center">
              <Heart className="w-7 h-7" />
              <span className="text-xs mt-1">128K</span>
            </div>
            <div className="flex flex-col items-center">
              <MessageCircle className="w-7 h-7" />
              <span className="text-xs mt-1">322K</span>
            </div>
            <div className="flex flex-col items-center">
              <Send className="w-7 h-7" />
            </div>
            <div className="flex flex-col items-center">
              <Bookmark className="w-7 h-7" />
            </div>
          </div>
        </div>

        {/* GO Button */}
        <div className="p-6">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onStart}
            className="w-full py-4 rounded-xl font-bold text-xl text-primary-foreground animate-pulse-glow"
            style={{
              background: "linear-gradient(135deg, hsl(330 80% 60%) 0%, hsl(25 95% 53%) 50%, hsl(280 70% 50%) 100%)",
            }}
          >
            GO
          </motion.button>
          <p className="text-center text-muted-foreground text-sm mt-3">
            Click to pick a random winner
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoPreview;
