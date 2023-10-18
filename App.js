import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import Task from './src/components/Task';
import Icon from 'react-native-vector-icons/Ionicons';
import { Provider, useDispatch, useSelector } from 'react-redux'
import { Store } from './src/config/Store';

import { addTask } from "./src/store/TodoSlice";

const App = () => {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  const completeTask = index => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <Provider store={Store}>
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container} >

      <Text style={styles.header}>Tasks</Text>
      <ScrollView style={styles.items}>
        <View >
          {taskItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task text={item} />
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          
          <View style={styles.Wrapper}>
            <TextInput
              placeholder="Add Task"
              style={styles.textInput}
              value={task}
              onChangeText={text => setTask(text)}
            />

            <TouchableOpacity onPress={() => handleAddTask()}>
              <View style={styles.btnContainer}>
                <Icon name="add" size={20} color="#900" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>

    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  inner: {
    padding: 24,
    flex: 1,
  },
  Wrapper: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  header: {
    fontSize: 36,
    paddingLeft: 24,
  },
  textInput: {
    height: 40,
    marginLeft:40,
    width: '80%',
    borderColor: '#000000',
    borderBottomWidth: 1,
  },
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
    marginLeft:40,
  },
  items: {
    paddingLeft:24,
    paddingEnd:24,
  },
});

export default App;
