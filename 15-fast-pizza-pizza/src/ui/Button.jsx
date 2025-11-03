import { Link } from "react-router-dom";

const base =
  "rounded-full bg-yellow-400 font-semibold tracking-wide text-stone-800 uppercase transition-colors duration-300 hover:cursor-pointer hover:bg-yellow-300 focus:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed inline-block";
function Button({ children, disabled, to, type }) {
  const styles = {
    primary: base + " px-4 py-3 md:px-6 md-py-4",
    small: base + " py-2 px-4 md:px-5 md:py-2.5 text-xs",
  };
  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );

  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
