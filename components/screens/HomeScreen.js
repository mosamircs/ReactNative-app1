import React from 'react';
import {Text,StyleSheet} from 'react-native';
const HomeScreen =()=>{
    return <Text style={Styles.textStyle}>Hello world</Text>;
};
const Styles=StyleSheet.create({
    textStyle:{
        fontSize:25,
    },
});
export default HomeScreen;