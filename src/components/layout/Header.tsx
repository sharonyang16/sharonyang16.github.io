import Typography from "@/components/base/Typography";

const Header = () => {
  return (
    <header className="py-8 flex justify-between">
      <Typography>Sharon Yang</Typography>
      <nav>
        <Typography>experience</Typography>
        <Typography>code</Typography>
        <Typography>design</Typography>
      </nav>
    </header>
  );
};

export default Header;
