import React from "react";
import Button from "../components/button"

export default {
  title: 'Components',
  component: Button,
};

export const PrimaryButton = (args) =>{
  return (<Button { ...args}/>);
  
};
PrimaryButton.args = {
  text:"MainButton",
  className:"button",
  id: "button"
}

