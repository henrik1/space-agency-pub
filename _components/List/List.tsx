import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  row-gap: 8rem;
  grid-auto-rows: minmax(100px, auto);

  @media (max-width: 1280px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default List;
