"use client"

import { useState } from "react"
import { X } from "lucide-react"

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryImages = [
    {
      src: "/modern-gym-equipment-and-weights-area.jpg",
      alt: "Gym Equipment",
    },
    {
      src: "/group-fitness-class-in-action-with-instructor.jpg",
      alt: "Group Classes",
    },
    {
      src: "/personal-training-session-with-trainer-and-client.jpg",
      alt: "Personal Training",
    },
    {
      src: "/cardio-area-with-treadmills-and-bikes.jpg",
      alt: "Cardio Zone",
    },
    {
      src: "/free-weights-and-strength-training-area.jpg",
      alt: "Strength Training",
    },
    {
      src: "/yoga-and-stretching-area-with-mats.jpg",
      alt: "Yoga Studio",
    },
    {
      src: "/locker-room-and-changing-facilities.jpg",
      alt: "Facilities",
    },
    {
      src: "/reception-and-welcome-area-of-gym.jpg",
      alt: "Reception",
    },
  ]

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Facility</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Take a look inside our state-of-the-art fitness facility
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  <p className="font-semibold">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
              >
                <X className="h-8 w-8" />
              </button>
              <img
                src={selectedImage || "/placeholder.svg"}
                alt="Gallery Image"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
