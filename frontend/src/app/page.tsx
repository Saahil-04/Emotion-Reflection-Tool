"use client";

import { ThemeToggle } from "@/components/toggle";
import { EmotionReflector } from "@/components/EmotionReflector";

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-2 sm:px-4 bg-[var(--background)] text-[var(--foreground)] transition-colors"
      style={{ fontFamily: "var(--font-sans)" }}
    >
      <div className="w-full max-w-md flex flex-col items-center gap-6">
        <div className="w-full flex justify-end pt-4">
          <ThemeToggle />
        </div>
        <EmotionReflector />
      </div>
      <footer className="w-full text-center text-xs text-gray-400 mt-8 mb-2">
        &copy; {new Date().getFullYear()} Emotion Reflection Tool
      </footer>
    </div>
  );
}