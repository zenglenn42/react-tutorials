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
import { App as MaterialUIIntro2 } from '../sistilli-material-ui/1-intro/App2'
import { App as MaterialUIIntro3 } from '../sistilli-material-ui/1-intro/App3'
import { App as MaterialUIIntro4 } from '../sistilli-material-ui/1-intro/App4'

const TutorialData = [
  {
    playlist: [
      {
        primaryText: "Bob Ziroll - Intro to React",
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
            href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/vschool"           
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
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/vschool/todo"           
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
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/vschool/jokeList"           
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
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/vschool/mapComponents"           
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
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/vschool/classComponents"           
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
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/vschool/state1"           
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
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/vschool/state2"           
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
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/vschool/conditionalRender"           
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
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/vschool/forms"           
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
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/vschool/memeGenerator"           
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
        primaryText: "Kapeche - Hooks",
        summary: {
          provider: "brilliant.org",
          courseTitle: "Introducing React Hooks",
          demoKey: "summary",
          refLink: {
            tipText: "youtube",
            href: "https://youtu.be/mxK8b99iJTg",
            icon: <FaYoutube style={{color: "red"}}/>
          },
          codeLink: {
            tipText: "github",
            href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/brilliant-react-hooks"           
          },
          level: "introductory",
          descText: "This 30 minute tutorial introduces hooks, a means of adding state to function-based components.",
          date: "2018-11-15",
          author: "Kapeche & Traversey Media",
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
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/brilliant-react-hooks/TodoListUnstyled.js"           
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
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/brilliant-react-hooks/TodoListStyled.js"           
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
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/brilliant-react-hooks/TodoWithForm.js"           
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
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/brilliant-react-hooks/TodoWithDone.js"           
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
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/brilliant-react-hooks/TodoWithDel.js"           
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
        primaryText: "Wes Bos - Context API",
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
            href: "https://github.com/wesbos/React-Context"           
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
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/wesbos-context/SimpleState.js"           
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
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/wesbos-context/PropDrilling.js"           
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
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/wesbos-context/SimpleContext.js"           
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
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/wesbos-context/MutateContext.js"           
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
        primaryText: "Ben Awad - useContext",
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
            href: "https://github.com/benawad/react-hooks-tutorial/tree/7_useContext"           
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
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/benawad-useContext/0-router-base"           
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
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/benawad-useContext/1-read-msg"           
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
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/benawad-useContext/2-mutable-context"           
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
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/benawad-useContext/3-login-context"           
            },
            demoComponent: <AppRouter3 />
          },
        ]
      },
    ]
  },
  {
    summary: {
      primaryText: "Sistilli - Material UI",
      provider: "Forge Coding",
      courseTitle: "React and Material UI",
      demoKey: "summary",
      refLink: {
        tipText: "youtube",
        href: "https://www.youtube.com/channel/UCoYzQqZNCRqqAomJwJ6yEdg",
        icon: <FaYoutube style={{color: "red"}}/>
      },
      codeLink: {
        tipText: "code",
        href: "http://theforge.ca"           
      },
      level: "introductory",
      descText: "Material UI is a library of React components informed by the Materialize design system.",
      date: "2020-03-08",
      author: "Anthony Sistilli",
      features: [
        {
          bulletPoint: "Themes",
          bulletText: "Themes embody a collection of styling attributes that may be overridden.",
        },
        {
          bulletPoint: "Styles",
          bulletText: "Styles associate visual attributes with class names.",
        },
      ],
    },
    playlist: [
      {
        primaryText: "#1 Introduction",
        summary: {
          provider: "Forge Coding",
          courseTitle: "React + Material UI #1: Introduction",
          demoKey: "summary",
          refLink: {
            tipText: "youtube",
            href: "https://www.youtube.com/watch?v=pHclLuRolzE",
            icon: <FaYoutube style={{color: "red"}}/>
          },
          codeLink: {
            tipText: "code",
            href: "https://codesandbox.io/s/eloquent-beaver-3j1l2"           
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
              bulletText: "Application-wide styling overrides.",
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
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/1-intro/App1.js"           
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
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/1-intro/App2.js"           
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
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/1-intro/App3.js"           
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
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/1-intro/App4.js"           
            },
            demoComponent: <MaterialUIIntro4 />
          },
        ]
      },
    ]
  },  
]

export default TutorialData
