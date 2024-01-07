import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>Click on a project to expand it!</Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'web app' ?
            <ToggleButton active value="web app" onClick={() => setToggle('web app')}>Web Apps</ToggleButton>
            :
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>Web Apps</ToggleButton>
          }
          <Divider />
          {toggle === 'network' ?
            <ToggleButton active value="network" onClick={() => setToggle('network')}>Network</ToggleButton>
            :
            <ToggleButton value="network" onClick={() => setToggle('network')}>Network</ToggleButton>
          }
          <Divider />
          {toggle === 'hardware' ?
            <ToggleButton active value="hardware" onClick={() => setToggle('hardware')}>Hardware</ToggleButton>
            :
            <ToggleButton value="hardware" onClick={() => setToggle('hardware')}>Hardware</ToggleButton>
          }
          <Divider />
          {toggle === 'other' ?
            <ToggleButton active value="other" onClick={() => setToggle('other')}>Other</ToggleButton>
            :
            <ToggleButton value="other" onClick={() => setToggle('other')}>Other</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects