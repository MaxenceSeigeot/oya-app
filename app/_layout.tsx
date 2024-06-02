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
    poppins_black: require('../assets/fonts/Poppins/Poppins-Black.ttf'),
    poppins_black_italic: require('../assets/fonts/Poppins/Poppins-BlackItalic.ttf'),
    poppins_bold: require('../assets/fonts/Poppins/Poppins-Bold.ttf'),
    poppins_bold_italic: require('../assets/fonts/Poppins/Poppins-BoldItalic.ttf'),
    poppins_extra_bold: require('../assets/fonts/Poppins/Poppins-ExtraBold.ttf'),
    poppins_extra_bold_italic: require('../assets/fonts/Poppins/Poppins-ExtraBoldItalic.ttf'),
    poppins_extra_light: require('../assets/fonts/Poppins/Poppins-ExtraLight.ttf'),
    poppins_extra_light_italic: require('../assets/fonts/Poppins/Poppins-ExtraLightItalic.ttf'),
    poppins_italic: require('../assets/fonts/Poppins/Poppins-Italic.ttf'),
    poppins_light: require('../assets/fonts/Poppins/Poppins-Light.ttf'),
    poppins_light_italic: require('../assets/fonts/Poppins/Poppins-LightItalic.ttf'),
    poppins_medium: require('../assets/fonts/Poppins/Poppins-Medium.ttf'),
    poppins_medium_italic: require('../assets/fonts/Poppins/Poppins-MediumItalic.ttf'),
    poppins_regular: require('../assets/fonts/Poppins/Poppins-Regular.ttf'),
    poppins_semi_bold: require('../assets/fonts/Poppins/Poppins-SemiBold.ttf'),
    poppins_semi_bold_italic: require('../assets/fonts/Poppins/Poppins-SemiBoldItalic.ttf'),
    poppins_thin: require('../assets/fonts/Poppins/Poppins-Thin.ttf'),
    poppins_thin_italic: require('../assets/fonts/Poppins/Poppins-ThinItalic.ttf'),

    montserrat_black: require('../assets/fonts/Montserrat/Montserrat-Black.ttf'),
    montserrat_black_italic: require('../assets/fonts/Montserrat/Montserrat-BlackItalic.ttf'),
    montserrat_bold: require('../assets/fonts/Montserrat/Montserrat-Bold.ttf'),
    montserrat_bold_italic: require('../assets/fonts/Montserrat/Montserrat-BoldItalic.ttf'),
    montserrat_extra_bold: require('../assets/fonts/Montserrat/Montserrat-ExtraBold.ttf'),
    montserrat_extra_bold_italic: require('../assets/fonts/Montserrat/Montserrat-ExtraBoldItalic.ttf'),
    montserrat_extra_light: require('../assets/fonts/Montserrat/Montserrat-ExtraLight.ttf'),
    montserrat_extra_light_italic: require('../assets/fonts/Montserrat/Montserrat-ExtraLightItalic.ttf'),
    montserrat_italic: require('../assets/fonts/Montserrat/Montserrat-Italic.ttf'),
    montserrat_light: require('../assets/fonts/Montserrat/Montserrat-Light.ttf'),
    montserrat_light_italic: require('../assets/fonts/Montserrat/Montserrat-LightItalic.ttf'),
    montserrat_medium: require('../assets/fonts/Montserrat/Montserrat-Medium.ttf'),
    montserrat_medium_italic: require('../assets/fonts/Montserrat/Montserrat-MediumItalic.ttf'),
    montserrat_regular: require('../assets/fonts/Montserrat/Montserrat-Regular.ttf'),
    montserrat_semi_bold: require('../assets/fonts/Montserrat/Montserrat-SemiBold.ttf'),
    montserrat_semi_bold_italic: require('../assets/fonts/Montserrat/Montserrat-SemiBoldItalic.ttf'),
    montserrat_thin: require('../assets/fonts/Montserrat/Montserrat-Thin.ttf'),
    montserrat_thin_italic: require('../assets/fonts/Montserrat/Montserrat-ThinItalic.ttf'),

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
