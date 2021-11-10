import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

const VersesListing = props => {
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => {
          props.action && props.action(item);
        }}>
        <View style={props.styles.Card} key={index}>
          <Text style={props.styles.txt}>Book ID : {item.book_id}</Text>
          <Text style={props.styles.txt}>Book Name : {item.book_name}</Text>
          <Text style={props.styles.txt}>Book Chapter : {item.chapter}</Text>
          <Text style={props.styles.txt}>Book Verse : {item.verse}</Text>
          <Text style={props.styles.txt}>{item.text}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={props.styles.container}>
      {props.data ? (
        <FlatList
          data={props.data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      ) : (
        <View style={props.styles.EmptyCard}>
          <Text style={props.styles.EmptyTxt}>No Data Found</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default VersesListing;
