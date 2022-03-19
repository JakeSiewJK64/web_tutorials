import { Text, StyleSheet, View } from 'react-native';

export default function Header() {

  const HeaderStyles = StyleSheet.create({
    container: {
      marginTop: 60,
      marginHorizontal: 20
    },
    topHeader: {
      fontSize: 20,
    },
    bottomHeader: {
      fontSize: 35,
      fontWeight: "bold"
    }
  })

  return (
    <View style={HeaderStyles.container}>
      <Text style={HeaderStyles.topHeader}>Grab your</Text>
      <Text style={HeaderStyles.bottomHeader}>Delicious Coffee!</Text>
    </View>
  );
}