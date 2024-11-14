import React from 'react'
import { Text, View } from 'react-native'
import { globalStyles } from '../../theme/theme';
import { FlatList } from 'react-native-gesture-handler';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { type NavigationProp, useNavigation } from '@react-navigation/native';
import { type RootStackParams } from '../../routes/StackNavigator';

const products = [
    { id: 1, name: 'Peperoni 🌶' },
    { id: 2, name: 'Manzana 🍎' },
    { id: 3, name: 'Guacamole 🥑' },
    { id: 4, name: 'Pera 🍐' },
    { id: 5, name: 'Mandarina 🍊' },
    { id: 6, name: 'Banana 🍌' },
];


export const ProductsScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParams>>();

    return (
        <View style={globalStyles.container}>
            <Text style={{ marginBottom: 10, fontSize: 30 }}>Productos</Text>

            <FlatList
                data={products}
                renderItem={({ item }) => (
                    <PrimaryButton
                        onPress={() => navigation.navigate('Product', { id: item.id, name: item.name })}
                        label={item.name} />
                )}
            />

            <Text style={{ marginBottom: 10, fontSize: 30 }}>Ajustes</Text>
            <PrimaryButton
                onPress={() => navigation.navigate('Settings')}
                label='Ajustes' />
        </View>
    )
}
