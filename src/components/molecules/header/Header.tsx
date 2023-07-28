type HeaderProps = {
  title: string;
  subtitle: string;
};

const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <header>
      <h1>{title}</h1>
      <h1>{subtitle}</h1>
    </header>
  );
};

export default Header;
