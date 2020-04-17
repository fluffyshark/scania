import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {getData} from '../actions';
import axios from 'axios';

function FetchData() {
    const dispatch = useDispatch();
    const [data, receviceData] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/')
            .then(res => {
                receviceData(res.data)
                dispatch(getData(res.data))
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

   // console.log(data)

    return null


}

export default FetchData;