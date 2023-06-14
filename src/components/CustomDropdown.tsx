import React from 'react'

import { DefaultTFuncReturn } from 'i18next';

import { View, Text, ViewStyle, TextStyle, StyleSheet } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown';

import { Colors, Size } from '~styles';
import Styles from '~styles/Styles';

import { w } from '~utils/ui/WHNormalizer';

interface InputListProp {
    label: string,
    value: string,
}

interface DropdownProp {
    value?: string;
    onChange?: (text: string) => void;
    placeholder?: string;
    width?: number;
    height?: number;
    data?: Array<InputListProp>;
    dropdownStyle?: ViewStyle | TextStyle;
    error?: string | DefaultTFuncReturn;
}

export default function CustomDropdownComponent({
    value,
    placeholder,
    data,
    width,
    height,
    onChange,
    dropdownStyle,
    error,
}: DropdownProp) {
    const [isFocus, setIsFocus] = React.useState(false);
    const [dropdownData, setDropdownData] = React.useState(value);

    const renderItem = (item: any) => {
        return (
            <View style={styles.item}>
                <Text style={styles.textItem}>{item.label}</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Dropdown
                data={data}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? placeholder : '...'}
                searchPlaceholder="Search..."
                value={dropdownData}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    setDropdownData(item.value);
                    setIsFocus(false);
                    onChange(item.value.toString())
                }}
                renderItem={renderItem}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                style={styles.dropdown}
            />

            {error && <Text style={styles.errorMsg}>{error} !</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    errorMsg: {
        fontSize: Size.s14,
        color: Colors.red,
        marginTop: 1,
        marginLeft: -8
    },
    container: {
        padding: Size.s,
        color: Colors.black,
        // marginBottom: Size.xs,
    },
    dropdown: {
        height: w(12),
        paddingHorizontal: Size.s,
        borderWidth: 2,
        borderColor: Colors.gray3,
        borderRadius: Size.s12,
        color: Colors.subText,
        width: Size.wWidth / 1.12,
        alignSelf: "center",
    },
    icon: {
        marginRight: Size.vs,
        width: Size.ml
    },
    placeholderStyle: {
        fontSize: Size.s14,
        color: Colors.subText,
    },
    selectedTextStyle: {
        fontSize: Size.s14,
        color: Colors.black
    },
    iconStyle: {
        width: Size.xl,
        height: Size.xl,
    },
    inputSearchStyle: {
        height: Size.vl,
        fontSize: w(3.4),
    },
    item: {
        padding: Size.m,
        ...Styles.row_space
    },
    textItem: {
        fontSize: w(3.4),
        color: Colors.black,
        height: Size.l
    },
})