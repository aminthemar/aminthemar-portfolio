import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router';

import { works_data } from '../../constants';
import './Project.scss';

const Project = () => {
    const { id } = useParams();
    const [work, setWork] = useState({});

    useEffect(() => {
        works_data.getWorkbyId(id)
            .then(data => {
                setWork(data.content);
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    return (
        <div>
            {work["id"]}
            <br />
            {work["title"]}
            <br />
            {work["company"]}
            <br />
            {work["logo"]}
            <br />
            {work["category"]}
        </div>
    )
}

export default Project