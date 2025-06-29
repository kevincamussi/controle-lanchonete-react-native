import React, { useEffect, useState } from 'react';
import { View, Button, FlatList, Text, StyleSheet } from 'react-native';
import { getProducts, saveProducts } from '../utils/storage';

export default function SalesScreen({ navigation }) {
    const [products, setProducts] = useState([]);

    const load = async () => {
        const data = await getProducts();
        setProducts(data);
    };

    useEffect(() => {
        load();
    }, []);

    const sell = async (id) => {
        const newProducts = products.map((p) =>
            p.id === id && p.quantity > 0 ? { ...p, quantity: p.quantity - 1 } : p
        );
        await saveProducts(newProducts);
        setProducts(newProducts);
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text>{item.name} - {item.quantity} unidades</Text>
                        <Button title="Vender 1" onPress={() => sell(item.id)} disabled={item.quantity === 0} />
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { padding: 20 },
    item: { marginBottom: 10 },
});
