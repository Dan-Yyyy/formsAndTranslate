import React from "react";

import Input from "./../../styled/Input";
import Label from "./../../styled/Label";
import LabelText from "./../../styled/LabelText";

const CustomInput = ({id, type="text", handleChange, handleBlur, values, textLabel}) => {

  return(
    <Label htmlFor={ id }>
      <LabelText>{textLabel}</LabelText>
      <Input
        id={ id }
        name={ id }
        type={type}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values}
      />
    </Label>
  )
}

export default CustomInput;