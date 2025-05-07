
import { Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState, useEffect } from "react";

interface Language {
  name: string;
  icon: string;
  category: string;
}

interface LanguageSelectorProps {
  onSelect: (language: string) => void;
  initialLanguage?: string;
}

const languages: Language[] = [
  { name: "JavaScript", icon: "JS", category: "scripting" },
  { name: "Python", icon: "PY", category: "scripting" },
  { name: "Java", icon: "JV", category: "compiled" },
  { name: "C++", icon: "C++", category: "compiled" },
  { name: "C", icon: "C", category: "compiled" },
  { name: "HTML", icon: "HTML", category: "markup" },
  { name: "CSS", icon: "CSS", category: "markup" },
  { name: "SQL", icon: "SQL", category: "query" },
  { name: "R", icon: "R", category: "statistical" },
];

const LanguageSelector = ({ onSelect, initialLanguage }: LanguageSelectorProps) => {
  const [selected, setSelected] = useState<Language>(
    initialLanguage ? 
      languages.find(lang => lang.name === initialLanguage) || languages[0] : 
      languages[0]
  );

  useEffect(() => {
    if (initialLanguage) {
      const lang = languages.find(lang => lang.name === initialLanguage);
      if (lang) {
        setSelected(lang);
      }
    }
  }, [initialLanguage]);

  const handleSelect = (language: Language) => {
    setSelected(language);
    onSelect(language.name);
  };

  // Group languages by category
  const groupedLanguages = languages.reduce((groups, language) => {
    const category = language.category || 'other';
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(language);
    return groups;
  }, {} as Record<string, Language[]>);

  // Get categories in a nice order
  const categories = [
    'scripting',
    'compiled',
    'markup',
    'query',
    'statistical',
    'other'
  ].filter(cat => groupedLanguages[cat]);

  const getCategoryEmoji = (category: string) => {
    switch (category) {
      case 'scripting': return '📜';
      case 'compiled': return '⚙️';
      case 'markup': return '🔖';
      case 'query': return '🔍';
      case 'statistical': return '📊';
      default: return '🧩';
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2 bg-white">
          <div className="flex items-center justify-center w-6 h-6 rounded bg-codebase-accent/10 text-codebase-accent text-xs font-bold">
            {selected.icon}
          </div>
          <span>{selected.name}</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-[200px] max-h-[320px] overflow-y-auto">
        {categories.map(category => (
          <div key={category}>
            <DropdownMenuLabel className="capitalize flex items-center gap-2">
              {getCategoryEmoji(category)} {category}
            </DropdownMenuLabel>
            
            {groupedLanguages[category].map((language) => (
              <DropdownMenuItem
                key={language.name}
                className="flex items-center justify-between"
                onClick={() => handleSelect(language)}
              >
                <div className="flex items-center gap-2">
                  <div className="flex items-center justify-center w-6 h-6 rounded bg-codebase-accent/10 text-codebase-accent text-xs font-bold">
                    {language.icon}
                  </div>
                  <span>{language.name}</span>
                </div>
                {language.name === selected.name && (
                  <Check className="h-4 w-4 text-codebase-accent" />
                )}
              </DropdownMenuItem>
            ))}
            
            {category !== categories[categories.length - 1] && (
              <DropdownMenuSeparator />
            )}
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
