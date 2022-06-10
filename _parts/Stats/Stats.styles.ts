import styled from 'styled-components';

export const StyledStat = styled.div`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

  @media (max-width: 640px) {
    margin-bottom: 4rem;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  >* {
    flex: 1;
  }
  >*:first-child {
    transition: all .4s cubic-bezier(.215, .61, .355, 1);
    transform: scale(1);
    cursor: default;
    font-size: 8rem;
    font-weight: 400;
    letter-spacing: -2px;
    margin-bottom: 0.5rem;

    @media (max-width: 1280px) {
      font-size: 8rem;
      letter-spacing: -2px;
      margin-bottom: 0.25rem;
    }

    @media (max-width: 1024px) {
      font-size: 6rem;
      letter-spacing: -2px;
      margin-bottom: 0.25rem;
    }

    @media (max-width: 640px) {
      font-size: 6rem;
      letter-spacing: -2px;
      margin-bottom: 0.25rem;
    }
  }
  
  >*:last-child {
    @media (max-width: 1280px) {
      font-size: 1.5rem ;
    }

    @media (max-width: 1024px) {
      font-size: 1.25rem;
    }
    
    @media (max-width: 640px) {
      font-size: 1.25rem;
    }
    
  }
  
  &:hover {
    >*:first-child {
      cursor: default;
    }
  }
  
`;

export const StyledStatGroup = styled.div`
  padding-top: 8rem;
  padding-bottom: 8rem;
  padding-left: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 0 0;
  
  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    
    >* {
      margin-bottom: 4rem;
    }
  }
`;
