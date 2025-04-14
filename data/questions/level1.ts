import { Question } from "@/types";

// Use string type instead of enum
export type QuestionTopic = 
  | "react-basics"
  | "components"
  | "forms"
  | "hooks"
  | "javascript"
  | "jsx"
  | "lifecycle"
  | "router"
  | "state";

// Extended Question type with topic categorization
export interface QuestionWithCategory extends Question {
  topic: QuestionTopic;
}

// Full question database
const questionDatabase: QuestionWithCategory[] = [

{
    id: "react-basics-1",
    level: 1,
    topic: "react-basics",
    question: "What is React?",
    multipleCorrect: false,
    options: [
      {
        id: "react-basics-1-a",
        text: "A JavaScript library for building user interfaces",
        isCorrect: true,
        explanation: "React is a JavaScript library developed by Facebook for building user interfaces, particularly single-page applications."
      },
      {
        id: "react-basics-1-b",
        text: "A complete full-stack framework",
        isCorrect: false,
        explanation: "Unlike Angular or Next.js, React is not a full-stack framework. It focuses only on the view layer and needs to be combined with other libraries for routing, state management, etc."
      },
      {
        id: "react-basics-1-c",
        text: "A programming language for web development",
        isCorrect: false,
        explanation: "React is not a programming language. It's a library written in JavaScript that developers use to build user interfaces."
      },
      {
        id: "react-basics-1-d",
        text: "A database management system",
        isCorrect: false,
        explanation: "React has nothing to do with database management. It's a UI library focused on the presentation layer of applications."
      }
    ],
    explanation: {
      correct: "Correct! React is a JavaScript library developed by Facebook for building user interfaces. It's particularly useful for single-page applications where UI updates are frequent.",
      incorrect: "React is a JavaScript library developed by Facebook for building user interfaces. It's not a full-stack framework, programming language, or database system.",
      detailed: "React was created by Jordan Walke, a software engineer at Facebook, and was first deployed on Facebook's newsfeed in 2011 and later on Instagram in 2012. It was open-sourced in May 2013. React allows developers to create large web applications that can change data without reloading the page. Its main purpose is to be fast, scalable, and simple."
    }
  },
{
    id: "react-basics-2",
    level: 1,
    topic: "react-basics",
    question: "What is the main advantage of using React?",
    multipleCorrect: false,
    options: [
      {
        id: "react-basics-2-a",
        text: "It allows for efficient updates through the Virtual DOM",
        isCorrect: true,
        explanation: "React's Virtual DOM allows it to minimize direct DOM manipulation by comparing virtual representations and only updating what has changed, making it very efficient."
      },
      {
        id: "react-basics-2-b",
        text: "It eliminates the need for JavaScript in web development",
        isCorrect: false,
        explanation: "React is a JavaScript library and requires JavaScript knowledge. It doesn't eliminate JavaScript; it's built with it."
      },
      {
        id: "react-basics-2-c",
        text: "It automatically optimizes database queries",
        isCorrect: false,
        explanation: "React has nothing to do with database queries. It's focused on UI rendering, not data storage or retrieval."
      },
      {
        id: "react-basics-2-d",
        text: "It provides built-in server-side functionality",
        isCorrect: false,
        explanation: "React itself doesn't provide server-side functionality. For server-side rendering, you need additional tools like Next.js or use Node.js with React's server rendering APIs."
      }
    ],
    explanation: {
      correct: "Correct! React's Virtual DOM implementation allows it to efficiently update only the parts of the actual DOM that have changed, rather than re-rendering the entire page.",
      incorrect: "React's main advantage is its efficient updates through the Virtual DOM. It doesn't eliminate JavaScript, optimize database queries, or provide built-in server-side functionality.",
      detailed: "The Virtual DOM is a lightweight copy of the actual DOM kept in memory. When state changes in a React application, React first updates this Virtual DOM, then compares it with the previous version (a process called 'diffing'), and finally updates only the necessary parts of the real DOM. This approach is much more efficient than directly manipulating the DOM for every change, which is slower and more resource-intensive."
    }
  },
{
    id: "react-basics-3",
    level: 1,
    topic: "react-basics",
    question: "What command is typically used to create a new React application using Create React App?",
    multipleCorrect: false,
    options: [
      {
        id: "react-basics-3-a",
        text: "npx create-react-app my-app",
        isCorrect: true,
        explanation: "The command 'npx create-react-app my-app' is the standard way to create a new React application using Create React App."
      },
      {
        id: "react-basics-3-b",
        text: "npm create-react-app my-app",
        isCorrect: false,
        explanation: "This command is incorrect. While npm is used to install packages, the correct command for Create React App uses npx, which executes packages without installing them globally."
      },
      {
        id: "react-basics-3-c",
        text: "npm install create-react-app my-app",
        isCorrect: false,
        explanation: "This command is incorrect. 'npm install' is used to add packages to a project, not to create a new React application."
      },
      {
        id: "react-basics-3-d",
        text: "react-create-app my-app",
        isCorrect: false,
        explanation: "This command is incorrect. There is no 'react-create-app' command. The correct tool is called 'create-react-app' and is executed using npx."
      }
    ],
    explanation: {
      correct: "Correct! 'npx create-react-app my-app' is the standard command to create a new React application using Create React App. The 'npx' command executes the package without installing it globally.",
      incorrect: "The correct command is 'npx create-react-app my-app'. This uses npx to execute the create-react-app package without installing it globally, and creates a new React application in a folder called 'my-app'.",
      detailed: "Create React App is an officially supported way to create single-page React applications. It offers a modern build setup with no configuration needed. The 'npx' command is a package runner tool that comes with npm 5.2+ and executes packages without installing them globally, ensuring you always use the latest version."
    }
  },
{
    id: "react-basics-4",
    level: 1,
    topic: "react-basics",
    question: "Which of the following is NOT a key feature of React?",
    multipleCorrect: false,
    options: [
      {
        id: "react-basics-4-a",
        text: "Built-in state management like Redux",
        isCorrect: true,
        explanation: "React doesn't come with built-in state management like Redux. Redux is a separate library that can be used with React, but it's not part of React itself."
      },
      {
        id: "react-basics-4-b",
        text: "Component-based architecture",
        isCorrect: false,
        explanation: "Component-based architecture is a key feature of React. React applications are built using components that manage their own state."
      },
      {
        id: "react-basics-4-c",
        text: "Virtual DOM",
        isCorrect: false,
        explanation: "The Virtual DOM is a key feature of React. It's a lightweight copy of the actual DOM that React uses to improve performance."
      },
      {
        id: "react-basics-4-d",
        text: "Declarative UI",
        isCorrect: false,
        explanation: "Declarative UI is a key feature of React. React allows you to describe what your UI should look like, and it handles the DOM updates."
      }
    ],
    explanation: {
      correct: "Correct! React doesn't come with built-in state management like Redux. While React has its own state management capabilities through hooks like useState and useReducer, more complex state management solutions like Redux are separate libraries.",
      incorrect: "React doesn't come with built-in state management like Redux. Component-based architecture, Virtual DOM, and declarative UI are all key features of React.",
      detailed: "React's core features include: 1) Component-based architecture that encourages reusability, 2) Virtual DOM for efficient updates, 3) Declarative programming style, 4) Unidirectional data flow, and 5) JSX syntax. While React provides useState and useContext for basic state management, it doesn't include advanced state management solutions like Redux, which must be added separately."
    }
  },
{
    id: "react-basics-5",
    level: 1,
    topic: "react-basics",
    question: "How does React use the Virtual DOM to optimize rendering?",
    multipleCorrect: false,
    options: [
      {
        id: "react-basics-5-a",
        text: "It creates a lightweight copy of the DOM and compares it with the real DOM, updating only what has changed",
        isCorrect: true,
        explanation: "React creates a virtual representation of the DOM in memory (Virtual DOM), compares it with the previous version when state changes, and then updates only the necessary parts of the actual DOM."
      },
      {
        id: "react-basics-5-b",
        text: "It bypasses the DOM completely and renders directly to the browser",
        isCorrect: false,
        explanation: "React doesn't bypass the DOM. It still ultimately updates the real DOM, but it uses the Virtual DOM as an intermediary to optimize these updates."
      },
      {
        id: "react-basics-5-c",
        text: "It pre-renders all possible UI states at build time",
        isCorrect: false,
        explanation: "React doesn't pre-render all possible UI states at build time. It renders based on the current state and props, using the Virtual DOM to optimize updates."
      },
      {
        id: "react-basics-5-d",
        text: "It only renders components that are currently visible in the viewport",
        isCorrect: false,
        explanation: "This describes lazy loading or virtualization, which are separate optimization techniques. The Virtual DOM itself doesn't automatically limit rendering to visible components."
      }
    ],
    explanation: {
      correct: "Correct! React creates a lightweight copy of the DOM called the Virtual DOM. When state changes, React creates a new Virtual DOM tree, compares it with the previous one (diffing), and then updates only the necessary parts of the real DOM (reconciliation).",
      incorrect: "React uses a Virtual DOM, which is a lightweight copy of the real DOM. When state changes, React creates a new Virtual DOM tree, compares it with the previous one, and updates only what has changed in the real DOM. It doesn't bypass the DOM, pre-render all states, or only render visible components.",
      detailed: "The Virtual DOM works in three steps: 1) When data changes, the entire UI is re-rendered in the Virtual DOM representation. 2) The difference between the previous and new Virtual DOM is calculated (diffing). 3) Only the real DOM nodes that have changed are updated (reconciliation). This process is more efficient than directly manipulating the DOM for every state change, which would be more expensive in terms of performance."
    }
  },
{
    id: "react-basics-6",
    level: 1,
    topic: "react-basics",
    question: "What is the purpose of ReactDOM.render() in a React application?",
    multipleCorrect: false,
    options: [
      {
        id: "react-basics-6-a",
        text: "To render a React element into the DOM in the supplied container",
        isCorrect: true,
        explanation: "ReactDOM.render() is used to render a React element into a DOM node. It's typically used to mount the root component of a React application to the DOM."
      },
      {
        id: "react-basics-6-b",
        text: "To create a new React component",
        isCorrect: false,
        explanation: "ReactDOM.render() doesn't create components. Components are created using functions or classes, and then rendered using ReactDOM.render()."
      },
      {
        id: "react-basics-6-c",
        text: "To update the state of a component",
        isCorrect: false,
        explanation: "ReactDOM.render() doesn't update component state. State is updated using setState in class components or state setters in functional components with hooks."
      },
      {
        id: "react-basics-6-d",
        text: "To handle events in React",
        isCorrect: false,
        explanation: "ReactDOM.render() isn't used for event handling. React uses synthetic events and event handlers defined in components for handling events."
      }
    ],
    explanation: {
      correct: "Correct! ReactDOM.render() is used to render a React element into the DOM in the supplied container. It's the entry point for a React application, mounting the root component to the DOM.",
      incorrect: "ReactDOM.render() is used to render a React element into the DOM in a specified container. It doesn't create components, update state, or handle events directly.",
      detailed: "ReactDOM.render() takes two arguments: the React element to render and the DOM node to render it into. In modern React applications with React 18+, this method is being replaced by ReactDOM.createRoot().render(), which enables concurrent features. Both methods serve as the entry point that connects the React component tree to the DOM."
    }
  },
{
    id: "react-basics-7",
    level: 1,
    topic: "react-basics",
    question: "In React 18, what has replaced ReactDOM.render()?",
    multipleCorrect: false,
    options: [
      {
        id: "react-basics-7-a",
        text: "ReactDOM.createRoot().render()",
        isCorrect: true,
        explanation: "In React 18, ReactDOM.createRoot().render() has replaced ReactDOM.render() as the recommended way to render React applications, enabling concurrent features."
      },
      {
        id: "react-basics-7-b",
        text: "React.mount()",
        isCorrect: false,
        explanation: "There is no React.mount() method in React 18 or any other version of React."
      },
      {
        id: "react-basics-7-c",
        text: "ReactDOM.hydrate()",
        isCorrect: false,
        explanation: "ReactDOM.hydrate() is used for server-side rendering to attach event listeners to existing markup. It hasn't replaced ReactDOM.render() for client-side rendering."
      },
      {
        id: "react-basics-7-d",
        text: "React.createElement()",
        isCorrect: false,
        explanation: "React.createElement() is used to create React elements, not to render them to the DOM. It's been part of React since the beginning and serves a different purpose."
      }
    ],
    explanation: {
      correct: "Correct! In React 18, ReactDOM.createRoot().render() has replaced ReactDOM.render() as the recommended way to render React applications. This new API enables concurrent rendering features.",
      incorrect: "In React 18, ReactDOM.createRoot().render() has replaced ReactDOM.render(). This new API enables concurrent rendering features that allow React to prepare multiple versions of the UI at the same time.",
      detailed: "The new createRoot API in React 18 enables concurrent rendering features. With this approach, React can work on multiple state updates concurrently, interrupt and resume work, and skip unnecessary work. This results in a more responsive user interface, especially for complex updates. The syntax change from ReactDOM.render(element, container) to createRoot(container).render(element) reflects this architectural shift."
    }
  },
{
    id: "react-basics-8",
    level: 1,
    topic: "react-basics",
    question: "What is the significance of the 'key' prop when rendering lists in React?",
    multipleCorrect: false,
    options: [
      {
        id: "react-basics-8-a",
        text: "It helps React identify which items have changed, been added, or removed",
        isCorrect: true,
        explanation: "The 'key' prop gives React a way to identify each element in a list, helping it determine which items have changed, been added, or removed, which improves rendering efficiency."
      },
      {
        id: "react-basics-8-b",
        text: "It's required for CSS styling of list items",
        isCorrect: false,
        explanation: "The 'key' prop has nothing to do with CSS styling. It's used by React's reconciliation algorithm to track list items."
      },
      {
        id: "react-basics-8-c",
        text: "It automatically sorts the list items",
        isCorrect: false,
        explanation: "The 'key' prop doesn't sort list items. It's used for identification, not ordering. Sorting would be done in your JavaScript code before rendering."
      },
      {
        id: "react-basics-8-d",
        text: "It's used to reference list items from parent components",
        isCorrect: false,
        explanation: "While keys are unique identifiers, they're not meant to be used to reference items from parent components. They're primarily for React's internal reconciliation process."
      }
    ],
    explanation: {
      correct: "Correct! The 'key' prop helps React identify which items in a list have changed, been added, or removed. This allows React to update only the necessary components when the list changes, improving performance.",
      incorrect: "The 'key' prop helps React identify which items in a list have changed, been added, or removed. It's not related to CSS styling, doesn't sort items, and isn't primarily for referencing items from parent components.",
      detailed: "When rendering lists in React, each item should have a stable, unique 'key' prop. React uses these keys to create a relationship between the component and the DOM element. When a list is updated, React uses the keys to determine what has changed. Without keys, React would re-render the entire list when any item changes. Keys should be stable, predictable, and unique among siblings - typically using IDs from your data. Using array indices as keys is not recommended if the order of items may change, as it can lead to performance issues and component state bugs."
    }
  },
{
    id: "react-basics-9",
    level: 1,
    topic: "react-basics",
    question: "What is the purpose of the 'StrictMode' component in React?",
    multipleCorrect: true,
    options: [
      {
        id: "react-basics-9-a",
        text: "It highlights potential problems in an application",
        isCorrect: true,
        explanation: "React StrictMode is a tool for highlighting potential problems in an application. It activates additional checks and warnings for its descendants."
      },
      {
        id: "react-basics-9-b",
        text: "It enforces type checking at runtime",
        isCorrect: false,
        explanation: "StrictMode doesn't enforce type checking. For type checking, you would use TypeScript or PropTypes."
      },
      {
        id: "react-basics-9-c",
        text: "It identifies unsafe lifecycle methods",
        isCorrect: true,
        explanation: "One of StrictMode's features is identifying components that use unsafe lifecycle methods that will be deprecated in future React versions."
      },
      {
        id: "react-basics-9-d",
        text: "It prevents the application from running if there are errors",
        isCorrect: false,
        explanation: "StrictMode doesn't prevent the application from running. It adds extra checks and warnings in development mode, but the application still runs."
      },
      {
        id: "react-basics-9-e",
        text: "It detects unexpected side effects",
        isCorrect: true,
        explanation: "StrictMode intentionally double-invokes functions like component constructors and render methods to help detect unexpected side effects."
      }
    ],
    explanation: {
      correct: "Correct! React StrictMode is a tool for highlighting potential problems in an application. It identifies unsafe lifecycle methods and detects unexpected side effects by intentionally double-invoking certain functions in development mode.",
      incorrect: "React StrictMode highlights potential problems in an application, identifies unsafe lifecycle methods, and detects unexpected side effects. It doesn't enforce type checking or prevent the application from running if there are errors.",
      detailed: "StrictMode is a development-only feature that doesn't render any visible UI. It activates additional checks and warnings for its descendants, including: 1) Identifying components with unsafe lifecycle methods, 2) Warning about legacy string ref API usage, 3) Detecting unexpected side effects by double-invoking functions like constructors and render methods, 4) Detecting legacy context API usage, and 5) Ensuring reusable state. These checks only run in development mode and don't impact the production build."
    }
  },
{
    id: "react-basics-10",
    level: 1,
    topic: "react-basics",
    question: "What does the term 'one-way data flow' mean in React?",
    multipleCorrect: false,
    options: [
      {
        id: "react-basics-10-a",
        text: "Data flows from parent components to child components via props",
        isCorrect: true,
        explanation: "One-way data flow in React means that data passes down from parent to child components through props, not the other way around. This makes the application more predictable and easier to understand."
      },
      {
        id: "react-basics-10-b",
        text: "Data can only be stored in the Redux store",
        isCorrect: false,
        explanation: "One-way data flow isn't about Redux specifically. It's a core React concept that exists even without Redux, referring to how data passes from parent to child components."
      },
      {
        id: "react-basics-10-c",
        text: "Components can only communicate with their immediate children",
        isCorrect: false,
        explanation: "While data typically flows from parent to child, components can communicate with any descendant through context or by passing props down through multiple levels, not just immediate children."
      },
      {
        id: "react-basics-10-d",
        text: "Data can only be updated in useEffect hooks",
        isCorrect: false,
        explanation: "This is incorrect. Data can be updated in event handlers, state setters, and various other places, not just useEffect hooks. One-way data flow refers to the direction of data passing, not where updates occur."
      }
    ],
    explanation: {
      correct: "Correct! One-way data flow means that data in React flows in a single direction, from parent components down to child components via props. This makes the application more predictable and easier to debug.",
      incorrect: "One-way data flow in React means that data passes down from parent to child components through props. It's not specifically about Redux, isn't limited to immediate children, and doesn't restrict where data updates can occur.",
      detailed: "One-way data flow (also called unidirectional data flow) is a core principle in React. Parent components pass data down to child components via props, but child components cannot directly modify their parent's state. If a child needs to communicate upward, it does so through callbacks provided by the parent. This pattern makes applications more predictable and easier to understand because you can trace how data changes through your application. It contrasts with two-way binding where changes in the UI automatically update the data model and vice versa."
    }
  },
{
    id: "components-1",
    level: 1,
    topic: "components",
    question: "What is the correct naming convention for React components?",
    multipleCorrect: false,
    options: [
      {
        id: "components-1-a",
        text: "PascalCase (starting with an uppercase letter)",
        isCorrect: true,
        explanation: "React components should be named using PascalCase (starting with an uppercase letter). This helps React distinguish components from regular HTML elements."
      },
      {
        id: "components-1-b",
        text: "camelCase (starting with a lowercase letter)",
        isCorrect: false,
        explanation: "camelCase (starting with lowercase) is typically used for variables, functions, and instances in React, not for component definitions."
      },
      {
        id: "components-1-c",
        text: "kebab-case (lowercase with hyphens)",
        isCorrect: false,
        explanation: "kebab-case is not used for React component naming. In fact, it wouldn't work because hyphens aren't valid in JavaScript identifiers."
      },
      {
        id: "components-1-d",
        text: "snake_case (lowercase with underscores)",
        isCorrect: false,
        explanation: "snake_case is not the convention for React components. While it would work technically, it goes against React's official style guide."
      }
    ],
    explanation: {
      correct: "Correct! React components should be named using PascalCase (starting with an uppercase letter). This convention helps React distinguish custom components from regular HTML elements in JSX.",
      incorrect: "React components should be named using PascalCase (starting with an uppercase letter). This is important because React uses this capitalization to distinguish between custom components and regular HTML elements in JSX.",
      detailed: "In React, component names must start with an uppercase letter (PascalCase) because JSX uses capitalization to differentiate between custom components and HTML elements. For example, <div> refers to an HTML div element, while <MyComponent> refers to a React component. If you tried to use <mycomponent> (lowercase), React would treat it as an HTML tag, not a component. This convention is enforced by the React compiler and is part of the official React style guide."
    }
  },
{
    id: "components-2",
    level: 1,
    topic: "components",
    question: "What's the difference between a functional component and a class component in React?",
    multipleCorrect: true,
    options: [
      {
        id: "components-2-a",
        text: "Functional components use hooks for state and lifecycle features",
        isCorrect: true,
        explanation: "Since React 16.8, functional components can use hooks like useState and useEffect to add state and lifecycle features that were previously only available in class components."
      },
      {
        id: "components-2-b",
        text: "Class components extend React.Component and can have local state",
        isCorrect: true,
        explanation: "Class components extend React.Component or React.PureComponent and can have local state using this.state and this.setState()."
      },
      {
        id: "components-2-c",
        text: "Functional components are faster in all scenarios",
        isCorrect: false,
        explanation: "While functional components can have some performance advantages, it's not accurate to say they're faster in all scenarios. Performance depends on many factors beyond just the component type."
      },
      {
        id: "components-2-d",
        text: "Class components have access to lifecycle methods like componentDidMount",
        isCorrect: true,
        explanation: "Class components have access to lifecycle methods such as componentDidMount, componentDidUpdate, and componentWillUnmount, which functional components replace with useEffect."
      },
      {
        id: "components-2-e",
        text: "Only class components can render UI",
        isCorrect: false,
        explanation: "Both functional and class components can render UI. The ability to return JSX is a fundamental feature of all React components."
      }
    ],
    explanation: {
      correct: "Correct! Functional components use hooks for state and lifecycle features, while class components extend React.Component, have local state, and access to lifecycle methods. Both can render UI, and performance depends on specific use cases.",
      incorrect: "The key differences are that functional components use hooks for state and lifecycle features, class components extend React.Component and have access to lifecycle methods and state through this.state. Both can render UI, and neither is universally faster in all scenarios.",
      detailed: "Historically, functional components were simpler and couldn't use state or lifecycle methods, while class components could. Since React 16.8 introduced Hooks, functional components can now use state and lifecycle features too. Today, functional components with hooks are generally preferred for new code because they're more concise, easier to test, and avoid 'this' binding issues. Class components are still supported but considered legacy. The React team recommends using functional components with hooks for new code."
    }
  },
{
    id: "components-3",
    level: 1,
    topic: "components",
    question: "How do you pass data from a parent component to a child component in React?",
    multipleCorrect: false,
    options: [
      {
        id: "components-3-a",
        text: "Using props",
        isCorrect: true,
        explanation: "Props (short for properties) are the standard way to pass data from parent to child components in React."
      },
      {
        id: "components-3-b",
        text: "Using state",
        isCorrect: false,
        explanation: "State is used to manage a component's internal data, not to pass data between components. While a parent's state can be passed as props, state itself isn't the mechanism for component communication."
      },
      {
        id: "components-3-c",
        text: "Using refs",
        isCorrect: false,
        explanation: "Refs are used to access DOM elements or React component instances, not for passing data between components in the normal data flow."
      },
      {
        id: "components-3-d",
        text: "Using event emitters",
        isCorrect: false,
        explanation: "Event emitters aren't a built-in React concept for component communication. React uses props for downward data flow and callbacks for upward communication."
      }
    ],
    explanation: {
      correct: "Correct! Props (short for properties) are the standard way to pass data from parent to child components in React. They form the basis of React's one-way data flow.",
      incorrect: "Props (short for properties) are the standard way to pass data from parent to child components in React. State is for internal component data, refs are for accessing DOM elements, and event emitters aren't a built-in React pattern.",
      detailed: "Props are read-only and flow down the component tree, allowing parent components to pass data to their children. To use props, you define attributes when using a component (<MyComponent name=\"value\" />) and then access them in the child component. In functional components, props are received as a parameter. In class components, they're accessed via this.props. Props can be any JavaScript value: strings, numbers, objects, arrays, functions, and even other React elements."
    }
  },
{
    id: "components-4",
    level: 1,
    topic: "components",
    question: "How do you handle events in React components?",
    multipleCorrect: false,
    options: [
      {
        id: "components-4-a",
        text: "Using camelCase event handlers and passing functions as event handlers",
        isCorrect: true,
        explanation: "React uses camelCase for event names (e.g., onClick instead of onclick) and requires you to pass functions as event handlers, not strings or function invocations."
      },
      {
        id: "components-4-b",
        text: "Using lowercase event handlers with string values",
        isCorrect: false,
        explanation: "React doesn't use lowercase event handlers with string values. This approach is more similar to traditional HTML, not React's synthetic event system."
      },
      {
        id: "components-4-c",
        text: "Using the addEventListener method directly on DOM elements",
        isCorrect: false,
        explanation: "While you can use addEventListener in React (typically in useEffect), it's not the standard way to handle events in JSX. React provides a synthetic event system with props like onClick."
      },
      {
        id: "components-4-d",
        text: "Using jQuery event binding",
        isCorrect: false,
        explanation: "React doesn't rely on jQuery for event handling. It has its own synthetic event system that works directly with JSX elements."
      }
    ],
    explanation: {
      correct: "Correct! React uses camelCase for event names (like onClick instead of onclick) and requires you to pass functions as event handlers, not strings or direct function calls.",
      incorrect: "React handles events using camelCase event handler props (like onClick) and passing functions as event handlers. It doesn't use lowercase handlers with strings, direct addEventListener calls, or jQuery event binding.",
      detailed: "React's event handling differs from standard HTML in several ways: 1) Event names use camelCase (onClick vs onclick), 2) You pass functions as event handlers, not strings, 3) You must explicitly call preventDefault() to prevent default behavior (returning false won't work), and 4) React uses a synthetic event system for cross-browser compatibility. Event handlers receive a synthetic event object that conforms to the W3C spec, regardless of browser."
    }
  },
{
    id: "components-5",
    level: 1,
    topic: "components",
    question: "How do you create a functional component in React?",
    multipleCorrect: false,
    options: [
      {
        id: "components-5-a",
        text: "By defining a JavaScript function that returns JSX",
        isCorrect: true,
        explanation: "A functional component is a JavaScript function that accepts props as an argument and returns JSX to describe what should be rendered."
      },
      {
        id: "components-5-b",
        text: "By extending the React.Component class",
        isCorrect: false,
        explanation: "Extending React.Component creates a class component, not a functional component. Functional components are simpler and don't use class syntax."
      },
      {
        id: "components-5-c",
        text: "By creating a new instance of React.FunctionalComponent",
        isCorrect: false,
        explanation: "There is no React.FunctionalComponent class in React. Functional components are just JavaScript functions that return JSX."
      },
      {
        id: "components-5-d",
        text: "By using the createFunctionalComponent() method",
        isCorrect: false,
        explanation: "There is no createFunctionalComponent() method in React. Functional components are simply defined as JavaScript functions."
      }
    ],
    explanation: {
      correct: "Correct! A functional component in React is created by defining a JavaScript function that accepts props as an argument and returns JSX to describe what should be rendered.",
      incorrect: "Functional components are created by defining JavaScript functions that return JSX. They don't extend React.Component, don't use React.FunctionalComponent (which doesn't exist), and don't use a createFunctionalComponent() method.",
      detailed: "Functional components are the simpler way to define components in React. A minimal functional component looks like: function Welcome(props) { return <h1>Hello, {props.name}</h1>; }. With ES6 arrow functions, it can be even more concise: const Welcome = (props) => <h1>Hello, {props.name}</h1>;. Since React 16.8, functional components can use hooks like useState and useEffect to add state and lifecycle features, making them just as powerful as class components but with a simpler syntax."
    }
  },
{
    id: "forms-1",
    level: 1,
    topic: "forms",
    question: "What is a controlled component in React forms?",
    multipleCorrect: false,
    options: [
      {
        id: "forms-1-a",
        text: "A form element whose value is controlled by React state",
        isCorrect: true,
        explanation: "A controlled component is one where form data is handled by React state. The value of the form element is set by state, and changes are handled by state update functions."
      },
      {
        id: "forms-1-b",
        text: "A form element that can only be modified by the developer, not the user",
        isCorrect: false,
        explanation: "Controlled doesn't mean the user can't modify it. It means React state controls the value, but users can still interact with it, triggering state updates."
      },
      {
        id: "forms-1-c",
        text: "A form with validation logic",
        isCorrect: false,
        explanation: "While controlled components make validation easier, having validation logic doesn't define a controlled component. It's about how the form data is managed."
      },
      {
        id: "forms-1-d",
        text: "A form that submits data to a server",
        isCorrect: false,
        explanation: "Both controlled and uncontrolled forms can submit data to a server. The distinction is about how the form data is managed, not what happens on submission."
      }
    ],
    explanation: {
      correct: "Correct! A controlled component in React forms is one where the form element's value is controlled by React state. Every state change is handled by a React handler function.",
      incorrect: "A controlled component is a form element whose value is controlled by React state. It's not about restricting user modifications, having validation logic, or submitting to a server.",
      detailed: "In a controlled component, React state is the 'single source of truth' for the form element's value. The value is set using the value prop (or checked for checkboxes/radios), and changes are handled by an onChange handler that updates the state. This gives you complete control over the form's behavior and makes it easy to implement features like validation, formatting, or conditional logic. Controlled components follow a clear data flow: user input → onChange event → state update → re-render with new value."
    }
  },
{
    id: "forms-2",
    level: 1,
    topic: "forms",
    question: "What is an uncontrolled component in React forms?",
    multipleCorrect: false,
    options: [
      {
        id: "forms-2-a",
        text: "A form element whose value is stored in the DOM itself",
        isCorrect: true,
        explanation: "In uncontrolled components, form data is handled by the DOM itself. React doesn't set the value of form elements, but can access it using refs when needed."
      },
      {
        id: "forms-2-b",
        text: "A form element that doesn't have any validation",
        isCorrect: false,
        explanation: "The lack of validation doesn't define an uncontrolled component. Uncontrolled components can still have validation, though it's typically handled differently than in controlled components."
      },
      {
        id: "forms-2-c",
        text: "A form that can't be modified once rendered",
        isCorrect: false,
        explanation: "Uncontrolled doesn't mean unmodifiable. Users can still interact with and modify uncontrolled form elements; React just isn't directly managing the value."
      },
      {
        id: "forms-2-d",
        text: "A form that doesn't submit data to a server",
        isCorrect: false,
        explanation: "Both controlled and uncontrolled forms can submit data to a server. The distinction is about how the form data is managed, not what happens on submission."
      }
    ],
    explanation: {
      correct: "Correct! An uncontrolled component is a form element whose value is stored in the DOM itself, not in React state. React can access the value using refs when needed.",
      incorrect: "An uncontrolled component is a form element whose value is stored in the DOM itself. It's not about lacking validation, being unmodifiable, or not submitting to a server.",
      detailed: "In uncontrolled components, the DOM itself maintains the form state. You can set an initial value using the defaultValue prop (or defaultChecked for checkboxes/radios), but after that, React doesn't control the value. To access the current value, you use a ref. Uncontrolled components are simpler for basic forms and can be useful when integrating with non-React code. However, they offer less control than controlled components, making features like validation or conditional fields more challenging to implement."
    }
  },
{
    id: "forms-3",
    level: 1,
    topic: "forms",
    question: "How do you create a controlled text input in React?",
    multipleCorrect: false,
    options: [
      {
        id: "forms-3-a",
        text: "By setting the value prop and handling onChange to update state",
        isCorrect: true,
        explanation: "A controlled text input has its value set by React state and updates that state through an onChange handler. This creates a complete control loop where React manages the input's value."
      },
      {
        id: "forms-3-b",
        text: "By setting the defaultValue prop",
        isCorrect: false,
        explanation: "Setting defaultValue creates an uncontrolled input, not a controlled one. Controlled inputs use the value prop, which keeps the input tied to React state."
      },
      {
        id: "forms-3-c",
        text: "By using a ref to access the input's value",
        isCorrect: false,
        explanation: "Using refs to access input values directly creates uncontrolled components, not controlled ones. Controlled components use state and onChange handlers."
      },
      {
        id: "forms-3-d",
        text: "By setting the controlled prop to true",
        isCorrect: false,
        explanation: "There is no 'controlled' prop in React. A component becomes controlled when you set its value from state and handle changes to update that state."
      }
    ],
    explanation: {
      correct: "Correct! A controlled text input is created by setting the value prop to a state variable and handling the onChange event to update that state.",
      incorrect: "Controlled text inputs are created by setting the value prop and handling onChange to update state. Using defaultValue, refs, or a non-existent 'controlled' prop doesn't create controlled inputs.",
      detailed: "Here's a basic example: function ControlledInput() { const [value, setValue] = useState(''); return <input value={value} onChange={(e) => setValue(e.target.value)} />; }. The key aspects are: 1) The input's value comes from state, 2) The onChange handler updates that state, and 3) The state change causes a re-render with the new value. This creates a complete control loop where React state is the 'single source of truth' for the input's value. This pattern gives you full control over the input, making it easy to implement validation, formatting, or other transformations on user input."
    }
  },
{
    id: "forms-4",
    level: 1,
    topic: "forms",
    question: "How do you create an uncontrolled text input in React?",
    multipleCorrect: false,
    options: [
      {
        id: "forms-4-a",
        text: "By using a ref and optionally setting defaultValue",
        isCorrect: true,
        explanation: "Uncontrolled inputs manage their own state internally (in the DOM). You can use a ref to access the current value when needed and optionally set an initial value with defaultValue."
      },
      {
        id: "forms-4-b",
        text: "By setting the value prop without an onChange handler",
        isCorrect: false,
        explanation: "Setting the value prop without an onChange handler would create a read-only input, not an uncontrolled one. Uncontrolled inputs typically use defaultValue or no value prop at all."
      },
      {
        id: "forms-4-c",
        text: "By setting the uncontrolled prop to true",
        isCorrect: false,
        explanation: "There is no 'uncontrolled' prop in React. A component is uncontrolled when you let the DOM manage its state instead of React."
      },
      {
        id: "forms-4-d",
        text: "By using state but not updating it on changes",
        isCorrect: false,
        explanation: "This would create a read-only input, not an uncontrolled one. Uncontrolled inputs don't use React state to manage their value at all."
      }
    ],
    explanation: {
      correct: "Correct! An uncontrolled text input is created by letting the DOM manage the input's state internally and using a ref to access the value when needed. You can optionally set an initial value with defaultValue.",
      incorrect: "Uncontrolled text inputs are created using refs and optionally setting defaultValue. Setting value without onChange creates read-only inputs, there's no 'uncontrolled' prop, and using state without updates creates read-only inputs.",
      detailed: "Here's a basic example: function UncontrolledInput() { const inputRef = useRef(); const handleSubmit = () => { console.log(inputRef.current.value); }; return <input defaultValue=\"initial value\" ref={inputRef} />; }. The key aspects are: 1) The input manages its own state internally, 2) You can set an initial value with defaultValue, and 3) You access the current value using a ref when needed. Uncontrolled components are simpler for basic cases but offer less control for complex forms. They're useful when integrating with non-React code or when performance is a concern."
    }
  },
{
    id: "forms-5",
    level: 1,
    topic: "forms",
    question: "What's the difference between the 'value' and 'defaultValue' props for form inputs in React?",
    multipleCorrect: false,
    options: [
      {
        id: "forms-5-a",
        text: "value creates a controlled component, while defaultValue creates an uncontrolled component",
        isCorrect: true,
        explanation: "The value prop creates a controlled component where React manages the input's state. The defaultValue prop sets the initial value for an uncontrolled component where the DOM manages the state."
      },
      {
        id: "forms-5-b",
        text: "value is for text inputs, while defaultValue is for other input types",
        isCorrect: false,
        explanation: "Both value and defaultValue can be used with text inputs and other input types. The distinction is about controlled vs. uncontrolled, not input types."
      },
      {
        id: "forms-5-c",
        text: "value is read-only, while defaultValue can be changed by the user",
        isCorrect: false,
        explanation: "This is incorrect. A controlled input with value can be changed by the user if you provide an onChange handler. The difference is in how the state is managed, not whether users can interact with it."
      },
      {
        id: "forms-5-d",
        text: "value is for initial values, while defaultValue is for reset values",
        isCorrect: false,
        explanation: "This is incorrect. defaultValue is for initial values in uncontrolled components, while value is for the current value in controlled components. Neither is specifically for reset values."
      }
    ],
    explanation: {
      correct: "Correct! The value prop creates a controlled component where React manages the input's state, while defaultValue sets the initial value for an uncontrolled component where the DOM manages the state.",
      incorrect: "The key difference is that value creates a controlled component, while defaultValue creates an uncontrolled component. The other options contain misconceptions about how these props work.",
      detailed: "When you use value, you're telling React: 'Always set this input's value to what I provide.' This requires an onChange handler to update the value when the user types, creating a controlled component. When you use defaultValue, you're telling React: 'Set this input's initial value, then let the DOM handle it from there.' The input becomes uncontrolled, managing its own state internally. For controlled components, changes to value will update the input. For uncontrolled components, changes to defaultValue after the initial render have no effect."
    }
  },
{
    id: "hooks-1",
    level: 1,
    topic: "hooks",
    question: "What are React Hooks?",
    multipleCorrect: false,
    options: [
      {
        id: "hooks-1-a",
        text: "Functions that let you use state and other React features in functional components",
        isCorrect: true,
        explanation: "React Hooks are functions that let you 'hook into' React state and lifecycle features from functional components, which previously was only possible in class components."
      },
      {
        id: "hooks-1-b",
        text: "Classes that extend the functionality of React components",
        isCorrect: false,
        explanation: "Hooks are functions, not classes. They don't extend components; they provide a way to use React features in functional components."
      },
      {
        id: "hooks-1-c",
        text: "Methods that can only be used in class components",
        isCorrect: false,
        explanation: "The opposite is true. Hooks can only be used in functional components, not in class components. They were introduced to bring state and lifecycle features to functional components."
      },
      {
        id: "hooks-1-d",
        text: "Special components that manage global state",
        isCorrect: false,
        explanation: "Hooks aren't components themselves. While some hooks like useContext can help access global-like state, hooks in general are functions that let you use React features in functional components."
      }
    ],
    explanation: {
      correct: "Correct! React Hooks are functions that let you use state and other React features in functional components without writing a class.",
      incorrect: "React Hooks are functions that let you use state and other React features in functional components. They're not classes, not limited to class components, and not special components themselves.",
      detailed: "Hooks were introduced in React 16.8 to solve several problems: 1) Difficulty reusing stateful logic between components, 2) Complex components becoming hard to understand, and 3) Classes being confusing for both humans and machines. Common built-in hooks include useState for state management, useEffect for side effects, useContext for context consumption, and useRef for persistent mutable values. Hooks follow specific rules: they can only be called at the top level of your component (not inside loops, conditions, or nested functions) and only from React function components or custom hooks."
    }
  },
{
    id: "hooks-2",
    level: 1,
    topic: "hooks",
    question: "What is the purpose of the useState hook?",
    multipleCorrect: false,
    options: [
      {
        id: "hooks-2-a",
        text: "To add state to functional components",
        isCorrect: true,
        explanation: "useState allows functional components to have local state, which was previously only possible in class components. It returns the current state value and a function to update it."
      },
      {
        id: "hooks-2-b",
        text: "To perform side effects after rendering",
        isCorrect: false,
        explanation: "Performing side effects is the purpose of useEffect, not useState. useState is purely for state management."
      },
      {
        id: "hooks-2-c",
        text: "To create a reference to a DOM element",
        isCorrect: false,
        explanation: "Creating references to DOM elements is the purpose of useRef, not useState. useState is for managing component state that triggers re-renders when changed."
      },
      {
        id: "hooks-2-d",
        text: "To memoize expensive calculations",
        isCorrect: false,
        explanation: "Memoizing expensive calculations is the purpose of useMemo, not useState. useState is for managing component state."
      }
    ],
    explanation: {
      correct: "Correct! The useState hook allows functional components to have local state. It returns an array with two elements: the current state value and a function to update it.",
      incorrect: "useState is used to add state to functional components. It's not for performing side effects (useEffect), creating DOM references (useRef), or memoizing calculations (useMemo).",
      detailed: "useState is one of the most commonly used hooks in React. It takes an initial state value as its argument and returns an array with two elements: the current state value and a function to update it. For example: const [count, setCount] = useState(0);. To update the state, you call the setter function: setCount(1) or setCount(prevCount => prevCount + 1). Unlike this.setState in class components, the state updater from useState doesn't automatically merge objects - it replaces the previous state entirely. Multiple useState calls can be used for separate state variables in a single component."
    }
  },
{
    id: "hooks-3",
    level: 1,
    topic: "hooks",
    question: "What is the purpose of the useEffect hook?",
    multipleCorrect: false,
    options: [
      {
        id: "hooks-3-a",
        text: "To perform side effects in functional components",
        isCorrect: true,
        explanation: "useEffect allows you to perform side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM - things that would typically be handled by lifecycle methods in class components."
      },
      {
        id: "hooks-3-b",
        text: "To create local state in functional components",
        isCorrect: false,
        explanation: "Creating local state is the purpose of the useState hook, not useEffect. useEffect is for side effects that happen after rendering."
      },
      {
        id: "hooks-3-c",
        text: "To optimize rendering performance automatically",
        isCorrect: false,
        explanation: "useEffect doesn't automatically optimize rendering performance. For performance optimization, you would use useMemo, useCallback, or React.memo."
      },
      {
        id: "hooks-3-d",
        text: "To create refs in functional components",
        isCorrect: false,
        explanation: "Creating refs is the purpose of the useRef hook, not useEffect. useRef creates a mutable reference that persists across renders."
      }
    ],
    explanation: {
      correct: "Correct! The useEffect hook allows you to perform side effects in functional components. It serves a similar purpose to componentDidMount, componentDidUpdate, and componentWillUnmount lifecycle methods in class components.",
      incorrect: "useEffect is for performing side effects in functional components, such as data fetching, subscriptions, or DOM manipulation. It's not for creating state (useState), optimizing rendering (useMemo/useCallback), or creating refs (useRef).",
      detailed: "useEffect runs after every completed render by default. You can control when it runs by providing a dependency array as the second argument. An empty array ([]) means it only runs after the initial render (like componentDidMount). An array with values means it runs when any of those values change. Omitting the array means it runs after every render. useEffect can also return a cleanup function, which runs before the component unmounts or before the effect runs again, similar to componentWillUnmount."
    }
  },
{
    id: "hooks-4",
    level: 1,
    topic: "hooks",
    question: "What is the purpose of the useContext hook?",
    multipleCorrect: false,
    options: [
      {
        id: "hooks-4-a",
        text: "To consume values from a React Context",
        isCorrect: true,
        explanation: "useContext is a hook that lets you read and subscribe to a context in a functional component. It's a cleaner alternative to the Context.Consumer component approach."
      },
      {
        id: "hooks-4-b",
        text: "To create a new Context",
        isCorrect: false,
        explanation: "Creating a new Context is done with React.createContext(), not useContext. useContext is for consuming an existing context."
      },
      {
        id: "hooks-4-c",
        text: "To provide values to child components",
        isCorrect: false,
        explanation: "Providing values to child components is done with the Context.Provider component, not the useContext hook. useContext is for consuming context values."
      },
      {
        id: "hooks-4-d",
        text: "To manage local component state",
        isCorrect: false,
        explanation: "Managing local component state is the purpose of useState, not useContext. useContext is specifically for accessing context values."
      }
    ],
    explanation: {
      correct: "Correct! The useContext hook allows functional components to consume values from a React Context. It provides a more straightforward way to access context compared to using Context.Consumer.",
      incorrect: "useContext is used to consume values from a React Context. It's not for creating new contexts (React.createContext), providing values (Context.Provider), or managing local state (useState).",
      detailed: "useContext accepts a context object (created by React.createContext) and returns the current context value for that context. The value is determined by the nearest matching Provider above the calling component in the tree. When the Provider updates, any component using that context will re-render with the latest value. useContext simplifies working with context in functional components compared to the older Context.Consumer approach, which required render props or higher-order components."
    }
  },
{
    id: "hooks-5",
    level: 1,
    topic: "hooks",
    question: "What is the purpose of the useRef hook?",
    multipleCorrect: true,
    options: [
      {
        id: "hooks-5-a",
        text: "To create a mutable reference that persists across renders",
        isCorrect: true,
        explanation: "useRef returns a mutable ref object whose .current property is initialized to the passed argument. This object persists for the full lifetime of the component."
      },
      {
        id: "hooks-5-b",
        text: "To access DOM elements directly",
        isCorrect: true,
        explanation: "One common use of useRef is to access DOM elements directly. By assigning the ref to an element's ref attribute, you can access that element in your component code."
      },
      {
        id: "hooks-5-c",
        text: "To store values that don't trigger re-renders when changed",
        isCorrect: true,
        explanation: "Unlike state, changing a ref's .current value doesn't cause a re-render. This makes refs useful for storing values that need to persist between renders without triggering updates."
      },
      {
        id: "hooks-5-d",
        text: "To optimize rendering performance automatically",
        isCorrect: false,
        explanation: "useRef doesn't automatically optimize rendering performance. It can help you implement optimizations, but it doesn't do so on its own."
      },
      {
        id: "hooks-5-e",
        text: "To replace useState for all use cases",
        isCorrect: false,
        explanation: "useRef cannot replace useState for most use cases. While refs persist across renders, changes to refs don't trigger re-renders, which is often necessary for UI updates."
      }
    ],
    explanation: {
      correct: "Correct! useRef creates a mutable reference that persists across renders, can be used to access DOM elements directly, and stores values that don't trigger re-renders when changed.",
      incorrect: "useRef creates a mutable reference that persists across renders, can access DOM elements directly, and stores values without triggering re-renders. It doesn't automatically optimize performance or replace useState for all use cases.",
      detailed: "useRef serves two main purposes: 1) Accessing DOM elements - by passing the ref to an element's ref attribute, you can interact with that element directly (e.g., to focus an input or measure its dimensions). 2) Storing mutable values - unlike state, changing a ref doesn't trigger a re-render, making it useful for values like previous state, timers, or any data that needs to persist between renders without affecting the UI. The .current property of the ref object can hold any value, similar to an instance property on a class."
    }
  }
];

// Convert QuestionWithCategory to Question by removing topic
export const questions: Question[] = questionDatabase.map(({ topic, ...question }) => question);
