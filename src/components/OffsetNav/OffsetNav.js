import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import './OffsetNav.css';
import ActionButton from '../ActionButton';

function Nav(props) {
  return (
    <nav className='Nav'>
      {props.children}
    </nav>
  );
}

function Title(props) {
  return (
    <div className='NavHeader_Title'>
      {props.text}
    </div>
  );
}

Title.propTypes = {
  text: PropTypes.string.isRequired
};

function NavHeader(props) {
  return (
    <div className='NavHeader'>
      {props.children}
    </div>
  );
}

function NavList(props) {
  return (
    <ul className='NavList'>
      {props.children}
    </ul>
  );
}

function NavItem(props) {
  return (
    <li className='NavItem'>
      {props.children}
    </li>
  );
}

class Tags extends React.Component {
  render() {
    const tags = ['Clínica SDC', 'Idéias', 'Livros', 'Senhas', 'Trabalho'];

    return (
      <div className='NavWrapper'>
        <Nav>
          <NavHeader>
            <Title text="Etiquetas" />
            <ActionButton text='Editar' />
          </NavHeader>
          <NavList>
            {tags.map((value) => {
              return (
                <NavItem key={value}>
                  <a>
                    <Icon name='label' />
                    <span>{value}</span>
                  </a>
                </NavItem>
              );
            })}
            <NavItem>
              <a>
                <Icon name='add' />
                <span>Criar nova etiqueta</span>
              </a>
            </NavItem>
          </NavList>
        </Nav>
      </div>
    );
  }
}

class OffsetNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      display: false
    };

    this.close = this.close.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  close() {
    this.setState({
      display: false
    });
  }

  toggle() {
    this.setState({
      display: !this.state.display
    });
  }

  componentDidMount() {
    document.querySelector('.OffsetNav__Overlay')
      .addEventListener('click', this.close);

    document.querySelector('.' + this.props.toggleClassName)
      .addEventListener('click', this.toggle);
  }

  componentWillUnmount() {
    document.querySelector('.OffsetNav__Overlay')
      .removeEventListener('click', this.close);

    document.querySelector('.' + this.props.toggleClassName)
      .removeEventListener('click', this.toggle);
  }

  render() {
    let display = this.state.display ? 'OffsetNav--opened' : 'OffsetNav--closed';

    return (
      <div className={['OffsetNav', display].join(' ')}>
        <Tags />
        <div className="OffsetNav__Overlay"></div>
      </div>
    );
  }
}

OffsetNav.propTypes = {
  toggleClassName: PropTypes.string.isRequired
}

export default OffsetNav;