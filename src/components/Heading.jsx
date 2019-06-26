import React from "react";
import styled from "styled-components";

const HeadingText = styled.h1`
  text-align: center;
  margin: 0;
`;

const Heading = props => {
  return <HeadingText>{props.children}</HeadingText>;
};

export default Heading;
