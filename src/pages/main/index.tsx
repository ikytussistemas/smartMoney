import React, {useEffect} from 'react';
import {StyleSheet, Button, View} from 'react-native';

import {getRealm} from '../../services/Realm';
import { saveCategory} from '../../services/Categories';

import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

import Colors from '../../styles/colors';
import { Category } from '../../schemas/models/category';

const Main = () => {
  useEffect(() => {
    initDB();
  }, []);

  const initDB = async () => {
    const realm = await getRealm();
    const categoriesLength = realm.objects<Category[]>('Category').length;
   
    if (categoriesLength === 0) {
      console.log('initDB :: initing db...');
      saveCategory();
    } else {
      console.log('initDB :: categories already existing... Skypping.');
    }
  };
  const dropDB = async () => {
    const realm = await getRealm();
    console.log('dropDB :: dropping db...');
    realm.write(() => {
      realm.deleteAll();
    });
  };
  
  return (
    <View style={styles.container}>
      <BalancePanel />
      <EntrySummary />
      <EntryList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});

export default Main;
