import Polpular from "../popular/Polpular";
import "./HomePage.css";

const HomePage = () => {
  return <div>
    <main>
        <div className="container">
            <section className="mainContent"><Polpular/></section>
            <section className="sideContent"></section>
        </div>
    </main>
  </div>;
};

export default HomePage;
