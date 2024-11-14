import { Text, View } from 'react-native'
import { globalStyles } from '../../theme/theme'
import { PrimaryButton } from '../../components/shared/PrimaryButton'
import { StackActions, useNavigation } from '@react-navigation/native';

export const SettingsScreen = () => {

    const navigation = useNavigation();

    return (
        <View style={globalStyles.container}>
            <Text style={{ marginBottom: 10, fontSize: 30 }}>Productos</Text>
            <PrimaryButton
                onPress={() => navigation.goBack()}
                label='Regresar' />
            <PrimaryButton
                onPress={() => navigation.dispatch(StackActions.popToTop())}
                label='Volver al home' />
        </View>

    )
}
