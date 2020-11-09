import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { TextInputMask } from 'react-native-masked-text';

import Colors from '../../../styles/colors';

export interface Props {
  value?: string,
  onChangeValue?:any,
}

const NewEntryInput: React.FC<Props> = ({
  children,
  value,
  onChangeValue,
}) => {
  return (
  <View style={Styles.container}>
    <TouchableOpacity style={Styles.debitButton}> 
      <Text style={Styles.debitButtonPrefix}>-</Text>
      <Text style={Styles.debitButtonText}>R$</Text>
    </TouchableOpacity>
    <TextInputMask
      style={Styles.input}
      type={"money"}
      options={{
        precision: 2,
        separator: ',',
        delimiter: '.',
        unit: '',
        suffixUnit: '',
      }}
      value={value}
      includeRawValueInChangeText={true}
      onChangeText={(text, rawText) => {
        onChangeValue && onChangeValue(rawText)
      }}
    >

    </TextInputMask>
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
  debitButton: {
    flexDirection: 'row',
    padding: 20
  },
  debitButtonPrefix: {
    fontSize: 28,
    color: Colors.white,
  },
  debitButtonText: {
    fontSize: 28,
    color: Colors.white,
  },
  input: {
    flex: 1,
    fontSize: 28,
    color: Colors.white,
    textAlign: 'right',
    paddingLeft: 0,
    paddingRight: 20,
  }
})

export default NewEntryInput;