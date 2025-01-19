"use client";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavigationMenu } from "@/components/ui/navigation-menu";

import { useRouter } from "next/navigation"; // Correct import for `useRouter`

const Navbar = () => {
  const router = useRouter(); // Initialize the router

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/team" },
    { label: "Competitor Analysis", href: "https://gleaming-salamander-1e9f23.netlify.app/" },
    { label: "Contact", href: "/contact" },
  ];

  const handleGetStartedClick = () => {
    router.push("/chatbox");
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-black/80 to-gray-900/80 backdrop-blur-sm border-b border-gray-800/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              TechnoMads
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
            <Button
              variant="secondary"
              className="bg-purple-600/20 hover:bg-purple-600/30 text-white"
              onClick={handleGetStartedClick} // Call handleGetStartedClick when the button is clicked
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-gray-300" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-gradient-to-b from-gray-900/95 to-black/95 border-gray-800">
                <div className="flex flex-col space-y-4 mt-8">
                  {menuItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 py-2"
                    >
                      {item.label}
                    </a>
                  ))}
                  <Button
                    variant="secondary"
                    className="bg-purple-600/20 hover:bg-purple-600/30 text-white"
                    onClick={() => router.push("/chatbox")} // Fix: Wrap in an arrow function
                  >
                    Get Started
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
