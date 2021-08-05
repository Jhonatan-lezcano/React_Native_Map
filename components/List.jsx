import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  Dimensions,
} from "react-native";

export default ({ points, closeModal }) => {
  return (
    <>
      <View style={styles.list}>
        <FlatList
          data={points.map((i) => i.name)}
          renderItem={({ item }) => {
            return (
              <View style={styles.item}>
                <Text>{item}</Text>
              </View>
            );
          }}
          keyExtractor={(item) => item}
        />
      </View>
      <View>
        <Button title="Cerrar" onPress={closeModal} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  list: {
    height: Dimensions.get("window").height - 250,
  },
  item: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    height: 50,
    justifyContent: "center",
    padding: 15,
  },
});
