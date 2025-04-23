
import { Cloud, Settings, Check } from "lucide-react";

const features = [
  {
    icon: <Cloud className="h-12 w-12 text-cloud-500" />,
    title: "Multi-Cloud Management",
    description: "Seamlessly manage resources across AWS, Azure, Google Cloud, and other providers from a single dashboard."
  },
  {
    icon: <Settings className="h-12 w-12 text-cloud-500" />,
    title: "Automated Optimization",
    description: "Our AI-powered tools automatically detect and recommend ways to optimize your cloud resources and reduce costs."
  },
  {
    icon: <Check className="h-12 w-12 text-cloud-500" />,
    title: "Advanced Security",
    description: "Identify vulnerabilities and ensure compliance with built-in security scanning and automated remediation."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our cloud management platform provides everything you need to efficiently manage your cloud infrastructure.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-5 p-2 bg-cloud-50 inline-flex rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20">
          <div className="bg-cloud-50 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Stay in Control, Anywhere</h3>
                <p className="text-gray-600 mb-6">
                  Access your cloud infrastructure from any device with our responsive web interface and mobile application.
                </p>
                <ul className="space-y-3">
                  {[
                    "Real-time monitoring and alerts", 
                    "Cost management and budgeting", 
                    "One-click deployment templates"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-cloud-500 mr-2 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="aspect-[4/3] relative">
                  <img 
                    src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80" 
                    alt="Dashboard on laptop and mobile" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-cloud-500/10 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
