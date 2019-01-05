import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const LinkComponent = ({ to, children, external, ...props }) => (
  <Link href={to} {...props} passHref>
    <A target={external && '_blank'}>{children}</A>
  </Link>
)

const A = styled.a`
  color: inherit;
  cursor: pointer;
  text-decoration: none;
`

export default LinkComponent
