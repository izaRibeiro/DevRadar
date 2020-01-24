import React, { useState, useEffect } from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';



function App() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    );
  }, []);

  

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required></input>
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required></input>
          </div>

          <div className="input-group">

            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input type="number"
               name="latitude" id="latitude" 
               required 
               value={latitude}
               onChange={ event => setLatitude(event.target.value)} ></input>
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input type="number" 
              name="longitude" id="longitude" 
              required 
              value={longitude}
              onChange={ event => setLongitude(event.target.value)}></input>
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/33670052?s=460&v=4" alt="Izabella Ribeiro"></img>
              <div className="user-info">
                <strong>Izabella Ribero</strong>
                <span>ReactJS, React</span>
              </div>
            </header>
            <p>blablabla</p>
            <a href="https://github.com/izaRibeiro">Acessar perfil n github</a>
          </li>
          <li className="dev-item">
          <header>
            <img src="https://avatars2.githubusercontent.com/u/33670052?s=460&v=4" alt="Izabella Ribeiro"></img>
            <div className="user-info">
              <strong>Izabella Ribero</strong>
              <span>ReactJS, React</span>
            </div>
          </header>
          <p>blablabla</p>
          <a href="https://github.com/izaRibeiro">Acessar perfil n github</a>
        </li>
                <li className="dev-item">
                <header>
                  <img src="https://avatars2.githubusercontent.com/u/33670052?s=460&v=4" alt="Izabella Ribeiro"></img>
                  <div className="user-info">
                    <strong>Izabella Ribero</strong>
                    <span>ReactJS, React</span>
                  </div>
                </header>
                <p>blablabla</p>
                <a href="https://github.com/izaRibeiro">Acessar perfil n github</a>
              </li>
              <li className="dev-item">
              <header>
                <img src="https://avatars2.githubusercontent.com/u/33670052?s=460&v=4" alt="Izabella Ribeiro"></img>
                <div className="user-info">
                  <strong>Izabella Ribero</strong>
                  <span>ReactJS, React</span>
                </div>
              </header>
              <p>blablabla</p>
              <a href="https://github.com/izaRibeiro">Acessar perfil n github</a>
            </li>
            <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/33670052?s=460&v=4" alt="Izabella Ribeiro"></img>
              <div className="user-info">
                <strong>Izabella Ribero</strong>
                <span>ReactJS, React</span>
              </div>
            </header>
            <p>blablabla</p>
            <a href="https://github.com/izaRibeiro">Acessar perfil n github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}


export default App;
