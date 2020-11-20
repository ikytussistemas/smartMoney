import {Alert} from 'react-native';

import {getRealm} from './Realm';
import {getUUID} from './uuid';

export const getDefaultCategories = () => {
  return [
    {
      id: getUUID(),
      name: 'Alimentação',
      color: '#1abc9c',
      isDebit: true,
      isInit: false,
      order: 0,
    },
    {
      id: getUUID(),
      name: 'Restaurantes e Bares',
      color: '#2ecc71',
      isDebit: true,
      isInit: false,
      order: 1,
    },
    {
      id: getUUID(),
      name: 'Casa',
      color: '#3498db',
      isDebit: true,
      isInit: false,
      order: 2,
    },
    {
      id: getUUID(),
      name: 'Compras',
      color: '#9b59b6',
      isDebit: true,
      isInit: false,
      order: 3,
    },
    {
      id: getUUID(),
      name: 'Cuidados Pessoais',
      color: '#f1c40f',
      isDebit: true,
      isInit: false,
      order: 4,
    },
    {
      id: getUUID(),
      name: 'Dívidas e Empréstimos',
      color: '#f39c12',
      isDebit: true,
      isInit: false,
      order: 5,
    },
    {
      id: getUUID(),
      name: 'Educação',
      color: '#e67e22',
      isDebit: true,
      isInit: false,
      order: 6,
    },
    {
      id: getUUID(),
      name: 'Família e Filhos',
      color: '#d35400',
      isDebit: true,
      isInit: false,
      order: 7,
    },
    {
      id: getUUID(),
      name: 'Impostos e Taxas',
      color: '#e74c3c',
      isDebit: true,
      isInit: false,
      order: 8,
    },
    {
      id: getUUID(),
      name: 'Investimentos',
      color: '#c0392b',
      isDebit: true,
      isInit: false,
      order: 9,
    },
    {
      id: getUUID(),
      name: 'Lazer',
      color: '#ecf0f1',
      isDebit: true,
      isInit: false,
      order: 10,
    },
    {
      id: getUUID(),
      name: 'Mercado',
      color: '#bdc3c7',
      isDebit: true,
      isInit: false,
      order: 11,
    },
    {
      id: getUUID(),
      name: 'Outras Despesas',
      color: '#95a5a6',
      isDebit: true,
      isInit: false,
      order: 12,
    },

    {
      id: getUUID(),
      name: 'Empréstimos',
      color: '#273c75',
      isCredit: true,
      isInit: false,
      order: 1,
    },
    {
      id: getUUID(),
      name: 'Investimentos',
      color: '#4cd137',
      isCredit: true,
      isInit: false,
      order: 2,
    },
    {
      id: getUUID(),
      name: 'Salário',
      color: '#487eb0',
      isCredit: true,
      isInit: false,
      order: 3,
    },
    {
      id: getUUID(),
      name: 'Outras Receitas',
      color: '#8c7ae6',
      isCredit: true,
      isInit: false,
      order: 4,
    },
    {
      id: getUUID(),
      name: 'Saldo Inicial',
      color: '#27ae60',
      isInit: true,
      order: 5,
    },
  ];
};

export const getAllCategories = async () => {
  const realm = await getRealm();
  return realm.objects<[]>('Category').sorted('order').map(item => item);
};

export const saveCategory = async () => {
  const realm = await getRealm();
    try {
    realm.write(() => {
      getDefaultCategories().forEach((category: {}) => {
        console.log(`Objeto enviado ${JSON.stringify(category)}`)
        realm.create('Category', category, Realm.UpdateMode.Modified);
      })
    });
  } catch (error) {
    console.error('saveEntry :: error on save object: ', JSON.stringify(error));
  }
};

export const getDebitCategories = async () => {
  const realm = await getRealm();
  return realm
    .objects<[]>('Category')
    .filtered('isDebit = true AND isInit = false')
    .sorted('order')
    .map(item => item);
};

export const getCreditCategories = async () => {
  const realm = await getRealm();
  return realm
    .objects<[]>('Category')
    .filtered('isCredit = true AND isInit = false')
    .sorted('order')
    .map(item => item);
};

export const getInitCategories = async () => {
  const realm = await getRealm();
  return realm
    .objects('Category')
    .filtered('isInit = true')
    .sorted('order');
};