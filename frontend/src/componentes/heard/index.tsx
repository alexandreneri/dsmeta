import logo from '../../assets/img/logo.svg'

import './index.css'

function Hearder() {
  return (
    <header>
    <div className="dsmeta-logo-container">
        <img src={logo} alt="DSMeta" />
        <h1>DSMeta</h1>
        <p>
          Desenvolvido por
          <a href="https://www.instagram.com/devsuperior.ig">@Alexandre Neri</a>
        </p>
    </div>
</header>
   
  )
}

export default Hearder
