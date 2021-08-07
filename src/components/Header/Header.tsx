import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Context } from '../../context';
import { Content, UserWrapper, Wrapper } from './Header.styles';

const Header: React.FC = () => {
  const { state: user } = useContext(Context);

  console.log(user);

  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <h1>MOVIEBASE</h1>
        </Link>
        {user && user.username !== undefined ? (
          <UserWrapper>
            <span className="loggedin">{user.username}</span>
            <span> Log Out</span>
          </UserWrapper>
        ) : (
          <Link to="/login">
            <span className="login">Login</span>
          </Link>
        )}
      </Content>
    </Wrapper>
  );
};

export default Header;
