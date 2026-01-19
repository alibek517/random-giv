import { motion } from "framer-motion";
import { Info } from "lucide-react";

const UsageLimitNotice = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.4 }}
      className="flex items-start gap-3 p-4 rounded-xl bg-primary/10 border border-primary/20 mt-4"
    >
      <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
      <p className="text-sm text-foreground">
        ⚠️ One upload per user only.
      </p>
    </motion.div>
  );
};

export default UsageLimitNotice;
