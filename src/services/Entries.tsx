import {Alert} from 'react-native';

import {getRealm} from './Realm';

export const saveEntry = async () => {
  const realm = await getRealm();
  let data = {};
  data = {
    id: 'ABCxd',
    amount: 12.4,
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
