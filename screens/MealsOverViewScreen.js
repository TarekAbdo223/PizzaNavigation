import React from "react";
import { MEALS } from "../data/dummy-data";
import { StyleSheet, Text, View } from "react-native";

const MealsOverViewScreen = ({ route }) => {
  // this route.params will give us the object the we defined navigation.navigate("MealsOverview"
  const catId = route.params.categoryId;

  return (
    <View style={styles.contianer}>
      <Text>Meals Screen - {catId}</Text>
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
