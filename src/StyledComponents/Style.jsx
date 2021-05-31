import styled from "styled-components";

export const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  color: #363636;
`;

export const Description = styled.p`
  font-size: 1rem;
  padding: 1rem;
  color: #363636;
  text-align: justify;
  background-color: #ccc;
  border-radius: 0.2rem;
`;

export const Button = styled.button`
  background-color: ${(props) => (props.primary ? "#256eff" : "#333333")};
  padding: 1rem;
  text-align: center;
  color: #fff;
  border-radius: 0.2rem;
  border: 1px solid #256eff;
  font-size: 1.2rem;
  cursor: pointer;
`;
