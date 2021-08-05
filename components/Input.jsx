import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default ({ title, ...rest }) => {
  return (
    <View style={styles.wrapper}>
      <Text>{title}</Text>
      <TextInput {...rest} style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 80,
  },
  input: {
    borderColor: "#ccc",
    borderBottomWidth: 1,
    height: 40,
    paddingLeft: 10,
    marginTop: 5,
  },
});
