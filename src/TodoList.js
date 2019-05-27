import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from './store/actions/todos';

const TodoList = ({ todos, addTodo, removeTodo }) => {
  return (
    <>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span>{todo.text} - </span>
            <button type="button" onClick={() => removeTodo(todo.id)}>
              X
            </button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => {
          const random = Math.random();
          return addTodo({ id: random, text: random });
        }}
      >
        Adicionar
      </button>
    </>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.text,
    })
  ).isRequired,
  addTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators(TodoActions, dispatch);

const mapStateToProps = state => ({
  todos: state.todos,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
