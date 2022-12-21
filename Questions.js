ShallowCopy, deepCopy
We create shallowcopy of object using spread operator or Object.assign method
    const person1 = {...person}
    const person1 = Object.assign({}, person)
We create deepcopy using combining JSON.stringify() and JSON.parse() and clonedeep() of lodash
    stringify doesn't copy functions and Date, so we can loop through the objects and make copy of them, or we can use clonedeep()


1	What is React?
    Is open source frontend library to create component base user interface, It used to handle view layer of web and mobile Apps

2	What are the major features of React?
    VirtualDOM- realdom is expensive to manipulate, so using VDom make app faster
    Supports to server side rendering
    It follows Unidirectional data flow, only one way data binding
    Used to create reusable and composable Components

3	What is JSX?
    JSX is a XML-like syntax extension of javascript
    Its a syntactical sugar of React.createElement()
    Its like javascript with html like template
    Eg
    <h1 className='heading-1'>{'Welcome to React world!'}</h1>

4	What is the difference between Element and Component?
    Element is an plain object describing what you want to show in browser in terms of DOM node
    Element can contain other element in their props
    We create element using React.createElement()
    Eg
    const element = React.createElement(
        'div',
        {id: 'login-btn'},
        'Login'
    );
    Which returns
    {
        type: 'div',
        props: {
            children: 'Login',
            id: 'login-btn'
        }
    }
    It renders using ReactDOM.render() as below
    <div id='login-btn'>Login</div>

    it is an object representation of a virtual DOM node
    Element contains both type and property
    It may contain other Elements in its props
    React Element does not have any methods, making it light and faster to render
    Cannot use hooks with element

    Componentis independent and reusable
    Component returns the virtual DOM tree of the element
    React hooks can be used with functional components
    Elements are immutable i,e once created cannot be changed
    Elements are light, stateless

    function with returning JSX will make component
    We can create class components using 


5	How to create components in React?
    There are 2 ways
    1- function component
        This is the simplest way to create a component
        Those are pure JavaScript functions that accept props object as the first parameter and return React elements
        Eg
        function Greeting({ message }) {
            return <h1>{`Hello, ${message}`}</h1>
        }
    2. Class components
        use ES6 class to define a component
        class Greeting extends React.Component {
            render() {
                return <h1>{`Hello, ${this.props.message}`}</h1>
            }
        }
    Class with render() method and function with return statement, both returns JSX

6	When to use a Class Component over a Function Component?
    Previously state , lifecycle methods were available in class components only, but from 16.8 
    Hooks, state , lifecycle methods and other features  are  now in function component also.
    So, it is always recommended to use Function components,
    When you need a React functionality whose Function component equivalent is not present yet, like Error Boundaries we must use class components


7	What are Pure Components?
    Pure component handle shouldComponentUpdate() for developer
    When props or state changes, PureComponent will do a shallow comparison on both props and state
    Pure component extends to React.PureComponent
    Component extends React.component
    Components doesn't do comparison, so it component updates whenever shouldComponentUpdate() get called


8	What is state in React?
    State of a component is an object that holds some information that may change over the lifetime of the component.
    State created using useState hook in functional component, or state object in class component
    function Greetings() {
        const [message, setMessage] = useState('Welcome');
        return <h1>{message}</h1>
    }

9	What are props in React?
    Props are inputs to components. 
    Props are passed to components on creation
    Props can be passed to child component, and child has first argument props,
    In Class component we can access it in constructor
    function Greetings(props) {
        return <h1>{props.message}</h1>
    }

10	What is the difference between state and props?
    Both props and state are plain JavaScript objects.
    State is managed within components, and props are sent from parent component.
    Cannot modify props

11	Why should we not update the state directly? class only
    Directly updating state object won't re-render a class componnet, instead we should use setState() method by passing object containing updating properties of state

12	What is the purpose of callback function as an argument of setState()? class only
    Eg
    setState({ name: 'John' }, () => console.log('The name has updated and component re-rendered'))
    The callback function is invoked when setState finished and the component gets rendered.

13	What is the difference between HTML and React event handling?
    1. difference in writing way
        <button onclick='activateLasers()'> html
        <button onClick={activateLasers}> // react
    2. preventing default behavoiur
        <a href='#' onclick='console.log("The link was clicked."); return false;' /> // return false in html events will prevent default behavoiur
        event.preventDefault() // in called method, will do the same,

14	How to bind methods or event handlers in JSX callbacks?
    Two ways
    1. <button onClick={activateLasers}>// bind activateLasers function and it invokes when event occurs
    2. <button onClick={() => this.handleClick()}>Click Me</button> // bind an arrow function and invoke actual handler in arrow function

15	How to pass a parameter to an event handler or callback?
    We use second way of event binding when we need topass an argument to event handler
    Eg
    <button onClick={() => this.handleClick('param passed')}>Click Me</button>

16	What are synthetic events in React?
    SyntheticEvent is a cross-browser wrapper around the browser's native event. 
    Its API is same as the browser's native event, including stopPropagation() and preventDefault()
    SyntheticEvent works identically across all browsers

18	What is "key" prop and what is the benefit of using it in arrays of elements?
    Key prop helps React identify which items have changed, are added, or are removed.
    Most often we use ID from our data as key

19	What is the use of refs?
    When we want to direct access dom element or componnet in react we use refs
    ref is used to return a reference to the element  or componnet

20	How to create refs?
    1. create reference using useRef()
        const inputEl = useRef(null);
    2. bind reference to an element or component
        <input ref={inputEl} type="text" />
    3. work with direct dom of referenced element
        inputEl.current.focus();
        inputEl.current.value = '25';

21	What are forward refs?
    When we want an access of dom element or component in parent componet from child component,
    We use forwardRef(). its like extended version of ref
    Eg.
    1. Create reference in parent component
        const ref = React.createRef();
    2. forward ref to a child
        <FancyButton ref={ref}>Click me!</FancyButton>
    3. refer passed reference in child
        <button ref={ref} className="FancyButton">
            {props.children}
        </button>
    4. Wrap child componnet in forwardRef() method
        const FancyButton = forwardRef((props, ref) => (
            <button ref={ref} className="FancyButton">
                {props.children}
            </button>
        ));


24	What is Virtual DOM?
    The Virtual DOM (VDOM) is an in-memory representation of Real DOM
    The representation of a UI is kept in memory and synced with the "real" DOM
    It's a step that happens between the render function being called and the displaying of elements on the screen.
    This entire process is called reconciliation

25	How Virtual DOM works?
    The Virtual DOM works in three simple steps.
    Whenever any underlying data changes, the entire UI is re-rendered in Virtual DOM representation.
    Then the difference between the previous DOM representation and the new one is calculated
    Once the calculations are done, the real DOM will be updated with only the things that have actually changed.


26	What is the difference between Shadow DOM and Virtual DOM?
    The Shadow DOM is a browser technology designed primarily for scoping variables and CSS in web components
    The Virtual DOM is a concept implemented by libraries in JavaScript on top of browser APIs
    Shadow DOM is mostly about encapsulation of the implementation.
    Shadow DOM creates small pieces of the DOM object which has their own, isolated scope for the element they represent

29	What are controlled components?
    A component that controls the input elements within the forms on subsequent user input is called Controlled Component
    every state mutation will have an associated handler function
    handleChange(event) {
        this.setState({value: event.target.value.toUpperCase()})
    }

30	What are uncontrolled components?
    The Uncontrolled Components are the ones that store their own state internally, and you query the DOM using a ref to find its current value when you need it. This is a bit more like traditional HTML.

31	What is the difference between createElement and cloneElement?
    React.createElement() functions to create React elements
    cloneElement is used to clone an element and pass it new props

32	What is Lifting State Up in React?
    When several components need to share the same changing data then it is recommended to lift the shared state up to their closest common ancestor
    That means if two child components share the same data from its parent, then move the state to parent instead of maintaining local state in both of the child components.

33	What are the different phases of component lifecycle?
    Mounting, Updating, Unmounting
    1. This Mounting phase covers initialization from constructor(), getDerivedStateFromProps(), render(), and componentDidMount() lifecycle methods.
    2. In Updating phase, the component gets updated in two ways, sending the new props and updating the state either from setState() or forceUpdate()
        This phase covers getDerivedStateFromProps(), shouldComponentUpdate(), render(), getSnapshotBeforeUpdate() and componentDidUpdate() lifecycle methods.
    3.  In Unmounting phase, the component is not needed and gets unmounted from the browser DOM. This phase includes componentWillUnmount() lifecycle method.


34	What are the lifecycle methods of React?
    Before React 16.3

    componentWillMount: Executed before rendering and is used for App level configuration in your root component.
    componentDidMount: Executed after first rendering and here all AJAX requests, DOM or state updates, and set up event listeners should occur.
    componentWillReceiveProps: Executed when particular prop updates to trigger state transitions.
    shouldComponentUpdate: Determines if the component will be updated or not. By default it returns true. If you are sure that the component doesn't need to render after state or props are updated, you can return false value. It is a great place to improve performance as it allows you to prevent a re-render if component receives new prop.
    componentWillUpdate: Executed before re-rendering the component when there are props & state changes confirmed by shouldComponentUpdate() which returns true.
    componentDidUpdate: Mostly it is used to update the DOM in response to prop or state changes.
    componentWillUnmount: It will be used to cancel any outgoing network requests, or remove all event listeners associated with the component.
    React 16.3+

    getDerivedStateFromProps: Invoked right before calling render() and is invoked on every render. This exists for rare use cases where you need a derived state. Worth reading if you need derived state.
    componentDidMount: Executed after first rendering and where all AJAX requests, DOM or state updates, and set up event listeners should occur.
    shouldComponentUpdate: Determines if the component will be updated or not. By default, it returns true. If you are sure that the component doesn't need to render after the state or props are updated, you can return a false value. It is a great place to improve performance as it allows you to prevent a re-render if component receives a new prop.
    getSnapshotBeforeUpdate: Executed right before rendered output is committed to the DOM. Any value returned by this will be passed into componentDidUpdate(). This is useful to capture information from the DOM i.e. scroll position.
    componentDidUpdate: Mostly it is used to update the DOM in response to prop or state changes. This will not fire if shouldComponentUpdate() returns false.
    componentWillUnmount It will be used to cancel any outgoing network requests, or remove all event listeners associated with the component.

35	What are Higher-Order components?
    A higher-order component (HOC) is a function that takes a component and returns a new component.
    We call them pure components because they can accept any dynamically provided child component but they won't modify or copy any behavior from their input components.
    HOC can be used for many use cases:
    Code reuse, logic and bootstrap abstraction.
    Render hijacking.
    State abstraction and manipulation.
    Props manipulation.

38	What is children prop?
    When we pass some children elements between start and end of componnet, this is called ass children props
    We can access these children element using props.children
      const Child = ({children}) => (children);

39	How to write comments in React?
    {/* Single line comment */}
    {/* Multi 
    line 
    comment */}

40	What is the purpose of using super constructor with props argument? Class
    A child class constructor cannot make use of this reference until the super() method has been called.
    The main reason for passing props parameter to super() call is to access this.props in your child constructors
    Eg
    constructor(props) {
        super(props)
        console.log(this.props) // prints { name: 'John', age: 42 }
    }

    constructor(props) {
        super()
        console.log(this.props) // prints undefined
        // but props parameter is still available
        console.log(props) // prints { name: 'John', age: 42 }
    }

41	What is reconciliation?
    When a component's props or state change, React decides whether an actual DOM update is necessary by comparing the newly returned element with the previously rendered one
    When they are not equal, React will update the DOM. This process is called reconciliation.

44	Is lazy function supports named exports?
    currently React.lazy function supports default exports only
    Suppose we already have named exports, we can create intermidiate component and make it default export, so we can use lazy
    Eg
    // IntermediateComponent.js
    export { SomeComponent as default } from "./MyOldComponents.js";
    //
    const SomeComponent = lazy(() => import("./IntermediateComponent.js"));

45	Why React uses className over class attribute?
    class is keyword to define class
    className is prop to define css classes on an element 

47	Why fragments are better than container divs?
    Fragments are a bit faster and use less memory by not creating an extra DOM node
    This only has a real benefit on very large and deep trees.
    Some CSS mechanisms like Flexbox and CSS Grid have a special parent-child relationships, and adding divs in the middle makes it hard to keep the desired layout.

48	What are portals in React?
    Portal is a recommended way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.
    Eg
    ReactDOM.createPortal(child, container)
    The first argument is any render-able React child, such as an element, string, or fragment. The second argument is a DOM element.

49	What are stateless components?
    If the behaviour of a component is independent of its state then it can be a stateless component.

50	What are stateful components?
    If the behaviour of a component is dependent on the state of the component then it can be termed as stateful component. 

51	How to apply validation on props in React?
    When the application is running in development mode, React will automatically check all props that we set on components to make sure they have correct type. If the type is incorrect, React will generate warning messages in the console
    Eg
    import React from 'react'
    import PropTypes from 'prop-types'

    function User({name, age}) {
        return (
            <>
            <h1>{`Welcome, ${name}`}</h1>
            <h2>{`Age, ${age}`}</h2>
            </>
        )
    }

    User.propTypes = {
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired
    }

52	What are the advantages of React?
    Below are the list of main advantages of React,

    Increases the application's performance with Virtual DOM.
    JSX makes code easy to read and write.
    It renders both on client and server side (SSR).
    Easy to integrate with frameworks (Angular, Backbone) since it is only a view library.
    Easy to write unit and integration tests with tools such as Jest.

53	What are the limitations of React?
    Apart from the advantages, there are few limitations of React too,

    React is just a view library, not a full framework.
    There is a learning curve for beginners who are new to web development.
    Integrating React into a traditional MVC framework requires some additional configuration.
    The code complexity increases with inline templating and JSX.
    Too many smaller components leading to over engineering or boilerplate.

54	What are error boundaries in React v16
    Error boundaries are components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.
    A class component becomes an error boundary if it defines a new lifecycle method called componentDidCatch(error, info) or static getDerivedStateFromError() :
    Eg
    class ErrorBoundary extends React.Component {
        constructor(props) {
            super(props)
            this.state = { hasError: false }
        }

        componentDidCatch(error, info) {
            // You can also log the error to an error reporting service
            logErrorToMyService(error, info)
        }

        static getDerivedStateFromError(error) {
            // Update state so the next render will show the fallback UI.
            return { hasError: true };
        }

        render() {
            if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>{'Something went wrong.'}</h1>
            }
            return this.props.children
        }
    }
    use
    <ErrorBoundary>
        <MyWidget />
    </ErrorBoundary>


55	How are error boundaries handled in React v15?
    React v15 provided very basic support for error boundaries using unstable_handleError method. It has been renamed to componentDidCatch in React v16.


56	What are the recommended ways for static type checking?
    Normally we use PropTypes library
    For large code bases, it is recommended to use static type checkers such as Flow or TypeScript, that perform type checking at compile time and provide auto-completion features.

57	What is the use of react-dom package?
    The react-dom package provides DOM-specific methods that can be used at the top level of your app. Most of the components are not required to use this module. Some of the methods of this package are:
    render()
    hydrate()
    unmountComponentAtNode()
    findDOMNode()
    createPortal()

58	What is the purpose of render method of react-dom?
    This method is used to render a React element into the DOM in the supplied container and return a reference to the component. 
    Eg
    ReactDOM.render(element, container, [callback])

59	What is ReactDOMServer?
60	How to use InnerHtml in React?
    The dangerouslySetInnerHTML attribute is React's replacement for using innerHTML in the browser DOM
    function createMarkup() {
        return { __html: 'First &middot; Second' }
    }

    function MyComponent() {
        return <div dangerouslySetInnerHTML={createMarkup()} />
    }

61	How to use styles in React?
    Use javascript object to set styles
    const divStyle = {
        color: 'blue',
        backgroundImage: 'url(' + imgUrl + ')'
    };

    function HelloWorldComponent() {
        return <div style={divStyle}>Hello World!</div>
    }

64	What is the impact of indexes as keys?
    Keys should be stable, predictable, and unique so that React can keep track of elements.
    Indexes can be changed in case of delete element or sort elements,so it is recomended to use ids, 

73	What is CRA and its benefits?
    The create-react-app CLI tool allows you to quickly create & run React applications with no configuration step
    It includes everything we need to build a React app:

    React, JSX, ES6, and Flow syntax support.
    Language extras beyond ES6 like the object spread operator.
    Autoprefixed CSS, so you don’t need -webkit- or other prefixes.
    A fast interactive unit test runner with built-in support for coverage reporting.
    A live development server that warns about common mistakes.
    A build script to bundle JS, CSS, and images for production, with hashes and sourcemaps.

74	What is the lifecycle methods order in mounting?
    The lifecycle methods are called in the following order when an instance of a component is being created and inserted into the DOM.
    constructor()
    static getDerivedStateFromProps()
    render()
    componentDidMount()

75	What are the lifecycle methods going to be deprecated in React v16?
    componentWillMount()
    componentWillReceiveProps()
    componentWillUpdate()

76	What is the purpose of getDerivedStateFromProps() lifecycle method?
    The new static getDerivedStateFromProps() lifecycle method is invoked after a component is instantiated as well as before it is re-rendered.
    It can return an object to update state, or null to indicate that the new props do not require any state updates.
    This lifecycle method along with componentDidUpdate() covers all the use cases of componentWillReceiveProps().
    Eg
    class MyComponent extends React.Component {
        static getDerivedStateFromProps(props, state) {
            // ...
        }
    }

77	What is the purpose of getSnapshotBeforeUpdate() lifecycle method?
    The new getSnapshotBeforeUpdate() lifecycle method is called right before DOM updates
    The return value from this method will be passed as the third parameter to componentDidUpdate()
    class MyComponent extends React.Component {
      getSnapshotBeforeUpdate(prevProps, prevState) {
        // ...
      }
    }

80	What is the recommended ordering of methods in component class?
  static methods
  constructor()
  getChildContext()
  componentWillMount()
  componentDidMount()
  componentWillReceiveProps()
  shouldComponentUpdate()
  componentWillUpdate()
  componentDidUpdate()
  componentWillUnmount()
  click handlers or event handlers like onClickSubmit() or onChangeDescription()
  getter methods for render like getSelectReason() or getFooterContent()
  optional render methods like renderNavigation() or renderProfilePicture()
  render()


83	What is strict mode in React?
  React.StrictMode is a useful component for highlighting potential problems in an application.
  Just like <Fragment>. <StrictMode> does not render any extra DOM elements.

88	Are custom DOM attributes supported in React v16?
  Yes. In the past, React used to ignore unknown DOM attributes.
  In React v16 any unknown attributes will end up in the DOM:

92	How to loop inside JSX?
  You can simply use Array.prototype.map with ES6 arrow function syntax.
  For example, the items array of objects is mapped into an array of components:
  Eg
  <tbody>
    {items.map(item => <SomeComponent key={item.id} name={item.name} />)}
  </tbody>
  Cannot iterate using for loop

93	How do you access props in attribute quotes?
  <img className='image' src={`images/${props.image}`} />

95	How to conditionally apply class attributes?
  <div className="btn-panel {this.props.visible ? 'show' : 'hidden'}">

96	What is the difference between React and ReactDOM?
  The react package contains React.createElement(), React.Component, React.Children, and other helpers related to elements and component classes.
  The react-dom package contains ReactDOM.render()
  
97	Why ReactDOM is separated from React?
  
98	How to use React label element?
  Since for is a reserved keyword in JavaScript, use htmlFor instead.
  <label htmlFor={'user'}>{'User'}</label>
  <input type={'text'} id={'user'} />

99	How to combine multiple inline style objects?
100	How to re-render the view when the browser is resized?
101	What is the difference between setState and replaceState methods?
102	How to listen to state changes?
103	What is the recommended approach of removing an array element in react state?
104	Is it possible to use React without rendering HTML?
105	How to pretty print JSON with React?
106	Why you can't update props in React?
  The React philosophy is that props should be immutable and top-down
  This means that a parent can send any prop values to a child, but the child can't modify received props.

107	How to focus an input element on page load?
  Using ref
  import React, {useEffect, useRef} from 'react';

  const App = () => {
    const inputElRef = useRef(null)
    
    useEffect(()=>{
      inputElRef.current.focus()
    }, [])
    
    return(
      <div>
        <input
          defaultValue={'Won\'t focus'}
        />
        <input
          ref={inputElRef}
          defaultValue={'Will focus'}
        />
      </div>
    )
  }

  ReactDOM.render(<App />, document.getElementById('app'))


108	What are the possible ways of updating objects in state?
110	How can we find the version of React at runtime in the browser?
111	What are the approaches to include polyfills in your create-react-app?
112	How to use https instead of http in create-react-app?
113	How to avoid using relative path imports in create-react-app?
114	How to add Google Analytics for react-router?
115	How to update a component every second?
116	How do you apply vendor prefixes to inline styles in React?
117	How to import and export components using react and ES6?
118	What are the exceptions on React component naming?
119	Why is a component constructor called only once?
120	How to define constants in React?
121	How to programmatically trigger click event in React?
  Usingref we can have reference on element, then 
  ref.click()

122	Is it possible to use async/await in plain React?
123	What are the common folder structures for React?
124	What are the popular packages for animation?
  React Transition Group and React Motion are popular animation packages in React ecosystem.

125	What is the benefit of styles modules?
  It is recommended to avoid hard coding style values in components. 
  Any values that are likely to be used across different UI components should be extracted into their own modules.

126	What are the popular React-specific linters?
127	How to make AJAX call and In which component lifecycle methods should I make an AJAX call?
128	What are render props?

Lifecycle methods in React class component
How to achive each lifecycle method infunction component

129	What is React Router?
  React Router is a powerful routing library built on top of React that helps you add new screens and flows to your application incredibly quickly, all while keeping the URL in sync with what's being displayed on the page.

130	How React Router is different from history library?
  React Router is a wrapper around the history library which handles interaction with the browser's window.history with its browser and hash histories.
  It also provides memory history which is useful for environments that don't have global history, such as mobile app development (React Native) and unit testing with Node.

131	What are the <Router> components of React Router v4?
  React Router v4 provides below 3 <Router> components:

  <BrowserRouter>
    <HashRouter>
  <MemoryRouter>
  The above components will create browser, hash, and memory history instances.

132	What is the purpose of push and replace methods of history?
  If you think of the history as an array of visited locations, push() will add a new location to the array and replace() will replace the current location in the array with the new one.

133	How do you programmatically navigate using React router v4?
  1. Using the withRouter() higher-order function:
  The withRouter() higher-order function will inject the history object as a prop of the component. This object provides push() and replace() methods to avoid the usage of context.
  import { withRouter } from 'react-router-dom' // this also works with 'react-router-native'

  const Button = withRouter(({ history }) => (
    <button
      type='button'
      onClick={() => { history.push('/new-location') }}
    >
      {'Click Me!'}
    </button>
  ))

  2. Using <Route> component and render props pattern:
  The <Route> component passes the same props as withRouter(), so you will be able to access the history methods through the history prop.
  import { Route } from 'react-router-dom'

  const Button = () => (
    <Route render={({ history }) => (
      <button
        type='button'
        onClick={() => { history.push('/new-location') }}
      >
        {'Click Me!'}
      </button>
    )} />
  )

  3. Using context: This option is not recommended and treated as unstable API.
  const Button = (props, context) => (
    <button
      type='button'
      onClick={() => {
        context.history.push('/new-location')
      }}
    >
      {'Click Me!'}
    </button>
  )

  Button.contextTypes = {
    history: React.PropTypes.shape({
      push: React.PropTypes.func.isRequired
    })
  }


134	How to get query parameters in React Router v4
  The ability to parse query strings was taken out of React Router v4 because there have been user requests over the years to support different implementation.
  So the decision has been given to users to choose the implementation they like. The recommended approach is to use query strings library.
  
  const queryString = require('query-string');
  const parsed = queryString.parse(props.location.search);

  You can also use URLSearchParams if you want something native:

  const params = new URLSearchParams(props.location.search)
  const foo = params.get('name')


135	Why you get "Router may have only one child element" warning?
  You have to wrap your Route's in a <Switch> block because <Switch> is unique in that it renders a route exclusively.

  At first you need to add Switch to your imports:

  import { Switch, Router, Route } from 'react-router'
  Then define the routes within <Switch> block:

  <Router>
    <Switch>
      <Route {/* ... */} />
      <Route {/* ... */} />
    </Switch>
  </Router>

136	How to pass params to history.push method in React Router v4?
  While navigating you can pass props to the history object:

  this.props.history.push({
    pathname: '/template',
    search: '?name=sudheer',
    state: { detail: response.data }
  })
  The search property is used to pass query params in push() method.

137	How to implement default or NotFound page?
  A <Switch> renders the first child <Route> that matches. A <Route> with no path always matches. So you just need to simply drop path attribute as below

  <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/user" component={User}/>
    <Route component={NotFound} />
  </Switch>

138	How to get history on React Router v4?

139	How to perform automatic redirect after login?
  The react-router package provides <Redirect> component in React Router. 
  Rendering a <Redirect> will navigate to a new location.
  import React, { Component } from 'react'
  import { Redirect } from 'react-router'

  export default class LoginComponent extends Component {
    render() {
      if (this.state.isLoggedIn === true) {
        return <Redirect to="/your/redirect/page" />
      } else {
        return <div>{'Login Please'}</div>
      }
    }
  }

152	What is Flux?
  Flux is an application design architecture used as a replacement for the more traditional MVC pattern

153	What is Redux?
  Redux is a predictable state container for JavaScript apps based on the Flux design pattern
  Redux can be used together with React, or with any other view library. It is tiny (about 2kB) and has no dependencies

154	What are the core principles of Redux?
  Redux follows three fundamental principles
  Single source of truth
    The state of your whole application is stored in an object tree within a single store
  State is read-only
    The only way to change the state is to emit an action, an object describing what happened.
  Changes are made with pure functions
    To specify how the state tree is transformed by actions, you write reducers.
    Reducers are just pure functions that take the previous state and an action as parameters, and return the next state.

155	What are the downsides of Redux compared to Flux?
156	What is the difference between mapStateToProps() and mapDispatchToProps()?
157	Can I dispatch an action in reducer?
  Dispatching an action within a reducer is an anti-pattern
  Your reducer should be without side effects, simply digesting the action payload and returning a new state object
  Adding listeners and dispatching actions within the reducer can lead to chained actions and other side effects.

158	How to access Redux store outside a component?
  You just need to export the store from the module where it created with createStore(). Also, it shouldn't pollute the global window object.
  store = createStore(myReducer)
  export default store

159	What are the drawbacks of MVW pattern
160	Are there any similarities between Redux and RxJS?
161	How to dispatch an action on load?
  You can dispatch an action in componentDidMount() method and in render() method you can verify the data.

  class App extends Component {
    componentDidMount() {
      this.props.fetchData()
    }

    render() {
      return this.props.isLoaded
        ? <div>{'Loaded'}</div>
        : <div>{'Not Loaded'}</div>
    }
  }

  const mapStateToProps = (state) => ({
    isLoaded: state.isLoaded
  })

  const mapDispatchToProps = { fetchData }

  export default connect(mapStateToProps, mapDispatchToProps)(App)

162	How to use connect from React Redux?
163	How to reset state in Redux?
164	Whats the purpose of at symbol in the redux connect decorator?
165	What is the difference between React context and React Redux?
  You can use Context in your application directly and is going to be great for passing down data to deeply nested components which what it was designed for.

  Whereas Redux is much more powerful and provides a large number of features that the Context API doesn't provide. Also, React Redux uses context internally but it doesn't expose this fact in the public API.

166	Why are Redux state functions called reducers?
  Reducers always return the accumulation of the state
  Therefore, they act as a reducer of state. 
  Each time a Redux reducer is called, the state and action are passed as parameters.
  This state is then reduced (or accumulated) based on the action, and then the next state is returned

167	How to make AJAX request in Redux?
  You can use redux-thunk middleware which allows you to define async actions.

168	Should I keep all component's state in Redux store?
  Keep your data in the Redux store, and the UI related state internally in the component.

169	What is the proper way to access Redux store?
  The best way to access your store in a component is to use the connect() function, that creates a new component that wraps around your existing one.
  This pattern is called Higher-Order Components, and is generally the preferred way of extending a component's functionality in React. 
  
170	What is the difference between component and container in React Redux?
171	What is the purpose of the constants in Redux?
172	What are the different ways to write mapDispatchToProps()?
173	What is the use of the ownProps parameter in mapStateToProps() and mapDispatchToProps()?
174	How to structure Redux top level directories?
175	What is redux-saga?
176	What is the mental model of redux-saga?
177	What are the differences between call and put in redux-saga
178	What is Redux Thunk?
179	What are the differences between redux-saga and redux-thunk
180	What is Redux DevTools?
181	What are the features of Redux DevTools?
182	What are Redux selectors and Why to use them?
183	What is Redux Form?
184	What are the main features of Redux Form?
185	How to add multiple middlewares to Redux?
186	How to set initial state in Redux?
187	How Relay is different from Redux?
188	What is an action in Redux?
