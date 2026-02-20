"use client";
import Link from "next/link"
import Image from "next/image"
import posthog from "posthog-js";

const Navbar = () => {
  const handleNavClick = (label: string) => {
    posthog.capture("nav_link_clicked", { label });
  };

  return (
    <header>
      <nav>
        <Link className="flex items-center gap-2" href="/" onClick={() => handleNavClick("logo")}>
          <Image src="/icons/logo.png" alt="logo" width={24} height={24} />
          <p>DevEvent</p>
        </Link>
        <ul>
          <li className="list-none" ><Link href="/" onClick={() => handleNavClick("Home")}>Home</Link></li>
          <li className="list-none"><Link href="/" onClick={() => handleNavClick("Events")}>Events</Link></li>
          <li className="list-none"><Link href="/" onClick={() => handleNavClick("Create Event")}>Create Event</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
