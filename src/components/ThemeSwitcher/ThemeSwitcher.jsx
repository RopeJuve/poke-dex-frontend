import { Button } from "@/components/ui/button";
import { SunMoon, Moon } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export default function ThemeSwitcher() {
  const { toggleTheme, theme } = useTheme();
  return (
    <>
      <Button variant="ghost" onClick={toggleTheme}>
        {theme === "light" ? <SunMoon /> : <Moon />}
      </Button>
    </>
  );
}
