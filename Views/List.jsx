import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native'
import LanguagesModal from '../Components/LanguagesModal';

export default function List(props) {
    const [countries, setCountries] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [loading, setLoading] = useState(true);

    //for bold word into a string, <B> text in bold</B>
    const B = (props) => <Text style={{ fontWeight: 'bold' }}>{props.children}</Text>

    const renderCountries = ({ item }) => (
        <ScrollView contentContainerStyle={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    setIsModalVisible(true)
                    setSelectedCountry(item)
                }}
            >
                <Text style={styles.textItem}>
                    <B>Country name:</B> {item.name}{'\n'}
                    <B>Capital:</B> {item.capital}{'\n'}
                    <B>Region:</B> {item.region}
                </Text>
            </TouchableOpacity>
        </ScrollView>
    )

    useEffect(() => {

        fetch('https://restcountries.com/v2/all')
            .then(res => res.json())
            .then(json => {
                setCountries(json)
                setLoading(false)
            })
    }, [])

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {countries.length === 0 && loading && (
                < ActivityIndicator
                    style={styles.loading}
                    size="large"
                    color="#1e90ff"
                />
            )}
            <FlatList
                data={countries}
                renderItem={renderCountries}
                keyExtractor={item => item.name}
            />
            {isModalVisible && setSelectedCountry && (
                <LanguagesModal
                    languages={selectedCountry.languages}
                    visible={isModalVisible}
                    onClose={() => setIsModalVisible(false)}                  
                />
            )}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        backgroundColor: '#fff',       
    },
    textItem: {
        padding: 15,       
        backgroundColor: '#e6e6fa',
      
    }
});

