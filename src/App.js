import './App.css';
import { useEffect, useState } from 'react';
import Loader from './Loader/Loader';

function App() {
  const [result, setResult] = useState(null);
  const [username, setUsername] = useState('');
  const [showLoader, setShowLoader] = useState(true);
  const [fadeLoader, setFadeLoader] = useState(false);
  const [error, setError] = useState(false);
  function hideLoaderSmooth() {
    setFadeLoader(true);
    setTimeout(() => {
      setShowLoader(false);
      setFadeLoader(false);
    }, 500)
  }

  function searchProfile() {
    if (username.length == 0) {
      setError(true);
      return
    };
    setShowLoader(true);
    setFadeLoader(false);
    fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json())
    .then(json => {
      setResult(json);
      hideLoaderSmooth();
      setUsername('');

    })
  }

  useEffect(() => {
    const timer = setTimeout(() => hideLoaderSmooth(), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <span className='bg-dot bg-1'></span>
      <span className='bg-dot bg-2'></span>
      {showLoader && <Loader fadeOut={fadeLoader}></Loader>}
      <div className='container'>
        <img className='dots' src='/dots.svg' />
        <h1>
          <img src="/github-icon.svg" /> Perfil <img src="/github-logo.png" />
        </h1>
        <div class="input-wrapper">
          <input placeholder='Digite um usuário do Github'
          className={error ? 'invalid-input' : ''}
          value={username}
          onChange={e => {
            setError(false);
            setUsername(e.target.value.trim());
          }}
          onKeyDown={e => {
            if (e.key == 'Enter') searchProfile()
          }}
          />
          
          
          <button onClick={searchProfile}>
            <img src='/search-icon.svg' />
          </button>
        </div>
        {error && <p className='error-msg'>Por favor insira um usuário</p>}

        {result && result.status !== "404" ? <div className='result-wrapper'>
        
          <img className='avatar-img' src={result.avatar_url} />
          <div className='info-wrapper'>
            <h2>{result.name || result.login}</h2>
            <p>{result.bio || <b>Esse usuário não possui uma bio</b>}</p>
            <div className='buttons-wrapper'>
              <a target='_blank' href={result.html_url}>
                <img src='/github-icon.svg'/>
                Acessar Github
              </a>

              {result.blog && 
              <a className='blog-btn' target='_blank' href={result.blog}>
                <img src='/website-icon.png'/>
                Site</a>}
            </div>
          </div>
        </div>
        
        : (result && <div className='result-wrapper not-found'>
            <h2>Nenhum perfil foi encontrado com esse nome de usuário. Tente novamente</h2>
          </div>)
      }

      </div>
    </div>
  );
}

export default App;
