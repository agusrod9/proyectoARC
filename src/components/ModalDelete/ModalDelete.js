import { Button, Modal, StyleSheet, Text, View } from "react-native";
import React from "react";

const ModalDelete = ({product , visible , onModal ,deleteProduct}) => {
  return (
    <Modal visible={visible}>
      <View>
        <Text>Eliminar el producto {product.title}?</Text>
        <Button title="Si" onPress={deleteProduct}></Button>
        <Button
          title="Cancelar"
          onPress={() => onModal(false)}
        ></Button>
      </View>
    </Modal>
  );
};

export default ModalDelete;

const styles = StyleSheet.create({


});
