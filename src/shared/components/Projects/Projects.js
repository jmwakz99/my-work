import React, { useState } from 'react';

import CardItem from './CardItem';
import './Project.css'


const Project = props => {
    const [projects] = useState([
        { title: 'u-tally', preview: 'https://u-tally.com', code: 'https://github.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque odio lacus, vehicula vel justo maximus, convallis euismod tellus. Mauris elementum dui sit amet ligula malesuada, sed commodo felis vestibulum. Cras ut feugiat ligula. Nullam rutrum arcu ut tempus auctor. Aliquam at ultricies augue. Vivamus ultricies leo ac semper porttitor. Cras commodo semper nisl, sed congue nunc luctus eu. Nam condimentum diam ac ligula tristique varius. In sit amet sapien pellentesque urna ultricies porttitor non non metus. Ut tincidunt nisi pellentesque velit tempor, sit amet aliquam felis tincidunt. Integer feugiat dolor enim, nec tincidunt justo lobortis at.' },
        { title: 'portfolio', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque odio lacus, vehicula vel justo maximus, convallis euismod tellus. Mauris elementum dui sit amet ligula malesuada, sed commodo felis vestibulum. Cras ut feugiat ligula. Nullam rutrum arcu ut tempus auctor. Aliquam at ultricies augue. Vivamus ultricies leo ac semper porttitor. Cras commodo semper nisl, sed congue nunc luctus eu. Nam condimentum diam ac ligula tristique varius. In sit amet sapien pellentesque urna ultricies porttitor non non metus. Ut tincidunt nisi pellentesque velit tempor, sit amet aliquam felis tincidunt. Integer feugiat dolor enim, nec tincidunt justo lobortis at.' },
        { title: 'portfolio', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque odio lacus, vehicula vel justo maximus, convallis euismod tellus. Mauris elementum dui sit amet ligula malesuada, sed commodo felis vestibulum. Cras ut feugiat ligula. Nullam rutrum arcu ut tempus auctor. Aliquam at ultricies augue. Vivamus ultricies leo ac semper porttitor. Cras commodo semper nisl, sed congue nunc luctus eu. Nam condimentum diam ac ligula tristique varius. In sit amet sapien pellentesque urna ultricies porttitor non non metus. Ut tincidunt nisi pellentesque velit tempor, sit amet aliquam felis tincidunt. Integer feugiat dolor enim, nec tincidunt justo lobortis at.' }
    ])
    return <section id="portfolio">
        <h1 className="porfolio-title">Portfolio
        <span className="bottom-line-portfolio"></span>
        </h1>
        <section className="portfolio-holder">
            {projects ? projects.map((project, index) => (
                <CardItem title={project.title} preview={project.preview} code={project.code} description={project.description} key={index} />

            )) : null}



        </section>

    </section>

}

export default Project;