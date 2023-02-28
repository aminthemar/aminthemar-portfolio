import { useEffect } from 'react';
import { useParams } from 'react-router';
import { Project } from '../../containers';
import { Navbar } from '../../components';
import { works_data } from '../../constants';

const ProjectPage = ({ title }) => {
    const { id } = useParams();

    useEffect(() => {
        works_data.getWorkbyId(id)
            .then(data => {
                document.title = `${id.toUpperCase()[0]}${id.slice(1)} - ${data.content["title"]} | ${title}`;
            })
            .catch(err => {
                console.error(err);
            });
    }, [title, id]);

    return (
        <>
            <Navbar />
            <Project id={id} />
        </>
    )
}

export default ProjectPage