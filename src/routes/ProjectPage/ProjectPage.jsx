import { useEffect } from 'react';
import { useParams } from 'react-router';
import { Project } from '../../containers';
import { Navbar } from '../../components';

const ProjectPage = ({ title }) => {
    const { id } = useParams();

    useEffect(() => {
        document.title = `${id.toUpperCase()} | ${title}`;
    }, [title, id]);

    return (
        <>
            <Navbar />
            <Project id={id} />
        </>
    )
}

export default ProjectPage