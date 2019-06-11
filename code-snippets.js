

    <script src="https://cdnjs.cloudflare.com/ajax/libs/redux/4.0.1/redux.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react-redux/7.0.3/react-redux.js"></script>
    
        

  // Example of class Component
  class CommentItem extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        comment: 'this is a comment'
      }
    }
    render() {
      return (
          <div>{this.state.comment}</div>
      );
    }
  }

  <CommentItem />



  // Example of component life-cycle
  class CommentItem extends React.Component {
    componentWillMount() {
      console.log('mounting');
      this.setState({ comment: 'test comment' }) //data initialization
    }
    componentDidMount() {
      console.log('mounted');
      // this.setState({ comment: 'another test comment' }) //data initialization
    }
    render() {
      return (
          <div>{this.state.comment}</div>
      );
    }
  }

  <CommentItem />


  // Example of functional component
  function CommentItem(props) {
    const comment = props.comment;
    return (
        <div>{comment}</div>
    );
  }

  <CommentItem comment="this is a comment" />



  


import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

// create reducers1
const initialCartState = [];
function cartReducer(state = initialCartState, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      const newState = {...state};
      newState.cart.push(action.data);
      return newState;
    default:
      return state;
  }
}
// create reducer2
function homeReducer(state = {}, action) {
  return state;
}

// combine multiple reducers
const reducer = combineReducers({ cart: cartReducer, home: homeReducer })

// applyMiddleware supercharges createStore with middleware:
const store = createStore(reducer, applyMiddleware(thunk));

store.subscribe((state) => {
  console.log('state changed to ', state);
});

// dispatch to update the store
store.dispatch({type: `ADD_TO_CART`, data: { id: `x`, name: `y` }});




import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'

// step 1 - create a store
const initialState = { neighbour: 'Mahesh' };
const reducer = (state = initialState) => {
  return state;
}
const store = createStore(reducer);

// step 2 - create react component and connect it to redux store
class App extends React.Component {
  render() {
    return (
      <div>My name is {this.props.name} and my neighbours name is {this.props.neighbour}</div>
    );
  }
}

const mapStateToProps = (state) => {
  neighbour: state.neighbour
}
const ConnectedApp = connect(mapStateToProps);

// step 3 - render to DOM
ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp name="dayanand" />
  </Provider>,
  document.getElementById('root')
)