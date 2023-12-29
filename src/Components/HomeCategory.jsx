import { useNavigate } from "react-router-dom"


const HomeMenu = ({category}) => {

    const nav= useNavigate()

    const categoryName = category?.name



  return (
    <div onClick={() => nav(`/menus/${categoryName}`)} className="rounded-md text-center cursor-pointer  border border-1 border-gray-700">
        

        <div className="w-full h-60 object-cover">
          <img src={category?.image} className="relative w-full h-full object-cover rounded-md" alt="" />
        </div>
        <h5 className="ca capitalize">{category?.name}</h5>
    </div>
  )
}

export default HomeMenu