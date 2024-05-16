import { useState } from 'react';
import { Loading } from './Loading';
import { independiente } from '../assets/primeradivision';
export const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark w-100 rounded-bottom shadow position-sticky top-0 end-0">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center ">
          <img
            src={independiente}
            alt="independiente"
            width="64"
            height="64"
          ></img>
          <span>Los 20 Clasicos</span>
        </a>
        <form
          className="d-flex flex-column flex-lg-row align-items-end "
          style={{ gap: 15 }}
        >
          <div className="col-sm">{props.isLoading && <Loading />}</div>
          <div className="col-sm">
            <input
              className="form-control w-auto"
              type="text"
              placeholder="Busca tu equipo..."
              name="name"
              id="name"
              onChange={props.handleInputChange}
              value={props.values}
              onKeyPress={(event) => {
                const charCode = event.charCode;
                if (
                  !(charCode >= 65 && charCode <= 90) &&
                  !(charCode >= 97 && charCode <= 122)
                ) {
                  event.preventDefault();
                }
              }}
            />
          </div>
        </form>
      </div>
    </nav>
  );
};
