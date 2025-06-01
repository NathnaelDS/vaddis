import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, DollarSign, Wifi, Heart } from "lucide-react"

export default function LocalTipsPage() {
  const sections = [
    {
      title: "Language Basics",
      description: "Essential Amharic phrases for travelers",
      icon: MessageSquare,
      content: "Your Amharic phrases and language tips will go here.",
    },
    {
      title: "Currency & Money Exchange",
      description: "Ethiopian Birr and where to exchange money",
      icon: DollarSign,
      content: "Your content about currency, exchange rates, and money tips will go here.",
    },
    {
      title: "Internet & SIM Cards",
      description: "Staying connected during your visit",
      icon: Wifi,
      content: "Your content about internet access, SIM cards, and connectivity will go here.",
    },
    {
      title: "Health Info & Emergency Contacts",
      description: "Important health and safety information",
      icon: Heart,
      content: "Your content about health requirements, medical facilities, and emergency contacts will go here.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-teal-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Local Tips</h1>
          <p className="text-xl">Essential information to help you navigate Addis Ababa like a local</p>
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
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-teal-600" />
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
