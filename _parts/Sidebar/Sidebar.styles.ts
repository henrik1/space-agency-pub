import styled from 'styled-components';
import Drawer from '../../_components/Drawer/Drawer';

export const StyledSidebarDrawer = styled(Drawer)`
  ul {
    list-style: none;
    margin: 8rem 3rem;
    display: flex;
    flex-direction: column;
    
    li {
      display: block;
      width: 100%;
      border-bottom: 1px solid rgba(255,255,255, 0.1);
      
      a {
        display: block;
        font-size: 1.375rem;
        font-weight: 200;
        color: white;
        text-transform: uppercase;
        text-align: right;
        padding: 1rem 0 1rem 0;
        width: 100%;
        transition: all 0.2s ease-in-out;
        
        &:hover {
          opacity: 0.7;
        }
      }
    }
  }
`;
