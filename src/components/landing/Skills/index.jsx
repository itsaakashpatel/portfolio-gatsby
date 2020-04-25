import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'components/common'
import dev from 'assets/illustrations/skills.svg'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'

import config from './../../../data/config'

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt={config.defaultTitle} />
      </Thumbnail>
      <Details>
        <h1>Hi There!</h1>
        <p>
          I'm a <strong>Self-thought Full Stack Developer and Blogger</strong>. I started web development in 2018, I love to work with React Js, Gatsby and Node Js.
          and now JAM Stack Development has cought my eyes. &#128526;&#128526;
        </p>
        {/* <Button as={AnchorLink} href="#contact">
          Resume
        </Button> */}
      </Details>
    </SkillsWrapper>
  </Wrapper>
)
