
import { useState, useEffect } from "react";
import FeatureCard from "@/components/FeatureCard";
import {
  Code,
  Cloud,
  Zap,
  Globe,
  Layout,
  Shield,
  Server,
  BookOpen,
  Users,
} from "lucide-react";

const FeaturesSection = () => {
  const [animateCards, setAnimateCards] = useState(false);

  useEffect(() => {
    // Trigger animations when component mounts
    const timer = setTimeout(() => {
      setAnimateCards(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: Code,
      title: "Multiple Languages",
      description: "Support for C, C++, Python, Java, JavaScript, HTML, CSS, SQL, R, and many more.",
    },
    {
      icon: Cloud,
      title: "Cloud Storage",
      description: "Your code is saved automatically and accessible from any device.",
    },
    {
      icon: Zap,
      title: "Real-time Collaboration",
      description: "Code together with teammates in real-time with collaborative editing.",
    },
    {
      icon: Globe,
      title: "Web Hosting",
      description: "Deploy your web projects instantly with built-in hosting.",
    },
    {
      icon: Layout,
      title: "Custom UI Themes",
      description: "Customize your coding environment with themes and layouts.",
    },
    {
      icon: Shield,
      title: "Secure Environment",
      description: "Enterprise-grade security for your code and data.",
    },
    {
      icon: Server,
      title: "API Integration",
      description: "Connect to third-party APIs directly from your projects.",
    },
    {
      icon: BookOpen,
      title: "Learning Resources",
      description: "Built-in tutorials and documentation for all supported languages.",
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join our community of developers to share and learn.",
    },
  ];

  return (
    <section id="features" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gradient">Powerful Features</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to code efficiently in one place.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className={`transition-all duration-500 delay-${index * 100} ${
                animateCards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <FeatureCard 
                icon={feature.icon} 
                title={feature.title} 
                description={feature.description} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
