import { createContext, useEffect, useMemo, useState } from "react";

export const StateContext = createContext()


 const StateContextProvider = ({children}) => {


  

  const [theme, setTheme] = useState(localStorage.getItem('theme')== 'dark'?'dark': 'light');



  useEffect(() => {
    localStorage.setItem('theme',  theme)
  }, [theme])

  const [currentCategory, setCurrentCategory] = useState('all')

 
 



  


    const categories = [
        {
            id: 1,
            name: 'food',
            image: 'https://i.pinimg.com/236x/01/a8/b2/01a8b20022d3ac8d1c0ad960e7b67466.jpg'
        },
        {
            id: 2,
            name: 'drink',
            image: 'https://i.pinimg.com/236x/01/a8/b2/01a8b20022d3ac8d1c0ad960e7b67466.jpg'
        },
        {
            id: 3,
            name: 'juice',
            image: 'https://i.pinimg.com/236x/01/a8/b2/01a8b20022d3ac8d1c0ad960e7b67466.jpg'
        },
        {
            id: 4,
            name: 'rice',
            image: 'https://i.pinimg.com/236x/01/a8/b2/01a8b20022d3ac8d1c0ad960e7b67466.jpg'
        },
        {
            id: 5,
            name: 'fruit',
            image: 'https://i.pinimg.com/236x/01/a8/b2/01a8b20022d3ac8d1c0ad960e7b67466.jpg'
        }
    ]

    const menus = [

        {
            id: 1, 
            name: 'burger',
            category: 'food',
            price: 15000,
            image: 'https://i.pinimg.com/236x/01/a8/b2/01a8b20022d3ac8d1c0ad960e7b67466.jpg'
        },
        {
            id: 2, 
            name: 'burger',
            category: 'food',
            price: 15000,
            image: 'https://i.pinimg.com/236x/01/a8/b2/01a8b20022d3ac8d1c0ad960e7b67466.jpg'
        },
        {
            id: 3, 
            name: 'burger',
            category: 'food',
            price: 15000,
            image: 'https://i.pinimg.com/236x/01/a8/b2/01a8b20022d3ac8d1c0ad960e7b67466.jpg'
        },
        {
            id: 4, 
            name: 'burger',
            category: 'fruit',
            price: 15000,
            image: 'https://i.pinimg.com/236x/01/a8/b2/01a8b20022d3ac8d1c0ad960e7b67466.jpg'
        },
        {
            id: 5, 
            name: 'burger',
            category: 'juice',
            price: 15000,
            image: 'https://i.pinimg.com/236x/01/a8/b2/01a8b20022d3ac8d1c0ad960e7b67466.jpg'
        }
    ]

    const data = { categories,menus,theme, setTheme,currentCategory, setCurrentCategory}
    return (
        <StateContext.Provider value={data}>
            {children}
        </StateContext.Provider>
    )
}

export default StateContextProvider