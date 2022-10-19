import { Outlet } from 'react-router-dom';
import { LinkNav } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <LinkNav to="/" end>
              Home
            </LinkNav>
          </li>
          <li>
            <LinkNav to="search">Search</LinkNav>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
