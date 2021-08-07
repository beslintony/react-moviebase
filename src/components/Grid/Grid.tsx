import React from 'react';

import { Content, Wrapper } from './Grid.styles';

type GridProps = { header: string };

const Grid: React.FC<GridProps> = ({ header, children }) => {
  return (
    <Wrapper>
      <h1>{header}</h1>
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default Grid;
