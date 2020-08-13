import 'react-native-get-random-values';
import {v1 as uuidv1} from 'uuid';

export const getUUID = () => {
  return uuidv1();
};

//export const getUUID = () => {
  //const {v1: uuidv1} = require('uuid');
  //uuidv1(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
//};
