import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

interface SearchInputProps {
  isMobile?: boolean;
}

export default function SearchInput({ isMobile }: SearchInputProps) {
  return (
    <div className="flex items-center">
      <Input placeholder="Search..." />
      <Button variant="outline" size="icon" className={isMobile ? "ml-4" : "ml-2"}>
        <SearchIcon className="h-4 w-4" />
      </Button>
    </div>
  );
}