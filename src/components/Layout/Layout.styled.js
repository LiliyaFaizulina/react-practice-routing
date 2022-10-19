import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LinkNav = styled(NavLink)`
  text-decoration: none;
  color: green;
  &.active {
    color: tomato;
  }
`;
