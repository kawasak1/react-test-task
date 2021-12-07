import firebase from 'firebase/compat';

const firebaseConfig = {
  apiKey: 'AIzaSyARzdLO9jPlP45Wn7zPt48fPqyX3aF8L7U',
  authDomain: 'react-test-task-a913e.firebaseapp.com',
  databaseURL: 'https://react-test-task-a913e-default-rtdb.firebaseio.com',
  projectId: 'react-test-task-a913e',
  storageBucket: 'react-test-task-a913e.appspot.com',
  messagingSenderId: '465428287569',
  appId: '1:465428287569:web:ade2fa8b192b864975e870',
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();

export default database;
