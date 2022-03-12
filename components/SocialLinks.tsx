import styled from "styled-components";
import { FaPaperPlane, FaLinkedinIn, FaGithub } from "react-icons/fa";

const MySocialLinks = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 210px;

  .icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--primary);
    border-radius: 50%;
    height: 35px;
    width: 35px;
    cursor: pointer;
    transition: 0.2s;
    :hover {
      transform: scale(1.2);
    }

    .linkedin {
      font-size: 2rem;
      color: var(--page-bg);
    }
    .paper-plane {
      font-size: 1.8rem;
      color: var(--page-bg);
    }
  }

  .github {
    font-size: 3.5rem;
    color: var(--primary);
    cursor: pointer;
    transition: 0.2s;
    :hover {
      transform: scale(1.2);
    }
  }
`;

export default function SocialLinks() {
  return (
    <MySocialLinks>
      <div className="icon-wrapper">
        <a href="mailto:azambrano1417@gmail.com">
          <FaPaperPlane className="paper-plane" />
        </a>
      </div>

      <div className="icon-wrapper">
        <a href="https://www.linkedin.com/in/abel-zambrano/" target="_blank">
          <FaLinkedinIn className="linkedin" />
        </a>
      </div>
      <a href="https://github.com/Abel-Zambrano" target="_blank">
        <FaGithub className="github" />
      </a>
    </MySocialLinks>
  );
}
