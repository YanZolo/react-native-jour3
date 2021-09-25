import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native'
import LanguagesModal from '../Components/LanguagesModal';

export default function List(props) {
    const [countries, setCountries] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [loading, setLoading] = useState(true);

    //for put word in bold in a string, <B>in bold</B>
    const B = (props) => <Text style={{ fontWeight: 'bold' }}>{props.children}</Text>

    //
    const renderCountries = ({ item }) => (
        <View style={styles.textItem}>
            <TouchableOpacity
                onPress={() => {
                    setIsModalVisible(true)
                    setSelectedCountry(item)
                }}
            >
                <Text >
                    <B>Country name:</B> {item.name}{'\n'}
                    <B>Capital:</B> {item.capital}{'\n'}
                    <B>Region:</B> {item.region}
                </Text>
            </TouchableOpacity>
        </View>
    )



    useEffect(() => {

        fetch('https://restcountries.com/v2/all')
            .then(res => res.json())
            .then(json => {
                setCountries(json)
                setLoading(false)
            })
    }, [])

    //console.log(isModalVisible);

    //if (countries) console.log(countries)
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
                    countries
                    setCountries
                />
            )}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 50,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textItem: {
        padding: 15,
        marginBottom: 10,
        backgroundColor: '#e6e6fa',
        // alignItems: 'center',
        // justifyContent: 'center',

    }
});

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
//     textItem: {
//         padding: 15,
//         marginBottom: 10,
//         backgroundColor: '#e6e6fa',
//         // alignItems: 'center',
//         // justifyContent: 'center',

//     }, 
//     loading: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center'
//     },

// })