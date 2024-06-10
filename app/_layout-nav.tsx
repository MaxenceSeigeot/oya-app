import { DarkTheme, DefaultTheme, NavigationContainer, ThemeProvider } from '@react-navigation/native';
import { useContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Routes } from '@/constants/Routes';
import { LocationProvider } from '@/providers/locationProvider';
import { DrawerContext, DrawerProvider } from '@/providers/drawerProvider';
import { defaultHeaderStyle } from '@/components/screen-header/style';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import Home from './home';
import BookPage from './book';
import DefaultScreenHeader from '@/components/screen-header';
import { useNavigation } from 'expo-router';
import PaymentPage from './payment';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'home',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayoutNav() {
  const colorScheme = 'dark';
  const Drawer = createDrawerNavigator();
  const Stack = createNativeStackNavigator();


  function DrawerNavigator() {
    const navigation = useNavigation()
    const { drawer, selectedDrawer } = useContext(DrawerContext)
    return (
      <Drawer.Navigator
        screenOptions={() => ({...drawer?.props?.style})}
        drawerContent={() => selectedDrawer}
      >
        <Drawer.Screen name={Routes.HOME} component={Home} options={{ headerShown: false }}/>
        <Drawer.Screen name={Routes.BOOK} component={BookPage} options={{...defaultHeaderStyle, header:() => DefaultScreenHeader({title:Routes.BOOK, navigation:navigation}) }} />
      </Drawer.Navigator>
    )
  }

  function StackNavigator() {
    const navigation = useNavigation()
    return (
      <Stack.Navigator>
        <Stack.Screen name={Routes.HOME} component={DrawerNavigator} options={{ headerShown: false }}/>
        <Stack.Screen name={Routes.PAYMENT} component={PaymentPage} options={{...defaultHeaderStyle, header:() => DefaultScreenHeader({title:Routes.PAYMENT, navigation:navigation}) }}/> 
      </Stack.Navigator>
    );
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <LocationProvider>
        <DrawerProvider>
          <NavigationContainer independent={true}>
            <StackNavigator/>
          </NavigationContainer>
        </DrawerProvider>
      </LocationProvider>
    </ThemeProvider>
  );
}
