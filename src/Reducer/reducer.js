import { data } from '../firebaseConnect';

const toDoListInitialState = {
    statusAddForm : true,
    find : ''
}
 const toDoList = (state = toDoListInitialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            data.push({
                name : action.info
            });
            return state
            
        case 'DELETE':
            data.child(action.idItem).remove();
            
            return state
        case 'SAVE_FORM':
            
            data.child(action.nameItem.id).update({
                name : action.nameItem.name
            })
            return state
        case 'FIND' : 
            return { ...state,find : action.nameSearch }
                
        default:
            return state
    }
    
}
export default toDoList; 