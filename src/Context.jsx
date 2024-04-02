import { createContext, useEffect, useState } from 'react';


//First create context
export const context = createContext()

// provide context
export const ContextProvide = ({children}) => {

    return(
        <context.Provider >
                {children}
        </context.Provider>
    )
}