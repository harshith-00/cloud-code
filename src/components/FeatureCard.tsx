
import { LucideIcon } from 'lucide-react';
import { useState } from 'react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`glass-card p-6 rounded-lg transition-all duration-300 ${
        isHovered ? 'transform -translate-y-2' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-codebase-accent/10 text-codebase-accent transition-transform duration-500 ${
        isHovered ? 'rotate-12' : ''
      }`}>
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
