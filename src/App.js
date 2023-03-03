import "./style.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import profiles from "./data";

function App() {
  const cards = profiles.map((profile) => {
    return <Card key={profile.id} {...profile} />;
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </div>
  );
}

export default App;
