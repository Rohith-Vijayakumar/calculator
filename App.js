import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useState } from "react";

export default function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState();

  const Add = () => {
    setResult("");

    setResult(Number(num1) + Number(num2));
  };
  const Sub = () => {
    setResult("");
    setResult(Number(num1) - Number(num2));
  };
  const Mul = () => {
    setResult("");
    setResult(Number(num1) * Number(num2));
  };
  const Div = () => {
    setResult("");
    setResult(Number(num1) / Number(num2));
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Num 1"
        keyboardType="numeric"
        onChangeText={(e) => setNum1(e)}
      ></TextInput>
      <TextInput
        style={styles.input}
        placeholder="Enter Num 2"
        keyboardType="numeric"
        onChangeText={(e) => setNum2(e)}
      ></TextInput>
      <View style={styles.button}>
        <Button title="Add" onPress={Add}></Button>
        <Button title="Sub" onPress={Sub}></Button>
        <Button title="Mul" onPress={Mul}></Button>
        <Button title="Div" onPress={Div}></Button>
      </View>

      <Text>The Result is {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "Grey",
    padding: 8,
    borderRadius: 10,
    marginBottom: 15,
  },
  button: {
    padding: 20,
    marginBottom: 10,
    justifyContent: "space-around",
    alignItems: "center",
    borderColor: "black",
    flexDirection: "row",
  },
});
