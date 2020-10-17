import React from 'react';
import { View, StyleSheet } from 'react-native';

import EntrySummaryChart from './EntrySummaryChart';
import EntrySummaryList from './EntrySummaryList';

export default function EntrySummary({entriesGrouped}) {
  return (
    <View style={styles.container}>
      <EntrySummaryChart/>
      <EntrySummaryList entriesGrouped={entriesGrouped}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
   // flex: 1,
   marginTop: 5,
   paddingHorizontal: 5,
   borderWidth: 2,
   borderColor: '#000',
   borderRadius: 10,
   backgroundColor: '#bdc3c7',
   height: '30%',
  }
})