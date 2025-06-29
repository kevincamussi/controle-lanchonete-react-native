import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { getProducts, saveProducts } from '../utils/storage';
import uuid from 'react-native-uuid';

export default function ProductFormScreen({ navigation }) {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');

    const save = async () => {
        if (!name || !quantity) {
            Alert.alert('Preencha todos os campos');
            return;
        }

        const products = await getProducts();
        products.push({ id: uuid.v4(), name, quantity: parseInt(quantity) });
        await saveProducts(products);
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <TextInput placeholder="Nome do produto" value={name} onChangeText={setName} style={styles.input} />
            <TextInput placeholder="Quantidade" value={quantity} onChangeText={setQuantity} keyboardType="numeric" style={styles.input} />
            <Button title="Salvar" onPress={save} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { padding: 20 },
    input: { borderWidth: 1, padding: 10, marginBottom: 10 },
});
