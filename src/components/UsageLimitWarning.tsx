import { motion } from "framer-motion";
import { AlertTriangle, RefreshCw } from "lucide-react";

interface UsageLimitWarningProps {
  onReset?: () => void;
}

const UsageLimitWarning = ({ onReset }: UsageLimitWarningProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto text-center"
    >
      <div className="glass-card rounded-2xl p-8 glow-effect">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, hsl(45 100% 50%) 0%, hsl(25 95% 53%) 100%)",
          }}
        >
          <AlertTriangle className="w-10 h-10 text-white" />
        </motion.div>

        <h2 className="text-2xl font-bold text-foreground mb-3">
          Limit tugadi! 🚫
        </h2>
        
        <p className="text-muted-foreground mb-2">
          Siz allaqachon 1 marta foydalangansiz.
        </p>
        <p className="text-muted-foreground text-sm mb-6">
          Har bir foydalanuvchi faqat <span className="text-primary font-semibold">1 marta</span> video yuklashi mumkin.
        </p>

        <div className="p-4 rounded-xl bg-secondary/50 border border-border mb-6">
          <p className="text-sm text-muted-foreground">
            ⚠️ Bu cheklov adolatli tanlovni ta'minlash uchun qo'yilgan.
          </p>
        </div>

        {onReset && (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onReset}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary hover:bg-secondary/80 text-foreground transition-all"
          >
            <RefreshCw className="w-4 h-4" />
            Qayta urinish (Demo)
          </motion.button>
        )}
      </div>

      <p className="text-center text-muted-foreground text-xs mt-6">
        Savollar bo'lsa admin bilan bog'laning
      </p>
    </motion.div>
  );
};

export default UsageLimitWarning;
