import { useContext } from "react";
import { useParams } from "react-router-dom";
import { StateContext } from "../Context/Context";
import MenuItem from "../Components/MenuItem";
import NavBar from "../Components/NavBar";

const Menus = () => {
  const { name } = useParams();

  const { menus } = useContext(StateContext);

  const menu = menus.filter((menu) => menu.category == name);

  return (
    <div className="bg-white dark:bg-dark  min-h-screen w-screen  text-dark dark:text-white">
      <div className="mb-6">
        <h1 className="font-semibold text-xl">
          {" "}
          <span className="cap capitalize">{name}</span> Category
        </h1>
      </div>

      <div className="flex items-center justify-start gap-4 ">
        {menu?.length > 0 ? (
          menu?.map((menuItem) => (
            <MenuItem key={menuItem.id} menuItem={menuItem} />
          ))
        ) : (
          <h1 className="dark:text-white text-red-500">
            No Menu for this category
          </h1>
        )}
      </div>
    </div>
  );
};

export default Menus;
