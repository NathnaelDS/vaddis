import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Addis Ababa Travel Guide",
  description: "Your complete guide to exploring Ethiopia's vibrant capital city",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-4">Addis Guide</h3>
                <p className="text-gray-400">Your trusted companion for exploring Addis Ababa</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="/plan-your-trip" className="hover:text-white">
                      Plan Your Trip
                    </a>
                  </li>
                  <li>
                    <a href="/things-to-do" className="hover:text-white">
                      Things to Do
                    </a>
                  </li>
                  <li>
                    <a href="/itineraries" className="hover:text-white">
                      Itineraries
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Discover</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="/eat-and-drink" className="hover:text-white">
                      Food & Drink
                    </a>
                  </li>
                  <li>
                    <a href="/events-culture" className="hover:text-white">
                      Culture
                    </a>
                  </li>
                  <li>
                    <a href="/local-tips" className="hover:text-white">
                      Local Tips
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <p className="text-gray-400">Have questions or suggestions? We'd love to hear from you.</p>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 Addis Guide. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
