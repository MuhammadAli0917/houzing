import {PropertiesContext} from "./properties";


export const RootContext = ({children}) => {
    return <>
        <PropertiesContext>
            {children}
        </PropertiesContext>
    </>
}