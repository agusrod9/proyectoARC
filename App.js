import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
} from "react-native";
import uuid from "react-native-uuid";
import ModalDelete from "./src/components/ModalDelete/ModalDelete";
import AddProducts from "./src/components/AddProducts/AddProducts";
import ProductListContainer from "./src/components/ProductListContainer/ProductListContainer";

export default function App() {
  const [newProductTitle, setNewProductTitle] = useState("");
  const [products, setProducts] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});

  const addProductHandler = () => {
    const newProd = {
      id: uuid.v4(),
      title: newProductTitle,
    };
    setProducts((current) => [...current, newProd]);
    setNewProductTitle("");
  };
  const deleteProductHandler = () => {
    setProducts((current) =>
      current.filter((product) => product.id !== selectedProduct.id)
    );
    setModalVisible(false);
  };

  const handlerModal = (item) => {
    setSelectedProduct(item);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de la compra</Text>
      <AddProducts
        newTitle={newProductTitle}
        setTitle={setNewProductTitle}
        addProd={addProductHandler}
      />
      <ModalDelete
        product={selectedProduct}
        visible={modalVisible}
        onModal={handlerModal}
        deleteProduct={deleteProductHandler}
      />
      <ProductListContainer
        prods = {products}
        onModal = {handlerModal}

      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2782FF",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  titulo: {
    marginTop: 30,
    fontFamily: "sans-serif-medium",
    fontSize: 18,
  },
});
