import styled from "styled-components";
import Knowledge from "./Knowledge";
import Skills from "./Skills";
import Summary from "./Summary";
import { motion } from "framer-motion";

const MyAbout = styled.div`
  padding-top: 200px;
  margin-bottom: 200px;
`;

const MySummary = styled(Summary)`
  margin-bottom: 20px;
`;

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.6,
    },
  },
};

export default function About() {
  return (
    <>
      <MyAbout id="about">
        <MySummary />
        <motion.div initial="hidden" animate="visible" variants={variants}>
          <Knowledge />
          <Skills />
        </motion.div>
      </MyAbout>
    </>
  );
}
