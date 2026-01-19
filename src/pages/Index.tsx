import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import UrlInput from "@/components/UrlInput";
import VideoPreview from "@/components/VideoPreview";
import LoadingAnimation from "@/components/LoadingAnimation";
import MysteryBox from "@/components/MysteryBox";
import WinnerCard from "@/components/WinnerCard";

type AppState = "input" | "preview" | "loading" | "mystery" | "winner";

const Index = () => {
  const [state, setState] = useState<AppState>("input");

  const handleUrlSubmit = useCallback(() => {
    setState("preview");
  }, []);

  const handleStart = useCallback(() => {
    setState("loading");
  }, []);

  const handleLoadingComplete = useCallback(() => {
    setState("mystery");
  }, []);

  const handleBoxOpen = useCallback(() => {
    setState("winner");
  }, []);

  const handleReset = useCallback(() => {
    setState("input");
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: "hsl(330 80% 60%)" }}
        />
        <div 
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: "hsl(280 70% 50%)" }}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl"
          style={{ background: "hsl(25 95% 53%)" }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <main className="relative z-10 container mx-auto px-4 py-12 min-h-screen flex items-center justify-center">
        <AnimatePresence mode="wait">
          {state === "input" && (
            <motion.div
              key="input"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <UrlInput onSubmit={handleUrlSubmit} />
            </motion.div>
          )}

          {state === "preview" && (
            <motion.div
              key="preview"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <VideoPreview onStart={handleStart} />
            </motion.div>
          )}

          {state === "loading" && (
            <motion.div
              key="loading"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <LoadingAnimation onComplete={handleLoadingComplete} />
            </motion.div>
          )}

          {state === "mystery" && (
            <motion.div
              key="mystery"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0, rotate: 180 }}
              transition={{ duration: 0.5 }}
            >
              <MysteryBox onOpen={handleBoxOpen} />
            </motion.div>
          )}

          {state === "winner" && (
            <motion.div
              key="winner"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <WinnerCard onReset={handleReset} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-4 left-0 right-0 text-center z-10">
        <p className="text-muted-foreground text-sm">
          Demo Project • Not affiliated with Instagram
        </p>
      </footer>
    </div>
  );
};

export default Index;
