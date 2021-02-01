import React from 'react';
import {Text,StyleSheet} from 'react-native';

const ComponentsScreen = ()=>{
    return <Text style={styles.textStyles}>This is the Components Screen</Text>;
};

const styles = StyleSheet.create({
    textStyles:{
        fontSize:35
    }
});
export default ComponentsScreen;