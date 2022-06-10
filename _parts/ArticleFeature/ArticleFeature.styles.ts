import styled, {css} from 'styled-components';

export enum Variant {
  'bottom' = 'bottom',
  'center' = 'center'
}

export enum Alignment {
  'ltr' = 'ltr',
  'rtl' = 'rtl'
}

const variants = {
  [Variant.center]: css`
    align-items: center;
    justify-content: center;
  `,
  [Variant.bottom]: css`
    align-items: center;
    justify-content: flex-end;
    >* {
      padding-bottom: 8rem;
    }
  `
};

const alignments = {
  [Alignment.ltr]: css`
    
  `,
  [Alignment.rtl]: css`
    gap: 3rem;
    >* {
      &:first-child {
        margin-top: 4rem;
        grid-column: 2;
        grid-row: 1;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
      }
      &:last-child {
        grid-column: 1;
        grid-row: 1;
      }
    }
  `
}

export const StyledArticleFeature = styled.article<{ variant: Variant}>`
  flex: 1;
  width: 100vw;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  ${props => variants[props.variant]};
`;

export const StyledArticleFeatureContent = styled.div<{ alignment: Alignment }>`
  width: 100%;
  max-width: 100vw;
  flex: 1;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
  grid-auto-rows: minmax(100px, auto);
  
  @media (max-width: 1280px) {
    grid-template-columns: unset;
    gap: unset;
    grid-auto-rows: unset;
    display: block;

  }
  
  ${props => alignments[props.alignment]};

  h2 {
    color: white;
    text-shadow: rgb(85, 85, 85) 0 0 2px;
    margin-bottom: 3rem;
    max-width: calc(100vw - 2rem);
  }
  
  p {
    margin-bottom: 3rem;
    max-width: calc(100vw - 2rem)
  }
  
`;
