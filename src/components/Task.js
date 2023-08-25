import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const Task = props => {
  // console.log("Task component" + props)
  return (
    <TouchableOpacity style={styles.item} onPress={props.onPress}>
      <View style={styles.itemLeft}>
        <TouchableOpacity
          onPress={props.onCompletePress}
          style={styles.square}></TouchableOpacity>
        <Text style={{...styles.text, ...props.styles}}>{props.text}</Text>
      </View>
      {/* <View style={styles.circular}></View> */}
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={props.onEdit}>
          <Image
            source={require('../assets/images/edit.png')}
            style={styles.img}
          />
        </TouchableOpacity>
        {/* <TouchableOpacity>
          <Image
            source={require('../assets/images/star.png')}
            style={styles.img}
          />
        </TouchableOpacity> */}
        <TouchableOpacity onPress={props.onDelete}>
          <Image
            source={require('../assets/images/delete.png')}
            style={styles.img}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginBottom: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    width: '95%',
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    width: 25,
    height: 25,
    backgroundColor: '#008000',
    borderRadius: 6,
    marginRight: 15,
  },
  text: {
    maxWidth: '80%',
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#008000',
    borderRadius: 5,
    borderWidth: 2,
  },
  img: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
});

export default Task;
