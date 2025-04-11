import { Fragment } from "react";
import { Link } from "react-router-dom";

export default function Tortas() {
  return (
    <Fragment>
        <Link to="/tortaDetalle/limón">
            <button>De Limón</button>
        </Link>
        <Link to="/tortaDetalle/chocolate">
            <button>De Chocolate</button>
        </Link>
        <Link to="/tortaDetalle/manzana">
            <button>De Manzana</button>
        </Link>
        <Link to="/tortaDetalle/anís">
            <button>De Anís</button>
        </Link>
    </Fragment>
  )
}
