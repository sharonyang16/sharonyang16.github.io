"use client";
import Typography from "@/components/base/Typography/Typography";
import Logo from "./Logo";
import ThemeButton from "./ThemeButton";
import { nav } from "./data";

const Header = () => {
  return (
    <header className="w-full">
      <div className="py-8 flex lg:justify-between justify-center items-center">
        <Logo className="w-12" />
        <div className="hidden lg:block">
          <div className="flex gap-8 items-center">
            <nav className="flex gap-8">
              {nav.map((link: string) => (
                <a key={link} href={`#${link}`}>
                  <Typography intent={"label1"}>{link}</Typography>
                </a>
              ))}
            </nav>
            <ThemeButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
