"use client"

import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/modern-gym-interior-with-weights-and-equipment--dr.jpg"
          alt="Gym Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance drop-shadow-lg">
            Welcome to <span className="text-red-500">D-MARV FITNESS</span>
            <br />
            <span className="text-2xl md:text-4xl lg:text-5xl">POWER HOUSE</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-2xl mx-auto text-pretty drop-shadow-md">
            Where Strength Meets Power. Transform your body, elevate your mind, and unleash your potential.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 text-lg shadow-lg"
            >
              Join Now
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg bg-transparent shadow-lg"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Tour
            </Button>
          </div>
        </div>
      </div>

    </section>
  )
}
