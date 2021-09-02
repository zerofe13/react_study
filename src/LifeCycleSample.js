import React, { Component } from 'react';

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };
  myRef = null;

  constructor(props) {
    super(props);
    console.log('constructor');
  }
  //   prop로 받아온 값을 state 에 동기화시키는 용도로 사용하며 컴포넌트가 마운트 될때,업데이트될 때 호출
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }
  //첫 렌더링 마친후 실행 이벤트 등록,setTimeout,setInterval 같으 비동기 작업 처리시
  componentDidMount() {
    console.log('componentDidMount');
  }
  //리렌더링 여부 true 리턴시 리렌더링 false 반환시 x
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    return nextState.number % 10 !== 4; // 숫자의 마지막 자리가 4면 리렌더링 x
  }
  //컴포넌트를 dom에서 제거할때
  componentWillUnmount() {
    console.log('conponenetWillUnmount');
  }
  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };
  //브라우저로 반영하기 직전
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', prevProps, prevState);
    if (snapshot) {
      console.log('업데이트되기 직전 색상: ', snapshot);
    }
  }
  render() {
    console.log('render');

    const style = {
      color: this.props.color,
    };
    return (
      <div>
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color : {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycleSample;
