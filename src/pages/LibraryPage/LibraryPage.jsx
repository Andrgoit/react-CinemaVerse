import { useState } from "react";
import { useSelector } from "react-redux";

import {
  BreadcrumbNavigation,
  LibraryChoseButtonBlock,
  LibraryMoviesList,
} from "@/components";

export default function LibraryPage() {
  const [chosenList, setChosenList] = useState("w");
  const favoriteList = useSelector((state) => state.favoriteList.favoriteList);
  const watchList = useSelector((state) => state.watchList.watchList);

  const favoriteListArray = Object.values(favoriteList);
  const watchListArray = Object.values(watchList);
  console.log("favoriteListArray", favoriteListArray);
  console.log("watchListArray", watchListArray);

  const choseHandler = (item) => {
    item === "w" ? setChosenList("w") : setChosenList("f");
  };

  return (
    <div className="container flex flex-col gap-8">
      <BreadcrumbNavigation />
      <LibraryChoseButtonBlock
        chosenList={chosenList}
        choseHandler={choseHandler}
      />
      <LibraryMoviesList
        movies={chosenList === "w" ? watchListArray : favoriteListArray}
      />
    </div>
  );
}
