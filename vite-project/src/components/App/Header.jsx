function Header() {
  return (
    <>
      <div className="header">
        <h1 className="header-title">My Application</h1>
        <nav className="header-nav">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
export default Header;
