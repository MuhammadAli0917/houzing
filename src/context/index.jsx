import {createContext} from "react";
import {PropertiesContext} from "./properties";

const Root = createContext()

export const RootContext = ({children}) => {
    return <Root.Provider>
        <PropertiesContext>
            {children}
        </PropertiesContext>
    </Root.Provider>
}