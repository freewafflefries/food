import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import SearchBar from '../components/SearchBar'
import ResultsList from '../components/ResultsList'
import useResults from '../hooks/useResults'

const SearchScreen = () => {

    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage] = useResults();

  
    const filterResultsByPrice = price => {
        // price === '$' || '$$' || '$$$'
        return results.filter(result => {
          return result.price === price;
        });
      };
    

    return(
        <View style={{backgroundColor: 'white', flex: 1}}>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)} 
            />
            {errorMessage ?
                <Text>{errorMessage}</Text>
                : null
            }
            
            <ScrollView>
                <ResultsList title='Cost Effective' results={filterResultsByPrice('$')}  />
                <ResultsList title='Bit Pricier' results={filterResultsByPrice('$$')} />
                <ResultsList title='Big $pender' results={filterResultsByPrice('$$$')}  />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    
});

export default SearchScreen;