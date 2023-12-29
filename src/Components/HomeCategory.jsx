import { useNavigate } from "react-router-dom"


const HomeCategory = ({category}) => {

    const nav= useNavigate()

    const categoryName = category?.name



  return (
    <div onClick={() => nav(`/menus/${categoryName}`)} className="rounded-md text-center cursor-pointer w-60  border border-1 border-gray-700">
        

        <div className="w-full h-60 object-cover">
          <img src={category?.image} className="relative w-full h-full object-cover rounded-md" alt="" />
        </div>
        <h5 className="text-dark dark:text-white capitalize">{category?.name}</h5>
    </div>
  )
}

export default HomeCategory