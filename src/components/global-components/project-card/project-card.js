import React from 'react';
import Image from "next/image";
import {
    ProjectCards,
    ImageWrapper,
    ProjectOverlay,
    ProjectName,
    ViewProject,
    ViewProjectText
}
    from "./project-card.styles";

export const ProjectCard = ({
    element,
    setIsdisplayed,
    setOpen,
    setElementInOverlay
}) => {

    const [isDisplay, SetIsDisplay] = React.useState('block');
    const [viewProject, setViewProject] = React.useState(false)

    function handleTextOnHover() {
        SetIsDisplay('none');
        setViewProject(true);
    }

    function handleTextAfterHover() {
        SetIsDisplay('block');
        setViewProject(false);
    }

    return (
        <ProjectCards onClick={() => {
            setElementInOverlay(element);
            setIsdisplayed('flex');
            setOpen(true);
        }}
            onMouseEnter={() => handleTextOnHover()}
            onMouseLeave={() => handleTextAfterHover()}
        >
            <ProjectOverlay>
                <ProjectName
                    style={{
                        display: `${isDisplay}`
                    }}
                >
                    {element.title}
                </ProjectName>
                <ViewProject viewProject={viewProject}>
                    <ViewProjectText>
                        View Project
                    </ViewProjectText>
                </ViewProject>
            </ProjectOverlay>
            <ImageWrapper>
                <Image
                    layout="intrinsic"
                    objectFit="cover"
                    src={element.cover}
                    alt={element.name}
                />
            </ImageWrapper>
        </ProjectCards>
    )
}