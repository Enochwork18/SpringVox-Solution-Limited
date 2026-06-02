"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { trackCTAClick } from "@/lib/analytics";

interface Props {
  onOpenWaitlist?: () => void;
}

export default function ReKallIQPopup({ onOpenWaitlist }: Props) {
  const [visible, setVisible] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(60);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setVisible(true);
    }, 5000);

    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (!visible) return;

    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setVisible(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [visible]);

  const dismiss = () => setVisible(false);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeIn" }}
          className="fixed bottom-4 left-4 z-50 w-[calc(100vw-2rem)] max-w-xs sm:bottom-6 sm:left-6"
          role="alert"
          aria-live="polite"
        >
          <motion.div
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="rounded-xl p-4"
            style={{
              background: "rgba(1, 66, 76, 0.95)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(2, 153, 177, 0.35)",
              boxShadow:
                "0 8px 32px rgba(2, 153, 177, 0.15), 0 2px 8px rgba(0,0,0,0.4)",
            }}
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="bg-[#0299b1] text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                  NEW
                </span>
                <span className="text-[10px] text-gray-400 font-mono">
                  {Math.floor(secondsLeft / 60)}:
                  {String(secondsLeft % 60).padStart(2, "0")}
                </span>
              </div>
              <button
                onClick={dismiss}
                className="text-gray-500 hover:text-white transition-colors ml-auto pl-2"
                aria-label="Dismiss notification"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <p className="text-white font-semibold text-base mb-1">
              Introducing ReKallIQ
            </p>
            <p className="text-gray-400 text-sm mb-3">
              AI-powered enterprise knowledge - now accepting pilot
              organisations.
            </p>

            <div className="flex items-center gap-3 flex-wrap">
              <a
                href="https://springvox-knowledge-ai.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackCTAClick("Explore ReKallIQ", "popup")}
                className="bg-[#0299b1] text-white text-sm px-3 py-1.5 rounded-md font-medium hover:bg-[#027a8e] transition-colors"
              >
                Explore ReKallIQ
              </a>
              <button
                onClick={() => {
                  trackCTAClick("Join Waitlist", "popup");
                  dismiss();
                  onOpenWaitlist?.();
                }}
                className="text-[#0299b1] text-sm underline-offset-2 hover:underline"
              >
                Join Waitlist
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
