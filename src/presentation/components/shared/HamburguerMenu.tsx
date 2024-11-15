import { DrawerActions, type NavigationProp, useNavigation } from '@react-navigation/native'
import { type RootStackParams } from '../../routes/StackNavigator';
import { Pressable, Text } from 'react-native';
import { useEffect } from 'react';
import { IonIcon } from './IonIcon';
import { globalColors } from '../../theme/theme';

export const HamburguerMenu = () => {

    const navigation = useNavigation<NavigationProp<RootStackParams>>();

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Pressable style={{ marginHorizontal: 10 }} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)} >
                    <IonIcon name='menu-outline' color={globalColors.primary} />
                </Pressable>
            )
        })
    }, [])

    return (<></>)

}
