import { useEffect, useState } from "react"

const UseMenu = () => {
    const [menu, setMenu] = useState([])
    const [loading, setLoading] =  useState(true)
    useEffect(() => {
        fetch('menu.json')
            .then(response => response.json())
            .then(data => {
                setMenu(data)
                setLoading(false)
            })
    }, [])
    return [menu, loading]
}

export default UseMenu