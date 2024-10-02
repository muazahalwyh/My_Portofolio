import { FaDribbble, FaInstagram, FaTiktok} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer footer-center bg-blue-950 bg-opacity-50 backdrop-filter backdrop-blur-md text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover" href="about">About</a>
        <a className="link link-hover" href="interest">Interest</a>
        <a className="link link-hover" href="skills">Skills</a>
        <a className="link link-hover" href="experience">Experience</a>
        <a className="link link-hover" href="awards">Awards</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
            <a href="">
              <FaInstagram className="w-8 h-6"/>
            </a>
            <a href="">
              <FaTiktok className="w-8 h-6"/>
            </a>
            <a href="">
              <FaDribbble className="w-8 h-6"/>
            </a>
        </div>
      </nav>
      <aside>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
    </footer>
  )
}