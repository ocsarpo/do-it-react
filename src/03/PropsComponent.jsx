import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PropsComponent extends Component {
  render() {
    return <div className="message-container">{this.props.name}</div>;
  }
}

// 자료형 선언
PropsComponent.propTypes = {
  name: PropTypes.string,
};

export default PropsComponent;
