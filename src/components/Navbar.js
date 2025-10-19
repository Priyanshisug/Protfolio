import './Navbar.css';

const Navbar = () => {
  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#hero" className="navbar-logo">Priyanshi Portfolio</a>
        <div className="navbar-menu">
          {navItems.map((item, idx) => (
            <a key={idx} href={item.href} className="navbar-link">
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
