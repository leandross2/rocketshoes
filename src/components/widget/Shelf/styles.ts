import { styled } from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18.75em, 1fr));
  grid-auto-rows: minmax(1fr, auto);
  flex-direction: column;
  grid-gap: 1rem;
  max-width: 60rem; 
  margin: 0 auto ;
`