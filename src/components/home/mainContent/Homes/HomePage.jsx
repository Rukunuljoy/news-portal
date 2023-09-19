import Life from "../Life/Life";
import Ppost from "../Ppost/Ppost";
import Polpular from "../popular/Polpular";
import "./HomePage.css";

const HomePage = () => {
  return <div>
    <main>
        <div className="container">
            <section className="mainContent">
            <Polpular/>
            <Ppost/>
            <Life/>
            </section>
            <section className="sideContent"></section>
        </div>
    </main>
  </div>;
};

export default HomePage;
