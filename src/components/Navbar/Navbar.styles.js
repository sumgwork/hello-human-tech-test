import styled from "styled-components";

/* styling top nav bar */
export const Nav = styled.nav`
  background-color: ${props => props.theme.white};
  padding-bottom: 0;
  border: 1px solid ${props => props.theme.grey};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;

  @media screen and (min-width: 40rem) {
    flex-direction: row;
    justify-content: space-between;
  }
  .brand {
    font-size: 1.5rem;
    color: ${props => props.theme.black};
    display: flex;
    flex-direction: row;
    align-items: center;

    @media screen and (min-width: 40rem) {
      margin-right: 5rem;
      margin-left: 2rem;
    }
  }
`;

export const NavList = styled.ul`
  display: block;
  list-style-type: none;
  padding: 0;
  margin-right: 4rem;
`;
