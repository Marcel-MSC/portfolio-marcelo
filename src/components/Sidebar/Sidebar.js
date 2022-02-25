import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SideNavItems, SideNavLink } from 'carbon-components-react/lib/components/UIShell';
import { User32, Code32, Portfolio32, Education32 } from '@carbon/icons-react'
import { StyledSideNav } from './styles';

const items = [
  { name: 'Me', path: '/', icon: User32},
  { name: 'Projects', path: '/projects', icon: Code32},
  { name: 'Work', path: '/work', icon: Portfolio32},
  { name: 'Education', path: '/education', icon: Education32},
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <StyledSideNav isFixedNav expanded isChildOfHeader={false} aria-label="Side navigation">
      <SideNavItems>
        {items.map(i => (
          <SideNavLink
            isActive={
              location.pathname === '/' && i.path === '/' ? true : location.pathname === i.path
            }
            element={Link}
            to={i.path}
            key={i.name}
            renderIcon={i.icon}
          >
            {i.name}
          </SideNavLink>
        ))}
      </SideNavItems>
    </StyledSideNav>
  );
};

export default Sidebar;