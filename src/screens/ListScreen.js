import React from "react";
import { Text, StyleSheet, FlatList, View } from "react-native";

const ListScreen = () => {
  const friends = [
    {
      name: "MD MAHADI HASAN", age: 27
    },
    {
      name: "Tasphia Esha", age: 18
    },
    {
      name: "Tamim Zayn Khan", age: 22
    },
    {
      name: "Tasnia Tabassani Tarin", age: 23
    },
    {
      name: "MD IQBAL HOSSAIN", age: 26
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        // horizontal
        // showsHorizontalScrollIndicator={false}
        keyExtractor={(friend) => friend.name}
        data={friends}
        renderItem={({ item }) => {
          return <View style={styles.textItems}>
            <Text style={styles.text}>Name: {item.name} -- Age: {item.age}</Text>
          </View>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginVertical: 5,
    color: "#fff"
  },
  container: {
    padding: 10
  },
  textItems: {
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
    display: "flex",
    backgroundColor: "salmon",
    borderRadius: 10
  }
});

export default ListScreen;
