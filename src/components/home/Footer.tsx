
import { Link } from "react-router-dom";
import { Code } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center mb-4">
            <Code className="h-6 w-6 text-purple-400 mr-2" />
            <span className="text-xl font-bold">CodeCloud</span>
          </div>
          <p className="text-gray-400">
            Code Anytime, Anywhere — Instantly in the Cloud.
          </p>
        </div>
        
        <div>
          <h3 className="font-bold mb-4">Product</h3>
          <ul className="space-y-2">
            <li><Link to="/editor" className="text-gray-400 hover:text-white">Code Editor</Link></li>
            <li><a href="/#features" className="text-gray-400 hover:text-white">Features</a></li>
            <li><a href="/#languages" className="text-gray-400 hover:text-white">Languages</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-bold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Legal</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-gray-800 text-center text-gray-400">
        <p>© {new Date().getFullYear()} CodeCloud. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
