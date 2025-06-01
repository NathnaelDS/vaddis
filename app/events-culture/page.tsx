import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Music, ShoppingBag } from "lucide-react"

export default function EventsCulturePage() {
  const sections = [
    {
      title: "Festivals & Holidays",
      description: "Traditional celebrations and cultural events",
      icon: Calendar,
      content: "Your content about Ethiopian festivals, holidays, and cultural celebrations will go here.",
    },
    {
      title: "Live Music & Art Shows",
      description: "Cultural performances and exhibitions",
      icon: Music,
      content: "Your content about live music venues, art galleries, and cultural shows will go here.",
    },
    {
      title: "Markets & Shopping",
      description: "Traditional markets and modern shopping",
      icon: ShoppingBag,
      content: "Your content about Merkato, craft markets, and shopping areas will go here.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Events & Culture</h1>
          <p className="text-xl">Immerse yourself in Addis Ababa's rich cultural scene</p>
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
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-purple-600" />
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
