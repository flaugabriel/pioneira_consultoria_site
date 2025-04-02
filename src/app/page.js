import Navbar from "./components/navbar";
import Info from "./components/info";
import Services from "./components/services";
import Commitment from "./components/commitment";
import History from "./components/history";
import Social from "./components/social";
import Description from "./components/description";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="bg-green-500">
      <Navbar></Navbar>
      <Info></Info>
      <Services></Services>
      <Commitment></Commitment>
      <History></History>
      <Social></Social>
      <Description></Description>
      <Footer></Footer>
    </div>
  );
}
