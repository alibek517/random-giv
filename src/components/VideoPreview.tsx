import { motion } from "framer-motion";
import { Play, Heart, MessageCircle, Send, Bookmark, Repeat } from "lucide-react";

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
        <div className="relative aspect-[9/16]">
          <img
            src="/oblojkarasm.jpg"
            alt="Video oblojkasi"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-card/50" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shadow-2xl">
              <Play className="w-16 h-16 text-foreground/70 ml-2" />
            </div>
          </div>

          {/* Instagram UI overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent ring-2 ring-white/20" />
              <div>
                <p className="text-sm font-semibold text-white drop-shadow-md">
                  aminov_moto_official
                </p>
              </div>
            </div>
            <p className="text-sm text-foreground/90 line-clamp-2 drop-shadow-md">
              Eng yangi motolar va aksessuarlar! 🔥 Tezlik va uslub bir joyda!
            </p>
          </div>

          {/* Side actions - kattalashtirilgan */}
          <div className="absolute right-5 bottom-28 flex flex-col gap-8">
            <div className="flex flex-col items-center text-white drop-shadow-lg">
              <Heart className="w-9 h-9 mb-1" />
              <span className="text-sm font-semibold">14.7K</span>
            </div>
            <div className="flex flex-col items-center text-white drop-shadow-lg">
              <MessageCircle className="w-9 h-9 mb-1" />
              <span className="text-sm font-semibold">322K</span>
            </div>
            <div className="flex flex-col items-center text-white drop-shadow-lg">
              <Repeat className="w-9 h-9 mb-1" />
              <span className="text-sm font-semibold">2.3K</span>
            </div>
            <div className="flex flex-col items-center text-white drop-shadow-lg">
              <Send className="w-9 h-9 mb-1" />
              <span className="text-sm font-semibold">56.6K</span>
            </div>
            <div className="flex flex-col items-center text-white drop-shadow-lg">
              <Bookmark className="w-9 h-9 mb-1" />
              <span className="text-sm font-semibold">403</span>
            </div>
          </div>
        </div>

        {/* GO Button */}
        <div className="p-6">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onStart}
            className="w-full py-4 rounded-xl font-bold text-xl text-primary-foreground animate-pulse-glow shadow-2xl"
            style={{
              background:
                "linear-gradient(135deg, hsl(330 80% 60%) 0%, hsl(25 95% 53%) 50%, hsl(280 70% 50%) 100%)",
            }}
          >
            GO
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoPreview;