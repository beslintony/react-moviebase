import React from 'react';
import { Link } from 'react-router-dom';

import { Content, CopyrightText, Wrapper } from './Footer.styles';

const Footer = () => {
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <h1>MOVIEBASE</h1>
        </Link>
        <p>
          {' '}
          This is an app to showcase all the movies details. Powered by{' '}
          <a href="https://www.themoviedb.org/">TMDB</a>{' '}
        </p>
      </Content>
      <CopyrightText>Copyright &copy; {new Date().getFullYear()} MovieBase</CopyrightText>
    </Wrapper>
  );
};

export default Footer;
