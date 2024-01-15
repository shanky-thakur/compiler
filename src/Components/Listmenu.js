import React from "react";

const Listmenu = () => {
  return (
    <>
      <ul className="nav justify-content-evenly pb-4 text-3xl">
        <li className="nav-item shadow">
          <a className="nav-link active" aria-current="page" href="/">
            Active
          </a>
        </li>
        <li className="nav-item shadow">
          <a className="nav-link" href="/">
            Link
          </a>
        </li>
        <li className="nav-item shadow">
          <a className="nav-link" href="/">
            Link
          </a>
        </li>
        <li className="nav-item shadow">
          <a className="nav-link" href="/">
            Link
          </a>
        </li>
        <li className="nav-item shadow">
          <a className="nav-link" href="/">
            Link
          </a>
        </li>
        <li className="nav-item shadow">
          <a className="nav-link" href="/">
            Link
          </a>
        </li>
        <li className="nav-item shadow">
          <a className="nav-link" href="/" aria-disabled="true">
            Disabled
          </a>
        </li>
      </ul>
    </>
  );
};

export default Listmenu;
