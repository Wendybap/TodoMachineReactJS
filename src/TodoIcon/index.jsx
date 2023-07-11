import React from "react";
/* Con ReactComponent es que podemos importar nuestro iconos 
personalizados como ej. svg*/
import { ReactComponent as CheckSVG } from "./check.svg";
import { ReactComponent as DeleteSVG } from "./delete.svg";
import "./TodoIcon.css";

/*Esta es una forma de hacer condicionales usando array,
creo una clave y le paso como valor una función que recibe
el tipo de icono que obtengo a traves de ReactComponent
y como parámetro los atributos que necesito para personalizar
mi icono*/
const iconsTypes = {
  check: (color) => <CheckSVG className="Icon-svg" fill={color} />,
  delete: (color) => <DeleteSVG className="Icon-svg" fill={color} />,
};

function TodoIcon({ type, color, onClick }) {
  return (
    <>
      <span
        className={`Icon-container Icon-container-${type}`}
        onClick={onClick}
      >
        {iconsTypes[type](color)}
      </span>
    </>
  );
}

export default TodoIcon;
