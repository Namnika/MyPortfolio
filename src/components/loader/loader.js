import "./loader.css";
import { format } from "date-fns";

export default function Loader() {
  return (
    <div className="bg-loader">
      <div className="myname">
        NAMNIKA JANBANDHU
        <br />
        PORTFOLIO &#169;{format(new Date(), "yyyy")}
      </div>
      <div className="loader09"></div>
    </div>
  );
}
