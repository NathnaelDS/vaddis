import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Compass, Utensils, Calendar, Route, Info } from "lucide-react"

export default function HomePage() {
  const sections = [
    {
      title: "Plan Your Trip",
      description: "Everything you need to know before you go",
      icon: MapPin,
      href: "/plan-your-trip",
      color: "bg-blue-500",
    },
    {
      title: "Things to Do",
      description: "Discover attractions, hidden gems, and day trips",
      icon: Compass,
      href: "/things-to-do",
      color: "bg-green-500",
    },
    {
      title: "Where to Eat & Drink",
      description: "From traditional cuisine to modern dining",
      icon: Utensils,
      href: "/eat-and-drink",
      color: "bg-orange-500",
    },
    {
      title: "Events & Culture",
      description: "Festivals, music, art, and local experiences",
      icon: Calendar,
      href: "/events-culture",
      color: "bg-purple-500",
    },
    {
      title: "Itineraries",
      description: "Curated trip plans from 1 day to 2 weeks",
      icon: Route,
      href: "/itineraries",
      color: "bg-red-500",
    },
    {
      title: "Local Tips",
      description: "Essential info for navigating like a local",
      icon: Info,
      href: "/local-tips",
      color: "bg-teal-500",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Discover Addis Ababa</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your complete guide to exploring Ethiopia's vibrant capital city. From ancient history to modern culture,
            we've got you covered.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Start Planning Your Trip
          </Button>
        </div>
      </section>

      {/* Main Sections Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Explore Our Guide</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section) => {
              const IconComponent = section.icon
              return (
                <Link key={section.href} href={section.href}>
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <div className={`w-12 h-12 rounded-lg ${section.color} flex items-center justify-center mb-4`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">{section.title}</CardTitle>
                      <CardDescription>{section.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Quick Start</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>First Time Visitor?</CardTitle>
                <CardDescription>Start with our essential planning guide and 3-day itinerary</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href="/plan-your-trip">Plan Your Trip</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Looking for Activities?</CardTitle>
                <CardDescription>Explore top attractions and hidden gems throughout the city</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/things-to-do">Things to Do</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Ready to Eat?</CardTitle>
                <CardDescription>Discover the best traditional and modern dining experiences</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/eat-and-drink">Food Guide</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
