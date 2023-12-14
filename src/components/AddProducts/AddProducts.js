import { Button, StyleSheet, TextInput, View } from "react-native";
import React from "react";

const AddProducts = ({newTitle, setTitle, addProd}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Agregar Producto"
        value={newTitle}
        onChangeText={(t) => setTitle(t)}
      />
      <Button title="Agregar" onPress={addProd} />
    </View>
  );
};

export default AddProducts;

const styles = StyleSheet.create({
    inputContainer:{
        marginTop: 20,
        flexDirection: 'row'
      },
    
    input:{
      backgroundColor: "#c9c9c9",
      height: 40,
      width: 200
    }
});
