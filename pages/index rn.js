import { View, Button, Text, StyleSheet } from "react-native-web";

function index() {
  return (
    <View style={style.root}>
      <View style={style.container}>
        <Button style = {style.button}title="Button 1"></Button>
        <Button style = {style.button}title="Button 2"></Button>
        <Button style = {style.button}title="Button 3"></Button>
        <Text style = {style.text}>Test</Text>
        <Text style = {style.text}>Test</Text>
        <Text style = {style.text}>Test</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  root: {
    backgroundColor: "black",
  },
  container: {
    marginHorizontal: "auto",
    width: "1200px",
    minHeight: "100vh",
    display: "flex",
    
  },
  button: {
    backgroundColor: "red",
    color: "red",
    marginHorizontal : '1rem'
  },
  text: {
    color: "red",
    display : 'inline-block',
    marginHorizontal : '1rem'
  },
});

export default index;
