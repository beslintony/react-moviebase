import React from 'react';
import { Link } from 'react-router-dom';

import { Content, Wrapper } from './BreadCrumbs.styles';

type BreadCrumbProps = {
  movieTitle: string;
};

const BreadCrumb: React.FC<BreadCrumbProps> = ({ movieTitle }) => (
  <Wrapper>
    <Content>
      <Link to="/">
        <span>Home</span>
      </Link>
      <span>|</span>
      <span>{movieTitle}</span>
    </Content>
  </Wrapper>
);

export default BreadCrumb;
