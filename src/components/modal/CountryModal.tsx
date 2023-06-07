import React, { useState } from 'react';

import { useTheme } from '@react-navigation/native';

import { useTranslation } from 'react-i18next';

import {
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
  FlatList,
  TouchableWithoutFeedback,
  TextInput,
} from 'react-native';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';

import { Icon, Icons } from '~components/Icon';

import MText from '~components/Text';
import { Container, Row, SpaceBetweenRow } from '~components/Wrapper';
import { Countries } from '~constants/Country';
import Size from '~constants/Size';
import { Colors } from '~styles';
import Styles from '~styles/Styles';

const countryData = Countries;

interface Props {
  setCountryFlag: any,
  setCountryCode: any,
  countryModalVisible: boolean,
  setCountryModalVisible: any
}

interface CountryItemProps {
  flag?: string;
  name: string;
  dial_code: string;
  onPress: () => void;
}

const CountryItem = ({ flag, name, dial_code, onPress }: CountryItemProps) => {
  return (
    <Animated.View entering={FadeInUp} exiting={FadeInDown}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.countryStyle}>
          <Row style={Styles.container}>
            <MText style={styles.countryFlagStyle}>{flag}</MText>
            <MText marginHorizontal={Size.m} style={styles.countryNameStyle}>{name}</MText>
          </Row>
          <MText style={styles.countryNameStyle}>{dial_code}</MText>
        </View>
      </TouchableWithoutFeedback>
    </Animated.View>
  )
}

const CountryModal = ({ setCountryFlag, setCountryCode, countryModalVisible, setCountryModalVisible }: Props) => {
  const { t } = useTranslation()
  const theme = useTheme();
  const [filteredCountryList, setFilteredCountryList] = useState([]);
  const [filterCountryText, setFilterCountryText] = useState('');

  const renderHeader = () => (
    <View style={styles.headerWrapper}>
      <SpaceBetweenRow style={styles.header}>
        <MText size={Size.m} isBold>{t('Select Country/region')}</MText>
        <TouchableOpacity onPress={handleCloseModal}>
          <Icon type={Icons.AntDesign} name='close' size={Size.l} color={theme.colors.text} />
        </TouchableOpacity>
      </SpaceBetweenRow>
      <View style={styles.searchBar}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Search country by name"
          placeholderTextColor={Colors.gray9}
          style={styles.searchTextStyle}
          value={filterCountryText}
          onChangeText={val => filterCountry(val)}
        />
        <View style={styles.clearButtonWrapper}>
          <TouchableOpacity onPress={() => setFilterCountryText('')}
            style={styles.clearBtn}>
            <Icon type={Icons.AntDesign} name='close' size={Size.m} color={theme.colors.text} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  const filterCountry = (val: string) => {
    setFilterCountryText(val);
    if (val === '') {
      setFilteredCountryList([]);
    } else {
      const newData: any = countryData.filter(item => {
        const itemData = item.name.toUpperCase();
        const textData = val.toUpperCase();
        return itemData.startsWith(textData);
      });

      setFilteredCountryList(newData);
    }
  };

  const handleCloseModal = () => {
    setFilteredCountryList([]);
    setFilterCountryText('');
    setCountryModalVisible(false);
  };

  const onPressItem = (selected: any) => {
    setCountryFlag(selected.flag);
    setCountryCode(selected.dial_code);
    setFilteredCountryList([]);
    setFilterCountryText('');
    setCountryModalVisible(false);
  };

  return (
    <>
      <Modal
        animationType="slide"
        transparent={false}
        visible={countryModalVisible}>
        <Container>
          {renderHeader()}
          <FlatList
            data={
              filteredCountryList.length < 1
                ? countryData
                : filteredCountryList
            }
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <CountryItem {...item}
                onPress={() => onPressItem(item)} />)}
          />
        </Container>
      </Modal>
      {/* <SimpleModal
        visible={countryModalVisible}
        setVisible={setCountryModalVisible}>
      </SimpleModal> */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  searchTextStyle: {
    width: '100%',
    borderRadius: Size.s,
    borderWidth: Size._xs / Size.s,
    borderColor: Colors.gray5,
    backgroundColor: Colors.white,
    color: Colors.gray9,
    paddingHorizontal: Size.s
  },
  headerWrapper: {
    backgroundColor: Colors.gray1,
    paddingBottom: Size.s,
  },
  header: {
    paddingHorizontal: Size.m,
    paddingVertical: Size.xs,
  },
  searchBar: {
    paddingHorizontal: Size.s,
  },
  countryStyle: {
    borderBottomColor: Colors.gray4,
    borderBottomWidth: Size._xs / Size.s,
    paddingVertical: Size.xs,
    paddingHorizontal: Size.l,
    ...Styles.row_space,
  },
  countryFlagStyle: {
    fontSize: Size.l,
  },
  countryNameStyle: {
    fontSize: Size.m,
    color: Colors.gray7,
  },
  clearButtonWrapper: {
    position: 'absolute',
    right: Size.l,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
  clearBtn: {
    backgroundColor: Colors.gray2,
    padding: Size.vs,
  },
  textStyle: {
    padding: Size.s,
    fontSize: Size.m,
    color: Colors.gray7,
    fontWeight: 'bold',
  },
});

export default CountryModal;
