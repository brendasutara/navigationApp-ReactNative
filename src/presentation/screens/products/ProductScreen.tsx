import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { globalStyles } from '../../theme/theme'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { RootStackParams } from '../../routes/StackNavigator'

export const ProductScreen = () => {

    const params = useRoute<RouteProp<RootStackParams, 'Product'>>().params;
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            title: params.name
        })
    }, [])


    return (
        <View style={globalStyles.container}>
            <Text style={{ marginVertical: 10, fontSize: 20 }}>
                {params.id} - {params.name}
            </Text>
        </View>
    )
}
