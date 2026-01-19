import { useState } from "react";
import { motion } from "framer-motion";
import { Link, Sparkles } from "lucide-react";

interface UrlInputProps {
  onSubmit: (url: string) => void;
}

const UrlInput = ({ onSubmit }: UrlInputProps) => {
  const [url, setUrl] = useState("");

  const handleSubmit = () => {
    if (url.trim()) {
      onSubmit(url);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-w-xl mx-auto"
    >
      <div className="text-center mb-8">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">Random Comment Picker</span>
        </motion.div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-text">Instagram</span>{" "}
          <span className="text-foreground">Giveaway</span>
        </h1>
        <p className="text-muted-foreground text-lg">
          Pick a random winner from your Instagram Reel comments
        </p>
      </div>

      <div className="glass-card rounded-2xl p-6 glow-effect">
        <div className="relative">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Link className="w-5 h-5 text-muted-foreground" />
          </div>
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste Instagram Reel URL"
            className="w-full bg-secondary/50 border border-border rounded-xl py-4 pl-12 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleSubmit}
          disabled={!url.trim()}
          className="w-full mt-4 py-4 rounded-xl font-semibold text-primary-foreground transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            background: url.trim()
              ? "linear-gradient(135deg, hsl(330 80% 60%) 0%, hsl(25 95% 53%) 50%, hsl(280 70% 50%) 100%)"
              : "hsl(var(--secondary))",
          }}
        >
          Upload Video
        </motion.button>
      </div>

      <p className="text-center text-muted-foreground text-sm mt-6">
        🔒 Demo project • No real data is collected
      </p>
    </motion.div>
  );
};

export default UrlInput;
