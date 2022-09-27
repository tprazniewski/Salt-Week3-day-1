import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,SafeAreaView } from 'react-native';
import CalculatorInput from './Components/Calculator';

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <CalculatorInput />
        <StatusBar style="dark" />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});