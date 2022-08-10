import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Elevation } from '../styles';

export default function CategoryItem({ coffee, name, index, handlePress, active }) {

  const style = StyleSheet.create({
    container: { 
      marginHorizontal: 25,
      alignItems: "center",
      width: 100,
      height: 140,
      borderRadius: 50,
      marginVertical: 15,
      justifyContent: "center",
      backgroundColor: "#e67e22"
    },
    image: {
      height: 70,
      width: 70,
      backgroundColor: "white",
      borderRadius: 50,
    },
    header: {
      fontWeight: "bold",
      color: "#fff",
      marginTop: 10
    },
    headerActive: {
      color: "black",
      fontWeight: "bold",
      marginTop: 10
    },
    Elevation,
    isActive: {
      marginHorizontal: 25,
      alignItems: "center",
      width: 100,
      height: 140,
      borderRadius: 50,
      marginVertical: 15,
      justifyContent: "center",
      backgroundColor: "#f1c40f",
    },
  });

  return (
    <TouchableOpacity onPress={() => handlePress(name)}>
      <View style={[active ? style.isActive : style.container, style.Elevation, index === 0 ? { marginLeft: 25 } : { marginLeft: 30 }]}>
        <View>
          <Image source={coffee} style={style.image} />
        </View>
        <Text style={active ? style.headerActive : style.header}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}
