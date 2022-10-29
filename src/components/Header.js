import React from "react";
import { Outlet, Link } from "react-router-dom";

function Header() {
  return (
    // <div>
    //   {/* A "layout route" is a good place to put markup you want to
    //       share across all the pages on your site, like navigation. */}
    //   <nav>
    //     <ul>
    //       <li>
    //         <Link to="/">Home</Link>
    //       </li>
    //       <li>
    //         <Link to="/dolar">Dolar</Link>
    //       </li>
    //       <li>
    //         <Link to="/euro">Euro</Link>
    //       </li>
    //       <li>
    //         <Link to="/uf">Valor UF</Link>
    //       </li>
    //     </ul>
    //   </nav>

    //   <hr />

    //   {/* An <Outlet> renders whatever child route is currently active,
    //       so you can think about this <Outlet> as a placeholder for
    //       the child routes we defined above. */}
    //   <Outlet />
    // </div>
    <div>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            Consulta Financiera
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  {" "}
                  <Link to="/">Home</Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="dolar">
                  <Link to="/dolar">Valor Dolar</Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="uf">
                <Link to="/uf">Valor UF</Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="euro">
                <Link to="/euro">Valor Euro</Link>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export { Header };
