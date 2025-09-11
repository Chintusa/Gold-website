"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, ShoppingBag } from "lucide-react"
import { useState } from "react"

interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  image: string
  category: string
  isNew?: boolean
}

const products: Product[] = [
  {
    id: 1,
    name: "Diamond Solitaire Ring",
    price: 2499,
    image: "/elegant-diamond-solitaire-engagement-ring-on-white.jpg",
    category: "Rings",
    isNew: true,
  },
  {
    id: 2,
    name: "Pearl Drop Earrings",
    price: 899,
    originalPrice: 1199,
    image: "/elegant-pearl-drop-earrings-luxury-jewelry.jpg",
    category: "Earrings",
  },
  {
    id: 3,
    name: "Gold Chain Necklace",
    price: 1299,
    image: "/luxury-gold-chain-necklace-elegant-jewelry.jpg",
    category: "Necklaces",
  },
  {
    id: 4,
    name: "Tennis Bracelet",
    price: 1899,
    image: "/diamond-tennis-bracelet-luxury-jewelry.jpg",
    category: "Bracelets",
    isNew: true,
  },
]

interface ProductCarouselProps {
  title: string
  subtitle?: string
}

export function ProductCarousel({ title, subtitle }: ProductCarouselProps) {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-black mb-4 text-balance">{title}</h2>
          {subtitle && <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">{subtitle}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group cursor-pointer border-0 shadow-sm hover:shadow-lg transition-all duration-300"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.isNew && (
                    <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-medium px-2 py-1 rounded-full">
                      New
                    </span>
                  )}
                  <div
                    className={`absolute inset-0 bg-black/20 flex items-center justify-center gap-2 transition-opacity duration-300 ${
                      hoveredProduct === product.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button size="sm" className="bg-primary hover:bg-primary/90">
                      <ShoppingBag className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
                  <h3 className="font-medium mb-2 text-balance">{product.name}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-semibold">${product.price.toLocaleString()}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ${product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  )
}
