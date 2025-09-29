import Typography from "@/components/base/Typography";
import headerLinks from "@/content/headerLinks.json";

const Header = () => {
  return (
    <header className="w-full">
      <div className="py-8 flex justify-between">
        <Typography>Sharon Yang</Typography>
        <nav className="flex gap-8">
          {headerLinks.map((link: string) => (
            <a key={link} href={`#${link}`}>
              <Typography intent={"label1"}>{link}</Typography>
            </a>
          ))}
        </nav>
      </div>
      <hr />
    </header>
  );
};

export default Header;
