import React from "react";
import { formatString } from "../../helpers/Format";
const Categorize = (props) => {
  const { id, categories } = props;

  if (categories.length > 0) {
    const category = categories.find((cat) => {
      return cat.id === id;
    });
    if (category) {
      return <span>{formatString(category.name)}</span>;
    }
  } else {
    return <span>All</span>;
  }
};

export default Categorize;
