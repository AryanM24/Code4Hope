import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { TeamMemberCard } from "@/components/team-member-card"
import { JoinSection } from "@/components/join-section"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function TeamPage() {
  const executiveBoard = [
    {
      name: "Aryan Mittal",
      title: "Founder & Executive Director",
      image: "/placeholder.svg",
      socials: {
        linkedin: "#",
        instagram: "#",
        tiktok: "#"
      }
    },
    {
      name: "Krish Tated",
      title: "Director of Outreach",
      image: "/placeholder.svg",
      socials: {
        linkedin: "#",
        instagram: "#",
        tiktok: "#"
      }
    },
    {
      name: "Maira Batra",
      title: "Director of Social Media Outreach",
      image: "/placeholder.svg",
      socials: {
        linkedin: "#",
        instagram: "#",
        tiktok: "#"
      }
    },
    {
      name: "Ranya Chaudhary",
      title: "Event Director",
      image: "/placeholder.svg",
      socials: {
        linkedin: "#",
        instagram: "#",
        tiktok: "#"
      }
    }
  ]

  const generalTeam = [
    {
      name: "Amogh Sheth",
      title: "Event Director",
      image: "/placeholder.svg",
      socials: {
        linkedin: "#",
        instagram: "#",
        tiktok: "#"
      }
    },
    {
      name: "Shivali Sood",
      title: "Event Director",
      image: "/placeholder.svg",
      socials: {
        linkedin: "#",
        instagram: "#",
        tiktok: "#"
      }
    },
    {
      name: "Alex Johnson",
      title: "Event Director",
      image: "/placeholder.svg",
      socials: {
        linkedin: "#",
        instagram: "#",
        tiktok: "#"
      }
    }
  ]

  const operationsTeam = [
    {
      name: "Shlok P",
      title: "Operations Director",
      image: "/placeholder.svg",
      socials: {
        linkedin: "#",
        instagram: "#",
        tiktok: "#"
      }
    },
    {
      name: "Malay Patel",
      title: "Operations Director",
      image: "/placeholder.svg",
      socials: {
        linkedin: "#",
        instagram: "#",
        tiktok: "#"
      }
    },
    {
      name: "Gong Ming",
      title: "Operations Director",
      image: "/placeholder.svg",
      socials: {
        linkedin: "#",
        instagram: "#",
        tiktok: "#"
      }
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <ScrollReveal>
          <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold mb-4">Our Amazing Team</h1>
              <p className="text-gray-600 max-w-3xl">
                Meet the dedicated team behind Code4Hope! We are a group of passionate individuals committed to driving social change through technology and innovation.
              </p>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="py-12 md:py-16 lg:py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-2">The Executive Board</h2>
                <p className="text-gray-600">This is our 2024-2025 Code4Hope Executive Board</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {executiveBoard.map((member) => (
                  <TeamMemberCard key={member.name} {...member} />
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-2">General Team</h2>
                <p className="text-gray-600">Our dedicated event organizers</p>
              </div>
              <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {generalTeam.map((member) => (
                    <TeamMemberCard key={member.name} {...member} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="py-12 md:py-16 lg:py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-2">Operations Subteam</h2>
                <p className="text-gray-600">The backbone of our technical infrastructure</p>
              </div>
              <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {operationsTeam.map((member) => (
                    <TeamMemberCard key={member.name} {...member} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <JoinSection />
            </div>
          </section>
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  )
}

