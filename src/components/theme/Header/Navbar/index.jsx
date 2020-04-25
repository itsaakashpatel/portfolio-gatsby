import React from 'react'
import { Link } from 'gatsby'
import { Container } from 'components/common'
import logo from 'assets/logo/logo_3.png'
import NavbarLinks from '../NavbarLinks'
import { Wrapper } from './styles'

import config from './../../../../data/config'

const Navbar = () => (
	<Wrapper as={Container}>
		<Link to="/"><img src={logo} alt={config.defaultTitle} /></Link>
		<NavbarLinks desktop />
	</Wrapper>
)

export default Navbar
