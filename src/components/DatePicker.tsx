import React, { useState } from "react";

import { useTheme } from "@react-navigation/native";
import moment from 'moment';
import { View, StyleSheet, TouchableOpacity } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";

import { Icon, Icons } from "./Icon";
import MText from "./Text";

import Size from "~constants/Size";
import { Colors } from "~styles";
import Styles from "~styles/Styles";
import { logger } from "~utils";
import { w } from "~utils/ui/WHNormalizer";

export default function DatePicker(props: any) {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [initialDate, setInitialDate] = useState(props.initialDate)

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date: any) => {
        setInitialDate(moment(date).format("YYYY-MM-DD"))
        props.onDateSelected(moment(date).format("YYYY-MM-DD"));
        hideDatePicker();
    };

    const theme = useTheme();

    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.5} onPress={showDatePicker} style={styles.inputContainer}>
                <MText style={initialDate != '' ? props.clear ? styles.input : styles.inputBlack : styles.input}>
                    {initialDate ? initialDate : props.placeholderText}
                </MText>
                <Icon type={Icons.Feather} name='calendar' color={theme.colors.primary} />
            </TouchableOpacity>
            {props?.error?.length !== 0 && <MText style={styles.errorMsg}>{props.error} !</MText>}
            <DateTimePicker
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                minimumDate={props?.minimumDate ? props.minimumDate : null}
                maximumDate={props?.maximumDate ? props.maximumDate : null}
            // maximumDate={moment().subtract(18, "years").toDate()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: Size.s,
        marginBottom: Size.xs,
    },
    containerBig: {
        fontSize: Size.s14,
    },
    inputContainer: {
        width: '100%',
        borderWidth: 2,
        height: w(12),
        borderColor: Colors.gray3,
        paddingHorizontal: Size.s,
        borderRadius: Size.s12,
        ...Styles.row_space,
    },
    input: {
        color: Colors.subText,
    },
    inputBlack: {
        color: Colors.black,
    },
    errorMsg: {
        fontSize: Size.s14,
        color: Colors.red,
        marginTop: 1
    },
});