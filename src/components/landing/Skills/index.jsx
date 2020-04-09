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
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy.
        </p>
        <Button as={AnchorLink} href="#contact">
          Resume
        </Button>
      </Details>
    </SkillsWrapper>
  </Wrapper>
)
