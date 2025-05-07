
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const DemoSection = () => {
  return (
    <section className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gradient">Experience Seamless Coding</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Write code, see results instantly. Our cloud-based IDE makes coding simple and accessible.
          </p>
        </div>
        
        <div className="flex flex-col items-center">
          <Link to="/editor">
            <Button 
              className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-8 py-6 text-lg mb-8 hover:scale-105 transition-transform"
            >
              Try the Code Editor Now
            </Button>
          </Link>
          
          <div className="relative w-full max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-indigo-600/30 blur-xl opacity-30 rounded-xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
              alt="Code Editor Interface" 
              className="relative w-full h-auto object-cover rounded-xl shadow-2xl border border-white/10"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Button 
                className="bg-black/70 text-purple-400 hover:bg-black/90 shadow-lg flex items-center gap-2 px-6 py-6 rounded-full border border-white/10"
                size="lg"
              >
                <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                Start Coding
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
