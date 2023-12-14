import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

const ProductListContainer = ({prods, onModal}) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={prods}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Button title="X" onPress={() => onModal(item)}></Button>
          </View>
        )}
      ></FlatList>
    </View>
  );
};

export default ProductListContainer;

const styles = StyleSheet.create({
  listContainer: {
    width: 400,
  },
  productCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  cardTitle: {
    width: "60%",
  },
});
