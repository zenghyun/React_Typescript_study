import { ItemType } from "./App2";
import React, { useDeferredValue } from "react";
import logo from "./assets/react.svg";

type Props = { results: Array<ItemType> };

const ItemList = (props: Props) => {
  const deferredResults = useDeferredValue(props.results);

  const divRows: React.ReactNode[] = deferredResults.map((item) => (
    <div key={item.id}>
      id: {item.id}
      <br />
      keyword: {item.keyword}
      <br />
      <img src={logo} style={{ width: 100, height: 100 }} />
      <hr />
    </div>
  ));
  

  return <div>{divRows}</div>;
};

export default ItemList;
