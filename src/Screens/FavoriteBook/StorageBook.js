import React, {useEffect, useState, useCallback} from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {Favorite} from '../../Exports/Exports';
import VersesListing from '../../Components/VersesListing';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style';
import {useFocusEffect} from '@react-navigation/native';

const StorageBook = ({navigation, route}) => {
  const [likedVerses, setLikedVerses] = useState([]);
  const removeFavourite = async verse => {
    let verses = likedVerses.filter(data => data.verse !== verse.verse);
    await AsyncStorage.setItem('likedVerses', JSON.stringify(verses));
    setLikedVerses(verses);
  };
  useFocusEffect(
    useCallback(() => {
      const fetchVerses = async () => {
        try {
          let verses = await AsyncStorage.getItem('likedVerses');
          verses = JSON.parse(verses) || [];
          console.log(verses.length);
          setLikedVerses(verses);
        } catch (error) {
          console.log(error.message);
          if (null) {
            alert('You dont have any favorite : ', error);
          }
        }
      };

      fetchVerses();
    }, []),
  );
  return (
    <VersesListing
      data={likedVerses}
      styles={styles}
      action={removeFavourite}
    />
  );
};

export default StorageBook;
