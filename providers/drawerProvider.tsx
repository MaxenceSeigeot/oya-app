import React, { ReactElement, ReactNode, createContext, useEffect, useState } from 'react';
import CustomDrawer from '@/components/drawers/custom-drawer';
import { Drawer as EDrawer } from '@/constants/Routes';
import CalendarDrawer from '@/components/drawers/calendar-drawer';
import NoDrawer from '@/components/drawers/noDrawer';

interface Drawer {
    drawer: EDrawer | undefined
    props: any | undefined
}

interface DrawerContextValue {
    drawer: Drawer,
    setDrawer: React.Dispatch<React.SetStateAction<Drawer>>,
    selectedDrawer: ReactElement,
    getDrawer: (props: any) => ReactNode ;
}

export const DrawerContext = createContext<DrawerContextValue>({} as DrawerContextValue);

interface DrawerProviderProps {
  children: ReactNode;
}

export const DrawerProvider: React.FC<DrawerProviderProps> = ({ children }) => {
    const [drawer, setDrawer] = useState<Drawer>({drawer:undefined, props:undefined})
    const [selectedDrawer, setSelectedDrawer] = useState<ReactElement>(<CustomDrawer />)

    useEffect(()=>{
      setSelectedDrawer(getDrawer())
    },[drawer])

    const getDrawer = () => {
        switch(drawer?.drawer){
          case EDrawer.CALENDAR:
            return <CalendarDrawer {...drawer.props} />
          case EDrawer.HOME_MENU:
            return <CustomDrawer {...drawer.props} />
          case EDrawer.NONE:
            return <NoDrawer {...drawer.props}/>
          default:
            return <CustomDrawer {...drawer.props} />
        }
    }

    return (
        <DrawerContext.Provider value={{drawer, setDrawer, getDrawer, selectedDrawer }}>
            {children}
        </DrawerContext.Provider>
    );
};
