import {
  Alert,
  Image,
  Keyboard,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  Modal,
  TouchableOpacity,
  View,
  Switch,
  FlatList,
} from 'react-native';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import React, {useState, useEffect} from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';
import CustomView from '../components/CustomView';
import CustomTaskView from '../components/CustomTaskView';
import Task from '../components/Task';
import ItemView from '../components/ItemView';
import {useDispatch, useSelector} from 'react-redux';
import {addNewTask, deleleTask, updateTask} from '../redux/Actions';

const EditTask = props => {
  console.log('EditScreen' + JSON.stringify(props));
  const {task, dueDate} = props.route.params.item;
  const { index } = props.route.params;

  console.log(index);

  const [isFavouriteEnabled, setIsFavouriteEnables] = useState(false);
  const [isArchivedEnabled, setIsArchivedEnabled] = useState(false);
  const [editTask, setEditTask] = useState(task);
  const [selected, setSelected] = useState(dueDate);
  const [calenderShow, setCalenderShow] = useState(false);

  const dispatch = useDispatch();

  const selectDate = day => {
    setSelected(day.dateString);
    setCalenderShow(false);
  };

  const toggleFavourite = () => {
    if (isArchivedEnabled == true) {
      alert('Make task un-archived first');
    } else {
      setIsFavouriteEnables(previousState => !previousState);
    }
  };
  const toggleArchived = () => {
    if (isFavouriteEnabled == true) {
      alert('Favourite task cannot be archived');
    } else {
      setIsArchivedEnabled(previousState => !previousState);
    }
  };

  const handleUpdateTask = () => {
    const editObj = {
      editTask,
      selected,
      isFavouriteEnabled,
      isArchivedEnabled,
      index: index
    }
    // console.log(JSON.stringify(editObj))
    dispatch(updateTask(editObj));
    setEditTask(null);
    props.navigation.navigate('Tasks')
  };
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
      <Text style={styles.title}>Edit Tasks</Text>
      <CustomInput value={editTask} onChangeText={text => setEditTask(text)} />
      <View style={{flexDirection: 'row', padding: 10}}>
        <TouchableOpacity onPress={() => setCalenderShow(true)}>
          <Image
            source={require('../assets/images/calender.png')}
            style={styles.calender}
          />
        </TouchableOpacity>
        <Text style={{marginLeft: 20, alignSelf: 'center'}}>{selected}</Text>
      </View>
      <View style={{flexDirection: 'row', padding: 10}}>
        <Text>Make task favourite?</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isFavouriteEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleFavourite}
          value={isFavouriteEnabled}
        />
      </View>
      <View style={{flexDirection: 'row', padding: 10}}>
        <Text>Make task archived?</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isArchivedEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleArchived}
          value={isArchivedEnabled}
        />
      </View>

      {calenderShow === true ? (
        <Modal animationType="slide" transparent={true} visible={calenderShow}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 40,
            }}>
            <Calendar
              onDayPress={day => selectDate(day)}
              style={{
                borderWidth: 1,
                borderColor: 'gray',
                height: 350,
              }}
              markedDates={{
                [selected]: {
                  selected: true,
                  disableTouchEvent: true,
                  selectedDotColor: 'orange',
                },
              }}
            />
          </View>
        </Modal>
      ) : null}
      <CustomButton name="Update" onPress={() => handleUpdateTask()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  boldText: {
    fontWeight: 'bold',
  },
  taskContainer: {},
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
    paddingRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 40,
    marginLeft: 20,
    color: 'green',
    padding: 10,
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
    flexDirection: 'row',
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
    alignSelf: 'center',
  },
  calender: {
    width: 50,
    height: 50,
    marginRight: 20,
  },
});

export default EditTask;
