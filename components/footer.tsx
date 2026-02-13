import { Facebook, Instagram, Twitter, Youtube, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Membership", href: "/membership" },
    { name: "Contact", href: "/contact" },
  ]

  const programs = [
    { name: "Strength Training", href: "/programs" },
    { name: "Cardio Classes", href: "/programs" },
    { name: "Personal Training", href: "/programs" },
    { name: "Group Fitness", href: "/programs" },
  ]

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ]

  return (
    <footer className="bg-white text-black py-16 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="max-w-md mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Stay Updated</h3>
            <p className="text-gray-600 mb-6">
              Get the latest fitness tips, workout plans, and exclusive offers delivered to your inbox.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 border-gray-300 focus:border-red-500 focus:ring-red-500"
              />
              <Button className="bg-red-600 hover:bg-red-700 text-white px-6 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dmarvlogo-e9cl9HP7s8CvS4VUJWCzK0LxntUdOa.jpeg"
                alt="D-MARV FITNESS POWER HOUSE"
                className="h-12 w-12 rounded-full"
              />
              <div>
                <h3 className="text-xl font-bold">D-MARV FITNESS</h3>
                <p className="text-sm text-gray-600">POWER HOUSE</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              Where Strength Meets Power. Transform your body, elevate your mind, and unleash your potential with our
              world-class fitness programs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-600 hover:text-red-600 transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Programs</h4>
            <ul className="space-y-2">
              {programs.map((program, index) => (
                <li key={index}>
                  <a href={program.href} className="text-gray-600 hover:text-red-600 transition-colors duration-200">
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="space-y-3">
              <p className="text-gray-600 text-sm">
                Block 1, Plot 16, Ring Road, Off Bolumole Street
                <br />
                Bolumole Bus Stop, Challenge, Ibadan.
              </p>
              <p className="text-gray-600 text-sm">
                Phone: +2347046068541
                <br />
                Email: Adadusunday0@gmail.com
              </p>
              <div className="flex space-x-4 pt-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="text-gray-600 hover:text-red-600 transition-colors duration-200"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center">
          <p className="text-gray-600 text-sm">© 2026 D-MARV FITNESS POWER HOUSE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
