import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { 
  HeroSection, 
  FeaturesSection, 
  ArchitectureSection, 
  CTASection 
} from "@/components/landing-sections"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <ArchitectureSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
