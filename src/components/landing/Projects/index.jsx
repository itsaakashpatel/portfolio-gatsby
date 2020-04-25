/* eslint-disable */ 
import React, {useState} from 'react';

// COMPONENTS
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Card, Dialog } from 'components/common'
import { Wrapper, GridWrapper, Item, Content, DialogBody, DialogContentWrapper } from './styles'

export const Projects = () => {
  const [isModalOpen, setModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState({})

  // const {
  //   github: {
  //     viewer: {
  //       repositories: { edges },
  //     },
  //   },
  // } = useStaticQuery(
  //   graphql`
  //     {
  //       github {
  //         viewer {
  //           repositories(
  //             first: 6
  //             orderBy: { field: STARGAZERS, direction: DESC }
  //           ) {
  //             edges {
  //               node {
  //                 id
  //                 name
  //                 url
  //                 description
  //                 stargazers {
  //                   totalCount
  //                 }
  //                 forkCount
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `
  // )
  // console.log('EDGES', edges)
  return (
    <Wrapper as={Container} id="projects">
      <h2 className="theme-underline">Projects</h2>
      <GridWrapper>
        {projectList.map(project => (
          <Item
            key={project.id}
            onClick={() => {setModalOpen(true); setModalContent({...project})}}
          >
            <Card>
              <Content>
                <h3 className="theme-underline toUppercase">{project.name}</h3>
                <p>{project.description}</p>
              </Content>
            </Card>
          </Item>
        ))}
      </GridWrapper>
      {
        isModalOpen &&
          <Dialog
            open        = {isModalOpen}
            onClose     = {() => setModalOpen(false)}
            maxWidth    = {'sm'}
          >
             <DialogBody>
                <DialogContentWrapper>
                  <h3 className="theme-underline toUppercase">{modalContent.name}</h3>
                  <div className="content">
                    <div className="type">
                      <div>Type </div>
                      <p className="toUppercase">{modalContent.type}</p>
                    </div>
                    <div className="description">
                      <div>Description </div>
                      <p>{modalContent.description}</p>
                    </div>
                    <div className="technology">
                      <div>Technology </div>
                      <p>{modalContent.technologies.join(', ')}</p>
                    </div>
                    <div className="problem">
                      <div>Problem </div>
                      <p>{modalContent.problem}</p>
                    </div>
                    <div className="solution">
                      <div>Solution </div>
                      <p>{modalContent.solution}</p>
                    </div>
                    {
                      modalContent.github_url !== '' && <div className="github">
                        <div>URL </div>
                        
                        <IconButton aria-label="github" as="a"
                          href={modalContent.github_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          classes={{ root : 'button'}}
                        >
                          <GitHubIcon />
                        </IconButton>
                      </div>
                    }
                  </div>
                </DialogContentWrapper>
              </DialogBody>
          </Dialog>
      }
    </Wrapper>
  )
}

let projectList = [
  {
    id: Math.random() * 100,
    name : 'Gmail Tables',
    description : 'I was not familiar with chrome extensions, so I wanted to give it a try...',
    technologies : [ 'Node Js', 'Javascript'],
    problem : 'Gmail does not have a feature to add new tables...',
    solution : 'Gmail Tables allows you to create dynamic tables directly on your gmail.',
    github_url  : 'https://github.com/itsaakashpatel/gmail-tables',
    demo_link : '',
    type : 'self'
  },
  {
    id: Math.random() * 100,
    name : 'Nuxt Canvas',
    description : 'HTML canvas is itself a very good topic to learn, this was client demo project. He asked me to make a canvas demo using Nuxt Js which is SSR Vue Js Framework',
    technologies : [ 'Vue Js', 'Nuxt Js', 'Konva (Library)', 'Node Js', 'Typescript'],
    problem : 'Show Canvas Demo using Nuxt Js',
    solution : 'I used Konva as a library to draw elements on the canvas. TypeScript for type checks and Vue Js',
    github_url  : 'https://github.com/itsaakashpatel/nuxt-canvas-demo',
    demo_url : '',
    type : 'self'
  },
  {
    id: Math.random() * 100,
    name : 'PortFolio Site',
    description : 'Personal site built with GatsBy Js',
    technologies : [ 'GatsBy', 'Styled Components', 'Material-ui', 'Node Js'],
    problem : 'Wanted to develop a blazing fast static site which should be PWA ready and can be run offline',
    solution : 'I went with GatsBy Js, as I come from React Js Background, I can use my experience while during the development, I got help from GatsBy starter theme library.',
    github_url  : 'https://github.com/itsaakashpatel/portfolio-gatsby',
    demo_url : '',
    type : 'self'
  },
  {
    id: Math.random() * 100,
    name : 'Real Time Job Management',
    description : ' The platform for managing tasks for the workers in a real time. The statistics, billing and graphs to analyse the data efficiently.',
    technologies : [' React Js',' Node Js', 'SQL', 'Styled Components',' Socket.io', 'Html', 'CSS'],
    problem : 'Company wanted to develop a real time Job application platform for their workers and managers',
    solution : 'My role is to develop Backend using Node Js and SQL and frontend using React Js. I used Socket Io for Real time time sheet management and notifications.',
    github_url  : '',
    demo_url : '',
    type : 'client'
  },
  {
    id: Math.random() * 100,
    name : 'Users Insights App',
    description : 'The portal is for a users persona to understand them in a better way. It also includes various types of animations, surveys, Avatar & Gamification.',
    technologies : [' React Js',' Node Js', 'SQL', 'Styled Components',' Socket.io', 'Html', 'CSS'],
    problem : 'Company wanted to develop a platform where they can see users behaviour, moods, and help them to increase productivity',
    solution : 'My role is to develop frontend using React Js.',
    github_url  : '',
    demo_url : '',
    type : 'client'
  },
]