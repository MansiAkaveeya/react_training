import React from 'react';
import Spinner from 'react-bootstrap/Spinner';


function Wrapped(DisplayComponent){
    return function({isLoaded,...props}){
        if(isLoaded){
            return <DisplayComponent {...props}/>
        }
        return(
            <div>
                <Spinner animation="border" role="status" variant="danger" >
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </div>
        )
    }
}

export default Wrapped;