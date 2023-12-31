import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
// import { deleteDoc } from '@firebase/firestore'

const CustomTaskView = async (props) => {
    
    return (
            <Pressable style={styles.container}          
            >
                <Text>
                    {props.title}
                </Text>
            </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        borderRadius: 20,
        margin: 8,
        height: 50,
        alignItems: 'center',
        shadowColor: 'grey',
        elevation: 8
    },
    text: {
        justifyContent: 'center',
        margin: 25,
    },
});

export default CustomTaskView;