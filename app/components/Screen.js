import React from 'react';
import { StatusBar, Text, View,StyleSheet, ScrollView } from 'react-native';

const Screen = ({
    children
}) => (
    <ScrollView>
    <View style={styles.container}>
        {children}
    </View>
    </ScrollView>
);
const styles = StyleSheet.create({
    container:{
        marginTop:StatusBar.currentHeight,
        paddingHorizontal:15,
        backgroundColor:'#f7f3f3',
        flex:1
    }
})

export default Screen;
