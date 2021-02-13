import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChildComponent extends Component {
  render() {
    // 객체 구조 분해 할당식
    // 프로퍼티에 전달된 값을 지역 변수로 재정의
    const { boolValue, numValue, arrayValue, objValue, nodeValue, funcValue } = this.props;

    return (
      <div>
        <span>불린: {boolValue}</span>
        <span>숫자: {numValue}</span>
        <span>배열: {arrayValue}</span>
        <span>객체: {objValue['name']}</span>
        <span>객체: {objValue['age']}</span>
        <span>노드: {nodeValue}</span>
        <span>함수: {funcValue}</span>
      </div>
    );
  }
}

ChildComponent.propTypes = {
  boolValue: PropTypes.bool,
  numValue: PropTypes.number,
  arrayValue: PropTypes.arrayOf(PropTypes.number),
  objValue: PropTypes.object,
  nodeValue: PropTypes.node,
  funcValue: PropTypes.func,
};

export default ChildComponent;
