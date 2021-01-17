import Banner from '../../components/banner'
import About from '../../components/about'
import Services from '../../components/services'
import Videos from '../../components/videos'
import Features from '../../components/features'
import Team from '../../components/team'
import Blog from '../../components/blog'
import Testimonial from '../../components/testimonial'
import Footer from '../../components/footer'
import ScrollTop from '../../components/scroll'


function HomePage() {
	return (
		<div>
			{/* Banner Part */}
			<Banner />

			{/* About Part */}
			<About />

			{/* Service Part */}
			<Services />

			{/* Video Part */}
			<Videos />

			{/* Feature Part */}
			<Features />

			{/* Team Part */}
			<Team />

			{/* Blog Part */}
			<Blog />

			{/* Testimonial Part */}
			<Testimonial />

			{/* Footer Part */}
			<Footer />

			{/* ScrollTop Part */}
			<ScrollTop />

			
		</div>
	)
}

export default HomePage; 