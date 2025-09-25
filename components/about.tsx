"use client"

import { CheckCircle, Users, Trophy, Clock } from "lucide-react"

export default function About() {
  const features = [
    {
      icon: Users,
      title: "Expert Trainers",
      description: "Certified professionals dedicated to your success",
    },
    {
      icon: Trophy,
      title: "Proven Results",
      description: "Thousands of success stories and transformations",
    },
    {
      icon: Clock,
      title: "24/7 Access",
      description: "Train on your schedule, any time of day",
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <img
              src="/fitness-trainer-helping-client-with-weights--motiv.jpg"
              alt="Personal Training"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold">5+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-4">Your Fitness Journey Starts Here</h2>
              <p className="text-lg text-muted-foreground text-pretty">
                At D-MARV FITNESS POWER HOUSE, we believe fitness is more than just physical transformation. It's about
                building confidence, discipline, and a lifestyle that empowers you to achieve greatness in every aspect
                of your life.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "State-of-the-art equipment and facilities",
                "Personalized training programs for all fitness levels",
                "Supportive community of like-minded individuals",
                "Nutrition guidance and lifestyle coaching",
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <feature.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
