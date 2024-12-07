import React, { useEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import { FlatList, StyleSheet, Text, View } from "react-native";
import MealItem from "../components/MealItem";

const MealsOverViewScreen = ({ route, navigation }) => {
  // this route.params will give us the object the we defined navigation.navigate("MealsOverview"
  const catId = route.params.categoryId;
  //   console.log(catId, "CATID");

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0; // this means we have a match
  });

  useEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, []);

  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      duration: item.duration,
      complexity: item.complexity,
    };

    return <MealItem {...mealItemProps} />;
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
