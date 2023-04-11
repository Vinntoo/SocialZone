import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, } from "react-native";
import FeedScreen from "./src/screens/FeedScreen";
import CreatePostScreen from "./src/screens/CreatePostScreen";
import Navigator from './src/navigation/';
export default function App() {
  // console.warn("This is an error");

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />


      <Navigator />

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "white",
    // alignItems: "center",
    // justifyContent: "center",
    //marginTop: 100,
  },
});
