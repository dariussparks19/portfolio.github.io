import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';
import {ProjectState} from '../projectState';
import { Description } from "../styles";
//Animation
import {motion} from 'framer-motion';
import {pageAnimation} from "../animations"; 


const ProjectDetail = () => {

    const history = useHistory();
    const url = history.location.pathname;
    const [projects, setProjects] = useState(ProjectState);
    const [project, setProject] = useState(null);

    //useEffect
    useEffect(() => {
        const currentProject = projects.filter((stateProject) => stateProject.url === url);
        setProject(currentProject[0]);
        console.log(setProject);
    }, [projects, url]);


    return(
        <>
            {project && (
                <Details
                    exit="exit" 
                    variants={pageAnimation} 
                    initial="hidden" 
                    animate="show"
                >
                    <HeadLine>
                        <h2>{project.title}</h2>
                        <img src={project.mainImg} alt="wave"/>
                    </HeadLine>
                    <Codes>
                        {project.code.map((code) => (
                            <Code 
                            coder={code.coder} 
                            lang={code.lang}
                            frontend={code.frontend} 
                            desc = {code.desc}
                            key={code.title} 
                            />
                        ))}
                    </Codes>
                    <ImageDisplay>
                        <img src={project.secondImg} alt="musicplayer2"/>
                    </ImageDisplay>
                </Details>
            )}
        </>
    )
}


const Details = styled(motion.div)`
    color: white;
    
`

const HeadLine= styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;
    h2{
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -10%);
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`

const Codes = styled.div`
min-height: 80vh;
display: flex;
margin: 1rem 10rem;
align-items: center;
justify-content: space-around;
@media (max-width: 1500px){
    display: block;
    margin: 2rem 2rem;
}
`

const CodeStyle = styled.div`
    padding: 5rem;
    h3 {
        font-size: 2rem;
    }
    .line{
        width: 100%;
        background: #E0CBDD;
        height: 0.5rem;
        margin: 1rem 0rem;
    }
    p{
        padding: 1rem 0rem;
    }
`

const ImageDisplay = styled.div`
    min-height: 50vh;
    img{
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
`


const Code = ({coder, lang, frontend, desc}) => {
    return(
        <CodeStyle>
            <h1>Coded by: {coder}</h1>
            <div className="line"></div>
            <p>Languages: {lang}</p>
            <p>Front-End: {frontend}</p>
            <p>Description: {desc}</p>
            <a href="http://dariussparks19.github.io" target="blank"><button>Visit project</button></a>
        </CodeStyle>
    )
}



export default ProjectDetail;