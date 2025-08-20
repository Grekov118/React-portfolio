import { FaXmark } from "react-icons/fa6";

function PortfolioModal({ item, isModalOpen, closeModal }) {
  return (
    <div className={`portfolio-model ${isModalOpen ? 'active' : null}`}>
      <div className="portfolio-model-body">
        <FaXmark className="portfolio-close-btn" onClick={closeModal} />
        <h3>{item.title}</h3>
        <img src={item.imgSrc} alt={item.title} />
        <p>{item.description}</p>
      </div>
    </div>
  );
}

export default PortfolioModal;
