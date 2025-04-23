
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-cloud-600 to-cloud-700 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Simplify Your Cloud Management?</h2>
          <p className="text-lg mb-8 text-white/90">
            Join thousands of companies that have simplified their cloud operations and reduced costs with our platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" className="text-cloud-700 hover:text-cloud-800">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20 group">
              Request Demo
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
