import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Filter, Trophy } from "lucide-react";

interface LoadingAnimationProps {
  onComplete: () => void;
}

const loadingSteps = [
  { icon: Users, text: "Loading comments...", duration: 2000 },
  { icon: Filter, text: "Filtering duplicates...", duration: 1500 },
  { icon: Trophy, text: "Selecting winner...", duration: 1500 },
];

const LoadingAnimation = ({ onComplete }: LoadingAnimationProps) => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);
  const targetCount = 322884;

  useEffect(() => {
    // Count animation
    const duration = 3000;
    const steps = 60;
    const increment = targetCount / steps;
    let current = 0;

    const countInterval = setInterval(() => {
      current += increment;
      if (current >= targetCount) {
        setCount(targetCount);
        clearInterval(countInterval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    // Step changes
    const stepTimeouts: NodeJS.Timeout[] = [];
    let accumulatedTime = 0;
    
    loadingSteps.forEach((s, i) => {
      if (i > 0) {
        accumulatedTime += loadingSteps[i - 1].duration;
        stepTimeouts.push(
          setTimeout(() => setStep(i), accumulatedTime)
        );
      }
    });

    // Complete after all steps
    const totalDuration = loadingSteps.reduce((acc, s) => acc + s.duration, 0);
    const completeTimeout = setTimeout(onComplete, totalDuration);

    return () => {
      clearInterval(countInterval);
      stepTimeouts.forEach(clearTimeout);
      clearTimeout(completeTimeout);
    };
  }, [onComplete]);

  const CurrentIcon = loadingSteps[step].icon;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full max-w-md mx-auto text-center"
    >
      <div className="glass-card rounded-3xl p-8 glow-effect">
        {/* Spinning circle */}
        <div className="relative w-32 h-32 mx-auto mb-8">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full"
            style={{
              background: "linear-gradient(135deg, hsl(330 80% 60%) 0%, hsl(25 95% 53%) 50%, hsl(280 70% 50%) 100%)",
              padding: "3px",
            }}
          >
            <div className="w-full h-full rounded-full bg-card" />
          </motion.div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <CurrentIcon className="w-12 h-12 text-primary" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Counter */}
        <motion.div
          key={count}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          className="text-4xl font-bold gradient-text mb-2"
        >
          {count.toLocaleString()}
        </motion.div>
        <p className="text-muted-foreground mb-6">comments found</p>

        {/* Loading step text */}
        <AnimatePresence mode="wait">
          <motion.p
            key={step}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-lg font-medium text-foreground"
          >
            {loadingSteps[step].text}
          </motion.p>
        </AnimatePresence>

        {/* Progress dots */}
        <div className="flex justify-center gap-2 mt-6">
          {loadingSteps.map((_, i) => (
            <motion.div
              key={i}
              animate={{
                scale: i === step ? 1.2 : 1,
                opacity: i <= step ? 1 : 0.3,
              }}
              className="w-2 h-2 rounded-full"
              style={{
                background: i <= step
                  ? "linear-gradient(135deg, hsl(330 80% 60%), hsl(25 95% 53%))"
                  : "hsl(var(--muted))",
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingAnimation;
