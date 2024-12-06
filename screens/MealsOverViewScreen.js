import React from "react";
import { MEALS } from "../data/dummy-data";
import { FlatList, StyleSheet, Text, View } from "react-native";
import MealItem from "../components/MealItem";

const MealsOverViewScreen = ({ route }) => {
  // this route.params will give us the object the we defined navigation.navigate("MealsOverview"
  const catId = route.params.categoryId;
  console.log(catId, "CATID");

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0; // this means we have a match
  });
  console.log(displayedMeals);

  function renderMealItem(itemData) {
    return <MealItem title={itemData.item.title} />;
  }

  return (
    <View style={styles.contianer}>
      <FlatList
        data={displayedMeals}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
      />
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
