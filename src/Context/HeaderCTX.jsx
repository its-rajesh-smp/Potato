import { createContext, useState } from "react";

const HeaderContext = createContext({})



function HeaderContextProvider(props) {
    const [headerBack, setHeaderBack] = useState(false)




    return (<HeaderContext.Provider value={{}}>
        {props.children}
    </HeaderContext.Provider>)
}

export default HeaderContextProvider;