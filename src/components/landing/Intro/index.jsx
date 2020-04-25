import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Header } from 'components/theme'
import { Container, Button } from 'components/common'
import dev from 'assets/illustrations/dev.svg'
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles'
import config from './../../../data/config'

export const Intro = () => (
	<Wrapper>
		<Header />
		<IntroWrapper as={Container}>
			<Details>
				<h1>Hi There!</h1>
				<h4>I’m {config.defaultTitle} and I'm a Full Stack Developer!</h4>
				{/* <Button as={AnchorLink} href="#contact">
					Resume
				</Button> */}
			</Details>
			<Thumbnail>
				<img src={dev} alt={config.defaultTitle} />
			</Thumbnail>
		</IntroWrapper>
	</Wrapper>
)
