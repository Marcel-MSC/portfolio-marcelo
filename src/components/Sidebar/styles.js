import styled from 'styled-components'
import { SideNav, SideNavItems } from 'carbon-components-react/lib/components/UIShell'

export const StyledSideNav = styled(SideNav)`
  @media (max-width: 640px) {
    display: none;
    padding-left: 0.9rem;
  }
`
export const StyledSideNavItems = styled(SideNavItems)`
  border-style: inset;
    border-width: 0.5vh;
    border-color: white;
`