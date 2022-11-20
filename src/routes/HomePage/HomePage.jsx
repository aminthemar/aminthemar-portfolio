import { useEffect } from 'react';
import { Edu, Hero, Jobs, Unity, Portfolio } from '../../containers';
import { Navbar } from '../../components';

const HomePage = ({ title }) => {
    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <>
            <Navbar options={true} />
            <Hero />
            <Jobs />
            <Edu />
            <Unity />
            <Portfolio />
        </>
    )
}

export default HomePage