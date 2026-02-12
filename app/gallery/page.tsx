"use client"

import Header from "@/components/header";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";

export default function GalleryPage() {
  const galleryImages = [
    {
      src: "/gym1.jpeg",
      category: "Facilities",
    },
    {
      src: "/marv2.mp4",
      category: "Facilities",
    },
    {
      src: "/marv3.mp4",
      category: "Facilities",
    },
    {
      src: "/marv4.mp4",
      category: "Training",
    },
    {
      src: "/gym5.jpeg",
      alt: "Cardio equipment area",
      category: "Facilities",
    },
    {
      src: "/gym8.jpeg",
      alt: "CrossFit training area",
      category: "Facilities",
    },
    {
      src: "/gym2.jpeg",
      category: "Facilities",
    },
    {
      src: "/gym-members-celebrating-achievement.jpg",
      alt: "Members celebrating fitness achievements",
      category: "Community",
    },
    {
      src: "/functional-fitness-training.jpg",
      alt: "Functional fitness training",
      category: "Training",
    },
    {
      src: "/gym6.jpeg",
      category: "Facilities",
    },
    {
      src: "/gym7.jpeg",
      category: "Facilities",
    },
    {
      src: "/gym10.jpeg",
      alt: "Community fitness event",
      category: "Community",
    },
  ];

  const categories = [
    "All",
    "Facilities",
    "Training",
    "Classes",
    "Community",
    "Services",
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-red-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
              Our <span className="text-red-600">Gallery</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
              Take a look inside D-MARV FITNESS POWER HOUSE and see our
              community in action
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-colors duration-300 font-semibold"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg animate-fade-in-up hover:shadow-xl transition-all duration-300"
              >
                {item.src.endsWith(".mp4") ? (
                  <video
                    src={item.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <img
                    src={item.src || "/placeholder.svg"}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                )}

                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-end">
                  <div className="p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 bg-red-600 text-xs font-semibold rounded-full mb-2">
                      {item.category}
                    </span>
                    <p className="text-sm">{item.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in-up">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-red-100">Happy Members</div>
            </div>
            <div className="animate-fade-in-up">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-red-100">Equipment Pieces</div>
            </div>
            <div className="animate-fade-in-up">
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-red-100">Expert Trainers</div>
            </div>
            <div className="animate-fade-in-up">
              <div className="text-4xl font-bold mb-2">5</div>
              <div className="text-red-100">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
