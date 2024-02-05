import { Link } from "react-router-dom";


const base = "text-sm inline-block rounded-full bg-yellow-400 font-semibold tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-stone-300";

const style = {
  primary: base + " px-4 py-3 md:px-6 md:py-4 ",
  small: base + " py-2 md:px-5 md:py-2.5 text-xs",
  secondary:"inline-block rounded-full border-2 border-stone-300 font-semibold tracking-wide text-stone-500 hover:text-stone-800 transition-colors duration-300 hover:bg-stone-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed  px-4 py-2.5 sm:px-6 md:py-4 md:py-3.5",
  rounded: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm rounded-full"

}

function Button({ children, disabled = false, onClick, to, type = "primary" }) {

  if (to) {
    return (
      <Link to={to} className={style[type]} disabled={disabled}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={style[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
