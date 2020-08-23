import { useRouter } from "next/router";
import Header from "./../../components/header";
import { generations } from "./../../data/generation";

export default function Generation(props) {
  const router = useRouter().query;
  // Gets the number from last part of the url (ie. /two)
  const selectedGen = parseInt(router.gen, 10) - 1 || 0;
  console.log(generations, selectedGen);
  const thisGensData = generations[selectedGen];
  const links = thisGensData.yearLinks;
  console.log(selectedGen, thisGensData);
  // in case there's an error
  if (!thisGensData) {
    return <h1>There was a problem</h1>;
  }
  // now we're safe
  return (
    <div className="main">
      <link href="http://corvetteinformed.com/css/new.css" rel="stylesheet" />
      <Header></Header>
      <section className="grid-cont">
        <div className="grid-title">
          <span>{thisGensData.pageTitle}</span>
        </div>
        <div
          className="cG cGc1"
          style={{ backgroundImage: `url(${thisGensData.backgroundSrc})` }}
        >
          {/* <img src="Images/C1Background.jpg" alt="C1 Background"> */}
          <div className="grid">
            {links.map((link, index) => {
              return (
                <a href={`/year/${link.year}`} key={link.year}>
                  <span>{link.year}</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
