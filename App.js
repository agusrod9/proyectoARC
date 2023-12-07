import { useState } from "react";
import { StyleSheet, Button, TextInput, View, Text, FlatList, Modal } from "react-native";
import uuid from 'react-native-uuid';

export default function App() {

  const [newProductTitle, setNewProductTitle] = useState("")
  const [products, setProducts] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState({})

  const addProductHandler = () => {
    const newProd = {
      id: uuid.v4(),
      title: newProductTitle
    }
    setProducts(current => [...current, newProd])
    setNewProductTitle("")
  }
  const deleteProductHandler = () => {
    setProducts(current => current.filter(product => product.id !== selectedProduct.id))
    setModalVisible(false)
  }

  const handlerModal = (item) => {
    setSelectedProduct(item)
    setModalVisible(true)
  }


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de la compra</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Agregar Producto" value={newProductTitle} onChangeText={(t)=> setNewProductTitle(t)} />
        <Button title="Agregar" onPress={addProductHandler}/>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={products}
          keyExtractor={item=> item.id}
          renderItem={({item})=><View style={styles.productCard}>
                                  <Text style={styles.cardTitle}>{item.title}</Text>
                                  <Button title="X" onPress={()=>handlerModal(item)}></Button>  
                                </View>}>
        </FlatList>
        <Modal visible={modalVisible}>
          <View>
            <Text>Eliminar el producto {selectedProduct.title}?</Text>
            <Button title="Si" onPress={deleteProductHandler}></Button>
            <Button title= "Cancelar" onPress={()=>setModalVisible(false)}></Button>
          </View>
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2782FF",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  titulo:{
    marginTop: 30,
    fontFamily: "sans-serif-medium",
    fontSize: 18
  },
  inputContainer:{
    marginTop: 20,
    flexDirection: 'row'
  },

input:{
  backgroundColor: "#c9c9c9",
  height: 40,
  width: 200
},
listContainer: {
  width: 400,
},
productCard: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 10,
},
cardTitle: {
  width: '60%',
}

});
