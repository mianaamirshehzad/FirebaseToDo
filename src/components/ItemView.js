import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ItemView = (props) => {
    return (
        <TouchableOpacity style={styles.btn}
            onLongPress={props.onLongPress}
            onPress={props.onPress}
        >
            <TouchableOpacity style={styles.square}></TouchableOpacity>
            <View style={styles.itemLeft}>
                <Text style={styles.text}>
                    {props.text}
                </Text>
            </View>
            {/* <Image source={require("../assets/images/delete.png")}
                style={styles.img}
                onLongPress = {props.onLongPress} /> */}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#FAFAFA',
        width: '90%',
        borderRadius: 8,
        shadowColor: '#000000',
        shadowOpacity: 0.5,
        elevation: 5,
        shadowRadius: 5,
        padding: 10,
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        color: 'black',
        fontSize: 15,
        padding: 5,
        textAlign: 'left'
    },
    img: {
        width: 25,
        height: 25,
        alignSelf: 'center'
    },
    square: {
        width: 25,
        height: 25,
        backgroundColor: '#008000',
        borderRadius: 10,
        // marginRight: 5,
    },
    leftItem: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    }
});

export default ItemView;