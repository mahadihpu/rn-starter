import React from "react";
import { Text, StyleSheet, FlatList, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = () => {

  return (
    <View style={styles.container}>
      <Button
      onPress={() => console.log('Button Pressed')}
      title="Go to ListScreen"
       />
       <TouchableOpacity onPress={() => console.log('Component Pressed')}>
        <Text>Go to Component Demo</Text>
       </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginVertical: 5,
    color: "#fff"
  },
  container: {
    padding: 10,
    display: "flex",
    justifyContent: "center",
    alignContent:"center",
    flex: 1
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

export default HomeScreen;
