import { useState, createContext } from 'react'

export const ExContext = createContext();

export const ExContextProvider = ({children}) => {
    const [msg, setMsg] = useState("Mensagem Iniciada!");

    const vlrCtx = {
        msg, setMsg
    }

    return (
        <ExContext.Provider value={vlrCtx}> {children} </ExContext.Provider>
    )
};
