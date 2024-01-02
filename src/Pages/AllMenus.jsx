import { useContext, useState } from "react";
import { StateContext } from "../Context/Context";
import MenuItem from "../Components/MenuItem";

const AllMenus = () => {
  const { menus } = useContext(StateContext);
  const [currentCategory, setCurrentCategory] = useState("all");

  function filterParentByUniqueKey(arr, key) {
    const seenKeys = {};
    return arr.filter((obj) => {
      const keyValue = obj[key];
      if (!seenKeys[keyValue]) {
        seenKeys[keyValue] = true;
        return true;
      }
      return false;
    });
  }
  const amountOfCat = filterParentByUniqueKey(menus, "category");

  const filtredCategory = menus.filter(
    (category) =>
      (category.category ? category.category : category.name) == currentCategory
  );

  return (
    <div className="container mx-auto mt-5">
      <div className="flex items-center justify-start gap-4">
        <h1 className="text-white text-lg">All Menus </h1>

        <div className="">
          <label className=" text-dark dark:text-white pr-3" htmlFor="category">
            Choose category :
          </label>
          <select
            onChange={(e) => setCurrentCategory(e.target.value)}
            className="w-40 h-6 relative"
            name="category"
            id="category"
          >
            <option value={"all"}>All</option>

            {amountOfCat?.map((category) => (
              <option
                className="capitalize"
                value={category?.category}
                key={category?.id}
              >
                {category?.category.charAt(0).toUpperCase() +
                  category?.category.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 flex-wrap mt-4">
        {/* {menus?.map((menuItem) => (
          <MenuItem key={menuItem.id} menuItem={menuItem} />
        ))} */}

        {currentCategory == "all"
          ? menus?.map((category) => (
              <MenuItem key={category.id} menuItem={category} />
            ))
          : filtredCategory?.map((category) => (
              <MenuItem key={category.id} menuItem={category} />
            ))}
      </div>
    </div>
  );
};

export default AllMenus;
