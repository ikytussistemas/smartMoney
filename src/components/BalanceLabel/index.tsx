import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import LinearGradient from 'react-native-linear-gradient'

import Colors  from '../../styles/colors';

export default function BalanceLabel() {

  const currentBalance = 'R$ 2.764,25'
  
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Saldo atual</Text>
      <LinearGradient style={styles.panel}  colors={[Colors.violet, Colors.blue]}>
      <Text style={styles.value}>{currentBalance}</Text>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    color: Colors.white
  },
  panel: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginVertical: 10,
  },
  value: {
    fontSize: 28,
    color: Colors.white
  },
})