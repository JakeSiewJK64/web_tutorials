import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, FlatList } from "react-native";
import CategoryItem from "./src/components/categoryItem";
import Header from "./src/components/header";
import Searchbar from "./src/components/searchbar";

import americano from "./assets/coffee/americano-small.jpg";
import latte from "./assets/coffee/latte.jpg";
import longblack from "./assets/coffee/longblack.jpg";
import mocha from "./assets/coffee/mocha.jpg";
import cappuccino from "./assets/coffee/cappuccino.jpg";

export default function App() {
  const coffees = [
    { image: americano, name: "americano" },
    { image: latte, name: "latte" },
    { image: longblack, name: "long black" },
    { image: mocha, name: "mocha" },
    { image: cappuccino, name: "cappuccino" },
  ];

  const style = StyleSheet.create({
    coffeeContainer: {
      flexDirection: "row",
      marginHorizontal: 10,
    },
    edgeContainer: {
      marginLeft: 20,
    },
  });
  return (
    <View>
      <StatusBar />
      <Header />
      <Searchbar />
      <FlatList
        style={style.coffeeContainer}
        data={coffees}
        horizontal
        keyExtractor={(cat, id) => id}
        renderItem={({ item, i }) => (
          <CategoryItem
            key={i}
            index={i}
            coffee={item.image}
            name={item.name}
          />
        )}
      />
    </View>
  );
}
