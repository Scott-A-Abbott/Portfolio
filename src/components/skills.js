import React from 'react';
import glamorous from 'glamorous';

//images
import css from '../assets/images/skills/css.png';
import express from '../assets/images/skills/expressjs.png';
import git from '../assets/images/skills/git.png';
import github from '../assets/images/skills/github.png';
import glamIcon from '../assets/images/skills/glamorous.png';
import html from '../assets/images/skills/html.png';
import jsIcon from '../assets/images/skills/javascript.png';
import jest from '../assets/images/skills/jest.png';
import node from '../assets/images/skills/node.png';
import pSqlIcon from '../assets/images/skills/postgressql.png';
import postman from '../assets/images/skills/postman.png';
import reactIcon from '../assets/images/skills/react.png';
import redux from '../assets/images/skills/redux.png';
import vsCode from '../assets/images/skills/vscode.png';


export default function Skills(props){

    const skills = skillList.map((skill, index) => {
        let {name, img} = skill;
        return (
            <Skill key={`${name}_${index}`} id={name}>
                <Icon img={img} />
                {name}
            </Skill>
        )
    })

    return(
        <Wrapper id='skills'>
            <Title>Technical Skills</Title>
            <hr/>
            <Container className="container">
                {skills}
            </Container>
        </Wrapper>
    );
}


//styling
const Wrapper = glamorous.section('Wrapper')

const Title = glamorous.h3('Title')

const Container = glamorous.div({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
})

const Skill = glamorous.div('Skill', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px'
})

const Icon = glamorous.div('Icon', {
    height: '120px',
    width: '120px',
},
    props => ({
        background: `url(${props.img}) center no-repeat`,
        backgroundSize: 'contain',
    })
)

//skills array
const skillList = [
    {
        name: 'CSS3',
        img: css
    },
    {
        name: 'Express.js',
        img: express
    },
    {
        name: 'Git',
        img: git
    },
    {
        name: 'Github',
        img: github
    },
    {
        name: 'Glamorous.js',
        img: glamIcon
    },
    {
        name: 'HTML5',
        img: html
    },
    {
        name: 'JavaScript',
        img: jsIcon
    },
    {
        name: 'Jest Testing',
        img: jest
    },
    {
        name: 'Node.js',
        img: node
    },
    {
        name: 'PostgreSQL',
        img: pSqlIcon
    },
    {
        name: 'Postman',
        img: postman
    },
    {
        name: 'React.js',
        img: reactIcon
    },
    {
        name: 'Redux',
        img: redux
    },
    {
        name: 'VS Code',
        img: vsCode
    },
];