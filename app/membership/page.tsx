import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Dumbbell, Users, Clock, Trophy, Heart } from "lucide-react"

export default function MembershipPage() {
  const plans = [
    {
      name: "Basic",
      price: "₦15,000",
      period: "per month",
      description: "Perfect for beginners starting their fitness journey",
      features: [
        "Access to gym equipment",
        "Locker room facilities",
        "Basic fitness assessment",
        "Mobile app access",
        "Community support",
      ],
      popular: false,
      color: "border-gray-200",
    },
    {
      name: "Premium",
      price: "₦35,000",
      period: "per month",
      description: "Most popular choice for serious fitness enthusiasts",
      features: [
        "Everything in Basic",
        "Unlimited group classes",
        "2 personal training sessions/month",
        "Nutrition consultation",
        "Priority booking",
        "Guest passes (2/month)",
      ],
      popular: true,
      color: "border-red-600",
    },
    {
      name: "Elite",
      price: "₦60,000",
      period: "per month",
      description: "Ultimate package for maximum results and support",
      features: [
        "Everything in Premium",
        "Unlimited personal training",
        "Custom meal planning",
        "Recovery services",
        "VIP locker",
        "Unlimited guest passes",
        "24/7 gym access",
      ],
      popular: false,
      color: "border-gray-200",
    },
  ]

  const benefits = [
    {
      icon: Dumbbell,
      title: "State-of-the-Art Equipment",
      description: "Access to the latest fitness equipment and technology for optimal workouts",
      gradient: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Users,
      title: "Expert Trainers",
      description: "Certified professionals to guide and motivate your fitness journey",
      gradient: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      description: "Open early morning to late evening to fit your busy schedule",
      gradient: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: Trophy,
      title: "Results Guaranteed",
      description: "Proven programs and methods that deliver real, lasting results",
      gradient: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50",
    },
    {
      icon: Heart,
      title: "Supportive Community",
      description: "Join a motivating community of like-minded fitness enthusiasts",
      gradient: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
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
              Choose Your <span className="text-red-600">Membership</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
              Find the perfect plan to achieve your fitness goals with flexible options designed for every lifestyle
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-lg shadow-lg border-2 ${plan.color} p-8 animate-fade-in-up ${plan.popular ? "transform scale-105" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-red-600">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg className="w-5 h-5 text-red-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${plan.popular ? "bg-red-600 hover:bg-red-700" : "bg-gray-600 hover:bg-gray-700"} text-white font-semibold py-3`}
                >
                  Choose {plan.name}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 animate-fade-in-up">
              Membership Benefits
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
              Every membership includes these amazing benefits designed to maximize your fitness journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up border border-gray-100"
                >
                  <div
                    className={`w-16 h-16 rounded-2xl ${benefit.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center shadow-lg`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-red-600 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  <div className="mt-6 w-12 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full group-hover:w-16 transition-all duration-300"></div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 animate-fade-in-up">
              Frequently Asked Questions
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
              Get answers to common questions about our membership plans and services
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem
                value="item-1"
                className="bg-white rounded-2xl shadow-lg border border-gray-100 px-6 py-2 hover:shadow-xl transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-lg md:text-xl font-semibold text-foreground hover:text-red-600 transition-colors duration-300 py-6 hover:no-underline">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">01</span>
                    </div>
                    Can I cancel my membership anytime?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-base md:text-lg text-muted-foreground leading-relaxed pb-6 pl-14">
                  Yes, you can cancel your membership with 30 days notice. We believe in flexibility and want you to
                  feel comfortable with your commitment. Our team will assist you with the cancellation process and
                  ensure a smooth transition.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-white rounded-2xl shadow-lg border border-gray-100 px-6 py-2 hover:shadow-xl transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-lg md:text-xl font-semibold text-foreground hover:text-red-600 transition-colors duration-300 py-6 hover:no-underline">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">02</span>
                    </div>
                    Is there a joining fee?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-base md:text-lg text-muted-foreground leading-relaxed pb-6 pl-14">
                  We occasionally run promotions with no joining fee. Contact us to learn about current offers and
                  promotions. New members can often take advantage of special introductory rates and waived fees.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="bg-white rounded-2xl shadow-lg border border-gray-100 px-6 py-2 hover:shadow-xl transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-lg md:text-xl font-semibold text-foreground hover:text-red-600 transition-colors duration-300 py-6 hover:no-underline">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">03</span>
                    </div>
                    Can I freeze my membership?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-base md:text-lg text-muted-foreground leading-relaxed pb-6 pl-14">
                  Yes, you can freeze your membership for up to 3 months per year for medical reasons, travel, or other
                  circumstances. This feature helps you maintain your membership while accommodating life's unexpected
                  events.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="bg-white rounded-2xl shadow-lg border border-gray-100 px-6 py-2 hover:shadow-xl transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-lg md:text-xl font-semibold text-foreground hover:text-red-600 transition-colors duration-300 py-6 hover:no-underline">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">04</span>
                    </div>
                    Do you offer family discounts?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-base md:text-lg text-muted-foreground leading-relaxed pb-6 pl-14">
                  Yes, we offer special family packages and discounts for multiple family members. Contact us for
                  details on family membership options. Families can save significantly with our group membership plans.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="bg-white rounded-2xl shadow-lg border border-gray-100 px-6 py-2 hover:shadow-xl transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-lg md:text-xl font-semibold text-foreground hover:text-red-600 transition-colors duration-300 py-6 hover:no-underline">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">05</span>
                    </div>
                    What payment methods do you accept?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-base md:text-lg text-muted-foreground leading-relaxed pb-6 pl-14">
                  We accept cash, bank transfers, debit cards, and mobile money payments. Monthly payments can be set up
                  for automatic deduction. Our flexible payment options make it easy to maintain your membership.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-6"
                className="bg-white rounded-2xl shadow-lg border border-gray-100 px-6 py-2 hover:shadow-xl transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-lg md:text-xl font-semibold text-foreground hover:text-red-600 transition-colors duration-300 py-6 hover:no-underline">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">06</span>
                    </div>
                    Do you provide workout plans?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-base md:text-lg text-muted-foreground leading-relaxed pb-6 pl-14">
                  Yes, all members receive customized workout plans based on their fitness goals and experience level.
                  Our trainers regularly update these plans to ensure continuous progress and keep your workouts
                  engaging.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
