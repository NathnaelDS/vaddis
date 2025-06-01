import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Calendar, MapPin, Star } from "lucide-react"

export default function ItinerariesPage() {
  const itineraries = [
    {
      title: "1-Day Itinerary",
      description: "Perfect for a quick city overview",
      icon: Clock,
      themes: ["Essential highlights", "Quick cultural tour", "Food tasting"],
    },
    {
      title: "3-Day Itinerary",
      description: "Ideal for a weekend getaway",
      icon: Calendar,
      themes: ["History & culture", "Food exploration", "Local markets"],
    },
    {
      title: "7-Day Itinerary",
      description: "Complete city exploration",
      icon: MapPin,
      themes: ["In-depth cultural tour", "Day trips", "Art & music scene", "Budget-friendly options"],
    },
    {
      title: "14-Day Itinerary",
      description: "Extended stay with regional trips",
      icon: Star,
      themes: ["Luxury experiences", "Regional excursions", "Deep cultural immersion", "Photography tour"],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-red-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Itineraries</h1>
          <p className="text-xl">Curated trip plans for every type of traveler and timeline</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {itineraries.map((itinerary, index) => {
            const IconComponent = itinerary.icon
            return (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="bg-white">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{itinerary.title}</CardTitle>
                      <CardDescription className="text-lg">{itinerary.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold mb-3">Themed Options:</h4>
                    <ul className="space-y-2">
                      {itinerary.themes.map((theme, themeIndex) => (
                        <li key={themeIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span className="text-gray-700">{theme}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 p-4 bg-white rounded border-l-4 border-red-500">
                      <p className="text-gray-600 italic">
                        Your detailed {itinerary.title.toLowerCase()} content with themed suggestions will go here.
                      </p>
                    </div>
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
