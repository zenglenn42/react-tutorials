import React from 'react';
import MemeGenerator from '../vschool/memeGenerator/MemeGenerator'
import JokeList from '../vschool/jokeList/JokeList'
import TodoList from '../vschool/todo/TodoList'
import ProductCatalog from '../vschool/mapComponents/ProductCatalog'
import HelloClass from '../vschool/classComponents/HelloClass'
import LoginState from '../vschool/state1/LoginState'
import CountState from '../vschool/state2/CountState'
import ConditionalRender from '../vschool/conditionalRender/ConditionalRender'
import TravelForm from '../vschool/forms/TravelForm'
import { FaYoutube } from 'react-icons/fa';
import CodeIcon from '@material-ui/icons/Code';
import GitHubIcon from '@material-ui/icons/GitHub';
import TodoListUnstyled from '../brilliant-react-hooks/TodoListUnstyled'
import TodoListStyled from '../brilliant-react-hooks/TodoListStyled'
import TodoWithForm from '../brilliant-react-hooks/TodoWithForm'
import TodoWithDone from '../brilliant-react-hooks/TodoWithDone'
import TodoWithDel from '../brilliant-react-hooks/TodoWithDel'
import SimpleState from '../wesbos-context/SimpleState'
import PropDrilling from '../wesbos-context/PropDrilling'
import SimpleContext from '../wesbos-context/SimpleContext'
import MutateContext from '../wesbos-context/MutateContext'
import { AppRouter as AppRouter0 } from '../benawad-useContext/0-router-base/AppRouter'
import { AppRouter as AppRouter1 } from '../benawad-useContext/1-read-msg/AppRouter'
import { AppRouter as AppRouter2 } from '../benawad-useContext/2-mutable-context/AppRouter'
import { AppRouter as AppRouter3 } from '../benawad-useContext/3-login-context/AppRouter'
import { App as MaterialUIIntro1 } from '../sistilli-material-ui/1-intro/App1'
import { App as MaterialUIIntro2 } from '../sistilli-material-ui/1-intro/override-theme/App2'
import { App as MaterialUIIntro3 } from '../sistilli-material-ui/1-intro/App3'
import { App as MaterialUIIntro4 } from '../sistilli-material-ui/1-intro/App4'
import { App as MaterialUIUXCode1 } from '../sistilli-material-ui/2-uiux/1-starter/App'
import { App as MaterialUIUXCode2 } from '../sistilli-material-ui/2-uiux/2-app-layout/App'
import { App as MaterialUIUXCode3 } from '../sistilli-material-ui/2-uiux/3-content-layout/App'
import { App as MaterialUIUXCode4 } from '../sistilli-material-ui/2-uiux/4-header-appbar/App'
import { App as MaterialUIUXCode5 } from '../sistilli-material-ui/2-uiux/5-header-content/App'
import { App as MaterialUIUXCode6 } from '../sistilli-material-ui/2-uiux/6-simple-card/App'
import { App as MaterialUIUXCode7 } from '../sistilli-material-ui/2-uiux/7-content-grid/App'
import { App as MaterialUIUXCode8 } from '../sistilli-material-ui/2-uiux/8-content-card/App'
import { App as MaterialUIUXCode9 } from '../sistilli-material-ui/2-uiux/9-final-products/App'
import { App as BaRouter1}  from '../benawad-router/js/1-start/App'
import { App as BaRouter2}  from '../benawad-router/js/2-basic-routes/App'
import { App as BaRouter3}  from '../benawad-router/js/3-exact-routes/App'
import { App as BaRouter4}  from '../benawad-router/js/4-switch/App'
import { App as BaRouter5}  from '../benawad-router/js/5-404-route/App'
import { App as BaRouter6}  from '../benawad-router/js/6-link-to/App'
import { App as BaRouter7}  from '../benawad-router/js/7-history-push/App'
import { App as BaRouter8}  from '../benawad-router/js/8-location-prop/App'
import { App as BaRouter9}  from '../benawad-router/js/9-match-prop/App'
import { App as BaRouter10}  from '../benawad-router/js/10-withRouter/App'
import { App as MaterialUImakeStyles1 } from '../sistilli-material-ui/3-makeStyles/1-starter/App'

const TutorialData = [
  {
    playlist: [
      {
        primaryText: "Introduction to React",
        summary: {
          provider: "vschool.io",
          courseTitle: "Learn React JS - Full Course for Beginners",
          demoKey: "summary",
          refLink: {
            tipText: "youtube",
            href: "https://youtu.be/DLX62G4lc44",
            icon: <FaYoutube style={{color: "red"}}/>
          },
          codeLink: {
            tipText: "github",
            href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/vschool",
            icon: <GitHubIcon />         
          },
          level: "introductory",
          descText: "This nicely paced, 5-hour introduction to React offers plenty of progressive practice.",
          date: "2018-12-18",
          author: "Bob Ziroll",
          features: [
            {
              bulletPoint: "Props",
              bulletText: "Use props to customize components."
            },
            {
              bulletPoint: "Class components",
              bulletText: "Used especially for stateful components.  Introduction to lifecycle methods."
            },
            {
              bulletPoint: "Function components",
              bulletText: "Used especially for presentational components. No treatment of 'hooks'."
            },
            {
              bulletPoint: "Forms",
              bulletText: "Use component state to drive interactive forms.  Write event handlers."
            },
            {
              bulletPoint: "Fetch",
              bulletText: "Use fetch inside of a lifecycle method to make API calls across the net."
            },
          ],
        },
        snapshots: [
          {
            demoKey: "todo",
            primaryText: "Todo App",
            secondaryText: "11. Forms & MVC",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/DLX62G4lc44?t=2896",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/vschool/todo",
              icon: <GitHubIcon />             
            },
            demoComponent: <TodoList />
          },
          {
            demoKey: "jokeList",
            primaryText: "Joke List",
            secondaryText: "20. Props and Styling",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/DLX62G4lc44?t=5384",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/vschool/jokeList",
              icon: <GitHubIcon />           
            },
            demoComponent: <JokeList />
          },
          {
            demoKey: "mapComponents",
            primaryText: "Product Catalog",
            secondaryText: "22. Mapping Components",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/DLX62G4lc44?t=6513",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/vschool/mapComponents",
              icon: <GitHubIcon />             
            },
            demoComponent: <ProductCatalog />
          },
          {
            demoKey: "classComponents",
            primaryText: "Hello, Class",
            secondaryText: "25. Class Components",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/DLX62G4lc44?t=7421",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/vschool/classComponents",
              icon: <GitHubIcon />             
            },
            demoComponent: <HelloClass />
          },
          {
            demoKey: "loginState",
            primaryText: "Login State",
            secondaryText: "27. State (part 1)",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/DLX62G4lc44?t=7935",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/vschool/state1",
              icon: <GitHubIcon />           
            },
            demoComponent: <LoginState />
          },
          {
            demoKey: "countState",
            primaryText: "Change State",
            secondaryText: "28. State (part 2)",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/DLX62G4lc44?t=8153",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/vschool/state2",
              icon: <GitHubIcon />           
            },
            demoComponent: <CountState />
          },
          {
            demoKey: "conditionalRender",
            primaryText: "Login/Logout",
            secondaryText: "38. Conditional Render",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/DLX62G4lc44?t=11674",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/vschool/conditionalRender",
              icon: <GitHubIcon />           
            },
            demoComponent: <ConditionalRender />
          },
          {
            demoKey: "travelForm",
            primaryText: "Travel Form",
            secondaryText: "43. Forms",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/DLX62G4lc44?t=14666",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/vschool/forms",
              icon: <GitHubIcon />           
            },
            demoComponent: <TravelForm />
          },
          {
            demoKey: "memeGenerator",
            primaryText: "Meme Generator",
            secondaryText: "45. Capstone Project",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/DLX62G4lc44?t=16569",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/vschool/memeGenerator",
              icon: <GitHubIcon />           
            },
            demoComponent: <MemeGenerator />
          }
        ]
      },
    ]
  },
  {
    playlist: [
      {
        primaryText: "Introduction to Hooks",
        summary: {
          provider: "Traversy Media",
          courseTitle: "Introducing React Hooks",
          demoKey: "summary",
          refLink: {
            tipText: "youtube",
            href: "https://youtu.be/mxK8b99iJTg",
            icon: <FaYoutube style={{color: "red"}}/>
          },
          codeLink: {
            tipText: "codesandbox",
            href: "https://codesandbox.io/s/oj3qm2zq06",  
            icon: <CodeIcon />       
          },
          level: "introductory",
          descText: "This 30 minute tutorial introduces hooks, a means of adding state to function-based components.",
          date: "2018-11-15",
          author: "Kapehe, Brad Traversy",
          features: [
            {
              bulletPoint: "Todo list",
              bulletText: "Manage a todo list by adding, completing, and deleting items."
            },
            {
              bulletPoint: "React hook, useState()",
              bulletText: "Manage state within function-based list and input form components."
            },
          ],
        },
        snapshots: [
          {
            demoKey: "todo-unstyled",
            primaryText: "Todo",
            secondaryText: "Unstyled list",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/mxK8b99iJTg?t=442",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/brilliant-react-hooks/TodoListUnstyled.js",
              icon: <GitHubIcon />            
            },
            demoComponent: <TodoListUnstyled />
          },
          {
            demoKey: "todo-styled",
            primaryText: "Todo Styled",
            secondaryText: "Styled list",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/mxK8b99iJTg?t=492",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/brilliant-react-hooks/TodoListStyled.js",
              icon: <GitHubIcon />            
            },
            demoComponent: <TodoListStyled />
          },
          {
            demoKey: "todo-w-form",
            primaryText: "Todo with Form",
            secondaryText: "Add new items",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/mxK8b99iJTg?t=804",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/brilliant-react-hooks/TodoWithForm.js",
              icon: <GitHubIcon />            
            },
            demoComponent: <TodoWithForm />
          },
          {
            demoKey: "todo-w-done",
            primaryText: "Todo with Done",
            secondaryText: "Mark done items",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/mxK8b99iJTg?t=1016",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/brilliant-react-hooks/TodoWithDone.js",
              icon: <GitHubIcon />            
            },
            demoComponent: <TodoWithDone />
          },
          {
            demoKey: "todo-w-del",
            primaryText: "Todo with Delete",
            secondaryText: "Delete items",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/mxK8b99iJTg?t=1175",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/brilliant-react-hooks/TodoWithDel.js",
              icon: <GitHubIcon />            
            },
            demoComponent: <TodoWithDel />
          },
        ]
      },
    ]
  },
  {
    playlist: [
      {
        primaryText: "Context API",
        summary: {
          provider: "Wes Bos",
          courseTitle: "React Context API",
          demoKey: "summary",
          refLink: {
            tipText: "youtube",
            href: "https://youtu.be/XLJN4JfniH4",
            icon: <FaYoutube style={{color: "red"}}/>
          },
          codeLink: {
            tipText: "github",
            href: "https://github.com/wesbos/React-Context",
            icon: <GitHubIcon />            
          },
          level: "introductory",
          descText: "This spare 15 minute tutorial introduces React's Context API, a lightweight data store for managing state outside your components.",
          date: "2018-03-13",
          author: "Wes Bos",
          features: [
            {
              bulletPoint: "Class-based implementation",
              bulletText: "Learn about React.createContext(), <Context.Provider>, <Context.Consumer>"
            },
            {
              bulletPoint: "Applicability",
              bulletText: "Fits between lightweight component state and heavy duty datastores like Redux."
            },
            {
              bulletPoint: "State for nested children",
              bulletText: "Avoid 'prop-drilling' when passing state to deeply nested child components."
            }
          ],
        },
        snapshots: [
          {
            demoKey: "wb-context-simple",
            primaryText: "Simple state",
            secondaryText: "Pass state with prop",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/XLJN4JfniH4?t=94",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/wesbos-context/SimpleState.js",
              icon: <GitHubIcon />            
            },
            demoComponent: <SimpleState />
          },
          {
            demoKey: "wb-context-prop-drilling",
            primaryText: "Prop drilling",
            secondaryText: "Pass state deeply",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/XLJN4JfniH4?t=178",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/wesbos-context/PropDrilling.js",
              icon: <GitHubIcon />            
            },
            demoComponent: <PropDrilling />
          },
          {
            demoKey: "wb-simple-context",
            primaryText: "Read context",
            secondaryText: "Get state from context",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/XLJN4JfniH4?t=295",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/wesbos-context/SimpleContext.js",
              icon: <GitHubIcon />            
            },
            demoComponent: <SimpleContext />
          },
          {
            demoKey: "wb-mutate-context",
            primaryText: "Change context",
            secondaryText: "Mutate state within context",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/XLJN4JfniH4?t=755",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/wesbos-context/MutateContext.js",
              icon: <GitHubIcon />           
            },
            demoComponent: <MutateContext />
          },
        ]
      },
    ]
  },
  {
    playlist: [
      {
        primaryText: "useContext Hook",
        summary: {
          provider: "Ben Awad",
          courseTitle: "useContext (Storing a User)",
          demoKey: "summary",
          refLink: {
            tipText: "youtube",
            href: "https://youtu.be/lhMKvyLRWo0",
            icon: <FaYoutube style={{color: "red"}}/>
          },
          codeLink: {
            tipText: "github",
            href: "https://github.com/benawad/react-hooks-tutorial/tree/7_useContext",
            icon: <GitHubIcon />            
          },
          level: "introductory",
          descText: "This lean but rich 10 minute tutorial introduces useContext, the hooks version of React's Context API. In this case, a user's login identity is stored and shared among components as state within a context store.",
          date: "2019-06-29",
          author: "Ben Awad",
          features: [
            {
              bulletPoint: "Easily share state",
              bulletText: "Share state with deeply nested child components without prop-drilling.",
            },
            {
              bulletPoint: "createContext()",
              bulletText: "Learn to create a context data store with createContext()"
            },
            {
              bulletPoint: "useContext()",
              bulletText: "Subscribe to context state with useContext()"
            },
            {
              bulletPoint: "Works nicely with useState()",
              bulletText: "Can store useState() output (i.e., getter/setter) within a context."
            },
            {
              bulletPoint: "useMemo()",
              bulletText: "Minimize component re-rendering."
            },
            {
              bulletPoint: "React Router",
              bulletText: "Features skeleton app that uses <Router> and <Route> to achieve effect of multi-page app within single page architecutre.",
            },
            {
              bulletPoint: "async / await",
              bulletText: "Mock up a backend api call to fetch a fake user during development.",
            }
          ],
        },
        snapshots: [
          {
            demoKey: "ba-router-base",
            primaryText: "Starter template",
            secondaryText: "Router-based starter code",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/lhMKvyLRWo0",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/benawad-useContext/0-router-base",
              icon: <GitHubIcon />            
            },
            demoComponent: <AppRouter0 />
          },
          {
            demoKey: "ba-read-context-msg",
            primaryText: "Simple context",
            secondaryText: "Read string from context",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/lhMKvyLRWo0?t=63",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/benawad-useContext/1-read-msg",
              icon: <GitHubIcon />            
            },
            demoComponent: <AppRouter1 />
          },
          {
            demoKey: "ba-store-state",
            primaryText: "Mutable context",
            secondaryText: "useState + useContext",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/lhMKvyLRWo0?t=249",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/benawad-useContext/2-mutable-context",
              icon: <GitHubIcon />            
            },
            demoComponent: <AppRouter2 />
          },
          {
            demoKey: "ba-login-context",
            primaryText: "Login context",
            secondaryText: "Manage user state",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/lhMKvyLRWo0?t=424",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/benawad-useContext/3-login-context",
              icon: <GitHubIcon />            
            },
            demoComponent: <AppRouter3 />
          },
        ]
      },
    ]
  },
  {
    playlist: [
      {
        primaryText: "React Router",
        summary: {
          provider: "Ben Awad",
          courseTitle: "React Router",
          demoKey: "summary",
          refLink: {
            tipText: "youtube",
            href: "https://www.youtube.com/watch?v=110dW3l5GQY",
            icon: <FaYoutube style={{color: "red"}}/>
          },
          codeLink: {
            tipText: "github",
            href: "https://github.com/benawad/react-router-example",
            icon: <GitHubIcon />            
          },
          level: "introductory",
          descText: "This 10 minute typescript-based tutorial introduces React Router, a means of giving your Single Page Applications the usability of multi-page applications without the overhead of separate requests to the server.",
          date: "2019-09-29",
          author: "Ben Awad",
          features: [
            {
              bulletPoint: "Make 'back' button work!",
              bulletText: "Allow for canonical browsing within SPA.",
            },
            {
              bulletPoint: "Understand <BrowserRouter>, <Route>, <Switch>",
              bulletText: "Render one or more React components when browser location matches a path.",
            },
            {
              bulletPoint: "Constrain path matching",
              bulletText: "With <Route exact ..> and <Switch>"
            },
            {
              bulletPoint: "404",
              bulletText: "Detect unknown url locations on the frontend."
            },
            {
              bulletPoint: "Change router path",
              bulletText: "With <Link to='path'> or with history.push('path')"
            },
            {
              bulletPoint: "Query string",
              bulletText: "Extract query strings from urls with 'search' prop."
            },
            {
              bulletPoint: "Parameters in paths",
              bulletText: "How to define path parameters and extract them with 'match' prop."
            },
            {
              bulletPoint: "withRouter() hoc",
              bulletText: "Give non-route components knowledge of router props.",
            },
          ],
        },
        snapshots: [
          {
            demoKey: "ba-react-router-base",
            primaryText: "Intro",
            secondaryText: "Starter code",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/110dW3l5GQY",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/benawad-router/js/1-start",
              icon: <GitHubIcon />            
            },
            demoComponent: <BaRouter1 />
          },
          {
            demoKey: "ba-react-router-basic-routes",
            primaryText: "Basic routes",
            secondaryText: "/ and /about",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/110dW3l5GQY?t=25",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/benawad-router/js/2-basic-routes",
              icon: <GitHubIcon />            
            },
            demoComponent: <BaRouter2 />
          },
          {
            demoKey: "ba-react-router-exact-routes",
            primaryText: "Exact routes",
            secondaryText: "<Route exact ..>",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/110dW3l5GQY?t=151",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/benawad-router/js/3-exact-routes",
              icon: <GitHubIcon />            
            },
            demoComponent: <BaRouter3 />
          },
          {
            demoKey: "ba-react-router-switch",
            primaryText: "Switch",
            secondaryText: "render first match",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/110dW3l5GQY?t=210",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/benawad-router/js/4-switch",
              icon: <GitHubIcon />            
            },
            demoComponent: <BaRouter4 />
          },
          {
            demoKey: "ba-react-router-404",
            primaryText: "404",
            secondaryText: "detect unknown route",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/110dW3l5GQY?t=270",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/benawad-router/js/5-404-route",
              icon: <GitHubIcon />            
            },
            demoComponent: <BaRouter5 />
          },
          {
            demoKey: "ba-react-router-link",
            primaryText: "Change route",
            secondaryText: "w/ <Link>",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/110dW3l5GQY?t=345",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/benawad-router/js/6-link-to",
              icon: <GitHubIcon />            
            },
            demoComponent: <BaRouter6 />
          },
          {
            demoKey: "ba-react-router-history-push",
            primaryText: "Change route",
            secondaryText: "history.push()",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/110dW3l5GQY?t=423",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/benawad-router/js/7-history-push",
              icon: <GitHubIcon />            
            },
            demoComponent: <BaRouter7 />
          },
          {
            demoKey: "ba-react-router-location-prop",
            primaryText: "Query string",
            secondaryText: "location prop",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/110dW3l5GQY?t=527",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/benawad-router/js/8-location-prop",
              icon: <GitHubIcon />            
            },
            demoComponent: <BaRouter8 />
          },
          {
            demoKey: "ba-react-router-match-prop",
            primaryText: "Url params",
            secondaryText: "match prop",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/110dW3l5GQY?t=578",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/benawad-router/js/9-match-prop",
              icon: <GitHubIcon />            
            },
            demoComponent: <BaRouter9 />
          },
          {
            demoKey: "ba-react-router-with-router",
            primaryText: "withRouter hoc",
            secondaryText: "share router props",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/110dW3l5GQY?t=849",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/benawad-router/js/10-withRouter",
              icon: <GitHubIcon />            
            },
            demoComponent: <BaRouter10 />
          },
        ]
      },
    ]
  },  
  {
    summary: {
      primaryText: "React + Material UI",
      provider: "Forge Coding",
      courseTitle: "React and Material UI",
      demoKey: "summary",
      refLink: {
        tipText: "youtube",
        href: "https://www.youtube.com/channel/UCoYzQqZNCRqqAomJwJ6yEdg",
        icon: <FaYoutube style={{color: "red"}}/>
      },
      codeLink: {
        tipText: "github",
        href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui",
        icon: <GitHubIcon />            
      },
      level: "introductory",
      descText: "Material UI is a library of React components informed by the Materialize design system.  This is a significant tutorial sequence of more than 20 videos.  Anthony has a very accessible presentation style and his content is well organized.  He also sprinkles in some advanced use-cases to add sophistication and elegance to your frontend implementations.",
      date: "2020-03-08",
      author: "Anthony Sistilli",
      features: [
        {
          bulletPoint: "Themes",
          bulletText: "Themes embody a collection of styling attributes that may be overridden.",
        },
        {
          bulletPoint: "Styles",
          bulletText: "Learn multiple ways to style and override component apperance.",
        },
        {
          bulletPoint: "Grids",
          bulletText: "Breakdowns some of the more tricky aspects of responsive grid layouts.",
        },
        {
          bulletPoint: "Components",
          bulletText: "Get a solid introduction to essential components and visual primitives.",
        },
        {
          bulletPoint: "Workflow",
          bulletText: "Go from design to code in a systematic manner.",
        },
      ],
    },
    playlist: [
      {
        primaryText: "#1 Introduction",
        summary: {
          provider: "Forge Coding",
          courseTitle: "Material UI #1: Introduction",
          demoKey: "summary",
          refLink: {
            tipText: "youtube",
            href: "https://www.youtube.com/watch?v=pHclLuRolzE",
            icon: <FaYoutube style={{color: "red"}}/>
          },
          codeLink: {
            tipText: "code",
            href: "https://codesandbox.io/s/eloquent-beaver-3j1l2",  
            icon: <CodeIcon />         
          },
          level: "introductory",
          descText: "Provides overview of Material UI component library for React",
          date: "2020-03-08",
          author: "Anthony Sistilli",
          features: [
            {
              bulletPoint: "Buttons",
              bulletText: "Style using props.",
            },
            {
              bulletPoint: "Themes",
              bulletText: "Override default theme with createMuiTheme",
            },
            {
              bulletPoint: "Typography",
              bulletText: "Text styling with props.",
            },
            {
              bulletPoint: "makeStyles",
              bulletText: "Surgical styling overrides.",
            },
          ],
        },
        snapshots: [
          {
            demoKey: "material-ui-intro-1",
            primaryText: "Buttons",
            secondaryText: "color & variant",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/pHclLuRolzE",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/1-intro/App1.js",
              icon: <GitHubIcon />           
            },
            demoComponent: <MaterialUIIntro1 />
          },
          {
            demoKey: "material-ui-intro-2",
            primaryText: "Themes",
            secondaryText: "Override colors",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/pHclLuRolzE?t=327",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/1-intro/override-theme",
              icon: <GitHubIcon />           
            },
            demoComponent: <MaterialUIIntro2 />
          },
          {
            demoKey: "material-ui-intro-3",
            primaryText: "Typography",
            secondaryText: "Text styling",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/pHclLuRolzE?t=597",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/1-intro/App3.js",
              icon: <GitHubIcon />           
            },
            demoComponent: <MaterialUIIntro3 />
          },
          {
            demoKey: "material-ui-intro-4",
            primaryText: "makeStyles hook",
            secondaryText: "Override via className",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/pHclLuRolzE?t=770",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/1-intro/App4.js",
              icon: <GitHubIcon />            
            },
            demoComponent: <MaterialUIIntro4 />
          },
        ]
      },
      {
        primaryText: "#2 Code a Design",
        summary: {
          provider: "Forge Coding",
          courseTitle: "Material UI #2: Code a UX Design",
          demoKey: "summary",
          refLink: {
            tipText: "youtube",
            href: "https://youtu.be/tKzSnjWPtEw",
            icon: <FaYoutube style={{color: "red"}}/>
          },
          codeLink: {
            tipText: "github",
            href: "https://github.com/AtotheY/material-ui-ux-video",  
            icon: <GitHubIcon />         
          },
          level: "introductory",
          descText: "Progresses from a Figma design of a product catalog page to a basic frontend implementation.",
          date: "2020-03-14",
          author: "Anthony Sistilli",
          features: [
            {
              bulletPoint: "Breakdown a design",
              bulletText: "Deconstruct a design into a collection of Material UI components.",
            },
            {
              bulletPoint: "Analyze spacial layout",
              bulletText: "Leverage <Grid> component at multiple levels of layout.",
            },
            {
              bulletPoint: "Map design features to components.",
              bulletText: "Use or augment primitives like <AppBar>, <Card>, and <IconButton>.",
            },
            {
              bulletPoint: "Develop workflow",
              bulletText: "Progress through implementation in structured way.",
            },
          ],
        },
        snapshots: [
          {
            demoKey: "material-ui-ux-1",
            primaryText: "Starter code",
            secondaryText: "Skeleton app",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/tKzSnjWPtEw?t=0",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/2-uiux/1-starter",
              icon: <GitHubIcon />           
            },
            demoComponent: <MaterialUIUXCode1 />
          },
          {
            demoKey: "material-ui-ux-2",
            primaryText: "App layout",
            secondaryText: "Using <Grid>",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/tKzSnjWPtEw?t=342",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/2-uiux/2-app-layout",
              icon: <GitHubIcon />           
            },
            demoComponent: <MaterialUIUXCode2 />
          }, 
          {
            demoKey: "material-ui-ux-3",
            primaryText: "Content layout",
            secondaryText: "& breakpoints",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/tKzSnjWPtEw?t=596",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/2-uiux/3-content-layout",
              icon: <GitHubIcon />           
            },
            demoComponent: <MaterialUIUXCode3 />
          },
          {
            demoKey: "material-ui-ux-4",
            primaryText: "Add header",
            secondaryText: "<AppBar>",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/tKzSnjWPtEw?t=855",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/2-uiux/4-header-appbar",
              icon: <GitHubIcon />           
            },
            demoComponent: <MaterialUIUXCode4 />
          },
          {
            demoKey: "material-ui-ux-5",
            primaryText: "Toolbar",
            secondaryText: "flex w/ makeStyles",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/tKzSnjWPtEw?t=996",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/2-uiux/5-header-content",
              icon: <GitHubIcon />           
            },
            demoComponent: <MaterialUIUXCode5 />
          },
          {
            demoKey: "material-ui-ux-6",
            primaryText: "Content",
            secondaryText: "simple card",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/tKzSnjWPtEw?t=1205",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/2-uiux/6-simple-card",
              icon: <GitHubIcon />           
            },
            demoComponent: <MaterialUIUXCode6 />
          },     
          {
            demoKey: "material-ui-ux-7",
            primaryText: "Content grid",
            secondaryText: "multi-card",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/tKzSnjWPtEw?t=1354",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/2-uiux/7-content-grid",
              icon: <GitHubIcon />           
            },
            demoComponent: <MaterialUIUXCode7 />
          },
          {
            demoKey: "material-ui-ux-8",
            primaryText: "Content card",
            secondaryText: "buildout",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/tKzSnjWPtEw?t=1624",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/2-uiux/8-content-card",
              icon: <GitHubIcon />           
            },
            demoComponent: <MaterialUIUXCode8 />
          },
          {
            demoKey: "material-ui-ux-9",
            primaryText: "Catalog",
            secondaryText: "data-driven",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/tKzSnjWPtEw?t=2068",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/2-uiux/9-final-products",
              icon: <GitHubIcon />           
            },
            demoComponent: <MaterialUIUXCode9 />
          },          
        ]
      },
      {
        primaryText: "#3 makeStyles",
        summary: {
          provider: "Forge Coding",
          courseTitle: "Material UI #3: makeStyles",
          demoKey: "summary",
          refLink: {
            tipText: "youtube",
            href: "https://youtu.be/tKzSnjWPtEw",
            icon: <FaYoutube style={{color: "red"}}/>
          },
          codeLink: {
            tipText: "github",
            href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/3-makeStyles",  
            icon: <GitHubIcon />         
          },
          level: "intermediate",
          descText: "Use the makeStyles hook with props or themes to customize your React components' appearance.",
          date: "2020-03-21",
          author: "Anthony Sistilli",
          features: [
            {
              bulletPoint: "What is JSS?",
              bulletText: "Increasingly popular way of blending CSS with JSX to style in React",
            },
            {
              bulletPoint: "Advanced use cases",
              bulletText: "Use props and themes to control style definitions.",
            },
            {
              bulletPoint: "classnames packge",
              bulletText: "Apply multiple styling classes with 3rd party package. ",
            },
            {
              bulletPoint: "Breakpoints",
              bulletText: "Change styles according to window size.",
            },
            {
              bulletPoint: "makeStyles vs withStyles",
              bulletText: "Pass style classes as props via withStyles higher order component.",
            },
          ],
        },
        snapshots: [
          {
            demoKey: "material-ui-useStyles-1",
            primaryText: "Starter code",
            secondaryText: "Skeleton app",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/k_AN49fA9g0?t=0",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/3-makeStyles/1-starter",
              icon: <GitHubIcon />           
            },
            demoComponent: <MaterialUImakeStyles1 />
          },         
        ]
      },      
    ]
  },  
]

export default TutorialData
