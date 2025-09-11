"use client"

import { Search, ShoppingBag, User, Menu, Heart, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useAuth } from "@/components/auth-provider"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, logout } = useAuth()
  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <h1 className="text-2xl font-serif font-black tracking-tight text-foreground cursor-pointer">LUXE</h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/shop" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Collections
            </Link>
            <a href="#" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Rings
            </a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Necklaces
            </a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Earrings
            </a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Bracelets
            </a>
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex items-center max-w-sm w-full">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="search"
                placeholder="Search jewelry..."
                className="pl-10 bg-muted/50 border-0 focus-visible:ring-1 focus-visible:ring-accent"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Wishlist</span>
            </Button>

            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                    <span className="sr-only">Account</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <div className="px-2 py-1.5">
                    <p className="text-sm font-medium">{user.name}</p>
                    <p className="text-xs text-muted-foreground">{user.email}</p>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/profile">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/orders">My Orders</Link>
                  </DropdownMenuItem>
                  {user.role === "admin" && (
                    <DropdownMenuItem asChild>
                      <Link href="/admin">Admin Dashboard</Link>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="text-red-600">
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button variant="ghost" size="icon" asChild>
                <Link href="/login">
                  <User className="h-5 w-5" />
                  <span className="sr-only">Sign In</span>
                </Link>
              </Button>
            )}

            <Button variant="ghost" size="icon" className="relative" asChild>
              <Link href="/cart">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center">
                  3
                </span>
                <span className="sr-only">Shopping cart</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/shop" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                Collections
              </Link>
              <a href="#" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                Rings
              </a>
              <a href="#" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                Necklaces
              </a>
              <a href="#" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                Earrings
              </a>
              <a href="#" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                Bracelets
              </a>
              {user ? (
                <>
                  <div className="pt-4 border-t">
                    <p className="text-sm font-medium text-foreground">{user.name}</p>
                    <p className="text-xs text-muted-foreground">{user.email}</p>
                  </div>
                  <Link
                    href="/profile"
                    className="text-sm font-medium text-foreground hover:text-accent transition-colors"
                  >
                    Profile
                  </Link>
                  <Link
                    href="/orders"
                    className="text-sm font-medium text-foreground hover:text-accent transition-colors"
                  >
                    My Orders
                  </Link>
                  {user.role === "admin" && (
                    <Link
                      href="/admin"
                      className="text-sm font-medium text-foreground hover:text-accent transition-colors"
                    >
                      Admin Dashboard
                    </Link>
                  )}
                  <button
                    onClick={handleLogout}
                    className="text-sm font-medium text-red-600 hover:text-red-700 transition-colors text-left"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <div className="pt-4 border-t space-y-2">
                  <Link
                    href="/login"
                    className="text-sm font-medium text-foreground hover:text-accent transition-colors block"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/signup"
                    className="text-sm font-medium text-foreground hover:text-accent transition-colors block"
                  >
                    Create Account
                  </Link>
                </div>
              )}
            </nav>
            <div className="mt-4 pt-4 border-t">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="search"
                  placeholder="Search jewelry..."
                  className="pl-10 bg-muted/50 border-0 focus-visible:ring-1 focus-visible:ring-accent"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
