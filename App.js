import React from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';
import useResults from './hooks/useResults';

export default function App() {
  // #1 menampung data dari API
  const [data] = useResults();
 //  #4 Looping dari induknya yaitu data
  const renderItem = ({ item }) => {
       //  #5 pasang looping nya dan pasang pada const nya
    return (
      <View
        style={{
          marginVertical: 5,
          borderBottomColor: '#ccc',
          borderBottomWidth: 1,
          padding: 5,
        }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            style={{ width: 50, height: 50, borderRadius: 50 / 2 }}
            source={{
              uri: item.avatar,
            }}
          />
          <View style={{ marginHorizontal: 10 }}>
            <Text>{item.first_name.toUpperCase()}</Text>
            <Text>{item.last_name}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    //  #6 Tampung harus dengan FlatList lalu panggil data dan render item, key extractor id nya
    <View style={styles.container}>
      <Text>Data Dari API Reqres: </Text>
      
      <FlatList
      keyExtractor={(item) => item.id.toString()}
        data={data}    
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  }
});
