
import { useState, useEffect } from "react";
import LanguageSelector from "./LanguageSelector";

interface CodeEditorProps {
  onCodeChange?: (code: string) => void;
  onLanguageChange?: (language: string) => void;
}

const CodeEditor = ({ onCodeChange, onLanguageChange }: CodeEditorProps) => {
  const [selectedLanguage, setSelectedLanguage] = useState("JavaScript");
  const [code, setCode] = useState("");

  // Default code examples for different languages
  const codeExamples: Record<string, string> = {
    JavaScript: `// Write your JavaScript code here
function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet("CodeCloud user"));`,
    Python: `# Write your Python code here
def greet(name):
    return f"Hello, {name}!"

print(greet("CodeCloud user"))`,
    Java: `// Write your Java code here
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, CodeCloud user!");
    }
}`,
    "C++": `// Write your C++ code here
#include <iostream>
using namespace std;

int main() {
    cout << "Hello, CodeCloud user!" << endl;
    return 0;
}`,
    C: `// Write your C code here
#include <stdio.h>

int main() {
    printf("Hello, CodeCloud user!\\n");
    return 0;
}`,
    HTML: `<!-- Write your HTML code here -->
<!DOCTYPE html>
<html>
<head>
    <title>CodeCloud Example</title>
</head>
<body>
    <h1>Hello, CodeCloud user!</h1>
</body>
</html>`,
    CSS: `/* Write your CSS code here */
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
}

h1 {
    color: #9B87F5;
    text-align: center;
}`,
    SQL: `-- Write your SQL code here
CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL
);

INSERT INTO users (id, name, email)
VALUES (1, 'CodeCloud User', 'user@example.com');

SELECT * FROM users;`,
    R: `# Write your R code here
greeting <- function(name) {
  return(paste0("Hello, ", name, "!"))
}

print(greeting("CodeCloud user"))`,
  };

  useEffect(() => {
    // Set default code for selected language
    setCode(codeExamples[selectedLanguage] || "");
  }, [selectedLanguage]);

  useEffect(() => {
    // Notify parent component when code changes
    if (onCodeChange) {
      onCodeChange(code);
    }
  }, [code, onCodeChange]);

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    
    // Notify parent component when language changes
    if (onLanguageChange) {
      onLanguageChange(language);
    }
  };

  const getLanguageClass = (language: string) => {
    const classes = {
      JavaScript: "text-yellow-500",
      Python: "text-blue-500",
      Java: "text-amber-500",
      "C++": "text-purple-500",
      C: "text-blue-600",
      HTML: "text-orange-500",
      CSS: "text-blue-400",
      SQL: "text-green-500",
      R: "text-blue-700",
    };
    return classes[language as keyof typeof classes] || "";
  };

  return (
    <div className="flex flex-col rounded-lg overflow-hidden border border-gray-200 shadow-lg bg-white">
      <div className="flex items-center justify-between p-3 bg-gray-50 border-b">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        <div className="text-sm font-medium text-gray-600">
          <LanguageSelector onSelect={handleLanguageChange} />
        </div>
      </div>
      <div className="p-1">
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className={`code-font w-full h-[400px] md:h-[500px] p-4 focus:outline-none resize-none bg-codebase-background text-white ${getLanguageClass(
            selectedLanguage
          )}`}
          placeholder={`Write your ${selectedLanguage} code here...`}
          spellCheck="false"
        />
      </div>
      <div className="flex justify-between items-center p-3 bg-gray-50 border-t">
        <span className="text-xs text-gray-500">{code.split('\n').length} lines</span>
        <button 
          className="px-4 py-2 bg-gradient-to-r from-codebase-accent to-codebase-highlight text-white rounded-md hover:opacity-90 transition-opacity flex items-center gap-2"
        >
          <span className="animate-pulse bg-green-400 w-2 h-2 rounded-full"></span>
          Run
        </button>
      </div>
    </div>
  );
};

export default CodeEditor;
