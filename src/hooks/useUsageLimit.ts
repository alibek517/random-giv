import { useState, useEffect } from "react";

const STORAGE_KEY = "giveaway_usage_limit";

interface UsageData {
  deviceId: string;
  usedAt: string;
  hasUsed: boolean;
}

// Generate a simple device fingerprint
const generateDeviceId = (): string => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  ctx?.fillText("fingerprint", 10, 10);
  
  const fingerprint = [
    navigator.userAgent,
    navigator.language,
    screen.width,
    screen.height,
    screen.colorDepth,
    new Date().getTimezoneOffset(),
    canvas.toDataURL(),
  ].join("|");
  
  // Simple hash function
  let hash = 0;
  for (let i = 0; i < fingerprint.length; i++) {
    const char = fingerprint.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  
  return Math.abs(hash).toString(36);
};

export const useUsageLimit = () => {
  const [hasUsed, setHasUsed] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [deviceId, setDeviceId] = useState<string>("");

  useEffect(() => {
    const id = generateDeviceId();
    setDeviceId(id);
    
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const data: UsageData = JSON.parse(stored);
        if (data.deviceId === id && data.hasUsed) {
          setHasUsed(true);
        }
      }
    } catch (error) {
      console.error("Error reading usage data:", error);
    }
    
    setIsLoading(false);
  }, []);

  const markAsUsed = () => {
    const data: UsageData = {
      deviceId,
      usedAt: new Date().toISOString(),
      hasUsed: true,
    };
    
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      setHasUsed(true);
    } catch (error) {
      console.error("Error saving usage data:", error);
    }
  };

  const resetUsage = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
      setHasUsed(false);
    } catch (error) {
      console.error("Error resetting usage data:", error);
    }
  };

  return {
    hasUsed,
    isLoading,
    markAsUsed,
    resetUsage,
  };
};
