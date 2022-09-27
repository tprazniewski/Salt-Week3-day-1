import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";

export default function CalculatorInput() {
  const [inputOne, setInputOne] = useState("");
  const [inputTwo, setInputTwo] = useState("");
  const [value, setValue] = useState("");
  const [operator, setOperator] = useState();
  const [result, setResult] = useState("");

  function operations() {
    if (!inputOne) {
      setInputOne(value);
      setValue("");
    } else {
      setInputTwo(value);
    }
  }

  // make number into procentage decimal
  function procentage() {
    if (value) {
      setValue(value / 100);
    }
  }

  function addComma() {
    if (value.indexOf(".") === -1) {
      setValue(value + ".");
    }
  }
  function backspace() {
    setValue(value.slice(0, -1));
  }

  function calculate() {
    switch (operator) {
      case "+":
        return setResult(Number(inputOne) + Number(inputTwo));

      case "-":
        return setResult(Number(inputOne) - Number(inputTwo));
      case "*":
        return setResult(Number(inputOne) * Number(inputTwo));
      case "/":
        setResult(Number(inputOne) / Number(inputTwo));
      default:
        return "Invalid operator";
    }
  }

  useEffect(() => {
    if (inputOne && inputTwo) {
      calculate();
    }
  }, [inputTwo]);

  return (
    <>
      <View style={styles.preview}>
        <Text>{inputOne}</Text>
        <Text>{operator}</Text>
        <Text>{inputTwo}</Text>

      </View>
        <Text style={styles.value}> {result ? result : value}</Text>
      <View>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.clearBtn}
            onPress={() => {
              setValue("");
              setResult("");
              setOperator("");
              setInputOne("");
              setInputTwo("");
            }}
          >
            <Text >{"C"}</Text>
          </TouchableOpacity>

           <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setOperator("/");
              operations();
            }}
          >
            <Text >{"/"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setOperator("*");
              operations();
            }}
          >
            <Text >{"*"}</Text>
          </TouchableOpacity>

          
            <TouchableOpacity
              style={styles.backspaceBtn}
              onPress={() => {
                backspace();
              }}
            >
              <Text >{"<"}</Text>
            </TouchableOpacity>
          

          <TouchableOpacity
            style={styles.button}
            onPress={() => setValue(value + "7")}
          >
            <Text >{"7"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => setValue(value + "8")}
          >
            <Text >{"8"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => setValue(value + "9")}
          >
            <Text >{"9"}</Text>
          </TouchableOpacity>

          
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setOperator("-");
                operations();
              }}
            >
              <Text >{"-"}</Text>
            </TouchableOpacity>
          

          <TouchableOpacity
            style={styles.button}
            onPress={() => setValue(value + "4")}
          >
            <Text >{"4"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => setValue(value + "5")}
          >
            <Text >{"5"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => setValue(value + "6")}
          >
            <Text >{"6"}</Text>
          </TouchableOpacity>

          
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setOperator("+");
                operations();
              }}
            >
              <Text >{"+"}</Text>
            </TouchableOpacity>
          

            <TouchableOpacity
              style={styles.button}
              onPress={() => setValue(value + "1")}
            >
              <Text >{"1"}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => setValue(value + "2")}
            >
              <Text >{"2"}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => setValue(value + "3")}
            >
              <Text >{"3"}</Text>
            </TouchableOpacity>
          <TouchableOpacity
            style={styles.calculateBtn}
            onPress={() => {
              setInputTwo(value);
            }}
          >
            <Text >{"="}</Text>
          </TouchableOpacity>


           <TouchableOpacity
            style={styles.button}
            onPress={() => procentage()}
          >
            <Text >{"%"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => setValue(value + "0")}
          >
            <Text >{"0"}</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={addComma}
          style={styles.button}>
            <Text >{"."}</Text>
          </TouchableOpacity>  
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  preview: {
    textAlign: "center",
  },
  button: {
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#72d3fe",
    margin: 10,
    maxWidth: 100
  },
  bottomTwoRows: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start"
  },

  clearBtn: {
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#FFC000",
    margin: 10,
    maxWidth: 100,
  },

  backspaceBtn: {
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#FDD96A",
    margin: 10,
    maxWidth: 100,
  },

  calculateBtn: {
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#FFEFBF",
    margin: 10,
    maxWidth: 100,
  },

  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    width: "100%",
  },

  value: {
    fontSize: 40,
  },
});
