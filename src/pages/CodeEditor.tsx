
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import CodeEditorComponent from "@/components/CodeEditor";
import OutputPanel from "@/components/OutputPanel";
import { Button } from "@/components/ui/button";
import { Layout, Save, Share } from "lucide-react";

const CodeEditorPage = () => {
  const [code, setCode] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("JavaScript");
  
  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
  };

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-20 px-4 pb-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Code Editor</h1>
            <div className="flex gap-3">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Layout size={16} />
                <span>Layout</span>
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Save size={16} />
                <span>Save</span>
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Share size={16} />
                <span>Share</span>
              </Button>
            </div>
          </div>
          
          {/* Editor Layout */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="transition-all duration-500">
              <CodeEditorComponent 
                onCodeChange={handleCodeChange} 
                onLanguageChange={handleLanguageChange}
              />
            </div>
            <div className="transition-all duration-500">
              <OutputPanel 
                code={code} 
                language={selectedLanguage} 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditorPage;
