import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Camera, Eye, MapPin, Trees } from "lucide-react"

export default function ThingsToDoPage() {
  const sections = [
    {
      title: "Top Attractions",
      description: "Must-see places like National Museum and Entoto Hills",
      icon: Camera,
      content: "Your content about the National Museum, Entoto Hills, and other top attractions will go here.",
    },
    {
      title: "Hidden Gems",
      description: "Less touristy places locals love",
      icon: Eye,
      content: "Your content about hidden gems and local favorites will go here.",
    },
    {
      title: "Day Trips from Addis",
      description: "Explore beyond the city",
      icon: MapPin,
      content: "Your content about day trip destinations from Addis Ababa will go here.",
    },
    {
      title: "Parks & Nature",
      description: "Green spaces and natural attractions",
      icon: Trees,
      content: "Your content about parks, gardens, and natural areas will go here.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Things to Do</h1>
          <p className="text-xl">Discover the best attractions and experiences in Addis Ababa</p>
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
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-green-600" />
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
