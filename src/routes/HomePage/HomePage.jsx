import { Edu, Hero, Jobs, Unity, Portfolio } from '../../containers';
import { Navbar } from '../../components';

const HomePage = () => {
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