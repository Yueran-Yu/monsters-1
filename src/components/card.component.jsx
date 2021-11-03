import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #95dada;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 25px;
  cursor: pointer;
  -moz-osx-font-smoothing: grayscale;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: transform 0.25s ease-out;

  &:hover {
    transform: scale(1.05);
  }
`
export const Card = ({monster}) => {
  return (
    <Wrapper>
      <img alt='monster' src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}/>
      <h3>Name: {monster.name}</h3>
      <h4>Email: {monster.email}</h4>
      <h4>City: {monster.address.city}</h4>
      <h4>ZipCode: {monster.address.zipcode}</h4>

    </Wrapper>
  )
}