import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {getEntries} from '../../services/Entries';
import EntryListItem from './EntryListItem';
import Colors from '../../styles/colors';
import Container from '../core/Container';

export default function EntryList() {
  const navigation = useNavigation();

  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const loadEntries = async () => {
      const data = await getEntries();
      setEntries(data);
    };
  
    loadEntries();
  }, [entries]);

  const onEntryPress = (entry)=>{
    navigation.navigate('NewEntry', {entry: entry})
  };
    
  return (
    <Container title="Últimos Lançamentos"
      actionLabelText="Últimos 7 dias"
      actionButtonText="Ver mais"
      onPressActionButton={()=>{}}
    >
      <FlatList
        data={entries}
        keyExtractor={item => item.id}
        renderItem={
          ({item, index}) => 
            <EntryListItem 
              entry={item}
              onEntryPress={onEntryPress}
              isFirstItem={index === 0}
              isLastItem={index === entries.length -1}
            />
        } />
    </Container>
  );
}
