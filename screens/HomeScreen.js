import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { getProducts } from '../utils/storage';

export default function HomeScreen({ navigation }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const load = async () => {
            const data = await getProducts();
            setProducts(data);
        };
        const unsubscribe = navigation.addListener('focus', load);
        return unsubscribe;
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Button title="Adicionar Produto" onPress={() => navigation.navigate('Adicionar Produto')} />
            <Button title="Registrar Venda" onPress={() => navigation.navigate('Vender Produto')} />
            <Text style={styles.title}>Estoque Atual:</Text>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Text>{item.name} - {item.quantity} unidades</Text>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { padding: 20 },
    title: { fontSize: 20, marginVertical: 10 },
});
