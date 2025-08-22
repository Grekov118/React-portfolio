import './Footer.css'
import { links} from '../../data/footerData'
import FooterGroup from './FooterGroup'

function Footer() {
	const currentYear = new Date().getFullYear()
	return (
	 <footer className="footer">
        <div className="container footer-wrapper">
            <div className="about-group">
                <h2>Ilay</h2>
                <p>Frontend Developer</p>
                <a href="#about">About me</a>
            </div>
            <div className="hr"></div>
						<FooterGroup title="More" links={links.info}/>
            
            <div className="hr"></div>
						<FooterGroup title="Follow" links={links.follow} isSocial/>
            
        </div>
        <p className="footer-copyright">© <span className="year">{currentYear}</span> by Coding Snow. All rights reserved.</p>
    </footer>
	)
}

export default Footer
