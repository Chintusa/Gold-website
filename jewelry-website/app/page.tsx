import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProductCarousel } from "@/components/product-carousel"
import { FeaturesSection } from "@/components/features-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProductCarousel
          title="Featured Collection"
          subtitle="Discover our most coveted pieces, carefully curated for the discerning jewelry connoisseur."
        />
        <FeaturesSection />
        <ProductCarousel
          title="New Arrivals"
          subtitle="Be the first to explore our latest designs, fresh from our master craftsmen's workshop."
        />
      </main>
      <Footer />
    </div>
  )
}
