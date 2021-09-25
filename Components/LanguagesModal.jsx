import React from 'react'
import { View, Text, FlatList, Modal, StyleSheet, TouchableOpacity, Pressable } from 'react-native'

export default function LanguagesModal(props) {
    //console.log('from languageModal:',props.isModalVisible)
    // console.log('from languageModal:', props.languages);

    const renderLanguages = ({ item }) => (
        <Pressable onPress={() => console.log(props)}>
            <Text style={styles.item}>{item.name}</Text>
        </Pressable>

    )
    return (
        <Modal
            visible={props.isModalVisible}
            onRequestClose={props.onClose}
            animationType="slide"
            transparent={true}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <FlatList
                        data={props.languages}
                        renderItem={renderLanguages}
                        keyExtractor={(item) => item.name}
                    />
                    <TouchableOpacity style={styles.button} title="Close" onPress={props.onClose}>
                        <Text style={{ color: "black" }}>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </Modal>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,

    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        height: 200,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        backgroundColor: "#2196F3"
    },
    item: {
        textAlign: "center",
        color: "dodgerblue",
        fontSize: 16
    }
});