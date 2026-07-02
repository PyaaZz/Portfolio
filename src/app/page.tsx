"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 overflow-hidden relative">
      {/* Background crazy gradient */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-30 blur-[100px]"
        animate={{
          background: [
            "radial-gradient(circle at 50% 50%, #3b82f6, transparent 50%)",
            "radial-gradient(circle at 20% 80%, #8b5cf6, transparent 50%)",
            "radial-gradient(circle at 80% 20%, #10b981, transparent 50%)",
            "radial-gradient(circle at 50% 50%, #3b82f6, transparent 50%)",
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      <div className="z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ scale: 0.5, opacity: 0, rotateY: 180 }}
          animate={{ scale: 1, opacity: 1, rotateY: 0 }}
          transition={{ duration: 1.5, type: "spring", bounce: 0.4 }}
          className="mb-8"
        >
          <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 p-1">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center border-4 border-transparent overflow-hidden relative group">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-full h-full bg-muted flex items-center justify-center text-4xl font-bold"
              >
                G
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.h1 
          className="text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
        >
          Hi, I'm Granthik.
        </motion.h1>

        <motion.p 
          className="text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          A Full-Stack Developer specializing in building high-performance AI tools and scalable web infrastructure.
        </motion.p>

        <motion.div 
          className="flex items-center justify-center gap-6"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, type: "spring" }}
        >
          {[
            { icon: <Github size={28} />, href: "https://github.com/PyaaZz" },
            { icon: <Linkedin size={28} />, href: "#" },
            { icon: <Mail size={28} />, href: "mailto:hello@example.com" },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              className="p-4 rounded-full bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-colors border border-border"
              whileHover={{ 
                scale: 1.2, 
                rotate: [0, -10, 10, -10, 0],
                boxShadow: "0 0 20px rgba(139, 92, 246, 0.5)"
              }}
              whileTap={{ scale: 0.9 }}
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-12 text-muted-foreground"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.div>
    </main>
  );
}
