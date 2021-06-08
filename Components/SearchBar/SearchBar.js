import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

const SearchBar = ({ fetchWeatherData }) => {
    const [cityName, setCityName] = useState('');
    return (
        <View style={styles.searchBar}>
            <TextInput
                placeholder='Enter City name'
                value={cityName}
                onChangeText={(text) => setCityName(text)}
                style={styles.textInput}
            />
            <EvilIcons name="search" size={28} color="black" onPress={() => fetchWeatherData(cityName)} />
        </View>
    );
};
const styles = StyleSheet.create({
    searchBar: {
        marginTop: 35,
        marginBottom:20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: Dimensions.get('screen').width - 30,
        borderWidth: 1.5,
        paddingVertical: 5,
        borderRadius: 25,
        marginHorizontal: 10,
        paddingHorizontal: 5,
        backgroundColor: 'lightgray',
        borderColor: 'lightgray'
    },
    textInput: {
        width: Dimensions.get('screen').width - 30,
        borderWidth: 1.5,
        paddingVertical: 10,
        borderRadius: 25,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        borderColor: 'lightgray'
    }
})

export default SearchBar;