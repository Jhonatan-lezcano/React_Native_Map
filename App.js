import React, { useState } from "react";
import { StyleSheet, View, Button, StatusBar } from "react-native";
import { Map, Modal, Panel, Input, List } from "./components";

export default function App() {
  const [points, setPoints] = useState([]);
  const [name, setName] = useState("");
  const [pointTemp, setPointTemp] = useState({});
  const [visibility, setVisibility] = useState(false);
  const [visibilityFilter, setVisibilityFilter] = useState("new_point");
  const [pointsFilter, setPointsFilter] = useState(true);

  const handleLongPress = ({ nativeEvent }) => {
    setVisibilityFilter("new_point");
    setPointTemp(nativeEvent.coordinate);
    setVisibility(true);
  };

  const handleChangeText = (text) => {
    setName(text);
  };

  const handleSubmit = () => {
    const newPoint = { name, coordinate: pointTemp };
    setPoints(points.concat(newPoint));
    setVisibility(false);
    setName("");
  };

  const handelCancel = () => {
    setPointTemp({});
    setName("");
    setVisibility(false);
  };

  const handleList = () => {
    setVisibilityFilter("list");
    setVisibility(true);
  };

  const togglePointsFilter = () => {
    setPointsFilter(!pointsFilter);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Map
        onLongPress={handleLongPress}
        points={points}
        pointsFilter={pointsFilter}
      />
      <Panel
        onPressList={handleList}
        textLeft="Lista"
        pointsFilter={pointsFilter}
        togglePointsFilter={togglePointsFilter}
      />
      <Modal visibility={visibility}>
        {visibilityFilter === "new_point" ? (
          <View style={styles.form}>
            <Input
              title="Nombre:"
              placeholder="Nombre del punto"
              onChangeText={handleChangeText}
            />
            <View style={styles.containerBtn}>
              <Button title="Aceptar" onPress={handleSubmit} />
              <Button title="Cancelar" onPress={handelCancel} />
            </View>
          </View>
        ) : (
          <List points={points} closeModal={() => setVisibility(false)} />
        )}
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  form: {
    padding: 20,
    paddingBottom: 10,
  },
  containerBtn: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 15,
  },
});
