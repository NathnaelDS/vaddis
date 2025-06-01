import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Plane, Building, Car, Shield } from "lucide-react"

export default function PlanYourTripPage() {
  const sections = [
    {
      title: "How to Get There",
      description: "Flights, visas, and airport information",
      icon: Plane,
      content: "Your content about flights, visa requirements, and Bole International Airport will go here.",
    },
    {
      title: "Where to Stay",
      description: "Neighborhood guide and accommodation suggestions",
      icon: Building,
      content: "Your neighborhood guide and hotel/guesthouse recommendations will go here.",
    },
    {
      title: "Transportation",
      description: "Getting around the city",
      icon: Car,
      content: "Your content about taxis, ride-hailing apps, and public transport tips will go here.",
    },
    {
      title: "Safety Tips & Local Etiquette",
      description: "Stay safe and respectful",
      icon: Shield,
      content: "Your safety tips and local etiquette guidelines will go here.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Plan Your Trip</h1>
          <p className="text-xl">Everything you need to know before visiting Addis Ababa</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="space-y-8">
          {sections.map((section, index) => {
            const IconComponent = section.icon
            return (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="bg-white">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{section.title}</CardTitle>
                      <CardDescription className="text-lg">{section.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-600 italic">{section.content}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}
