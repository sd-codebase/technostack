- State
  1. const [count, setCount] = useState(0);
    setCount(count + 1)
  
  2. constructor() {
      this.state = {
        count: 0
      }
    }
    updateCount() {
      this.setState({count: this.state.count + 1})
    }

- Props
  1. export default function Comp1(props) {
      // Access props.property;
    }
  2. constructor(props) {
      super(props);
      // Access this.props.property
    }

- Fragment
  1. <></>
  2. <React.Fragment></React.Fragment>

- UseEffect
  1. useEffect(() => {
      // componentDidMount logic goes here
    }, [])
  2. useEffect(() => {
      // componentDidUpdate logic goes here
    }, [propA,propB])
  3. useEffect(() => {
      return () => {
        // componentWillUnmount logic goes here
      }
    }, [])

- React.memo() HOC is equiavalend to shouldComponentUpdate, both decides that component should update or not if any props changes
  Difference between them is only how they are implemented, 
  shouldComponentUpdate is written in class, memo wraps a component
  shouldComponentUpdate returns boolean, true means update component, false means do not update
  1. shouldComponentUpdate(updatedProps, updatedState) {
      return updatedProps.propA !== this.props.propA;
    }
  If value property of props changes, then only component re renders
  2. const MyComponent = React.memo(({ value }) => {
      return <div>{value}</div>;
    });

Steps to use state management using redux
  1. Create redux folder
  2. In that folder create 3 files and 1 folder
    Files- actionTypes.js, actions.js, store.js
    Folder- reducers
      In reducers create 2 files, index.js and reducer.js

  3. In actionTypes.js declare constants or type for each action
    Eg
    export const ActionTypes = {
      SET_PRODUCTS: 'SET_PRODUCTS',
    }
  4. In actions.js define actions or perations
    Eg
    export const setProducts = (products) => {
      return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
      }
    }

  5. in reducer/reducer.js
    - Declare initial state
      const initialState = {
        products: []
      };
    - implement reducer
      export const productReducer = (state = initialState, {type, payload}) => {
        switch (type) {
          case ActionTypes.SET_PRODUCTS:
            return {...state, products:payload};
          default:
            return state;
        }
      }
  6. In reducers/index.js
    - combine multiple reducers and return combinerd reducers
      const reducers = combineReducers({
        allProducts: productReducer,
      });

      export default reducers;
  7. In store.js
    - create store using createStore method
      const store = createStore(reducers, {});
      export default store;

  8. In index.js import Provider component from react-redux and store from store.js
    <Provider store={store}>
      <App />
    </Provider>

  9. Access data from store using useSelector() hook
    - In a component 
      const products = useSelector(state => state.allProducts.products);
  
  10. Update state in store using useDispatch hook
      - In component
        fetch action from actions.js
        const dispatch = useDispatch();
        // after having updated data from server
        dispatch(setProducts(updatedData));

- Middleware in redux app
  Middleware provides a way to intercept actions dispatched to the store and run some code before the action reaches the reducer
  thunk middleware is used
  while creating store, use applyMiddleware() function as second argument
  Eg
    import thunk from 'redux-thunk';
    const store = createStore(reducers, applyMiddleware(thunk));
    export default store;


- Routing in react
  In App.js component
    1. import { BrowserRouter, Routes, Route } from "react-router-dom";
    2. <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="blogs" element={<Blogs />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
  In Layout component
    3. import { Outlet, Link } from "react-router-dom";
    4. <Link to="/blogs">Blogs</Link>
    5. <Outlet />

- Context api
  To avoid prop drilling
  Steps to use Context
  Two main roles played by Context, Context.Provoder and Context.Consumer
  1. Create context object using createContext() function
    const UserContext = createContext();
    this will give 2 components UserContext.Provider and UserContext.Consumer
  2. Pass conext to child components using Provider, Provider takes value prop which points to our context
    <UserContext.Provider value={user}>
      <AllChildComponents/>
    </UserContext.Provider>
  3. Access context using useContext() in child component
    const user = useContext(UserContext);
    // user will contain user prop passed from parent component 


- useCallback()
  used to prevent component re-render until the props changed
  useCallback() returns memoize a function
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  <ToDos todos={todos} addTodo={addTodo} />

  ToDos component will only re-render if todos chnage, as we have passed useCallback 

- useMemo()
  useMemo() returns memoize a value, we can use if we have heavy calculation, we can cache a value to avoid calculation every time
  Avoids unnecessary expensive function call
  Eg
  const result = heavyCalculationFunction();

  when component re-renders this function will always get called
  We can avoid this using useMemo()
  const result = useMemo(() => heavyCalculationFunction(), [count]);

useMemo and useCallback has same syntax, buth they serve different purpose, useMemo returns cached value, useCallback returns cached function


- customHooks
  we can use builtin hooks in custom hooks, 
  hooks always start with use word,
  hooks can take input arguments

  1. create custom hook counter
  const useCounter = (count) => {
    const [myCount, setMyCount] = useState(count);

    const increment = () => setMyCount(myCount + 1);
    const decrement = () => setMyCount(myCount - 1);
    const reset = () => setMyCount(count);

    return [myCount, increment, decrement, reset];
  }

  export default useCounter;

  2. use created hook in component

  const [count, increment, decrement, reset] = useCounter(0);

