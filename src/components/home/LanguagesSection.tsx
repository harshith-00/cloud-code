
import { useState, useEffect } from "react";

const LanguagesSection = () => {
  const [animateCards, setAnimateCards] = useState(false);

  useEffect(() => {
    // Trigger animations when component mounts
    const timer = setTimeout(() => {
      setAnimateCards(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const languages = [
    { name: "JavaScript", color: "bg-yellow-500" },
    { name: "Python", color: "bg-blue-500" },
    { name: "Java", color: "bg-amber-500" },
    { name: "C++", color: "bg-purple-500" },
    { name: "C", color: "bg-blue-600" },
    { name: "HTML", color: "bg-orange-500" },
    { name: "CSS", color: "bg-blue-400" },
    { name: "SQL", color: "bg-green-500" },
    { name: "R", color: "bg-blue-700" },
    { name: "PHP", color: "bg-indigo-400" },
    { name: "Ruby", color: "bg-red-500" },
    { name: "Go", color: "bg-teal-500" },
  ];

  return (
    <section id="languages" className="py-20 px-4 bg-gradient-to-br from-gray-900 to-purple-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gradient">Supported Languages</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Code in any language you want, we've got you covered.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          {languages.map((lang, index) => (
            <div 
              key={lang.name} 
              className={`px-4 py-2 rounded-full ${lang.color} bg-opacity-20 border border-white/10 backdrop-blur-sm transition-all hover:scale-110 duration-300 delay-${index * 50} ${
                animateCards ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {lang.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguagesSection;
