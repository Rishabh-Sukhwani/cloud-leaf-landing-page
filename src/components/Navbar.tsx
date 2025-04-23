
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Cloud } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <Cloud className="h-8 w-8 text-cloud-500" />
              <span className="ml-2 text-xl font-semibold text-foreground">CloudLeaf</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-cloud-500 transition-colors">
              Features
            </a>
            <a href="#solutions" className="text-gray-600 hover:text-cloud-500 transition-colors">
              Solutions
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-cloud-500 transition-colors">
              Pricing
            </a>
            <a href="#resources" className="text-gray-600 hover:text-cloud-500 transition-colors">
              Resources
            </a>
          </div>
          
          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost">Sign In</Button>
            <Button>Get Started</Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-cloud-500 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#features" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-cloud-500 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#solutions" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-cloud-500 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Solutions
            </a>
            <a 
              href="#pricing" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-cloud-500 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#resources" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-cloud-500 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </a>
            <div className="pt-4 flex flex-col space-y-2">
              <Button variant="outline" className="justify-center">Sign In</Button>
              <Button className="justify-center">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
