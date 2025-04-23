
import { Cloud } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2">
            <div className="flex items-center">
              <Cloud className="h-8 w-8 text-cloud-500" />
              <span className="ml-2 text-xl font-semibold text-gray-900">CloudLeaf</span>
            </div>
            <p className="mt-4 text-gray-600 max-w-xs">
              Simplify your cloud management with our powerful platform. Deploy, monitor, and optimize with ease.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Product</h3>
            <ul className="space-y-2">
              {["Features", "Solutions", "Pricing", "Documentation", "Resources"].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="text-gray-600 hover:text-cloud-500 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Company</h3>
            <ul className="space-y-2">
              {["About", "Careers", "Blog", "Partners", "Contact"].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="text-gray-600 hover:text-cloud-500 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Legal</h3>
            <ul className="space-y-2">
              {["Privacy Policy", "Terms of Service", "Security", "Compliance"].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="text-gray-600 hover:text-cloud-500 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} CloudLeaf. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {["Twitter", "LinkedIn", "GitHub", "YouTube"].map((social, idx) => (
              <a 
                key={idx} 
                href="#" 
                className="text-gray-400 hover:text-cloud-500 transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
