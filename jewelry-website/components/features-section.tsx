import { Truck, Shield, Gem, Award } from "lucide-react"

const features = [
  {
    icon: Gem,
    title: "Premium Materials",
    description: "Only the finest diamonds, gold, and precious stones make it into our collection.",
  },
  {
    icon: Award,
    title: "Master Craftsmanship",
    description: "Each piece is handcrafted by skilled artisans with decades of experience.",
  },
  {
    icon: Shield,
    title: "Lifetime Warranty",
    description: "We stand behind our quality with comprehensive lifetime warranty coverage.",
  },
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Complimentary shipping and returns on all orders with secure packaging.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-black mb-4 text-balance">Why Choose Luxe</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Experience the difference that comes with true luxury and uncompromising quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                <feature.icon className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm text-pretty">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
