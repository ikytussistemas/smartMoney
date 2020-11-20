import React, { Component, useState, useEffect } from 'react';
import {
  View, 
  TouchableOpacity, 
  Text, 
  Modal, 
  FlatList,
  StyleSheet} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { getAllCategories, getCreditCategories, getDebitCategories} from '../../../services/Categories';
import Colors from '../../../styles/colors';

export interface Props {
  category?: any,
  debit?: any,
  onChangeCategory?:any,
}

const NewEntryCategoryPicker: React.FC<Props> = ({
  children,
  category,
  debit,
  onChangeCategory,
}) => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [debitCategories, setDebitCategories] = useState([]);
  const [creditCategories, setCreditCategories] = useState([]);

  useEffect(()=>{
    async function loadCategories() {
      setCreditCategories(await getDebitCategories());
      setDebitCategories(await getCreditCategories());
    }

    loadCategories();
  }, []);

  const onCategoryPress = item => {
    onChangeCategory(item)
    onClosePress();
  }

  const onClosePress = () => {
    setModalVisible(false);
  }

  return (
    <View>
      <TouchableOpacity 
        style={styles.pickerButton}
        onPress={ () => {setModalVisible(true)} }>
        <Text style={styles.pickerButtonText}>{category.name}</Text>
      </TouchableOpacity>
      <Modal 
        animationType="slide" 
        transparent={false} 
        visible={modalVisible}>
          <View style={styles.modal}>
            <FlatList data={debit ? debitCategories : creditCategories}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <TouchableOpacity 
                  style={[styles.modalItem, {backgroundColor: item.color}]}
                  onPress={()=> onCategoryPress(item)}
                  >  
                  <Text style={[styles.modalItemText]}>{item.name}</Text>
                </TouchableOpacity>
              )} 
             />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={ onClosePress }
            >
              <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: Colors.background
  },
  pickerButton: {
    backgroundColor: Colors.asphalt,
    borderRadius: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 20
  },
  pickerButtonText: {
    fontSize: 28,
    color: Colors.white,
    textAlign: 'center'
  },
  modalItem: {
    backgroundColor: Colors.asphalt,
    borderRadius: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 20
  },
  modalItemText: {
    fontSize: 22,
    color: Colors.white,
    textAlign: 'center'
  },
  closeButton: {
    alignSelf: 'center',
    backgroundColor: Colors.background,
    borderColor: Colors.green,
    borderWidth: 1,
    borderRadius: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingVertical: 3,
    paddingHorizontal: 5,
  },
  closeButtonText: {
    fontSize: 14,
    color: Colors.green,
    textAlign: 'center',
  }
});

export default NewEntryCategoryPicker;
