import { useEffect, useState } from 'react';
import './App.css';
import API_RESPONSE from './JSON';
import { Footer, Layout, NavBar } from './components';
import { useForm } from './hooks';

function App() {
  const [isSelected, setIsSelected] = useState(null);
  const [teams, setTeams] = useState(API_RESPONSE);
  const [values, handleInputChange, reset] = useForm({ name: '' });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (values.name.length < 3) return;
    setIsLoading(true);
    setTimeout(() => {
      setTeams(() =>
        API_RESPONSE.filter((element) =>
          element.id.includes(values.name.trim().toLowerCase())
        )
      );
      setIsLoading(false);
      reset({ name: '' });
    }, 1500);
  }, [values.name]);

  const handleClick = (value) => {
    const [searchVs] = API_RESPONSE.filter(
      (element) => element.vs === value.id
    );
    setTeams(() => [value, searchVs]);
    setIsSelected(value.id);
    setTimeout(() => {
      setIsSelected(null);
    }, 2500);
  };

  return (
    <>
      <NavBar
        handleInputChange={handleInputChange}
        values={values.name}
        isLoading={isLoading}
      />
      <Layout>
        <div className="row row-cols-1 row-cols-lg-4 justify-content-center align-items-center g-3 h-100 position-relative">
          {teams.length === 0 && (
            <>
              <div className="card customCard d-flex gradient-bg-animation justify-content-center align-items-center">
                <h1 style={{ 'font-size': '10rem' }}>😭</h1>
                <h2>No hay Clasicos!!!</h2>
              </div>
              <button
                className="btn btn-close position-absolute top-0 end-0"
                onClick={() => {
                  setTeams(API_RESPONSE), reset({ name: '' });
                }}
              ></button>
            </>
          )}
          {teams.map((team, index) => (
            <>
              <div
                key={`${team.id}-${Date.now()}`}
                className={`col d-flex justify-content-center ${isSelected === team.id ? 'rotate-scale-up-vertical' : isSelected === team.vs ? 'scale-down-center' : null}`}
                style={{ '--data-timer': `${2 * index + 1}s` }}
                data-value={index + 1}
                onClick={() => handleClick(team)}
              >
                <div className="card customCard gradient-bg-animation">
                  <img
                    src={`https://lh3.googleusercontent.com/d/${team.image}=s311`}
                    className="card-img-top image"
                    alt={`Item-${team.id + Date.now()}`}
                  ></img>
                  <div className="card-body">
                    <h5 className="text-center text-uppercase">{team.name}</h5>
                  </div>
                </div>
              </div>
              {teams.length === 2 && index === 0 && (
                <img
                  key={`image-${Date.now() + index}`}
                  src={`https://www.onlygfx.com/wp-content/uploads/2020/07/comic-vs-versus-1.png`}
                  alt={`VS`}
                  className="image"
                ></img>
              )}
            </>
          ))}
          {teams.length === 2 && (
            <button
              className="btn btn-close position-absolute top-0 end-0"
              onClick={() => setTeams(API_RESPONSE)}
            ></button>
          )}
        </div>
      </Layout>
      <Footer />
    </>
  );
}

export default App;
