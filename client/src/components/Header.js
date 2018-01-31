import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Button from './Button';

const HeaderLogo = styled(Logo)`
  position: absolute;
  top: 25px;
  left: 24px;
`;

const HeaderButton = styled(Button)`
  position: absolute;
  top: 18px;
  right: 24px;
`;

const Header = ({ className }) => (
  <header className={className}>
    <a href="/">
      <HeaderLogo />
    </a>
    <HeaderButton>Создать встречу</HeaderButton>
  </header>
);

const StyledHeader = styled(Header)`
  height: 71px;
  background: #fff;
  position: relative;
`;

export default StyledHeader;
