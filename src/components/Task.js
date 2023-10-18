import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useSelector, useDispatch} from 'react-redux';

import { deleteItem, done } from "../store/TodoSlice";



const Task = (props) => {

  const dispatch = useDispatch()

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableOpacity onPress={dispatch(done())}>
        <Icon style={styles.square} name="check" size={20} color="#55BCF6" />
        </TouchableOpacity>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <TouchableOpacity onPress={dispatch(deleteItem())}>
      <Icon name="delete" size={20} color="#900" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  square: {
    marginRight: 15,
  },
  itemText: {
    maxWidth: '100%',
  },
});

export default Task;