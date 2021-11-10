import react from 'react';
// import FirstScreen from './FirstScreen';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  Card: {
    borderRadius: 20,
    elevation: 5,
    marginVertical: 20,
    paddingTop: 20,
    paddingHorizontal: 30,
    marginHorizontal: 20,
    backgroundColor: 'yellow',
  },
  EmptyCard: {
    borderRadius: 20,
    elevation: 5,
    marginVertical: 20,
    paddingTop: 20,
    paddingHorizontal: 30,
    marginHorizontal: 20,
    backgroundColor: 'yellow',
    height: '40%',
  },
  txt: {
    paddingVertical: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  EmptyTxt: {
    paddingVertical: 10,
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: 'black',
  },
});
export default styles;
