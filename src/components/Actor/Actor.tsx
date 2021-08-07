import React from 'react';

import { Image, Wrapper } from './Actor.styles';

type ActorProps = {
  name: string;
  character: string;
  imageURL: string;
};
const Actor: React.FC<ActorProps> = ({ name, character, imageURL }) => {
  return (
    <>
      <Wrapper>
        <Image src={imageURL} alt="actor-thumb" />
        <h3>{name}</h3>
        <p>{character}</p>
      </Wrapper>
    </>
  );
};

export default Actor;
