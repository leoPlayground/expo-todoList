import React, {useState} from 'react';
import {View, Text, StyleSheet, Platform, StatusBar, TextInput, TouchableOpacity, FlatList, Alert} from "react-native";
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

    const [list, setList] = useState([]);
    const [value, setValue] = useState('');

    function addTest(text){
        if(value !== '') {
            setList(prev => {
                return [
                    ...prev,
                    { text: text, isSelected: false }
                ]
            });
            setValue('');
        } else{
            alert('할 일을 적어주세요!')
        }
    }

    function setIsSelected(index, value){
        let data = [];

        for (let i = 0; i < list.length; i++) {
            if(index === i){
                data.push({...list[i], isSelected: value});
            } else{
                data.push(list[i]);
            }
        }

        setList(data);
    }

    function deleteItem(idx, value){
        Alert.alert("아이템 삭제", "정말 삭제하시겠습니까?",
            [
                        {
                        text: "취소",
                        style:'cancel'
                    },{
                        text: "삭제",
                        onPress: () => {
                            const data = list.filter((item, index) => index !== idx)
                            setList(data);
                        }
                    }
                ]
            );

    }

    return (
        <View style={styles.container}>
            <Text style={{ ...FONTS.h1_semiBold, color:COLORS.secondary, marginBottom: 15 }}>
                어떤일을 해야합니까?
            </Text>


            <FlatList style={{flex:1}} data={list}
                      renderItem={({item, index}) => <Card data={item} index={index} setIsSelected={setIsSelected} deleteItem={deleteItem} />}
            keyExtractor={(item, index) => index.toString()}/>

            <View style={styles.textBoxWrapper}>
                <TextInput style={styles.textInput} placeholder="할일을 적어주세요" placeholderTextColor={COLORS.primary} onChangeText={(text) => setValue(text)} value={value}/>
                <TouchableOpacity style={styles.btn} onPress={() => addTest(value)}>
                    <Text style={styles.btnText}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}