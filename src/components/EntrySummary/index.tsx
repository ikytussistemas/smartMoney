import React from 'react';
import {useNavigation} from '@react-navigation/native';

import EntrySummaryChart from './EntrySummaryChart';
import EntrySummaryList from './EntrySummaryList';
import Container from '../core/Container';
import { getAllCategories } from '../../services/Categories';

export default function EntrySummary() {
  const navigation = useNavigation();
  
  const entriesGrouped = [
    {key: '1', description: 'Alimentação', amount: 200},
    {key: '2', description: 'Combustível', amount: 350},
    {key: '3', description: 'Aluguel', amount: 120},
    {key: '4', description: 'Lazer', amount: 250},
    {key: '5', description: 'Outros', amount: 200},
  ]
  
  return (
    <Container 
      title="Categorias"
      actionLabelText="Últimos 100 dias"
      actionButtonText="Ver mais"
      onPressActionButton={()=>navigation.navigate('Report')}
      >
      <EntrySummaryChart/>
      <EntrySummaryList entriesGrouped={entriesGrouped}/>
    </Container>
  )
}
