import React, { ReactNode, createContext, useEffect, useState } from 'react';
import BookDrawer from '@/components/book-drawer';
import CustomDrawer from '@/components/custom-drawer';
import { Drawer as EDrawer } from '@/constants/Routes';

interface Drawer {
    drawer: string | undefined
    props: any | undefined
}

interface DrawerContextValue {
    drawer: Drawer,
    setDrawer: (React.Dispatch<React.SetStateAction<Drawer>>);
    getDrawer: (props: any) => ReactNode ;
}

export const DrawerContext = createContext<DrawerContextValue>({} as DrawerContextValue);

interface DrawerProviderProps {
  children: ReactNode;
}

export const DrawerProvider: React.FC<DrawerProviderProps> = ({ children }) => {
    const [drawer, setDrawer] = useState<Drawer>({drawer:undefined, props:undefined})
    const getDrawer = (props: any) => {
        switch(drawer?.drawer){
          case EDrawer.BOOK:
            return <BookDrawer {...props} />
          case EDrawer.HOME_MENU:
            return <CustomDrawer {...props} />
          default:
            return <CustomDrawer {...props} />
        }
      }

  return (
    <DrawerContext.Provider value={{drawer, setDrawer, getDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
};
