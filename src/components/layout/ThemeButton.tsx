import { FaRegMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import Button from "../base/Button";
import { useTheme } from "@/hooks/useTheme";

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button variant={"secondary"} onClick={() => toggleTheme()}>
      {theme === "dark" ? <FiSun /> : <FaRegMoon />}
    </Button>
  );
};

export default ThemeButton;
