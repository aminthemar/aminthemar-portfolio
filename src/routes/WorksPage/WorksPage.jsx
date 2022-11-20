import { useEffect } from 'react';
import { Works } from '../../containers';
import { Navbar } from '../../components';

const WorksPage = ({ title }) => {
    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <>
            <Navbar />
            <Works />
        </>
    )
}

export default WorksPage