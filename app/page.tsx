import Link from "next/link";
import NavBar from "./ui/navBar";

export default function Home() {
  return (
    <>
      <div className="home">
        <NavBar />
        <h2 className="content-center">Discover new recepies!</h2>
      </div>

      <div className="search">
        <input type="text" name="" id="" placeholder="Mashed Potatoes" />
      </div>
    </>
  );
}
