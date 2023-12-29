import { useContext } from 'react'
import NavBar from '../Components/NavBar'
import { StateContext } from '../Context/Context'
import MenuItem from '../Components/MenuItem'

const AllMenus = () => {

 

  

    const {menus} = useContext(StateContext)
  return (
    <div className='container mx-auto'>
        <NavBar/>

        <div className="flex items-center justify-between gap-4 flex-wrap">
            {
                menus?.map((menuItem) => (
                    <MenuItem key={menuItem.id} menuItem={menuItem} />
                  ))
            }
        </div>

    </div>
  )
}

export default AllMenus