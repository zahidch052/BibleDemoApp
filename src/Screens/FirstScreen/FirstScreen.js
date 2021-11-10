import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  StatusBar,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {ChooseBook, Favorite} from '../../Exports/Exports';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style';
import StorageBook from '../FavoriteBook/StorageBook';
import VersesListing from '../../Components/VersesListing';

const FirstScreen = ({navigation}) => {
  const [verses, setVerses] = useState([]);

  const fetchVerses = () => {
    ChooseBook()
      .then(({data}) => {
        //  console.log(data.verses);
        setVerses(data.verses);
      })
      .catch(error => {
        alert('Network Error : ', error);
      });
  };
  const likingVerses = async verse => {
    try {
      let verses = [];
      let data = await AsyncStorage.getItem('likedVerses');
      data = JSON.parse(data);
      if (data) {
        verses = [...data];
      }

      if (verses.some(data => data.verse == verse.verse)) {
        window.alert('Already added');
      } else {
        verses.push(verse);
      }
      // if (data) {
      //   verses = [...data];
      // }

      await AsyncStorage.setItem('likedVerses', JSON.stringify(verses));
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchVerses();
  }, []);

  const _renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          likingVerses(item);
        }}>
        <View style={styles.Card}>
          <Text style={styles.txt}>Book ID : {item.book_id}</Text>
          <Text style={styles.txt}>Book Name : {item.book_name}</Text>
          <Text style={styles.txt}>Book Chapter : {item.chapter}</Text>
          <Text style={styles.txt}>Book Verse : {item.verse}</Text>
          <Text style={styles.txt}>{item.text}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return <VersesListing data={verses} action={likingVerses} styles={styles} />;
};

export default FirstScreen;
