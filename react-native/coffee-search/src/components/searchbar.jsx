import { View, TextInput, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Elevation } from '../styles';

export default function Searchbar() {

  const searchbarStyle = StyleSheet.create({
    container: {
      flexDirection: "row",
      marginTop: 5,
      marginHorizontal: 20,
      backgroundColor: "white",
      padding: 15,
      borderRadius: 50,
    },
    Elevation,
  });

  return (
    <View style={[searchbarStyle.container, searchbarStyle.Elevation]}>
      <FontAwesome name="search" size={25} />
      <TextInput placeholder="Coffee Input" />
    </View>
  )
}
