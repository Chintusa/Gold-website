import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Plus, Search, Edit, Trash2, Eye } from "lucide-react"
import Image from "next/image"

const products = [
  {
    id: 1,
    name: "Diamond Solitaire Ring",
    category: "Rings",
    price: "$2,499",
    stock: 12,
    status: "active",
    image: "/elegant-diamond-solitaire-engagement-ring-on-white.jpg",
  },
  {
    id: 2,
    name: "Pearl Drop Earrings",
    category: "Earrings",
    price: "$899",
    stock: 8,
    status: "active",
    image: "/elegant-pearl-drop-earrings-luxury-jewelry.jpg",
  },
  {
    id: 3,
    name: "Gold Chain Necklace",
    category: "Necklaces",
    price: "$1,299",
    stock: 5,
    status: "low_stock",
    image: "/luxury-gold-chain-necklace-elegant-jewelry.jpg",
  },
  {
    id: 4,
    name: "Tennis Bracelet",
    category: "Bracelets",
    price: "$3,499",
    stock: 0,
    status: "out_of_stock",
    image: "/diamond-tennis-bracelet-luxury-jewelry.jpg",
  },
]

export default function ProductsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-primary mb-2">Products</h2>
          <p className="text-gray-600">Manage your jewelry inventory and product catalog.</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="h-4 w-4 mr-2" />
          Add Product
        </Button>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input placeholder="Search products..." className="pl-10" />
            </div>
            <Button variant="outline">Filter</Button>
          </div>
        </CardContent>
      </Card>

      {/* Products Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-primary">Product Inventory</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {products.map((product) => (
              <div key={product.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">{product.name}</h3>
                    <p className="text-sm text-gray-600">{product.category}</p>
                    <p className="text-sm text-gray-500">Stock: {product.stock} units</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-semibold text-primary">{product.price}</span>
                  <Badge
                    variant={
                      product.status === "active"
                        ? "default"
                        : product.status === "low_stock"
                          ? "secondary"
                          : "destructive"
                    }
                  >
                    {product.status.replace("_", " ")}
                  </Badge>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
