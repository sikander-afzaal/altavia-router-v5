import "./styles/Home.css";
import Hero from "./Hero";
import Info from "./Info";
import NftTable from "./NftTable";

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home">
        <Hero />
        <Info />
        <NftTable />
      </div>
    </div>
  );
};

export default Home;
