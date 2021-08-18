import React from 'react'
import { StyleSheet,View, Text, StatusBar } from 'react-native';

export const Home = () => {
    return (
        <View style={styles.container}>
            <StatusBar
            backgroundColor="transparent"
            translucent={true}
            barStyle="dark-content"
            />
            <Text>Hello World!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });