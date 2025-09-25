import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"

export default function ProgramsPage() {
  const programs = [
    {
      title: "Strength Training",
      description: "Build muscle mass and increase overall strength with our comprehensive weightlifting programs.",
      features: ["Free weights", "Machine training", "Progressive overload", "Form coaching"],
      image: "/muscular-man-lifting-weights-in-gym-showing-face.jpg",
      level: "All Levels",
    },
    {
      title: "HIIT Cardio",
      description: "High-intensity interval training to boost cardiovascular health and burn calories efficiently.",
      features: ["Circuit training", "Metabolic conditioning", "Fat burning", "Endurance building"],
      image: "/athletic-woman-doing-hiit-workout-showing-face.jpg",
      level: "Intermediate",
    },
    {
      title: "Functional Fitness",
      description: "Improve everyday movement patterns and enhance overall functional strength and mobility.",
      features: ["Movement patterns", "Core stability", "Balance training", "Injury prevention"],
      image: "/fit-person-doing-functional-training-showing-face.jpg",
      level: "All Levels",
    },
    {
      title: "CrossFit Training",
      description: "Varied, high-intensity functional movements that will challenge your limits.",
      features: ["Olympic lifts", "Gymnastics", "Metabolic conditioning", "Competition prep"],
      image: "/crossfit-athlete-doing-box-jumps-showing-face.jpg",
      level: "Advanced",
    },
    {
      title: "Personal Training",
      description: "One-on-one coaching tailored to your specific goals and fitness level.",
      features: ["Customized programs", "Form correction", "Goal tracking", "Nutrition guidance"],
      image: "/personal-trainer-client.png",
      level: "All Levels",
    },
    {
      title: "Group Classes",
      description: "Motivating group workouts that combine fun with effective training methods.",
      features: ["Team motivation", "Varied workouts", "Social interaction", "Beginner friendly"],
      image: "/group-fitness-class.png",
      level: "All Levels",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-red-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
              Our <span className="text-red-600">Programs</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
              Discover the perfect training program to match your fitness goals and experience level
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-card rounded-lg shadow-lg overflow-hidden animate-fade-in-up hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={program.image || "/placeholder.svg"}
                  alt={program.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-foreground">{program.title}</h3>
                    <div className="text-right">
                      <div className="text-xs text-muted-foreground">{program.level}</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{program.description}</p>
                  <ul className="space-y-2 mb-6">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <svg className="w-4 h-4 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Learn More</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 animate-fade-in-up">Weekly Schedule</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
              Specialized workout schedules for Male and Female members (6:00 AM - 9:00 PM)
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Male Schedule */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-red-600 text-white p-4">
                <h3 className="text-xl font-bold text-center">Male Schedule</h3>
                <p className="text-center text-sm opacity-90">6:00 AM - 9:00 PM</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-semibold">Monday</span>
                    <span className="text-muted-foreground">Chest, Arm, Shoulder</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-semibold">Tuesday</span>
                    <span className="text-muted-foreground">Tummy</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-semibold">Wednesday</span>
                    <span className="text-muted-foreground">Legs, Curve</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-semibold">Thursday</span>
                    <span className="text-muted-foreground">Chest, Shoulder, Arm</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-semibold">Friday</span>
                    <span className="text-muted-foreground">Cardio</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-semibold">Saturday</span>
                    <span className="text-muted-foreground">Road Walk</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="font-semibold">Sunday</span>
                    <span className="text-green-600 font-semibold">Free Day</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Female Schedule */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-red-600 text-white p-4">
                <h3 className="text-xl font-bold text-center">Female Schedule</h3>
                <p className="text-center text-sm opacity-90">6:00 AM - 9:00 PM</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-semibold">Monday</span>
                    <span className="text-muted-foreground">Buttocks, Hips, Laps</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-semibold">Tuesday</span>
                    <span className="text-muted-foreground">Tummy</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-semibold">Wednesday</span>
                    <span className="text-muted-foreground">Trance, Back</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-semibold">Thursday</span>
                    <span className="text-muted-foreground">Tummy, Hips, Buttocks</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-semibold">Friday</span>
                    <span className="text-muted-foreground">Cardio</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-semibold">Saturday</span>
                    <span className="text-muted-foreground">Road Walk</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="font-semibold">Sunday</span>
                    <span className="text-green-600 font-semibold">Free Day</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
