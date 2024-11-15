import { globalStyles } from '../../theme/theme'
import { DrawerActions, type NavigationProp, useNavigation } from '@react-navigation/native'
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { type RootStackParams } from '../../routes/StackNavigator';
import { Pressable, View, Text } from 'react-native';
import { useEffect } from 'react';
import { HamburguerMenu } from '../../components/shared/HamburguerMenu';

export const HomeScreen = () => {

    const navigation = useNavigation<NavigationProp<RootStackParams>>();


    return (
        <>
            <HamburguerMenu />
            <View style={globalStyles.container}>
                <PrimaryButton
                    onPress={() => navigation.navigate('Products')}
                    label='Productos' />

                <PrimaryButton
                    onPress={() => navigation.navigate('Settings')}
                    label='Settings' />
            </View>
        </>

    )
}
