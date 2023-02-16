import { useState } from 'react'

export default function useToggle ( initialState ) {
    const [toggleValue, setToggleValue] = useState(initialState);

    const toggle = () => { setToggleValue(!toggleValue)};
    return [toggleValue, toggle]
}