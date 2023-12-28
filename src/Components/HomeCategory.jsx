import { useNavigate } from "react-router-dom"


const HomeMenu = ({category}) => {

    const nav= useNavigate()

    const categoryName = category?.name



  return (
    <div onClick={() => nav(`/menus/${categoryName}`)} className="border border-1 border-red-500 text-center cursor-pointer">
        
        <h5 className="ca capitalize">{category?.name}</h5>
        <h5 className="ca capitalize">{category?.id}</h5>
    </div>
  )
}

export default HomeMenu