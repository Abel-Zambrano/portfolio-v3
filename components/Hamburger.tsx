import styled from "styled-components";
import { useState } from "react";
import { device } from "../JS/device";

const Wrapper = styled.div`
  display: none;
  cursor: pointer;
  @media ${device.tablet} {
    display: block;
  }
`;

const MyMobileMenuButton = styled.div`
  display: none;
  @media ${device.tablet} {
    display: block;
    margin-right: 20px;
    width: 100%;
    &#nav-icon1 {
      width: 40px;
      height: 10px;
      position: relative;
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transition: 0.5s ease-in-out;
      -moz-transition: 0.5s ease-in-out;
      -o-transition: 0.5s ease-in-out;
      transition: 0.5s ease-in-out;
      /* cursor: pointer; */
    }
    &#nav-icon1 span {
      display: block;
      position: absolute;
      height: 2px;
      width: 100%;
      background: var(--heading);
      border-radius: 4px;
      opacity: 1;
      left: 0;
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transition: 0.25s ease-in-out;
      -moz-transition: 0.25s ease-in-out;
      -o-transition: 0.25s ease-in-out;
      transition: 0.25s ease-in-out;
    }
    &#nav-icon1 span:nth-child(1) {
      top: 16px;
    }
    &#nav-icon1 span:nth-child(2) {
      top: 26px;
    }
    &#nav-icon1 span:nth-child(3) {
      top: 36px;
    }
    &#nav-icon1.open span:nth-child(1) {
      top: 26px;
      -webkit-transform: rotate(135deg);
      -moz-transform: rotate(135deg);
      -o-transform: rotate(135deg);
      transform: rotate(135deg);
      background: var(--primary);
    }
    &#nav-icon1.open span:nth-child(2) {
      opacity: 0;
      left: -60px;
      background: var(--primary);
    }
    &#nav-icon1.open span:nth-child(3) {
      top: 26px;
      -webkit-transform: rotate(-135deg);
      -moz-transform: rotate(-135deg);
      -o-transform: rotate(-135deg);
      transform: rotate(-135deg);
      background: var(--primary);
    }
  }
`;

export default function MobileMenuButton() {
  const [open, setOpen] = useState(false);

  const openHandler = () => {
    setOpen(!open);
  };

  return (
    <Wrapper onClick={openHandler}>
      <MyMobileMenuButton id="nav-icon1" className={`${open ? "open" : ""}`}>
        <span></span>
        <span></span>
        <span></span>
      </MyMobileMenuButton>
    </Wrapper>
  );
}
