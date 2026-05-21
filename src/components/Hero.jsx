import { motion } from "framer-motion"
import profile from "../assets/images/huzaifa.jpg"

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center py-20">
      
      <motion.img
        src={profile}
        className="w-40 h-40 rounded-full border-4 border-blue-500"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      />

      <h1 className="text-4xl font-bold mt-5">Muhammad Huzaifa</h1>
      <p className="text-gray-400 mt-2">Full Stack Developer</p>

      <button className="mt-5 px-6 py-2 bg-blue-600 rounded-full">
        Download Resume
      </button>
    </section>
  )
}