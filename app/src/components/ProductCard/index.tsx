import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import IProduto from '../../interfaces/IProduto';
import { formatMoney } from '../../utils';

import styles from './styles';

interface IProductCardProps {
    produto: IProduto
}

const ProductCard: React.FC<IProductCardProps> = ({ produto }) => {
    const { navigate } = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigate('Details', { produto })} style={styles.container} key={produto.id}>
        <Image source={{ uri: produto.foto }} resizeMode="contain" style={styles.productPhoto} />
        <Text style={styles.productName}>{produto.nome}</Text>
        {/* <Text style={styles.productCategory}>{produto.categoria}</Text> */}
        <Text style={styles.productPrice}>{formatMoney(produto.preco)}</Text>
    </TouchableOpacity>
  );
}

export default ProductCard;