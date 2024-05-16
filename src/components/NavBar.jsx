import { independiente } from '../../public/assets/primeradivision';
import { Loading } from './Loading';
export const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark w-100 rounded-bottom shadow position-sticky top-0 end-0">
      <div className="container-fluid flex-column flex-md-row">
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
          className="d-flex flex-column align-items-center flex-lg-row align-items-lg-end"
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
              onKeyDown={(event) => {
                const key = event.key;
                if (
                  !(key >= 'a' && key <= 'z') &&
                  !(key >= 'A' && key <= 'Z')
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
