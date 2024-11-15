import { NavigationContainer } from "@react-navigation/native"
import { SideMenuNavigator } from "./presentation/routes/SideMenuNavigator"


export const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <SideMenuNavigator />
      {/* <BottomTabsNavigation /> */}
    </NavigationContainer>
  )
}
