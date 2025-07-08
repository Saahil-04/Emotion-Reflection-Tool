"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/toggle";


export default function Home() {
  
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ emotion: string; confidence: number } | null>(null);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    setResult(null);
    setError("");
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/analyze`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      if (!res.ok) throw new Error("API Error");
      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.log("Error",err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-2 sm:px-4 bg-[var(--background)] text-[var(--foreground)] transition-colors"
      style={{ fontFamily: "var(--font-sans)" }}
    >
      <div className="w-full max-w-md flex flex-col items-center gap-6">
        <div className="w-full flex justify-end pt-4">
          <ThemeToggle />
        </div>
        <motion.div
          className="rounded-3xl shadow-xl p-6 sm:p-8 w-full space-y-6 bg-[var(--background)] border border-[var(--border)] backdrop-blur-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-2 tracking-tight">
            Emotion Reflection Tool
          </h1>
          <p className="text-center text-base text-gray-500 dark:text-gray-400 mb-2">
            Reflect on your feelings. Get instant feedback.
          </p>
          <textarea
            className="w-full p-4 rounded-2xl border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] focus:ring-2 focus:ring-[var(--accent)] focus:outline-none text-base resize-none shadow-inner transition"
            rows={4}
            placeholder="How are you feeling today?"
            value={text}
            onChange={(e) => setText(e.target.value)}
            maxLength={300}
            aria-label="Describe your feelings"
          />
          <button
            onClick={handleSubmit}
            className="w-full py-3 rounded-2xl font-semibold text-lg bg-[var(--accent)] text-[var(--accent-foreground)] shadow-md hover:scale-[1.02] active:scale-100 transition-all duration-150 disabled:opacity-60 disabled:cursor-not-allowed"
            disabled={loading || !text}
            style={{
              opacity: loading || !text ? 0.6 : 1,
            }}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5 text-[var(--accent-foreground)]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                </svg>
                Reflecting...
              </span>
            ) : (
              "Reflect"
            )}
          </button>

          <div className="min-h-[56px]">

            {loading && (
              <motion.div
                key="loader"
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeInOut" } }}
                exit={{ opacity: 0, y: -4, transition: { duration: 0.2, ease: "easeInOut" } }}
                className="p-4 rounded-xl text-center animate-pulse bg-[var(--background)] border border-[var(--border)] mt-2"
              >
                <div className="h-6 bg-gray-300 dark:bg-gray-500 rounded w-2/3 mx-auto mb-2"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-1/3 mx-auto"></div>
              </motion.div>
            )}

            <AnimatePresence>
              {!loading && result && (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeInOut" } }}
                  exit={{ opacity: 0, y: 10, transition: { duration: 0.2, ease: "easeInOut" } }}
                  className="p-4 rounded-xl text-center bg-[var(--background)] border border-[var(--border)] mt-2"
                >
                  <p className="text-2xl font-bold mb-1">{result.emotion}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Confidence: {Math.round(result.confidence * 100)}%
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
            {error && (
              <motion.p
                className="text-red-500 text-center mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {error}
              </motion.p>
            )}
          </div>
          <div className="flex justify-end text-xs text-gray-400 pt-2">
            {text.length}/300
          </div>
        </motion.div>
      </div>
      <footer className="w-full text-center text-xs text-gray-400 mt-8 mb-2">
        &copy; {new Date().getFullYear()} Emotion Reflection Tool
      </footer>
    </div>
  );
}