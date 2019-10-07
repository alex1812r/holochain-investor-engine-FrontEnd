import React from 'react'
import ProjectCard from './projectCard'
import { storiesOf } from '@storybook/react'

storiesOf('Project Card',module)
  .addDecorator( story => (
    <>{story()}</>
  ))

    .add('Normal', () =>
      <div style={{width:`25em`,margin:`auto`}}>
        <ProjectCard />
      </div>
    )

  .add('With Name, Type and Description', () => 
    <div style={{width:`25em`,margin:`auto`}}>
      <ProjectCard 
        name="Project Name"
        type="Project Type"
        description="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aperiam voluptates, quasi, neque inventore quidem laudantium exercitationem nostrum quas illo ratione sit corporis? "
      /> 
    </div> 
  )
  
  .add('With Edit and Delete options', () => 
    <div style={{width:`25em`,margin:`auto`}}> 
      <ProjectCard 
        edit={()=>{}}
        delete={()=>{}}
      />
    </div> 
  )

  .add('With Youtube Video', () => 
    <div style={{width:`25rem`,margin:`auto`}}> 
      <ProjectCard
        idYoutubeVideo="N3AkSS5hXMA"
      />
    </div> 
  )

  .add('With raised and goal', () => 
    <div style={{width:`25rem`,margin:`auto`}}> 
      <ProjectCard
        raised={700}
        goal={1000}
      />
    </div> 
  )

  .add('Full', () => 
    <div style={{width:`25rem`,margin:`auto`}}> 
      <ProjectCard
        name="Project Name"
        type="Project Type"
        idYoutubeVideo="N3AkSS5hXMA"
        raised={700}
        goal={1000}
        description="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aperiam voluptates, quasi, neque inventore quidem laudantium exercitationem nostrum quas illo ratione sit corporis? "
        edit={()=>{}}
        delete={()=>{}}
      />
    </div> 
  )