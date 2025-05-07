
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Code, Menu, X, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signOut, isAuthenticated } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const handleSignOut = async () => {
    await signOut();
    toast({
      title: "Signed out",
      description: "You have been successfully signed out.",
    });
    navigate("/");
  };
  
  return (
    <nav className="w-full bg-gray-900/80 backdrop-blur-md fixed top-0 z-50 shadow-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <Code className="h-8 w-8 text-purple-400 mr-2" />
                <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  CodeCloud
                </span>
              </Link>
            </div>
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-4">
                <Link to="/editor" className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                  Code Editor
                </Link>
                <a href="/#features" className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                  Features
                </a>
                <a href="/#languages" className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                  Languages
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {isAuthenticated ? (
                <div className="flex items-center gap-4">
                  <span className="text-gray-300 text-sm">{user?.email}</span>
                  <Button 
                    variant="outline" 
                    onClick={handleSignOut}
                    className="border-white/10 text-gray-300 hover:bg-gray-800"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </Button>
                </div>
              ) : (
                <>
                  <Link to="/auth">
                    <Button 
                      variant="outline" 
                      className="border-white/10 text-gray-300 hover:bg-gray-800"
                    >
                      Sign In
                    </Button>
                  </Link>
                  <Link to="/auth">
                    <Button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white hover:opacity-90">
                      Sign Up
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-purple-400 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800 shadow-lg">
            <Link to="/editor" className="text-gray-300 hover:text-purple-400 block px-3 py-2 rounded-md text-base font-medium">
              Code Editor
            </Link>
            <a href="/#features" className="text-gray-300 hover:text-purple-400 block px-3 py-2 rounded-md text-base font-medium">
              Features
            </a>
            <a href="/#languages" className="text-gray-300 hover:text-purple-400 block px-3 py-2 rounded-md text-base font-medium">
              Languages
            </a>
            <div className="pt-4 flex flex-col space-y-2">
              {isAuthenticated ? (
                <>
                  <span className="text-gray-300 text-sm px-3">{user?.email}</span>
                  <Button 
                    variant="outline" 
                    onClick={handleSignOut}
                    className="w-full border-white/10 text-gray-300 hover:bg-gray-700"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/auth">
                    <Button variant="outline" className="w-full border-white/10 text-gray-300 hover:bg-gray-700">Sign In</Button>
                  </Link>
                  <Link to="/auth">
                    <Button className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white hover:opacity-90">
                      Sign Up
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
