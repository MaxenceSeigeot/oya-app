import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  ThemeProvider,
} from "@react-navigation/native";
import { useContext } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Routes } from "@/constants/Routes";
import { LocationProvider } from "@/providers/locationProvider";
import { DrawerContext, DrawerProvider } from "@/providers/drawerProvider";
import { defaultHeaderStyle } from "@/components/screen-header/style";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "expo-router";
import { BookProvider } from "@/providers/bookProvider";
import * as SplashScreen from "expo-splash-screen";
import Home from "./home";
import BookPage from "./book";
import DefaultScreenHeader from "@/components/screen-header";
import PaymentPage from "./payment";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "home",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayoutNav() {
  const colorScheme = "dark";
  const Drawer = createDrawerNavigator();
  const Stack = createNativeStackNavigator();

  function StackNavigator() {
    const { drawer, selectedDrawer } = useContext(DrawerContext);
    const navigation = useNavigation();
    return (
      <Drawer.Navigator
        screenOptions={() => ({ ...drawer?.props?.drawerStyle })}
        drawerContent={() => selectedDrawer}
      >
        <Drawer.Screen name={Routes.HOME} component={Home} options={{ headerShown: false }} />
        <Drawer.Screen
          name={Routes.BOOK}
          component={BookPage}
          options={{
            ...defaultHeaderStyle,
            header: () => DefaultScreenHeader({ title: Routes.BOOK, navigation: navigation }),
          }}
        />
        <Stack.Screen
          name={Routes.PAYMENT}
          component={PaymentPage}
          options={{
            ...defaultHeaderStyle,
            header: () => DefaultScreenHeader({ title: Routes.PAYMENT, navigation: navigation }),
          }}
        />
      </Drawer.Navigator>
    );
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <LocationProvider>
        <BookProvider>
          <DrawerProvider>
            <NavigationContainer independent={true}>
              <StackNavigator />
            </NavigationContainer>
          </DrawerProvider>
        </BookProvider>
      </LocationProvider>
    </ThemeProvider>
  );
}
