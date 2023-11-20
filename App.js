import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Primer Entrega ARC</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2782FF",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  texto: {
    color: "#FFFFFF",
    fontSize: 20,
  },
});
