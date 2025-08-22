import "./Portfolio.css";
import { portfolioData } from "../../data/portfolioData";


import SecTitle from "../secTitle/SecTitle";
import PortfolioItem from "./PortfolioItem";

function Portfolio() {
  return (
    <section className="portfolio section" id="portfolio">
      <div className="container flex-center">
        <SecTitle title="Portfolio" subtitle="Portfolio" />
        <div className="portfolio-wrapper">
          {portfolioData.map((item) => {
            return <PortfolioItem key={item.id} item={item}/>;
          })}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
