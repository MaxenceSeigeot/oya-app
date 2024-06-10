import { Text, View } from 'react-native';
import React, { useContext, useEffect } from 'react';
import { DrawerContext } from '@/providers/drawerProvider';
import { Drawer } from '@/constants/Routes';

interface PaymentPageProps {
  route: any
}

export default function PaymentPage({route}:PaymentPageProps) {
  const { setDrawer } = useContext(DrawerContext)

  useEffect(() => {
    setDrawer({drawer:Drawer.NONE, props:{style:{}}})
  },[])

    return (
      <View>
        <Text>Paiement</Text>
      </View>
    );

}
