import {Alert} from 'react-native';

import {getRealm} from './Realm';

export const saveEntry = async (value) => {
  const realm = await getRealm();
  let data = {};
  const {amount} = value;

  data = {
    id: 'ABCxd2',
    amount: amount,
    entryAt: new Date(),
    isInit: false,
  };

  try {
    realm.write(() => {
      realm.create('Entry', data, Realm.UpdateMode.Modified);
    });

    Alert.alert('saveEntry :: data: ', JSON.stringify(data));
  } catch (error) {
    console.error('saveEntry :: error on save object: ', JSON.stringify(data));
    Alert.alert('Erro ao salvar os dados de lançamento.');
  }

  return data;
};

export const getEntries = async () => {
  const realm  = await getRealm();
  const entries = realm.objects('Entry').map(item => item);
  
  return entries;
}