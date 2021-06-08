import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import IProduto from '../../interfaces/IProduto';
import { ActionCreators } from '../../store/actions';

interface ICartProps {
  produtos: IProduto[]
}

const Cart: React.FC<ICartProps> = ({ produtos }) => {
  return (
    <View>
     {
       produtos.map((p) => (
         <Text key={Math.random().toString()}>{p.nome}</Text>
       ))
     }
    </View>
  );
};

const mapStateToProps = (state: any): any => ({
  produtos: state.produtosReducer.produtos,
});

const mapDispatchToProps = (dispatch: any): any => bindActionCreators({
  //addProductsToRedux: ActionCreators.addProductsToRedux,
  // ...ActionCreators
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Cart);
