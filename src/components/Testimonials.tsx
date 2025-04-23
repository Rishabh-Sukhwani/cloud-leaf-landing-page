
const testimonials = [
  {
    quote: "CloudLeaf has transformed how we manage our cloud infrastructure. We've reduced costs by 35% while improving deployment speed.",
    author: "Sarah Johnson",
    role: "CTO, TechNova",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150"
  },
  {
    quote: "The multi-cloud management capabilities are simply outstanding. It's like having an entire cloud ops team at your fingertips.",
    author: "Michael Chen",
    role: "DevOps Lead, DataSphere",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=150&h=150"
  },
  {
    quote: "The intuitive interface and automation features have made managing our complex infrastructure remarkably simple.",
    author: "Alex Rivera",
    role: "System Architect, CloudWave",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-cloud-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what our customers have to say about CloudLeaf's cloud management platform.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-md border border-gray-100"
            >
              <div className="mb-6">
                <svg viewBox="0 0 24 24" width="24" height="24" className="text-cloud-300 mb-2">
                  <path 
                    fill="currentColor" 
                    d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.626.41-2.23.315-.606.814-1.083 1.492-1.425.68-.344 1.34-.514 1.978-.514.976 0 1.771.323 2.387.966.615.644.923 1.613.923 2.906v.878c0 .808-.033 1.49-.102 2.033-.07.543-.21.912-.416 1.105-.208.193-.574.29-1.1.29-.517 0-.876-.098-1.078-.29-.203-.193-.337-.56-.407-1.105-.07-.545-.106-1.226-.106-2.033v-.878zM6.56 18.18c0-1.074-.378-1.82-1.133-2.237-.395-.208-.83-.313-1.31-.313-.368 0-.743.066-1.125.199-.367.133-.628.301-.785.503-.157.203-.258.414-.304.633-.044.219-.048.39-.015.514.033.124.068.187.104.187.387-.083.834-.125 1.343-.125.82 0 1.537.216 2.15.648.615.433.975 1.01 1.077 1.732v.316z"
                  />
                </svg>
                <p className="text-gray-700">{testimonial.quote}</p>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
