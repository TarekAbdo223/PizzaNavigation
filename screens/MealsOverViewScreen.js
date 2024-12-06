import React from "react";
import { MEALS } from "../data/dummy-data";
import { StyleSheet, Text, View } from "react-native";

const MealsOverViewScreen = () => {
  return (
    <View style={styles.contianer}>
      <Text>Meals Screen</Text>
    </View>
  );
};

export default MealsOverViewScreen;

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
});
