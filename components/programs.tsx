"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dumbbell, Heart, Users, User } from "lucide-react"

export default function Programs() {
  const programs = [
    {
      icon: Dumbbell,
      title: "Strength Training",
      description:
        "Build muscle, increase power, and transform your physique with our comprehensive strength programs.",
      features: ["Free weights", "Machine training", "Progressive overload", "Form coaching"],
      image: "/person-lifting-heavy-weights-in-modern-gym.jpg",
    },
    {
      icon: Heart,
      title: "Cardio & Conditioning",
      description: "Improve cardiovascular health and endurance with high-energy cardio workouts.",
      features: ["HIIT training", "Treadmill programs", "Cycling classes", "Functional fitness"],
      image: "/people-doing-cardio-workout-in-fitness-class.jpg",
    },
    {
      icon: Users,
      title: "Group Classes",
      description: "Join our energetic group sessions for motivation, fun, and community support.",
      features: ["Yoga & Pilates", "Zumba dance", "CrossFit style", "Boot camp"],
      image: "/group-fitness-class-with-instructor-leading-workou.jpg",
    },
    {
      icon: User,
      title: "Personal Training",
      description: "One-on-one coaching tailored to your specific goals and fitness level.",
      features: ["Custom programs", "Nutrition guidance", "Progress tracking", "Flexible scheduling"],
      image: "/personal-trainer-working-with-client-one-on-one.jpg",
    },
  ]

  return (
    <section id="programs" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Programs</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Choose from our diverse range of fitness programs designed to help you achieve your goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={program.image || "/placeholder.svg"}
                  alt={program.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground p-2 rounded-lg">
                  <program.icon className="h-6 w-6" />
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-foreground">{program.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{program.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Learn More</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
