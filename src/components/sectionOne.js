import React, {useState, useEffect} from "react";
import "../styles/sectionOne.css";

export default function SectionOne() {
  const [offset, setOffset] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);

  useEffect(() => {
    // setImageHeight(600)
  }, [])

  useEffect(() => {
    const onScroll = () => {
        if(window.pageYOffset < 700){

            setOffset(window.pageYOffset);
        }
        else{
            setOffset(700)
        }
    };

    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    
    return () => window.removeEventListener("scroll", onScroll);
    
    
  }, []);

  return (
    <section className="sectionOne">
      <div
        style={{
          transform: `translateY(${offset}px)`,
        }}
        className="title"
      >
        Design Graphique
        <div className="occuption">Freelance</div>
      </div>

      <div className="image-container">
        <img
          className="image-bottle"
          // style={{
          //   height: `${imageHeight}px`
          // }}
          src={require("../images/bottle.jpg")}
          alt="bottle"
        />
        <img
          className="image-cup"
          src={require("../images/cup.png")}
          alt="coffee cup"
        />
      </div>
    </section>
  );
}