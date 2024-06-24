import { Text, View } from "react-native";
import { DrawerContext } from "@/providers/drawerProvider";
import { Drawer } from "@/constants/Routes";
import React, { useContext, useEffect } from "react";

interface PaymentPageProps {}

export default function PaymentPage({}: PaymentPageProps) {
  const { setDrawer } = useContext(DrawerContext);

  useEffect(() => {
    setDrawer({ drawer: Drawer.NONE, props: { style: {} } });
  }, []);

  return (
    <View>
      <Text>Paiement</Text>
    </View>
  );
}
