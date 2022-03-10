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

    .linkedin {
      font-size: 2rem;
      color: var(--sidebar-bg);
    }
    .paper-plane {
      font-size: 1.8rem;
      color: var(--sidebar-bg);
    }
  }

  .github {
    font-size: 3.5rem;
    color: var(--primary);
  }
`;

export default function SocialLinks() {
  return (
    <MySocialLinks>
      <div className="icon-wrapper">
        <FaPaperPlane className="paper-plane" />
      </div>
      <div className="icon-wrapper">
        <FaLinkedinIn className="linkedin" />
      </div>
      <FaGithub className="github" />
    </MySocialLinks>
  );
}
