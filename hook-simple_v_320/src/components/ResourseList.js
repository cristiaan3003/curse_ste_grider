import React from 'react';
import useResources from './useRecources'




const ResourseList = ({resource}) =>{
    const resources = useResources(resource);
    /* V- 336 - Actual code reuse */
    /*const [resources, setResources] = useState([]);

    const fetchResource = async  resource => {
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/${resource}`
        );
        setResources(response.data);
    }
    useEffect(
        () => {
            fetchResource(resource);
        }, 
        [resource]
    );*/

    /* V.334 - Other definition all inside useEffect */
    /* and delete function fetchResource */
    /*
    useEffect(
        () => {
            (async  resource => {
                const response = await axios.get(
                    `https://jsonplaceholder.typicode.com/${resource}`
                );
                setResources(response.data);
        })(resource)
        }, 
        [resource]
    );
    */
    return(
        <div>
            {resources.map( record => (
                <li key={record.id}> {record.title}</li>
            ))}
        </div>
    );
}

export default ResourseList;