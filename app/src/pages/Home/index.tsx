import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Alert,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  ScrollView
} from 'react-native';
import ProductCard from '../../components/ProductCard';
import IProduto from '../../interfaces/IProduto';
import api from '../../services/api';

import styles from './styles';

const Home: React.FC = () => {
    const { navigate } = useNavigation();
    const [loading, setLoading] = useState<boolean>(true);
    const [produtos, setProdutos] = useState<IProduto[]>([]);

    const [tvs, setTvs] = useState<IProduto[]>([]);
    const [smartphones, setSmartphones] = useState<IProduto[]>([]);
    const [games, setGames] = useState<IProduto[]>([]);


    const loadProdutos = async () => {
        try {
            const {data: response} = await api.get<IProduto[]>('/produtos');
            console.log('response', response);
            setProdutos(response);

            setTvs(produtos.filter(p => p.categoria === 'TVs'));
            setSmartphones(produtos.filter(p => p.categoria === 'Smartphones'));
            setGames(produtos.filter(p => p.categoria === 'Games'));
            

            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }
    
    useEffect(() => {
        loadProdutos()
    }, [])

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        
            {
                loading && <ActivityIndicator size="large" color="red" />
            }


            {/* {
                produtos.map(p => (
                    <View>
                        <Image source={{ uri: p.foto }} resizeMode="contain" style={styles.productPhoto} />
                        <Text>{p.nome}</Text>
                        <Text>{p.categoria}</Text>
                        <Text>{p.preco}</Text>
                    </View>
                ))
            } */}

            {/* <Image source={{uri: "https://a-static.mlcdn.com.br/1500x1500/smart-tv-4k-led-60-philco-ptv60f90dswn-wi-fi-3-hdmi-2-usb/magazineluiza/193417800/d1cd10e8e5d5f00c96ce1f3c079b39e6.jpg"}} style={{width: 100, height: 100}} /> */}

            <Text style={styles.title}>TVs</Text>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal> 
                {tvs.map(p => <ProductCard produto={p} />)}
            </ScrollView>

            <Text style={styles.title}>Smartphones</Text>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal> 
                {smartphones.map(p => <ProductCard produto={p} />)}
            </ScrollView>

            <Text style={styles.title}>Games</Text>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal> 
                {games.map(p => <ProductCard produto={p} />)}
            </ScrollView>
        

            {/* <TouchableOpacity onPress={() => navigate('Details')}>
                <Text>DETALHES</Text>
            </TouchableOpacity> */}
        </ScrollView>
  );
};

export default Home;
