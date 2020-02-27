import React from 'react';
import './styles/global.css'
import './contador.css'
class App extends React.Component {
    render() {
        return
        <div>
            <h1 className="contador-titulo">0</h1>
        <button type="button" className="contador-aumentar">Aumentar</button>
        <button type="button" className="contador-diminuir">Diminuir</button>
        </div>
    
        )
    }
}

export default App