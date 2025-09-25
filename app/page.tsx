"use client"

import Header from "@/components/header"
import Hero from "@/components/hero"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const features = [
    {
      title: "State-of-the-Art Equipment",
      description: "Latest fitness technology and equipment for optimal training results",
      gradient: "from-red-500 to-red-600",
    },
    {
      title: "Expert Trainers",
      description: "Certified professionals with years of experience in fitness training",
      gradient: "from-red-600 to-red-700",
    },
    {
      title: "Flexible Schedule",
      description: "Open from 6:00 AM to 9:00 PM to fit your busy lifestyle",
      gradient: "from-red-700 to-red-800",
    },
    {
      title: "Proven Results",
      description: "Track record of helping members achieve their fitness goals",
      gradient: "from-red-800 to-red-900",
    },
  ]

  const testimonials = [
    {
      name: "Bukola Akinpelu",
      image: "/happy-woman-fitness.jpg",
      quote: "D-MARV FITNESS transformed my life! The trainers are amazing and the community is so supportive.",
      rating: 5,
    },
    {
      name: "Mike Biggs",
      image: "/athletic-man-smiling.png",
      quote: "One of the best gym in the city of ibadan! The equipment is top-notch and the programs are perfectly designed.",
      rating: 4,
    },
    {
      name: "Jane Badiru",
      image: "/professional-woman-fitness.jpg",
      quote: "Finally found a gym that fits my schedule. The flexible hours and expert guidance are perfect!",
      rating: 5,
    },
    {
      name: "Daniel Eze",
      image: "/hispanic-male-fitness-trainer-smiling.jpg",
      quote: "As a trainer myself, I'm impressed by D-MARV's commitment to excellence and member success.",
      rating: 5,
    },
    {
      name: "Emma Thompson",
      image: "/young-woman-student-fitness-enthusiast.jpg",
      quote: "The student-friendly rates and flexible schedule make it perfect for my busy college life!",
      rating: 5,
    },
    {
      name: "James Oladipo",
      image: "/middle-aged-businessman-in-gym-attire.jpg",
      quote: "D-MARV FITNESS helps me stay sharp for business. The early morning sessions are exactly what I need.",
      rating: 5,
    },
    {
      name: "Mary Agbor",
      image: "/latina-mother-fitness-enthusiast-smiling.jpg",
      quote: "After having kids, D-MARV helped me regain my confidence and strength. The community is like family!",
      rating: 5,
    },
    {
      name: "Antony Bassey",
      image: "/asian-executive-in-fitness-wear-confident.jpg",
      quote: "The premium facilities and personalized attention make D-MARV worth every naira. Exceptional service!",
      rating: 4,
    },
  ]

  const stats = [
    { number: "300+", label: "Happy Members" },
    { number: "20+", label: "Expert Trainers" },
    { number: "15+", label: "Programs" },
    { number: "5+", label: "Years Experience" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000) // Change every 4 seconds

    return () => clearInterval(interval)
  }, [testimonials.length])

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index)
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose{" "}
              <span className="text-red-600 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text">
                D-MARV FITNESS
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Experience the difference with our world-class facilities and expert guidance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>
                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${feature.gradient} mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="w-8 h-8 bg-white rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-red-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats section remains the same */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              What Our{" "}
              <span className="text-red-600 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text">
                Members
              </span>{" "}
              Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Real stories from real people who transformed their lives at D-MARV FITNESS
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white p-10 rounded-2xl shadow-xl mx-auto max-w-4xl transform transition-all duration-500 hover:shadow-2xl">
                      <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-shrink-0">
                          <img
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="w-24 h-24 rounded-full object-cover border-4 border-red-100 shadow-lg"
                          />
                        </div>
                        <div className="flex-1 text-center md:text-left">
                          <div className="flex justify-center md:justify-start mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <svg
                                key={i}
                                className="w-5 h-5 text-yellow-400 fill-current animate-pulse"
                                viewBox="0 0 20 20"
                              >
                                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                              </svg>
                            ))}
                          </div>
                          <p className="text-lg text-muted-foreground italic mb-6 leading-relaxed">
                            "{testimonial.quote}"
                          </p>
                          <div>
                            <h4 className="font-bold text-xl text-foreground">{testimonial.name}</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced carousel indicators with progress animation */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? "bg-red-600 scale-125" : "bg-gray-300 hover:bg-red-400"
                  }`}
                  onClick={() => goToTestimonial(index)}
                >
                  {index === currentTestimonial && (
                    <div className="absolute inset-0 rounded-full bg-red-600 animate-ping opacity-75"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Progress bar for current testimonial */}
            <div className="mt-4 max-w-xs mx-auto">
              <div className="w-full bg-gray-200 rounded-full h-1">
                <div
                  className="bg-red-600 h-1 rounded-full transition-all duration-100 ease-linear"
                  style={{
                    width: `${((currentTestimonial + 1) / testimonials.length) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Life?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90 leading-relaxed">
            Join D-MARV FITNESS POWER HOUSE today and start your journey to a stronger, healthier you
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/membership">
              <Button className="bg-white text-red-600 hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Start Your Journey
              </Button>
            </Link>
            <Link href="/programs">
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-10 py-4 text-lg font-semibold bg-transparent rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                View Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
