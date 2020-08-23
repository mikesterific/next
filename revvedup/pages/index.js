import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/header";
import { links, navTitle } from "../data/header";

export default function Home(props) {
  return (
    <div className="main">
      <Header navTitle={navTitle} links={links}></Header>
      <div className="generations" title="Generation Selection Boxes C1 - C7">
        <div style={{ padding: 0 }}>
          <p className="genInstructionsText">
            Click on the box for the generation of corvette you're looking for,
            then select the year when the next page loads.
          </p>
        </div>
        <div>
          <a href="C7.html">
            <img src="//corvetteinformed.com/Images/C7 Gen Box.jpg" alt="C7" />
            <span id="gen7-text" className="genText">
              7th Generation 2014 - 2019
            </span>
          </a>
        </div>{" "}
        {/*https://vengeanceracing.net/images/banner-c7white.jpg*/}
        <div>
          <a href="C6.html">
            <img
              src="//corvetteinformed.com/Images/C6 Gen Box 2.jpg"
              alt="C6"
            />
            <span className="genText">6th Generation 2005 - 2013</span>
          </a>
        </div>{" "}
        {/*https://www.speednik.com/wp-content/blogs.dir/1/files/2016/05/2016-05-23_20-03-49.jpg*/}
        <div>
          <a href="/gens/5">
            <img src="//corvetteinformed.com/Images/C5 Gen Box.jpg" alt="C5" />
            <span className="genText">5th Generation 1997 - 2004</span>
          </a>
        </div>
        <div>
          <a href="/gens/4">
            <img src="//corvetteinformed.com/Images/C4 Banner.jpg" alt="C4" />
            <span className="genText">4th Generation 1984 - 1996</span>
          </a>
        </div>
        <div>
          <a href="/gens/3">
            <img src="//corvetteinformed.com/Images/C3 Gen Box.jpg" alt="C3" />
            <span className="genText">3rd Generation 1968 - 1982</span>
          </a>
        </div>
        <div>
          <a href="/gens/2">
            <img src="//corvetteinformed.com/Images/C2 Gen Box.jpg" alt="C2" />
            <span className="genText">2nd Generation 1962 - 1967</span>
          </a>
        </div>
        <div>
          <a href="/gens/1">
            <img src="//corvetteinformed.com/Images/C1 Gen Box.jpg" alt="C1" />
            <span className="genText">1st Generation 1953 - 1962</span>
          </a>
        </div>
      </div>

      <footer></footer>
    </div>
  );
}
