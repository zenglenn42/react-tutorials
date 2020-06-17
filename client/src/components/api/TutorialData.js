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

const TutorialData = [
  {
      primaryText: "vschool.io",
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
      solutions: [
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
    {
      primaryText: "brilliant.org hooks",
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
            bulletPoint: "Todo List",
            bulletText: "Create a todo list with 'complete' and 'delete' buttons."
          },
          {
            bulletPoint: "Forms",
            bulletText: "Add new items with a simple form."
          },
          {
            bulletPoint: "State",
            bulletText: "Leverage useState() to create a variable to hold state along with a function to set state."
          },
        ],
      },
      solutions: [
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
      ]
    },
]

export default TutorialData
