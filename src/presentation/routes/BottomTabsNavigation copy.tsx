import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/tabs/Tab1Screen';
import { Tab2Screen } from '../screens/tabs/Tab2Screen';
import { Tab3Screen } from '../screens/tabs/Tab3Screen';
import { globalColors } from '../theme/theme';
import { Text } from 'react-native';
import { TopTabsNavigation } from './TopTabsNavigation';
import { StackNavigator } from './StackNavigator';
import { IonIcon } from '../components/shared/IonIcon';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: globalColors.primary,
                tabBarLabelStyle: {
                    marginBottom: 5,
                },
                headerStyle: {
                    elevation: 0,
                    shadowColor: 'transparent',
                    backgroundColor: globalColors.background
                },
                tabBarStyle: {
                    borderTopWidth: 0,
                    elevation: 0,
                },
            }}
        >
            <Tab.Screen
                name="Tab1"
                options={{
                    title: 'Tab1',
                    tabBarIcon: ({ color }) => (<IonIcon color={color} name='home-outline' />)
                }}
                component={Tab1Screen} />
            <Tab.Screen
                name="Tab2"
                options={{
                    title: 'Tab2',
                    tabBarIcon: ({ color }) => (<IonIcon color={color} name='calendar-number-outline' />)
                }}
                component={TopTabsNavigation} />
            <Tab.Screen
                name="Tab3"
                options={{
                    title: 'Tab3',
                    tabBarIcon: ({ color }) => (<IonIcon color={color} name='bookmarks-outline' />)
                }}
                component={StackNavigator} />
        </Tab.Navigator >
    );
}