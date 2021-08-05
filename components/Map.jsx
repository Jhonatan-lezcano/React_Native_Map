import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default ({ onLongPress, points, pointsFilter }) => {
  return (
    <MapView style={styles.map} onLongPress={onLongPress}>
      {pointsFilter &&
        points.map((point) => {
          const { name, coordinate } = point;

          return <Marker key={name} coordinate={coordinate} title={name} />;
        })}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - 100,
  },
});
