import React from 'react';
import {View, Text, StyleSheet} from "react-native";
import {SIZES, FONTS, COLORS, SHADOW} from "../constants";
import CheckBox from 'react-native-check-box';

const styles = StyleSheet.create({
    view:{
        ...SHADOW,
        width: '100%',
        paddingVertical: 12,
        paddingHorizontal: SIZES.padding,
        borderRadius: SIZES.borderRadius,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.secondary,
    },
    checkbox:{
        height: 26,
        width: 26,
        borderRadius: 5,
        backgroundColor: COLORS.primary,
        marginRight: 15,
    },
    text:{
        ...FONTS.h2_semiBold,
        color: COLORS.primary,
    },
});

export default function Card(props){
    return (
        <View style={styles.view}>
            <CheckBox style={styles.checkbox} onClick={() => alert('123')}/>
            <Text style={styles.text}>{ props.text }</Text>
        </View>
    )
}