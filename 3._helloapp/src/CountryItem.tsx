import React from "react";
import { CountryType } from "./App";
import styles from "./style";

type CountryItemPropsType = {
  countryItem: CountryType;
};

const CountryItem = (props: CountryItemPropsType) => {
  const item = props.countryItem;
  return (
    <li style={styles.listItemStyle} className={item.visited ? "list-group-item active" : "list-group-item"}>
      {item.country}
    </li>
  );
};

export default CountryItem;
