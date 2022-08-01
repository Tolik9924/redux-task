import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataToolkit } from '../../asyncActions/data';

const SwapiToolkit = () => {

    const data = useSelector(state => state.data);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDataToolkit());
    }, [])

    console.log("Toolkit", data);

    return(
        <div>
            SwapiToolkit
        </div>
    );
}

export default SwapiToolkit;
