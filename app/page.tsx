"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { ChevronUp, Menu, X, ArrowRight, Star, CheckCircle, Users, Award, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import { useToast } from "@/hooks/use-toast"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const { toast } = useToast()

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)

      // Update active section based on scroll position
      const sections = ["home", "about", "services", "portfolio", "testimonials", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget

    if (!form) return

    // Simulate form submission
    toast({
      title: "Message Sending...",
      description: "Please wait while we process your message.",
      className: "bg-gray-900 border-purple-500 text-white",
    })

    // Simulate API call delay
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully! 🎉",
        description: "Thank you for reaching out. We'll get back to you within 24 hours.",
        className: "bg-gradient-to-r from-purple-600 to-pink-600 border-purple-400 text-white",
      })

      // Reset form safely
      try {
        form.reset()
      } catch (error) {
        console.log("Form reset error:", error)
      }
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold gradient-text brand-text">DigitalCraft</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {["home", "about", "services", "portfolio", "testimonials", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize transition-all duration-300 hover:text-purple-400 ${activeSection === item ? "text-purple-400" : "text-gray-300"
                  }`}
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800">
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {["home", "about", "services", "portfolio", "testimonials", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="capitalize text-left transition-all duration-300 hover:text-purple-400 text-gray-300"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-relaxed pb-2 inline-block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Digital Innovation
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Crafting extraordinary digital experiences with cutting-edge technology and creative excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection("portfolio")}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                View Our Work <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black px-8 py-3 rounded-full transition-all duration-300"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight pb-1">
              About DigitalCraft
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are a team of passionate digital creators, developers, and designers committed to delivering exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-8">
              {/* Card 1 */}
              <div className="flex items-start space-x-4">
                <div className="min-w-12 min-h-12 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center shrink-0">
                  <Users className="text-white w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-white">Expert Team</h3>
                  <p className="text-gray-400">Skilled professionals with years of experience</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex items-start space-x-4">
                <div className="min-w-12 min-h-12 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center shrink-0">
                  <Award className="text-white w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-white">Award Winning</h3>
                  <p className="text-gray-400">Recognized for excellence in digital innovation</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex items-start space-x-4 mt-6">
                <div className="min-w-12 min-h-12 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center shrink-0">
                  <Zap className="text-white w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-white">Fast Delivery</h3>
                  <p className="text-gray-400">Quick turnaround without compromising quality</p>
                </div>
              </div>

            </div>

            {/* Right: Image */}
            <div className="relative w-full max-w-xl mx-auto h-[300px] md:h-[300px] lg:h-[400px]">
              <Image
                src="/About.jpg"
                alt="Our professional team collaborating on digital projects in modern office"
                fill
                className="rounded-xl shadow-2xl object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent rounded-xl" />
            </div>

          </div>
        </div>
      </section>


      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Web Development",
                description: "Custom websites and web applications built with modern technologies",
                icon: "💻",
                features: ["React & Next.js", "TypeScript", "Responsive Design", "Performance Optimization"],
              },
              {
                title: "Mobile Apps",
                description: "Native and cross-platform mobile applications for iOS and Android",
                icon: "📱",
                features: ["React Native", "Flutter", "Native iOS/Android", "App Store Optimization"],
              },
              {
                title: "UI/UX Design",
                description: "Beautiful and intuitive user interfaces that enhance user experience",
                icon: "🎨",
                features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="text-purple-400 mr-2" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Showcasing our latest projects and creative solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-Commerce Platform",
                category: "Web Development",
                image: "/web.webp",
              },
              {
                title: "Mobile Banking App",
                category: "Mobile App",
                image: "/mobileapp.webp",
              },
              {
                title: "SaaS Dashboard",
                category: "UI/UX Design",
                image: "/UI-UX.jpg",
              },
              {
                title: "Food Delivery App",
                category: "Mobile App",
                image: "/fooddiliver.webp",
              },
              {
                title: "Corporate Website",
                category: "Web Development",
                image: "/webcoporativ.jpg",
              },
              {
                title: "Fitness Tracker",
                category: "Mobile App",
                image: "/fitnessapp.webp",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg bg-gray-800 hover:transform hover:scale-105 transition-all duration-300"
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-80 "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-purple-400 text-sm font-medium">{project.category}</p>
                    <h3 className="text-white text-lg font-semibold">{project.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              What Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO, TechStart",
                content:
                  "DigitalCraft transformed our vision into reality. Their attention to detail and technical expertise is unmatched.",
                rating: 5,
              },
              {
                name: "Michael Chen",
                role: "Founder, InnovateLab",
                content:
                  "Working with DigitalCraft was a game-changer for our business. They delivered beyond our expectations.",
                rating: 5,
              },
              {
                name: "Emily Rodriguez",
                role: "Marketing Director, GrowthCo",
                content:
                  "The team's creativity and professionalism made our project a huge success. Highly recommended!",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-purple-400 text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to start your next project? Let's discuss how we can help bring your ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Let's Create Something Amazing</h3>
                <p className="text-gray-400 mb-6">
                  We're here to help you transform your digital presence. Reach out to us and let's discuss your
                  project.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                    <span className="text-white">📧</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-gray-400">hello@digitalcraft.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                    <span className="text-white">📞</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                    <span className="text-white">📍</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Location</p>
                    <p className="text-gray-400">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Name <span className="text-red-400">*</span>
                      </label>
                      <Input
                        name="name"
                        required
                        className="bg-gray-800 border-gray-700 text-white focus:border-purple-500 focus:ring-purple-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email <span className="text-red-400">*</span>
                      </label>
                      <Input
                        name="email"
                        type="email"
                        required
                        className="bg-gray-800 border-gray-700 text-white focus:border-purple-500 focus:ring-purple-500"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Subject <span className="text-red-400">*</span>
                    </label>
                    <Input
                      name="subject"
                      required
                      className="bg-gray-800 border-gray-700 text-white focus:border-purple-500 focus:ring-purple-500"
                      placeholder="Project inquiry"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <Textarea
                      name="message"
                      required
                      className="bg-gray-800 border-gray-700 text-white focus:border-purple-500 focus:ring-purple-500 min-h-[120px]"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white transform hover:scale-105 transition-all duration-300"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-2xl font-bold gradient-text brand-text mb-4">DigitalCraft</div>
            <p className="text-gray-400 mb-6">Crafting extraordinary digital experiences with passion and precision</p>
            <div className="flex justify-center space-x-6 mb-6">
              {["Twitter", "LinkedIn", "Instagram", "GitHub"].map((social) => (
                <a key={social} href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  {social}
                </a>
              ))}
            </div>
            <p className="text-gray-500 text-sm">© 2024 DigitalCraft. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  )
}
