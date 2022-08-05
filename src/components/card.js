import React from 'react';
import {View, Text, StyleSheet, Pressable} from "react-native";
import {SIZES, FONTS, COLORS, SHADOW} from "../constants";
import Checkbox from 'expo-checkbox';

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
        marginBottom: 15
    },
    checkbox:{
        marginRight: 15,
    },
    text:{
        ...FONTS.h2_semiBold,
        color: COLORS.primary,
    },
});

export default function Card(props){
    return (
        <Pressable style={styles.view} onLongPress={() => props.deleteItem(props.index)}>
            <Checkbox style={styles.checkbox}
                      value={props.data.isSelected}
                      onValueChange={(value) => props.setIsSelected(props.index, value)} />
            <Text style={{...styles.text, textDecorationLine: props.data.isSelected ? 'line-through' : 'none'}}>
                { props.data.text }
            </Text>
        </Pressable>
    )
}