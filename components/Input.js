import React from 'react';

import {TextInput, StyleSheet} from 'react-native';



// A FUNCTIONAL COMPONENT

const Input = props => {
    return <TextInput style={{...styles.input, ...props.style}} />
};



const styles = StyleSheet.create({
    input: {
        
        height: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        paddingVertical: 5
    }
});



export default Input;
