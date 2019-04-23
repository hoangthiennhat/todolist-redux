import { createStore } from 'redux';
import toDoList from './Reducer/reducer';



const store = createStore(toDoList);
export default store;