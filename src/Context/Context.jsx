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
            parentCategory: 'food',
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
            parentCategory: 'drink',
            image: 'https://i.pinimg.com/236x/01/a8/b2/01a8b20022d3ac8d1c0ad960e7b67466.jpg'
        },
        {
            id: 4,
            name: 'rice',
            parentCategory: 'food',
            image: 'https://i.pinimg.com/236x/01/a8/b2/01a8b20022d3ac8d1c0ad960e7b67466.jpg'
        },
        {
            id: 5,
            name: 'fruit',
            parentCategory: 'food',
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


    const events = [
        {
            id: 1,
            name: 'New Year Events',
            fromDate: '11.1.2004',
            toDate: '30.1.2004',
            about: 'This is testing evnets by Wai Min Hein',
            location: 'Maggin str, Kyauk Myaung, Tamwe Township',
            numberOfDay : 19,
            image: 'https://i.pinimg.com/236x/87/82/bb/8782bbe2490d9504bec43ed5bffd7ed9.jpg'

        },
        {
            id: 2,
            name: 'National Independence  Day Events',
            fromDate: '4.1.2004',
            toDate: '30.1.2004',
            about: 'This is testing evnets by Wai Min Hein',
            location: 'Maggin str, Kyauk Myaung, Tamwe Township',
            numberOfDay : 19,
            image: 'https://i.pinimg.com/564x/7f/fb/90/7ffb90aa5f82ef4e87e0747d098cbe25.jpg'

        }
    ]

    const data = { categories,menus,theme, setTheme,currentCategory, setCurrentCategory, events}
    return (
        <StateContext.Provider value={data}>
            {children}
        </StateContext.Provider>
    )
}

export default StateContextProvider