import { useRef } from "react";

import "../styles/Navbar.css";
import styled from "styled-components";
import Colors from "../styles/colors";

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);

  const showNavbar = () => {
    (navRef.current as HTMLElement).classList.toggle(
      "responsive_nav"
    );
  };

  return (
    <Header>
      <h3>Schoolish</h3>
      <nav ref={navRef}>
        <a href="/#">
          <span>Home</span>
        </a>
        <a href="/#">
          <span>My work</span>
        </a>
        <a href="/#">
          <span>Blog</span>
        </a>
        <a href="/#">
          <span>About me</span>
        </a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
          </svg>
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
      </button>
    </Header>
  );
}

const Header = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  width: 100vw;
  padding: 0 2rem;
  background-color: ${Colors.mainColor};
  color: ${Colors.textColor};
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;

  z-index: 1000;
`;
