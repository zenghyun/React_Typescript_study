import React from "react";
import { CountryType } from "./App";

type CountryItemPropsType = {
  countryItem: CountryType;
};

const CountryItem = (props: CountryItemPropsType) => {
  const item = props.countryItem;
  return (
    <li className={item.visited ? "list-group-item active" : "list-group-item"}>
      {item.country}
    </li>
  );
};

export default CountryItem;
