import ServicesItem from './ServicesItem';
import SecTitle from '../secTitle/SecTitle';
import './Services.css'


import {services} from "../../data/services"





function Services() {
	return (
		<section className="services section" id="services">
            <div className="container flex-center">
					<SecTitle title={'Services'} subtitle={'Services'}/>
               
                <div className="services-wrapper">
                    <h3 className="services-description">What I provide</h3>
                    <ul className="services-list">
                       <ServicesItem services={services}/>
                    </ul>
                </div>
            </div>
        </section>
	)
}

export default Services
