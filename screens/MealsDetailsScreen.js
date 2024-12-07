import React from "react";
import { Text, View } from "react-native";

const MealsDetailsScreen = ({ route }) => {
  const mealId = route.params.mealId;

  return <Text>Dumb - {mealId}</Text>;
};

export default MealsDetailsScreen;
