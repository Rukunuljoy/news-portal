import { Hero } from '../Hero/Hero';
import Discover from '../discover/Discover';
import HomePage from '../mainContent/Homes/HomePage';
import './Home.css'
const Home = () => {
    return (
        <div>
            <Hero/>
            <HomePage/>
            <Discover/>
        </div>
    );
};

export default Home;