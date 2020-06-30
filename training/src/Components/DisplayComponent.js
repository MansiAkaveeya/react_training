import React from 'react';
import Wrapped from '../HOC/Wrapped'
import { useEffect } from 'react';
import { useState } from 'react';
import User from '../Components/User';

const Loader = Wrapped(User)
const DisplayComponent = () =>{

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [users, setItem] = useState([]);

    useEffect(() => {
        fetch("https://5e4cd3779b6805001438ef1f.mockapi.io/users")
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setItem(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, [])
    
    if(error){
    return <div>Error: {error.message}</div>
    } else{
        return(
            <Loader isLoaded={isLoaded} users={users}/>
        )
    }
}

export default DisplayComponent;