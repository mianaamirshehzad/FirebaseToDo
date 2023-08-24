import { Alert, Image, Keyboard, ScrollView, KeyboardAvoidingView, TextInput, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';
import CustomView from '../components/CustomView';
import CustomTaskView from '../components/CustomTaskView';
import Task from '../components/Task';
import ItemView from '../components/ItemView';
import { useDispatch, useSelector } from 'react-redux';
import { addNewTask, deleleTask, updateTask } from '../redux/Actions';

const FavouriteTasks = (props) => {
    // Getting data from store 
    const dataFromStore = useSelector((state) => state.taskReducer); //Syntax for this hook => useSelector(state => state.myReducer);

    const [task, setTask] = useState();
    const [allTasks, setAllTasks] = useState([]);
    const [editTask, setEditTask] = useState("");
    const [beingEdit, setBeingEdit] = useState(false);
    const [show, setShow] = useState(false);
    const [currentId, setCurrentId] = useState("");
    const [currentTask, setCurrentTask] = useState("");
    const [seletedItem, setSelectedItem] = useState("");

    const dispatch = useDispatch();

    return (
        <View style={GlobalStyles.globalContainer}>
            <View style={styles.cornerTop}>
                <Image
                    source={require('../assets/images/corner.png')}
                    style={GlobalStyles.corner}
                />
            </View>
            <View style={styles.cornerTopRight}>
                <Image
                    source={require('../assets/images/corner.png')}
                    style={styles.corner}
                />
            </View>
            <Text style={styles.title}>
                Favourite Tasks
            </Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    boldText: {
        fontWeight: 'bold',
    },
    taskContainer: {

    },
    forgot: {
        // right: 40,
        padding: 5,
        alignItems: 'flex-end',
        marginLeft: 'auto',
        marginRight: 40,
    },
    cornerTop: {
        left: -50,
        top: -50,
        position: 'absolute',
    },
    cornerTopRight: {
        right: -50,
        top: -50,
        position: 'absolute',
    },
    cornerbottom: {
        right: -50,
        bottom: -50,
        position: 'absolute',
    },
    taskWrapper: {
        paddingTop: 80,
        paddingLeft: 20,
        paddingRight: 10
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 40,
        marginLeft: 20,
        color: 'green',
        padding: 10
        // position: 'absolute',
        // left: 50,
        // top: 40,
    },
    writeTastWrapper: {
        position: 'absolute',
        bottom: 30,
        justifyContent: 'space-around',
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row'
    },
    addWrapper: {
        height: 60,
        width: 60,
        backgroundColor: '#008000',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'green',
        borderWidth: 5,
    },
    addText: {
        color: 'white',
        fontSize: 30,
    },
    input: {
        paddingVertical: 15,
        width: '70%',
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,

    },
    corner: {
        width: 100,
        height: 100,
    },
    item: {
        marginTop: 30,
        width: '95%',
        alignSelf: 'center'
    },
});

export default FavouriteTasks;