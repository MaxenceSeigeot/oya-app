import { FontAwesome } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";
import { useEffect } from "react";
import RootLayoutNav from "./_layout-nav";

export default function RootLayout() {
    const fontPath = "@/assets/fonts/"
    const [loaded, error] = useFonts({
      poppins_black: require(`${fontPath}Poppins/Poppins-Black.ttf`),
      poppins_black_italic: require(`${fontPath}Poppins/Poppins-BlackItalic.ttf`),
      poppins_bold: require(`${fontPath}Poppins/Poppins-Bold.ttf`),
      poppins_bold_italic: require(`${fontPath}Poppins/Poppins-BoldItalic.ttf`),
      poppins_extra_bold: require(`${fontPath}Poppins/Poppins-ExtraBold.ttf`),
      poppins_extra_bold_italic: require(`${fontPath}Poppins/Poppins-ExtraBoldItalic.ttf`),
      poppins_extra_light: require(`${fontPath}Poppins/Poppins-ExtraLight.ttf`),
      poppins_extra_light_italic: require(`${fontPath}Poppins/Poppins-ExtraLightItalic.ttf`),
      poppins_italic: require(`${fontPath}Poppins/Poppins-Italic.ttf`),
      poppins_light: require(`${fontPath}Poppins/Poppins-Light.ttf`),
      poppins_light_italic: require(`${fontPath}Poppins/Poppins-LightItalic.ttf`),
      poppins_medium: require(`${fontPath}Poppins/Poppins-Medium.ttf`),
      poppins_medium_italic: require(`${fontPath}Poppins/Poppins-MediumItalic.ttf`),
      poppins_regular: require(`${fontPath}Poppins/Poppins-Regular.ttf`),
      poppins_semi_bold: require(`${fontPath}Poppins/Poppins-SemiBold.ttf`),
      poppins_semi_bold_italic: require(`${fontPath}Poppins/Poppins-SemiBoldItalic.ttf`),
      poppins_thin: require(`${fontPath}Poppins/Poppins-Thin.ttf`),
      poppins_thin_italic: require(`${fontPath}Poppins/Poppins-ThinItalic.ttf`),
  
      dela: require(`${fontPath}DelaGothicOne/DelaGothicOne.ttf`),
  
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
  