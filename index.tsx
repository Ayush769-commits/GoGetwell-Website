import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function HomePage() {
  return (
    <div className="min-h-screen text-gray-900 font-sans">
      <header className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">GoGetWell</h1>
          <nav className="space-x-6 hidden md:block">
            <a href="#features" className="hover:underline">Features</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
          <Button className="bg-white text-pink-600 hover:bg-gray-100">Get Started</Button>
        </div>
      </header>

      <main className="px-4 pt-24 pb-16 text-center bg-gradient-to-br from-yellow-100 via-pink-100 to-blue-100">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          className="text-5xl font-extrabold tracking-tight mb-6 text-pink-700"
        >
          Your Personalized Health Companion
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          className="text-lg text-gray-700 max-w-2xl mx-auto mb-8"
        >
          GoGetWell helps you manage your health journey with AI-powered tools and intuitive tracking.
        </motion.p>
        <motion.div variants={fadeInScale} initial="hidden" animate="show">
          <Button className="text-lg px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white">
            Request Demo
          </Button>
        </motion.div>
      </main>

      <section id="features" className="py-24 bg-gradient-to-br from-white via-purple-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 text-purple-700">Powerful Features to Support Your Journey</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Smart Tracking",
                desc: "Track your symptoms, medication, and recovery progress seamlessly."
              },
              {
                title: "AI Insights",
                desc: "Get smart suggestions tailored to your health patterns."
              },
              {
                title: "Health Reports",
                desc: "Create and share detailed reports with healthcare professionals."
              }
            ].map(({ title, desc }) => (
              <motion.div
                key={title}
                variants={fadeInScale}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-pink-200 hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold text-pink-600 mb-3">{title}</h3>
                <p className="text-gray-700">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-gradient-to-r from-green-100 via-teal-100 to-blue-100">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-4 text-center"
        >
          <h3 className="text-4xl font-bold text-teal-700 mb-4">Why GoGetWell?</h3>
          <p className="text-gray-700 text-lg">
            Built with care for patients, caregivers, and doctors. We help simplify health data and provide clarity in recovery.
          </p>
        </motion.div>
      </section>

      <section id="contact" className="py-24 bg-gradient-to-br from-yellow-100 via-red-100 to-pink-100">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto px-4 text-center"
        >
          <h3 className="text-3xl font-bold mb-6 text-red-600">Ready to Take Control of Your Health?</h3>
          <Button className="text-lg px-8 py-4 bg-red-600 hover:bg-red-700 text-white">
            Start Free Trial
          </Button>
        </motion.div>
      </section>

      <footer className="bg-gradient-to-r from-gray-200 to-gray-100 py-6 text-center text-sm text-gray-600">
        &copy; 2025 GoGetWell.ai. All rights reserved.
      </footer>
    </div>
  );
}
