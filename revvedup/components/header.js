import { links } from "../data/header";

function Header(props) {
  console.log(props);
  return (
    <header className="main-header">
      <div>
        <h1>{props.navTitle}</h1>
        <nav className="normnav">
          {links.map((link, index) => {
            return (
              <div key={index}>
                <a key={index} href={link.href}>
                  {link.name}
                </a>
              </div>
            );
          })}
        </nav>
        <div className="navdropdown">
          <button className="navbutton" onclick="toggleFunctionNav()">
            <img src="/Images/Navicon.jpg" alt="Menu" />
          </button>
          <div className="togcontent" id="toggleMe">
            <a href="/index.html">Home</a>
            <a href>Gallery</a>
            <a href>News and Forums</a>
            <a href="/aboutme.html">About me</a>
            <a href="/otherwebsites.html">My Other Websites</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
