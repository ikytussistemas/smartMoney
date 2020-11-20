import {Alert} from 'react-native';

import {getRealm} from './Realm';
import {getUUID} from './uuid';

export const saveEntry = async (value, entry) => {
  const realm = await getRealm();
  let data = {};

  data = {
    id: value.id || entry.id || getUUID(),
    amount: value.amount || entry.amount,
    entryAt: value.entryAt || entry.entryAt,
    description: value.category.name,
    isInit: false,
    category: value.category || entry.category,
  };

  try {
    realm.write(() => {
      realm.create('Entry', data, Realm.UpdateMode.Modified);
    });
  } catch (error) {
    console.error('saveEntry :: error on save object: ', JSON.stringify(data));
    Alert.alert(
      'Erro ao salvar os dados de lançamento.',
      JSON.stringify(error),
    );
  }
  return data;
};

export const getEntries = async () => {
  const realm = await getRealm();
  const entries = realm.objects('Entry').sorted('entryAt', true).map((item) => item);

  return entries;
};

export const deleteEntry = async (entry) => {
  const realm = await getRealm();
  try {
    realm.write(() => {
      realm.delete(entry);
    });
  } catch (error) {
    Alert.alert('Erro ao excluir lançamento.', JSON.stringify(error));
  }
};
