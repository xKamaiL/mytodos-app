import React, { Component } from 'react';
import styled from '../../node_modules/styled-components';
import { observer, inject } from '../../node_modules/mobx-react';

export const Title = styled.h3`
  padding: 10px 0px;
  font-size: 29px;
`;

@inject('todo')
@observer
class Todo extends Component {
  render() {
    return (
      <div style={{ width: '100%', textAlign: 'center' }}>
        <Title>All TODO</Title>
        {JSON.stringify(this.props.todo.todolist)}
      </div>
    );
  }
}

export default Todo;
