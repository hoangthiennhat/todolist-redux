import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
var config = {
    apiKey: "AIzaSyA5a5oihT3uyJbtm9jJIE33e0WMVHQMOzc",
    authDomain: "todolist-847c4.firebaseapp.com",
    databaseURL: "https://todolist-847c4.firebaseio.com",
    projectId: "todolist-847c4",
    storageBucket: "todolist-847c4.appspot.com",
    messagingSenderId: "965306357819"
  };
firebase.initializeApp(config);

export const data = firebase.database().ref('dataForNote/');
/**
 * show data
 */
//   data.once('value').then(function(snapshot) {
//       console.log(snapshot.val())
//   })
/**
 * edit data
 */
// data.set({
//     id : 3,
//     name : 'đá bóng bàn'
// })
/**
 * push data
 */
// data.push({
//     name : 'hoc chơi ghi ta'
// })

/**
 * delete item in data
 */
// data.child('note1').remove();