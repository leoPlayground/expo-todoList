import React from 'react';
import {View, Text, StyleSheet, Platform, StatusBar, TextInput, TouchableOpacity} from "react-native";
import {Card} from '../components'
import {COLORS, SIZES, FONTS, SHADOW} from "../constants";

const styles = StyleSheet.create({
    container:{
        paddingTop: Platform.OS === "ios" ? 40 : StatusBar.currentHeight + 10,
        flex:1,
        backgroundColor: COLORS.primary,
        padding: SIZES.padding,
    },
    textBoxWrapper:{
        width: '100%',
        position: 'absolute',
        bottom: 0,
        left: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: SIZES.padding,
    },
    textInput:{
        ...SHADOW,
        borderRadius: SIZES.textBoxRadius,
        backgroundColor: COLORS.secondary,
        height: 54,
        width: '80%',
        color: COLORS.primary,
        marginRight: 15,
        paddingLeft: 15,
        ...FONTS.h2_semiBold,
    },
    btn:{
        backgroundColor: COLORS.accent,
        height: 54,
        width: 42,
        borderRadius: '50%',
        alignItems:'center',
    },
    btnText:{
        fontSize: 32,
        color:COLORS.secondary
    }
});

export default function Homepage(){
    return (
        <View style={styles.container}>
            <Text style={{ ...FONTS.h1_semiBold, color:COLORS.secondary, marginBottom: 15 }}>
                어떤일을 해야합니까?
            </Text>
            <Card text={"취미반"}/>

            <View style={styles.textBoxWrapper}>
                <TextInput style={styles.textInput} placeholder="할일을 적어주세요" placeholderTextColor={COLORS.primary}/>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}