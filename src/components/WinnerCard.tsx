import { motion } from "framer-motion";
import { BadgeCheck, Trophy, PartyPopper, RotateCcw } from "lucide-react";

interface WinnerCardProps {
  onReset: () => void;
}

const WinnerCard = ({ onReset }: WinnerCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ 
        type: "spring",
        stiffness: 150,
        damping: 15,
        duration: 0.8
      }}
      className="text-center"
    >
      {/* Confetti effect */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3"
            style={{
              left: `${Math.random() * 100}%`,
              top: -20,
              background: [
                "hsl(330 80% 60%)",
                "hsl(25 95% 53%)",
                "hsl(280 70% 50%)",
                "hsl(45 100% 60%)",
              ][i % 4],
              borderRadius: Math.random() > 0.5 ? "50%" : "0",
            }}
            animate={{
              y: [0, window.innerHeight + 50],
              x: [0, (Math.random() - 0.5) * 200],
              rotate: [0, Math.random() * 360],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              delay: Math.random() * 0.5,
              repeat: Infinity,
              ease: "easeIn",
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, type: "spring" }}
        className="flex items-center justify-center gap-2 mb-6"
      >
        <PartyPopper className="w-8 h-8 text-primary" />
        <span className="text-2xl font-bold">WINNER</span>
        <PartyPopper className="w-8 h-8 text-accent" />
      </motion.div>

      {/* Winner card */}
      <motion.div
        className="glass-card rounded-3xl p-8 glow-effect max-w-sm mx-auto"
        animate={{
          boxShadow: [
            "0 0 30px hsl(330 80% 60% / 0.3)",
            "0 0 60px hsl(330 80% 60% / 0.5)",
            "0 0 30px hsl(330 80% 60% / 0.3)",
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {/* Trophy badge */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
          className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, hsl(45 100% 50%), hsl(25 95% 53%))",
          }}
        >
          <Trophy className="w-6 h-6 text-white" />
        </motion.div>

        {/* Profile image */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
          className="relative w-28 h-28 mx-auto mb-6"
        >
          <div 
            className="absolute inset-0 rounded-full p-[3px]"
            style={{
              background: "linear-gradient(135deg, hsl(330 80% 60%) 0%, hsl(25 95% 53%) 50%, hsl(280 70% 50%) 100%)",
            }}
          >
            <div className="w-full h-full rounded-full overflow-hidden">
              <img
                src="/photo_2026-01-19_23-04-40.jpg"
                alt="Winner avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Username with badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-center gap-2 mb-4"
        >
          <span className="text-2xl font-bold">kom1lboyevv_</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-muted-foreground"
        >
          Selected from 322,884 comments
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-border"
        >
          <div>
            <p className="text-xl font-bold gradient-text">19</p>
            <p className="text-xs text-muted-foreground">posts</p>
          </div>
          <div>
            <p className="text-xl font-bold gradient-text">1 706</p>
            <p className="text-xs text-muted-foreground">followers</p>
          </div>
          <div>
            <p className="text-xl font-bold gradient-text">840</p>
            <p className="text-xs text-muted-foreground">following</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Reset button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onReset}
        className="mt-8 px-8 py-3 rounded-xl font-semibold text-foreground glass-card inline-flex items-center gap-2 hover:bg-secondary/50 transition-colors"
      >
        <RotateCcw className="w-4 h-4" />
        Pick Another Winner
      </motion.button>
    </motion.div>
  );
};

export default WinnerCard;
