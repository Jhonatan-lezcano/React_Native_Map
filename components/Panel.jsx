import React from "react";
import { StyleSheet, View, Button } from "react-native";

export default ({
  onPressList,
  textLeft,
  pointsFilter,
  togglePointsFilter,
}) => {
  return (
    <View style={styles.panel}>
      <Button title={textLeft} onPress={onPressList} />
      <Button
        title={pointsFilter ? "Ocultar" : "Mostrar"}
        onPress={togglePointsFilter}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  panel: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
  },
});
