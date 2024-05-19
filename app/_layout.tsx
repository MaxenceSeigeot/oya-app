import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import Home from './home';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from "@/components/custom-drawer"
import { Routes } from '@/constants/Routes';
import { LocationProvider } from '@/providers/locationProvider';

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

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Dela: require('../assets/fonts/DelaGothicOne/DelaGothicOne.ttf'),
    Poppins: require('../assets/fonts/Poppins/Poppins-SemiBold.ttf'),

    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = 'dark';
  const Drawer = createDrawerNavigator();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <LocationProvider>
        <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
          <Drawer.Screen name={Routes.HOME} component={Home} options={{ headerShown: false }}/>
        </Drawer.Navigator>
      </LocationProvider>
    </ThemeProvider>
  );
}
