import React, { useState } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons';
import DateTimePickerModal from "react-native-modal-datetime-picker";

import Colors from '../../../styles/colors';

export interface Props {
  value?: any,
  onChange?:any,
  onChangeDebit?:any,
}

const NewEntryDatePicker: React.FC<Props> = ({
  children,
  value,
  onChange,
  onChangeDebit,
}) => {

  const [ modalVisible, setModalVisible ] = useState(false);
 
  const onChangeValue = date => {
    onChange(date);
    onCancel();
  }

  const onCancel = () => {
    setModalVisible(false);
  }

  return (
  <View >
    <TouchableOpacity
      style={Styles.button}
      onPress={()=>setModalVisible(true)}
    >
      <Icon name="today" size={30} color={Colors.white} ></Icon>
    </TouchableOpacity>
    <DateTimePickerModal 
      isVisible={modalVisible}
      mode="date" 
      headerTextIOS="Data de Vencimento"
      cancelTextIOS="Cancelar"
      confirmTextIOS="Ok"
      date={value}
      onConfirm={onChangeValue}
      onCancel={onCancel}
    ></DateTimePickerModal>
  </View>
)
}

const Styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.asphalt,
    borderRadius: 15,
    marginHorizontal: 20,
    marginVertical:10,
  },
  button: {
    backgroundColor: Colors.asphalt,
    width: 59,
    height: 59,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default NewEntryDatePicker;