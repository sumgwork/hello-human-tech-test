import styled from "styled-components";

export const Tile = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  background: ${props => props.theme.white};
  grid-gap: 1rem;
  align-items: center;
  padding: 1rem;
  border: ${props => props.theme.gray} 1px solid;
  border-radius: 0.25rem;
  cursor: auto;
  .movie {
    &__title {
      font-size: 1.4rem;
      display: block;
      color: ${props => props.theme.jetblack};
    }
    &__score {
      display: block;
      font-size: 1.2rem;
      &-star {
        color: ${props => props.theme.orange};
        display: inline-block;
        margin-right: 3px;
      }
      &-votes {
        font-size: 1rem;
        color: #555;
      }
    }

    &__thumbnail {
      justify-self: stretch;
      min-width: 8rem;
    }

    &__button {
      margin-top: 1rem;
    }
  }
`;
