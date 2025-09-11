import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/elegant-luxury-jewelry-collection-hero-image-with-.jpg"
          alt="Luxury jewelry collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-black mb-6 tracking-tight text-balance">
          Timeless
          <span className="block text-accent">Elegance</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto text-pretty">
          Discover our exquisite collection of handcrafted jewelry, where each piece tells a story of luxury,
          craftsmanship, and timeless beauty.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-medium">
            Shop Collection
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white bg-white text-primary hover:bg-white/90 hover:text-primary font-medium"
          >
            View Lookbook
          </Button>
        </div>
      </div>
    </section>
  )
}
