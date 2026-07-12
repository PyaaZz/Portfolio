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

      {/* About Section */}
      <section className="min-h-screen w-full flex items-center justify-center py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-6 w-full">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl font-bold mb-12 border-b border-border pb-4"
          >
            About Me
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary overflow-hidden border border-border flex items-center justify-center"
            >
              {/* Placeholder for an actual photo or abstract graphic */}
              <div className="text-muted-foreground/50 text-6xl font-bold font-mono tracking-tighter mix-blend-overlay">
                {'< CODE />'}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-6 text-lg text-muted-foreground"
            >
              <p>
                I build things for the web. Whether it's a scalable API gateway handling thousands of requests, or a pixel-perfect user interface with smooth animations, I love the entire stack.
              </p>
              <p>
                Currently exploring the intersection of AI and traditional software engineering. When I'm not writing code, you can probably find me tinkering with server homelabs or optimizing workflows.
              </p>
              <div className="pt-6 grid grid-cols-2 gap-4">
                {[
                  "TypeScript", "Python", "React / Next.js", "FastAPI", "Redis / Qdrant", "Docker"
                ].map((skill, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="text-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="min-h-screen w-full py-24 relative z-10 bg-secondary/20">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-16 text-center"
          >
            Selected Work
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "AI API Gateway",
                desc: "Smart LLM router with semantic caching using Qdrant and Redis. Slashes API costs by serving cached embeddings.",
                tags: ["Python", "FastAPI", "Redis", "Qdrant", "Docker"],
                color: "from-blue-500 to-cyan-400"
              },
              {
                title: "Support Ticketing App",
                desc: "Full-stack customer support platform with real-time updates and an automated categorization engine.",
                tags: ["Next.js", "Tailwind", "PostgreSQL", "Prisma"],
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "Resume Parser CLI",
                desc: "A command-line tool that extracts and structures data from PDF resumes using OCR and NLP.",
                tags: ["Go", "CLI", "NLP"],
                color: "from-emerald-400 to-cyan-400"
              },
              {
                title: "Personal Portfolio",
                desc: "You're looking at it! Built with Next.js App Router, Tailwind CSS, and Framer Motion.",
                tags: ["React", "Framer Motion", "Tailwind"],
                color: "from-orange-400 to-rose-400"
              }
            ].map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="group rounded-2xl border border-border bg-card p-6 overflow-hidden relative cursor-pointer"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.color} rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-6 line-clamp-3">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-secondary text-secondary-foreground border border-border">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="min-h-[50vh] w-full flex items-center justify-center py-24 relative z-10">
        <div className="max-w-3xl mx-auto px-6 w-full text-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-5xl font-black mb-6"
          >
            Let's build something.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground mb-10"
          >
            I'm currently open for new opportunities. Whether you have a question or just want to say hi, my inbox is always open.
          </motion.p>
          <motion.a
            href="mailto:hello@example.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-primary text-primary-foreground font-bold text-lg shadow-lg hover:shadow-primary/25 transition-all"
          >
            Say Hello
          </motion.a>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 border-t border-border text-center text-muted-foreground text-sm z-10 relative">
        <p>Built with Next.js & Framer Motion. © {new Date().getFullYear()} Granthik.</p>
      </footer>
    </main>
  );
}
