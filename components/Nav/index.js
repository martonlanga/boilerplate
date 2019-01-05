import React from 'react'
import Link from '../Link'
import * as S from './styles'

const NavComponent = ({ changeTheme }) => (
  <S.Header>
    <Link to="/">
      <S.H1 onClick={changeTheme}>marton</S.H1>
    </Link>
    <S.Nav>
      <S.NavLinks>
        <S.NavLink>
          <Link to="/">home</Link>
        </S.NavLink>
      </S.NavLinks>
    </S.Nav>
  </S.Header>
)

export default NavComponent
