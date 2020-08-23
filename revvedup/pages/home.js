import Head from "next/head";
import styles from "../styles/styles.css";
import data from '../data/generation';

export default function Home() {
  console.log(data());
  return (
    <div className="main">
      <link href="http://corvetteinformed.com/css/new.css" rel="stylesheet" />
      <header className="main-header">
        <div>
          <h1>{data.pageTitle}</h1>
          <nav className="normnav">
            {data.nav.links.map(link => <div><a href="">link.name</a></div>)} 
            <div>
              <a href="/index.html">Home</a>
            </div>
            <div>
              <a href>Gallery</a>
            </div>
            <div>
              <a href>News and Forums</a>
            </div>
            <div>
              <a href="/aboutme.html">About me</a>
            </div>
            <div>
              <a href="/otherwebsites.html">My Other Websites</a>
            </div>
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
      <section className="grid-cont">
        <div className="grid-title">
          <span>First </span>
          <span>Generation</span>
        </div>
        <div className="cG cGc1">
          {/* <img src="Images/C1Background.jpg" alt="C1 Background"> */}
          <div className="grid">
            <a href="1953.html">
              <img src alt />
              <span>1953</span>
            </a>
            <a href>
              <img src alt />
              <span>1954</span>
            </a>
            <a href>
              <img src alt />
              <span>1955</span>
            </a>
            <a href>
              <img src alt />
              <span>1956</span>
            </a>
            <a href>
              <img src alt />
              <span>1957</span>
            </a>
            <a href>
              <img src alt />
              <span>1958</span>
            </a>
            <a href>
              <img src alt />
              <span>1959</span>
            </a>
            <a href>
              <img src alt />
              <span>1960</span>
            </a>
            <a href>
              <img src alt />
              <span>1961</span>
            </a>
            <a href>
              <img src alt />
              <span>1962</span>
            </a>
          </div>
        </div>
      </section>
      <footer className="page-bottom-cont">
        <div className="page-bottom">
          <div className="side">
            <div className="sidespan">
              <span>
                Corvette Informed is an informative webpage who's purpose is to
                provide information on the different generations of the
                Chevrolet Corvette.
              </span>
            </div>
            <div className="bottom-side">
              <div>
                <a href="#">
                  <img src="Images/facebook.png" alt="Facebook Link" />
                </a>
              </div>
              <div>
                <a href="#">
                  <img src="Images/twitter.png" alt />
                </a>
              </div>
            </div>
          </div>
          <div className="page-bottom-image">
            <img src="Images/PBottomCLogo.jpg" alt="Corvette Logo" />
          </div>
          <div className="side">
            <div className="sidespan">
              <span>
                I do not claim that any of the shown information or images are
                my own. If you have any questions or need to contact me, please
                click on the email icon below.
              </span>
            </div>
            <div className="bottom-side">
              <div>
                <a href="#">
                  <img src="Images/instagram.jpg" alt />
                </a>
              </div>
              <div>
                <a href="mailto: kenneth.mathis.simpson@gmail.com">
                  <img src="Images/email.png" alt />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
