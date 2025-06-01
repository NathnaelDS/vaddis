import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Utensils, Coffee, Building2, Wine } from "lucide-react"

export default function EatAndDrinkPage() {
  const sections = [
    {
      title: "Traditional Ethiopian Cuisine",
      description: "Authentic local dishes and where to find them",
      icon: Utensils,
      content: "Your content about traditional Ethiopian restaurants and dishes will go here.",
    },
    {
      title: "Best Coffee Spots",
      description: "Ethiopia's famous coffee culture",
      icon: Coffee,
      content: "Your content about the best coffee shops and coffee experiences will go here.",
    },
    {
      title: "Modern/Ethnic Restaurants",
      description: "International cuisine and fusion dining",
      icon: Building2,
      content: "Your content about modern restaurants and international cuisine will go here.",
    },
    {
      title: "Bars & Nightlife",
      description: "Evening entertainment and drinks",
      icon: Wine,
      content: "Your content about bars, clubs, and nightlife will go here.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-orange-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Where to Eat & Drink</h1>
          <p className="text-xl">From traditional injera to world-class coffee and modern dining</p>
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
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-orange-600" />
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
