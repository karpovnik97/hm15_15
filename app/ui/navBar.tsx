import Link from "next/link";

function NavBar() {
  return (
    <div className="navbar">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </div>
  );
}

export default NavBar;
