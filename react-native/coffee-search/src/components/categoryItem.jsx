import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native';
import { Elevation } from '../styles';

export default function CategoryItem({ coffee, name, index }) {

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
    Elevation,
  })
  return (
    <View style={[style.container, style.Elevation, index === 0 ? { marginLeft: 25 } : { marginLeft: 30 }]}>
      <View>
        <Image source={coffee} style={style.image} />
      </View>
      <Text style={style.header}>{name}</Text>
    </View>
  )
}
