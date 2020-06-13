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

const TutorialData = [
{
      primaryText: "vschool.io",
      solutions: [
        {
          demoKey: "jokeList",
          primaryText: "Joke List",
          secondaryText: "20. Props and Styling",
          refLink: {
            tipText: "youtube",
            href: "https://youtu.be/DLX62G4lc44?t=5384"
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
            href: "https://youtu.be/DLX62G4lc44?t=6513"
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
            href: "https://youtu.be/DLX62G4lc44?t=7421"
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
            href: "https://youtu.be/DLX62G4lc44?t=7935"
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
            href: "https://youtu.be/DLX62G4lc44?t=8153"
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
            href: "https://youtu.be/DLX62G4lc44?t=11674"
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
            href: "https://youtu.be/DLX62G4lc44?t=14666"
          },
          codeLink: {
            tipText: "github",
            href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/vschool/forms"           
          },
          demoComponent: <TravelForm />
        },
        {
          demoKey: "todo",
          primaryText: "Todo List",
          secondaryText: "MVC and Forms",
          refLink: {
            tipText: "youtube",
            href: "https://youtu.be/DLX62G4lc44?t=2896"
          },
          codeLink: {
            tipText: "github",
            href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/vschool/todo"           
          },
          demoComponent: <TodoList />
        },
        {
          demoKey: "memeGenerator",
          primaryText: "Meme Generator",
          secondaryText: "43. Capstone Project",
          refLink: {
            tipText: "youtube",
            href: "https://youtu.be/DLX62G4lc44?t=16569"
          },
          codeLink: {
            tipText: "github",
            href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/vschool/memeGenerator"           
          },
          demoComponent: <MemeGenerator />
        },
        {
          demoKey: "splash"
        }
      ]
    },
]

export default TutorialData
