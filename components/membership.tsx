"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"

export default function Membership() {
  const plans = [
    {
      name: "Basic",
      price: "$29",
      period: "/month",
      description: "Perfect for getting started on your fitness journey",
      features: [
        "Gym access during standard hours",
        "Basic equipment usage",
        "Locker room access",
        "Free fitness assessment",
      ],
      popular: false,
    },
    {
      name: "Standard",
      price: "$49",
      period: "/month",
      description: "Most popular choice for serious fitness enthusiasts",
      features: [
        "Everything in Basic",
        "24/7 gym access",
        "Group classes included",
        "Guest passes (2 per month)",
        "Nutrition consultation",
        "Progress tracking app",
      ],
      popular: true,
    },
    {
      name: "Premium",
      price: "$79",
      period: "/month",
      description: "Ultimate fitness experience with personal attention",
      features: [
        "Everything in Standard",
        "2 personal training sessions/month",
        "Priority class booking",
        "Unlimited guest passes",
        "Meal planning service",
        "Recovery services access",
        "VIP locker",
      ],
      popular: false,
    },
  ]

  return (
    <section id="membership" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Membership Plans</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Choose the perfect plan that fits your fitness goals and lifestyle
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                plan.popular ? "border-primary shadow-lg scale-105" : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl text-foreground">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <CardDescription className="mt-2 text-muted-foreground">{plan.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                      : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                  }`}
                >
                  Choose {plan.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            All memberships include a 7-day free trial. No commitment required.
          </p>
          <Button variant="outline" size="lg">
            Compare All Plans
          </Button>
        </div>
      </div>
    </section>
  )
}
