import { useState } from "react";
import PortfolioModal from "./PortfolioModal";

function PortfolioItem({ item }) {
	const [isModalOpen, setIsModalOpen] = useState(false)

const openModal = () => {
	setIsModalOpen(!isModalOpen)
}

const closeModal = () => {
	setIsModalOpen(!isModalOpen)
}

  return (
    <div className="portfolio-img-card">
      <div className="img-card" onClick={openModal}>
        <div className="overlay"></div>
        <div className="info">
          <h3>{item.title}</h3>
          <span>{item.category}</span>
        </div>
        <img src={item.imgSrc} alt="{item.title}" />
      </div>
      {isModalOpen && <PortfolioModal item={item} isModalOpen={openModal} closeModal={closeModal}/>}
    </div>
  );
}

export default PortfolioItem;
