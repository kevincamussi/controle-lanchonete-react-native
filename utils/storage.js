import AsyncStorage from '@react-native-async-storage/async-storage';

export const getProducts = async () => {
    const data = await AsyncStorage.getItem('products');
    return data ? JSON.parse(data) : [];
};

export const saveProducts = async (products) => {
    await AsyncStorage.setItem('products', JSON.stringify(products));
};
