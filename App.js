import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import Weather from './Components/Weather/Weather';
import SearchBar from './Components/SearchBar/SearchBar';

export default function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loaded, setLoaded] = useState(true);

  async function fetchWeatherData(cityName) {
    setLoaded(false);
    const API_KEY = "8a49e60be0023bcaffb49493790765b0"
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
    try {
      const response = await fetch(API);
      if (response.status === 200) {
        const data = await response.json();
        setWeatherData(data);
      }
      else {
        setWeatherData(null);
      }
      setLoaded(true);
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchWeatherData('Dhaka');
  }, [])

  if (!loaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator color="gray" size="36"></ActivityIndicator>
      </View>
    )
  }
  else if (weatherData === null) {
    return (
      <View>
        <View style={styles.container}>
          <SearchBar fetchWeatherData={fetchWeatherData} />
          <Text style={styles.primaryText}>City Not Found! Try Different City</Text>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Weather weatherData={weatherData} fetchWeatherData={fetchWeatherData}></Weather>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryText: {
    margin: 20,
    fontSize: 28
  }
});
