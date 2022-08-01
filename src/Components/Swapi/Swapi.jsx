import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../asyncActions/data';

const Swapi = () => {

    const dispatch = useDispatch();

    const data = useSelector(state => state.data);

    useEffect(() => {
        dispatch(fetchData());
    }, [])

    console.log(data);

    return(
        <div>
            Swapi
        </div>
    );
}

export default Swapi;
