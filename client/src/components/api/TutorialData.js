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
import { FaYoutube } from 'react-icons/fa'
import CodeIcon from '@material-ui/icons/Code'
import GitHubIcon from '@material-ui/icons/GitHub'
import Avatar from '@material-ui/core/Avatar'

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
import { App as MaterialUImakeStyles2 } from '../sistilli-material-ui/3-makeStyles/2-makeStyles/App'
import { App as MaterialUImakeStyles3 } from '../sistilli-material-ui/3-makeStyles/3-textStyle/App'
import { App as MaterialUImakeStyles4 } from '../sistilli-material-ui/3-makeStyles/4-props/App'
import { App as MaterialUImakeStyles5 } from '../sistilli-material-ui/3-makeStyles/5-props-multi/App'
import { App as MaterialUImakeStyles6 } from '../sistilli-material-ui/3-makeStyles/6-theme/App'
import { App as MaterialUImakeStyles7 } from '../sistilli-material-ui/3-makeStyles/7-props-and-theme/App'
import { App as MaterialUImakeStyles8 } from '../sistilli-material-ui/3-makeStyles/8-multi-class/App'
import { App as MaterialUIButton1 } from '../sistilli-material-ui/4-button/1-start/App'
import { App as MaterialUIButton2 } from '../sistilli-material-ui/4-button/2-button-docs/App'
import { App as MaterialUIButton3 } from '../sistilli-material-ui/4-button/3-icon-buttons/App'
import { App as MaterialUIText1 } from '../sistilli-material-ui/5-typography/1-props/App'
import { App as MaterialUIText2 } from '../sistilli-material-ui/5-typography/2-override/App'
import { App as MaterialUIText3 } from '../sistilli-material-ui/5-typography/3-theme/App'
import { App as MaterialUIText4 } from '../sistilli-material-ui/5-typography/4-themes/App'
import { App as MaterialUIThemes1 } from '../sistilli-material-ui/6-themes/1-intro/App'
import { App as MaterialUIThemes2 } from '../sistilli-material-ui/6-themes/2-create-theme/App'
import { App as MaterialUIThemes3 } from '../sistilli-material-ui/6-themes/3-breakpoint-style/App'
import { App as MaterialUIThemes4 } from '../sistilli-material-ui/6-themes/4-dark/App'
import { App as MaterialUIPaper1 }  from '../sistilli-material-ui/7-paper/1-elevation/App'
import { App as MaterialUIPaper2 }  from '../sistilli-material-ui/7-paper/2-square/App'
import { App as MaterialUIDark1 }  from '../sistilli-material-ui/8-dark/1-light/App'
import { App as MaterialUIDark2 }  from '../sistilli-material-ui/8-dark/2-dark/App'
import { App as MaterialUIDark3 }  from '../sistilli-material-ui/8-dark/3-toggle/App'
import { App as MaterialUIDark4 }  from '../sistilli-material-ui/8-dark/4-green/App'
import { App as MaterialUITemplateAlbum }  from '../sistilli-material-ui/9-templates/album/App'
import { App as MaterialUITemplateBlog }  from '../sistilli-material-ui/9-templates/blog/App'
import { App as MaterialUITemplateCheckout }  from '../sistilli-material-ui/9-templates/checkout/App'
import { App as MaterialUITemplateDashboard }  from '../sistilli-material-ui/9-templates/dashboard/App'
import { App as MaterialUITemplatePricing }  from '../sistilli-material-ui/9-templates/pricing/App'
import { App as MaterialUITemplateSignIn }  from '../sistilli-material-ui/9-templates/sign-in/App'
import { App as MaterialUITemplateSignInSide }  from '../sistilli-material-ui/9-templates/sign-in-side/App'
import { App as MaterialUITemplateSignUp }  from '../sistilli-material-ui/9-templates/sign-up/App'
import { App as MaterialUITemplateStickyFooter }  from '../sistilli-material-ui/9-templates/sticky-footer/App'
import { App as MaterialUIGrid1 }  from '../sistilli-material-ui/10-grid/1-start/App'
import { CenteredGrid as MaterialUIGrid2 }  from '../sistilli-material-ui/10-grid/2-doc-start/App'
import { CenteredGrid as MaterialUIGrid3 }  from '../sistilli-material-ui/10-grid/3-doc-336/App'
import { CenteredGrid as MaterialUIGrid4 }  from '../sistilli-material-ui/10-grid/4-doc-337/App'
import { CenteredGrid as MaterialUIGrid5 }  from '../sistilli-material-ui/10-grid/5-doc-xs-vs-sm/App'
import { CenteredGrid as MaterialUIGrid6 }  from '../sistilli-material-ui/10-grid/6-spacing/App'
import { CenteredGrid as MaterialUIGrid7 }  from '../sistilli-material-ui/10-grid/7-direction/App'
import { CenteredGrid as MaterialUIGrid8 }  from '../sistilli-material-ui/10-grid/8-nested/App'
import { CenteredGrid as MaterialUIGrid9 }  from '../sistilli-material-ui/10-grid/9-simple-layout/App'
import { App as MaterialUIGridCenter1 }  from '../sistilli-material-ui/11-grid-centering/1-start/App'
import { App as MaterialUIGridCenter2}  from '../sistilli-material-ui/11-grid-centering/2-justify/App'
import { App as MaterialUIGridCenter3}  from '../sistilli-material-ui/11-grid-centering/3-alignItems/App'
import { App as MaterialUIGridCenter4}  from '../sistilli-material-ui/11-grid-centering/4-justify-column/App'
import { App as MaterialUIGridCenter5}  from '../sistilli-material-ui/11-grid-centering/5-alignItems-column/App'
import { App as MaterialUIGridCenter6}  from '../sistilli-material-ui/11-grid-centering/6-practice/App'
import { App as MaterialUIGridCenter7}  from '../sistilli-material-ui/11-grid-centering/7-justify-w-size/App'
import { TemporaryDrawer as MaterialUIDrawer1}  from '../sistilli-material-ui/21-drawer/1-docs/App-Temporary'
import { App as MaterialUIDrawer2}  from '../sistilli-material-ui/21-drawer/2-router/App'
import { App as MaterialUIDrawer3}  from '../sistilli-material-ui/21-drawer/3-permanent/App'
import { App as MaterialUIDrawer4}  from '../sistilli-material-ui/21-drawer/4-w-item-icons/App'
import { App as MaterialUIDrawer5}  from '../sistilli-material-ui/21-drawer/5-withRouter/App'

const avatarStyle = {
    width: "60px",
    height: "60px"
}

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
          avatars: [
            <Avatar style={avatarStyle} alt="Bob Ziroll" src="/assets/img/avatar/bob-ziroll-2.png" />
          ],
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
          avatars: [
            <Avatar style={avatarStyle} alt="Kapehe" src="/assets/img/avatar/kapehe.png" />,
            <Avatar style={avatarStyle} alt="Brad Traversy" src="/assets/img/avatar/brad-traversy.png" />
          ],
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
            primaryText: "Todo",
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
            primaryText: "Todo",
            secondaryText: "Form: add items",
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
            primaryText: "Todo",
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
            primaryText: "Todo",
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
          descText: "This spare, 15 minute tutorial introduces React's Context API, a lightweight data store for managing state outside your components.",
          date: "2018-03-13",
          author: "Wes Bos",
          avatars: [
            <Avatar style={avatarStyle} alt="Wes Bos" src="/assets/img/avatar/wes-bos.png" />
          ],
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
            primaryText: "Simple State:",
            secondaryText: "Pass as prop",
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
            primaryText: "Prop Drilling:",
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
            primaryText: "Read:",
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
            primaryText: "Change:",
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
          avatars: [
            <Avatar style={avatarStyle} alt="Ben Awad" src="/assets/img/avatar/ben-awad.png" />
          ],
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
            primaryText: "Simple",
            secondaryText: "Router",
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
            primaryText: "Context:",
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
            primaryText: "Mutable context:",
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
            primaryText: "Login context:",
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
          avatars: [
            <Avatar style={avatarStyle} alt="Ben Awad" src="/assets/img/avatar/ben-awad.png" />
          ],
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
            primaryText: "Introduction:",
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
            primaryText: "Basic routes:",
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
            primaryText: "Exact routes:",
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
            primaryText: "Switch:",
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
            secondaryText: "detect unknown resource",
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
            primaryText: "Change route:",
            secondaryText: "<Link to='..'>",
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
            primaryText: "Change route:",
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
            primaryText: "Query string:",
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
            primaryText: "Url params:",
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
            primaryText: "withRouter()",
            secondaryText: "Share router props",
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
      avatars: [
          <Avatar style={avatarStyle} alt="Anthony Sistilli" src="/assets/img/avatar/anthony-sistilli.png" />
      ],
      features: [
        {
          bulletPoint: "Themes",
          bulletText: "Themes can embody an extensive, cohesive, and overridable collection of styling attributes that define the overall look of your applications.",
        },
        {
          bulletPoint: "Styles",
          bulletText: "Learn multiple ways to style and override component apperance at a more granular level.",
        },
        {
          bulletPoint: "Grids",
          bulletText: "Breakdown some of the more tricky aspects of responsive grid layouts.",
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
          avatars: [
            <Avatar style={avatarStyle} alt="Anthony Sistilli" src="/assets/img/avatar/anthony-sistilli.png" />
          ],
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
            primaryText: "Buttons:",
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
            primaryText: "Themes:",
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
            primaryText: "Typography:",
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
            primaryText: "makeStyles:",
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
          avatars: [
            <Avatar style={avatarStyle} alt="Anthony Sistilli" src="/assets/img/avatar/anthony-sistilli.png" />
          ],
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
            primaryText: "Starter code:",
            secondaryText: "skeleton app",
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
            primaryText: "App layout:",
            secondaryText: "using <Grid>",
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
            primaryText: "Add header:",
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
            primaryText: "Toolbar:",
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
            primaryText: "Content:",
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
            primaryText: "Content card:",
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
            primaryText: "Products:",
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
            tipText: "code",
            href: "https://codesandbox.io/s/practical-goldberg-fzpht",  
            icon: <CodeIcon />         
          },
          level: "intermediate",
          descText: "Use the makeStyles hook with props or themes to customize your React components' appearance.",
          date: "2020-03-21",
          author: "Anthony Sistilli",
          avatars: [
            <Avatar style={avatarStyle} alt="Anthony Sistilli" src="/assets/img/avatar/anthony-sistilli.png" />
          ],
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
            primaryText: "Starter code:",
            secondaryText: "skeleton app",
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
          {
            demoKey: "material-ui-makeStyles-2",
            primaryText: "makeStyles:",
            secondaryText: "Override button style",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/k_AN49fA9g0?t=62",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/3-makeStyles/2-makeStyles",
              icon: <GitHubIcon />           
            },
            demoComponent: <MaterialUImakeStyles2 />
          },
          {
            demoKey: "material-ui-makeStyles-3",
            primaryText: "makeStyles:",
            secondaryText: "Override text style",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/k_AN49fA9g0?t=313",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/3-makeStyles/3-textStyle",
              icon: <GitHubIcon />           
            },
            demoComponent: <MaterialUImakeStyles3 />
          },
          {
            demoKey: "material-ui-makeStyles-4",
            primaryText: "useStyles(props):",
            secondaryText: "Conditional overrides",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/k_AN49fA9g0?t=378",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/3-makeStyles/4-props",
              icon: <GitHubIcon />           
            },
            demoComponent: <MaterialUImakeStyles4 />
          },   
          {
            demoKey: "material-ui-makeStyles-5",
            primaryText: "useStyles(props) multi:",
            secondaryText: "Conditional overrides",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/k_AN49fA9g0?t=453",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/3-makeStyles/5-props-multi",
              icon: <GitHubIcon />           
            },
            demoComponent: <MaterialUImakeStyles5 />
          }, 
          {
            demoKey: "material-ui-makeStyles-6",
            primaryText: "makeStyles(theme => (..)):",
            secondaryText: "Breakpoint override",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/k_AN49fA9g0?t=524",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/3-makeStyles/6-theme",
              icon: <GitHubIcon />           
            },
            demoComponent: <MaterialUImakeStyles6 />
          },
          {
            demoKey: "material-ui-makeStyles-7",
            primaryText: "Advanced:",
            secondaryText: "props & theme",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/k_AN49fA9g0?t=669",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/3-makeStyles/7-props-and-theme",
              icon: <GitHubIcon />           
            },
            demoComponent: <MaterialUImakeStyles7 />
          },
          {
            demoKey: "material-ui-makeStyles-8",
            primaryText: "Multiclass style:",
            secondaryText: "clsx pkg",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/k_AN49fA9g0?t=736",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/3-makeStyles/8-multi-class",
              icon: <GitHubIcon />           
            },
            demoComponent: <MaterialUImakeStyles8 />
          },                   
        ]
      },  
      {
        primaryText: "#4 Button",
        summary: {
          provider: "Forge Coding",
          courseTitle: "Material UI #4: Button",
          demoKey: "summary",
          refLink: {
            tipText: "youtube",
            href: "https://youtu.be/tKzSnjWPtEw",
            icon: <FaYoutube style={{color: "red"}}/>
          },
          codeLink: {
            tipText: "github",
            href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/4-button",  
            icon: <GitHubIcon />         
          },
          level: "intermediate",
          descText: "<Button> is a ubiquitous component but it does have some subltlety.  Learn about it here.",
          date: "2020-03-22",
          author: "Anthony Sistilli",
          avatars: [
            <Avatar style={avatarStyle} alt="Anthony Sistilli" src="/assets/img/avatar/anthony-sistilli.png" />
          ],
          features: [
            {
              bulletPoint: "Button variants",
              bulletText: "Map Material UI props to well known CSS attributes.",
            },
            {
              bulletPoint: "Override MUI css classes",
              buttetText: "Using the classes prop for granular overrides."
            }
          ],
        },
        snapshots: [
          {
            demoKey: "material-ui-button-1",
            primaryText: "Starter code:",
            secondaryText: "skeleton app",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/ewq0UgnQo9E?t=0",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/4-button/1-starter",
              icon: <GitHubIcon />           
            },
            demoComponent: <MaterialUIButton1 />
          },  
          {
            demoKey: "material-ui-button-2",
            primaryText: "Button docs:",
            secondaryText: "survey",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/ewq0UgnQo9E?t=33",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/4-button/2-button-docs",
              icon: <GitHubIcon />           
            },
            demoComponent: <MaterialUIButton2 />
          },
          {
            demoKey: "material-ui-button-3",
            primaryText: "Icon:",
            secondaryText: "<IconButton>",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/ewq0UgnQo9E?t=153",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/4-button/3-icon-buttons",
              icon: <GitHubIcon />           
            },
            demoComponent: <MaterialUIButton3 />
          },                  
        ]
      },   
      {
        primaryText: "#5 Typography",
        summary: {
          provider: "Forge Coding",
          courseTitle: "Material UI #5: Typography",
          demoKey: "summary",
          refLink: {
            tipText: "youtube",
            href: "https://www.youtube.com/watch?v=OvPrUQ3gPtw",
            icon: <FaYoutube style={{color: "red"}}/>
          },
          codeLink: {
            tipText: "github",
            href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/5-typography",  
            icon: <GitHubIcon />         
          },
          level: "introductory",
          descText: "Learn about basic <Typography> properties and override mechanisms.",
          date: "2020-03-23",
          author: "Anthony Sistilli",
          avatars: [
            <Avatar style={avatarStyle} alt="Anthony Sistilli" src="/assets/img/avatar/anthony-sistilli.png" />
          ],
          features: [
            {
              bulletPoint: "Typography variants",
              bulletText: "Learn about common variants such as h1, body1, etc",
            },
            {
              bulletPoint: "Override default appearance",
              bulletText: "Using style, MUI css class, and theme overrides."
            }
          ],
        },
        snapshots: [
          {
            demoKey: "material-ui-typography-1",
            primaryText: "Typography",
            secondaryText: "props",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/OvPrUQ3gPtw?t=0",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/5-typography/1-props",
              icon: <GitHubIcon />           
            },
            demoComponent: <MaterialUIText1 />
          }, 
          {
            demoKey: "material-ui-typography-2",
            primaryText: "Override:",
            secondaryText: "style & css class",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/OvPrUQ3gPtw?t=389",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/5-typography/2-override",
              icon: <GitHubIcon />           
            },
            demoComponent: <MaterialUIText2 />
          },    
          {
            demoKey: "material-ui-typography-3",
            primaryText: "Override:",
            secondaryText: "theme",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/OvPrUQ3gPtw?t=471",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/5-typography/3-theme",
              icon: <GitHubIcon />           
            },
            demoComponent: <MaterialUIText3 />
          },
          {
            demoKey: "material-ui-typography-4",
            primaryText: "Override:",
            secondaryText: "theme & css class",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/OvPrUQ3gPtw?t=471",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/5-typography/4-themes",
              icon: <GitHubIcon />           
            },
            demoComponent: <MaterialUIText4 />
          },               
        ]
      },
      {
        primaryText: "#6 Themes",
        summary: {
          provider: "Forge Coding",
          courseTitle: "Material UI #6: Themes - Making your own Theme",
          demoKey: "summary",
          refLink: {
            tipText: "youtube",
            href: "https://www.youtube.com/watch?v=Q4o0GmfNpJc",
            icon: <FaYoutube style={{color: "red"}}/>
          },
          codeLink: {
            tipText: "github",
            href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/6-themes",  
            icon: <GitHubIcon />         
          },
          level: "introductory",
          descText: "Use themes to define a cohesive, overall look to your applications.  The default theme gives you thoughtful values for most attributes, but may be overridden depending upon your design rules.",
          date: "2020-03-28",
          author: "Anthony Sistilli",
          avatars: [
            <Avatar style={avatarStyle} alt="Anthony Sistilli" src="/assets/img/avatar/anthony-sistilli.png" />
          ],
          features: [
            {
              bulletPoint: "Basic theme objects",
              bulletText: "Learn about breakpoints, palettes, and typography.",
            },
            {
              bulletPoint: "Create your own theme",
              bulletText: "Use createMuiTheme then share with components via <ThemeProvider theme={theme}> or useTheme() hook."
            },
            {
              bulletPoint: "Run-time theme selection tip",
              bulletText: "Import themes from a separate 'themes' file if selection is dynamic and based upon a setting or reducer value."
            },
            {
              bulletPoint: "Read theme breakpoints",
              bulletText: "Change background color, or other presentation attributes, based upon browser window size."
            },
            {
              bulletPoint: "Dark theme",
              bulletText: "Use createMuiTheme to enable palette.type='dark'"
            }
          ],
        },
        snapshots: [
          {
            demoKey: "material-ui-themes-1",
            primaryText: "Intro:",
            secondaryText: "essentials",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/Q4o0GmfNpJc?t=0",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/6-themes/1-intro/App.js",
              icon: <GitHubIcon />           
            },
            demoComponent: <MaterialUIThemes1 />
          },
          {
            demoKey: "material-ui-themes-2",
            primaryText: "createMuiTheme:",
            secondaryText: "new theme",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/Q4o0GmfNpJc?t=380",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/6-themes/2-create-theme/App.js",
              icon: <GitHubIcon />           
            },
            demoComponent: <MaterialUIThemes2 />
          },
          {
            demoKey: "material-ui-themes-3",
            primaryText: "Breakpoint:",
            secondaryText: "background color",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/Q4o0GmfNpJc?t=708",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/6-themes/3-breakpoint-style/App.js",
              icon: <GitHubIcon />           
            },
            demoComponent: <MaterialUIThemes3 />
          },
          {
            demoKey: "material-ui-themes-4",
            primaryText: "Dark",
            secondaryText: "theme",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/Q4o0GmfNpJc?t=987",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/6-themes/4-dark/App.js",
              icon: <GitHubIcon />           
            },
            demoComponent: <MaterialUIThemes4 />
          },
        ]
      },
      {
        primaryText: "#7 Paper",
        summary: {
          provider: "Forge Coding",
          courseTitle: "Material UI #7: Paper",
          demoKey: "summary",
          refLink: {
            tipText: "youtube",
            href: "https://www.youtube.com/watch?v=nmCcr-Y9qdc",
            icon: <FaYoutube style={{color: "red"}}/>
          },
          codeLink: {
            tipText: "github",
            href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/7-paper",  
            icon: <GitHubIcon />         
          },
          level: "introductory",
          descText: "The <Paper> component is really just a div providing a background and a box-shadow.  But it is fundamental. ",
          date: "2020-03-30",
          author: "Anthony Sistilli",
          avatars: [
            <Avatar style={avatarStyle} alt="Anthony Sistilli" src="/assets/img/avatar/anthony-sistilli.png" />
          ],
          features: [
            {
              bulletPoint: "Paper is a wrapper",
              bulletText: "It wraps nested items inside a div with a background color and box shadow.",
            },
          ],
        },
        snapshots: [
          {
            demoKey: "material-ui-paper-1",
            primaryText: "Props:",
            secondaryText: "elevation",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/nmCcr-Y9qdc?t=0",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/7-paper/1-elevation",
              icon: <GitHubIcon />           
            },
            demoComponent: <MaterialUIPaper1 />
          },
          {
            demoKey: "material-ui-paper-2",
            primaryText: "Props:",
            secondaryText: "square",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/nmCcr-Y9qdc?t=175",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/7-paper/2-square",
              icon: <GitHubIcon />           
            },
            demoComponent: <MaterialUIPaper2 />
          },
        ]
      },
      {
        primaryText: "#8 Dark Mode",
        summary: {
          provider: "Forge Coding",
          courseTitle: "Material UI #8: Dark Mode",
          demoKey: "summary",
          refLink: {
            tipText: "youtube",
            href: "https://www.youtube.com/watch?v=H_PO_GY4xXU",
            icon: <FaYoutube style={{color: "red"}}/>
          },
          codeLink: {
            tipText: "github",
            href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/8-dark",  
            icon: <GitHubIcon />         
          },
          level: "introductory",
          descText: "Dark mode is the new hotness.  But it's basically already built into Material-UI.  Just use <Paper> and tweak one setting in the default theme to unleash.",
          date: "2020-04-04",
          author: "Anthony Sistilli",
          avatars: [
            <Avatar style={avatarStyle} alt="Anthony Sistilli" src="/assets/img/avatar/anthony-sistilli.png" />
          ],
          features: [
            {
              bulletPoint: "Dark mode is easy in Material-UI",
              bulletText: "Override the theme and set palette.type='dark' and bam.",
            },
            {
              bulletPoint: "But <Paper> is key.",
              bulletText: "Not all components change background color in relation to dark mode.",
            },
          ],
        },
        snapshots: [
          {
            demoKey: "material-ui-dark-1",
            primaryText: "Start:",
            secondaryText: "light mode",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/H_PO_GY4xXU?t=0",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/8-dark/1-light",
              icon: <GitHubIcon />           
            },
            demoComponent: <MaterialUIDark1 />
          },
          {
            demoKey: "material-ui-dark-2",
            primaryText: "Dark mode:",
            secondaryText: "w/ palette",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/H_PO_GY4xXU?t=113",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/8-dark/2-dark",
              icon: <GitHubIcon />           
            },
            demoComponent: <MaterialUIDark2 />
          },
          {
            demoKey: "material-ui-dark-3",
            primaryText: "Toggle:",
            secondaryText: "light & dark",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/H_PO_GY4xXU?t=287",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/8-dark/3-toggle",
              icon: <GitHubIcon />           
            },
            demoComponent: <MaterialUIDark3 />
          },
          {
            demoKey: "material-ui-dark-4",
            primaryText: "Toggle:",
            secondaryText: "green & dark",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/H_PO_GY4xXU?t=424",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/8-dark/4-green",
              icon: <GitHubIcon />           
            },
            demoComponent: <MaterialUIDark4 />
          },
        ]
      },
      {
        primaryText: "#9 Templates",
        summary: {
          provider: "Forge Coding",
          courseTitle: "Material UI #9: Templates",
          demoKey: "summary",
          refLink: {
            tipText: "youtube",
            href: "https://www.youtube.com/watch?v=GsSnfTKn8To",
            icon: <FaYoutube style={{color: "red"}}/>
          },
          codeLink: {
            tipText: "github",
            href: "https://github.com/mui-org/material-ui/docs/src/pages/getting-started/templates",  
            icon: <GitHubIcon />         
          },
          level: "introductory",
          descText: "Material UI comes with a few pre-coded templates for common tasks such as logging in and checkout.  Some of these resources may give you ideas or speed your development.",
          date: "2020-04-06",
          author: "Anthony Sistilli",
          avatars: [
            <Avatar style={avatarStyle} alt="Anthony Sistilli" src="/assets/img/avatar/anthony-sistilli.png" />
          ],
          features: [
            {
              bulletPoint: "Example code for common tasks",
              bulletText: "Use these templates off-the-shelf or tweak to suit your needs.",
            },
            {
              bulletPoint: "Study the code",
              bulletText: "Improve your use of the Material UI library by studying how the authors leverage components.",
            },
            {
              bulletPoint: "Improve your layout",
              bulletText: "Study use of whitespace, <Typography>, <Container>, and <Grid>",
            },
            {
              bulletPoint: "Learn about useful packages",
              bulletText: "markdown-to-jsx used in the blog and recharts used in the dashboard",
            },
            {
              bulletPoint: "Learn about building forms",
              bulletText: "with <TextField> in sign-in template",
            },
            {
              bulletPoint: "Learn about the '@global' JSS target",
              bulletText: "Used in the pricing template to override multiple unordered lists.",
            },
            {
              bulletPoint: "Make your designs sensitive to 'light' and 'dark' modes",
              bulletText: "backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900]",
            },
            {
              bulletPoint: "Leverage existing theme zIndices",
              bulletText: "For JSS targets like this: 'zIndex: theme.zIndex.drawer + 1'",
            },
          ],
        },
        snapshots: [
          {
            demoKey: "material-ui-template-4",
            primaryText: "Dashboard",
            secondaryText: "layout",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/GsSnfTKn8To?t=48",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/9-templates/dashboard",
              icon: <GitHubIcon />           
            },
            demoComponent: <MaterialUITemplateDashboard />
          },
          {
            demoKey: "material-ui-template-6",
            primaryText: "Sign In",
            secondaryText: "layout",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/GsSnfTKn8To?t=177",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/9-templates/sign-in",
              icon: <GitHubIcon />           
            },
            demoComponent: <MaterialUITemplateSignIn />
          },
          {
            demoKey: "material-ui-template-7",
            primaryText: "Side Sign In",
            secondaryText: "layout",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/GsSnfTKn8To?t=214",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/9-templates/sign-in-side",
              icon: <GitHubIcon />           
            },
            demoComponent: <MaterialUITemplateSignInSide />
          },
          {
            demoKey: "material-ui-template-8",
            primaryText: "Sign Up",
            secondaryText: "layout",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/GsSnfTKn8To?t=225",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/9-templates/sign-up",
              icon: <GitHubIcon />           
            },
            demoComponent: <MaterialUITemplateSignUp />
          },
          {
            demoKey: "material-ui-template-2",
            primaryText: "Blog",
            secondaryText: "layout",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/GsSnfTKn8To?t=229",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/9-templates/blog",
              icon: <GitHubIcon />           
            },
            demoComponent: <MaterialUITemplateBlog />
          },
          {
            demoKey: "material-ui-template-3",
            primaryText: "Checkout",
            secondaryText: "layout",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/GsSnfTKn8To?t=241",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/9-templates/checkout",
              icon: <GitHubIcon />           
            },
            demoComponent: <MaterialUITemplateCheckout />
          },
          {
            demoKey: "material-ui-template-1",
            primaryText: "Album",
            secondaryText: "layout",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/GsSnfTKn8To?t=246",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/9-templates/album",
              icon: <GitHubIcon />           
            },
            demoComponent: <MaterialUITemplateAlbum />
          },
          {
            demoKey: "material-ui-template-5",
            primaryText: "Pricing",
            secondaryText: "layout",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/GsSnfTKn8To?t=279",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/9-templates/pricing",
              icon: <GitHubIcon />           
            },
            demoComponent: <MaterialUITemplatePricing />
          },
          {
            demoKey: "material-ui-template-9",
            primaryText: "Sticky",
            secondaryText: "footer",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/GsSnfTKn8To?t=294",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/9-templates/sticky-footer",
              icon: <GitHubIcon />           
            },
            demoComponent: <MaterialUITemplateStickyFooter />
          },
        ]
      },
      {
        primaryText: "#10 Grid Layout",
        summary: {
          provider: "Forge Coding",
          courseTitle: "Material UI #10: Grid Layout",
          demoKey: "summary",
          refLink: {
            tipText: "youtube",
            href: "https://www.youtube.com/watch?v=WV6u_6ZNWkQ",
            icon: <FaYoutube style={{color: "red"}}/>
          },
          codeLink: {
            tipText: "github",
            href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/10-grid",  
            icon: <GitHubIcon />         
          },
          level: "introductory",
          descText: "The <Grid> component can be a bit tricky.  It's helpful to understand that Material UI bases its grid on the flexbox model.",
          date: "2020-04-11",
          author: "Anthony Sistilli",
          avatars: [
            <Avatar style={avatarStyle} alt="Anthony Sistilli" src="/assets/img/avatar/anthony-sistilli.png" />
          ],
          features: [
            {
              bulletPoint: "12 column layout",
              bulletText: "Understand how <Grid> allocates space to grid items.",
            },
            {
              bulletPoint: "Grid container versus Grid item",
              bulletText: "Certain props only apply to one or the other.",
            },
            {
              bulletPoint: "Grid direction",
              bulletText: '<Grid container direction="row"> versus <Grid container direction="column">',
            },
            {
              bulletPoint: "Spacing and centering",
              bulletText: "Learn which props will give you what you want.",
            },
          ],
        },
        snapshots: [
          {
            demoKey: "material-ui-grid-1",
            primaryText: "Starter",
            secondaryText: "code",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/WV6u_6ZNWkQ?t=0",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/10-grid/1-start/App.js",
              icon: <GitHubIcon />           
            },
            demoComponent: <MaterialUIGrid1 />
          },
          {
            demoKey: "material-ui-grid-2",
            primaryText: "12 column",
            secondaryText: "containers",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/WV6u_6ZNWkQ?t=41",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/10-grid/2-doc-start/App.js",
              icon: <GitHubIcon />           
            },
            demoComponent: <MaterialUIGrid2 />
          },
          {
            demoKey: "material-ui-grid-3",
            primaryText: "Sizing:",
            secondaryText: "3 + 3 + 6",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/WV6u_6ZNWkQ?t=208",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/10-grid/3-doc-336/App.js",
              icon: <GitHubIcon />           
            },
            demoComponent: <MaterialUIGrid3 />
          },
          {
            demoKey: "material-ui-grid-4",
            primaryText: "Wrapping:",
            secondaryText: "3 + 3 + 7",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/WV6u_6ZNWkQ?t=244",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/10-grid/4-doc-337/App.js",
              icon: <GitHubIcon />           
            },
            demoComponent: <MaterialUIGrid4 />
          },
          {
            demoKey: "material-ui-grid-5",
            primaryText: "Breakpoints:",
            secondaryText: "xs vs sm vs lg",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/WV6u_6ZNWkQ?t=291",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/10-grid/5-doc-xs-vs-sm/App.js",
              icon: <GitHubIcon />           
            },
            demoComponent: <MaterialUIGrid5 />
          },
          {
            demoKey: "material-ui-grid-6",
            primaryText: "Grid:",
            secondaryText: "container spacing",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/WV6u_6ZNWkQ?t=478",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/10-grid/6-spacing/App.js",
              icon: <GitHubIcon />           
            },
            demoComponent: <MaterialUIGrid6 />
          },
          {
            demoKey: "material-ui-grid-7",
            primaryText: "Grid:",
            secondaryText: "container direction",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/WV6u_6ZNWkQ?t=594",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/10-grid/7-direction/App.js",
              icon: <GitHubIcon />           
            },
            demoComponent: <MaterialUIGrid7 />
          },
          {
            demoKey: "material-ui-grid-8",
            primaryText: "Nested Grid:",
            secondaryText: "item & container",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/WV6u_6ZNWkQ?t=675",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/10-grid/8-nested/App.js",
              icon: <GitHubIcon />           
            },
            demoComponent: <MaterialUIGrid8 />
          },
          {
            demoKey: "material-ui-grid-9",
            primaryText: "Layout:",
            secondaryText: "simple page",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/WV6u_6ZNWkQ?t=754",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/10-grid/9-simple-layout/App.js",
              icon: <GitHubIcon />           
            },
            demoComponent: <MaterialUIGrid9 />
          },
        ]
      },
      {
        primaryText: "#11 Grid Centering",
        summary: {
          provider: "Forge Coding",
          courseTitle: "Material UI #11: Grid Centering",
          demoKey: "summary",
          refLink: {
            tipText: "youtube",
            href: "https://www.youtube.com/watch?v=Z9xgsSVJGWk",
            icon: <FaYoutube style={{color: "red"}}/>
          },
          codeLink: {
            tipText: "github",
            href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/11-grid-centering",  
            icon: <GitHubIcon />         
          },
          level: "introductory",
          descText: "Learn more about Grid spacing within containers and especially centering within grid items.  The key is to understand flexbox semantics.",
          date: "2020-04-21",
          author: "Anthony Sistilli",
          avatars: [
            <Avatar style={avatarStyle} alt="Anthony Sistilli" src="/assets/img/avatar/anthony-sistilli.png" />
          ],
          features: [
            {
              bulletPoint: "Control spacing within single major-axis flex row or column",
              bulletText: "justify='flex-start|center|flex-end|space-between|space-around|space-evenly'",
            },
            {
              bulletPoint: "Control spacing along cross-axis to single flex row or column",
              bulletText: "alignItems='flex-start|center|flex-end|stretch|baseline'",
            },
            {
              bulletPoint: "Control cross-axis spacing of multiple flex rows or columns",
              bulletText: "alignContent='..'",
            },
            {
              bulletPoint: "Adding margin gutters to containers",
              bulletText: "Padding is your friend with breakpoint layouts.",
            },
            {
              bulletPoint: "Center content within an item with textAlign",
              bulletText: "Why justify='center' doesn't work with breakpoint layouts.",
            },
          ],
        },
        snapshots: [
          {
            demoKey: "material-ui-grid-center-1",
            primaryText: "Starter",
            secondaryText: "code",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/Z9xgsSVJGWk?t=0",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/11-grid-centering/1-start/App.js",
              icon: <GitHubIcon />           
            },
            demoComponent: <MaterialUIGridCenter1 />
          },
          {
            demoKey: "material-ui-grid-center-2",
            primaryText: "justify",
            secondaryText: "direction='row'",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/Z9xgsSVJGWk?t=78",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/11-grid-centering/2-justify/App.js",
              icon: <GitHubIcon />           
            },
            demoComponent: <MaterialUIGridCenter2 />
          },
          {
            demoKey: "material-ui-grid-center-3",
            primaryText: "alignItems",
            secondaryText: "direction='row'",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/Z9xgsSVJGWk?t=272",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/11-grid-centering/3-alignItems/App.js",
              icon: <GitHubIcon />           
            },
            demoComponent: <MaterialUIGridCenter3 />
          },
          {
            demoKey: "material-ui-grid-center-4",
            primaryText: "justify",
            secondaryText: "direction='column'",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/Z9xgsSVJGWk?t=358",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/11-grid-centering/4-justify-column/App.js",
              icon: <GitHubIcon />           
            },
            demoComponent: <MaterialUIGridCenter4 />
          },
          {
            demoKey: "material-ui-grid-center-5",
            primaryText: "alignItems",
            secondaryText: "direction='column'",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/Z9xgsSVJGWk?t=358",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/11-grid-centering/5-alignItems-column/App.js",
              icon: <GitHubIcon />           
            },
            demoComponent: <MaterialUIGridCenter5 />
          },
          {
            demoKey: "material-ui-grid-center-6",
            primaryText: "Practice",
            secondaryText: "with snowflakes",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/Z9xgsSVJGWk?t=387",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/11-grid-centering/6-practice/App.js",
              icon: <GitHubIcon />           
            },
            demoComponent: <MaterialUIGridCenter6 />
          },
          {
            demoKey: "material-ui-grid-center-7",
            primaryText: "justify",
            secondaryText: "with xs={#}",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/Z9xgsSVJGWk?t=460",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/11-grid-centering/7-justify-w-size/App.js",
              icon: <GitHubIcon />           
            },
            demoComponent: <MaterialUIGridCenter7 />
          },
        ]
      },
      {
        primaryText: "#21 Drawer + Router",
        summary: {
          provider: "Forge Coding",
          courseTitle: "Material UI #21: Drawer + Router",
          demoKey: "summary",
          refLink: {
            tipText: "youtube",
            href: "https://www.youtube.com/watch?v=CjFWbEOcq-Y",
            icon: <FaYoutube style={{color: "red"}}/>
          },
          codeLink: {
            tipText: "codesandbox",
            href: "https://codesandbox.io/s/winter-brook-fnepe",  
            icon: <CodeIcon />         
          },
          level: "introductory",
          descText: "The drawer component is indispensible and comes in 3 variants.  In this tutorial, the focus in on the 'permanent' variant along with very useful React Router integration.",
          date: "2020-06-06",
          author: "Anthony Sistilli",
          avatars: [
            <Avatar style={avatarStyle} alt="Anthony Sistilli" src="/assets/img/avatar/anthony-sistilli.png" />
          ],
          features: [
            {
              bulletPoint: "Learn key props",
              bulletText: "variant, anchor, open",
            },
            {
              bulletPoint: "Integrate React Router actions with Drawer",
              bulletText: "Trigger routes with drawer clicks.",
            },
            {
              bulletPoint: "Learn to alias component names to something else",
              bulletText: "import { Drawer as MUIDrawer } from '@material-ui/core'",
            },
            {
              bulletPoint: "Override Drawer's PaperProps",
              bulletText: "<Drawer PaperProps={{elevation: 4}} />",
            },
          ],
        },
        snapshots: [
          {
            demoKey: "material-ui-drawer-1",
            primaryText: "Docs:",
            secondaryText: "temporary drawer",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/CjFWbEOcq-Y?t=0",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/21-drawer/1-docs/App-Temporary.js",
              icon: <GitHubIcon />           
            },
            demoComponent: <MaterialUIDrawer1 />
          },
          {
            demoKey: "material-ui-drawer-2",
            primaryText: "Router",
            secondaryText: "code",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/CjFWbEOcq-Y?t=622",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/21-drawer/2-router/App.js",
              icon: <GitHubIcon />           
            },
            demoComponent: <MaterialUIDrawer2 />
          },
          {
            demoKey: "material-ui-drawer-3",
            primaryText: "Permanent",
            secondaryText: "drawer",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/CjFWbEOcq-Y?t=691",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/21-drawer/3-permanent/App.js",
              icon: <GitHubIcon />           
            },
            demoComponent: <MaterialUIDrawer3 />
          },
          {
            demoKey: "material-ui-drawer-4",
            primaryText: "Styled",
            secondaryText: "list items",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/CjFWbEOcq-Y?t=1083",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/21-drawer/4-styled/App.js",
              icon: <GitHubIcon />           
            },
            demoComponent: <MaterialUIDrawer4 />
          },
          {
            demoKey: "material-ui-drawer-5",
            primaryText: "Router",
            secondaryText: "integration",
            refLink: {
              tipText: "youtube",
              href: "https://youtu.be/CjFWbEOcq-Y?t=1059",
              icon: <FaYoutube style={{color: "red"}}/>
            },
            codeLink: {
              tipText: "github",
              href: "https://github.com/zenglenn42/react-tutorials/tree/master/client/src/components/sistilli-material-ui/21-drawer/5-withRouter/App.js",
              icon: <GitHubIcon />           
            },
            demoComponent: <MaterialUIDrawer5 />
          },
        ]
      },
    ]
  },  
]

export default TutorialData
