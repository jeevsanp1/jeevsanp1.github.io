import "../index.css";

function Nav() {
  return (
    <>
      <div className=" bg-teal-900 h-12 font-display">
        <ul className="flex flex-row pt-3 text-cyan-50">
          <li className="px-4">
            <a href="/">Sanjeev Vijayakumar</a>
          </li>
          <li className="px-4">
            <a href="/#about">About</a>
          </li>
          <li className="px-4">
            <a href="/#robotics">Robotics</a>
          </li>
          <li className="px-4">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Nav;
