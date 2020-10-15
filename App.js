/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const App = () => {
  const addEntry = () => {
    alert('Adicionar lançamento');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.itemText}>Saldo: R$ 2.102,45</Text>
      <Button onPress={addEntry} title="Adicionar"></Button>

      <Text style={styles.itemText}>Categorias</Text>
      <FlatList
        data={[
          {key: 'Alimentação: R$ 200'},
          {key: 'Combustível: R$ 12'},
          {key: 'Aluguel: R$ 120'},
          {key: 'Lazer: R$ 250'},
          {key: 'Outros: R$ 200'},
        ]}
        renderItem={({item}) => <Text>{item.key}</Text>}></FlatList>

      <Text style={styles.itemText}>Últimos Lançamentos</Text>
      <FlatList
        data={[
          {key: 'Padaria Asa Branca: R$ 10'},
          {key: 'Supermercado Isadora: R$ 190'},
          {key: 'Posto Ipiranga: R$ 190'},
        ]}
        renderItem={({item}) => <Text>{item.key}</Text>}></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  itemText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
});

export default App;
