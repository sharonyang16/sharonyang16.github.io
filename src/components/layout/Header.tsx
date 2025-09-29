import Typography from "@/components/base/Typography";
import headerLinks from "@/content/headerLinks.json";
import Logo from "@/assets/Logo";

const Header = () => {
  return (
    <header className="w-full">
      <div className="py-8 flex lg:justify-between justify-center items-center">
        <Logo className="w-16" />
        <div className="hidden lg:block">
          <nav className="flex gap-8">
            {headerLinks.map((link: string) => (
              <a key={link} href={`#${link}`}>
                <Typography intent={"label1"}>{link}</Typography>
              </a>
            ))}
          </nav>
        </div>
      </div>
      <hr />
    </header>
  );
};

export default Header;
