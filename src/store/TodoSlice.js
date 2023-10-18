import { createSlice } from '@reduxjs/toolkit'

export const TodoSlice = createSlice({
  name: 'todo',
  initialState: {
    taskItems: [],
  },
  reducers: {
    addTask:(task)=>{
      Keyboard.dismiss();
      taskItems=[...taskItems,task]
      // setTaskItems([...taskItems, task]);
      // setTask(null);

    },
    deleteItem: (state) => {
  
      // state.value += 1
    },
    done: (state) => {
      // state.value -= 1
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { deleteItem, done , addTask} = TodoSlice.actions

export default TodoSlice;