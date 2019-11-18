import React from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

import Card from '../components/Card';

// A FUNCTIONAL COMPONENT
const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game</Text>

            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <TextInput />

                <View style={styles.buttonContainer}>
                    <View style={styles.buttons}>
                        <Button title="Reset" onPress={() => {}} color="#c717fc" />
                    </View>
                    <View style={styles.buttons}>
                        <Button title="Confirm" onPress={() => {}} color="#f7287b" />
                    </View>
                </View>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },

    title: {
        fontSize: 20,
        marginVertical: 10,
    },

    inputContainer: {

        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        
    },

    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },

    buttons: {
        width: 130,
        padding: 20,
        borderRadius: 8
    }
});

export default StartGameScreen;
