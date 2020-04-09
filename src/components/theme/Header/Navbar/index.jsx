import React from 'react'
import { Link } from 'gatsby'
import { Container } from 'components/common'
import NavbarLinks from '../NavbarLinks'
import { Wrapper } from './styles'

import config from './../../../../data/config'

const Navbar = () => (
	<Wrapper as={Container}>
		<Link to="/">{config.defaultTitle}</Link>
		<NavbarLinks desktop />
	</Wrapper>
)

export default Navbar
