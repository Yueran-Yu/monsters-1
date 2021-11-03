import React from 'react';
import styled from 'styled-components';
import {Card} from "./card.component";

const Wrapper = styled.div`
  width: 85vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
`

export const CardList = ({monsters}) => {
  return (
    <Wrapper>
      {monsters.map(m => <Card key={m.id} monster={m}/>)}
    </Wrapper>
  )
}