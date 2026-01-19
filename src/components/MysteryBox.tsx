import { motion } from "framer-motion";
import { Gift } from "lucide-react";

interface MysteryBoxProps {
  onOpen: () => void;
}

const MysteryBox = ({ onOpen }: MysteryBoxProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        type: "spring",
        stiffness: 200,
        damping: 15 
      }}
      className="text-center"
    >
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-xl font-semibold mb-8"
      >
        🎉 Winner selected!{" "}
        <span className="text-muted-foreground">Tap the box to reveal</span>
      </motion.p>

      <motion.button
        onClick={onOpen}
        whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
        whileTap={{ scale: 0.95 }}
        className="relative group"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity"
          style={{
            background: "linear-gradient(135deg, hsl(330 80% 60%), hsl(25 95% 53%))",
          }}
        />

        {/* Box */}
        <motion.div
          animate={{ 
            y: [0, -8, 0],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative glass-card rounded-3xl p-12 cursor-pointer"
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 animate-shimmer" />
          </div>

          <div 
            className="w-24 h-24 mx-auto rounded-2xl flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, hsl(330 80% 60%) 0%, hsl(25 95% 53%) 50%, hsl(280 70% 50%) 100%)",
            }}
          >
            <Gift className="w-12 h-12 text-white" />
          </div>

          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="mt-6 text-muted-foreground"
          >
            Tap to open
          </motion.div>
        </motion.div>

        {/* Sparkles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: "linear-gradient(135deg, hsl(330 80% 60%), hsl(25 95% 53%))",
              top: `${20 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </motion.button>
    </motion.div>
  );
};

export default MysteryBox;
