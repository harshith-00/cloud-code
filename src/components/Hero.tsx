
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Code, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-20 md:pt-32 pb-16 md:pb-24 overflow-hidden bg-gradient-to-br from-gray-900 to-purple-900">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="animate-fade-in mb-6 inline-flex items-center rounded-full border border-purple-500/30 bg-gray-800/70 px-3 py-1 text-sm backdrop-blur-md">
            <span className="mr-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 p-1">
              <Code className="h-3 w-3 text-white" />
            </span>
            <span className="text-gray-300">Now with improved compiler support</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
              Code Anytime, Anywhere
            </span>
            <br />
            <span className="text-white">Instantly in the Cloud</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Write, run, and test code in C, C++, Python, Java, JavaScript, HTML, CSS, SQL, R, and more 
            — all in one seamless, real-time online IDE. No setup. Just code.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/editor">
              <Button className="px-8 py-6 text-lg bg-gradient-to-r from-purple-500 to-indigo-600 text-white flex items-center gap-2 hover:opacity-90 transition-all hover:scale-105">
                Start Coding Now
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            
            <Link to="/auth">
              <Button variant="outline" className="px-8 py-6 text-lg border border-white/20 text-gray-200 hover:bg-white/5">
                Create Account
              </Button>
            </Link>
          </div>
          
          <div className="mt-12 md:mt-20 w-full max-w-4xl mx-auto neo-blur rounded-lg overflow-hidden border border-white/10 animate-fade-in shadow-2xl">
            <div className="w-full h-10 bg-gray-800/70 border-b border-white/10 flex items-center px-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="flex-1 text-center text-sm font-medium text-gray-400">
                code.js - CodeCloud Editor
              </div>
            </div>
            <div className="p-4 bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300 text-sm font-mono overflow-hidden">
              <div className="animate-typing overflow-hidden whitespace-nowrap">
                <span className="text-blue-400">function</span> <span className="text-purple-400">greet</span>()<span className="text-purple-400"> {`{`}</span><br/>
                &nbsp;&nbsp;<span className="text-blue-400">return</span> <span className="text-green-400">"Hello, CodeCloud!"</span>;<br/>
                <span className="text-purple-400">{`}`}</span><br/><br/>
                <span className="text-cyan-400">console.log</span>(<span className="text-purple-400">greet</span>());<br/>
                <span className="text-gray-500">// Output: Hello, CodeCloud!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
