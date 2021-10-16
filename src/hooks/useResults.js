import {useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]) //we expect this pieceof state to be an array of things
    const [errorMessage, setErrorMessage] = useState('')

    const searchApi = async (searchTerm) => {

        setErrorMessage('')

        try {

            const response = await yelp.get('/search',  {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'phoenix'
            }
        });
        //console.log(response.data.businesses[0].price)
        setResults(response.data.businesses)
        } catch (error) {
            setErrorMessage('Oops! Something went wrong!')
        }
    }

    useEffect(() => {
        searchApi('taco')
    },[])

    return[searchApi, results, errorMessage] //Return the things we need in the Search components within an array
}