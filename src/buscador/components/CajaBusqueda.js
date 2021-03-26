import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';

class CajaBusqueda extends React.Component {
      goToSearch = (event) => {
        event.preventDefault();
        this.props.history.push(`/items$search=${this.storeInput.value}`);
      }

      resetSearch = (e) => {
        document.querySelector('.buscadorInput').value = '';
      };

    render() {
      return ( 
        <Fragment>
            <nav className="cajaBusqueda">
                <Link to='/' className="inicioImg" onClick={this.resetSearch}/>
                <form className="buscador" method="GET" onSubmit={this.goToSearch}>
                    <input type="text" className="buscadorInput" required placeholder=" Nunca dejes de buscar" autoComplete="off" ref={(input) => {this.storeInput = input;}} defaultValue="" />
                    <button type="submit" className="buscadorSubmit">
                    </button>
                </form>
            </nav>
        </Fragment>
      );
    }
}

export default withRouter(CajaBusqueda);