import { useState } from 'react';

export const ApiRequest = (url = '', method = 'GET' , payload = { } ) => {

    const initialState  = {
        ok: false,
        payload: {},
        error:null
    }

  const [ requestState, setRequestState ]  = useState(initialState);

    const URL = `http://localhost:3001/${url}`;
    fetch( URL ,  {
        method,
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify( payload )
    } )
    .then( data  => {
        if(data.ok) return data.json();
    })
    .then( response => {
        console.log( response );
        setRequestState(({
            ok: response.ok,
            payload: response.data
        })); 
        return response;
    })
    .catch(error => {
        console.log(error);
        setRequestState({
            error
        });
    })

    return requestState;
}