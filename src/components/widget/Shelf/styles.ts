import { styled } from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: minmax(1fr, auto);
  flex-direction: column;
  grid-gap: 16px;
  max-width: 940px; 
  margin: 0 auto ;
`