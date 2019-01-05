import styled from 'styled-components'

export const Nav = styled.nav``

export const H1 = styled.h1`
  font-size: 2rem;
  cursor: pointer;
  user-select: none;
`

export const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  list-style: none;

  font-size: 1.6rem;
  font-weight: bold;

  & > *:not(:last-child) {
    margin-right: 2em;
  }
`

export const NavLink = styled.li`
  &:not(:last-child) {
    margin-right: 2em;
  }
`

export const Header = styled.header`
  position: sticky;
  top: 0;

  padding: 1em 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
