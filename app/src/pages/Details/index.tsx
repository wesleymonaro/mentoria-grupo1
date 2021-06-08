import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import IProduto from '../../interfaces/IProduto';
import IRoute from '../../interfaces/IRoute';
import { formatMoney } from '../../utils';
import styles from './styles';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../../store/actions';

interface IDetailsProps {
  route: IRoute;
  produtos: any;
  addProductsToRedux: any;
}

const Details: React.FC<IDetailsProps> = ({ route, produtos, addProductsToRedux }) => {
  const {navigate} = useNavigation();
  const [produto, setProduto] = useState<IProduto>();
  console.log('produtos', produtos)

  const { params } = route;
  console.log("params", params);

  const handleAddCard = async () => {
    // adiciona ao carrinho
    addProductsToRedux([
      ...produtos,
      produto
    ]);
    navigate('Cart')
  }

  useEffect(() => {
    if (params.produto) {
      setProduto(params.produto);
    }
  }, [])

  return (
    <View style={styles.container}>

      <Image style={styles.foto} resizeMode="contain" source={{ uri: produto?.foto }} />

     <Text style={styles.nome}>{produto?.nome}</Text>
     <Text style={styles.descricao}>{produto?.descricao}</Text>
     <Text style={styles.preco}>{formatMoney(produto?.preco || 0)}</Text>
     <TouchableOpacity style={styles.button} onPress={() => handleAddCard()}>
         <Text style={styles.textButton}>ADICIONAR AO CARRINHO</Text>
     </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state: any): any => ({
  produtos: state.produtosReducer.produtos,
});

const mapDispatchToProps = (dispatch: any): any => bindActionCreators({
  addProductsToRedux: ActionCreators.addProductsToRedux,
  // ...ActionCreators
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Details);
