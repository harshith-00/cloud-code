
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-purple-800 to-indigo-900 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
          Ready to Start Coding in the Cloud?
        </h2>
        <p className="text-xl mb-8 text-gray-300">
          Join thousands of developers who code better, faster, together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/editor">
            <Button 
              className="bg-black/30 text-white border border-white/20 hover:bg-black/50 px-8 py-6 text-lg"
            >
              Start Coding For Free
            </Button>
          </Link>
          <Link to="/auth">
            <Button 
              className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white hover:opacity-90 px-8 py-6 text-lg"
            >
              Create Account
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
