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
export const questionDatabase: QuestionWithCategory[] = [
  // ==================== REACT BASICS QUESTIONS (60 questions) ====================
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
  
  // Continue with more React Basics questions (50 more)
  {
    id: "react-basics-11",
    level: 1,
    topic: "react-basics",
    question: "What is the purpose of the 'children' prop in React?",
    multipleCorrect: false,
    options: [
      {
        id: "react-basics-11-a",
        text: "To access and render content between opening and closing tags of a component",
        isCorrect: true,
        explanation: "The 'children' prop allows components to receive and render content that's placed between their opening and closing tags, enabling component composition."
      },
      {
        id: "react-basics-11-b",
        text: "To create child components programmatically",
        isCorrect: false,
        explanation: "The 'children' prop doesn't create components; it accesses content that's already defined between component tags. Creating components programmatically would typically use mapping or conditional rendering."
      },
      {
        id: "react-basics-11-c",
        text: "To define which components should re-render",
        isCorrect: false,
        explanation: "The 'children' prop has nothing to do with controlling re-renders. For optimizing renders, you would use React.memo, shouldComponentUpdate, or similar techniques."
      },
      {
        id: "react-basics-11-d",
        text: "To access a component's parent in the component tree",
        isCorrect: false,
        explanation: "The 'children' prop doesn't provide access to a component's parent. React's data flow is one-way (parent to child), and children don't have direct references to their parents."
      }
    ],
    explanation: {
      correct: "Correct! The 'children' prop allows components to receive and render the content placed between their opening and closing tags. This is a key mechanism for component composition in React.",
      incorrect: "The 'children' prop allows components to access and render the content placed between their opening and closing tags. It doesn't create components programmatically, control re-renders, or provide access to parent components.",
      detailed: "In React, 'children' is a special prop that's automatically passed to components and contains the content between the opening and closing tags of that component. For example, in <Button>Click me</Button>, the string 'Click me' would be passed as the children prop to the Button component. This enables flexible component composition, allowing components to act as wrappers or containers for other content. The children prop can contain anything from simple text to complex nested components, and can be manipulated like any other prop."
    }
  },
  {
    id: "react-basics-12",
    level: 1,
    topic: "react-basics",
    question: "What is the purpose of React Fragments?",
    multipleCorrect: false,
    options: [
      {
        id: "react-basics-12-a",
        text: "To group multiple elements without adding extra nodes to the DOM",
        isCorrect: true,
        explanation: "React Fragments allow you to group multiple elements together without adding an extra node to the DOM. This is useful when you need to return multiple elements from a component."
      },
      {
        id: "react-basics-12-b",
        text: "To split a component into smaller pieces",
        isCorrect: false,
        explanation: "Fragments don't split components. To split a component into smaller pieces, you would create new component functions or classes."
      },
      {
        id: "react-basics-12-c",
        text: "To cache component rendering for performance",
        isCorrect: false,
        explanation: "Fragments don't cache rendering. For performance optimization through caching, you would use React.memo, useMemo, or similar techniques."
      },
      {
        id: "react-basics-12-d",
        text: "To isolate component state",
        isCorrect: false,
        explanation: "Fragments don't isolate state. Each component manages its own state regardless of whether it's wrapped in a Fragment or not."
      }
    ],
    explanation: {
      correct: "Correct! React Fragments allow you to group multiple elements together without adding an extra node to the DOM. This keeps the DOM cleaner and can help with styling and layout.",
      incorrect: "React Fragments are used to group multiple elements without adding extra nodes to the DOM. They don't split components, cache rendering, or isolate component state.",
      detailed: "Fragments solve the common problem of needing to return multiple elements from a component without wrapping them in an unnecessary div or other container. You can use the explicit <React.Fragment> syntax or the shorthand <> syntax. Fragments can take a key prop when mapping over collections, but they don't support other props. By using Fragments, you avoid creating unnecessary DOM nodes, which can improve performance and prevent styling issues that might arise from extra wrapper elements."
    }
  },
  {
    id: "react-basics-13",
    level: 1,
    topic: "react-basics",
    question: "What is the difference between a controlled and an uncontrolled component in React?",
    multipleCorrect: false,
    options: [
      {
        id: "react-basics-13-a",
        text: "In controlled components, form data is handled by React state, while in uncontrolled components, the DOM handles it",
        isCorrect: true,
        explanation: "Controlled components use React state to handle form data, with every state change handled by a React function. Uncontrolled components rely on the DOM itself to store the form data, which is accessed using refs."
      },
      {
        id: "react-basics-13-b",
        text: "Controlled components can't be updated, while uncontrolled components can",
        isCorrect: false,
        explanation: "This is incorrect. Controlled components can be updated through state changes. In fact, they're more directly controllable than uncontrolled components."
      },
      {
        id: "react-basics-13-c",
        text: "Controlled components are class components, while uncontrolled components are functional components",
        isCorrect: false,
        explanation: "The distinction between controlled and uncontrolled has nothing to do with class vs. functional components. Both types can be implemented using either component style."
      },
      {
        id: "react-basics-13-d",
        text: "Controlled components are faster than uncontrolled components",
        isCorrect: false,
        explanation: "There's no inherent performance difference between controlled and uncontrolled components. The choice between them depends on the use case, not performance considerations."
      }
    ],
    explanation: {
      correct: "Correct! In controlled components, form data is handled by React state, with onChange handlers updating the state. In uncontrolled components, the DOM itself handles the data, which is accessed using refs.",
      incorrect: "The key difference is that controlled components manage form data through React state, while uncontrolled components let the DOM handle it. This has nothing to do with updatability, component type, or performance.",
      detailed: "Controlled components provide more control and are generally recommended for most use cases. They make form validation easier, allow immediate UI updates based on input, and make it simpler to reset or modify form values programmatically. Uncontrolled components require less code for simple cases and can be useful when integrating with non-React code. However, they make certain operations like form validation more complex. Most React applications primarily use controlled components for forms."
    }
  },
  {
    id: "react-basics-14",
    level: 1,
    topic: "react-basics",
    question: "What is the purpose of React Context?",
    multipleCorrect: false,
    options: [
      {
        id: "react-basics-14-a",
        text: "To share data that can be considered global for a tree of React components",
        isCorrect: true,
        explanation: "React Context provides a way to pass data through the component tree without having to pass props down manually at every level. It's designed for sharing data that can be considered 'global' for a tree of React components."
      },
      {
        id: "react-basics-14-b",
        text: "To optimize rendering performance automatically",
        isCorrect: false,
        explanation: "Context doesn't automatically optimize rendering performance. In fact, using Context can sometimes lead to unnecessary re-renders if not implemented carefully."
      },
      {
        id: "react-basics-14-c",
        text: "To handle form submissions",
        isCorrect: false,
        explanation: "Context isn't specifically designed for handling form submissions. While you could use Context to share form-related data, it's not its primary purpose."
      },
      {
        id: "react-basics-14-d",
        text: "To replace Redux completely",
        isCorrect: false,
        explanation: "While Context can be used for simple state management, it's not a complete replacement for Redux. Redux offers additional features like middleware, time-travel debugging, and more predictable state updates for complex applications."
      }
    ],
    explanation: {
      correct: "Correct! React Context provides a way to share data that can be considered 'global' for a tree of React components, without having to pass props down manually at every level.",
      incorrect: "React Context is designed to share data through the component tree without prop drilling. It doesn't automatically optimize rendering, isn't specifically for form handling, and isn't a complete replacement for Redux in complex applications.",
      detailed: "Context is primarily used when data needs to be accessible by many components at different nesting levels. It helps avoid 'prop drilling' - passing props through intermediate components that don't need the data but only pass it along. Common use cases include user authentication, theme settings, language preferences, and other application-level settings. Context consists of two main parts: the Provider, which makes data available, and the Consumer, which uses the data. In modern React, useContext hook is the preferred way to consume context."
    }
  },
  {
    id: "react-basics-15",
    level: 1,
    topic: "react-basics",
    question: "What is the purpose of React's Error Boundaries?",
    multipleCorrect: false,
    options: [
      {
        id: "react-basics-15-a",
        text: "To catch JavaScript errors in child components and display fallback UI",
        isCorrect: true,
        explanation: "Error Boundaries are React components that catch JavaScript errors in their child component tree, log those errors, and display a fallback UI instead of crashing the whole app."
      },
      {
        id: "react-basics-15-b",
        text: "To prevent syntax errors during development",
        isCorrect: false,
        explanation: "Error Boundaries don't prevent syntax errors during development. Those are caught by the JavaScript engine and your build tools before the code runs."
      },
      {
        id: "react-basics-15-c",
        text: "To handle network request failures",
        isCorrect: false,
        explanation: "Error Boundaries don't directly handle network request failures. They only catch errors during rendering, in lifecycle methods, and in constructors. For network errors, you would use try/catch or promise handling."
      },
      {
        id: "react-basics-15-d",
        text: "To validate form inputs",
        isCorrect: false,
        explanation: "Error Boundaries aren't designed for form validation. They're for catching and handling unexpected errors in the component tree, not for validating user input."
      }
    ],
    explanation: {
      correct: "Correct! Error Boundaries are React components that catch JavaScript errors in their child component tree, log those errors, and display a fallback UI instead of crashing the entire application.",
      incorrect: "Error Boundaries catch JavaScript errors in child components and display fallback UI. They don't prevent syntax errors during development, handle network failures directly, or validate form inputs.",
      detailed: "Error Boundaries were introduced in React 16 and are created by defining either getDerivedStateFromError() or componentDidCatch() lifecycle methods in a class component. They only catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them. They don't catch errors in event handlers, asynchronous code, or server-side rendering. As of React 18, there's no hook equivalent, so you still need to use class components for Error Boundaries."
    }
  },
  {
    id: "react-basics-16",
    level: 1,
    topic: "react-basics",
    question: "What is the purpose of the 'key' attribute when rendering lists of elements in React?",
    multipleCorrect: false,
    options: [
      {
        id: "react-basics-16-a",
        text: "To help React identify which items have changed, are added, or removed",
        isCorrect: true,
        explanation: "Keys help React identify which items have changed, are added, or removed. Keys should be given to the elements inside an array to give them a stable identity."
      },
      {
        id: "react-basics-16-b",
        text: "To specify the CSS order of elements",
        isCorrect: false,
        explanation: "Keys don't affect CSS or the visual order of elements. They're used internally by React for reconciliation."
      },
      {
        id: "react-basics-16-c",
        text: "To automatically sort the list",
        isCorrect: false,
        explanation: "Keys don't sort the list. They're used for identification, not ordering. Sorting would be done in your JavaScript code before rendering."
      },
      {
        id: "react-basics-16-d",
        text: "To make list items clickable",
        isCorrect: false,
        explanation: "Keys don't make items clickable. To make items clickable, you would add onClick handlers to them."
      }
    ],
    explanation: {
      correct: "Correct! Keys help React identify which items have changed, are added, or removed. This allows React to update only the necessary components when the list changes, improving performance.",
      incorrect: "Keys help React identify which items have changed, are added, or removed. They don't affect CSS order, sort the list, or make items clickable.",
      detailed: "When lists are rendered in React, each item should have a unique 'key' prop. Without keys, React has to update the entire list when an item changes. With keys, React can be more efficient by only updating the changed items. Keys should be stable, predictable, and unique among siblings. Using array indices as keys is not recommended if the order of items may change, as it can lead to performance issues and component state bugs. Ideally, keys should come from your data, such as database IDs."
    }
  },
  {
    id: "react-basics-17",
    level: 1,
    topic: "react-basics",
    question: "What is the recommended way to handle forms in React?",
    multipleCorrect: false,
    options: [
      {
        id: "react-basics-17-a",
        text: "Using controlled components with state",
        isCorrect: true,
        explanation: "Controlled components, where form data is handled by React state, are the recommended approach for most form handling in React. This gives you more control over the form data and validation."
      },
      {
        id: "react-basics-17-b",
        text: "Using jQuery to manipulate the DOM directly",
        isCorrect: false,
        explanation: "Directly manipulating the DOM with jQuery goes against React's declarative paradigm and can lead to issues with React's virtual DOM reconciliation."
      },
      {
        id: "react-basics-17-c",
        text: "Always using uncontrolled components with refs",
        isCorrect: false,
        explanation: "While uncontrolled components are valid in some cases, they're not the generally recommended approach for most forms in React."
      },
      {
        id: "react-basics-17-d",
        text: "Using HTML form submission with page reloads",
        isCorrect: false,
        explanation: "Traditional HTML form submissions with page reloads are typically avoided in React applications, which usually aim to provide a single-page application experience."
      }
    ],
    explanation: {
      correct: "Correct! Using controlled components with React state is the recommended way to handle forms in React. This approach gives you full control over the form data and makes it easier to implement validation, conditional rendering, and dynamic form behavior.",
      incorrect: "The recommended way to handle forms in React is using controlled components with state. This is preferred over jQuery DOM manipulation, always using uncontrolled components, or traditional HTML form submissions with page reloads.",
      detailed: "In controlled components, form elements like <input>, <textarea>, and <select> maintain their own state in React state. Every state update is handled by a handler function like onChange. This gives you direct control over the form at all times, making it easier to: 1) Validate inputs as they change, 2) Conditionally enable/disable form submission, 3) Enforce input formats, and 4) Dynamically change form fields based on other inputs. While uncontrolled components (using refs) require less code for simple forms, controlled components are generally recommended for their flexibility and predictability."
    }
  },
  {
    id: "react-basics-18",
    level: 1,
    topic: "react-basics",
    question: "What is the purpose of the useEffect hook in React?",
    multipleCorrect: false,
    options: [
      {
        id: "react-basics-18-a",
        text: "To perform side effects in functional components",
        isCorrect: true,
        explanation: "useEffect allows you to perform side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM - things that would typically be handled by lifecycle methods in class components."
      },
      {
        id: "react-basics-18-b",
        text: "To create local state in functional components",
        isCorrect: false,
        explanation: "Creating local state is the purpose of the useState hook, not useEffect. useEffect is for side effects that happen after rendering."
      },
      {
        id: "react-basics-18-c",
        text: "To optimize rendering performance automatically",
        isCorrect: false,
        explanation: "useEffect doesn't automatically optimize rendering performance. For performance optimization, you would use useMemo, useCallback, or React.memo."
      },
      {
        id: "react-basics-18-d",
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
    id: "react-basics-19",
    level: 1,
    topic: "react-basics",
    question: "What is the purpose of the useState hook in React?",
    multipleCorrect: false,
    options: [
      {
        id: "react-basics-19-a",
        text: "To add state to functional components",
        isCorrect: true,
        explanation: "useState allows functional components to have local state, which was previously only possible in class components. It returns the current state value and a function to update it."
      },
      {
        id: "react-basics-19-b",
        text: "To perform side effects after rendering",
        isCorrect: false,
        explanation: "Performing side effects is the purpose of useEffect, not useState. useState is purely for state management."
      },
      {
        id: "react-basics-19-c",
        text: "To create a reference to a DOM element",
        isCorrect: false,
        explanation: "Creating references to DOM elements is the purpose of useRef, not useState. useState is for managing state that triggers re-renders when changed."
      },
      {
        id: "react-basics-19-d",
        text: "To memoize expensive calculations",
        isCorrect: false,
        explanation: "Memoizing expensive calculations is the purpose of useMemo, not useState. useState is for managing component state."
      }
    ],
    explanation: {
      correct: "Correct! The useState hook allows functional components to have local state. It returns an array with two elements: the current state value and a function to update it.",
      incorrect: "useState is used to add state to functional components. It's not for performing side effects (useEffect), creating DOM references (useRef), or memoizing calculations (useMemo).",
      detailed: "useState is one of the most commonly used hooks in React. It takes an initial state value as its argument and returns an array with two elements: the current state value and a function to update it. When the update function is called, it triggers a re-render of the component with the new state value. Unlike this.setState in class components, the state updater from useState doesn't automatically merge objects - it replaces the previous state entirely. Multiple useState calls can be used for separate state variables in a single component."
    }
  },
  {
    id: "react-basics-20",
    level: 1,
    topic: "react-basics",
    question: "What is the purpose of React's Virtual DOM?",
    multipleCorrect: false,
    options: [
      {
        id: "react-basics-20-a",
        text: "To improve performance by minimizing direct DOM manipulation",
        isCorrect: true,
        explanation: "The Virtual DOM improves performance by creating a lightweight copy of the real DOM in memory. React updates this Virtual DOM first, compares it with the previous version, and then efficiently updates only the necessary parts of the real DOM."
      },
      {
        id: "react-basics-20-b",
        text: "To enable server-side rendering",
        isCorrect: false,
        explanation: "While the Virtual DOM does help with server-side rendering, that's not its primary purpose. Server-side rendering is a separate feature that uses React's ability to render to strings."
      },
      {
        id: "react-basics-20-c",
        text: "To provide cross-browser compatibility",
        isCorrect: false,
        explanation: "While the Virtual DOM does help with cross-browser issues by abstracting direct DOM manipulation, providing cross-browser compatibility isn't its primary purpose."
      },
      {
        id: "react-basics-20-d",
        text: "To enable two-way data binding",
        isCorrect: false,
        explanation: "React uses one-way data flow, not two-way data binding. The Virtual DOM has nothing to do with data binding direction."
      }
    ],
    explanation: {
      correct: "Correct! React's Virtual DOM improves performance by minimizing direct DOM manipulation. It creates a lightweight representation of the real DOM, updates it first, and then efficiently updates only the necessary parts of the real DOM.",
      incorrect: "The primary purpose of React's Virtual DOM is to improve performance by minimizing direct DOM manipulation. While it helps with server-side rendering and cross-browser compatibility, those aren't its main purposes, and it doesn't enable two-way data binding.",
      detailed: "The Virtual DOM works in three steps: 1) When state changes, React creates a new Virtual DOM tree, 2) It compares this new tree with the previous one (diffing), 3) It calculates the most efficient way to update the real DOM (reconciliation) and applies only those changes. This process is much faster than directly manipulating the DOM for every change, as DOM operations are typically the most expensive part of web applications. The Virtual DOM is a key part of what makes React fast and efficient, especially for complex UIs with frequent updates."
    }
  },
  {
    id: "react-basics-21",
    level: 1,
    topic: "react-basics",
    question: "What is JSX in React?",
    multipleCorrect: false,
    options: [
      {
        id: "react-basics-21-a",
        text: "A syntax extension that allows writing HTML-like code in JavaScript",
        isCorrect: true,
        explanation: "JSX is a syntax extension for JavaScript that looks similar to HTML or XML. It allows you to write HTML-like code in your JavaScript files, making it easier to describe what the UI should look like."
      },
      {
        id: "react-basics-21-b",
        text: "A separate programming language required for React",
        isCorrect: false,
        explanation: "JSX is not a separate programming language. It's a syntax extension for JavaScript that gets transformed into regular JavaScript function calls during the build process."
      },
      {
        id: "react-basics-21-c",
        text: "A browser-native technology that React uses",
        isCorrect: false,
        explanation: "JSX is not natively understood by browsers. It needs to be transformed into regular JavaScript using tools like Babel before it can run in a browser."
      },
      {
        id: "react-basics-21-d",
        text: "A templating engine like Handlebars or EJS",
        isCorrect: false,
        explanation: "While JSX might look similar to templating languages, it's fundamentally different. JSX is transformed into JavaScript function calls, giving it the full power of JavaScript, unlike most templating engines."
      }
    ],
    explanation: {
      correct: "Correct! JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files. It makes it easier to visualize and create React elements.",
      incorrect: "JSX is a syntax extension for JavaScript that allows writing HTML-like code in JavaScript. It's not a separate language, not browser-native, and not a traditional templating engine.",
      detailed: "JSX was created by Facebook for use with React. It looks like HTML but comes with the full power of JavaScript. During the build process, tools like Babel transform JSX into React.createElement() function calls. For example, <div className='greeting'>Hello!</div> becomes React.createElement('div', {className: 'greeting'}, 'Hello!'). JSX makes React code more readable and intuitive by visually resembling the UI it creates, while still providing all the functionality of JavaScript."
    }
  },
  {
    id: "react-basics-22",
    level: 1,
    topic: "react-basics",
    question: "What is the significance of the 'props' object in React components?",
    multipleCorrect: false,
    options: [
      {
        id: "react-basics-22-a",
        text: "It allows data to be passed from parent to child components",
        isCorrect: true,
        explanation: "Props (short for properties) are used to pass data from parent to child components in React. They are the primary way of sharing data across components in a React application."
      },
      {
        id: "react-basics-22-b",
        text: "It's used to store component state",
        isCorrect: false,
        explanation: "Props are not used to store component state. State is managed separately using useState in functional components or this.state in class components."
      },
      {
        id: "react-basics-22-c",
        text: "It allows child components to modify parent component data",
        isCorrect: false,
        explanation: "Props are read-only and follow React's one-way data flow principle. Child components cannot directly modify props they receive from parent components."
      },
      {
        id: "react-basics-22-d",
        text: "It's used to register event listeners on DOM elements",
        isCorrect: false,
        explanation: "While event handlers can be passed as props, the props object itself isn't specifically for registering event listeners. It's a general mechanism for passing any kind of data to components."
      }
    ],
    explanation: {
      correct: "Correct! Props allow data to be passed from parent to child components. They are the primary mechanism for component communication in React's one-way data flow model.",
      incorrect: "Props are used to pass data from parent to child components. They're not for storing component state, don't allow children to modify parent data, and aren't specifically for registering event listeners.",
      detailed: "Props are a core concept in React that enable component composition and reusability. They are passed to components similar to HTML attributes and are accessible inside the component. In functional components, props are received as a parameter. In class components, they're accessed via this.props. Props are immutable - a component cannot change its own props. This enforces the one-way data flow that makes React applications more predictable. If a child needs to communicate with a parent, the parent can pass down callback functions as props."
    }
  },
  {
    id: "react-basics-23",
    level: 1,
    topic: "react-basics",
    question: "What is the purpose of React.memo()?",
    multipleCorrect: false,
    options: [
      {
        id: "react-basics-23-a",
        text: "To prevent unnecessary re-renders of functional components",
        isCorrect: true,
        explanation: "React.memo is a higher-order component that memoizes the result of a function component. It prevents the component from re-rendering if its props haven't changed, which can improve performance."
      },
      {
        id: "react-basics-23-b",
        text: "To create memoized state values",
        isCorrect: false,
        explanation: "Creating memoized values is the purpose of the useMemo hook, not React.memo. React.memo is for memoizing entire component renders."
      },
      {
        id: "react-basics-23-c",
        text: "To remember previous state values",
        isCorrect: false,
        explanation: "Remembering previous state values would typically be done with the useRef hook or by storing previous values in state. React.memo is for performance optimization by preventing unnecessary re-renders."
      },
      {
        id: "react-basics-23-d",
        text: "To create memoized callback functions",
        isCorrect: false,
        explanation: "Creating memoized callback functions is the purpose of the useCallback hook, not React.memo. React.memo is for memoizing component renders."
      }
    ],
    explanation: {
      correct: "Correct! React.memo is a higher-order component that prevents unnecessary re-renders of functional components by memoizing the result based on props comparison.",
      incorrect: "React.memo is used to prevent unnecessary re-renders of functional components. It's not for creating memoized state values (useMemo), remembering previous state (useRef), or creating memoized callbacks (useCallback).",
      detailed: "React.memo works similarly to PureComponent for class components, but for function components. It performs a shallow comparison of props to determine if a re-render is necessary. If the props haven't changed, React reuses the last rendered result, skipping the render and reconciliation steps. This can significantly improve performance for components that render often with the same props. You can also provide a custom comparison function as the second argument to control exactly when re-renders occur. React.memo should be used selectively for components that render often with the same props, not as a default optimization."
    }
  },
  {
    id: "react-basics-24",
    level: 1,
    topic: "react-basics",
    question: "What is the purpose of the useContext hook in React?",
    multipleCorrect: false,
    options: [
      {
        id: "react-basics-24-a",
        text: "To consume values from a React Context",
        isCorrect: true,
        explanation: "useContext is a hook that lets you read and subscribe to a context in a functional component. It's a cleaner alternative to the Context.Consumer component approach."
      },
      {
        id: "react-basics-24-b",
        text: "To create a new Context",
        isCorrect: false,
        explanation: "Creating a new Context is done with React.createContext(), not useContext. useContext is for consuming an existing context."
      },
      {
        id: "react-basics-24-c",
        text: "To provide values to child components",
        isCorrect: false,
        explanation: "Providing values to child components is done with the Context.Provider component, not the useContext hook. useContext is for consuming context values."
      },
      {
        id: "react-basics-24-d",
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
    id: "react-basics-25",
    level: 1,
    topic: "react-basics",
    question: "What is the purpose of the useReducer hook in React?",
    multipleCorrect: false,
    options: [
      {
        id: "react-basics-25-a",
        text: "To manage complex state logic with a reducer function",
        isCorrect: true,
        explanation: "useReducer is a hook that lets you manage complex state logic using a reducer function, similar to how Redux works. It's an alternative to useState when state logic becomes complex."
      },
      {
        id: "react-basics-25-b",
        text: "To reduce the bundle size of React applications",
        isCorrect: false,
        explanation: "useReducer has nothing to do with bundle size optimization. It's a state management hook, not a build optimization tool."
      },
      {
        id: "react-basics-25-c",
        text: "To combine multiple components into one",
        isCorrect: false,
        explanation: "Combining components would be done through composition, not with useReducer. useReducer is specifically for state management."
      },
      {
        id: "react-basics-25-d",
        text: "To reduce the number of re-renders automatically",
        isCorrect: false,
        explanation: "useReducer doesn't automatically reduce re-renders. It can help manage complex state transitions, but components will still re-render when state changes."
      }
    ],
    explanation: {
      correct: "Correct! useReducer is a hook for managing complex state logic with a reducer function. It's particularly useful when state transitions depend on previous state or when state logic is complex.",
      incorrect: "useReducer is used to manage complex state logic with a reducer function. It's not for reducing bundle size, combining components, or automatically reducing re-renders.",
      detailed: "useReducer is an alternative to useState that's preferable when state logic is complex, involves multiple sub-values, or depends on previous state. It takes a reducer function and initial state, returning the current state and a dispatch function. The reducer function takes the current state and an action, returning the new state based on the action type. This pattern, inspired by Redux, centralizes state update logic, making it more predictable and easier to test. useReducer is especially useful for managing form state, step wizards, or any UI with multiple ways to update state."
    }
  },
  {
    id: "react-basics-26",
    level: 1,
    topic: "react-basics",
    question: "What is the purpose of the useRef hook in React?",
    multipleCorrect: true,
    options: [
      {
        id: "react-basics-26-a",
        text: "To create a mutable reference that persists across renders",
        isCorrect: true,
        explanation: "useRef returns a mutable ref object whose .current property is initialized to the passed argument. This object persists for the full lifetime of the component."
      },
      {
        id: "react-basics-26-b",
        text: "To access DOM elements directly",
        isCorrect: true,
        explanation: "One common use of useRef is to access DOM elements directly. By assigning the ref to an element's ref attribute, you can access that element in your component code."
      },
      {
        id: "react-basics-26-c",
        text: "To store values that don't trigger re-renders when changed",
        isCorrect: true,
        explanation: "Unlike state, changing a ref's .current value doesn't cause a re-render. This makes refs useful for storing values that need to persist between renders without triggering updates."
      },
      {
        id: "react-basics-26-d",
        text: "To optimize rendering performance automatically",
        isCorrect: false,
        explanation: "useRef doesn't automatically optimize rendering performance. It can help you implement optimizations, but it doesn't do so on its own."
      },
      {
        id: "react-basics-26-e",
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
  },
  {
    id: "react-basics-27",
    level: 1,
    topic: "react-basics",
    question: "What is the purpose of the useMemo hook in React?",
    multipleCorrect: false,
    options: [
      {
        id: "react-basics-27-a",
        text: "To memoize expensive calculations so they only recompute when dependencies change",
        isCorrect: true,
        explanation: "useMemo memoizes the result of a function call, only recomputing it when one of the dependencies has changed. This is useful for expensive calculations that shouldn't be redone on every render."
      },
      {
        id: "react-basics-27-b",
        text: "To memoize entire component renders",
        isCorrect: false,
        explanation: "Memoizing entire component renders is the purpose of React.memo, not useMemo. useMemo is for memoizing the result of a function or calculation."
      },
      {
        id: "react-basics-27-c",
        text: "To create memoized callback functions",
        isCorrect: false,
        explanation: "Creating memoized callback functions is the purpose of useCallback, not useMemo. While they're similar, useMemo is for values, and useCallback is specifically for functions."
      },
      {
        id: "react-basics-27-d",
        text: "To remember previous state values",
        isCorrect: false,
        explanation: "Remembering previous state values would typically be done with useRef or by storing previous values in state. useMemo is for performance optimization of expensive calculations."
      }
    ],
    explanation: {
      correct: "Correct! useMemo memoizes the result of an expensive calculation, only recomputing it when one of its dependencies changes. This helps avoid unnecessary recalculations during renders.",
      incorrect: "useMemo is used to memoize expensive calculations. It's not for memoizing entire component renders (React.memo), creating memoized callbacks (useCallback), or remembering previous state values (useRef).",
      detailed: "useMemo takes two arguments: a function that computes a value and a dependency array. It returns the memoized value that only changes when one of the dependencies changes. This is particularly useful for expensive calculations like filtering large arrays, complex mathematical operations, or generating derived data from props or state. By memoizing these operations, you prevent them from running on every render, which can significantly improve performance. Without useMemo, these calculations would run on every render, even if the inputs haven't changed."
    }
  },
  {
    id: "react-basics-28",
    level: 1,
    topic: "react-basics",
    question: "What is the purpose of the useCallback hook in React?",
    multipleCorrect: false,
    options: [
      {
        id: "react-basics-28-a",
        text: "To memoize callback functions so they don't get recreated on every render",
        isCorrect: true,
        explanation: "useCallback returns a memoized version of the callback function that only changes if one of the dependencies has changed. This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders."
      },
      {
        id: "react-basics-28-b",
        text: "To create callback URLs for routing",
        isCorrect: false,
        explanation: "useCallback has nothing to do with URL routing. For routing in React, you would typically use a library like React Router."
      },
      {
        id: "react-basics-28-c",
        text: "To memoize the results of expensive calculations",
        isCorrect: false,
        explanation: "Memoizing the results of expensive calculations is the purpose of useMemo, not useCallback. useCallback is specifically for memoizing functions."
      },
      {
        id: "react-basics-28-d",
        text: "To call functions after the component renders",
        isCorrect: false,
        explanation: "Calling functions after rendering would typically be done with useEffect, not useCallback. useCallback is for memoization, not scheduling."
      }
    ],
    explanation: {
      correct: "Correct! useCallback returns a memoized version of the callback function that only changes if one of the dependencies has changed. This helps prevent unnecessary re-renders in child components that receive the callback as a prop.",
      incorrect: "useCallback is used to memoize callback functions to prevent unnecessary re-renders. It's not for creating routing URLs, memoizing calculation results (useMemo does that), or calling functions after rendering (useEffect does that).",
      detailed: "useCallback is particularly useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders. Without useCallback, a new function would be created on every render, which could cause child components wrapped in React.memo to re-render unnecessarily. useCallback takes two arguments: the function to memoize and an array of dependencies. The function will only be recreated if one of the dependencies changes. It's similar to useMemo, but specifically designed for functions."
    }
  },
  {
    id: "react-basics-29",
    level: 1,
    topic: "react-basics",
    question: "What is the purpose of the useLayoutEffect hook in React?",
    multipleCorrect: false,
    options: [
      {
        id: "react-basics-29-a",
        text: "To perform DOM measurements and mutations before the browser paints",
        isCorrect: true,
        explanation: "useLayoutEffect fires synchronously after all DOM mutations but before the browser paints. This makes it useful for DOM measurements and mutations that need to happen before the user sees the updated screen."
      },
      {
        id: "react-basics-29-b",
        text: "To optimize the layout of components automatically",
        isCorrect: false,
        explanation: "useLayoutEffect doesn't automatically optimize component layout. It's a timing hook for when your code runs, not an optimization tool."
      },
      {
        id: "react-basics-29-c",
        text: "To create CSS layouts programmatically",
        isCorrect: false,
        explanation: "useLayoutEffect isn't specifically for creating CSS layouts. While you could manipulate styles within it, that's not its primary purpose."
      },
      {
        id: "react-basics-29-d",
        text: "To replace useEffect in all cases",
        isCorrect: false,
        explanation: "useLayoutEffect shouldn't replace useEffect in all cases. useEffect is preferred for most side effects because it doesn't block painting, leading to better performance."
      }
    ],
    explanation: {
      correct: "Correct! useLayoutEffect runs synchronously after DOM mutations but before the browser paints. This makes it ideal for DOM measurements and mutations that need to be visible immediately, preventing visual flickers.",
      incorrect: "useLayoutEffect is for performing DOM measurements and mutations before the browser paints. It doesn't automatically optimize layouts, isn't specifically for creating CSS layouts, and shouldn't replace useEffect in all cases.",
      detailed: "The signature of useLayoutEffect is identical to useEffect, but it fires synchronously after all DOM mutations and before the browser paints. This ensures that DOM measurements and mutations happen before the user sees the updated screen, preventing potential visual flickers. However, because it runs synchronously and blocks painting, it can negatively impact performance. For this reason, the React team recommends using the standard useEffect when possible, and only using useLayoutEffect when necessary for DOM measurements or preventing flickers."
    }
  },
  {
    id: "react-basics-30",
    level: 1,
    topic: "react-basics",
    question: "What are the Rules of Hooks in React?",
    multipleCorrect: true,
    options: [
      {
        id: "react-basics-30-a",
        text: "Only call hooks at the top level of your component",
        isCorrect: true,
        explanation: "Hooks should not be called inside loops, conditions, or nested functions. This ensures that hooks are called in the same order each time a component renders, which is necessary for React to correctly preserve the state of hooks between renders."
      },
      {
        id: "react-basics-30-b",
        text: "Only call hooks from React function components or custom hooks",
        isCorrect: true,
        explanation: "Hooks should only be called from React function components or from custom hooks. They should not be called from regular JavaScript functions or class components."
      },
      {
        id: "react-basics-30-c",
        text: "Custom hooks must start with 'use'",
        isCorrect: true,
        explanation: "By convention, custom hooks should start with 'use' (like useState, useEffect). This allows the linter to apply the rules of hooks and makes it clear that the function is a hook."
      },
      {
        id: "react-basics-30-d",
        text: "Hooks must be used in every component",
        isCorrect: false,
        explanation: "There's no requirement to use hooks in every component. You can mix and match functional components with hooks, functional components without hooks, and class components in the same application."
      },
      {
        id: "react-basics-30-e",
        text: "Hooks must be called in alphabetical order",
        isCorrect: false,
        explanation: "There's no requirement for hooks to be called in alphabetical order. They just need to be called in the same order on every render, which is why they should be at the top level."
      }
    ],
    explanation: {
      correct: "Correct! The Rules of Hooks state that you should only call hooks at the top level (not inside loops, conditions, or nested functions), only call them from React function components or custom hooks, and custom hooks should start with 'use'.",
      incorrect: "The Rules of Hooks include: only call hooks at the top level, only call them from React function components or custom hooks, and custom hooks should start with 'use'. There's no requirement to use hooks in every component or to call them in alphabetical order.",
      detailed: "These rules are enforced to ensure hooks work correctly. The top-level rule ensures hooks are called in the same order each render, which React relies on to correctly associate state with hooks. The 'only from React functions' rule ensures hooks have access to the React component context. The 'use' prefix convention helps both linting tools and developers identify which functions are hooks. React provides an ESLint plugin (eslint-plugin-react-hooks) that enforces these rules automatically."
    }
  },
  {
    id: "react-basics-31",
    level: 1,
    topic: "react-basics",
    question: "What is the purpose of the React.Fragment component?",
    multipleCorrect: false,
    options: [
      {
        id: "react-basics-31-a",
        text: "To group multiple elements without adding extra nodes to the DOM",
        isCorrect: true,
        explanation: "React.Fragment lets you group multiple elements together without adding an extra node to the DOM. This is useful when you need to return multiple elements from a component."
      },
      {
        id: "react-basics-31-b",
        text: "To fragment large components into smaller ones",
        isCorrect: false,
        explanation: "React.Fragment doesn't split components. To break a large component into smaller ones, you would create new component functions or classes."
      },
      {
        id: "react-basics-31-c",
        text: "To improve rendering performance automatically",
        isCorrect: false,
        explanation: "While using Fragment can sometimes improve performance by reducing the number of DOM nodes, it doesn't automatically optimize rendering in a broader sense."
      },
      {
        id: "react-basics-31-d",
        text: "To create code fragments that can be reused across components",
        isCorrect: false,
        explanation: "React.Fragment isn't for code reuse. For reusing code across components, you would use regular components, custom hooks, or utility functions."
      }
    ],
    explanation: {
      correct: "Correct! React.Fragment allows you to group multiple elements together without adding an extra node to the DOM. This keeps the DOM cleaner and can help with styling and layout.",
      incorrect: "React.Fragment is used to group multiple elements without adding extra nodes to the DOM. It doesn't fragment components into smaller ones, automatically improve rendering performance, or create reusable code fragments.",
      detailed: "React components can only return a single element. Before Fragments, this often meant adding unnecessary div or span containers to group elements, which could break layouts or add unwanted styling. Fragments solve this problem by providing a way to group elements without adding extra DOM nodes. You can use the explicit <React.Fragment> syntax or the shorthand <> syntax. Fragments can take a key prop when mapping over collections, but they don't support other props."
    }
  },
  {
    id: "react-basics-32",
    level: 1,
    topic: "react-basics",
    question: "What is the purpose of React's 'Strict Mode'?",
    multipleCorrect: true,
    options: [
      {
        id: "react-basics-32-a",
        text: "To identify potential problems in an application",
        isCorrect: true,
        explanation: "Strict Mode helps identify potential problems in an application by enabling additional checks and warnings during development."
      },
      {
        id: "react-basics-32-b",
        text: "To detect unsafe lifecycle methods",
        isCorrect: true,
        explanation: "One of Strict Mode's features is to detect and warn about the use of unsafe lifecycle methods that will be deprecated in future React versions."
      },
      {
        id: "react-basics-32-c",
        text: "To enforce type checking at runtime",
        isCorrect: false,
        explanation: "Strict Mode doesn't enforce type checking. For type checking in React, you would use TypeScript, Flow, or PropTypes."
      },
      {
        id: "react-basics-32-d",
        text: "To detect unexpected side effects",
        isCorrect: true,
        explanation: "Strict Mode helps detect unexpected side effects by intentionally double-invoking certain functions like component constructors and render methods in development mode."
      },
      {
        id: "react-basics-32-e",
        text: "To make your application faster",
        isCorrect: false,
        explanation: "Strict Mode doesn't directly make your application faster. It's a development tool for identifying problems, not a performance optimization."
      }
    ],
    explanation: {
      correct: "Correct! React's Strict Mode helps identify potential problems by detecting unsafe lifecycle methods and unexpected side effects. It's a development tool that enables additional checks and warnings.",
      incorrect: "React's Strict Mode helps identify potential problems, detect unsafe lifecycle methods, and find unexpected side effects. It doesn't enforce type checking or directly make your application faster.",
      detailed: "StrictMode is a tool for highlighting potential problems in an application. It doesn't render any visible UI but activates additional checks and warnings for its descendants. These checks only run in development mode and don't impact the production build. Strict Mode helps with: 1) Identifying components with unsafe lifecycle methods, 2) Warning about legacy string ref API usage, 3) Detecting unexpected side effects, 4) Detecting legacy context API usage, and 5) Ensuring reusable state. To use it, wrap parts of your application with <React.StrictMode>."
    }
  },
  {
    id: "react-basics-33",
    level: 1,
    topic: "react-basics",
    question: "What is the purpose of the 'key' prop when rendering lists in React?",
    multipleCorrect: false,
    options: [
      {
        id: "react-basics-33-a",
        text: "To help React identify which items have changed, been added, or removed",
        isCorrect: true,
        explanation: "Keys help React identify which items in a list have changed, been added, or removed. They give elements a stable identity across renders, which is essential for React's reconciliation algorithm."
      },
      {
        id: "react-basics-33-b",
        text: "To specify the order of elements in the list",
        isCorrect: false,
        explanation: "Keys don't determine the order of elements. The order is based on how you render the list in your code, typically using array methods like map()."
      },
      {
        id: "react-basics-33-c",
        text: "To automatically apply CSS styles to list items",
        isCorrect: false,
        explanation: "Keys don't automatically apply styles. They're used internally by React for reconciliation and don't affect styling directly."
      },
      {
        id: "react-basics-33-d",
        text: "To make list items accessible to screen readers",
        isCorrect: false,
        explanation: "Keys don't directly impact accessibility. For accessibility in lists, you would use appropriate semantic HTML and ARIA attributes."
      }
    ],
    explanation: {
      correct: "Correct! The 'key' prop helps React identify which items in a list have changed, been added, or removed. This allows React to update the DOM efficiently when the list changes.",
      incorrect: "The 'key' prop helps React identify which items have changed, been added, or removed. It doesn't specify element order, apply CSS styles, or directly impact accessibility.",
      detailed: "When rendering lists in React, each item should have a unique 'key' prop. Without keys, React doesn't know which items have changed and might re-render the entire list when only one item changes. Keys should be stable, predictable, and unique among siblings. Typically, you would use IDs from your data as keys. Using array indices as keys is not recommended if the list order can change, as it can lead to performance issues and component state bugs. Good keys enable React to minimize DOM operations when updating lists, significantly improving performance for dynamic lists."
    }
  },
  {
    id: "react-basics-34",
    level: 1,
    topic: "react-basics",
    question: "What is the difference between controlled and uncontrolled components in React?",
    multipleCorrect: false,
    options: [
      {
        id: "react-basics-34-a",
        text: "Controlled components have their state managed by React, while uncontrolled components store state in the DOM",
        isCorrect: true,
        explanation: "In controlled components, form data is handled by React state. Every state change is handled by a React handler function. In uncontrolled components, form data is handled by the DOM itself, and you access the values using refs."
      },
      {
        id: "react-basics-34-b",
        text: "Controlled components can't be updated, while uncontrolled components can",
        isCorrect: false,
        explanation: "This is incorrect. Controlled components can be updated through state changes. In fact, they're more directly controllable than uncontrolled components."
      },
      {
        id: "react-basics-34-c",
        text: "Controlled components are class components, while uncontrolled components are functional components",
        isCorrect: false,
        explanation: "The distinction between controlled and uncontrolled has nothing to do with class vs. functional components. Both types can be implemented using either component style."
      },
      {
        id: "react-basics-34-d",
        text: "Controlled components are faster than uncontrolled components",
        isCorrect: false,
        explanation: "There's no inherent performance difference between controlled and uncontrolled components. The choice between them depends on the use case, not performance considerations."
      }
    ],
    explanation: {
      correct: "Correct! In controlled components, form data is handled by React state, with onChange handlers updating the state. In uncontrolled components, the DOM itself handles the data, which is accessed using refs.",
      incorrect: "The key difference is that controlled components manage form data through React state, while uncontrolled components let the DOM handle it. This has nothing to do with updatability, component type, or performance.",
      detailed: "Controlled components provide more control and are generally recommended for most use cases. They make form validation easier, allow immediate UI updates based on input, and make it simpler to reset or modify form values programmatically. Uncontrolled components require less code for simple cases and can be useful when integrating with non-React code. However, they make certain operations like form validation more complex. Most React applications primarily use controlled components for forms."
    }
  },
  {
    id: "react-basics-35",
    level: 1,
    topic: "react-basics",
    question: "What is the purpose of React's Context API?",
    multipleCorrect: false,
    options: [
      {
        id: "react-basics-35-a",
        text: "To share data that can be considered 'global' for a tree of React components",
        isCorrect: true,
        explanation: "Context provides a way to pass data through the component tree without having to pass props down manually at every level. It's designed for sharing data that can be considered 'global' for a tree of React components."
      },
      {
        id: "react-basics-35-b",
        text: "To optimize rendering performance automatically",
        isCorrect: false,
        explanation: "Context doesn't automatically optimize rendering performance. In fact, using Context can sometimes lead to unnecessary re-renders if not implemented carefully."
      },
      {
        id: "react-basics-35-c",
        text: "To manage all application state",
        isCorrect: false,
        explanation: "While Context can be used for state management, it's not designed to manage all application state. For complex state management, libraries like Redux or Zustand might be more appropriate."
      },
      {
        id: "react-basics-35-d",
        text: "To provide a way to directly modify parent component state",
        isCorrect: false,
        explanation: "Context doesn't provide a way to directly modify parent component state. It follows React's one-way data flow principle, just with a different mechanism for passing data."
      }
    ],
    explanation: {
      correct: "Correct! React's Context API provides a way to share data that can be considered 'global' for a tree of React components, without having to pass props down manually at every level.",
      incorrect: "Context is designed to share data through the component tree without prop drilling. It doesn't automatically optimize rendering, isn't designed to manage all application state, and doesn't allow directly modifying parent state.",
      detailed: "Context is primarily used when data needs to be accessible by many components at different nesting levels. It helps avoid 'prop drilling' - passing props through intermediate components that don't need the data but only pass it along. Common use cases include user authentication, theme settings, language preferences, and other application-level settings. Context consists of two main parts: the Provider, which makes data available, and the Consumer, which uses the data. In modern React, useContext hook is the preferred way to consume context."
    }
  },
  {
    id: "react-basics-36",
    level: 1,
    topic: "react-basics",
    question: "What is the purpose of the 'dangerouslySetInnerHTML' prop in React?",
    multipleCorrect: false,
    options: [
      {
        id: "react-basics-36-a",
        text: "To insert HTML directly into the DOM, bypassing React's XSS protections",
        isCorrect: true,
        explanation: "dangerouslySetInnerHTML is React's replacement for using innerHTML in the browser DOM. It allows you to set HTML directly from React, but is named dangerously to remind developers to be careful of XSS risks."
      },
      {
        id: "react-basics-36-b",
        text: "To highlight dangerous code in the React DevTools",
        isCorrect: false,
        explanation: "dangerouslySetInnerHTML doesn't highlight code in DevTools. The 'dangerous' part of the name is just a warning to developers about the security implications."
      },
      {
        id: "react-basics-36-c",
        text: "To mark components that might cause performance issues",
        isCorrect: false,
        explanation: "dangerouslySetInnerHTML isn't related to performance marking. It's specifically for inserting raw HTML, with the name warning about security risks."
      },
      {
        id: "react-basics-36-d",
        text: "To enable experimental React features",
        isCorrect: false,
        explanation: "dangerouslySetInnerHTML doesn't enable experimental features. It's a standard React prop for a specific use case (inserting raw HTML)."
      }
    ],
    explanation: {
      correct: "Correct! dangerouslySetInnerHTML allows you to insert HTML directly into the DOM, bypassing React's built-in XSS protections. It's named with 'dangerously' as a reminder of the security risks.",
      incorrect: "dangerouslySetInnerHTML is React's replacement for innerHTML, allowing you to set HTML directly from React. It doesn't highlight dangerous code, mark performance issues, or enable experimental features.",
      detailed: "This prop is intentionally named to be scary because improper use of innerHTML can open you up to cross-site scripting (XSS) attacks. When using dangerouslySetInnerHTML, you must pass an object with a __html key to remind yourself that it's dangerous. For example: dangerouslySetInnerHTML={{__html: htmlString}}. You should only use this when you absolutely trust the source of the HTML, such as when working with content from a CMS that has its own sanitization, or when you've sanitized the HTML yourself using a library like DOMPurify."
    }
  },
  {
    id: "react-basics-37",
    level: 1,
    topic: "react-basics",
    question: "What is the purpose of React's 'defaultProps'?",
    multipleCorrect: false,
    options: [
      {
        id: "react-basics-37-a",
        text: "To specify default values for props when they aren't provided by the parent component",
        isCorrect: true,
        explanation: "defaultProps allows you to set default values for props that will be used when the parent component doesn't provide a value for that prop."
      },
      {
        id: "react-basics-37-b",
        text: "To enforce required props",
        isCorrect: false,
        explanation: "defaultProps doesn't enforce required props. For that, you would use PropTypes.isRequired or TypeScript's required property marker."
      },
      {
        id: "react-basics-37-c",
        text: "To reset props to their initial values",
        isCorrect: false,
        explanation: "defaultProps doesn't reset props. It only provides default values when props aren't specified by the parent."
      },
      {
        id: "react-basics-37-d",
        text: "To override props provided by the parent component",
        isCorrect: false,
        explanation: "defaultProps doesn't override props provided by the parent. It only provides values when the parent doesn't specify them."
      }
    ],
    explanation: {
      correct: "Correct! defaultProps allows you to specify default values for props when they aren't provided by the parent component. This helps make components more reusable and self-contained.",
      incorrect: "defaultProps specifies default values for props when they aren't provided by the parent component. It doesn't enforce required props, reset props to initial values, or override props from the parent.",
      detailed: "In class components, defaultProps is defined as a static property on the component class. In functional components, you can use default parameters in the function signature or the static defaultProps property. With the introduction of hooks, many developers now prefer using default parameters for functional components (e.g., function MyComponent({ prop = defaultValue })) as it's more concise. defaultProps ensures your component works even when certain props are omitted, making it more robust and easier to use."
    }
  },
  {
    id: "react-basics-38",
    level: 1,
    topic: "react-basics",
    question: "What is the purpose of React's 'propTypes'?",
    multipleCorrect: false,
    options: [
      {
        id: "react-basics-38-a",
        text: "To validate the types of props passed to a component",
        isCorrect: true,
        explanation: "propTypes is used for runtime type checking of props. It helps catch bugs by validating that props are of the expected type and displays warnings in development when they're not."
      },
      {
        id: "react-basics-38-b",
        text: "To automatically convert props to the correct type",
        isCorrect: false,
        explanation: "propTypes doesn't convert props to the correct type. It only validates types and warns if they don't match the expected types."
      },
      {
        id: "react-basics-38-c",
        text: "To define which props are required for a component",
        isCorrect: false,
        explanation: "While propTypes can mark props as required using isRequired, its primary purpose is type validation, not just defining required props."
      },
      {
        id: "react-basics-38-d",
        text: "To improve rendering performance",
        isCorrect: false,
        explanation: "propTypes doesn't improve rendering performance. In fact, it adds a small overhead in development mode, which is why it's typically stripped out in production builds."
      }
    ],
    explanation: {
      correct: "Correct! React's propTypes is used for runtime type checking of props passed to a component. It helps catch bugs by validating that props are of the expected type.",
      incorrect: "propTypes is used to validate the types of props passed to a component. It doesn't convert props to the correct type, isn't primarily for defining required props, and doesn't improve rendering performance.",
      detailed: "PropTypes was originally part of the React core but was moved to a separate package (prop-types) in React 15.5. It provides a range of validators for different types (e.g., PropTypes.string, PropTypes.number, PropTypes.array) and can validate more complex structures like shapes and arrays of specific types. Type checking only happens in development mode and is stripped out in production for performance. While PropTypes provides runtime validation, many projects now use TypeScript or Flow for static type checking, which catches type errors at compile time rather than runtime."
    }
  },
  {
    id: "react-basics-39",
    level: 1,
    topic: "react-basics",
    question: "What is the purpose of the 'shouldComponentUpdate' lifecycle method in React?",
    multipleCorrect: false,
    options: [
      {
        id: "react-basics-39-a",
        text: "To let you control whether a component should re-render after state or props changes",
        isCorrect: true,
        explanation: "shouldComponentUpdate lets you decide whether a component should re-render after state or props changes. By default it returns true, but you can override it to return false when you know a render isn't needed, improving performance."
      },
      {
        id: "react-basics-39-b",
        text: "To force a component to update regardless of state or props changes",
        isCorrect: false,
        explanation: "shouldComponentUpdate doesn't force updates; it potentially prevents them. To force an update, you would use the forceUpdate() method."
      },
      {
        id: "react-basics-39-c",
        text: "To update the component's state before rendering",
        isCorrect: false,
        explanation: "Updating state before rendering would be done in getDerivedStateFromProps or componentWillUpdate (deprecated), not shouldComponentUpdate. shouldComponentUpdate just decides whether to render."
      },
      {
        id: "react-basics-39-d",
        text: "To handle side effects after a component updates",
        isCorrect: false,
        explanation: "Handling side effects after updates is the purpose of componentDidUpdate, not shouldComponentUpdate. shouldComponentUpdate runs before the update and just decides whether to proceed with rendering."
      }
    ],
    explanation: {
      correct: "Correct! shouldComponentUpdate lets you control whether a component should re-render after state or props changes. By returning false, you can prevent unnecessary renders, which can improve performance.",
      incorrect: "shouldComponentUpdate lets you control whether a component should re-render. It doesn't force updates, update state before rendering, or handle side effects after updates.",
      detailed: "shouldComponentUpdate is a performance optimization method that runs before rendering when props or state change. By default, it returns true, causing the component to re-render. By implementing this method and returning false when a render isn't needed, you can prevent unnecessary renders. It takes nextProps and nextState as arguments, which you can compare with current props and state. In modern React, you can often achieve similar optimization with React.memo for functional components or by extending PureComponent instead of Component for class components, both of which implement shallow comparison automatically."
    }
  },
  {
    id: "react-basics-40",
    level: 1,
    topic: "react-basics",
    question: "What is the purpose of React's 'PureComponent'?",
    multipleCorrect: false,
    options: [
      {
        id: "react-basics-40-a",
        text: "To automatically implement shouldComponentUpdate with a shallow comparison of props and state",
        isCorrect: true,
        explanation: "PureComponent automatically implements shouldComponentUpdate with a shallow comparison of props and state. If nothing has changed (based on shallow comparison), the component won't re-render, which can improve performance."
      },
      {
        id: "react-basics-40-b",
        text: "To create components with no side effects",
        isCorrect: false,
        explanation: "PureComponent doesn't prevent side effects. It's about render optimization, not functional purity in terms of side effects."
      },
      {
        id: "react-basics-40-c",
        text: "To create components that don't use state",
        isCorrect: false,
        explanation: "PureComponent can use state just like regular Component. The 'pure' refers to the rendering optimization, not to being stateless."
      },
      {
        id: "react-basics-40-d",
        text: "To enforce immutable props and state",
        isCorrect: false,
        explanation: "While using PureComponent effectively does encourage immutable patterns (due to its shallow comparison), it doesn't enforce immutability. You could still mutate props or state, but doing so would defeat the purpose of PureComponent."
      }
    ],
    explanation: {
      correct: "Correct! React.PureComponent automatically implements shouldComponentUpdate with a shallow comparison of props and state. This can prevent unnecessary re-renders when props or state haven't changed.",
      incorrect: "PureComponent automatically implements shouldComponentUpdate with a shallow comparison. It doesn't create components with no side effects, doesn't require components to be stateless, and doesn't enforce immutability.",
      detailed: "React.PureComponent is similar to React.Component but implements shouldComponentUpdate with a shallow prop and state comparison. A shallow comparison checks if the reference to each prop and state value has changed, not if the contents have changed. This means PureComponent works best with immutable data patterns. If you mutate objects or arrays in props or state without changing their reference, PureComponent won't detect the change and won't re-render. For functional components, React.memo provides similar functionality."
    }
  },
  {
    id: "react-basics-41",
    level: 1,
    topic: "react-basics",
    question: "What is the purpose of the 'forwardRef' function in React?",
    multipleCorrect: false,
    options: [
      {
        id: "react-basics-41-a",
        text: "To pass a ref through a component to one of its children",
        isCorrect: true,
        explanation: "forwardRef lets your component receive a ref and forward it to a child component. This is particularly useful for reusable component libraries, allowing the component user to get a ref to an internal DOM element."
      },
      {
        id: "react-basics-41-b",
        text: "To create a reference to a previous state value",
        isCorrect: false,
        explanation: "Creating references to previous values would typically be done with useRef and useEffect, not forwardRef. forwardRef is specifically about passing refs through components."
      },
      {
        id: "react-basics-41-c",
        text: "To forward props to child components automatically",
        isCorrect: false,
        explanation: "forwardRef doesn't automatically forward props. For that, you would use the spread operator or manually pass props. forwardRef is specifically about forwarding refs."
      },
      {
        id: "react-basics-41-d",
        text: "To create a reference to the component's DOM node",
        isCorrect: false,
        explanation: "Creating a reference to a component's DOM node is done with the useRef hook or createRef method, not forwardRef. forwardRef is for passing refs through a component to its children."
      }
    ],
    explanation: {
      correct: "Correct! forwardRef allows a component to receive a ref and forward it to a child component. This is useful when you want to expose a child component's DOM node to parent components.",
      incorrect: "forwardRef is used to pass a ref through a component to one of its children. It's not for creating references to previous values, automatically forwarding props, or creating refs to DOM nodes directly.",
      detailed: "Refs don't get passed through props like regular values - they require special handling. forwardRef creates a React component that can receive a ref and pass it on to a child component. It takes a render function with props and ref parameters and returns a React component. This is particularly useful for higher-order components and component libraries where you need to expose the underlying DOM element to the component user. Without forwardRef, parent components wouldn't be able to get a ref to a DOM element inside your component."
    }
  },
  {
    id: "react-basics-42",
    level: 1,
    topic: "react-basics",
    question: "What is the purpose of the 'lazy' function in React?",
    multipleCorrect: false,
    options: [
      {
        id: "react-basics-42-a",
        text: "To load a component only when it's needed, enabling code splitting",
        isCorrect: true,
        explanation: "React.lazy enables code splitting by letting you render a dynamic import as a regular component. The component is only loaded when it's rendered, reducing the initial bundle size."
      },
      {
        id: "react-basics-42-b",
        text: "To delay the rendering of a component until after the initial page load",
        isCorrect: false,
        explanation: "While lazy loading does delay component rendering until needed, that's not its primary purpose. It's about code splitting and reducing bundle size, not controlling render timing specifically."
      },
      {
        id: "react-basics-42-c",
        text: "To create components that render less frequently",
        isCorrect: false,
        explanation: "Controlling render frequency would be done with shouldComponentUpdate, React.memo, or useMemo, not React.lazy. React.lazy is about code splitting."
      },
      {
        id: "react-basics-42-d",
        text: "To lazily initialize state values",
        isCorrect: false,
        explanation: "Lazily initializing state would be done by passing a function to useState, not using React.lazy. React.lazy is specifically for component code splitting."
      }
    ],
    explanation: {
      correct: "Correct! React.lazy lets you load a component only when it's needed, enabling code splitting. This can significantly improve performance by reducing the initial bundle size of your application.",
      incorrect: "React.lazy is used to load components only when needed, enabling code splitting. It's not primarily about delaying rendering timing, reducing render frequency, or lazily initializing state.",
      detailed: "React.lazy takes a function that must call a dynamic import() statement. This returns a Promise that resolves to a module with a default export containing a React component. The lazy component should then be rendered inside a Suspense component, which allows you to show fallback content (like a loading indicator) while the lazy component is being loaded. Code splitting is an important performance optimization for large React applications, as it allows you to 'split' your code into smaller chunks that are loaded on demand, rather than loading the entire application at once."
    }
  },
  {
    id: "react-basics-43",
    level: 1,
    topic: "react-basics",
    question: "What is the purpose of the 'Suspense' component in React?",
    multipleCorrect: false,
    options: [
      {
        id: "react-basics-43-a",
        text: "To specify fallback content while waiting for components to load",
        isCorrect: true,
        explanation: "Suspense lets you specify fallback content (like a loading spinner) to display while waiting for components to load. It's commonly used with React.lazy for code splitting."
      },
      {
        id: "react-basics-43-b",
        text: "To suspend execution of a component's code",
        isCorrect: false,
        explanation: "Suspense doesn't suspend code execution. It provides a way to show fallback content during loading states, but it doesn't affect the execution flow of your code."
      },
      {
        id: "react-basics-43-c",
        text: "To catch errors in React components",
        isCorrect: false,
        explanation: "Catching errors is the purpose of Error Boundaries, not Suspense. Suspense is for handling loading states, not error states."
      },
      {
        id: "react-basics-43-d",
        text: "To pause rendering until an animation completes",
        isCorrect: false,
        explanation: "Suspense isn't designed for animation timing. It's specifically for handling asynchronous operations like code loading or data fetching (in future React versions)."
      }
    ],
    explanation: {
      correct: "Correct! The Suspense component lets you specify fallback content (like a loading indicator) to display while waiting for components to load. It's commonly used with React.lazy for code splitting.",
      incorrect: "Suspense is used to specify fallback content while waiting for components to load. It doesn't suspend code execution, catch errors (that's Error Boundaries), or pause rendering for animations.",
      detailed: "Currently, Suspense only supports one use case: loading components dynamically with React.lazy. In future versions of React, it will support other use cases like data fetching. The Suspense component takes a fallback prop that accepts any React elements you want to render while waiting. You can place the Suspense component anywhere above the lazy component in the tree, and you can even wrap multiple lazy components with a single Suspense component. This gives you fine-grained control over the loading experience of your application."
    }
  },
  {
    id: "react-basics-44",
    level: 1,
    topic: "react-basics",
    question: "What is the purpose of the 'memo' function in React?",
    multipleCorrect: false,
    options: [
      {
        id: "react-basics-44-a",
        text: "To memoize a component, preventing unnecessary re-renders",
        isCorrect: true,
        explanation: "React.memo is a higher-order component that memoizes the result of a function component. If the component renders the same result given the same props, React.memo skips rendering and reuses the last rendered result."
      },
      {
        id: "react-basics-44-b",
        text: "To memoize expensive calculations within a component",
        isCorrect: false,
        explanation: "Memoizing calculations within a component is the purpose of the useMemo hook, not React.memo. React.memo memoizes the entire component render output."
      },
      {
        id: "react-basics-44-c",
        text: "To create a memorandum of understanding between components",
        isCorrect: false,
        explanation: "This isn't a React concept. React.memo is about performance optimization through memoization, not about component communication or contracts."
      },
      {
        id: "react-basics-44-d",
        text: "To store values that persist between renders",
        isCorrect: false,
        explanation: "Storing persistent values between renders is the purpose of the useRef hook, not React.memo. React.memo is about preventing unnecessary re-renders."
      }
    ],
    explanation: {
      correct: "Correct! React.memo is a higher-order component that memoizes a function component, preventing unnecessary re-renders when the props haven't changed.",
      incorrect: "React.memo is used to memoize a component, preventing unnecessary re-renders. It's not for memoizing calculations within a component (useMemo does that), creating a 'memorandum of understanding', or storing persistent values (useRef does that).",
      detailed: "React.memo works similarly to PureComponent but for function components instead of classes. By default, it does a shallow comparison of props and only re-renders if they've changed. You can also provide a custom comparison function as the second argument to have more control over when re-renders happen. React.memo is a performance optimization and shouldn't be used to prevent necessary updates. It's most effective for components that render often with the same props, especially complex components or those that trigger expensive calculations."
    }
  },
  {
    id: "react-basics-45",
    level: 1,
    topic: "react-basics",
    question: "What is the purpose of the 'useImperativeHandle' hook in React?",
    multipleCorrect: false,
    options: [
      {
        id: "react-basics-45-a",
        text: "To customize the instance value exposed when using refs",
        isCorrect: true,
        explanation: "useImperativeHandle customizes the instance value that is exposed when a parent component uses ref to access a child component. It lets you control what the parent can access through the ref."
      },
      {
        id: "react-basics-45-b",
        text: "To directly manipulate the DOM",
        isCorrect: false,
        explanation: "While useImperativeHandle is related to refs, which can be used for DOM manipulation, the hook itself doesn't directly manipulate the DOM. It customizes what's exposed through a ref."
      },
      {
        id: "react-basics-45-c",
        text: "To handle imperative programming in React",
        isCorrect: false,
        explanation: "While the name contains 'imperative', this hook isn't about general imperative programming in React. It's specifically for customizing refs, which are one of the few imperative features in React."
      },
      {
        id: "react-basics-45-d",
        text: "To optimize rendering performance",
        isCorrect: false,
        explanation: "useImperativeHandle isn't primarily for performance optimization. It's for controlling the interface exposed through refs."
      }
    ],
    explanation: {
      correct: "Correct! useImperativeHandle customizes the instance value that is exposed when a parent component uses ref to access a child component. This lets you control exactly what the parent can access through the ref.",
      incorrect: "useImperativeHandle customizes the instance value exposed when using refs. It's not for directly manipulating the DOM, handling general imperative programming, or optimizing rendering performance.",
      detailed: "useImperativeHandle should be used with forwardRef, as it's designed to customize the ref that is forwarded. It takes three arguments: the ref to customize, a function that returns the customized instance value, and an optional dependency array. This hook is useful when you want to expose only specific functions or properties to the parent component, rather than the entire component instance or DOM node. It helps maintain encapsulation by giving you control over the imperative API of your component."
    }
  },
  {
    id: "react-basics-46",
    level: 1,
    topic: "react-basics",
    question: "What is the purpose of the 'useDebugValue' hook in React?",
    multipleCorrect: false,
    options: [
      {
        id: "react-basics-46-a",
        text: "To display a label for custom hooks in React DevTools",
        isCorrect: true,
        explanation: "useDebugValue is used to display a label for custom hooks in React DevTools. It helps developers understand what a custom hook is doing when inspecting the component tree."
      },
      {
        id: "react-basics-46-b",
        text: "To log debug information to the console",
        isCorrect: false,
        explanation: "useDebugValue doesn't log to the console. It's specifically for enhancing the debugging experience in React DevTools."
      },
      {
        id: "react-basics-46-c",
        text: "To enable debugging mode in a component",
        isCorrect: false,
        explanation: "useDebugValue doesn't enable a special debugging mode. It just adds information to DevTools to help with debugging."
      },
      {
        id: "react-basics-46-d",
        text: "To debug performance issues automatically",
        isCorrect: false,
        explanation: "useDebugValue doesn't automatically debug performance issues. For performance debugging, you would use the React Profiler or other performance measurement tools."
      }
    ],
    explanation: {
      correct: "Correct! useDebugValue is used to display a label for custom hooks in React DevTools. This makes it easier to understand what your custom hooks are doing when debugging.",
      incorrect: "useDebugValue is used to display a label for custom hooks in React DevTools. It doesn't log to the console, enable a special debugging mode, or automatically debug performance issues.",
      detailed: "useDebugValue is primarily intended for custom hooks that are part of shared libraries, where providing additional debugging information can help users of your hook understand its behavior. It accepts a value to display and an optional formatting function that can defer expensive formatting until the hook is actually inspected. The value will only be shown when the component using your hook is inspected in React DevTools, so there's no performance impact in production."
    }
  },
  {
    id: "react-basics-47",
    level: 1,
    topic: "react-basics",
    question: "What is the purpose of the 'useId' hook in React?",
    multipleCorrect: false,
    options: [
      {
        id: "react-basics-47-a",
        text: "To generate stable, unique IDs for accessibility attributes",
        isCorrect: true,
        explanation: "useId is a hook for generating unique IDs that are stable across the server and client, helping with accessibility attributes that need to be consistent during hydration."
      },
      {
        id: "react-basics-47-b",
        text: "To identify components uniquely in the React DevTools",
        isCorrect: false,
        explanation: "useId isn't for DevTools identification. Components in DevTools are identified by their name and structure in the component tree."
      },
      {
        id: "react-basics-47-c",
        text: "To create IDs for database records",
        isCorrect: false,
        explanation: "useId isn't for database record IDs. It's specifically for generating stable IDs for DOM elements, particularly for accessibility attributes."
      },
      {
        id: "react-basics-47-d",
        text: "To track component instances for performance monitoring",
        isCorrect: false,
        explanation: "useId isn't for performance monitoring. It's for generating stable, unique IDs for accessibility and other DOM-related purposes."
      }
    ],
    explanation: {
      correct: "Correct! useId is a hook for generating stable, unique IDs that are consistent across server and client renders. It's particularly useful for accessibility attributes like aria-labelledby.",
      incorrect: "useId generates stable, unique IDs for accessibility attributes. It's not for identifying components in DevTools, creating database record IDs, or tracking component instances for performance.",
      detailed: "Introduced in React 18, useId addresses the challenge of generating stable IDs that work with server rendering. Before useId, developers often used incrementing counters or libraries like uuid, which could cause hydration mismatches between server and client. useId generates a string that includes a stable identifier for the current component and is consistent across renders. It's especially important for accessibility attributes like aria-labelledby and aria-describedby, where the ID needs to match between elements."
    }
  },
  {
    id: "react-basics-48",
    level: 1,
    topic: "react-basics",
    question: "What is the purpose of the 'useDeferredValue' hook in React?",
    multipleCorrect: false,
    options: [
      {
        id: "react-basics-48-a",
        text: "To defer updating a part of the UI to avoid blocking more urgent updates",
        isCorrect: true,
        explanation: "useDeferredValue lets you defer updating a part of the UI, marking it as lower priority. This helps keep the UI responsive during expensive updates by prioritizing more urgent interactions."
      },
      {
        id: "react-basics-48-b",
        text: "To delay the initial rendering of a component",
        isCorrect: false,
        explanation: "useDeferredValue doesn't delay initial rendering. It's for deferring updates to existing content, not delaying the first render."
      },
      {
        id: "react-basics-48-c",
        text: "To cache values for better performance",
        isCorrect: false,
        explanation: "While useDeferredValue can help with performance, it's not a caching mechanism. For caching computed values, you would use useMemo."
      },
      {
        id: "react-basics-48-d",
        text: "To postpone state updates until a specific time",
        isCorrect: false,
        explanation: "useDeferredValue doesn't postpone updates until a specific time. It marks updates as lower priority, but doesn't schedule them for a specific moment."
      }
    ],
    explanation: {
      correct: "Correct! useDeferredValue allows you to defer updating a part of the UI to avoid blocking more urgent updates. It's useful for keeping the interface responsive during expensive rendering operations.",
      incorrect: "useDeferredValue defers updating parts of the UI to avoid blocking more urgent updates. It doesn't delay initial rendering, cache values, or postpone updates until a specific time.",
      detailed: "Introduced in React 18, useDeferredValue is part of React's Concurrent Mode features. It accepts a value and returns a new copy of that value that will lag behind the original. During urgent updates, React will first update the interface with the original value, then update the deferred value in a lower priority render. This is particularly useful for expensive rendering operations like filtering a large list based on user input. Instead of blocking the UI on every keystroke, you can defer the filtering operation, keeping the input responsive while the filtered results catch up."
    }
  },
  {
    id: "react-basics-49",
    level: 1,
    topic: "react-basics",
    question: "What is the purpose of the 'useTransition' hook in React?",
    multipleCorrect: false,
    options: [
      {
        id: "react-basics-49-a",
        text: "To mark state updates as transitions, giving React permission to delay them",
        isCorrect: true,
        explanation: "useTransition lets you mark state updates as transitions, which tells React they can be interrupted and delayed in favor of more urgent updates. This helps keep the UI responsive during expensive updates."
      },
      {
        id: "react-basics-49-b",
        text: "To create CSS transitions automatically",
        isCorrect: false,
        explanation: "useTransition has nothing to do with CSS transitions. It's about prioritizing state updates, not visual animations."
      },
      {
        id: "react-basics-49-c",
        text: "To transition between different components",
        isCorrect: false,
        explanation: "useTransition isn't for transitioning between components. For component transitions, you would use libraries like react-transition-group or framer-motion."
      },
      {
        id: "react-basics-49-d",
        text: "To transition data from one format to another",
        isCorrect: false,
        explanation: "useTransition isn't for data transformation. It's specifically for marking state updates as lower priority in React's concurrent rendering model."
      }
    ],
    explanation: {
      correct: "Correct! useTransition allows you to mark state updates as transitions, giving React permission to delay them in favor of more urgent updates. This helps keep the UI responsive during expensive operations.",
      incorrect: "useTransition marks state updates as transitions that can be delayed. It's not for creating CSS transitions, transitioning between components, or transforming data formats.",
      detailed: "Introduced in React 18, useTransition returns an array with two items: a boolean indicating if a transition is pending, and a function to start a transition. When you wrap a state update in the startTransition function, you tell React that it's a transition that can be interrupted and delayed if there are more urgent updates. This is useful for updates that might cause a lot of re-rendering but don't need to be immediate, like changing a filter that affects a large list. The isPending boolean can be used to show a loading indicator while the transition is in progress."
    }
  },
  {
    id: "react-basics-50",
    level: 1,
    topic: "react-basics",
    question: "What is the purpose of the 'useSyncExternalStore' hook in React?",
    multipleCorrect: false,
    options: [
      {
        id: "react-basics-50-a",
        text: "To subscribe to an external store with support for server rendering",
        isCorrect: true,
        explanation: "useSyncExternalStore is a hook for subscribing to an external data store in a way that's compatible with concurrent rendering and server-side rendering. It ensures consistency between server and client renders."
      },
      {
        id: "react-basics-50-b",
        text: "To synchronize multiple useState hooks",
        isCorrect: false,
        explanation: "useSyncExternalStore isn't for synchronizing useState hooks. It's specifically for subscribing to external data stores outside of React's state system."
      },
      {
        id: "react-basics-50-c",
        text: "To store data in a synchronized database",
        isCorrect: false,
        explanation: "useSyncExternalStore has nothing to do with databases. It's for subscribing to external state sources like Redux stores, browser APIs, or other non-React state management systems."
      },
      {
        id: "react-basics-50-d",
        text: "To create a store that syncs across multiple tabs",
        isCorrect: false,
        explanation: "useSyncExternalStore doesn't create stores or handle cross-tab synchronization. It's for subscribing to existing external stores in a React-friendly way."
      }
    ],
    explanation: {
      correct: "Correct! useSyncExternalStore is a hook for subscribing to an external data store in a way that's compatible with concurrent rendering and server-side rendering.",
      incorrect: "useSyncExternalStore subscribes to external stores with support for server rendering. It's not for synchronizing useState hooks, storing data in databases, or creating cross-tab synchronized stores.",
      detailed: "Introduced in React 18, useSyncExternalStore was created to help library authors integrate their external stores with React's concurrent rendering. It takes three arguments: a subscribe function that registers a callback to be called when the store changes, a getSnapshot function that returns the current value from the store, and an optional getServerSnapshot function for server rendering. This hook ensures that if a render is interrupted by a higher priority update, React will re-read the store value before continuing to ensure consistency."
    }
  },
  
  // COMPONENTS (48 questions)
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
    id: "components-6",
    level: 1,
    topic: "components",
    question: "How do you create a class component in React?",
    multipleCorrect: false,
    options: [
      {
        id: "components-6-a",
        text: "By extending React.Component and implementing a render method",
        isCorrect: true,
        explanation: "Class components are created by extending React.Component and implementing a render method that returns JSX."
      },
      {
        id: "components-6-b",
        text: "By using the createClass() method",
        isCorrect: false,
        explanation: "React.createClass() was used in older versions of React but has been deprecated since React 16. Modern React uses ES6 classes or functional components."
      },
      {
        id: "components-6-c",
        text: "By defining a JavaScript function that returns JSX",
        isCorrect: false,
        explanation: "Defining a function that returns JSX creates a functional component, not a class component. Class components use ES6 class syntax."
      },
      {
        id: "components-6-d",
        text: "By creating a new instance of Component",
        isCorrect: false,
        explanation: "You don't directly instantiate Component. Instead, you extend it and React instantiates your component class when needed."
      }
    ],
    explanation: {
      correct: "Correct! A class component in React is created by extending React.Component and implementing a render method that returns JSX to describe what should be rendered.",
      incorrect: "Class components are created by extending React.Component and implementing a render method. The createClass() method is deprecated, defining a function creates a functional component, and you don't directly instantiate Component.",
      detailed: "A basic class component looks like: class Welcome extends React.Component { render() { return <h1>Hello, {this.props.name}</h1>; } }. Class components have access to features like local state (this.state), lifecycle methods (componentDidMount, etc.), and refs. They also use 'this' to access props, state, and class methods. While class components are still supported, the React team recommends using functional components with hooks for new code."
    }
  },
  {
    id: "components-7",
    level: 1,
    topic: "components",
    question: "How do you add state to a functional component in React?",
    multipleCorrect: false,
    options: [
      {
        id: "components-7-a",
        text: "Using the useState hook",
        isCorrect: true,
        explanation: "The useState hook allows functional components to have local state. It returns the current state value and a function to update it."
      },
      {
        id: "components-7-b",
        text: "Using this.state",
        isCorrect: false,
        explanation: "this.state is used in class components, not functional components. Functional components use hooks like useState instead."
      },
      {
        id: "components-7-c",
        text: "Using the state prop",
        isCorrect: false,
        explanation: "There is no built-in 'state' prop in React. Components manage their own state using useState (for functional components) or this.state (for class components)."
      },
      {
        id: "components-7-d",
        text: "Using static variables",
        isCorrect: false,
        explanation: "Static variables wouldn't work for component state because they would be shared across all instances of the component and wouldn't trigger re-renders when changed."
      }
    ],
    explanation: {
      correct: "Correct! The useState hook allows functional components to have local state. It returns an array with two elements: the current state value and a function to update it.",
      incorrect: "Functional components add state using the useState hook. They don't use this.state (class components do that), there's no built-in 'state' prop, and static variables wouldn't work properly for component state.",
      detailed: "The useState hook was introduced in React 16.8 and is the primary way to add state to functional components. It takes an initial state value and returns an array with two elements: the current state value and a function to update it. For example: const [count, setCount] = useState(0);. Unlike this.setState in class components, the state updater from useState doesn't automatically merge objects - it replaces the previous state entirely. Multiple useState calls can be used for separate state variables in a single component."
    }
  },
  {
    id: "components-8",
    level: 1,
    topic: "components",
    question: "How do you add state to a class component in React?",
    multipleCorrect: false,
    options: [
      {
        id: "components-8-a",
        text: "By initializing this.state in the constructor or using a class field",
        isCorrect: true,
        explanation: "Class components can initialize state either in the constructor (this.state = {...}) or using class fields (state = {...}). Then they update it using this.setState()."
      },
      {
        id: "components-8-b",
        text: "By using the useState hook",
        isCorrect: false,
        explanation: "useState is for functional components, not class components. Class components use this.state and this.setState()."
      },
      {
        id: "components-8-c",
        text: "By directly modifying this.state",
        isCorrect: false,
        explanation: "Directly modifying this.state (e.g., this.state.count = 1) is incorrect in React. You should always use this.setState() to update state in class components."
      },
      {
        id: "components-8-d",
        text: "By passing a state prop to the component",
        isCorrect: false,
        explanation: "While you can pass data via props, that's not how components manage their own internal state. Class components use this.state and this.setState() for internal state."
      }
    ],
    explanation: {
      correct: "Correct! Class components initialize state either in the constructor (this.state = {...}) or using class fields (state = {...}). They then update state using this.setState().",
      incorrect: "Class components add state by initializing this.state in the constructor or using class fields. They don't use useState (that's for functional components), shouldn't directly modify this.state, and don't use a state prop for internal state.",
      detailed: "There are two common ways to initialize state in class components: 1) In the constructor: constructor(props) { super(props); this.state = { count: 0 }; } or 2) Using class fields (a newer syntax): state = { count: 0 };. After initialization, state should only be updated using this.setState(), which merges the provided object with the current state. Direct state mutations (this.state.count = 1) won't trigger re-renders and can cause bugs. setState() may be asynchronous, so for updates based on previous state, use the function form: this.setState(prevState => ({ count: prevState.count + 1 }))."
    }
  },
  {
    id: "components-9",
    level: 1,
    topic: "components",
    question: "How do you update state in a functional component?",
    multipleCorrect: false,
    options: [
      {
        id: "components-9-a",
        text: "Using the state setter function returned by useState",
        isCorrect: true,
        explanation: "The useState hook returns a state setter function as its second element, which you use to update the state value."
      },
      {
        id: "components-9-b",
        text: "Using this.setState()",
        isCorrect: false,
        explanation: "this.setState() is used in class components, not functional components. Functional components use the state setter from useState."
      },
      {
        id: "components-9-c",
        text: "By directly modifying the state variable",
        isCorrect: false,
        explanation: "Directly modifying state variables won't work in React. React needs to be notified of changes through the proper state update function to trigger re-renders."
      },
      {
        id: "components-9-d",
        text: "Using the updateState() hook",
        isCorrect: false,
        explanation: "There is no updateState() hook in React. The state setter function comes from useState."
      }
    ],
    explanation: {
      correct: "Correct! In functional components, you update state using the state setter function returned by useState. This function replaces the previous state with the new value.",
      incorrect: "Functional components update state using the state setter function returned by useState. They don't use this.setState() (class components do), can't directly modify state variables, and there's no updateState() hook.",
      detailed: "When you call useState, it returns an array with two elements: the current state value and a function to update it. For example: const [count, setCount] = useState(0);. To update the state, you call the setter function: setCount(1) or setCount(prevCount => prevCount + 1). Unlike this.setState() in class components, the state setter from useState doesn't automatically merge objects - it completely replaces the previous state. If you need to update an object or array while preserving other fields, you need to do so explicitly: setUser(prevUser => ({ ...prevUser, name: 'John' }))."
    }
  },
  {
    id: "components-10",
    level: 1,
    topic: "components",
    question: "How do you update state in a class component?",
    multipleCorrect: false,
    options: [
      {
        id: "components-10-a",
        text: "Using this.setState()",
        isCorrect: true,
        explanation: "Class components update their state using this.setState(), which merges the provided object with the current state and triggers a re-render."
      },
      {
        id: "components-10-b",
        text: "Using the state setter function from useState",
        isCorrect: false,
        explanation: "The useState hook is for functional components, not class components. Class components use this.setState()."
      },
      {
        id: "components-10-c",
        text: "By directly modifying this.state",
        isCorrect: false,
        explanation: "Directly modifying this.state (e.g., this.state.count = 1) is incorrect in React. You should always use this.setState() to update state in class components."
      },
      {
        id: "components-10-d",
        text: "Using this.updateState()",
        isCorrect: false,
        explanation: "There is no this.updateState() method in React. Class components use this.setState()."
      }
    ],
    explanation: {
      correct: "Correct! Class components update their state using this.setState(), which merges the provided object with the current state and triggers a re-render.",
      incorrect: "Class components update state using this.setState(). They don't use state setters from useState (that's for functional components), shouldn't directly modify this.state, and there's no this.updateState() method.",
      detailed: "this.setState() is the standard way to update state in class components. It takes an object that will be shallowly merged with the current state, or a function that receives the previous state and props and returns an object to be merged. Since setState() may be asynchronous, you should not rely on this.state or this.props for calculating the next state. Instead, use the function form: this.setState((prevState, props) => ({ counter: prevState.counter + props.increment })). If you need to perform actions after the state has been updated, use the optional callback as the second parameter: this.setState({ counter: 1 }, () => { console.log('State updated!'); })."
    }
  },
  {
    id: "components-11",
    level: 1,
    topic: "components",
    question: "How do you handle events in React components?",
    multipleCorrect: false,
    options: [
      {
        id: "components-11-a",
        text: "By passing functions to event handler props like onClick",
        isCorrect: true,
        explanation: "React events are handled by passing functions to camelCase event handler props like onClick, onChange, etc."
      },
      {
        id: "components-11-b",
        text: "By using addEventListener directly on DOM elements",
        isCorrect: false,
        explanation: "While you can use addEventListener in React (typically in useEffect), it's not the standard way to handle events in JSX. React provides a synthetic event system with props like onClick."
      },
      {
        id: "components-11-c",
        text: "By adding inline string handlers like onClick=\"handleClick()\"",
        isCorrect: false,
        explanation: "React doesn't use string event handlers like in traditional HTML. Instead, it uses function references in JSX."
      },
      {
        id: "components-11-d",
        text: "By creating separate event handler components",
        isCorrect: false,
        explanation: "Event handlers are functions, not separate components. They're typically defined within the component that needs them or imported from utility files."
      }
    ],
    explanation: {
      correct: "Correct! React events are handled by passing functions to camelCase event handler props like onClick, onChange, etc. These functions receive a synthetic event object as their parameter.",
      incorrect: "React handles events by passing functions to event handler props like onClick. It doesn't use addEventListener directly, string handlers, or separate event handler components.",
      detailed: "React's event handling system uses synthetic events for cross-browser compatibility. Event names use camelCase (onClick instead of onclick) and you pass functions as handlers, not strings. For example: <button onClick={handleClick}>Click me</button>. In class components, you typically need to bind methods to 'this' in the constructor, use public class fields syntax, or use arrow functions to preserve the correct 'this' context. In functional components, this isn't an issue. Event handlers receive a synthetic event object that conforms to the W3C spec, regardless of browser."
    }
  },
  {
    id: "components-12",
    level: 1,
    topic: "components",
    question: "How do you conditionally render content in React?",
    multipleCorrect: true,
    options: [
      {
        id: "components-12-a",
        text: "Using the ternary operator (condition ? trueContent : falseContent)",
        isCorrect: true,
        explanation: "The ternary operator is a common way to conditionally render content in JSX. It works inline and can return different JSX based on a condition."
      },
      {
        id: "components-12-b",
        text: "Using logical && operator (condition && content)",
        isCorrect: true,
        explanation: "The logical && operator is useful for conditionally rendering content when you only have a 'true' case. If the condition is true, the content is rendered; if false, nothing is rendered."
      },
      {
        id: "components-12-c",
        text: "Using if/else statements inside JSX",
        isCorrect: false,
        explanation: "You can't use if/else statements directly inside JSX. You need to use ternary operators, logical operators, or extract the conditional logic to separate variables or functions."
      },
      {
        id: "components-12-d",
        text: "Using separate return statements with conditions",
        isCorrect: true,
        explanation: "You can use regular if/else statements with separate return statements before the JSX. This approach is useful for more complex conditional rendering logic."
      },
      {
        id: "components-12-e",
        text: "Using the <If> and <Else> components",
        isCorrect: false,
        explanation: "React doesn't have built-in <If> and <Else> components. While some libraries provide such components, they're not part of React itself."
      }
    ],
    explanation: {
      correct: "Correct! React supports conditional rendering using ternary operators, logical && operators, and separate return statements with conditions. These approaches let you render different content based on state or props.",
      incorrect: "React supports conditional rendering using ternary operators, logical && operators, and separate return statements with conditions. You can't use if/else statements directly inside JSX, and there are no built-in <If> and <Else> components.",
      detailed: "There are several ways to conditionally render in React: 1) Ternary operator: {isLoggedIn ? <LogoutButton /> : <LoginButton />}, 2) Logical && operator: {isLoggedIn && <AdminPanel />}, 3) Separate variables: let button; if (isLoggedIn) { button = <LogoutButton />; } else { button = <LoginButton />; }, 4) Early returns: if (!items.length) return <NoItems />; return <ItemsList items={items} />. The approach you choose depends on the complexity of your conditions and personal/team preference. For simple conditions, inline operators are concise. For complex logic, separate variables or early returns may be more readable."
    }
  },
  {
    id: "components-13",
    level: 1,
    topic: "components",
    question: "How do you render lists of items in React?",
    multipleCorrect: false,
    options: [
      {
        id: "components-13-a",
        text: "Using array methods like map() to transform data into JSX elements",
        isCorrect: true,
        explanation: "The most common way to render lists in React is to use array methods like map() to transform each item in an array into a JSX element."
      },
      {
        id: "components-13-b",
        text: "Using the <For> component with a loop attribute",
        isCorrect: false,
        explanation: "React doesn't have a built-in <For> component. While some libraries might provide such components, they're not part of React itself."
      },
      {
        id: "components-13-c",
        text: "Using for loops inside JSX",
        isCorrect: false,
        explanation: "You can't use for loops directly inside JSX. You need to use array methods like map() or extract the loop logic to variables or functions outside the JSX."
      },
      {
        id: "components-13-d",
        text: "Using the forEach() method to render each item",
        isCorrect: false,
        explanation: "forEach() doesn't return anything, so it can't be used directly for rendering lists. map() is preferred because it returns a new array of elements."
      }
    ],
    explanation: {
      correct: "Correct! In React, lists are typically rendered using array methods like map() to transform each item in an array into a JSX element. Each element should have a unique 'key' prop for optimal rendering performance.",
      incorrect: "Lists in React are rendered using array methods like map() to transform data into JSX elements. React doesn't have a <For> component, you can't use for loops inside JSX, and forEach() doesn't return values so it's not suitable for rendering.",
      detailed: "The standard pattern for rendering lists in React is: {items.map(item => <ListItem key={item.id} item={item} />)}. The 'key' prop is crucial - it helps React identify which items have changed, been added, or removed. Keys should be stable, predictable, and unique among siblings. Using array indices as keys is not recommended if the list order can change, as it can lead to performance issues and component state bugs. Besides map(), you can also use filter() to conditionally render items, or reduce() for more complex transformations."
    }
  },
  {
    id: "components-14",
    level: 1,
    topic: "components",
    question: "What is the purpose of the 'key' prop when rendering lists in React?",
    multipleCorrect: false,
    options: [
      {
        id: "components-14-a",
        text: "To help React identify which items have changed, been added, or removed",
        isCorrect: true,
        explanation: "Keys help React identify which items in a list have changed, been added, or removed. They give elements a stable identity across renders, which is essential for React's reconciliation algorithm."
      },
      {
        id: "components-14-b",
        text: "To specify the order of elements in the list",
        isCorrect: false,
        explanation: "Keys don't determine the order of elements. The order is based on how you render the list in your code, typically using array methods like map()."
      },
      {
        id: "components-14-c",
        text: "To automatically apply CSS styles to list items",
        isCorrect: false,
        explanation: "Keys don't automatically apply styles. They're used internally by React for reconciliation and don't affect styling directly."
      },
      {
        id: "components-14-d",
        text: "To make list items accessible to screen readers",
        isCorrect: false,
        explanation: "Keys don't directly impact accessibility. For accessibility in lists, you would use appropriate semantic HTML and ARIA attributes."
      }
    ],
    explanation: {
      correct: "Correct! The 'key' prop helps React identify which items in a list have changed, been added, or removed. This allows React to update the DOM efficiently when the list changes.",
      incorrect: "The 'key' prop helps React identify which items have changed, been added, or removed. It doesn't specify element order, apply CSS styles, or directly impact accessibility.",
      detailed: "When rendering lists in React, each item should have a unique 'key' prop. Without keys, React doesn't know which items have changed and might re-render the entire list when only one item changes. Keys should be stable, predictable, and unique among siblings. Typically, you would use IDs from your data as keys. Using array indices as keys is not recommended if the list order can change, as it can lead to performance issues and component state bugs. Good keys enable React to minimize DOM operations when updating lists, significantly improving performance for dynamic lists."
    }
  },
  {
    id: "components-15",
    level: 1,
    topic: "components",
    question: "How do you pass data from a child component to a parent component in React?",
    multipleCorrect: false,
    options: [
      {
        id: "components-15-a",
        text: "By passing a callback function from the parent to the child, which the child calls with data",
        isCorrect: true,
        explanation: "The standard way to pass data upward is for the parent to define a function and pass it to the child as a prop. The child then calls this function with the data it wants to pass up."
      },
      {
        id: "components-15-b",
        text: "By directly modifying the parent's state from the child",
        isCorrect: false,
        explanation: "Children can't directly modify their parent's state. This would violate React's one-way data flow principle and lead to unpredictable behavior."
      },
      {
        id: "components-15-c",
        text: "By using the built-in sendToParent() method",
        isCorrect: false,
        explanation: "There is no sendToParent() method in React. Communication between components is handled through props and callbacks."
      },
      {
        id: "components-15-d",
        text: "By using the this.parent property",
        isCorrect: false,
        explanation: "There is no this.parent property in React. Components don't have direct references to their parents."
      }
    ],
    explanation: {
      correct: "Correct! In React, data flows from parent to child through props, and from child to parent through callback functions. The parent passes a function to the child, and the child calls this function with data.",
      incorrect: "Data is passed from child to parent by the parent passing a callback function to the child, which the child calls with data. Children can't directly modify parent state, and there's no sendToParent() method or this.parent property in React.",
      detailed: "This pattern is often called 'lifting state up' in React. For example, a parent component might define a function handleChange(newValue) that updates its state, then pass this function to a child as an onChange prop. The child would then call this.props.onChange(data) or props.onChange(data) when it has new data to share. This maintains React's unidirectional data flow while allowing children to communicate with parents. For more complex applications, you might use context or state management libraries like Redux to avoid passing callbacks through multiple levels."
    }
  },
  {
    id: "components-16",
    level: 1,
    topic: "components",
    question: "What is the purpose of the 'children' prop in React?",
    multipleCorrect: false,
    options: [
      {
        id: "components-16-a",
        text: "To access and render content between opening and closing tags of a component",
        isCorrect: true,
        explanation: "The 'children' prop allows components to receive and render content that's placed between their opening and closing tags, enabling component composition."
      },
      {
        id: "components-16-b",
        text: "To create child components programmatically",
        isCorrect: false,
        explanation: "The 'children' prop doesn't create components; it accesses content that's already defined between component tags. Creating components programmatically would typically use mapping or conditional rendering."
      },
      {
        id: "components-16-c",
        text: "To define which components should re-render",
        isCorrect: false,
        explanation: "The 'children' prop has nothing to do with controlling re-renders. For optimizing renders, you would use React.memo, shouldComponentUpdate, or similar techniques."
      },
      {
        id: "components-16-d",
        text: "To access a component's parent in the component tree",
        isCorrect: false,
        explanation: "The 'children' prop doesn't provide access to a component's parent. React's data flow is one-way (parent to child), and children don't have direct references to their parents."
      }
    ],
    explanation: {
      correct: "Correct! The 'children' prop allows components to receive and render the content placed between their opening and closing tags. This is a key mechanism for component composition in React.",
      incorrect: "The 'children' prop allows components to access and render the content placed between their opening and closing tags. It doesn't create components programmatically, control re-renders, or provide access to parent components.",
      detailed: "In React, 'children' is a special prop that's automatically passed to components and contains the content between the opening and closing tags of that component. For example, in <Button>Click me</Button>, the string 'Click me' would be passed as the children prop to the Button component. This enables flexible component composition, allowing components to act as wrappers or containers for other content. The children prop can contain anything from simple text to complex nested components, and can be manipulated like any other prop."
    }
  },
  {
    id: "components-17",
    level: 1,
    topic: "components",
    question: "What is a Higher-Order Component (HOC) in React?",
    multipleCorrect: false,
    options: [
      {
        id: "components-17-a",
        text: "A function that takes a component and returns a new enhanced component",
        isCorrect: true,
        explanation: "A Higher-Order Component is a function that takes a component as input and returns a new enhanced component with additional props or behavior."
      },
      {
        id: "components-17-b",
        text: "A component that renders multiple other components",
        isCorrect: false,
        explanation: "A component that renders multiple other components is just a regular composite component, not specifically a HOC. HOCs are functions that enhance components."
      },
      {
        id: "components-17-c",
        text: "A component with more than 10 props",
        isCorrect: false,
        explanation: "The number of props has nothing to do with whether a component is a HOC. HOCs are defined by their function of enhancing other components."
      },
      {
        id: "components-17-d",
        text: "A component that uses advanced lifecycle methods",
        isCorrect: false,
        explanation: "Using advanced lifecycle methods doesn't make a component a HOC. HOCs are specifically functions that take components and return enhanced versions of them."
      }
    ],
    explanation: {
      correct: "Correct! A Higher-Order Component (HOC) is a function that takes a component and returns a new enhanced component. It's a pattern derived from React's compositional nature.",
      incorrect: "A Higher-Order Component is a function that takes a component and returns a new enhanced component. It's not a component that renders multiple components, has many props, or uses advanced lifecycle methods.",
      detailed: "HOCs are a powerful pattern for reusing component logic. They work by wrapping a component in a function that adds additional functionality. For example, withRouter from React Router is an HOC that adds router props to a component. The HOC pattern follows the principle that components should be focused on rendering UI, while cross-cutting concerns like data fetching, authentication, or logging can be extracted into HOCs. The naming convention for HOCs typically uses 'with' as a prefix (e.g., withAuth, withData). With the introduction of Hooks in React 16.8, many use cases for HOCs can now be handled more directly with custom hooks."
    }
  },
  {
    id: "components-18",
    level: 1,
    topic: "components",
    question: "What is a Pure Component in React?",
    multipleCorrect: false,
    options: [
      {
        id: "components-18-a",
        text: "A component that only re-renders when its props or state actually change",
        isCorrect: true,
        explanation: "A Pure Component in React implements shouldComponentUpdate with a shallow comparison of props and state. It only re-renders when there are actual changes to props or state."
      },
      {
        id: "components-18-b",
        text: "A component without any side effects",
        isCorrect: false,
        explanation: "While 'pure' in functional programming refers to functions without side effects, React's PureComponent is specifically about optimizing rendering through shallow comparison, not about side effects."
      },
      {
        id: "components-18-c",
        text: "A component that doesn't use state",
        isCorrect: false,
        explanation: "PureComponents can use state just like regular components. The 'pure' refers to the rendering optimization, not to being stateless."
      },
      {
        id: "components-18-d",
        text: "A component written in pure JavaScript without JSX",
        isCorrect: false,
        explanation: "The use of JSX has nothing to do with whether a component is a PureComponent. PureComponents can use JSX just like any other component."
      }
    ],
    explanation: {
      correct: "Correct! A Pure Component in React only re-renders when its props or state actually change, based on a shallow comparison. This can improve performance by preventing unnecessary renders.",
      incorrect: "A Pure Component in React only re-renders when its props or state actually change, based on a shallow comparison. It's not defined by a lack of side effects, absence of state, or not using JSX.",
      detailed: "React.PureComponent is similar to React.Component but implements shouldComponentUpdate with a shallow prop and state comparison. A shallow comparison checks if the reference to each prop and state value has changed, not if the contents have changed. This means PureComponent works best with immutable data patterns. If you mutate objects or arrays in props or state without changing their reference, PureComponent won't detect the change and won't re-render. For functional components, React.memo provides similar functionality. PureComponent is a performance optimization and should be used when you expect a component to render often with the same props."
    }
  },
  {
    id: "components-19",
    level: 1,
    topic: "components",
    question: "What is the difference between a controlled and an uncontrolled component in React?",
    multipleCorrect: false,
    options: [
      {
        id: "components-19-a",
        text: "In controlled components, form data is handled by React state, while in uncontrolled components, the DOM handles it",
        isCorrect: true,
        explanation: "In controlled components, form data is handled by React state. Every state change is handled by a React handler function. In uncontrolled components, form data is handled by the DOM itself, and you access the values using refs."
      },
      {
        id: "components-19-b",
        text: "Controlled components can't be updated, while uncontrolled components can",
        isCorrect: false,
        explanation: "This is incorrect. Controlled components can be updated through state changes. In fact, they're more directly controllable than uncontrolled components."
      },
      {
        id: "components-19-c",
        text: "Controlled components are class components, while uncontrolled components are functional components",
        isCorrect: false,
        explanation: "The distinction between controlled and uncontrolled has nothing to do with class vs. functional components. Both types can be implemented using either component style."
      },
      {
        id: "components-19-d",
        text: "Controlled components are faster than uncontrolled components",
        isCorrect: false,
        explanation: "There's no inherent performance difference between controlled and uncontrolled components. The choice between them depends on the use case, not performance considerations."
      }
    ],
    explanation: {
      correct: "Correct! In controlled components, form data is handled by React state, with onChange handlers updating the state. In uncontrolled components, the DOM itself handles the data, which is accessed using refs.",
      incorrect: "The key difference is that controlled components manage form data through React state, while uncontrolled components let the DOM handle it. This has nothing to do with updatability, component type, or performance.",
      detailed: "Controlled components provide more control and are generally recommended for most use cases. They make form validation easier, allow immediate UI updates based on input, and make it simpler to reset or modify form values programmatically. Uncontrolled components require less code for simple cases and can be useful when integrating with non-React code. However, they make certain operations like form validation more complex. Most React applications primarily use controlled components for forms."
    }
  },
  {
    id: "components-20",
    level: 1,
    topic: "components",
    question: "What are React Fragments and why are they useful?",
    multipleCorrect: false,
    options: [
      {
        id: "components-20-a",
        text: "They allow returning multiple elements without adding extra nodes to the DOM",
        isCorrect: true,
        explanation: "React Fragments let you group multiple elements together without adding an extra node to the DOM. This is useful when you need to return multiple elements from a component without wrapping them in a div or other container."
      },
      {
        id: "components-20-b",
        text: "They improve rendering performance by fragmenting the component tree",
        isCorrect: false,
        explanation: "Fragments don't 'fragment' the component tree for performance. While they can sometimes improve performance by reducing DOM nodes, that's not their primary purpose or how they work."
      },
      {
        id: "components-20-c",
        text: "They allow components to be split into smaller pieces",
        isCorrect: false,
        explanation: "Fragments don't split components. To split a component into smaller pieces, you would create new component functions or classes."
      },
      {
        id: "components-20-d",
        text: "They enable code sharing between components",
        isCorrect: false,
        explanation: "Fragments aren't for code sharing. For sharing code between components, you would use regular components, custom hooks, or utility functions."
      }
    ],
    explanation: {
      correct: "Correct! React Fragments allow you to group multiple elements together without adding an extra node to the DOM. This keeps the DOM cleaner and can help with styling and layout.",
      incorrect: "React Fragments allow returning multiple elements without adding extra DOM nodes. They don't fragment the component tree for performance, split components into smaller pieces, or enable code sharing.",
      detailed: "Fragments solve the common problem of needing to return multiple elements from a component without wrapping them in an unnecessary div or other container. You can use the explicit <React.Fragment> syntax or the shorthand <> syntax. Fragments can take a key prop when mapping over collections, but they don't support other props. By using Fragments, you avoid creating unnecessary DOM nodes, which can improve performance and prevent styling issues that might arise from extra wrapper elements."
    }
  },
  {
    id: "components-21",
    level: 1,
    topic: "components",
    question: "What is the purpose of React.memo?",
    multipleCorrect: false,
    options: [
      {
        id: "components-21-a",
        text: "To memoize a functional component to prevent unnecessary re-renders",
        isCorrect: true,
        explanation: "React.memo is a higher-order component that memoizes a functional component. It prevents the component from re-rendering if its props haven't changed, which can improve performance."
      },
      {
        id: "components-21-b",
        text: "To memoize values inside a component",
        isCorrect: false,
        explanation: "Memoizing values inside a component is the purpose of the useMemo hook, not React.memo. React.memo memoizes the entire component render output."
      },
      {
        id: "components-21-c",
        text: "To create memoized callback functions",
        isCorrect: false,
        explanation: "Creating memoized callback functions is the purpose of the useCallback hook, not React.memo. React.memo is for memoizing component renders."
      },
      {
        id: "components-21-d",
        text: "To memorize the component's state between re-renders",
        isCorrect: false,
        explanation: "Component state is automatically preserved between re-renders; that's a fundamental feature of React, not specific to React.memo. React.memo is about preventing unnecessary re-renders based on props."
      }
    ],
    explanation: {
      correct: "Correct! React.memo is a higher-order component that memoizes a functional component, preventing unnecessary re-renders when the props haven't changed.",
      incorrect: "React.memo is used to memoize a functional component to prevent unnecessary re-renders. It's not for memoizing values inside a component (useMemo does that), creating memoized callbacks (useCallback does that), or memorizing state (React already does that).",
      detailed: "React.memo works similarly to PureComponent but for function components instead of classes. By default, it does a shallow comparison of props and only re-renders if they've changed. You can also provide a custom comparison function as the second argument to have more control over when re-renders happen. React.memo is a performance optimization and shouldn't be used to prevent necessary updates. It's most effective for components that render often with the same props, especially complex components or those that trigger expensive calculations."
    }
  },
  {
    id: "components-22",
    level: 1,
    topic: "components",
    question: "How do you optimize performance in React components?",
    multipleCorrect: true,
    options: [
      {
        id: "components-22-a",
        text: "Using React.memo for functional components or extending PureComponent for class components",
        isCorrect: true,
        explanation: "React.memo and PureComponent implement shouldComponentUpdate with a shallow comparison, preventing unnecessary re-renders when props or state haven't changed."
      },
      {
        id: "components-22-b",
        text: "Using the useMemo hook to memoize expensive calculations",
        isCorrect: true,
        explanation: "useMemo memoizes the result of a function call, only recomputing it when dependencies change. This prevents expensive calculations from running on every render."
      },
      {
        id: "components-22-c",
        text: "Using the useCallback hook to memoize event handlers",
        isCorrect: true,
        explanation: "useCallback memoizes function references, which is useful for preventing unnecessary re-renders of child components that receive functions as props."
      },
      {
        id: "components-22-d",
        text: "Always using inline functions in JSX props",
        isCorrect: false,
        explanation: "Using inline functions in JSX props (like onClick={() => handleClick()}) creates a new function on every render, which can harm performance rather than improve it."
      },
      {
        id: "components-22-e",
        text: "Using keys when rendering lists",
        isCorrect: true,
        explanation: "Keys help React identify which items have changed, been added, or removed in lists. This allows React to update only the necessary components, improving performance."
      }
    ],
    explanation: {
      correct: "Correct! Performance optimization in React involves using React.memo/PureComponent to prevent unnecessary re-renders, useMemo for expensive calculations, useCallback for event handlers, and keys for efficient list rendering.",
      incorrect: "React performance can be optimized with React.memo/PureComponent, useMemo, useCallback, and keys for lists. Using inline functions in JSX props typically harms performance rather than improving it.",
      detailed: "Performance optimization in React involves minimizing unnecessary re-renders and expensive computations. React.memo and PureComponent prevent components from re-rendering when props haven't changed. useMemo caches expensive calculations between renders. useCallback preserves function references to prevent child component re-renders. Keys help React update lists efficiently. Other optimizations include: 1) Code splitting with React.lazy and Suspense, 2) Virtualization for long lists (react-window, react-virtualized), 3) Debouncing or throttling event handlers, and 4) Using the Chrome Performance tab or React DevTools Profiler to identify bottlenecks."
    }
  },
  {
    id: "components-23",
    level: 1,
    topic: "components",
    question: "What is the purpose of the forwardRef function in React?",
    multipleCorrect: false,
    options: [
      {
        id: "components-23-a",
        text: "To pass a ref through a component to one of its children",
        isCorrect: true,
        explanation: "forwardRef lets your component receive a ref and forward it to a child component. This is particularly useful for reusable component libraries, allowing the component user to get a ref to an internal DOM element."
      },
      {
        id: "components-23-b",
        text: "To create a reference to a previous state value",
        isCorrect: false,
        explanation: "Creating references to previous values would typically be done with useRef and useEffect, not forwardRef. forwardRef is specifically about passing refs through components."
      },
      {
        id: "components-23-c",
        text: "To forward props to child components automatically",
        isCorrect: false,
        explanation: "forwardRef doesn't automatically forward props. For that, you would use the spread operator or manually pass props. forwardRef is specifically about forwarding refs."
      },
      {
        id: "components-23-d",
        text: "To create a reference to the component's DOM node",
        isCorrect: false,
        explanation: "Creating a reference to a component's DOM node is done with the useRef hook or createRef method, not forwardRef. forwardRef is for passing refs through a component to its children."
      }
    ],
    explanation: {
      correct: "Correct! forwardRef allows a component to receive a ref and forward it to a child component. This is useful when you want to expose a child component's DOM node to parent components.",
      incorrect: "forwardRef is used to pass a ref through a component to one of its children. It's not for creating references to previous values, automatically forwarding props, or creating refs to DOM nodes directly.",
      detailed: "Refs don't get passed through props like regular values - they require special handling. forwardRef creates a React component that can receive a ref and pass it on to a child component. It takes a render function with props and ref parameters and returns a React component. This is particularly useful for higher-order components and component libraries where you need to expose the underlying DOM element to the component user. Without forwardRef, parent components wouldn't be able to get a ref to a DOM element inside your component."
    }
  },
  {
    id: "components-24",
    level: 1,
    topic: "components",
    question: "What is the purpose of React's Context API?",
    multipleCorrect: false,
    options: [
      {
        id: "components-24-a",
        text: "To share data that can be considered 'global' for a tree of React components",
        isCorrect: true,
        explanation: "Context provides a way to pass data through the component tree without having to pass props down manually at every level. It's designed for sharing data that can be considered 'global' for a tree of React components."
      },
      {
        id: "components-24-b",
        text: "To optimize rendering performance automatically",
        isCorrect: false,
        explanation: "Context doesn't automatically optimize rendering performance. In fact, using Context can sometimes lead to unnecessary re-renders if not implemented carefully."
      },
      {
        id: "components-24-c",
        text: "To manage all application state",
        isCorrect: false,
        explanation: "While Context can be used for state management, it's not designed to manage all application state. For complex state management, libraries like Redux or Zustand might be more appropriate."
      },
      {
        id: "components-24-d",
        text: "To provide a way to directly modify parent component state",
        isCorrect: false,
        explanation: "Context doesn't provide a way to directly modify parent component state. It follows React's one-way data flow principle, just with a different mechanism for passing data."
      }
    ],
    explanation: {
      correct: "Correct! React's Context API provides a way to share data that can be considered 'global' for a tree of React components, without having to pass props down manually at every level.",
      incorrect: "Context is designed to share data through the component tree without prop drilling. It doesn't automatically optimize rendering, isn't designed to manage all application state, and doesn't allow directly modifying parent state.",
      detailed: "Context is primarily used when data needs to be accessible by many components at different nesting levels. It helps avoid 'prop drilling' - passing props through intermediate components that don't need the data but only pass it along. Common use cases include user authentication, theme settings, language preferences, and other application-level settings. Context consists of two main parts: the Provider, which makes data available, and the Consumer, which uses the data. In modern React, useContext hook is the preferred way to consume context."
    }
  },
  {
    id: "components-25",
    level: 1,
    topic: "components",
    question: "How do you create and use a Context in React?",
    multipleCorrect: false,
    options: [
      {
        id: "components-25-a",
        text: "Create context with React.createContext(), provide values with Context.Provider, and consume with useContext hook or Context.Consumer",
        isCorrect: true,
        explanation: "This describes the correct process for creating and using Context in React: create with React.createContext(), provide values with the Provider component, and consume with either the useContext hook or Consumer component."
      },
      {
        id: "components-25-b",
        text: "Create context with new Context(), provide values with Context.set(), and consume with Context.get()",
        isCorrect: false,
        explanation: "This syntax is completely incorrect. React doesn't use new Context(), Context.set(), or Context.get(). These methods don't exist in React's Context API."
      },
      {
        id: "components-25-c",
        text: "Create context with React.makeContext(), provide values with Context.value, and consume with getContext()",
        isCorrect: false,
        explanation: "This syntax is incorrect. React uses React.createContext() (not makeContext), Context.Provider (not Context.value), and useContext or Context.Consumer (not getContext())."
      },
      {
        id: "components-25-d",
        text: "Create context with React.useContext(), provide values with setContext(), and consume with Context.use()",
        isCorrect: false,
        explanation: "This syntax is incorrect. React.useContext() is for consuming context, not creating it. There's no setContext() or Context.use() in React's Context API."
      }
    ],
    explanation: {
      correct: "Correct! To use Context in React: 1) Create it with React.createContext(defaultValue), 2) Provide values with <MyContext.Provider value={...}>, and 3) Consume with the useContext hook or <MyContext.Consumer> component.",
      incorrect: "The correct process is: create context with React.createContext(), provide values with Context.Provider, and consume with useContext hook or Context.Consumer. The other options use non-existent methods and incorrect syntax.",
      detailed: "Here's a complete example: 1) Create: const ThemeContext = React.createContext('light'); 2) Provide: <ThemeContext.Provider value='dark'>{children}</ThemeContext.Provider>; 3) Consume with hook: const theme = useContext(ThemeContext); or with Consumer: <ThemeContext.Consumer>{theme => <div>{theme}</div>}</ThemeContext.Consumer>. The useContext hook is generally preferred in modern React as it's more concise. The default value passed to createContext is only used when a component consumes the context but isn't inside a Provider. Context is re-rendered whenever the Provider's value changes."
    }
  },
  {
    id: "components-26",
    level: 1,
    topic: "components",
    question: "What is the purpose of the useRef hook in React?",
    multipleCorrect: true,
    options: [
      {
        id: "components-26-a",
        text: "To create a mutable reference that persists across renders",
        isCorrect: true,
        explanation: "useRef returns a mutable ref object whose .current property is initialized to the passed argument. This object persists for the full lifetime of the component."
      },
      {
        id: "components-26-b",
        text: "To access DOM elements directly",
        isCorrect: true,
        explanation: "One common use of useRef is to access DOM elements directly. By assigning the ref to an element's ref attribute, you can access that element in your component code."
      },
      {
        id: "components-26-c",
        text: "To store values that don't trigger re-renders when changed",
        isCorrect: true,
        explanation: "Unlike state, changing a ref's .current value doesn't cause a re-render. This makes refs useful for storing values that need to persist between renders without triggering updates."
      },
      {
        id: "components-26-d",
        text: "To optimize rendering performance automatically",
        isCorrect: false,
        explanation: "useRef doesn't automatically optimize rendering performance. It can help you implement optimizations, but it doesn't do so on its own."
      },
      {
        id: "components-26-e",
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
  },
  {
    id: "components-27",
    level: 1,
    topic: "components",
    question: "What is the purpose of the useMemo hook in React?",
    multipleCorrect: false,
    options: [
      {
        id: "components-27-a",
        text: "To memoize expensive calculations so they only recompute when dependencies change",
        isCorrect: true,
        explanation: "useMemo memoizes the result of a function call, only recomputing it when one of the dependencies has changed. This is useful for expensive calculations that shouldn't be redone on every render."
      },
      {
        id: "components-27-b",
        text: "To memoize entire component renders",
        isCorrect: false,
        explanation: "Memoizing entire component renders is the purpose of React.memo, not useMemo. useMemo is for memoizing the result of a function or calculation."
      },
      {
        id: "components-27-c",
        text: "To create memoized callback functions",
        isCorrect: false,
        explanation: "Creating memoized callback functions is the purpose of useCallback, not useMemo. While they're similar, useMemo is for values, and useCallback is specifically for functions."
      },
      {
        id: "components-27-d",
        text: "To remember previous state values",
        isCorrect: false,
        explanation: "Remembering previous state values would typically be done with useRef or by storing previous values in state. useMemo is for performance optimization of expensive calculations."
      }
    ],
    explanation: {
      correct: "Correct! useMemo memoizes the result of an expensive calculation, only recomputing it when one of its dependencies changes. This helps avoid unnecessary recalculations during renders.",
      incorrect: "useMemo is used to memoize expensive calculations. It's not for memoizing entire component renders (React.memo), creating memoized callbacks (useCallback), or remembering previous state values (useRef).",
      detailed: "useMemo takes two arguments: a function that computes a value and a dependency array. It returns the memoized value that only changes when one of the dependencies changes. This is particularly useful for expensive calculations like filtering large arrays, complex mathematical operations, or generating derived data from props or state. By memoizing these operations, you prevent them from running on every render, which can significantly improve performance. Without useMemo, these calculations would run on every render, even if the inputs haven't changed."
    }
  },
  {
    id: "components-28",
    level: 1,
    topic: "components",
    question: "What is the purpose of the useCallback hook in React?",
    multipleCorrect: false,
    options: [
      {
        id: "components-28-a",
        text: "To memoize callback functions so they don't get recreated on every render",
        isCorrect: true,
        explanation: "useCallback returns a memoized version of the callback function that only changes if one of the dependencies has changed. This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders."
      },
      {
        id: "components-28-b",
        text: "To create callback URLs for routing",
        isCorrect: false,
        explanation: "useCallback has nothing to do with URL routing. For routing in React, you would typically use a library like React Router."
      },
      {
        id: "components-28-c",
        text: "To memoize the results of expensive calculations",
        isCorrect: false,
        explanation: "Memoizing the results of expensive calculations is the purpose of useMemo, not useCallback. useCallback is specifically for memoizing functions."
      },
      {
        id: "components-28-d",
        text: "To call functions after the component renders",
        isCorrect: false,
        explanation: "Calling functions after rendering would typically be done with useEffect, not useCallback. useCallback is for memoization, not scheduling."
      }
    ],
    explanation: {
      correct: "Correct! useCallback returns a memoized version of the callback function that only changes if one of the dependencies has changed. This helps prevent unnecessary re-renders in child components that receive the callback as a prop.",
      incorrect: "useCallback is used to memoize callback functions to prevent unnecessary re-renders. It's not for creating routing URLs, memoizing calculation results (useMemo does that), or calling functions after rendering (useEffect does that).",
      detailed: "useCallback is particularly useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders. Without useCallback, a new function would be created on every render, which could cause child components wrapped in React.memo to re-render unnecessarily. useCallback takes two arguments: the function to memoize and an array of dependencies. The function will only be recreated if one of the dependencies changes. It's similar to useMemo, but specifically designed for functions."
    }
  },
  {
    id: "components-29",
    level: 1,
    topic: "components",
    question: "What is the purpose of the useEffect hook in React?",
    multipleCorrect: false,
    options: [
      {
        id: "components-29-a",
        text: "To perform side effects in functional components",
        isCorrect: true,
        explanation: "useEffect allows you to perform side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM - things that would typically be handled by lifecycle methods in class components."
      },
      {
        id: "components-29-b",
        text: "To create local state in functional components",
        isCorrect: false,
        explanation: "Creating local state is the purpose of the useState hook, not useEffect. useEffect is for side effects that happen after rendering."
      },
      {
        id: "components-29-c",
        text: "To optimize rendering performance automatically",
        isCorrect: false,
        explanation: "useEffect doesn't automatically optimize rendering performance. For performance optimization, you would use useMemo, useCallback, or React.memo."
      },
      {
        id: "components-29-d",
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
    id: "components-30",
    level: 1,
    topic: "components",
    question: "What is the purpose of the useLayoutEffect hook in React?",
    multipleCorrect: false,
    options: [
      {
        id: "components-30-a",
        text: "To perform DOM measurements and mutations before the browser paints",
        isCorrect: true,
        explanation: "useLayoutEffect fires synchronously after all DOM mutations but before the browser paints. This makes it useful for DOM measurements and mutations that need to happen before the user sees the updated screen."
      },
      {
        id: "components-30-b",
        text: "To optimize the layout of components automatically",
        isCorrect: false,
        explanation: "useLayoutEffect doesn't automatically optimize component layout. It's a timing hook for when your code runs, not an optimization tool."
      },
      {
        id: "components-30-c",
        text: "To create CSS layouts programmatically",
        isCorrect: false,
        explanation: "useLayoutEffect isn't specifically for creating CSS layouts. While you could manipulate styles within it, that's not its primary purpose."
      },
      {
        id: "components-30-d",
        text: "To replace useEffect in all cases",
        isCorrect: false,
        explanation: "useLayoutEffect shouldn't replace useEffect in all cases. useEffect is preferred for most side effects because it doesn't block painting, leading to better performance."
      }
    ],
    explanation: {
      correct: "Correct! useLayoutEffect runs synchronously after DOM mutations but before the browser paints. This makes it ideal for DOM measurements and mutations that need to be visible immediately, preventing visual flickers.",
      incorrect: "useLayoutEffect is for performing DOM measurements and mutations before the browser paints. It doesn't automatically optimize layouts, isn't specifically for creating CSS layouts, and shouldn't replace useEffect in all cases.",
      detailed: "The signature of useLayoutEffect is identical to useEffect, but it fires synchronously after all DOM mutations and before the browser paints. This ensures that DOM measurements and mutations happen before the user sees the updated screen, preventing potential visual flickers. However, because it runs synchronously and blocks painting, it can negatively impact performance. For this reason, the React team recommends using the standard useEffect when possible, and only using useLayoutEffect when necessary for DOM measurements or preventing flickers."
    }
  },
  {
    id: "components-31",
    level: 1,
    topic: "components",
    question: "What is the purpose of the useReducer hook in React?",
    multipleCorrect: false,
    options: [
      {
        id: "components-31-a",
        text: "To manage complex state logic with a reducer function",
        isCorrect: true,
        explanation: "useReducer is a hook that lets you manage complex state logic using a reducer function, similar to how Redux works. It's an alternative to useState when state logic becomes complex."
      },
      {
        id: "components-31-b",
        text: "To reduce the bundle size of React applications",
        isCorrect: false,
        explanation: "useReducer has nothing to do with bundle size optimization. It's a state management hook, not a build optimization tool."
      },
      {
        id: "components-31-c",
        text: "To combine multiple components into one",
        isCorrect: false,
        explanation: "Combining components would be done through composition, not with useReducer. useReducer is specifically for state management."
      },
      {
        id: "components-31-d",
        text: "To reduce the number of re-renders automatically",
        isCorrect: false,
        explanation: "useReducer doesn't automatically reduce re-renders. It can help manage complex state transitions, but components will still re-render when state changes."
      }
    ],
    explanation: {
      correct: "Correct! useReducer is a hook for managing complex state logic with a reducer function. It's particularly useful when state transitions depend on previous state or when state logic is complex.",
      incorrect: "useReducer is used to manage complex state logic with a reducer function. It's not for reducing bundle size, combining components, or automatically reducing re-renders.",
      detailed: "useReducer is an alternative to useState that's preferable when state logic is complex, involves multiple sub-values, or depends on previous state. It takes a reducer function and initial state, returning the current state and a dispatch function. The reducer function takes the current state and an action, returning the new state based on the action type. This pattern, inspired by Redux, centralizes state update logic, making it more predictable and easier to test. useReducer is especially useful for managing form state, step wizards, or any UI with multiple ways to update state."
    }
  },
  {
    id: "components-32",
    level: 1,
    topic: "components",
    question: "What is the purpose of the useContext hook in React?",
    multipleCorrect: false,
    options: [
      {
        id: "components-32-a",
        text: "To consume values from a React Context",
        isCorrect: true,
        explanation: "useContext is a hook that lets you read and subscribe to a context in a functional component. It's a cleaner alternative to the Context.Consumer component approach."
      },
      {
        id: "components-32-b",
        text: "To create a new Context",
        isCorrect: false,
        explanation: "Creating a new Context is done with React.createContext(), not useContext. useContext is for consuming an existing context."
      },
      {
        id: "components-32-c",
        text: "To provide values to child components",
        isCorrect: false,
        explanation: "Providing values to child components is done with the Context.Provider component, not the useContext hook. useContext is for consuming context values."
      },
      {
        id: "components-32-d",
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
    id: "components-33",
    level: 1,
    topic: "components",
    question: "What is the purpose of the useImperativeHandle hook in React?",
    multipleCorrect: false,
    options: [
      {
        id: "components-33-a",
        text: "To customize the instance value exposed when using refs",
        isCorrect: true,
        explanation: "useImperativeHandle customizes the instance value that is exposed when a parent component uses ref to access a child component. It lets you control what the parent can access through the ref."
      },
      {
        id: "components-33-b",
        text: "To directly manipulate the DOM",
        isCorrect: false,
        explanation: "While useImperativeHandle is related to refs, which can be used for DOM manipulation, the hook itself doesn't directly manipulate the DOM. It customizes what's exposed through a ref."
      },
      {
        id: "components-33-c",
        text: "To handle imperative programming in React",
        isCorrect: false,
        explanation: "While the name contains 'imperative', this hook isn't about general imperative programming in React. It's specifically for customizing refs, which are one of the few imperative features in React."
      },
      {
        id: "components-33-d",
        text: "To optimize rendering performance",
        isCorrect: false,
        explanation: "useImperativeHandle isn't primarily for performance optimization. It's for controlling the interface exposed through refs."
      }
    ],
    explanation: {
      correct: "Correct! useImperativeHandle customizes the instance value that is exposed when a parent component uses ref to access a child component. This lets you control exactly what the parent can access through the ref.",
      incorrect: "useImperativeHandle customizes the instance value exposed when using refs. It's not for directly manipulating the DOM, handling general imperative programming, or optimizing rendering performance.",
      detailed: "useImperativeHandle should be used with forwardRef, as it's designed to customize the ref that is forwarded. It takes three arguments: the ref to customize, a function that returns the customized instance value, and an optional dependency array. This hook is useful when you want to expose only specific functions or properties to the parent component, rather than the entire component instance or DOM node. It helps maintain encapsulation by giving you control over the imperative API of your component."
    }
  },
  {
    id: "components-34",
    level: 1,
    topic: "components",
    question: "What is the purpose of the useDebugValue hook in React?",
    multipleCorrect: false,
    options: [
      {
        id: "components-34-a",
        text: "To display a label for custom hooks in React DevTools",
        isCorrect: true,
        explanation: "useDebugValue is used to display a label for custom hooks in React DevTools. It helps developers understand what a custom hook is doing when inspecting the component tree."
      },
      {
        id: "components-34-b",
        text: "To log debug information to the console",
        isCorrect: false,
        explanation: "useDebugValue doesn't log to the console. It's specifically for enhancing the debugging experience in React DevTools."
      },
      {
        id: "components-34-c",
        text: "To enable debugging mode in a component",
        isCorrect: false,
        explanation: "useDebugValue doesn't enable a special debugging mode. It just adds information to DevTools to help with debugging."
      },
      {
        id: "components-34-d",
        text: "To debug performance issues automatically",
        isCorrect: false,
        explanation: "useDebugValue doesn't automatically debug performance issues. For performance debugging, you would use the React Profiler or other performance measurement tools."
      }
    ],
    explanation: {
      correct: "Correct! useDebugValue is used to display a label for custom hooks in React DevTools. This makes it easier to understand what your custom hooks are doing when debugging.",
      incorrect: "useDebugValue is used to display a label for custom hooks in React DevTools. It doesn't log to the console, enable a special debugging mode, or automatically debug performance issues.",
      detailed: "useDebugValue is primarily intended for custom hooks that are part of shared libraries, where providing additional debugging information can help users of your hook understand its behavior. It accepts a value to display and an optional formatting function that can defer expensive formatting until the hook is actually inspected. The value will only be shown when the component using your hook is inspected in React DevTools, so there's no performance impact in production."
    }
  },
  {
    id: "components-35",
    level: 1,
    topic: "components",
    question: "What is the purpose of the useId hook in React?",
    multipleCorrect: false,
    options: [
      {
        id: "components-35-a",
        text: "To generate stable, unique IDs for accessibility attributes",
        isCorrect: true,
        explanation: "useId is a hook for generating unique IDs that are stable across the server and client, helping with accessibility attributes that need to be consistent during hydration."
      },
      {
        id: "components-35-b",
        text: "To identify components uniquely in the React DevTools",
        isCorrect: false,
        explanation: "useId isn't for DevTools identification. Components in DevTools are identified by their name and structure in the component tree."
      },
      {
        id: "components-35-c",
        text: "To create IDs for database records",
        isCorrect: false,
        explanation: "useId isn't for database record IDs. It's specifically for generating stable IDs for DOM elements, particularly for accessibility attributes."
      },
      {
        id: "components-35-d",
        text: "To track component instances for performance monitoring",
        isCorrect: false,
        explanation: "useId isn't for performance monitoring. It's for generating stable, unique IDs for accessibility and other DOM-related purposes."
      }
    ],
    explanation: {
      correct: "Correct! useId is a hook for generating stable, unique IDs that are consistent across server and client renders. It's particularly useful for accessibility attributes like aria-labelledby.",
      incorrect: "useId generates stable, unique IDs for accessibility attributes. It's not for identifying components in DevTools, creating database record IDs, or tracking component instances for performance.",
      detailed: "Introduced in React 18, useId addresses the challenge of generating stable IDs that work with server rendering. Before useId, developers often used incrementing counters or libraries like uuid, which could cause hydration mismatches between server and client. useId generates a string that includes a stable identifier for the current component and is consistent across renders. It's especially important for accessibility attributes like aria-labelledby and aria-describedby, where the ID needs to match between elements."
    }
  },
  {
    id: "components-36",
    level: 1,
    topic: "components",
    question: "What is the purpose of the useDeferredValue hook in React?",
    multipleCorrect: false,
    options: [
      {
        id: "components-36-a",
        text: "To defer updating a part of the UI to avoid blocking more urgent updates",
        isCorrect: true,
        explanation: "useDeferredValue lets you defer updating a part of the UI, marking it as lower priority. This helps keep the UI responsive during expensive updates by prioritizing more urgent interactions."
      },
      {
        id: "components-36-b",
        text: "To delay the initial rendering of a component",
        isCorrect: false,
        explanation: "useDeferredValue doesn't delay initial rendering. It's for deferring updates to existing content, not delaying the first render."
      },
      {
        id: "components-36-c",
        text: "To cache values for better performance",
        isCorrect: false,
        explanation: "While useDeferredValue can help with performance, it's not a caching mechanism. For caching computed values, you would use useMemo."
      },
      {
        id: "components-36-d",
        text: "To postpone state updates until a specific time",
        isCorrect: false,
        explanation: "useDeferredValue doesn't postpone updates until a specific time. It marks updates as lower priority, but doesn't schedule them for a specific moment."
      }
    ],
    explanation: {
      correct: "Correct! useDeferredValue allows you to defer updating a part of the UI to avoid blocking more urgent updates. It's useful for keeping the interface responsive during expensive rendering operations.",
      incorrect: "useDeferredValue defers updating parts of the UI to avoid blocking more urgent updates. It doesn't delay initial rendering, cache values, or postpone updates until a specific time.",
      detailed: "Introduced in React 18, useDeferredValue is part of React's Concurrent Mode features. It accepts a value and returns a new copy of that value that will lag behind the original. During urgent updates, React will first update the interface with the original value, then update the deferred value in a lower priority render. This is particularly useful for expensive rendering operations like filtering a large list based on user input. Instead of blocking the UI on every keystroke, you can defer the filtering operation, keeping the input responsive while the filtered results catch up."
    }
  },
  {
    id: "components-37",
    level: 1,
    topic: "components",
    question: "What is the purpose of the useTransition hook in React?",
    multipleCorrect: false,
    options: [
      {
        id: "components-37-a",
        text: "To mark state updates as transitions, giving React permission to delay them",
        isCorrect: true,
        explanation: "useTransition lets you mark state updates as transitions, which tells React they can be interrupted and delayed in favor of more urgent updates. This helps keep the UI responsive during expensive updates."
      },
      {
        id: "components-37-b",
        text: "To create CSS transitions automatically",
        isCorrect: false,
        explanation: "useTransition has nothing to do with CSS transitions. It's about prioritizing state updates, not visual animations."
      },
      {
        id: "components-37-c",
        text: "To transition between different components",
        isCorrect: false,
        explanation: "useTransition isn't for transitioning between components. For component transitions, you would use libraries like react-transition-group or framer-motion."
      },
      {
        id: "components-37-d",
        text: "To transition data from one format to another",
        isCorrect: false,
        explanation: "useTransition isn't for data transformation. It's specifically for marking state updates as lower priority in React's concurrent rendering model."
      }
    ],
    explanation: {
      correct: "Correct! useTransition allows you to mark state updates as transitions, giving React permission to delay them in favor of more urgent updates. This helps keep the UI responsive during expensive operations.",
      incorrect: "useTransition marks state updates as transitions that can be delayed. It's not for creating CSS transitions, transitioning between components, or transforming data formats.",
      detailed: "Introduced in React 18, useTransition returns an array with two items: a boolean indicating if a transition is pending, and a function to start a transition. When you wrap a state update in the startTransition function, you tell React that it's a transition that can be interrupted and delayed if there are more urgent updates. This is useful for updates that might cause a lot of re-rendering but don't need to be immediate, like changing a filter that affects a large list. The isPending boolean can be used to show a loading indicator while the transition is in progress."
    }
  },
  {
    id: "components-38",
    level: 1,
    topic: "components",
    question: "What is the purpose of the useSyncExternalStore hook in React?",
    multipleCorrect: false,
    options: [
      {
        id: "components-38-a",
        text: "To subscribe to an external store with support for server rendering",
        isCorrect: true,
        explanation: "useSyncExternalStore is a hook for subscribing to an external data store in a way that's compatible with concurrent rendering and server-side rendering. It ensures consistency between server and client renders."
      },
      {
        id: "components-38-b",
        text: "To synchronize multiple useState hooks",
        isCorrect: false,
        explanation: "useSyncExternalStore isn't for synchronizing useState hooks. It's specifically for subscribing to external data stores outside of React's state system."
      },
      {
        id: "components-38-c",
        text: "To store data in a synchronized database",
        isCorrect: false,
        explanation: "useSyncExternalStore has nothing to do with databases. It's for subscribing to external state sources like Redux stores, browser APIs, or other non-React state management systems."
      },
      {
        id: "components-38-d",
        text: "To create a store that syncs across multiple tabs",
        isCorrect: false,
        explanation: "useSyncExternalStore doesn't create stores or handle cross-tab synchronization. It's for subscribing to existing external stores in a React-friendly way."
      }
    ],
    explanation: {
      correct: "Correct! useSyncExternalStore is a hook for subscribing to an external data store in a way that's compatible with concurrent rendering and server-side rendering.",
      incorrect: "useSyncExternalStore subscribes to external stores with support for server rendering. It's not for synchronizing useState hooks, storing data in databases, or creating cross-tab synchronized stores.",
      detailed: "Introduced in React 18, useSyncExternalStore was created to help library authors integrate their external stores with React's concurrent rendering. It takes three arguments: a subscribe function that registers a callback to be called when the store changes, a getSnapshot function that returns the current value from the store, and an optional getServerSnapshot function for server rendering. This hook ensures that if a render is interrupted by a higher priority update, React will re-read the store value before continuing to ensure consistency."
    }
  },
  {
    id: "components-39",
    level: 1,
    topic: "components",
    question: "What are the Rules of Hooks in React?",
    multipleCorrect: true,
    options: [
      {
        id: "components-39-a",
        text: "Only call hooks at the top level of your component",
        isCorrect: true,
        explanation: "Hooks should not be called inside loops, conditions, or nested functions. This ensures that hooks are called in the same order each time a component renders, which is necessary for React to correctly preserve the state of hooks between renders."
      },
      {
        id: "components-39-b",
        text: "Only call hooks from React function components or custom hooks",
        isCorrect: true,
        explanation: "Hooks should only be called from React function components or from custom hooks. They should not be called from regular JavaScript functions or class components."
      },
      {
        id: "components-39-c",
        text: "Custom hooks must start with 'use'",
        isCorrect: true,
        explanation: "By convention, custom hooks should start with 'use' (like useState, useEffect). This allows the linter to apply the rules of hooks and makes it clear that the function is a hook."
      },
      {
        id: "components-39-d",
        text: "Hooks must be used in every component",
        isCorrect: false,
        explanation: "There's no requirement to use hooks in every component. You can mix and match functional components with hooks, functional components without hooks, and class components in the same application."
      },
      {
        id: "components-39-e",
        text: "Hooks must be called in alphabetical order",
        isCorrect: false,
        explanation: "There's no requirement for hooks to be called in alphabetical order. They just need to be called in the same order on every render, which is why they should be at the top level."
      }
    ],
    explanation: {
      correct: "Correct! The Rules of Hooks state that you should only call hooks at the top level (not inside loops, conditions, or nested functions), only call them from React function components or custom hooks, and custom hooks should start with 'use'.",
      incorrect: "The Rules of Hooks include: only call hooks at the top level, only call them from React function components or custom hooks, and custom hooks should start with 'use'. There's no requirement to use hooks in every component or to call them in alphabetical order.",
      detailed: "These rules are enforced to ensure hooks work correctly. The top-level rule ensures hooks are called in the same order each render, which React relies on to correctly associate state with hooks. The 'only from React functions' rule ensures hooks have access to the React component context. The 'use' prefix convention helps both linting tools and developers identify which functions are hooks. React provides an ESLint plugin (eslint-plugin-react-hooks) that enforces these rules automatically."
    }
  },
  {
    id: "components-40",
    level: 1,
    topic: "components",
    question: "What is the difference between controlled and uncontrolled components in React forms?",
    multipleCorrect: false,
    options: [
      {
        id: "components-40-a",
        text: "Controlled components store form data in React state, while uncontrolled components store it in the DOM",
        isCorrect: true,
        explanation: "In controlled components, form data is handled by React state. Every state change is handled by a React handler function. In uncontrolled components, form data is handled by the DOM itself, and you access the values using refs."
      },
      {
        id: "components-40-b",
        text: "Controlled components are faster than uncontrolled components",
        isCorrect: false,
        explanation: "There's no inherent performance difference between controlled and uncontrolled components. The choice depends on the use case, not performance considerations."
      },
      {
        id: "components-40-c",
        text: "Controlled components are class components, while uncontrolled components are functional components",
        isCorrect: false,
        explanation: "The distinction between controlled and uncontrolled has nothing to do with class vs. functional components. Both types can be implemented using either component style."
      },
      {
        id: "components-40-d",
        text: "Controlled components can't be modified by the user, while uncontrolled components can",
        isCorrect: false,
        explanation: "Both controlled and uncontrolled components can be modified by the user. The difference is in how the data is managed, not whether user input is allowed."
      }
    ],
    explanation: {
      correct: "Correct! In controlled components, form data is handled by React state, with onChange handlers updating the state. In uncontrolled components, the DOM itself handles the data, which is accessed using refs.",
      incorrect: "The key difference is that controlled components manage form data through React state, while uncontrolled components let the DOM handle it. This has nothing to do with performance, component type, or whether user modifications are allowed.",
      detailed: "Controlled components provide more control and are generally recommended for most use cases. They make form validation easier, allow immediate UI updates based on input, and make it simpler to reset or modify form values programmatically. Uncontrolled components require less code for simple cases and can be useful when integrating with non-React code. However, they make certain operations like form validation more complex. Most React applications primarily use controlled components for forms."
    }
  },
  {
    id: "components-41",
    level: 1,
    topic: "components",
    question: "How do you create a controlled input component in React?",
    multipleCorrect: false,
    options: [
      {
        id: "components-41-a",
        text: "By storing the input value in state and updating it with an onChange handler",
        isCorrect: true,
        explanation: "A controlled input component stores its value in React state and updates that state with an onChange handler. The input's value prop is set to the state value, creating a complete control loop."
      },
      {
        id: "components-41-b",
        text: "By using a ref to access the input's value directly",
        isCorrect: false,
        explanation: "Using refs to access input values directly creates uncontrolled components, not controlled ones. Controlled components use state and onChange handlers."
      },
      {
        id: "components-41-c",
        text: "By setting the defaultValue prop on the input",
        isCorrect: false,
        explanation: "Setting defaultValue creates an uncontrolled component, not a controlled one. Controlled components use the value prop (not defaultValue) and an onChange handler."
      },
      {
        id: "components-41-d",
        text: "By extending the React.ControlledComponent class",
        isCorrect: false,
        explanation: "There is no React.ControlledComponent class in React. 'Controlled' refers to a pattern where you control a component's value through state, not to a specific class to extend."
      }
    ],
    explanation: {
      correct: "Correct! A controlled input component is created by storing the input value in state and updating it with an onChange handler. The input's value prop is set to the state value.",
      incorrect: "Controlled input components store the input value in state and update it with onChange handlers. Using refs, setting defaultValue, or extending a non-existent ControlledComponent class doesn't create controlled components.",
      detailed: "Here's a basic example of a controlled input: function ControlledInput() { const [value, setValue] = useState(''); return <input value={value} onChange={(e) => setValue(e.target.value)} />; }. The key aspects are: 1) The input's value comes from state, 2) The onChange handler updates that state, and 3) The state change causes a re-render with the new value. This creates a complete control loop where React state is the 'single source of truth' for the input's value. This pattern gives you full control over the input, making it easy to implement validation, formatting, or other transformations on user input."
    }
  },
  {
    id: "components-42",
    level: 1,
    topic: "components",
    question: "How do you create an uncontrolled input component in React?",
    multipleCorrect: false,
    options: [
      {
        id: "components-42-a",
        text: "By using a ref to access the input's value when needed",
        isCorrect: true,
        explanation: "Uncontrolled inputs manage their own state internally (in the DOM). You can use a ref to access the current value when needed, such as when the form is submitted."
      },
      {
        id: "components-42-b",
        text: "By storing the input value in state and updating it with an onChange handler",
        isCorrect: false,
        explanation: "This describes a controlled component, not an uncontrolled one. Uncontrolled components don't use state to manage the input value."
      },
      {
        id: "components-42-c",
        text: "By extending the React.UncontrolledComponent class",
        isCorrect: false,
        explanation: "There is no React.UncontrolledComponent class in React. 'Uncontrolled' refers to a pattern where the DOM manages the component's value, not to a specific class to extend."
      },
      {
        id: "components-42-d",
        text: "By setting the value prop without an onChange handler",
        isCorrect: false,
        explanation: "Setting the value prop without an onChange handler would create a read-only input, not an uncontrolled one. Uncontrolled inputs typically use defaultValue or no value prop at all."
      }
    ],
    explanation: {
      correct: "Correct! An uncontrolled input component is created by letting the DOM manage the input's state internally and using a ref to access the value when needed.",
      incorrect: "Uncontrolled input components use refs to access the input's value when needed. They don't store the value in state with onChange handlers, extend a non-existent UncontrolledComponent class, or set value without onChange.",
      detailed: "Here's a basic example of an uncontrolled input: function UncontrolledInput() { const inputRef = useRef(); const handleSubmit = () => { console.log(inputRef.current.value); }; return <input defaultValue=\"initial value\" ref={inputRef} />; }. The key aspects are: 1) The input manages its own state internally, 2) You can set an initial value with defaultValue, and 3) You access the current value using a ref when needed. Uncontrolled components are simpler for basic cases but offer less control for complex forms. They're useful when integrating with non-React code or when performance is a concern."
    }
  },
  {
    id: "components-43",
    level: 1,
    topic: "components",
    question: "What is the purpose of React's 'defaultValue' prop for form elements?",
    multipleCorrect: false,
    options: [
      {
        id: "components-43-a",
        text: "To set the initial value of an uncontrolled input",
        isCorrect: true,
        explanation: "defaultValue sets the initial value of an uncontrolled input without making it controlled. The DOM manages the input's state after the initial render."
      },
      {
        id: "components-43-b",
        text: "To provide a fallback value for controlled inputs when state is undefined",
        isCorrect: false,
        explanation: "This is not how defaultValue works. Controlled inputs should always have a defined value from state. If you need a default, set it in the initial state."
      },
      {
        id: "components-43-c",
        text: "To reset a form element to its original value",
        isCorrect: false,
        explanation: "defaultValue only affects the initial render. To reset a form element, you would need to manipulate its value directly (for uncontrolled) or update the state (for controlled)."
      },
      {
        id: "components-43-d",
        text: "To create a controlled input component",
        isCorrect: false,
        explanation: "defaultValue is used for uncontrolled components, not controlled ones. Controlled components use the value prop and an onChange handler."
      }
    ],
    explanation: {
      correct: "Correct! The defaultValue prop sets the initial value of an uncontrolled input. After the initial render, the DOM manages the input's state internally.",
      incorrect: "defaultValue sets the initial value of an uncontrolled input. It's not for providing fallbacks in controlled inputs, resetting forms to original values, or creating controlled inputs.",
      detailed: "defaultValue is to uncontrolled inputs what value is to controlled inputs. It sets the initial value without making React responsible for managing the input's state. For text inputs, you use defaultValue. For checkboxes and radio buttons, you use defaultChecked. After the initial render, changes to defaultValue have no effect - the DOM manages the input's state. This is in contrast to the value prop in controlled components, which must be kept in sync with state and updated through onChange handlers."
    }
  },
  {
    id: "components-44",
    level: 1,
    topic: "components",
    question: "What is the difference between using 'key' and 'ref' in React?",
    multipleCorrect: false,
    options: [
      {
        id: "components-44-a",
        text: "key helps React track items in lists, while ref provides access to DOM elements or component instances",
        isCorrect: true,
        explanation: "The key prop is used to give elements in a list a stable identity, helping React's reconciliation algorithm. The ref attribute provides a way to access DOM nodes or React elements created in the render method."
      },
      {
        id: "components-44-b",
        text: "key is for performance optimization, while ref is for styling elements",
        isCorrect: false,
        explanation: "While key does help with performance by optimizing list rendering, ref is not primarily for styling. Refs are for accessing DOM elements or component instances, not for applying styles."
      },
      {
        id: "components-44-c",
        text: "key is passed to the component as a prop, while ref is not",
        isCorrect: false,
        explanation: "This is incorrect. Neither key nor ref is passed to components as props. They are special attributes handled by React itself."
      },
      {
        id: "components-44-d",
        text: "key is required for all elements, while ref is optional",
        isCorrect: false,
        explanation: "key is not required for all elements - it's only required for elements in arrays or iterators where a stable identity is needed. Both key and ref are optional in general."
      }
    ],
    explanation: {
      correct: "Correct! The key prop helps React track items in lists for efficient updates, while the ref attribute provides access to DOM elements or component instances.",
      incorrect: "The key difference is that key helps React track items in lists, while ref provides access to DOM elements or component instances. The other options contain misconceptions about how these attributes work.",
      detailed: "key is a special prop used when rendering lists to give elements a stable identity. It helps React determine which items have changed, been added, or removed, enabling efficient updates. Keys should be unique among siblings. ref is an attribute that provides a way to access DOM nodes or React component instances. It can be a callback function, a React.createRef() object, or a string (legacy). Unlike most props, both key and ref are not accessible via this.props.key or this.props.ref - they're handled specially by React."
    }
  },
  {
    id: "components-45",
    level: 1,
    topic: "components",
    question: "What are the different ways to apply CSS styles in React components?",
    multipleCorrect: true,
    options: [
      {
        id: "components-45-a",
        text: "Inline styles using the style prop with a JavaScript object",
        isCorrect: true,
        explanation: "React supports inline styles using the style prop with a JavaScript object. CSS property names are camelCased in this object (e.g., backgroundColor instead of background-color)."
      },
      {
        id: "components-45-b",
        text: "CSS classes using the className prop",
        isCorrect: true,
        explanation: "The className prop is used to apply CSS classes to React elements. This is the equivalent of the class attribute in HTML."
      },
      {
        id: "components-45-c",
        text: "CSS Modules for component-scoped styles",
        isCorrect: true,
        explanation: "CSS Modules allow you to write CSS that's scoped to a specific component, avoiding global namespace conflicts. The class names are automatically made unique during the build process."
      },
      {
        id: "components-45-d",
        text: "Styled-components or other CSS-in-JS libraries",
        isCorrect: true,
        explanation: "CSS-in-JS libraries like styled-components allow you to write actual CSS syntax within JavaScript, creating styled React components with scoped styles."
      },
      {
        id: "components-45-e",
        text: "Using the class attribute directly",
        isCorrect: false,
        explanation: "React uses className instead of class for CSS classes, as 'class' is a reserved keyword in JavaScript. Using the class attribute directly is incorrect in React."
      }
    ],
    explanation: {
      correct: "Correct! React components can be styled using inline styles with the style prop, CSS classes with the className prop, CSS Modules for component-scoped styles, and CSS-in-JS libraries like styled-components.",
      incorrect: "React components can be styled using inline styles (style prop), CSS classes (className prop), CSS Modules, and CSS-in-JS libraries. Using the class attribute directly is incorrect - React uses className instead.",
      detailed: "Each styling approach has its own use cases: 1) Inline styles are useful for dynamic styles that depend on component state, but don't support all CSS features like media queries or pseudo-classes. 2) Regular CSS with className is simple and familiar, but can lead to global namespace conflicts. 3) CSS Modules provide local scoping while using regular CSS syntax. 4) CSS-in-JS libraries like styled-components offer full CSS features with component-scoped styles and the ability to use props for dynamic styling. Many React projects use a combination of these approaches depending on the specific needs of each component."
    }
  },
  {
    id: "components-46",
    level: 1,
    topic: "components",
    question: "What is the purpose of React's 'dangerouslySetInnerHTML' prop?",
    multipleCorrect: false,
    options: [
      {
        id: "components-46-a",
        text: "To insert HTML directly into the DOM, bypassing React's XSS protections",
        isCorrect: true,
        explanation: "dangerouslySetInnerHTML is React's replacement for using innerHTML in the browser DOM. It allows you to set HTML directly from React, but is named dangerously to remind developers to be careful of XSS risks."
      },
      {
        id: "components-46-b",
        text: "To highlight dangerous code in the React DevTools",
        isCorrect: false,
        explanation: "dangerouslySetInnerHTML doesn't highlight code in DevTools. The 'dangerous' part of the name is just a warning to developers about the security implications."
      },
      {
        id: "components-46-c",
        text: "To mark components that might cause performance issues",
        isCorrect: false,
        explanation: "dangerouslySetInnerHTML isn't related to performance marking. It's specifically for inserting raw HTML, with the name warning about security risks."
      },
      {
        id: "components-46-d",
        text: "To enable experimental React features",
        isCorrect: false,
        explanation: "dangerouslySetInnerHTML doesn't enable experimental features. It's a standard React prop for a specific use case (inserting raw HTML)."
      }
    ],
    explanation: {
      correct: "Correct! dangerouslySetInnerHTML allows you to insert HTML directly into the DOM, bypassing React's built-in XSS protections. It's named with 'dangerously' as a reminder of the security risks.",
      incorrect: "dangerouslySetInnerHTML is React's replacement for innerHTML, allowing you to set HTML directly from React. It doesn't highlight dangerous code, mark performance issues, or enable experimental features.",
      detailed: "This prop is intentionally named to be scary because improper use of innerHTML can open you up to cross-site scripting (XSS) attacks. When using dangerouslySetInnerHTML, you must pass an object with a __html key to remind yourself that it's dangerous. For example: dangerouslySetInnerHTML={{__html: htmlString}}. You should only use this when you absolutely trust the source of the HTML, such as when working with content from a CMS that has its own sanitization, or when you've sanitized the HTML yourself using a library like DOMPurify."
    }
  },
  {
    id: "components-47",
    level: 1,
    topic: "components",
    question: "What is the purpose of React's 'defaultProps'?",
    multipleCorrect: false,
    options: [
      {
        id: "components-47-a",
        text: "To specify default values for props when they aren't provided by the parent component",
        isCorrect: true,
        explanation: "defaultProps allows you to set default values for props that will be used when the parent component doesn't provide a value for that prop."
      },
      {
        id: "components-47-b",
        text: "To enforce required props",
        isCorrect: false,
        explanation: "defaultProps doesn't enforce required props. For that, you would use PropTypes.isRequired or TypeScript's required property marker."
      },
      {
        id: "components-47-c",
        text: "To reset props to their initial values",
        isCorrect: false,
        explanation: "defaultProps doesn't reset props. It only provides default values when props aren't specified by the parent."
      },
      {
        id: "components-47-d",
        text: "To override props provided by the parent component",
        isCorrect: false,
        explanation: "defaultProps doesn't override props provided by the parent. It only provides values when the parent doesn't specify them."
      }
    ],
    explanation: {
      correct: "Correct! defaultProps allows you to specify default values for props when they aren't provided by the parent component. This helps make components more reusable and self-contained.",
      incorrect: "defaultProps specifies default values for props when they aren't provided by the parent component. It doesn't enforce required props, reset props to initial values, or override props from the parent.",
      detailed: "In class components, defaultProps is defined as a static property on the component class. In functional components, you can use default parameters in the function signature or the static defaultProps property. With the introduction of hooks, many developers now prefer using default parameters for functional components (e.g., function MyComponent({ prop = defaultValue })) as it's more concise. defaultProps ensures your component works even when certain props are omitted, making it more robust and easier to use."
    }
  },
  {
    id: "components-48",
    level: 1,
    topic: "components",
    question: "What is the purpose of React's 'propTypes'?",
    multipleCorrect: false,
    options: [
      {
        id: "components-48-a",
        text: "To validate the types of props passed to a component",
        isCorrect: true,
        explanation: "propTypes is used for runtime type checking of props. It helps catch bugs by validating that props are of the expected type and displays warnings in development when they're not."
      },
      {
        id: "components-48-b",
        text: "To automatically convert props to the correct type",
        isCorrect: false,
        explanation: "propTypes doesn't convert props to the correct type. It only validates types and warns if they don't match the expected types."
      },
      {
        id: "components-48-c",
        text: "To define which props are required for a component",
        isCorrect: false,
        explanation: "While propTypes can mark props as required using isRequired, its primary purpose is type validation, not just defining required props."
      },
      {
        id: "components-48-d",
        text: "To improve rendering performance",
        isCorrect: false,
        explanation: "propTypes doesn't improve rendering performance. In fact, it adds a small overhead in development mode, which is why it's typically stripped out in production builds."
      }
    ],
    explanation: {
      correct: "Correct! React's propTypes is used for runtime type checking of props passed to a component. It helps catch bugs by validating that props are of the expected type.",
      incorrect: "propTypes is used to validate the types of props passed to a component. It doesn't convert props to the correct type, isn't primarily for defining required props, and doesn't improve rendering performance.",
      detailed: "PropTypes was originally part of the React core but was moved to a separate package (prop-types) in React 15.5. It provides a range of validators for different types (e.g., PropTypes.string, PropTypes.number, PropTypes.array) and can validate more complex structures like shapes and arrays of specific types. Type checking only happens in development mode and is stripped out in production for performance. While PropTypes provides runtime validation, many projects now use TypeScript or Flow for static type checking, which catches type errors at compile time rather than runtime."
    }
  },
  
  // FORMS (18 questions)
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
    id: "forms-6",
    level: 1,
    topic: "forms",
    question: "How do you handle form submission in React?",
    multipleCorrect: false,
    options: [
      {
        id: "forms-6-a",
        text: "By adding an onSubmit handler to the form element and preventing the default action",
        isCorrect: true,
        explanation: "The standard way to handle form submission in React is to add an onSubmit handler to the form element and call preventDefault() to prevent the default form submission behavior."
      },
      {
        id: "forms-6-b",
        text: "By adding a click handler to the submit button",
        isCorrect: false,
        explanation: "While you could handle submission with a click handler on the submit button, this isn't the recommended approach. It wouldn't capture submissions triggered by pressing Enter in text fields, and it bypasses form validation."
      },
      {
        id: "forms-6-c",
        text: "By setting the action prop on the form element",
        isCorrect: false,
        explanation: "Setting the action prop would create a traditional HTML form submission, causing a page reload. React applications typically handle submissions with JavaScript to prevent page reloads."
      },
      {
        id: "forms-6-d",
        text: "By using the useSubmit hook",
        isCorrect: false,
        explanation: "There is no built-in useSubmit hook in React. Form submission is typically handled with an onSubmit event handler."
      }
    ],
    explanation: {
      correct: "Correct! The standard way to handle form submission in React is to add an onSubmit handler to the form element and call preventDefault() to prevent the default form submission behavior that would cause a page reload.",
      incorrect: "Form submission in React is handled by adding an onSubmit handler to the form element and preventing the default action. Using click handlers on submit buttons, setting the action prop, or using a non-existent useSubmit hook are not the recommended approaches.",
      detailed: "Here's a typical pattern: function MyForm() { const handleSubmit = (e) => { e.preventDefault(); // Process form data }; return <form onSubmit={handleSubmit}>...</form>; }. By preventing the default action, you stop the browser from making a traditional form submission that would reload the page. Instead, you can handle the submission in JavaScript, typically by collecting form data from state (for controlled components) or from refs/FormData (for uncontrolled components), then sending it to a server using fetch or axios."
    }
  },
  {
    id: "forms-7",
    level: 1,
    topic: "forms",
    question: "How do you handle multiple input fields in a form with React?",
    multipleCorrect: false,
    options: [
      {
        id: "forms-7-a",
        text: "By using a single state object with properties for each field, and updating it with a dynamic name-based handler",
        isCorrect: true,
        explanation: "A common pattern is to use a single state object that holds all form values, with a handler that uses the input's 'name' attribute to determine which property to update."
      },
      {
        id: "forms-7-b",
        text: "By creating a separate state variable and handler for each input field",
        isCorrect: false,
        explanation: "While this approach would work, it's not the most efficient for forms with multiple fields. It leads to repetitive code and doesn't scale well as the number of fields increases."
      },
      {
        id: "forms-7-c",
        text: "By using the useForm hook from React core",
        isCorrect: false,
        explanation: "There is no useForm hook in React core. While there are third-party libraries like react-hook-form that provide such hooks, they're not part of React itself."
      },
      {
        id: "forms-7-d",
        text: "By using refs for all input fields",
        isCorrect: false,
        explanation: "While you could use refs for all fields (creating uncontrolled components), this approach makes it harder to implement features like validation, conditional fields, or dynamic form behavior."
      }
    ],
    explanation: {
      correct: "Correct! A common and efficient pattern for handling multiple input fields is to use a single state object with properties for each field, and a dynamic handler that uses the input's 'name' attribute to update the appropriate property.",
      incorrect: "The most efficient approach is using a single state object with a dynamic handler. Creating separate state variables for each field is inefficient, there's no useForm hook in React core, and using refs for all fields makes advanced form features harder to implement.",
      detailed: "Here's how this pattern typically looks: function MyForm() { const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '' }); const handleChange = (e) => { const { name, value } = e.target; setFormData(prevData => ({ ...prevData, [name]: value })); }; return ( <form> <input name=\"firstName\" value={formData.firstName} onChange={handleChange} /> <input name=\"lastName\" value={formData.lastName} onChange={handleChange} /> <input name=\"email\" value={formData.email} onChange={handleChange} /> </form> ); }. This approach scales well to forms with many fields and makes it easy to collect all form data for submission."
    }
  },
  {
    id: "forms-8",
    level: 1,
    topic: "forms",
    question: "How do you handle form validation in React?",
    multipleCorrect: true,
    options: [
      {
        id: "forms-8-a",
        text: "By validating input values when they change and storing validation errors in state",
        isCorrect: true,
        explanation: "A common approach is to validate inputs as they change, storing any validation errors in state and displaying them to the user."
      },
      {
        id: "forms-8-b",
        text: "By validating all inputs when the form is submitted",
        isCorrect: true,
        explanation: "Validating all inputs on form submission is another valid approach, especially for validations that depend on multiple fields or are expensive to compute."
      },
      {
        id: "forms-8-c",
        text: "By using third-party form validation libraries",
        isCorrect: true,
        explanation: "Libraries like Formik, react-hook-form, or yup can simplify form validation by providing utilities for defining validation rules and managing validation state."
      },
      {
        id: "forms-8-d",
        text: "By relying on HTML5 validation attributes like required and pattern",
        isCorrect: true,
        explanation: "HTML5 validation attributes provide a simple way to add basic validation. While not as flexible as JavaScript validation, they can be useful for simple cases or as a fallback."
      },
      {
        id: "forms-8-e",
        text: "By using the built-in React.validate() method",
        isCorrect: false,
        explanation: "There is no React.validate() method in React. Form validation is handled using custom logic or third-party libraries, not built-in React methods."
      }
    ],
    explanation: {
      correct: "Correct! Form validation in React can be handled by validating inputs on change, validating on submission, using third-party libraries, or using HTML5 validation attributes. Each approach has its own advantages depending on the use case.",
      incorrect: "React form validation can be handled by validating on change, validating on submission, using third-party libraries, or using HTML5 validation attributes. There is no built-in React.validate() method.",
      detailed: "Form validation strategies often depend on the complexity of your form and validation rules. For simple forms, HTML5 validation or basic JavaScript validation might be sufficient. For complex forms, libraries like Formik or react-hook-form can save time and provide better user experiences. A comprehensive validation strategy might include: 1) Real-time validation for immediate feedback, 2) Submit-time validation as a final check, 3) Server-side validation for security, and 4) Clear error messages to help users correct their input. The key is balancing between providing timely feedback and not overwhelming users with error messages."
    }
  },
  {
    id: "forms-9",
    level: 1,
    topic: "forms",
    question: "How do you handle file inputs in React?",
    multipleCorrect: false,
    options: [
      {
        id: "forms-9-a",
        text: "By accessing the files property from the input's onChange event",
        isCorrect: true,
        explanation: "File inputs in React are typically handled by accessing the files property from the event object in the onChange handler. This gives you access to the FileList object containing the selected files."
      },
      {
        id: "forms-9-b",
        text: "By setting the value prop to control the selected files",
        isCorrect: false,
        explanation: "For security reasons, file inputs cannot have their value set programmatically. This means you cannot create a fully controlled file input component in the same way as other input types."
      },
      {
        id: "forms-9-c",
        text: "By using the useFile hook from React",
        isCorrect: false,
        explanation: "There is no useFile hook in React. File handling is typically done with standard DOM APIs accessed through event handlers."
      },
      {
        id: "forms-9-d",
        text: "By setting the src prop on the input element",
        isCorrect: false,
        explanation: "File inputs don't have a src prop. The src attribute is used for elements like img, video, or iframe, not for input elements."
      }
    ],
    explanation: {
      correct: "Correct! File inputs in React are handled by accessing the files property from the input's onChange event. This gives you access to the selected files, which you can then process or upload.",
      incorrect: "File inputs are handled by accessing the files property from the onChange event. You cannot control file inputs with the value prop, there's no useFile hook in React, and file inputs don't have a src prop.",
      detailed: "Here's a typical pattern for handling file inputs: function FileUpload() { const handleFileChange = (e) => { const fileList = e.target.files; // Do something with the files }; return <input type=\"file\" onChange={handleFileChange} />; }. File inputs are always uncontrolled components because browsers prevent setting their value programmatically for security reasons. To clear a file input, you typically need to reset the entire form or manipulate the input's value property directly through a ref. For more advanced features like drag-and-drop uploads or image previews, you might use additional libraries or custom implementations."
    }
  },
  {
    id: "forms-10",
    level: 1,
    topic: "forms",
    question: "How do you reset a form in React?",
    multipleCorrect: true,
    options: [
      {
        id: "forms-10-a",
        text: "For controlled components, reset the state to initial values",
        isCorrect: true,
        explanation: "With controlled components, resetting the form means resetting the state variables that control the form inputs to their initial values."
      },
      {
        id: "forms-10-b",
        text: "For uncontrolled components, use the reset() method on the form element",
        isCorrect: true,
        explanation: "For uncontrolled components, you can use the standard DOM reset() method on the form element, accessed through a ref."
      },
      {
        id: "forms-10-c",
        text: "Use the React.resetForm() method",
        isCorrect: false,
        explanation: "There is no React.resetForm() method in React. Form resetting is handled differently depending on whether you're using controlled or uncontrolled components."
      },
      {
        id: "forms-10-d",
        text: "Set the reset prop on the form element to true",
        isCorrect: false,
        explanation: "There is no reset prop for form elements in React. Forms are reset either by resetting state (for controlled components) or using the DOM reset() method (for uncontrolled components)."
      },
      {
        id: "forms-10-e",
        text: "Use a key prop to force the entire form component to remount",
        isCorrect: true,
        explanation: "Changing a component's key prop forces it to unmount and remount, effectively resetting its state. This can be used as a nuclear option to reset an entire form component."
      }
    ],
    explanation: {
      correct: "Correct! Forms can be reset by resetting the state for controlled components, using the form's reset() method for uncontrolled components, or by changing the key prop to force the component to remount.",
      incorrect: "React forms can be reset by resetting state (for controlled components), using the form's reset() method (for uncontrolled components), or changing the key prop. There is no React.resetForm() method or reset prop.",
      detailed: "For controlled components: function ControlledForm() { const [values, setValues] = useState(initialValues); const resetForm = () => setValues(initialValues); }. For uncontrolled components: function UncontrolledForm() { const formRef = useRef(); const resetForm = () => formRef.current.reset(); return <form ref={formRef}>...</form>; }. The key prop approach: function ParentComponent() { const [formKey, setFormKey] = useState(0); const resetForm = () => setFormKey(prevKey => prevKey + 1); return <FormComponent key={formKey} />; }. Each approach has trade-offs in terms of flexibility and implementation complexity."
    }
  },
  {
    id: "forms-11",
    level: 1,
    topic: "forms",
    question: "How do you handle checkbox inputs in React?",
    multipleCorrect: false,
    options: [
      {
        id: "forms-11-a",
        text: "For controlled components, use the checked prop and handle changes with onChange",
        isCorrect: true,
        explanation: "Controlled checkboxes use the checked prop (not value) to control their state, and an onChange handler to update that state when the user interacts with the checkbox."
      },
      {
        id: "forms-11-b",
        text: "For controlled components, use the value prop and handle changes with onChange",
        isCorrect: false,
        explanation: "Checkboxes use the checked prop, not value, to control their state. The value prop on checkboxes is used for the form submission value, not for controlling the checked state."
      },
      {
        id: "forms-11-c",
        text: "For uncontrolled components, use the defaultChecked prop for the initial state",
        isCorrect: false,
        explanation: "This is partially correct. Uncontrolled checkboxes do use defaultChecked for the initial state, but this alone doesn't fully answer how to handle checkbox inputs."
      },
      {
        id: "forms-11-d",
        text: "Use the isChecked prop to control the checkbox state",
        isCorrect: false,
        explanation: "There is no isChecked prop in React or HTML. Checkboxes use the checked prop for controlled components and defaultChecked for uncontrolled components."
      }
    ],
    explanation: {
      correct: "Correct! Controlled checkboxes in React use the checked prop to control their state and an onChange handler to update that state when the user interacts with the checkbox.",
      incorrect: "Checkbox inputs in React use the checked prop (not value or isChecked) for controlled components, and an onChange handler to update state. For uncontrolled components, defaultChecked sets the initial state.",
      detailed: "For controlled checkboxes: function ControlledCheckbox() { const [isChecked, setIsChecked] = useState(false); return <input type=\"checkbox\" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />; }. For uncontrolled checkboxes: function UncontrolledCheckbox() { return <input type=\"checkbox\" defaultChecked={true} />; }. Note that the onChange handler receives the current checked state in e.target.checked, not e.target.value. When handling multiple checkboxes, you might store the checked states in an object or array, using the checkbox name or value to identify each one."
    }
  },
  {
    id: "forms-12",
    level: 1,
    topic: "forms",
    question: "How do you handle radio button inputs in React?",
    multipleCorrect: false,
    options: [
      {
        id: "forms-12-a",
        text: "For controlled components, use the checked prop based on comparing the button's value to the selected value in state",
        isCorrect: true,
        explanation: "Controlled radio buttons use the checked prop, which is determined by comparing each button's value to the currently selected value stored in state."
      },
      {
        id: "forms-12-b",
        text: "For controlled components, use the selected prop to mark the selected radio button",
        isCorrect: false,
        explanation: "Radio buttons use the checked prop, not selected. The selected attribute is used for <option> elements in <select> dropdowns, not for radio buttons."
      },
      {
        id: "forms-12-c",
        text: "For uncontrolled components, use the defaultSelected prop for the initially selected button",
        isCorrect: false,
        explanation: "Uncontrolled radio buttons use defaultChecked, not defaultSelected. The defaultSelected attribute is used for <option> elements in <select> dropdowns, not for radio buttons."
      },
      {
        id: "forms-12-d",
        text: "Radio buttons must always be controlled components in React",
        isCorrect: false,
        explanation: "This is incorrect. Radio buttons can be either controlled or uncontrolled components, just like other form elements in React."
      }
    ],
    explanation: {
      correct: "Correct! Controlled radio buttons in React use the checked prop, which is determined by comparing each button's value to the currently selected value stored in state.",
      incorrect: "Radio buttons use the checked prop (not selected) for controlled components, and defaultChecked (not defaultSelected) for uncontrolled components. They can be either controlled or uncontrolled.",
      detailed: "For controlled radio buttons: function RadioGroup() { const [selected, setSelected] = useState('option1'); return ( <div> <input type=\"radio\" name=\"options\" value=\"option1\" checked={selected === 'option1'} onChange={(e) => setSelected(e.target.value)} /> <input type=\"radio\" name=\"options\" value=\"option2\" checked={selected === 'option2'} onChange={(e) => setSelected(e.target.value)} /> </div> ); }. All radio buttons in a group share the same name attribute, and only one can be selected at a time. The onChange handler updates the state with the value of the selected button, and the checked prop ensures the correct button appears selected."
    }
  },
  {
    id: "forms-13",
    level: 1,
    topic: "forms",
    question: "How do you handle select dropdowns in React?",
    multipleCorrect: false,
    options: [
      {
        id: "forms-13-a",
        text: "For controlled components, use the value prop on the select element and handle changes with onChange",
        isCorrect: true,
        explanation: "Controlled select elements use the value prop to set the selected option(s) and an onChange handler to update the state when the selection changes."
      },
      {
        id: "forms-13-b",
        text: "For controlled components, use the selected prop on each option element",
        isCorrect: false,
        explanation: "In controlled components, you set the value prop on the select element, not the selected prop on options. The selected prop is used for uncontrolled selects or when not using React."
      },
      {
        id: "forms-13-c",
        text: "For uncontrolled components, use the defaultSelected prop on each option element",
        isCorrect: false,
        explanation: "Uncontrolled select elements use defaultValue on the select element, not defaultSelected on each option. There is no defaultSelected prop in React."
      },
      {
        id: "forms-13-d",
        text: "Select elements must always be controlled components in React",
        isCorrect: false,
        explanation: "This is incorrect. Select elements can be either controlled or uncontrolled components, just like other form elements in React."
      }
    ],
    explanation: {
      correct: "Correct! Controlled select elements in React use the value prop to set the selected option(s) and an onChange handler to update the state when the selection changes.",
      incorrect: "Select dropdowns use the value prop on the select element for controlled components, not selected on each option. Uncontrolled selects use defaultValue, not defaultSelected. They can be either controlled or uncontrolled.",
      detailed: "For controlled select elements: function SelectDropdown() { const [selected, setSelected] = useState('option1'); return ( <select value={selected} onChange={(e) => setSelected(e.target.value)}> <option value=\"option1\">Option 1</option> <option value=\"option2\">Option 2</option> </select> ); }. For multi-select elements, the value prop takes an array of values, and you need to handle the multiple selected options in the onChange handler. For uncontrolled selects, you would use defaultValue instead of value and access the current selection through a ref when needed."
    }
  },
  {
    id: "forms-14",
    level: 1,
    topic: "forms",
    question: "What is the purpose of the 'ref' attribute in React forms?",
    multipleCorrect: true,
    options: [
      {
        id: "forms-14-a",
        text: "To access DOM elements directly",
        isCorrect: true,
        explanation: "The ref attribute provides a way to access DOM elements directly. This is useful for focusing inputs, measuring elements, or accessing values in uncontrolled components."
      },
      {
        id: "forms-14-b",
        text: "To access form values in uncontrolled components",
        isCorrect: true,
        explanation: "In uncontrolled components, refs are used to access the current values of form elements, since the values aren't stored in React state."
      },
      {
        id: "forms-14-c",
        text: "To trigger imperative actions like focus() or reset()",
        isCorrect: true,
        explanation: "Refs allow you to call imperative methods on DOM elements, such as focus() on an input or reset() on a form element."
      },
      {
        id: "forms-14-d",
        text: "To control the value of form elements",
        isCorrect: false,
        explanation: "Controlling form element values is done with props like value or checked, not with refs. Using refs to set values directly would bypass React's rendering system."
      },
      {
        id: "forms-14-e",
        text: "To validate form inputs automatically",
        isCorrect: false,
        explanation: "Refs don't provide automatic validation. Form validation is implemented using custom logic, either with controlled components and state or with DOM validation APIs."
      }
    ],
    explanation: {
      correct: "Correct! The ref attribute in React forms is used to access DOM elements directly, access form values in uncontrolled components, and trigger imperative actions like focus() or reset().",
      incorrect: "The ref attribute is used to access DOM elements directly, access form values in uncontrolled components, and trigger imperative actions. It's not for controlling form element values or providing automatic validation.",
      detailed: "Refs provide a way to interact with DOM elements outside of React's declarative rendering model. In forms, common uses include: 1) Focusing an input after a button click or on component mount, 2) Measuring the size or position of an element, 3) Accessing form values in uncontrolled components, 4) Triggering imperative methods like select() or setSelectionRange() on inputs, and 5) Integrating with third-party DOM libraries. While powerful, refs should be used sparingly, as excessive use of imperative DOM manipulation can make code harder to understand and maintain."
    }
  },
  {
    id: "forms-15",
    level: 1,
    topic: "forms",
    question: "What is the purpose of the FormData API when working with forms in React?",
    multipleCorrect: true,
    options: [
      {
        id: "forms-15-a",
        text: "To easily collect all form data from a form element",
        isCorrect: true,
        explanation: "FormData provides a way to easily collect all form data from a form element, including file inputs, without having to access each field individually."
      },
      {
        id: "forms-15-b",
        text: "To send form data in multipart/form-data format for file uploads",
        isCorrect: true,
        explanation: "FormData is particularly useful for file uploads, as it automatically uses the multipart/form-data format required for sending files to a server."
      },
      {
        id: "forms-15-c",
        text: "To access form values from uncontrolled components",
        isCorrect: true,
        explanation: "FormData can be used to collect values from uncontrolled form components without needing individual refs for each input."
      },
      {
        id: "forms-15-d",
        text: "To automatically validate form inputs",
        isCorrect: false,
        explanation: "FormData doesn't provide automatic validation. It's just a way to collect and send form data, not to validate it."
      },
      {
        id: "forms-15-e",
        text: "To create controlled form components",
        isCorrect: false,
        explanation: "FormData is typically used with uncontrolled components or to collect final form values at submission time. It's not used to create controlled components, which rely on React state."
      }
    ],
    explanation: {
      correct: "Correct! The FormData API is used to easily collect all form data (including files), send data in multipart/form-data format for file uploads, and access values from uncontrolled components.",
      incorrect: "FormData is used to collect all form data, send data for file uploads, and access values from uncontrolled components. It doesn't automatically validate inputs or create controlled components.",
      detailed: "The FormData API provides a way to construct key/value pairs representing form fields and their values. In React, it's particularly useful for: 1) Collecting data from an entire form at once: const data = new FormData(formElement), 2) Handling file uploads, as it automatically uses the correct content type, 3) Working with uncontrolled components where you don't have all values in state, and 4) Sending form data to a server: fetch('/api/submit', { method: 'POST', body: formData }). FormData can be used with both controlled and uncontrolled forms, though it's more common with uncontrolled forms."
    }
  },
  {
    id: "forms-16",
    level: 1,
    topic: "forms",
    question: "What are the advantages of controlled components over uncontrolled components in React forms?",
    multipleCorrect: true,
    options: [
      {
        id: "forms-16-a",
        text: "More control over form validation and error messages",
        isCorrect: true,
        explanation: "Controlled components make it easier to implement custom validation logic and display error messages, as you have access to the current value of each input in your state."
      },
      {
        id: "forms-16-b",
        text: "Ability to dynamically change input values based on other inputs",
        isCorrect: true,
        explanation: "With controlled components, you can easily update one field based on changes to another, implement dependent fields, or enforce specific formats."
      },
      {
        id: "forms-16-c",
        text: "Easier to implement features like instant validation or formatting",
        isCorrect: true,
        explanation: "Since you handle every change to the input values, you can easily implement features like instant validation, auto-formatting, or character limits."
      },
      {
        id: "forms-16-d",
        text: "Better performance for large forms",
        isCorrect: false,
        explanation: "Controlled components typically have worse performance for large forms, as every keystroke triggers a state update and potential re-render. Uncontrolled components can be more performant for large forms."
      },
      {
        id: "forms-16-e",
        text: "Less code to write",
        isCorrect: false,
        explanation: "Controlled components generally require more code than uncontrolled components, as you need to define state and handlers for each input. Uncontrolled components are more concise for simple forms."
      }
    ],
    explanation: {
      correct: "Correct! Controlled components offer more control over validation and error messages, the ability to dynamically change values based on other inputs, and easier implementation of features like instant validation or formatting.",
      incorrect: "Controlled components offer better control over validation, dynamic field updates, and instant validation/formatting. They don't provide better performance for large forms or require less code to write.",
      detailed: "Controlled components make your form state more predictable and easier to manipulate programmatically. They're particularly valuable for complex forms with interdependent fields, custom validation logic, or dynamic behavior. Additional advantages include: 1) Single source of truth for form data, 2) Ability to submit form data without accessing the DOM, 3) Easier implementation of conditional fields or multi-step forms, and 4) More straightforward testing, as all form state is in React state rather than the DOM. The trade-offs are increased code complexity and potentially worse performance for very large forms with many inputs."
    }
  },
  {
    id: "forms-17",
    level: 1,
    topic: "forms",
    question: "What are the advantages of uncontrolled components over controlled components in React forms?",
    multipleCorrect: true,
    options: [
      {
        id: "forms-17-a",
        text: "Less code for simple forms",
        isCorrect: true,
        explanation: "Uncontrolled components typically require less code for simple forms, as you don't need to define state and handlers for each input."
      },
      {
        id: "forms-17-b",
        text: "Better performance for large forms",
        isCorrect: true,
        explanation: "Uncontrolled components can have better performance for large forms, as they don't trigger React re-renders on every keystroke."
      },
      {
        id: "forms-17-c",
        text: "Easier integration with non-React code or libraries",
        isCorrect: true,
        explanation: "Uncontrolled components work more naturally with non-React code or libraries that directly manipulate the DOM, as they rely on the DOM for their state."
      },
      {
        id: "forms-17-d",
        text: "More control over form validation",
        isCorrect: false,
        explanation: "Controlled components generally offer more control over form validation, as you have access to input values in your state and can easily implement custom validation logic."
      },
      {
        id: "forms-17-e",
        text: "Better support for dynamic form fields",
        isCorrect: false,
        explanation: "Controlled components typically offer better support for dynamic form fields, as you can easily update one field based on changes to another or implement conditional fields."
      }
    ],
    explanation: {
      correct: "Correct! Uncontrolled components offer advantages like less code for simple forms, better performance for large forms, and easier integration with non-React code or libraries.",
      incorrect: "Uncontrolled components offer less code for simple forms, better performance for large forms, and easier integration with non-React code. They don't provide more control over validation or better support for dynamic fields.",
      detailed: "Uncontrolled components are simpler and more straightforward for basic forms. They're particularly valuable when: 1) You're working with simple forms where advanced features aren't needed, 2) Performance is a concern with large forms, 3) You're integrating with third-party DOM libraries, or 4) You're migrating from traditional HTML forms. The DOM handles the form state, which can be accessed when needed (typically at submission time) using refs or the FormData API. The trade-offs are less control over the form's behavior and more difficulty implementing advanced features like instant validation or interdependent fields."
    }
  },
  {
    id: "forms-18",
    level: 1,
    topic: "forms",
    question: "What is the purpose of React's 'useRef' hook in form handling?",
    multipleCorrect: true,
    options: [
      {
        id: "forms-18-a",
        text: "To access DOM elements directly",
        isCorrect: true,
        explanation: "useRef creates a mutable ref object that can be attached to DOM elements, allowing direct access to those elements."
      },
      {
        id: "forms-18-b",
        text: "To access form values in uncontrolled components",
        isCorrect: true,
        explanation: "In uncontrolled components, useRef is commonly used to access the current values of form elements, since the values aren't stored in React state."
      },
      {
        id: "forms-18-c",
        text: "To store values that persist between renders without causing re-renders",
        isCorrect: true,
        explanation: "useRef creates a mutable object whose .current property persists across renders. Changes to this property don't trigger re-renders, making it useful for storing values that shouldn't affect rendering."
      },
      {
        id: "forms-18-d",
        text: "To create controlled form components",
        isCorrect: false,
        explanation: "Controlled components are created using state (useState), not refs. useRef is more commonly used with uncontrolled components."
      },
      {
        id: "forms-18-e",
        text: "To automatically validate form inputs",
        isCorrect: false,
        explanation: "useRef doesn't provide automatic validation. Form validation is implemented using custom logic, either with controlled components and state or with DOM validation APIs."
      }
    ],
    explanation: {
      correct: "Correct! The useRef hook is used to access DOM elements directly, access form values in uncontrolled components, and store values that persist between renders without causing re-renders.",
      incorrect: "useRef is used to access DOM elements, access form values in uncontrolled components, and store persistent values without causing re-renders. It's not for creating controlled components or automatic validation.",
      detailed: "In form handling, useRef serves several purposes: 1) Accessing DOM elements: const inputRef = useRef(); <input ref={inputRef} />; inputRef.current.focus();, 2) Getting values from uncontrolled components: const formValue = inputRef.current.value;, 3) Storing previous values for comparison: const prevValueRef = useRef(); useEffect(() => { prevValueRef.current = currentValue; });, and 4) Storing instance variables that shouldn't trigger re-renders: const formDirtyRef = useRef(false);. Unlike state, changing a ref's .current value doesn't cause a re-render, which can be useful for values that need to persist but shouldn't affect the UI directly."
    }
  },
  
  // HOOKS (36 questions)
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
  },
  {
    id: "hooks-6",
    level: 1,
    topic: "hooks",
    question: "What is the purpose of the useMemo hook?",
    multipleCorrect: false,
    options: [
      {
        id: "hooks-6-a",
        text: "To memoize expensive calculations so they only recompute when dependencies change",
        isCorrect: true,
        explanation: "useMemo memoizes the result of a function call, only recomputing it when one of the dependencies has changed. This is useful for expensive calculations that shouldn't be redone on every render."
      },
      {
        id: "hooks-6-b",
        text: "To memoize entire component renders",
        isCorrect: false,
        explanation: "Memoizing entire component renders is the purpose of React.memo, not useMemo. useMemo is for memoizing the result of a function or calculation."
      },
      {
        id: "hooks-6-c",
        text: "To create memoized callback functions",
        isCorrect: false,
        explanation: "Creating memoized callback functions is the purpose of useCallback, not useMemo. While they're similar, useMemo is for values, and useCallback is specifically for functions."
      },
      {
        id: "hooks-6-d",
        text: "To remember previous state values",
        isCorrect: false,
        explanation: "Remembering previous state values would typically be done with useRef or by storing previous values in state. useMemo is for performance optimization of expensive calculations."
      }
    ],
    explanation: {
      correct: "Correct! useMemo memoizes the result of an expensive calculation, only recomputing it when one of its dependencies changes. This helps avoid unnecessary recalculations during renders.",
      incorrect: "useMemo is used to memoize expensive calculations. It's not for memoizing entire component renders (React.memo), creating memoized callbacks (useCallback), or remembering previous state values (useRef).",
      detailed: "useMemo takes two arguments: a function that computes a value and a dependency array. It returns the memoized value that only changes when one of the dependencies changes. This is particularly useful for expensive calculations like filtering large arrays, complex mathematical operations, or generating derived data from props or state. By memoizing these operations, you prevent them from running on every render, which can significantly improve performance. Without useMemo, these calculations would run on every render, even if the inputs haven't changed."
    }
  },
  {
    id: "hooks-7",
    level: 1,
    topic: "hooks",
    question: "What is the purpose of the useCallback hook?",
    multipleCorrect: false,
    options: [
      {
        id: "hooks-7-a",
        text: "To memoize callback functions so they don't get recreated on every render",
        isCorrect: true,
        explanation: "useCallback returns a memoized version of the callback function that only changes if one of the dependencies has changed. This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders."
      },
      {
        id: "hooks-7-b",
        text: "To create callback URLs for routing",
        isCorrect: false,
        explanation: "useCallback has nothing to do with URL routing. For routing in React, you would typically use a library like React Router."
      },
      {
        id: "hooks-7-c",
        text: "To memoize the results of expensive calculations",
        isCorrect: false,
        explanation: "Memoizing the results of expensive calculations is the purpose of useMemo, not useCallback. useCallback is specifically for memoizing functions."
      },
      {
        id: "hooks-7-d",
        text: "To call functions after the component renders",
        isCorrect: false,
        explanation: "Calling functions after rendering would typically be done with useEffect, not useCallback. useCallback is for memoization, not scheduling."
      }
    ],
    explanation: {
      correct: "Correct! useCallback returns a memoized version of the callback function that only changes if one of the dependencies has changed. This helps prevent unnecessary re-renders in child components that receive the callback as a prop.",
      incorrect: "useCallback is used to memoize callback functions to prevent unnecessary re-renders. It's not for creating routing URLs, memoizing calculation results (useMemo does that), or calling functions after rendering (useEffect does that).",
      detailed: "useCallback is particularly useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders. Without useCallback, a new function would be created on every render, which could cause child components wrapped in React.memo to re-render unnecessarily. useCallback takes two arguments: the function to memoize and an array of dependencies. The function will only be recreated if one of the dependencies changes. It's similar to useMemo, but specifically designed for functions."
    }
  },
  {
    id: "hooks-8",
    level: 1,
    topic: "hooks",
    question: "What is the purpose of the useReducer hook?",
    multipleCorrect: false,
    options: [
      {
        id: "hooks-8-a",
        text: "To manage complex state logic with a reducer function",
        isCorrect: true,
        explanation: "useReducer is a hook that lets you manage complex state logic using a reducer function, similar to how Redux works. It's an alternative to useState when state logic becomes complex."
      },
      {
        id: "hooks-8-b",
        text: "To reduce the bundle size of React applications",
        isCorrect: false,
        explanation: "useReducer has nothing to do with bundle size optimization. It's a state management hook, not a build optimization tool."
      },
      {
        id: "hooks-8-c",
        text: "To combine multiple components into one",
        isCorrect: false,
        explanation: "Combining components would be done through composition, not with useReducer. useReducer is specifically for state management."
      },
      {
        id: "hooks-8-d",
        text: "To reduce the number of re-renders automatically",
        isCorrect: false,
        explanation: "useReducer doesn't automatically reduce re-renders. It can help manage complex state transitions, but components will still re-render when state changes."
      }
    ],
    explanation: {
      correct: "Correct! useReducer is a hook for managing complex state logic with a reducer function. It's particularly useful when state transitions depend on previous state or when state logic is complex.",
      incorrect: "useReducer is used to manage complex state logic with a reducer function. It's not for reducing bundle size, combining components, or automatically reducing re-renders.",
      detailed: "useReducer is an alternative to useState that's preferable when state logic is complex, involves multiple sub-values, or depends on previous state. It takes a reducer function and initial state, returning the current state and a dispatch function. The reducer function takes the current state and an action, returning the new state based on the action type. This pattern, inspired by Redux, centralizes state update logic, making it more predictable and easier to test. useReducer is especially useful for managing form state, step wizards, or any UI with multiple ways to update state."
    }
  },
  {
    id: "hooks-9",
    level: 1,
    topic: "hooks",
    question: "What is the purpose of the useLayoutEffect hook?",
    multipleCorrect: false,
    options: [
      {
        id: "hooks-9-a",
        text: "To perform DOM measurements and mutations before the browser paints",
        isCorrect: true,
        explanation: "useLayoutEffect fires synchronously after all DOM mutations but before the browser paints. This makes it useful for DOM measurements and mutations that need to happen before the user sees the updated screen."
      },
      {
        id: "hooks-9-b",
        text: "To optimize the layout of components automatically",
        isCorrect: false,
        explanation: "useLayoutEffect doesn't automatically optimize component layout. It's a timing hook for when your code runs, not an optimization tool."
      },
      {
        id: "hooks-9-c",
        text: "To create CSS layouts programmatically",
        isCorrect: false,
        explanation: "useLayoutEffect isn't specifically for creating CSS layouts. While you could manipulate styles within it, that's not its primary purpose."
      },
      {
        id: "hooks-9-d",
        text: "To replace useEffect in all cases",
        isCorrect: false,
        explanation: "useLayoutEffect shouldn't replace useEffect in all cases. useEffect is preferred for most side effects because it doesn't block painting, leading to better performance."
      }
    ],
    explanation: {
      correct: "Correct! useLayoutEffect runs synchronously after DOM mutations but before the browser paints. This makes it ideal for DOM measurements and mutations that need to be visible immediately, preventing visual flickers.",
      incorrect: "useLayoutEffect is for performing DOM measurements and mutations before the browser paints. It doesn't automatically optimize layouts, isn't specifically for creating CSS layouts, and shouldn't replace useEffect in all cases.",
      detailed: "The signature of useLayoutEffect is identical to useEffect, but it fires synchronously after all DOM mutations and before the browser paints. This ensures that DOM measurements and mutations happen before the user sees the updated screen, preventing potential visual flickers. However, because it runs synchronously and blocks painting, it can negatively impact performance. For this reason, the React team recommends using the standard useEffect when possible, and only using useLayoutEffect when necessary for DOM measurements or preventing flickers."
    }
  },
  {
    id: "hooks-10",
    level: 1,
    topic: "hooks",
    question: "What is the purpose of the useImperativeHandle hook?",
    multipleCorrect: false,
    options: [
      {
        id: "hooks-10-a",
        text: "To customize the instance value exposed when using refs",
        isCorrect: true,
        explanation: "useImperativeHandle customizes the instance value that is exposed when a parent component uses ref to access a child component. It lets you control what the parent can access through the ref."
      },
      {
        id: "hooks-10-b",
        text: "To directly manipulate the DOM",
        isCorrect: false,
        explanation: "While useImperativeHandle is related to refs, which can be used for DOM manipulation, the hook itself doesn't directly manipulate the DOM. It customizes what's exposed through a ref."
      },
      {
        id: "hooks-10-c",
        text: "To handle imperative programming in React",
        isCorrect: false,
        explanation: "While the name contains 'imperative', this hook isn't about general imperative programming in React. It's specifically for customizing refs, which are one of the few imperative features in React."
      },
      {
        id: "hooks-10-d",
        text: "To optimize rendering performance",
        isCorrect: false,
        explanation: "useImperativeHandle isn't primarily for performance optimization. It's for controlling the interface exposed through refs."
      }
    ],
    explanation: {
      correct: "Correct! useImperativeHandle customizes the instance value that is exposed when a parent component uses ref to access a child component. This lets you control exactly what the parent can access through the ref.",
      incorrect: "useImperativeHandle customizes the instance value exposed when using refs. It's not for directly manipulating the DOM, handling general imperative programming, or optimizing rendering performance.",
      detailed: "useImperativeHandle should be used with forwardRef, as it's designed to customize the ref that is forwarded. It takes three arguments: the ref to customize, a function that returns the customized instance value, and an optional dependency array. This hook is useful when you want to expose only specific functions or properties to the parent component, rather than the entire component instance or DOM node. It helps maintain encapsulation by giving you control over the imperative API of your component."
    }
  },
  {
    id: "hooks-11",
    level: 1,
    topic: "hooks",
    question: "What is the purpose of the useDebugValue hook?",
    multipleCorrect: false,
    options: [
      {
        id: "hooks-11-a",
        text: "To display a label for custom hooks in React DevTools",
        isCorrect: true,
        explanation: "useDebugValue is used to display a label for custom hooks in React DevTools. It helps developers understand what a custom hook is doing when inspecting the component tree."
      },
      {
        id: "hooks-11-b",
        text: "To log debug information to the console",
        isCorrect: false,
        explanation: "useDebugValue doesn't log to the console. It's specifically for enhancing the debugging experience in React DevTools."
      },
      {
        id: "hooks-11-c",
        text: "To enable debugging mode in a component",
        isCorrect: false,
        explanation: "useDebugValue doesn't enable a special debugging mode. It just adds information to DevTools to help with debugging."
      },
      {
        id: "hooks-11-d",
        text: "To debug performance issues automatically",
        isCorrect: false,
        explanation: "useDebugValue doesn't automatically debug performance issues. For performance debugging, you would use the React Profiler or other performance measurement tools."
      }
    ],
    explanation: {
      correct: "Correct! useDebugValue is used to display a label for custom hooks in React DevTools. This makes it easier to understand what your custom hooks are doing when debugging.",
      incorrect: "useDebugValue is used to display a label for custom hooks in React DevTools. It doesn't log to the console, enable a special debugging mode, or automatically debug performance issues.",
      detailed: "useDebugValue is primarily intended for custom hooks that are part of shared libraries, where providing additional debugging information can help users of your hook understand its behavior. It accepts a value to display and an optional formatting function that can defer expensive formatting until the hook is actually inspected. The value will only be shown when the component using your hook is inspected in React DevTools, so there's no performance impact in production."
    }
  },
  {
    id: "hooks-12",
    level: 1,
    topic: "hooks",
    question: "What is the purpose of the useId hook in React?",
    multipleCorrect: false,
    options: [
      {
        id: "hooks-12-a",
        text: "To generate stable, unique IDs for accessibility attributes",
        isCorrect: true,
        explanation: "useId is a hook for generating unique IDs that are stable across the server and client, helping with accessibility attributes that need to be consistent during hydration."
      },
      {
        id: "hooks-12-b",
        text: "To identify components uniquely in the React DevTools",
        isCorrect: false,
        explanation: "useId isn't for DevTools identification. Components in DevTools are identified by their name and structure in the component tree."
      },
      {
        id: "hooks-12-c",
        text: "To create IDs for database records",
        isCorrect: false,
        explanation: "useId isn't for database record IDs. It's specifically for generating stable IDs for DOM elements, particularly for accessibility attributes."
      },
      {
        id: "hooks-12-d",
        text: "To track component instances for performance monitoring",
        isCorrect: false,
        explanation: "useId isn't for performance monitoring. It's for generating stable, unique IDs for accessibility and other DOM-related purposes."
      }
    ],
    explanation: {
      correct: "Correct! useId is a hook for generating stable, unique IDs that are consistent across server and client renders. It's particularly useful for accessibility attributes like aria-labelledby.",
      incorrect: "useId generates stable, unique IDs for accessibility attributes. It's not for identifying components in DevTools, creating database record IDs, or tracking component instances for performance.",
      detailed: "Introduced in React 18, useId addresses the challenge of generating stable IDs that work with server rendering. Before useId, developers often used incrementing counters or libraries like uuid, which could cause hydration mismatches between server and client. useId generates a string that includes a stable identifier for the current component and is consistent across renders. It's especially important for accessibility attributes like aria-labelledby and aria-describedby, where the ID needs to match between elements."
    }
  },
  {
    id: "hooks-13",
    level: 1,
    topic: "hooks",
    question: "What is the purpose of the useDeferredValue hook in React?",
    multipleCorrect: false,
    options: [
      {
        id: "hooks-13-a",
        text: "To defer updating a part of the UI to avoid blocking more urgent updates",
        isCorrect: true,
        explanation: "useDeferredValue lets you defer updating a part of the UI, marking it as lower priority. This helps keep the UI responsive during expensive updates by prioritizing more urgent interactions."
      },
      {
        id: "hooks-13-b",
        text: "To delay the initial rendering of a component",
        isCorrect: false,
        explanation: "useDeferredValue doesn't delay initial rendering. It's for deferring updates to existing content, not delaying the first render."
      },
      {
        id: "hooks-13-c",
        text: "To cache values for better performance",
        isCorrect: false,
        explanation: "While useDeferredValue can help with performance, it's not a caching mechanism. For caching computed values, you would use useMemo."
      },
      {
        id: "hooks-13-d",
        text: "To postpone state updates until a specific time",
        isCorrect: false,
        explanation: "useDeferredValue doesn't postpone updates until a specific time. It marks updates as lower priority, but doesn't schedule them for a specific moment."
      }
    ],
    explanation: {
      correct: "Correct! useDeferredValue allows you to defer updating a part of the UI to avoid blocking more urgent updates. It's useful for keeping the interface responsive during expensive rendering operations.",
      incorrect: "useDeferredValue defers updating parts of the UI to avoid blocking more urgent updates. It doesn't delay initial rendering, cache values, or postpone updates until a specific time.",
      detailed: "Introduced in React 18, useDeferredValue is part of React's Concurrent Mode features. It accepts a value and returns a new copy of that value that will lag behind the original. During urgent updates, React will first update the interface with the original value, then update the deferred value in a lower priority render. This is particularly useful for expensive rendering operations like filtering a large list based on user input. Instead of blocking the UI on every keystroke, you can defer the filtering operation, keeping the input responsive while the filtered results catch up."
    }
  },
  {
    id: "hooks-14",
    level: 1,
    topic: "hooks",
    question: "What is the purpose of the useTransition hook in React?",
    multipleCorrect: false,
    options: [
      {
        id: "hooks-14-a",
        text: "To mark state updates as transitions, giving React permission to delay them",
        isCorrect: true,
        explanation: "useTransition lets you mark state updates as transitions, which tells React they can be interrupted and delayed in favor of more urgent updates. This helps keep the UI responsive during expensive updates."
      },
      {
        id: "hooks-14-b",
        text: "To create CSS transitions automatically",
        isCorrect: false,
        explanation: "useTransition has nothing to do with CSS transitions. It's about prioritizing state updates, not visual animations."
      },
      {
        id: "hooks-14-c",
        text: "To transition between different components",
        isCorrect: false,
        explanation: "useTransition isn't for transitioning between components. For component transitions, you would use libraries like react-transition-group or framer-motion."
      },
      {
        id: "hooks-14-d",
        text: "To transition data from one format to another",
        isCorrect: false,
        explanation: "useTransition isn't for data transformation. It's specifically for marking state updates as lower priority in React's concurrent rendering model."
      }
    ],
    explanation: {
      correct: "Correct! useTransition allows you to mark state updates as transitions, giving React permission to delay them in favor of more urgent updates. This helps keep the UI responsive during expensive operations.",
      incorrect: "useTransition marks state updates as transitions that can be delayed. It's not for creating CSS transitions, transitioning between components, or transforming data formats.",
      detailed: "Introduced in React 18, useTransition returns an array with two items: a boolean indicating if a transition is pending, and a function to start a transition. When you wrap a state update in the startTransition function, you tell React that it's a transition that can be interrupted and delayed if there are more urgent updates. This is useful for updates that might cause a lot of re-rendering but don't need to be immediate, like changing a filter that affects a large list. The isPending boolean can be used to show a loading indicator while the transition is in progress."
    }
  },
  {
    id: "hooks-15",
    level: 1,
    topic: "hooks",
    question: "What is the purpose of the useSyncExternalStore hook in React?",
    multipleCorrect: false,
    options: [
      {
        id: "hooks-15-a",
        text: "To subscribe to an external store with support for server rendering",
        isCorrect: true,
        explanation: "useSyncExternalStore is a hook for subscribing to an external data store in a way that's compatible with concurrent rendering and server-side rendering. It ensures consistency between server and client renders."
      },
      {
        id: "hooks-15-b",
        text: "To synchronize multiple useState hooks",
        isCorrect: false,
        explanation: "useSyncExternalStore isn't for synchronizing useState hooks. It's specifically for subscribing to external data stores outside of React's state system."
      },
      {
        id: "hooks-15-c",
        text: "To store data in a synchronized database",
        isCorrect: false,
        explanation: "useSyncExternalStore has nothing to do with databases. It's for subscribing to external state sources like Redux stores, browser APIs, or other non-React state management systems."
      },
      {
        id: "hooks-15-d",
        text: "To create a store that syncs across multiple tabs",
        isCorrect: false,
        explanation: "useSyncExternalStore doesn't create stores or handle cross-tab synchronization. It's for subscribing to existing external stores in a React-friendly way."
      }
    ],
    explanation: {
      correct: "Correct! useSyncExternalStore is a hook for subscribing to an external data store in a way that's compatible with concurrent rendering and server-side rendering.",
      incorrect: "useSyncExternalStore subscribes to external stores with support for server rendering. It's not for synchronizing useState hooks, storing data in databases, or creating cross-tab synchronized stores.",
      detailed: "Introduced in React 18, useSyncExternalStore was created to help library authors integrate their external stores with React's concurrent rendering. It takes three arguments: a subscribe function that registers a callback to be called when the store changes, a getSnapshot function that returns the current value from the store, and an optional getServerSnapshot function for server rendering. This hook ensures that if a render is interrupted by a higher priority update, React will re-read the store value before continuing to ensure consistency."
    }
  },
  {
    id: "hooks-16",
    level: 1,
    topic: "hooks",
    question: "What are the Rules of Hooks in React?",
    multipleCorrect: true,
    options: [
      {
        id: "hooks-16-a",
        text: "Only call hooks at the top level of your component",
        isCorrect: true,
        explanation: "Hooks should not be called inside loops, conditions, or nested functions. This ensures that hooks are called in the same order each time a component renders, which is necessary for React to correctly preserve the state of hooks between renders."
      },
      {
        id: "hooks-16-b",
        text: "Only call hooks from React function components or custom hooks",
        isCorrect: true,
        explanation: "Hooks should only be called from React function components or from custom hooks. They should not be called from regular JavaScript functions or class components."
      },
      {
        id: "hooks-16-c",
        text: "Custom hooks must start with 'use'",
        isCorrect: true,
        explanation: "By convention, custom hooks should start with 'use' (like useState, useEffect). This allows the linter to apply the rules of hooks and makes it clear that the function is a hook."
      },
      {
        id: "hooks-16-d",
        text: "Hooks must be used in every component",
        isCorrect: false,
        explanation: "There's no requirement to use hooks in every component. You can mix and match functional components with hooks, functional components without hooks, and class components in the same application."
      },
      {
        id: "hooks-16-e",
        text: "Hooks must be called in alphabetical order",
        isCorrect: false,
        explanation: "There's no requirement for hooks to be called in alphabetical order. They just need to be called in the same order on every render, which is why they should be at the top level."
      }
    ],
    explanation: {
      correct: "Correct! The Rules of Hooks state that you should only call hooks at the top level (not inside loops, conditions, or nested functions), only call them from React function components or custom hooks, and custom hooks should start with 'use'.",
      incorrect: "The Rules of Hooks include: only call hooks at the top level, only call them from React function components or custom hooks, and custom hooks should start with 'use'. There's no requirement to use hooks in every component or to call them in alphabetical order.",
      detailed: "These rules are enforced to ensure hooks work correctly. The top-level rule ensures hooks are called in the same order each render, which React relies on to correctly associate state with hooks. The 'only from React functions' rule ensures hooks have access to the React component context. The 'use' prefix convention helps both linting tools and developers identify which functions are hooks. React provides an ESLint plugin (eslint-plugin-react-hooks) that enforces these rules automatically."
    }
  },
  {
    id: "hooks-17",
    level: 1,
    topic: "hooks",
    question: "What happens if you break the Rules of Hooks in React?",
    multipleCorrect: true,
    options: [
      {
        id: "hooks-17-a",
        text: "Hooks may not work correctly, leading to bugs",
        isCorrect: true,
        explanation: "Breaking the Rules of Hooks can cause hooks to not work correctly, leading to bugs like state being lost or effects running at unexpected times."
      },
      {
        id: "hooks-17-b",
        text: "React may not preserve the state of hooks correctly between renders",
        isCorrect: true,
        explanation: "React relies on the order of hook calls to associate hook state with the correct hooks. Breaking the rules can cause React to associate state with the wrong hooks."
      },
      {
        id: "hooks-17-c",
        text: "The ESLint plugin for React will show warnings or errors",
        isCorrect: true,
        explanation: "The eslint-plugin-react-hooks package will detect and warn about violations of the Rules of Hooks when it's properly configured."
      },
      {
        id: "hooks-17-d",
        text: "React will throw a runtime error immediately",
        isCorrect: false,
        explanation: "React doesn't always throw immediate runtime errors when you break the Rules of Hooks. Some violations may cause subtle bugs that are hard to track down."
      },
      {
        id: "hooks-17-e",
        text: "Your application will fail to compile",
        isCorrect: false,
        explanation: "Breaking the Rules of Hooks doesn't necessarily cause compilation failures. While the ESLint plugin can be configured to fail builds, this isn't a default behavior of React itself."
      }
    ],
    explanation: {
      correct: "Correct! Breaking the Rules of Hooks can cause hooks to not work correctly, lead to React not preserving state correctly between renders, and trigger warnings from the ESLint plugin.",
      incorrect: "Breaking the Rules of Hooks can cause hooks to malfunction, state preservation issues, and ESLint warnings. It doesn't always cause immediate runtime errors or compilation failures.",
      detailed: "React relies on the order of hook calls to maintain their state correctly. When you call hooks conditionally or in loops, the order can change between renders, causing React to associate hook state with the wrong hooks. This can lead to subtle and hard-to-debug issues like state being reset unexpectedly, effects running at the wrong times, or infinite re-rendering loops. The eslint-plugin-react-hooks package helps catch these issues during development, but it's not foolproof. Understanding why the rules exist and following them consistently is important for writing reliable React code."
    }
  },
  {
    id: "hooks-18",
    level: 1,
    topic: "hooks",
    question: "How do you create a custom hook in React?",
    multipleCorrect: false,
    options: [
      {
        id: "hooks-18-a",
        text: "By creating a function that starts with 'use' and may call other hooks",
        isCorrect: true,
        explanation: "Custom hooks are JavaScript functions that start with 'use' and may call other hooks. They allow you to extract component logic into reusable functions."
      },
      {
        id: "hooks-18-b",
        text: "By extending the React.Hook class",
        isCorrect: false,
        explanation: "There is no React.Hook class to extend. Hooks are functions, not classes, and custom hooks are created by writing functions that may call other hooks."
      },
      {
        id: "hooks-18-c",
        text: "By using the createCustomHook() function from React",
        isCorrect: false,
        explanation: "There is no createCustomHook() function in React. Custom hooks are just regular JavaScript functions that follow certain conventions."
      },
      {
        id: "hooks-18-d",
        text: "By registering a new hook with React.registerHook()",
        isCorrect: false,
        explanation: "There is no React.registerHook() method. Custom hooks don't need to be registered with React; they're just functions that follow certain naming conventions and rules."
      }
    ],
    explanation: {
      correct: "Correct! Custom hooks are created by writing JavaScript functions that start with 'use' and may call other hooks. This naming convention is important for the linter to apply the Rules of Hooks.",
      incorrect: "Custom hooks are created by writing functions that start with 'use' and may call other hooks. There's no React.Hook class to extend, no createCustomHook() function, and no need to register hooks with React.",
      detailed: "Custom hooks allow you to extract component logic into reusable functions. They're a convention, not a feature of React itself. A custom hook is just a JavaScript function whose name starts with 'use' and that may call other hooks. For example: function useFormInput(initialValue) { const [value, setValue] = useState(initialValue); const handleChange = e => setValue(e.target.value); return { value, onChange: handleChange }; }. Custom hooks can call other hooks (built-in or custom) and must follow the same Rules of Hooks: only call hooks at the top level and only from React functions or custom hooks."
    }
  },
  {
    id: "hooks-19",
    level: 1,
    topic: "hooks",
    question: "What is the difference between useState and useReducer?",
    multipleCorrect: true,
    options: [
      {
        id: "hooks-19-a",
        text: "useReducer is better for complex state logic",
        isCorrect: true,
        explanation: "useReducer is more suitable for managing complex state logic, especially when state transitions depend on previous state or when multiple sub-values are related."
      },
      {
        id: "hooks-19-b",
        text: "useState is simpler and sufficient for basic state management",
        isCorrect: true,
        explanation: "useState provides a simpler API that's sufficient for managing independent pieces of state that don't involve complex logic."
      },
      {
        id: "hooks-19-c",
        text: "useReducer centralizes state update logic in a reducer function",
        isCorrect: true,
        explanation: "With useReducer, all state update logic is centralized in a reducer function, making it easier to test and reason about complex state transitions."
      },
      {
        id: "hooks-19-d",
        text: "useState is faster than useReducer",
        isCorrect: false,
        explanation: "There's no significant performance difference between useState and useReducer. The choice between them should be based on the complexity of your state logic, not performance considerations."
      },
      {
        id: "hooks-19-e",
        text: "useReducer can only be used in class components",
        isCorrect: false,
        explanation: "This is incorrect. Like all hooks, useReducer can only be used in functional components, not class components."
      }
    ],
    explanation: {
      correct: "Correct! useReducer is better for complex state logic, useState is simpler for basic state management, and useReducer centralizes state update logic in a reducer function.",
      incorrect: "The key differences are that useReducer is better for complex state logic, useState is simpler for basic state, and useReducer centralizes update logic. There's no significant performance difference, and useReducer can only be used in functional components, not class components.",
      detailed: "useState and useReducer are both hooks for managing state in functional components, but they have different use cases. useState is simpler and good for independent pieces of state: const [count, setCount] = useState(0). useReducer is more powerful and better for complex state logic: const [state, dispatch] = useReducer(reducer, initialState). With useReducer, you dispatch actions that describe what happened, and the reducer function determines how the state should change in response. This pattern, inspired by Redux, makes it easier to manage complex state transitions, handle related state values, and test state logic independently from components."
    }
  },
  {
    id: "hooks-20",
    level: 1,
    topic: "hooks",
    question: "What is the difference between useEffect and useLayoutEffect?",
    multipleCorrect: true,
    options: [
      {
        id: "hooks-20-a",
        text: "useEffect runs after the browser has painted, while useLayoutEffect runs before",
        isCorrect: true,
        explanation: "useEffect runs asynchronously after the browser has painted, allowing the browser to paint before running your effect. useLayoutEffect runs synchronously before the browser paints."
      },
      {
        id: "hooks-20-b",
        text: "useLayoutEffect can cause performance issues if overused",
        isCorrect: true,
        explanation: "Because useLayoutEffect runs synchronously and blocks painting, it can cause performance issues if it contains expensive operations. useEffect is generally preferred for better performance."
      },
      {
        id: "hooks-20-c",
        text: "useLayoutEffect is useful for DOM measurements and mutations that need to be synchronous",
        isCorrect: true,
        explanation: "useLayoutEffect is particularly useful when you need to measure DOM elements and then make DOM mutations that should be visible immediately, preventing flickering."
      },
      {
        id: "hooks-20-d",
        text: "useEffect is deprecated and useLayoutEffect should be used instead",
        isCorrect: false,
        explanation: "This is incorrect. useEffect is not deprecated and is still the recommended hook for most side effects. useLayoutEffect should only be used when necessary."
      },
      {
        id: "hooks-20-e",
        text: "useLayoutEffect works in server-side rendering, while useEffect doesn't",
        isCorrect: false,
        explanation: "This is incorrect. Actually, useLayoutEffect doesn't work properly in server-side rendering and will trigger a warning. useEffect is safer for server rendering."
      }
    ],
    explanation: {
      correct: "Correct! useEffect runs after painting, useLayoutEffect runs before painting, useLayoutEffect can cause performance issues if overused, and it's useful for synchronous DOM measurements and mutations.",
      incorrect: "The key differences are timing (after vs. before painting), performance implications, and use cases. useEffect is not deprecated, and useLayoutEffect actually has issues with server-side rendering, not the other way around.",
      detailed: "The main difference is timing: useEffect runs asynchronously after the browser has painted, while useLayoutEffect runs synchronously before the browser paints. This means useLayoutEffect can block the browser from updating the screen, which can impact performance if it contains expensive operations. useLayoutEffect is primarily useful when you need to measure DOM elements and make DOM updates that should be visible immediately, preventing any flickering that might occur with useEffect. For most side effects, useEffect is recommended because it doesn't block painting. The React team's guidance is: use useEffect by default, and only use useLayoutEffect when useEffect causes visible problems."
    }
  },
  {
    id: "hooks-21",
    level: 1,
    topic: "hooks",
    question: "What is the difference between useMemo and useCallback?",
    multipleCorrect: true,
    options: [
      {
        id: "hooks-21-a",
        text: "useMemo memoizes a value, while useCallback memoizes a function",
        isCorrect: true,
        explanation: "useMemo returns a memoized value from a function, while useCallback returns a memoized function itself. Both only recompute when dependencies change."
      },
      {
        id: "hooks-21-b",
        text: "useCallback is essentially equivalent to useMemo(() => fn, deps)",
        isCorrect: true,
        explanation: "useCallback(fn, deps) is effectively the same as useMemo(() => fn, deps). Both memoize a function, but useCallback provides a more direct syntax for this common use case."
      },
      {
        id: "hooks-21-c",
        text: "useMemo is for expensive calculations, while useCallback is for functions passed to child components",
        isCorrect: true,
        explanation: "useMemo is typically used to avoid expensive recalculations, while useCallback is commonly used to prevent unnecessary re-renders of child components that receive functions as props."
      },
      {
        id: "hooks-21-d",
        text: "useMemo runs the function immediately, while useCallback defers execution",
        isCorrect: false,
        explanation: "This is a misunderstanding. useMemo runs the function immediately and memoizes the result. useCallback doesn't run the function at all; it memoizes the function itself for later execution."
      },
      {
        id: "hooks-21-e",
        text: "useMemo is faster than useCallback for all use cases",
        isCorrect: false,
        explanation: "There's no general performance difference between useMemo and useCallback. They serve different purposes and should be chosen based on what you're trying to memoize, not performance considerations."
      }
    ],
    explanation: {
      correct: "Correct! useMemo memoizes a value while useCallback memoizes a function, useCallback is equivalent to useMemo(() => fn, deps), and they have different typical use cases (expensive calculations vs. functions passed to children).",
      incorrect: "The key differences are what they memoize (value vs. function) and their typical use cases. useCallback doesn't defer execution (it just memoizes the function), and neither hook is universally faster than the other.",
      detailed: "Both hooks help with performance optimization by avoiding unnecessary work. useMemo memoizes the result of a computation: const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]). useCallback memoizes a function itself: const memoizedCallback = useCallback(() => { doSomething(a, b); }, [a, b]). While useCallback could be implemented using useMemo, React provides it as a separate hook for clarity and convenience. useMemo is typically used for expensive calculations like filtering large arrays or complex mathematical operations, while useCallback is commonly used when passing callbacks to optimized child components to prevent unnecessary re-renders."
    }
  },
  {
    id: "hooks-22",
    level: 1,
    topic: "hooks",
    question: "What is the difference between useRef and useState?",
    multipleCorrect: true,
    options: [
      {
        id: "hooks-22-a",
        text: "Changes to useRef's .current property don't trigger re-renders",
        isCorrect: true,
        explanation: "When you change the .current property of a ref, React doesn't re-render the component. This makes refs useful for values that need to persist between renders without affecting the UI."
      },
      {
        id: "hooks-22-b",
        text: "useState is for values that affect rendering, while useRef is for values that don't",
        isCorrect: true,
        explanation: "useState should be used for values that, when changed, should cause the component to re-render. useRef is for values that need to persist between renders but shouldn't trigger re-renders when changed."
      },
      {
        id: "hooks-22-c",
        text: "useRef can be used to access DOM elements, while useState cannot",
        isCorrect: true,
        explanation: "useRef can create refs that are attached to DOM elements using the ref attribute, giving you direct access to those elements. useState doesn't have this capability."
      },
      {
        id: "hooks-22-d",
        text: "useRef values are reset on every render",
        isCorrect: false,
        explanation: "This is incorrect. useRef values persist between renders, just like useState values. The difference is that changes to ref values don't trigger re-renders."
      },
      {
        id: "hooks-22-e",
        text: "useState can only store primitive values, while useRef can store objects",
        isCorrect: false,
        explanation: "This is incorrect. Both useState and useRef can store any type of value, including objects, arrays, functions, and primitive values."
      }
    ],
    explanation: {
      correct: "Correct! Key differences between useRef and useState are: changes to refs don't trigger re-renders, they're used for different types of values (non-rendering vs. rendering), and useRef can access DOM elements.",
      incorrect: "The key differences are that ref changes don't trigger re-renders, they're for different use cases, and refs can access DOM elements. Ref values are not reset on renders, and both hooks can store any value type.",
      detailed: "useState and useRef both provide ways to persist values between renders, but they serve different purposes. useState is for values that affect the UI: const [count, setCount] = useState(0). When you call setCount, React re-renders the component with the new value. useRef is for values that need to persist but don't affect rendering: const countRef = useRef(0). When you change countRef.current, the value persists but doesn't cause a re-render. useRef is commonly used for: 1) Accessing DOM elements, 2) Storing previous values, 3) Instance variables that don't affect rendering, and 4) Storing mutable values that shouldn't trigger re-renders."
    }
  },
  {
    id: "hooks-23",
    level: 1,
    topic: "hooks",
    question: "What is the purpose of dependency arrays in hooks like useEffect, useMemo, and useCallback?",
    multipleCorrect: true,
    options: [
      {
        id: "hooks-23-a",
        text: "To control when the hook's function runs",
        isCorrect: true,
        explanation: "The dependency array controls when the hook's function runs. The function will only run when one of the dependencies has changed since the last render."
      },
      {
        id: "hooks-23-b",
        text: "To optimize performance by avoiding unnecessary executions",
        isCorrect: true,
        explanation: "By specifying dependencies, you can avoid unnecessary executions of the hook's function, which can improve performance, especially for expensive operations."
      },
      {
        id: "hooks-23-c",
        text: "To specify which values the hook's function depends on",
        isCorrect: true,
        explanation: "The dependency array tells React which values from the component the hook's function depends on. If these values change, the function needs to run again to stay in sync."
      },
      {
        id: "hooks-23-d",
        text: "To make the hook's function run only once",
        isCorrect: false,
        explanation: "While an empty dependency array ([]) will make the function run only once after the initial render, that's a specific case. The general purpose of dependency arrays is not to make functions run only once."
      },
      {
        id: "hooks-23-e",
        text: "To pass arguments to the hook's function",
        isCorrect: false,
        explanation: "Dependency arrays don't pass arguments to the hook's function. They specify when the function should run, not what values it should receive."
      }
    ],
    explanation: {
      correct: "Correct! Dependency arrays control when a hook's function runs, optimize performance by avoiding unnecessary executions, and specify which values the function depends on.",
      incorrect: "Dependency arrays control when a hook's function runs, optimize performance, and specify dependencies. They're not primarily for making functions run only once (though an empty array does that) or for passing arguments.",
      detailed: "Dependency arrays are a key mechanism for optimizing hooks. For useEffect, the effect function runs after the initial render and then after any render where a dependency has changed. For useMemo and useCallback, the memoized value or function is only recomputed when a dependency changes. An empty array ([]) means the function only runs after the initial render. No array means the function runs after every render. The array should include all values from the component scope that the function uses, to ensure it stays in sync with the component's state and props. React's lint rules help ensure you don't miss dependencies, which could lead to stale closures and bugs."
    }
  },
  {
    id: "hooks-24",
    level: 1,
    topic: "hooks",
    question: "What happens if you omit the dependency array in useEffect?",
    multipleCorrect: false,
    options: [
      {
        id: "hooks-24-a",
        text: "The effect runs after every render",
        isCorrect: true,
        explanation: "When you omit the dependency array entirely, the effect runs after every render of the component, including the initial render and all subsequent re-renders."
      },
      {
        id: "hooks-24-b",
        text: "The effect runs only once, after the initial render",
        isCorrect: false,
        explanation: "This is what happens when you provide an empty dependency array ([]), not when you omit it entirely. Omitting the array makes the effect run after every render."
      },
      {
        id: "hooks-24-c",
        text: "React throws an error",
        isCorrect: false,
        explanation: "React doesn't throw an error when you omit the dependency array. It's a valid pattern that makes the effect run after every render."
      },
      {
        id: "hooks-24-d",
        text: "The effect never runs",
        isCorrect: false,
        explanation: "This is incorrect. When you omit the dependency array, the effect runs more frequently (after every render), not less."
      }
    ],
    explanation: {
      correct: "Correct! When you omit the dependency array in useEffect, the effect runs after every render of the component, including the initial render and all subsequent re-renders.",
      incorrect: "When you omit the dependency array in useEffect, the effect runs after every render. It doesn't run only once, doesn't cause an error, and doesn't prevent the effect from running.",
      detailed: "useEffect has three possible patterns for the dependency array: 1) No dependency array: useEffect(() => { ... }) - the effect runs after every render. 2) Empty dependency array: useEffect(() => { ... }, []) - the effect runs only once after the initial render. 3) Array with dependencies: useEffect(() => { ... }, [dep1, dep2]) - the effect runs after the initial render and after any render where a dependency has changed. Omitting the array is useful when the effect needs to synchronize with every render, but it can lead to performance issues if the effect is expensive. It's often better to include a dependency array with the specific values the effect depends on."
    }
  },
  {
    id: "hooks-25",
    level: 1,
    topic: "hooks",
    question: "What happens if you provide an empty dependency array ([]) to useEffect?",
    multipleCorrect: false,
    options: [
      {
        id: "hooks-25-a",
        text: "The effect runs only once, after the initial render",
        isCorrect: true,
        explanation: "An empty dependency array ([]) tells React that the effect doesn't depend on any values from the component, so it only needs to run once after the initial render."
      },
      {
        id: "hooks-25-b",
        text: "The effect runs after every render",
        isCorrect: false,
        explanation: "This is what happens when you omit the dependency array entirely, not when you provide an empty array. An empty array makes the effect run only once."
      },
      {
        id: "hooks-25-c",
        text: "The effect never runs",
        isCorrect: false,
        explanation: "This is incorrect. An empty dependency array doesn't prevent the effect from running; it makes it run once after the initial render."
      },
      {
        id: "hooks-25-d",
        text: "React throws an error",
        isCorrect: false,
        explanation: "React doesn't throw an error when you provide an empty dependency array. It's a valid pattern that makes the effect run only once after the initial render."
      }
    ],
    explanation: {
      correct: "Correct! When you provide an empty dependency array ([]) to useEffect, the effect runs only once, after the initial render. This is similar to componentDidMount in class components.",
      incorrect: "When you provide an empty dependency array ([]) to useEffect, the effect runs only once after the initial render. It doesn't run after every render, doesn't never run, and doesn't cause an error.",
      detailed: "The empty dependency array pattern (useEffect(() => { ... }, [])) is commonly used for effects that should only run once, such as fetching initial data, setting up subscriptions, or initializing third-party libraries. If the effect returns a cleanup function, that function will run when the component unmounts, similar to componentWillUnmount in class components. It's important to ensure that if your effect uses any values from props or state, those values should be included in the dependency array. Otherwise, your effect will use stale values, which can lead to bugs. React's lint rules help catch missing dependencies."
    }
  },
  {
    id: "hooks-26",
    level: 1,
    topic: "hooks",
    question: "What is the cleanup function in useEffect used for?",
    multipleCorrect: true,
    options: [
      {
        id: "hooks-26-a",
        text: "To clean up side effects before the component unmounts",
        isCorrect: true,
        explanation: "The cleanup function runs before the component unmounts, allowing you to clean up any side effects like subscriptions, timers, or event listeners to prevent memory leaks."
      },
      {
        id: "hooks-26-b",
        text: "To clean up before the effect runs again due to dependency changes",
        isCorrect: true,
        explanation: "The cleanup function also runs before the effect runs again due to dependency changes, ensuring that previous side effects are properly cleaned up before new ones are set up."
      },
      {
        id: "hooks-26-c",
        text: "To cancel asynchronous operations that are no longer needed",
        isCorrect: true,
        explanation: "The cleanup function is a good place to cancel asynchronous operations like fetch requests or animations that are no longer needed when the component unmounts or dependencies change."
      },
      {
        id: "hooks-26-d",
        text: "To reset the component's state",
        isCorrect: false,
        explanation: "The cleanup function isn't for resetting state. It's specifically for cleaning up side effects created by the effect itself. State management is handled separately."
      },
      {
        id: "hooks-26-e",
        text: "To run additional effects after the main effect completes",
        isCorrect: false,
        explanation: "The cleanup function doesn't run after the main effect completes; it runs before the component unmounts or before the effect runs again. It's for cleaning up, not for additional effects."
      }
    ],
    explanation: {
      correct: "Correct! The cleanup function in useEffect is used to clean up side effects before the component unmounts, before the effect runs again due to dependency changes, and to cancel asynchronous operations that are no longer needed.",
      incorrect: "The cleanup function is for cleaning up side effects before unmounting or before the effect runs again, and for canceling async operations. It's not for resetting state or running additional effects after the main effect.",
      detailed: "The cleanup function is returned from the effect function: useEffect(() => { const subscription = subscribe(); return () => { unsubscribe(subscription); }; }, [deps]). It's React's way of handling the componentWillUnmount lifecycle in functional components, but it's more powerful because it also runs before the effect runs again. This makes it perfect for cleaning up the previous effect before setting up a new one, ensuring that resources are properly managed. Common use cases include: 1) Removing event listeners, 2) Clearing timers, 3) Canceling network requests, and 4) Unsubscribing from subscriptions. Without proper cleanup, components can cause memory leaks or unexpected behavior."
    }
  },
  {
    id: "hooks-27",
    level: 1,
    topic: "hooks",
    question: "How do you handle async operations in useEffect?",
    multipleCorrect: false,
    options: [
      {
        id: "hooks-27-a",
        text: "By defining an async function inside useEffect and then calling it",
        isCorrect: true,
        explanation: "The effect function itself cannot be async, but you can define an async function inside it and then call that function. This allows you to use async/await syntax for asynchronous operations."
      },
      {
        id: "hooks-27-b",
        text: "By making the effect function itself async",
        isCorrect: false,
        explanation: "The effect function cannot be async. React expects the effect function to either return nothing or a cleanup function, not a Promise, which is what async functions return."
      },
      {
        id: "hooks-27-c",
        text: "By using the useAsync hook from React",
        isCorrect: false,
        explanation: "There is no useAsync hook in React. While there are third-party libraries that provide such hooks, they're not part of React itself."
      },
      {
        id: "hooks-27-d",
        text: "By using the async property on useEffect",
        isCorrect: false,
        explanation: "There is no async property on useEffect. useEffect takes a function and an optional dependency array, not an options object with properties."
      }
    ],
    explanation: {
      correct: "Correct! To handle async operations in useEffect, you define an async function inside the effect and then call it. The effect function itself cannot be async because React expects it to return either nothing or a cleanup function.",
      incorrect: "You handle async operations in useEffect by defining an async function inside the effect and then calling it. The effect function itself cannot be async, there's no useAsync hook in React, and there's no async property on useEffect.",
      detailed: "Here's the correct pattern: useEffect(() => { const fetchData = async () => { try { const response = await fetch(url); const data = await response.json(); setData(data); } catch (error) { setError(error); } }; fetchData(); // Don't forget to call the function return () => { // Cleanup if needed }; }, [url]). This pattern allows you to use async/await syntax while still following React's rules for effects. It's also important to handle errors properly and consider cleanup for scenarios like component unmounting before the async operation completes, to avoid setting state on unmounted components."
    }
  },
  {
    id: "hooks-28",
    level: 1,
    topic: "hooks",
    question: "How do you update state based on the previous state using the useState hook?",
    multipleCorrect: false,
    options: [
      {
        id: "hooks-28-a",
        text: "By passing a function to the state setter that receives the previous state",
        isCorrect: true,
        explanation: "When you need to update state based on the previous state, you should pass a function to the state setter. This function receives the previous state as its argument and returns the new state."
      },
      {
        id: "hooks-28-b",
        text: "By using the prevState property on the state variable",
        isCorrect: false,
        explanation: "There is no prevState property on state variables. To access the previous state, you need to use the functional form of the state setter."
      },
      {
        id: "hooks-28-c",
        text: "By using the this.state from class components",
        isCorrect: false,
        explanation: "this.state is used in class components, not with hooks in functional components. Hooks have their own patterns for accessing and updating state."
      },
      {
        id: "hooks-28-d",
        text: "By using the getPreviousState() method",
        isCorrect: false,
        explanation: "There is no getPreviousState() method in React. To access the previous state when updating, you use the functional form of the state setter."
      }
    ],
    explanation: {
      correct: "Correct! To update state based on the previous state using useState, you pass a function to the state setter. This function receives the previous state as its argument and returns the new state.",
      incorrect: "You update state based on previous state by passing a function to the state setter. There's no prevState property, this.state is for class components, and there's no getPreviousState() method.",
      detailed: "Here's the pattern: const [count, setCount] = useState(0); // Later, to increment: setCount(prevCount => prevCount + 1). This functional update form is important when the new state depends on the previous state, especially for state updates in event handlers or effects that might be batched. If you used setCount(count + 1) and called it multiple times in the same function, you might not get the expected result because the 'count' variable doesn't change until the next render. The functional form ensures you're always working with the most up-to-date state value, even when updates are batched."
    }
  },
  {
    id: "hooks-29",
    level: 1,
    topic: "hooks",
    question: "What is the purpose of the optional second argument to useState?",
    multipleCorrect: false,
    options: [
      {
        id: "hooks-29-a",
        text: "To provide a function that lazily initializes the state",
        isCorrect: true,
        explanation: "The optional second argument to useState is a function that lazily initializes the state. This function is only called during the initial render, which can improve performance for expensive initializations."
      },
      {
        id: "hooks-29-b",
        text: "To specify dependencies for when the state should update",
        isCorrect: false,
        explanation: "useState doesn't take dependencies like useEffect or useMemo. The second argument, if provided, is a function for lazy initialization, not a dependency array."
      },
      {
        id: "hooks-29-c",
        text: "To provide a callback that runs after the state updates",
        isCorrect: false,
        explanation: "Unlike setState in class components, useState doesn't accept a callback that runs after state updates. For that functionality, you would use useEffect."
      },
      {
        id: "hooks-29-d",
        text: "To specify whether the state update should be batched",
        isCorrect: false,
        explanation: "useState doesn't have an option to control batching. React automatically batches state updates in many cases, and this behavior can't be controlled through useState arguments."
      }
    ],
    explanation: {
      correct: "Correct! The optional second argument to useState is a function that lazily initializes the state. This is useful for expensive initializations that should only happen once.",
      incorrect: "The second argument to useState is for lazy initialization. It's not for specifying update dependencies, providing a post-update callback, or controlling batching behavior.",
      detailed: "Lazy initialization is useful when the initial state is expensive to compute. Instead of: const [state, setState] = useState(expensiveComputation()); you can use: const [state, setState] = useState(() => expensiveComputation());. The difference is that in the first example, expensiveComputation() runs on every render, even though the result is only used for the initial state. In the second example, the function is only called during the initial render. This pattern is particularly useful for initializations that involve parsing, complex calculations, or accessing localStorage/sessionStorage."
    }
  },
  {
    id: "hooks-30",
    level: 1,
    topic: "hooks",
    question: "How do you implement a custom hook that manages form state in React?",
    multipleCorrect: false,
    options: [
      {
        id: "hooks-30-a",
        text: "By creating a function that starts with 'use' and uses React hooks to manage form values, validation, and submission",
        isCorrect: true,
        explanation: "A custom form hook should start with 'use' (convention for hooks), use React hooks internally to manage state and side effects, and return values and functions for managing form state, validation, and submission."
      },
      {
        id: "hooks-30-b",
        text: "By extending the React.Form class and implementing the necessary methods",
        isCorrect: false,
        explanation: "There is no React.Form class to extend. Custom hooks are functions, not classes, and they use other hooks to compose behavior."
      },
      {
        id: "hooks-30-c",
        text: "By using the createFormHook() function from React",
        isCorrect: false,
        explanation: "There is no createFormHook() function in React. Custom hooks are created by writing regular functions that use other hooks."
      },
      {
        id: "hooks-30-d",
        text: "By importing the useForm hook from React",
        isCorrect: false,
        explanation: "There is no built-in useForm hook in React. While there are third-party libraries like react-hook-form that provide such hooks, they're not part of React itself."
      }
    ],
    explanation: {
      correct: "Correct! To implement a custom form hook, you create a function that starts with 'use', uses React hooks internally to manage form state, validation, and submission, and returns the necessary values and functions.",
      incorrect: "Custom form hooks are created by writing functions that start with 'use' and use React hooks internally. There's no React.Form class to extend, no createFormHook() function, and no built-in useForm hook in React.",
      detailed: "Here's a simple example of a custom form hook: function useForm(initialValues) { const [values, setValues] = useState(initialValues); const [errors, setErrors] = useState({}); const handleChange = (e) => { const { name, value } = e.target; setValues(prev => ({ ...prev, [name]: value })); }; const validate = () => { let newErrors = {}; // Validation logic here return newErrors; }; const handleSubmit = (onSubmit) => (e) => { e.preventDefault(); const newErrors = validate(); if (Object.keys(newErrors).length === 0) { onSubmit(values); } else { setErrors(newErrors); } }; return { values, errors, handleChange, handleSubmit }; }. This hook encapsulates form state management, providing a reusable solution that can be used across multiple form components."
    }
  },
  {
    id: "hooks-31",
    level: 1,
    topic: "hooks",
    question: "How do you implement a custom hook that manages a timer in React?",
    multipleCorrect: false,
    options: [
      {
        id: "hooks-31-a",
        text: "By creating a function that starts with 'use', uses useState for the timer value, and useEffect for timer logic",
        isCorrect: true,
        explanation: "A custom timer hook should start with 'use', use useState to store the timer value, and useEffect to set up and clean up the timer interval. It should return the current timer value and functions to control the timer."
      },
      {
        id: "hooks-31-b",
        text: "By extending the React.Timer class",
        isCorrect: false,
        explanation: "There is no React.Timer class to extend. Custom hooks are functions, not classes, and they use other hooks to compose behavior."
      },
      {
        id: "hooks-31-c",
        text: "By using the createTimer() function from React",
        isCorrect: false,
        explanation: "There is no createTimer() function in React. Custom hooks are created by writing regular functions that use other hooks."
      },
      {
        id: "hooks-31-d",
        text: "By importing the useTimer hook from React",
        isCorrect: false,
        explanation: "There is no built-in useTimer hook in React. While there might be third-party libraries that provide such hooks, they're not part of React itself."
      }
    ],
    explanation: {
      correct: "Correct! To implement a custom timer hook, you create a function that starts with 'use', uses useState to store the timer value, and useEffect to manage the timer interval. It should return the timer value and control functions.",
      incorrect: "Custom timer hooks are created by writing functions that start with 'use' and use React hooks internally. There's no React.Timer class, no createTimer() function, and no built-in useTimer hook in React.",
      detailed: "Here's a simple example of a custom timer hook: function useTimer(initialSeconds = 0) { const [seconds, setSeconds] = useState(initialSeconds); const [isActive, setIsActive] = useState(false); useEffect(() => { let interval = null; if (isActive) { interval = setInterval(() => { setSeconds(seconds => seconds + 1); }, 1000); } return () => clearInterval(interval); }, [isActive]); const start = () => setIsActive(true); const pause = () => setIsActive(false); const reset = () => { setIsActive(false); setSeconds(0); }; return { seconds, isActive, start, pause, reset }; }. This hook encapsulates timer logic, providing a reusable solution that can be used across multiple components."
    }
  },
  {
    id: "hooks-32",
    level: 1,
    topic: "hooks",
    question: "How do you implement a custom hook that fetches data from an API in React?",
    multipleCorrect: false,
    options: [
      {
        id: "hooks-32-a",
        text: "By creating a function that starts with 'use', uses useState for data and loading state, and useEffect for the fetch call",
        isCorrect: true,
        explanation: "A custom data fetching hook should start with 'use', use useState to store the data, loading state, and error state, and useEffect to trigger the fetch call. It should return the data and loading state."
      },
      {
        id: "hooks-32-b",
        text: "By extending the React.Fetch class",
        isCorrect: false,
        explanation: "There is no React.Fetch class to extend. Custom hooks are functions, not classes, and they use other hooks to compose behavior."
      },
      {
        id: "hooks-32-c",
        text: "By using the createFetchHook() function from React",
        isCorrect: false,
        explanation: "There is no createFetchHook() function in React. Custom hooks are created by writing regular functions that use other hooks."
      },
      {
        id: "hooks-32-d",
        text: "By importing the useFetch hook from React",
        isCorrect: false,
        explanation: "There is no built-in useFetch hook in React. While there are third-party libraries that provide such hooks, they're not part of React itself."
      }
    ],
    explanation: {
      correct: "Correct! To implement a custom data fetching hook, you create a function that starts with 'use', uses useState to store data and loading state, and useEffect to trigger the fetch call. It should return the data and loading state.",
      incorrect: "Custom data fetching hooks are created by writing functions that start with 'use' and use React hooks internally. There's no React.Fetch class, no createFetchHook() function, and no built-in useFetch hook in React.",
      detailed: "Here's a simple example of a custom data fetching hook: function useFetch(url) { const [data, setData] = useState(null); const [loading, setLoading] = useState(true); const [error, setError] = useState(null); useEffect(() => { const fetchData = async () => { try { setLoading(true); const response = await fetch(url); const json = await response.json(); setData(json); setError(null); } catch (error) { setError(error); setData(null); } finally { setLoading(false); } }; fetchData(); }, [url]); return { data, loading, error }; }. This hook encapsulates data fetching logic, providing a reusable solution that can be used across multiple components."
    }
  },
  {
    id: "hooks-33",
    level: 1,
    topic: "hooks",
    question: "How do you implement a custom hook that manages local storage in React?",
    multipleCorrect: false,
    options: [
      {
        id: "hooks-33-a",
        text: "By creating a function that starts with 'use', uses useState for the value, and useEffect to sync with localStorage",
        isCorrect: true,
        explanation: "A custom localStorage hook should start with 'use', use useState to store the value, and useEffect to synchronize the value with localStorage. It should return the current value and a setter function."
      },
      {
        id: "hooks-33-b",
        text: "By extending the React.Storage class",
        isCorrect: false,
        explanation: "There is no React.Storage class to extend. Custom hooks are functions, not classes, and they use other hooks to compose behavior."
      },
      {
        id: "hooks-33-c",
        text: "By using the createStorageHook() function from React",
        isCorrect: false,
        explanation: "There is no createStorageHook() function in React. Custom hooks are created by writing regular functions that use other hooks."
      },
      {
        id: "hooks-33-d",
        text: "By importing the useLocalStorage hook from React",
        isCorrect: false,
        explanation: "There is no built-in useLocalStorage hook in React. While there are third-party libraries that provide such hooks, they're not part of React itself."
      }
    ],
    explanation: {
      correct: "Correct! To implement a custom localStorage hook, you create a function that starts with 'use', uses useState to store the value, and useEffect to synchronize with localStorage. It should return the value and a setter function.",
      incorrect: "Custom localStorage hooks are created by writing functions that start with 'use' and use React hooks internally. There's no React.Storage class, no createStorageHook() function, and no built-in useLocalStorage hook in React.",
      detailed: "Here's a simple example of a custom localStorage hook: function useLocalStorage(key, initialValue) { const [storedValue, setStoredValue] = useState(() => { try { const item = window.localStorage.getItem(key); return item ? JSON.parse(item) : initialValue; } catch (error) { console.error(error); return initialValue; } }); const setValue = value => { try { const valueToStore = value instanceof Function ? value(storedValue) : value; setStoredValue(valueToStore); window.localStorage.setItem(key, JSON.stringify(valueToStore)); } catch (error) { console.error(error); } }; return [storedValue, setValue]; }. This hook encapsulates localStorage logic, providing a reusable solution that can be used across multiple components."
    }
  },
  {
    id: "hooks-34",
    level: 1,
    topic: "hooks",
    question: "What is the stale closure problem in React hooks, and how do you solve it?",
    multipleCorrect: false,
    options: [
      {
        id: "hooks-34-a",
        text: "It's when a hook's closure captures outdated values; solve it by including all dependencies in dependency arrays",
        isCorrect: true,
        explanation: "The stale closure problem occurs when a function in a hook (like a callback in useEffect) captures variables from an old render. The solution is to include all dependencies in the dependency array, ensuring the function is recreated with fresh values when dependencies change."
      },
      {
        id: "hooks-34-b",
        text: "It's when hooks are called conditionally; solve it by following the Rules of Hooks",
        isCorrect: false,
        explanation: "While following the Rules of Hooks is important, the stale closure problem specifically refers to closures capturing outdated values, not conditional hook calls."
      },
      {
        id: "hooks-34-c",
        text: "It's when hooks are used in class components; solve it by using functional components",
        isCorrect: false,
        explanation: "The stale closure problem can occur in functional components with hooks, not just when trying to use hooks in class components (which isn't allowed at all)."
      },
      {
        id: "hooks-34-d",
        text: "It's when hooks are nested too deeply; solve it by flattening the component hierarchy",
        isCorrect: false,
        explanation: "The stale closure problem isn't related to nesting depth. It's about closures capturing outdated values, which can happen at any nesting level."
      }
    ],
    explanation: {
      correct: "Correct! The stale closure problem occurs when a hook's closure captures outdated values from previous renders. You solve it by including all dependencies in dependency arrays, ensuring functions are recreated with fresh values.",
      incorrect: "The stale closure problem is when a hook's closure captures outdated values. It's not about conditional hook calls, using hooks in class components, or nesting depth.",
      detailed: "The stale closure problem is a common issue with hooks, especially useEffect and useCallback. It happens because JavaScript closures capture variables by reference to their environment. For example: function Counter() { const [count, setCount] = useState(0); useEffect(() => { const interval = setInterval(() => { console.log(count); // This will always log the initial value of count }, 1000); return () => clearInterval(interval); }, []); // Empty dependency array means this effect runs once }. In this code, the setInterval callback will always log the initial value of count (0), even if count changes, because the closure captured the value from the first render. To fix this, include count in the dependency array: useEffect(() => { ... }, [count]). This recreates the effect with a fresh closure when count changes."
    }
  },
  {
    id: "hooks-35",
    level: 1,
    topic: "hooks",
    question: "What is the purpose of the useInsertionEffect hook in React?",
    multipleCorrect: false,
    options: [
      {
        id: "hooks-35-a",
        text: "To inject styles before any DOM mutations",
        isCorrect: true,
        explanation: "useInsertionEffect is specifically designed for CSS-in-JS libraries to inject styles before any DOM mutations. It runs before all DOM mutations and other effects, making it ideal for style injection."
      },
      {
        id: "hooks-35-b",
        text: "To insert elements into the DOM",
        isCorrect: false,
        explanation: "useInsertionEffect isn't for inserting DOM elements directly. It's specifically for injecting styles before DOM mutations, primarily intended for CSS-in-JS library authors."
      },
      {
        id: "hooks-35-c",
        text: "To add event listeners to the document",
        isCorrect: false,
        explanation: "Adding event listeners would typically be done with useEffect, not useInsertionEffect. useInsertionEffect is specifically for style injection before DOM mutations."
      },
      {
        id: "hooks-35-d",
        text: "To optimize the insertion of components into the React tree",
        isCorrect: false,
        explanation: "useInsertionEffect doesn't optimize component insertion into the React tree. It's specifically for injecting styles before DOM mutations."
      }
    ],
    explanation: {
      correct: "Correct! useInsertionEffect is designed for CSS-in-JS libraries to inject styles before any DOM mutations. It runs before all DOM mutations and other effects, making it ideal for style injection.",
      incorrect: "useInsertionEffect is specifically for injecting styles before DOM mutations. It's not for inserting DOM elements, adding event listeners, or optimizing component insertion.",
      detailed: "Introduced in React 18, useInsertionEffect is a specialized hook intended primarily for CSS-in-JS library authors. It runs after the DOM is mutated but before layout effects read the new layout. This timing is perfect for injecting styles because it ensures that style elements are in place before any measurements happen in useLayoutEffect. Most application code should use useEffect or useLayoutEffect instead. The signature is identical to useEffect, but it fires synchronously before all DOM mutations: useInsertionEffect(() => { // Inject styles here return () => { // Clean up styles }; }, [deps]);"
    }
  },
  {
    id: "hooks-36",
    level: 1,
    topic: "hooks",
    question: "What is the difference between the useState and useReducer hooks?",
    multipleCorrect: true,
    options: [
      {
        id: "hooks-36-a",
        text: "useReducer is better for complex state logic",
        isCorrect: true,
        explanation: "useReducer is more suitable for managing complex state logic, especially when state transitions depend on previous state or when multiple sub-values are related."
      },
      {
        id: "hooks-36-b",
        text: "useState is simpler and sufficient for basic state management",
        isCorrect: true,
        explanation: "useState provides a simpler API that's sufficient for managing independent pieces of state that don't involve complex logic."
      },
      {
        id: "hooks-36-c",
        text: "useReducer centralizes state update logic in a reducer function",
        isCorrect: true,
        explanation: "With useReducer, all state update logic is centralized in a reducer function, making it easier to test and reason about complex state transitions."
      },
      {
        id: "hooks-36-d",
        text: "useState is faster than useReducer",
        isCorrect: false,
        explanation: "There's no significant performance difference between useState and useReducer. The choice between them should be based on the complexity of your state logic, not performance considerations."
      },
      {
        id: "hooks-36-e",
        text: "useReducer can only be used in class components",
        isCorrect: false,
        explanation: "This is incorrect. Like all hooks, useReducer can only be used in functional components, not class components."
      }
    ],
    explanation: {
      correct: "Correct! useReducer is better for complex state logic, useState is simpler for basic state management, and useReducer centralizes state update logic in a reducer function.",
      incorrect: "The key differences are that useReducer is better for complex state logic, useState is simpler for basic state, and useReducer centralizes update logic. There's no significant performance difference, and useReducer can only be used in functional components, not class components.",
      detailed: "useState and useReducer are both hooks for managing state in functional components, but they have different use cases. useState is simpler and good for independent pieces of state: const [count, setCount] = useState(0). useReducer is more powerful and better for complex state logic: const [state, dispatch] = useReducer(reducer, initialState). With useReducer, you dispatch actions that describe what happened, and the reducer function determines how the state should change in response. This pattern, inspired by Redux, makes it easier to manage complex state transitions, handle related state values, and test state logic independently from components."
    }
  },
  
  // JAVASCRIPT (42 questions)
  {
    id: "javascript-1",
    level: 1,
    topic: "javascript",
    question: "What is the spread operator in JavaScript and how is it used in React?",
    multipleCorrect: true,
    options: [
      {
        id: "javascript-1-a",
        text: "It allows an iterable to be expanded in places where zero or more arguments/elements are expected",
        isCorrect: true,
        explanation: "The spread operator (...) expands an iterable (like an array) into individual elements, which can be used in function calls, array literals, and object literals."
      },
      {
        id: "javascript-1-b",
        text: "In React, it's commonly used to copy objects when updating state immutably",
        isCorrect: true,
        explanation: "The spread operator is frequently used in React to create copies of objects when updating state, ensuring immutability by not modifying the original object."
      },
      {
        id: "javascript-1-c",
        text: "It's used to pass all properties from one component to another",
        isCorrect: true,
        explanation: "The spread operator can be used to pass all properties from one object to a component, as in <Component {...props} />, which is a common pattern in React."
      },
      {
        id: "javascript-1-d",
        text: "It's used to compress data before sending it to an API",
        isCorrect: false,
        explanation: "The spread operator doesn't compress data. It's used for expanding iterables or copying properties, not for data compression."
      },
      {
        id: "javascript-1-e",
        text: "It's a React-specific feature not available in regular JavaScript",
        isCorrect: false,
        explanation: "The spread operator is a JavaScript feature (introduced in ES6), not a React-specific feature. React simply makes use of this JavaScript feature."
      }
    ],
    explanation: {
      correct: "Correct! The spread operator expands iterables into individual elements, is used in React to copy objects when updating state immutably, and can pass all properties from one component to another.",
      incorrect: "The spread operator expands iterables, helps with immutable state updates, and passes properties between components. It doesn't compress data and isn't React-specific—it's a standard JavaScript feature.",
      detailed: "In JavaScript, the spread operator (...) has multiple uses: 1) Array spreading: const newArray = [...oldArray, newItem]; 2) Object spreading: const newObj = {...oldObj, newProp: value}; 3) Function arguments: myFunction(...args);. In React, it's particularly useful for: 1) Immutable state updates: setState(prevState => ({...prevState, prop: newValue})); 2) Prop spreading: <Component {...props} />; 3) Array manipulation in state: setItems([...items, newItem]);. The spread operator helps maintain immutability, which is important in React for performance optimization and predictable behavior."
    }
  },
  {
    id: "javascript-2",
    level: 1,
    topic: "javascript",
    question: "What is destructuring in JavaScript and how is it used in React?",
    multipleCorrect: true,
    options: [
      {
        id: "javascript-2-a",
        text: "It allows you to extract values from objects or arrays into distinct variables",
        isCorrect: true,
        explanation: "Destructuring is a JavaScript feature that lets you extract values from objects or arrays and assign them to distinct variables in a concise syntax."
      },
      {
        id: "javascript-2-b",
        text: "In React, it's commonly used to extract specific props in function components",
        isCorrect: true,
        explanation: "Function components often use destructuring in their parameter list to extract specific props, making the code more readable and concise."
      },
      {
        id: "javascript-2-c",
        text: "It can be used with the useState hook to extract state and setter function",
        isCorrect: true,
        explanation: "The useState hook returns an array that is commonly destructured to extract the state value and its setter function: const [count, setCount] = useState(0)."
      },
      {
        id: "javascript-2-d",
        text: "It's used to break down components into smaller pieces",
        isCorrect: false,
        explanation: "Destructuring doesn't break down components. It's a syntax for extracting values from objects or arrays, not for component composition or refactoring."
      },
      {
        id: "javascript-2-e",
        text: "It's a React-specific feature not available in regular JavaScript",
        isCorrect: false,
        explanation: "Destructuring is a JavaScript feature (introduced in ES6), not a React-specific feature. React simply makes use of this JavaScript feature."
      }
    ],
    explanation: {
      correct: "Correct! Destructuring allows extracting values from objects or arrays into distinct variables, is used in React to extract specific props in function components, and is used with hooks like useState to extract values and setters.",
      incorrect: "Destructuring extracts values from objects/arrays, helps extract props in components, and works with hooks like useState. It doesn't break down components and isn't React-specific—it's a standard JavaScript feature.",
      detailed: "Destructuring in JavaScript comes in two forms: 1) Object destructuring: const { name, age } = person; 2) Array destructuring: const [first, second] = array;. In React, it's used extensively: 1) Function components: function Profile({ name, age }) {...}; 2) Hooks: const [count, setCount] = useState(0); 3) In render methods: const { props, state } = this;. Destructuring makes code more readable by clearly indicating which properties or values are being used, and it reduces repetition by avoiding the need to reference the parent object multiple times."
    }
  },
  {
    id: "javascript-3",
    level: 1,
    topic: "javascript",
    question: "What are arrow functions in JavaScript and how are they used in React?",
    multipleCorrect: true,
    options: [
      {
        id: "javascript-3-a",
        text: "They provide a more concise syntax for writing functions",
        isCorrect: true,
        explanation: "Arrow functions offer a shorter syntax compared to traditional function expressions, making code more concise and readable."
      },
      {
        id: "javascript-3-b",
        text: "They don't have their own 'this' binding",
        isCorrect: true,
        explanation: "Arrow functions don't have their own 'this' context. Instead, they inherit 'this' from the enclosing scope, which can be useful in React components."
      },
      {
        id: "javascript-3-c",
        text: "In React, they're commonly used for event handlers and callback functions",
        isCorrect: true,
        explanation: "Arrow functions are frequently used in React for defining event handlers and callback functions, as they help avoid issues with 'this' binding."
      },
      {
        id: "javascript-3-d",
        text: "They automatically bind 'this' to the React component instance",
        isCorrect: false,
        explanation: "Arrow functions don't automatically bind 'this' to the React component instance. They inherit 'this' from the enclosing scope, which happens to be the component instance when defined within a component method."
      },
      {
        id: "javascript-3-e",
        text: "They're required for functional components in React",
        isCorrect: false,
        explanation: "While arrow functions are commonly used for functional components, they're not required. Regular function declarations or expressions can also be used to define functional components."
      }
    ],
    explanation: {
      correct: "Correct! Arrow functions provide a more concise syntax, don't have their own 'this' binding, and are commonly used in React for event handlers and callback functions.",
      incorrect: "Arrow functions offer concise syntax, lack their own 'this' binding, and are used for event handlers in React. They don't automatically bind 'this' to component instances (they inherit it), and aren't required for functional components.",
      detailed: "Arrow functions were introduced in ES6 and have several key characteristics: 1) Shorter syntax: (params) => expression or (params) => { statements }; 2) No 'this' binding: they inherit 'this' from the enclosing scope; 3) No arguments object; 4) Can't be used as constructors. In React, they're particularly useful for: 1) Defining event handlers without binding: onClick={() => this.handleClick()}; 2) Creating functional components: const MyComponent = (props) => <div>{props.text}</div>; 3) Defining callback functions in methods: this.props.items.map(item => <li>{item}</li>). The 'this' behavior is especially helpful in class components, where traditional functions would lose the component context."
    }
  },
  {
    id: "javascript-4",
    level: 1,
    topic: "javascript",
    question: "What is the difference between 'let', 'const', and 'var' in JavaScript?",
    multipleCorrect: true,
    options: [
      {
        id: "javascript-4-a",
        text: "'let' and 'const' have block scope, while 'var' has function scope",
        isCorrect: true,
        explanation: "Variables declared with 'let' and 'const' are limited to the block (enclosed by {}) in which they are defined, while 'var' variables are scoped to the function or globally if declared outside a function."
      },
      {
        id: "javascript-4-b",
        text: "'const' variables cannot be reassigned after initialization",
        isCorrect: true,
        explanation: "Once a 'const' variable is assigned a value, that value cannot be reassigned. However, if the value is an object or array, its properties or elements can still be modified."
      },
      {
        id: "javascript-4-c",
        text: "'let' variables can be reassigned but not redeclared in the same scope",
        isCorrect: true,
        explanation: "Variables declared with 'let' can be reassigned new values, but they cannot be redeclared in the same scope, unlike 'var' variables."
      },
      {
        id: "javascript-4-d",
        text: "'var' variables are hoisted with their value",
        isCorrect: false,
        explanation: "While 'var' declarations are hoisted, their initializations are not. They are hoisted with an initial value of undefined, not with their assigned value."
      },
      {
        id: "javascript-4-e",
        text: "'const' prevents any changes to the variable's value",
        isCorrect: false,
        explanation: "'const' prevents reassignment of the variable, but if the variable holds an object or array, the object's properties or array's elements can still be modified. It doesn't make the value immutable."
      }
    ],
    explanation: {
      correct: "Correct! 'let' and 'const' have block scope while 'var' has function scope, 'const' variables cannot be reassigned, and 'let' variables can be reassigned but not redeclared in the same scope.",
      incorrect: "The key differences are: 'let'/'const' have block scope vs 'var's function scope, 'const' prevents reassignment (not all changes), and 'let' allows reassignment but not redeclaration. 'var' declarations (not values) are hoisted.",
      detailed: "In modern JavaScript and React: 1) 'const' is preferred for values that shouldn't be reassigned, like component imports, most hooks, and configuration objects; 2) 'let' is used for variables that need reassignment, like counters or accumulated values; 3) 'var' is generally avoided due to its function scope and hoisting behavior, which can lead to unexpected bugs. Block scoping with 'let' and 'const' helps prevent issues like variable leakage and makes code more predictable. In React components, you'll typically see 'const' used for component definitions, hooks, and most variables, with 'let' reserved for specific cases where reassignment is needed."
    }
  },
  {
    id: "javascript-5",
    level: 1,
    topic: "javascript",
    question: "What is a Promise in JavaScript and how is it used in React?",
    multipleCorrect: true,
    options: [
      {
        id: "javascript-5-a",
        text: "It's an object representing the eventual completion or failure of an asynchronous operation",
        isCorrect: true,
        explanation: "A Promise is an object that represents an asynchronous operation that will eventually complete (resolve) or fail (reject), allowing you to handle the result or error when it's available."
      },
      {
        id: "javascript-5-b",
        text: "In React, Promises are commonly used for data fetching in useEffect",
        isCorrect: true,
        explanation: "Promises are frequently used in React's useEffect hook for data fetching operations, allowing components to handle asynchronous data loading."
      },
      {
        id: "javascript-5-c",
        text: "Promises can be chained with .then() and .catch() for handling success and error cases",
        isCorrect: true,
        explanation: "Promises provide .then() for handling successful completion and .catch() for handling errors, allowing for clean handling of asynchronous operations."
      },
      {
        id: "javascript-5-d",
        text: "Promises are a React-specific feature for handling component lifecycle",
        isCorrect: false,
        explanation: "Promises are a JavaScript feature, not React-specific. They're used for asynchronous operations in general, not specifically for component lifecycle management."
      },
      {
        id: "javascript-5-e",
        text: "Promises automatically update component state when resolved",
        isCorrect: false,
        explanation: "Promises don't automatically update component state. You need to explicitly call a state setter function within the Promise's .then() handler to update state."
      }
    ],
    explanation: {
      correct: "Correct! Promises represent eventual completion/failure of async operations, are used for data fetching in useEffect, and can be chained with .then() and .catch() for handling success and error cases.",
      incorrect: "Promises represent async operations, are used in useEffect for data fetching, and use .then()/.catch() for handling results. They're not React-specific and don't automatically update state.",
      detailed: "Promises provide a cleaner way to handle asynchronous operations compared to callbacks. In React, they're commonly used for: 1) Data fetching: useEffect(() => { fetch('/api/data').then(res => res.json()).then(data => setState(data)).catch(error => setError(error)); }, []); 2) Event handlers: const handleSubmit = () => { saveData().then(() => setStatus('saved')).catch(err => setError(err)); }; 3) Async initialization: useEffect(() => { initializeAsync().then(result => setReady(true)); }, []); Modern JavaScript also provides async/await syntax, which makes working with Promises even cleaner: useEffect(() => { const fetchData = async () => { try { const response = await fetch('/api/data'); const data = await response.json(); setData(data); } catch (error) { setError(error); } }; fetchData(); }, []);"
    }
  },
  {
    id: "javascript-6",
    level: 1,
    topic: "javascript",
    question: "What are async/await keywords in JavaScript and how are they used in React?",
    multipleCorrect: true,
    options: [
      {
        id: "javascript-6-a",
        text: "They provide syntactic sugar over Promises, making asynchronous code look more like synchronous code",
        isCorrect: true,
        explanation: "async/await is syntactic sugar built on top of Promises, allowing asynchronous code to be written in a way that looks like synchronous code, which is often more readable and easier to reason about."
      },
      {
        id: "javascript-6-b",
        text: "In React, they're commonly used in useEffect hooks and event handlers for data fetching",
        isCorrect: true,
        explanation: "async/await is frequently used in React's useEffect hooks and event handlers to handle asynchronous operations like data fetching in a cleaner, more readable way."
      },
      {
        id: "javascript-6-c",
        text: "The 'async' keyword is used to define a function that returns a Promise",
        isCorrect: true,
        explanation: "Functions declared with the 'async' keyword automatically return a Promise, even if you don't explicitly return one. The Promise resolves with the function's return value."
      },
      {
        id: "javascript-6-d",
        text: "The 'await' keyword can be used anywhere in JavaScript code",
        isCorrect: false,
        explanation: "The 'await' keyword can only be used inside functions declared with the 'async' keyword. It cannot be used at the top level of a module or in regular functions."
      },
      {
        id: "javascript-6-e",
        text: "React components can be declared with the 'async' keyword",
        isCorrect: false,
        explanation: "React components (both functional and class components) cannot be declared with the 'async' keyword because they must return JSX or null, not a Promise. Async operations must be handled inside hooks or methods."
      }
    ],
    explanation: {
      correct: "Correct! async/await provides syntactic sugar over Promises, is used in React's useEffect and event handlers for data fetching, and 'async' defines functions that return Promises.",
      incorrect: "async/await is syntactic sugar for Promises and is used in React for data fetching. 'async' functions return Promises, but 'await' can only be used in async functions, and React components cannot be declared as async.",
      detailed: "async/await was introduced in ES2017 and provides a more readable way to work with Promises. In React: 1) Data fetching in useEffect: useEffect(() => { const fetchData = async () => { try { const response = await fetch('/api/data'); const data = await response.json(); setData(data); } catch (error) { setError(error); } }; fetchData(); }, []); 2) Event handlers: const handleSubmit = async () => { try { await saveData(); setStatus('saved'); } catch (err) { setError(err); } }; Note that the effect callback itself cannot be async (useEffect(() => {...})) because effect functions are expected to either return nothing or a cleanup function, not a Promise. Instead, define an async function inside the effect and then call it."
    }
  },
  {
    id: "javascript-7",
    level: 1,
    topic: "javascript",
    question: "What is the difference between map(), filter(), and reduce() array methods in JavaScript?",
    multipleCorrect: true,
    options: [
      {
        id: "javascript-7-a",
        text: "map() creates a new array by transforming each element in the original array",
        isCorrect: true,
        explanation: "map() applies a function to each element in an array and returns a new array containing the results, without modifying the original array."
      },
      {
        id: "javascript-7-b",
        text: "filter() creates a new array containing only elements that pass a test function",
        isCorrect: true,
        explanation: "filter() tests each element in an array against a function and returns a new array with only the elements that pass the test, without modifying the original array."
      },
      {
        id: "javascript-7-c",
        text: "reduce() combines all elements in an array into a single value",
        isCorrect: true,
        explanation: "reduce() applies a function against an accumulator and each element in the array to reduce it to a single value, which could be a number, string, object, or even another array."
      },
      {
        id: "javascript-7-d",
        text: "map() modifies the original array in place",
        isCorrect: false,
        explanation: "map() does not modify the original array. It creates and returns a new array with the transformed elements, leaving the original array unchanged."
      },
      {
        id: "javascript-7-e",
        text: "filter() removes elements from the original array",
        isCorrect: false,
        explanation: "filter() does not modify the original array. It creates and returns a new array with the filtered elements, leaving the original array unchanged."
      }
    ],
    explanation: {
      correct: "Correct! map() transforms elements into a new array, filter() creates a new array with elements that pass a test, and reduce() combines all elements into a single value.",
      incorrect: "map() transforms elements into a new array, filter() creates a new array with elements that pass a test, and reduce() combines elements into a single value. Neither map() nor filter() modifies the original array.",
      detailed: "These array methods are commonly used in React for data transformation: 1) map(): Used for rendering lists of components: {items.map(item => <ListItem key={item.id} {...item} />)}; 2) filter(): Used for filtering data before rendering: {items.filter(item => item.isActive).map(item => <ListItem key={item.id} {...item} />)}; 3) reduce(): Used for more complex data transformations, like grouping or calculating totals: const total = items.reduce((sum, item) => sum + item.price, 0);. All three methods are immutable operations, returning new arrays or values without modifying the original array, which aligns well with React's immutable data patterns."
    }
  },
  {
    id: "javascript-8",
    level: 1,
    topic: "javascript",
    question: "What is object and array destructuring in JavaScript and how is it used in React?",
    multipleCorrect: true,
    options: [
      {
        id: "javascript-8-a",
        text: "Object destructuring extracts properties from objects into variables",
        isCorrect: true,
        explanation: "Object destructuring allows you to extract multiple properties from an object and assign them to variables in a single statement, using syntax like const { name, age } = person;"
      },
      {
        id: "javascript-8-b",
        text: "Array destructuring extracts elements from arrays into variables",
        isCorrect: true,
        explanation: "Array destructuring allows you to extract elements from an array and assign them to variables in a single statement, using syntax like const [first, second] = array;"
      },
      {
        id: "javascript-8-c",
        text: "In React, destructuring is commonly used to extract props in functional components",
        isCorrect: true,
        explanation: "Functional components often use destructuring in their parameter list to extract specific props, making the code more readable and concise, as in function Profile({ name, age }) {...}"
      },
      {
        id: "javascript-8-d",
        text: "Destructuring modifies the original object or array",
        isCorrect: false,
        explanation: "Destructuring does not modify the original object or array. It simply creates new variables that reference the values from the original object or array."
      },
      {
        id: "javascript-8-e",
        text: "Destructuring is a React-specific feature",
        isCorrect: false,
        explanation: "Destructuring is a JavaScript feature (introduced in ES6), not a React-specific feature. React simply makes use of this JavaScript feature."
      }
    ],
    explanation: {
      correct: "Correct! Object destructuring extracts properties from objects, array destructuring extracts elements from arrays, and in React, destructuring is commonly used to extract props in functional components.",
      incorrect: "Object and array destructuring extract properties and elements into variables, and are used in React for props extraction. Destructuring doesn't modify the original data structures and isn't React-specific—it's a standard JavaScript feature.",
      detailed: "Destructuring is extensively used in React: 1) Function components: function Profile({ name, age, isActive = false }) {...} (with default value); 2) Hooks: const [count, setCount] = useState(0); 3) Props with rest operator: function Profile({ name, age, ...restProps }) { return <div {...restProps}>...</div>; }; 4) Nested destructuring: function Profile({ user: { name, address: { city } } }) {...}; 5) Aliasing: const { name: userName, age: userAge } = user;. Destructuring makes code more concise and readable by clearly indicating which properties or values are being used, and reduces repetition by avoiding the need to reference the parent object multiple times."
    }
  },
  {
    id: "javascript-9",
    level: 1,
    topic: "javascript",
    question: "What is the rest operator (...) in JavaScript and how is it used in React?",
    multipleCorrect: true,
    options: [
      {
        id: "javascript-9-a",
        text: "It collects multiple elements into an array or object",
        isCorrect: true,
        explanation: "The rest operator collects remaining elements into a single array or remaining properties into a single object, allowing you to represent multiple items as a single variable."
      },
      {
        id: "javascript-9-b",
        text: "In function parameters, it collects remaining arguments into an array",
        isCorrect: true,
        explanation: "When used in function parameters, the rest operator collects all remaining arguments into a single array, allowing functions to accept a variable number of arguments."
      },
      {
        id: "javascript-9-c",
        text: "In React, it's used to collect remaining props that weren't explicitly destructured",
        isCorrect: true,
        explanation: "In React components, the rest operator is often used to collect props that weren't explicitly destructured, which can then be passed down to child components."
      },
      {
        id: "javascript-9-d",
        text: "It's the same as the spread operator but used in different contexts",
        isCorrect: true,
        explanation: "The rest and spread operators use the same syntax (...) but serve opposite purposes. Rest collects multiple items into one, while spread expands one item into many."
      },
      {
        id: "javascript-9-e",
        text: "It's used to compress data before sending it to an API",
        isCorrect: false,
        explanation: "The rest operator doesn't compress data. It's used for collecting multiple elements or properties into a single variable, not for data compression."
      }
    ],
    explanation: {
      correct: "Correct! The rest operator collects multiple elements/properties into a single variable, collects remaining function arguments into an array, is used in React to collect remaining props, and uses the same syntax as the spread operator but in different contexts.",
      incorrect: "The rest operator collects multiple items into one variable, handles remaining function arguments, and collects remaining props in React. It shares syntax with the spread operator but serves an opposite purpose. It doesn't compress data.",
      detailed: "The rest operator has several uses in JavaScript and React: 1) Function parameters: function sum(...numbers) { return numbers.reduce((total, num) => total + num, 0); }; 2) Array destructuring: const [first, ...rest] = [1, 2, 3, 4]; // rest is [2, 3, 4]; 3) Object destructuring: const { name, ...otherProps } = user; // otherProps contains all properties except name; 4) In React components: function Button({ children, ...otherProps }) { return <button {...otherProps}>{children}</button>; }. This last example demonstrates a common pattern in React where specific props are extracted for use in the current component, and all other props are passed down to a child component."
    }
  },
  {
    id: "javascript-10",
    level: 1,
    topic: "javascript",
    question: "What are template literals in JavaScript and how are they used in React?",
    multipleCorrect: true,
    options: [
      {
        id: "javascript-10-a",
        text: "They allow embedding expressions inside string literals using ${expression} syntax",
        isCorrect: true,
        explanation: "Template literals allow you to embed expressions inside strings using ${expression} syntax, making string concatenation and interpolation more readable."
      },
      {
        id: "javascript-10-b",
        text: "They are defined using backticks (`) instead of single or double quotes",
        isCorrect: true,
        explanation: "Template literals are enclosed by backticks (`) rather than single or double quotes, which distinguishes them from regular string literals."
      },
      {
        id: "javascript-10-c",
        text: "In React, they're commonly used for dynamic className construction and inline styles",
        isCorrect: true,
        explanation: "Template literals are often used in React to dynamically construct className strings or inline style objects based on component props or state."
      },
      {
        id: "javascript-10-d",
        text: "They automatically escape HTML to prevent XSS attacks",
        isCorrect: false,
        explanation: "Template literals don't automatically escape HTML. In React, JSX handles escaping of content to prevent XSS attacks, but template literals themselves don't provide this security feature."
      },
      {
        id: "javascript-10-e",
        text: "They're a React-specific feature for rendering JSX",
        isCorrect: false,
        explanation: "Template literals are a JavaScript feature (introduced in ES6), not a React-specific feature. They're used for string interpolation in JavaScript generally, not specifically for JSX rendering."
      }
    ],
    explanation: {
      correct: "Correct! Template literals allow embedding expressions in strings using ${expression} syntax, are defined with backticks, and are commonly used in React for dynamic className construction and inline styles.",
      incorrect: "Template literals use ${expression} syntax in backtick-enclosed strings and are used in React for dynamic strings. They don't automatically escape HTML and aren't React-specific—they're a standard JavaScript feature.",
      detailed: "Template literals provide several advantages over traditional string concatenation: 1) Expression interpolation: `Hello, ${name}!`; 2) Multi-line strings without escape characters: `This is\na multi-line\nstring`; 3) Nested templates: `User: ${user.name} (${user.isAdmin ? `Admin` : `Regular`})`; 4) Tagged templates (advanced): myTag`Hello ${name}`. In React, they're commonly used for: 1) Dynamic class names: className={`btn ${isActive ? 'btn-active' : ''}`}; 2) Style interpolation: style={{ margin: `${spacing}px` }}; 3) Constructing URLs: fetch(`/api/users/${userId}`); 4) Creating complex text content: <p>{`Welcome, ${firstName} ${lastName}!`}</p>."
    }
  },
  {
    id: "javascript-11",
    level: 1,
    topic: "javascript",
    question: "What are default parameters in JavaScript functions and how are they used in React?",
    multipleCorrect: true,
    options: [
      {
        id: "javascript-11-a",
        text: "They provide default values for function parameters if no value or undefined is passed",
        isCorrect: true,
        explanation: "Default parameters allow you to specify default values for function parameters that will be used if the parameter is not provided or is explicitly undefined."
      },
      {
        id: "javascript-11-b",
        text: "They're defined using the equals sign in the parameter list: function(param = defaultValue)",
        isCorrect: true,
        explanation: "Default parameters are specified in the function declaration by using the equals sign after the parameter name, followed by the default value."
      },
      {
        id: "javascript-11-c",
        text: "In React, they're commonly used to provide default prop values in functional components",
        isCorrect: true,
        explanation: "In React functional components, default parameters are often used to provide default values for props, simplifying the component code."
      },
      {
        id: "javascript-11-d",
        text: "They override values provided by the defaultProps object in React",
        isCorrect: false,
        explanation: "Default parameters don't override defaultProps. In fact, defaultProps are applied before the component is called, so default parameters would only apply if the prop is still undefined after defaultProps is applied."
      },
      {
        id: "javascript-11-e",
        text: "They're evaluated every time the function is called, even if the parameter is provided",
        isCorrect: false,
        explanation: "Default parameters are only evaluated if the parameter is not provided or is explicitly undefined. If a value is provided for the parameter, the default value is not evaluated."
      }
    ],
    explanation: {
      correct: "Correct! Default parameters provide values when none are passed, are defined using the equals sign in the parameter list, and are commonly used in React for default prop values in functional components.",
      incorrect: "Default parameters provide values when none are passed and are defined with equals signs in parameter lists. In React, they're used for default prop values. They don't override defaultProps and are only evaluated when needed.",
      detailed: "Default parameters were introduced in ES6 and provide a cleaner way to handle default values: function greet(name = 'Guest') { return `Hello, ${name}!`; }. In React functional components, they're commonly used for default prop values: function Button({ type = 'button', children, onClick }) { return <button type={type} onClick={onClick}>{children}</button>; }. This is an alternative to using defaultProps: Button.defaultProps = { type: 'button' };. Default parameters can also reference earlier parameters: function createUser(name, role = 'user', permissions = getDefaultPermissions(role)) {...}. Note that null and false are considered valid values and won't trigger the default value, but undefined will."
    }
  },
  {
    id: "javascript-12",
    level: 1,
    topic: "javascript",
    question: "What are shorthand property names in JavaScript objects and how are they used in React?",
    multipleCorrect: true,
    options: [
      {
        id: "javascript-12-a",
        text: "They allow you to use a variable name as both the property name and value",
        isCorrect: true,
        explanation: "Shorthand property names let you write {name} instead of {name: name} when the property name and variable name are the same, making object creation more concise."
      },
      {
        id: "javascript-12-b",
        text: "They're defined by omitting the value in an object literal: { variableName }",
        isCorrect: true,
        explanation: "The shorthand syntax omits the colon and value, using just the variable name in curly braces: { variableName } instead of { variableName: variableName }."
      },
      {
        id: "javascript-12-c",
        text: "In React, they're commonly used when setting state or passing props",
        isCorrect: true,
        explanation: "In React, shorthand property names are frequently used when updating state or passing props, especially when the prop name matches a variable name in the current scope."
      },
      {
        id: "javascript-12-d",
        text: "They automatically convert property values to strings",
        isCorrect: false,
        explanation: "Shorthand property names don't change the type of the value. They simply use the variable's current value, whatever type it may be."
      },
      {
        id: "javascript-12-e",
        text: "They're a React-specific feature for JSX props",
        isCorrect: false,
        explanation: "Shorthand property names are a JavaScript feature (introduced in ES6), not a React-specific feature. They can be used in any JavaScript object literal, not just in JSX props."
      }
    ],
    explanation: {
      correct: "Correct! Shorthand property names use a variable name as both property name and value, are defined by omitting the value in object literals, and are commonly used in React for state updates and props.",
      incorrect: "Shorthand property names use variables as property names and values, omitting the colon and value in object literals. They're used in React for state/props. They don't convert values to strings and aren't React-specific.",
      detailed: "Shorthand property names were introduced in ES6 and are widely used in modern JavaScript and React: 1) Basic usage: const name = 'John'; const user = { name }; // Same as { name: name }; 2) Multiple properties: const user = { name, age, email }; 3) Mixed with regular properties: const user = { name, age, role: 'admin' }; 4) In React state updates: setState({ loading, error, data }); 5) In React props: <UserProfile name={name} age={age} />. This syntax is particularly useful in React when passing state variables as props with the same name, or when updating state with values from variables that match the state property names."
    }
  },
  {
    id: "javascript-13",
    level: 1,
    topic: "javascript",
    question: "What are computed property names in JavaScript objects and how are they used in React?",
    multipleCorrect: true,
    options: [
      {
        id: "javascript-13-a",
        text: "They allow you to use expressions as property names in object literals",
        isCorrect: true,
        explanation: "Computed property names let you use the result of an expression as a property name in an object literal, enclosed in square brackets: { [expression]: value }."
      },
      {
        id: "javascript-13-b",
        text: "They're defined using square brackets in an object literal: { [expression]: value }",
        isCorrect: true,
        explanation: "Computed property names are specified by wrapping an expression in square brackets within an object literal, allowing dynamic property names."
      },
      {
        id: "javascript-13-c",
        text: "In React, they're commonly used for dynamic state updates based on user input",
        isCorrect: true,
        explanation: "In React, computed property names are often used in event handlers to dynamically update state properties based on input field names or other dynamic values."
      },
      {
        id: "javascript-13-d",
        text: "They automatically convert the expression result to a string property name",
        isCorrect: true,
        explanation: "The result of the expression in computed property names is automatically converted to a string to be used as the property name, following JavaScript's object property name rules."
      },
      {
        id: "javascript-13-e",
        text: "They can only be used with numeric property names",
        isCorrect: false,
        explanation: "Computed property names can use any expression that evaluates to a valid property name, not just numeric expressions. This includes strings, variables, function calls, and other expressions."
      }
    ],
    explanation: {
      correct: "Correct! Computed property names allow expressions as property names, use square bracket syntax, are used in React for dynamic state updates, and automatically convert results to strings.",
      incorrect: "Computed property names use expressions as property names with square bracket syntax and are used in React for dynamic updates. They convert results to strings and can use any valid expression, not just numeric ones.",
      detailed: "Computed property names were introduced in ES6 and provide flexibility for dynamic object creation: 1) Using variables: const propName = 'age'; const user = { [propName]: 30 }; // { age: 30 }; 2) Using expressions: const user = { [`user_${id}`]: name }; 3) In React event handlers: const handleChange = (e) => { setState({ ...state, [e.target.name]: e.target.value }); }; 4) Dynamic keys in reducers: case UPDATE_FIELD: return { ...state, [action.fieldName]: action.value }; This feature is particularly useful in React for form handling, where input elements often have name attributes that correspond to state properties, allowing for generic change handlers that work with multiple fields."
    }
  },
  {
    id: "javascript-14",
    level: 1,
    topic: "javascript",
    question: "What is the optional chaining operator (?.) in JavaScript and how is it used in React?",
    multipleCorrect: true,
    options: [
      {
        id: "javascript-14-a",
        text: "It allows reading properties from nested objects without checking if each reference is valid",
        isCorrect: true,
        explanation: "Optional chaining lets you access deeply nested object properties without having to explicitly check if each reference in the chain is valid, preventing errors when a reference is null or undefined."
      },
      {
        id: "javascript-14-b",
        text: "It returns undefined if any part of the chain is null or undefined, instead of throwing an error",
        isCorrect: true,
        explanation: "When using optional chaining, if any reference in the chain is null or undefined, the expression short-circuits and returns undefined instead of throwing a TypeError."
      },
      {
        id: "javascript-14-c",
        text: "In React, it's commonly used when accessing nested props or state that might not exist",
        isCorrect: true,
        explanation: "In React, optional chaining is frequently used when accessing potentially undefined nested properties in props, state, or API responses, making the code more robust."
      },
      {
        id: "javascript-14-d",
        text: "It automatically assigns default values if a property doesn't exist",
        isCorrect: false,
        explanation: "Optional chaining doesn't assign default values; it simply returns undefined if a reference is null or undefined. For default values, you would use the nullish coalescing operator (??) or logical OR (||)."
      },
      {
        id: "javascript-14-e",
        text: "It's a React-specific feature for handling props",
        isCorrect: false,
        explanation: "Optional chaining is a JavaScript feature (introduced in ES2020), not a React-specific feature. It can be used in any JavaScript code, not just in React."
      }
    ],
    explanation: {
      correct: "Correct! Optional chaining allows reading nested properties without validity checks, returns undefined instead of errors when references are null/undefined, and is used in React for accessing nested props or state.",
      incorrect: "Optional chaining safely accesses nested properties, returns undefined for invalid references, and is used in React for nested data. It doesn't assign default values and isn't React-specific—it's a standard JavaScript feature.",
      detailed: "Optional chaining simplifies working with nested data structures: 1) Basic usage: user?.address?.street instead of user && user.address && user.address.street; 2) With method calls: user?.getAddress?.(); 3) With array elements: users?.[0]?.name; 4) In React components: <div>{user?.profile?.bio || 'No bio available'}</div>; 5) Combined with nullish coalescing: const street = user?.address?.street ?? 'Unknown'; This operator is particularly valuable in React when working with data that may be incomplete or still loading, such as API responses or optional props. It greatly reduces the need for verbose conditional checks, making code more readable and less error-prone."
    }
  },
  {
    id: "javascript-15",
    level: 1,
    topic: "javascript",
    question: "What is the nullish coalescing operator (??) in JavaScript and how is it used in React?",
    multipleCorrect: true,
    options: [
      {
        id: "javascript-15-a",
        text: "It returns the right-hand operand when the left-hand operand is null or undefined",
        isCorrect: true,
        explanation: "The nullish coalescing operator returns the right-hand operand only when the left-hand operand is null or undefined, otherwise it returns the left-hand operand."
      },
      {
        id: "javascript-15-b",
        text: "It differs from the logical OR (||) operator by only checking for null or undefined, not all falsy values",
        isCorrect: true,
        explanation: "Unlike the logical OR operator (||) which returns the right-hand operand for any falsy value (0, '', false, NaN, null, undefined), the nullish coalescing operator only does so for null and undefined."
      },
      {
        id: "javascript-15-c",
        text: "In React, it's commonly used for providing default values for props or state",
        isCorrect: true,
        explanation: "In React, the nullish coalescing operator is often used to provide default values for props, state, or API data that might be null or undefined, while still allowing other falsy values."
      },
      {
        id: "javascript-15-d",
        text: "It automatically checks if properties exist in an object",
        isCorrect: false,
        explanation: "The nullish coalescing operator doesn't check if properties exist in an object. For that, you would need to access the property first, possibly using optional chaining (?.), and then apply the nullish coalescing operator."
      },
      {
        id: "javascript-15-e",
        text: "It's a React-specific feature for handling props",
        isCorrect: false,
        explanation: "The nullish coalescing operator is a JavaScript feature (introduced in ES2020), not a React-specific feature. It can be used in any JavaScript code, not just in React."
      }
    ],
    explanation: {
      correct: "Correct! The nullish coalescing operator returns the right operand when the left is null/undefined, differs from || by only checking for null/undefined, and is used in React for default values.",
      incorrect: "The nullish coalescing operator returns the right operand only for null/undefined (not all falsy values like ||) and is used for default values in React. It doesn't check if properties exist and isn't React-specific.",
      detailed: "The nullish coalescing operator provides a more precise way to handle default values: 1) Basic usage: const count = value ?? 0; // 0 if value is null/undefined, otherwise value; 2) Compared to ||: 0 || 'default' returns 'default' (because 0 is falsy), but 0 ?? 'default' returns 0 (because 0 is not null/undefined); 3) In React components: <span>{user.points ?? 'N/A'}</span>; 4) With optional chaining: const street = user?.address?.street ?? 'Unknown'; This operator is particularly useful in React when working with form inputs, API data, or props where falsy values like 0, empty string, or false are valid data that should be preserved, not replaced with defaults."
    }
  },
  {
    id: "javascript-16",
    level: 1,
    topic: "javascript",
    question: "What is the logical nullish assignment (??=) operator in JavaScript?",
    multipleCorrect: true,
    options: [
      {
        id: "javascript-16-a",
        text: "It assigns the right-hand value to the left-hand variable only if the left-hand is null or undefined",
        isCorrect: true,
        explanation: "The logical nullish assignment operator (??=) only assigns the right-hand value if the left-hand variable is currently null or undefined, otherwise it leaves the variable unchanged."
      },
      {
        id: "javascript-16-b",
        text: "It's a shorthand for x = x ?? y",
        isCorrect: true,
        explanation: "The expression x ??= y is equivalent to x = x ?? y, which means 'assign y to x only if x is null or undefined'."
      },
      {
        id: "javascript-16-c",
        text: "It can be used to initialize variables or object properties with default values",
        isCorrect: true,
        explanation: "The logical nullish assignment operator is useful for initializing variables or object properties with default values only if they're currently null or undefined."
      },
      {
        id: "javascript-16-d",
        text: "It always assigns the right-hand value regardless of the left-hand value",
        isCorrect: false,
        explanation: "The logical nullish assignment operator doesn't always assign the right-hand value. It only does so when the left-hand value is null or undefined, otherwise it leaves the left-hand value unchanged."
      },
      {
        id: "javascript-16-e",
        text: "It throws an error if the left-hand value is null or undefined",
        isCorrect: false,
        explanation: "The logical nullish assignment operator doesn't throw an error when the left-hand value is null or undefined. Instead, it specifically handles these cases by assigning the right-hand value."
      }
    ],
    explanation: {
      correct: "Correct! The logical nullish assignment operator assigns the right value only if the left is null/undefined, is shorthand for x = x ?? y, and can initialize variables or properties with default values.",
      incorrect: "The logical nullish assignment operator (??=) assigns the right value only when the left is null/undefined. It's shorthand for x = x ?? y and initializes default values. It doesn't always assign the right value or throw errors.",
      detailed: "The logical nullish assignment operator was introduced in ES2021 and provides a concise way to assign default values: 1) Basic usage: let user = null; user ??= { name: 'Guest' }; // user is now { name: 'Guest' }; 2) With existing values: let user = { name: 'John' }; user ??= { name: 'Guest' }; // user remains { name: 'John' }; 3) With object properties: options.timeout ??= 1000; // Sets timeout to 1000 if it's null/undefined; 4) In functions: function process(config) { config.retries ??= 3; config.timeout ??= 1000; }. This operator is particularly useful for initializing configuration objects or setting default values for optional parameters."
    }
  },
  {
    id: "javascript-17",
    level: 1,
    topic: "javascript",
    question: "What is the logical OR assignment (||=) operator in JavaScript?",
    multipleCorrect: true,
    options: [
      {
        id: "javascript-17-a",
        text: "It assigns the right-hand value to the left-hand variable only if the left-hand is falsy",
        isCorrect: true,
        explanation: "The logical OR assignment operator (||=) only assigns the right-hand value if the left-hand variable evaluates to a falsy value (false, 0, '', null, undefined, NaN), otherwise it leaves the variable unchanged."
      },
      {
        id: "javascript-17-b",
        text: "It's a shorthand for x = x || y",
        isCorrect: true,
        explanation: "The expression x ||= y is equivalent to x = x || y, which means 'assign y to x only if x is falsy'."
      },
      {
        id: "javascript-17-c",
        text: "It differs from ??= by checking for any falsy value, not just null or undefined",
        isCorrect: true,
        explanation: "Unlike the nullish assignment operator (??=) which only assigns for null or undefined, the logical OR assignment operator (||=) assigns for any falsy value including false, 0, and empty string."
      },
      {
        id: "javascript-17-d",
        text: "It always assigns the right-hand value regardless of the left-hand value",
        isCorrect: false,
        explanation: "The logical OR assignment operator doesn't always assign the right-hand value. It only does so when the left-hand value is falsy, otherwise it leaves the left-hand value unchanged."
      },
      {
        id: "javascript-17-e",
        text: "It's primarily used for error handling in try/catch blocks",
        isCorrect: false,
        explanation: "While the logical OR assignment operator can be used in various contexts, it's not specifically designed for or primarily used in error handling within try/catch blocks."
      }
    ],
    explanation: {
      correct: "Correct! The logical OR assignment operator assigns the right value only if the left is falsy, is shorthand for x = x || y, and differs from ??= by checking for any falsy value.",
      incorrect: "The logical OR assignment operator (||=) assigns the right value only when the left is falsy. It's shorthand for x = x || y and checks any falsy value (unlike ??=). It doesn't always assign the right value and isn't primarily for error handling.",
      detailed: "The logical OR assignment operator was introduced in ES2021 and is useful for providing default values: 1) Basic usage: let username = ''; username ||= 'Guest'; // username is now 'Guest'; 2) With truthy values: let username = 'John'; username ||= 'Guest'; // username remains 'John'; 3) With object properties: options.timeout ||= 1000; // Sets timeout to 1000 if it's falsy; 4) Caution with valid falsy values: count ||= 10; // This will override count even if it's legitimately 0. This operator is useful when you want to provide defaults for any missing or empty value, but can be problematic when legitimate falsy values (like 0 or false) should be preserved. In those cases, ??= is often more appropriate."
    }
  },
  {
    id: "javascript-18",
    level: 1,
    topic: "javascript",
    question: "What is the logical AND assignment (&&=) operator in JavaScript?",
    multipleCorrect: true,
    options: [
      {
        id: "javascript-18-a",
        text: "It assigns the right-hand value to the left-hand variable only if the left-hand is truthy",
        isCorrect: true,
        explanation: "The logical AND assignment operator (&&=) only assigns the right-hand value if the left-hand variable evaluates to a truthy value, otherwise it leaves the variable unchanged."
      },
      {
        id: "javascript-18-b",
        text: "It's a shorthand for x = x && y",
        isCorrect: true,
        explanation: "The expression x &&= y is equivalent to x = x && y, which means 'assign y to x only if x is truthy'."
      },
      {
        id: "javascript-18-c",
        text: "It can be used to conditionally update a variable only if it exists or is valid",
        isCorrect: true,
        explanation: "The logical AND assignment operator is useful for conditionally updating variables or object properties only if they already have truthy values, ensuring you don't update undefined or null values."
      },
      {
        id: "javascript-18-d",
        text: "It always assigns the right-hand value regardless of the left-hand value",
        isCorrect: false,
        explanation: "The logical AND assignment operator doesn't always assign the right-hand value. It only does so when the left-hand value is truthy, otherwise it leaves the left-hand value unchanged."
      },
      {
        id: "javascript-18-e",
        text: "It's primarily used for type checking in TypeScript",
        isCorrect: false,
        explanation: "The logical AND assignment operator isn't primarily used for type checking in TypeScript. It's a JavaScript operator for conditional assignment based on truthiness, not for type checking."
      }
    ],
    explanation: {
      correct: "Correct! The logical AND assignment operator assigns the right value only if the left is truthy, is shorthand for x = x && y, and can conditionally update variables only if they exist or are valid.",
      incorrect: "The logical AND assignment operator (&&=) assigns the right value only when the left is truthy. It's shorthand for x = x && y and conditionally updates existing values. It doesn't always assign the right value and isn't primarily for TypeScript type checking.",
      detailed: "The logical AND assignment operator was introduced in ES2021 and is useful for conditional updates: 1) Basic usage: let user = { name: 'John' }; user.name &&= user.name.toUpperCase(); // Updates name to uppercase if it exists; 2) With falsy values: let count = 0; count &&= 10; // count remains 0 because it's falsy; 3) Conditional function calls: element.onclick &&= handleClick; // Assigns handler only if element.onclick is truthy; 4) Safe property updates: user.settings &&= { ...user.settings, theme: 'dark' }; // Updates settings only if it exists. This operator is particularly useful for safely updating nested properties without checking if each level exists (though optional chaining is often better for access), or for conditionally applying transformations only to valid values."
    }
  },
  {
    id: "javascript-19",
    level: 1,
    topic: "javascript",
    question: "What is the difference between 'undefined' and 'null' in JavaScript?",
    multipleCorrect: true,
    options: [
      {
        id: "javascript-19-a",
        text: "'undefined' is the default value of uninitialized variables and missing object properties",
        isCorrect: true,
        explanation: "When a variable is declared but not assigned a value, or when an object property doesn't exist, JavaScript returns 'undefined' by default."
      },
      {
        id: "javascript-19-b",
        text: "'null' is an explicitly assigned value representing 'no value' or 'empty'",
        isCorrect: true,
        explanation: "'null' is a value that must be explicitly assigned by the programmer to indicate the intentional absence of any object value or to represent an empty value."
      },
      {
        id: "javascript-19-c",
        text: "typeof undefined returns 'undefined', while typeof null returns 'object'",
        isCorrect: true,
        explanation: "Due to a historical quirk in JavaScript, typeof null returns 'object', while typeof undefined correctly returns 'undefined'. This is considered a bug in the language but remains for backward compatibility."
      },
      {
        id: "javascript-19-d",
        text: "'undefined' and 'null' are exactly the same in JavaScript",
        isCorrect: false,
        explanation: "'undefined' and 'null' are distinct values in JavaScript with different meanings and behaviors, though they both represent the absence of a meaningful value."
      },
      {
        id: "javascript-19-e",
        text: "null == undefined is true, but null === undefined is false",
        isCorrect: true,
        explanation: "When using loose equality (==), null and undefined are considered equal to each other. However, with strict equality (===), they are considered different types and values."
      }
    ],
    explanation: {
      correct: "Correct! 'undefined' is the default value for uninitialized variables, 'null' is explicitly assigned, typeof null returns 'object', and null == undefined is true but null === undefined is false.",
      incorrect: "The key differences are: 'undefined' is the default for uninitialized variables, 'null' is explicitly assigned, they have different typeof results, and they're equal with == but not with ===. They are not exactly the same in JavaScript.",
      detailed: "In React, understanding the difference between null and undefined is important for: 1) Conditional rendering: {user !== undefined && user !== null && <UserProfile />} or {user != null && <UserProfile />}; 2) Default props: function Component({ value = 'default' }) {...} (the default is used when value is undefined, but not when it's null); 3) Optional chaining: user?.profile?.bio (returns undefined if any part is null/undefined); 4) Nullish coalescing: const displayName = user.name ?? 'Guest' (uses 'Guest' if name is null or undefined). Generally, undefined represents values that JavaScript couldn't find or haven't been set, while null represents intentional emptiness set by the programmer."
    }
  },
  {
    id: "javascript-20",
    level: 1,
    topic: "javascript",
    question: "What is function hoisting in JavaScript?",
    multipleCorrect: true,
    options: [
      {
        id: "javascript-20-a",
        text: "Function declarations are moved to the top of their scope during compilation",
        isCorrect: true,
        explanation: "Hoisting is a JavaScript behavior where function declarations are processed before any code is executed, effectively moving them to the top of their containing scope."
      },
      {
        id: "javascript-20-b",
        text: "It allows you to call a function before it's declared in the code",
        isCorrect: true,
        explanation: "Due to hoisting, function declarations can be called before they appear in the code, as they're processed before the code is executed."
      },
      {
        id: "javascript-20-c",
        text: "Function expressions and arrow functions are not hoisted in the same way as function declarations",
        isCorrect: true,
        explanation: "Unlike function declarations, function expressions (var fn = function(){}) and arrow functions (var fn = () => {}) are not fully hoisted. The variable declaration may be hoisted, but the function assignment is not."
      },
      {
        id: "javascript-20-d",
        text: "All JavaScript functions are hoisted, regardless of how they're declared",
        isCorrect: false,
        explanation: "Not all function types are hoisted the same way. Function declarations are fully hoisted, but function expressions and arrow functions are not. Their variable declarations may be hoisted, but the function assignments happen at the point of execution."
      },
      {
        id: "javascript-20-e",
        text: "Hoisting physically moves the function code to the top of the file",
        isCorrect: false,
        explanation: "Hoisting doesn't physically move code in the file. It's a conceptual process that happens during the compilation phase, where function declarations are processed before code execution."
      }
    ],
    explanation: {
      correct: "Correct! Function hoisting moves declarations to the top of their scope during compilation, allows calling functions before their declaration, and behaves differently for function expressions and arrow functions.",
      incorrect: "Function hoisting moves declarations to the top of their scope, allows calling functions before declaration, and works differently for function expressions/arrow functions. Not all functions are hoisted the same way, and code isn't physically moved.",
      detailed: "Understanding hoisting is important for React development: 1) Function declarations: function myFunc() {} are fully hoisted and can be called anywhere in their scope; 2) Function expressions: const myFunc = function() {} have their variable declaration hoisted but not the assignment, so they can't be called before the assignment; 3) Arrow functions: const myFunc = () => {} behave like function expressions regarding hoisting; 4) In React components, this means helper functions defined as function declarations can be called anywhere in the component, but those defined as const or let with function expressions or arrow functions must be defined before they're used. Best practice is to define functions before using them regardless of hoisting, to make code more readable and maintainable."
    }
  },
  {
    id: "javascript-21",
    level: 1,
    topic: "javascript",
    question: "What is the 'this' keyword in JavaScript and how does it behave in different contexts?",
    multipleCorrect: true,
    options: [
      {
        id: "javascript-21-a",
        text: "In regular functions, 'this' refers to the object that called the function",
        isCorrect: true,
        explanation: "In regular function calls, the value of 'this' depends on how the function is called. In method calls, 'this' refers to the object that owns the method."
      },
      {
        id: "javascript-21-b",
        text: "In arrow functions, 'this' is lexically bound to the surrounding scope",
        isCorrect: true,
        explanation: "Arrow functions don't have their own 'this' binding. Instead, they inherit 'this' from the enclosing scope at the time they are defined, not when they are executed."
      },
      {
        id: "javascript-21-c",
        text: "In React class components, 'this' refers to the component instance",
        isCorrect: true,
        explanation: "In React class components, 'this' refers to the instance of the component, allowing access to props, state, and other component methods."
      },
      {
        id: "javascript-21-d",
        text: "In React functional components, 'this' refers to the component function",
        isCorrect: false,
        explanation: "In React functional components, 'this' doesn't have a special meaning because functional components are just regular functions, not methods on objects. 'this' would either be undefined (in strict mode) or the global object."
      },
      {
        id: "javascript-21-e",
        text: "'this' always refers to the global object (window in browsers)",
        isCorrect: false,
        explanation: "'this' doesn't always refer to the global object. Its value depends on how a function is called. In strict mode, 'this' can even be undefined in regular function calls."
      }
    ],
    explanation: {
      correct: "Correct! In regular functions, 'this' refers to the calling object; in arrow functions, it's lexically bound to the surrounding scope; and in React class components, it refers to the component instance.",
      incorrect: "The 'this' keyword refers to the calling object in regular functions, is lexically bound in arrow functions, and refers to the component instance in class components. It doesn't refer to the component function in functional components or always refer to the global object.",
      detailed: "Understanding 'this' is crucial in React: 1) In class components, event handlers need proper binding to maintain the correct 'this' context: constructor() { this.handleClick = this.handleClick.bind(this); }; 2) Alternative binding approaches: using public class fields (handleClick = () => {}) or arrow functions in render (onClick={() => this.handleClick()}); 3) Arrow functions in class components automatically capture the correct 'this'; 4) Functional components don't use 'this' at all - they use props passed as parameters and hooks for state and effects; 5) The behavior of 'this' is one reason many developers prefer functional components, as they avoid the complexity and potential bugs associated with 'this' binding."
    }
  },
  {
    id: "javascript-22",
    level: 1,
    topic: "javascript",
    question: "What are closures in JavaScript and how are they used in React?",
    multipleCorrect: true,
    options: [
      {
        id: "javascript-22-a",
        text: "A closure is a function that has access to variables from its outer (enclosing) scope, even after the outer function has finished executing",
        isCorrect: true,
        explanation: "Closures are created when a function is defined within another function, allowing the inner function to access variables from the outer function's scope even after the outer function has completed execution."
      },
      {
        id: "javascript-22-b",
        text: "In React, closures allow event handlers and effects to access props and state from the render in which they were created",
        isCorrect: true,
        explanation: "In React, closures enable event handlers and effect callbacks to access the props and state values that were in scope when they were defined, which is fundamental to how React's functional components work."
      },
      {
        id: "javascript-22-c",
        text: "Closures can lead to stale values in React if dependencies aren't properly specified in hooks like useEffect",
        isCorrect: true,
        explanation: "When closures capture variables like props or state, they capture their values at the time of creation. In React, this can lead to 'stale closures' if dependencies aren't properly specified in hooks like useEffect, useCallback, or useMemo."
      },
      {
        id: "javascript-22-d",
        text: "Closures are only available in class components, not functional components",
        isCorrect: false,
        explanation: "Closures are a JavaScript feature available in all functions, including functional components. In fact, functional components rely heavily on closures for accessing props and state in event handlers and effects."
      },
      {
        id: "javascript-22-e",
        text: "Closures automatically update when the variables they reference change",
        isCorrect: false,
        explanation: "Closures capture the value of variables at the time they are created, not a reference that automatically updates. If a new closure is created (e.g., during a re-render), it will capture the new values, but existing closures retain the old values."
      }
    ],
    explanation: {
      correct: "Correct! Closures are functions that access outer scope variables, allow React handlers/effects to access props/state, and can lead to stale values if dependencies aren't properly specified.",
      incorrect: "Closures allow functions to access outer scope variables and let React handlers/effects access props/state. They can cause stale values issues. They're available in all components (not just classes) and don't automatically update when referenced variables change.",
      detailed: "Closures are fundamental to how React functional components work: 1) Event handlers: function Counter() { const [count, setCount] = useState(0); const handleClick = () => setCount(count + 1); } (handleClick is a closure that captures count); 2) Effects: useEffect(() => { document.title = `Count: ${count}`; }, [count]); 3) The stale closure problem: useEffect(() => { const interval = setInterval(() => { console.log(count); // Always logs the same value unless count is in dependencies }, 1000); return () => clearInterval(interval); }, []); // Missing count dependency causes stale closure. Understanding closures is essential for correctly specifying dependencies in hooks and for debugging issues related to stale values in React applications."
    }
  },
  {
    id: "javascript-23",
    level: 1,
    topic: "javascript",
    question: "What is the event loop in JavaScript and how does it affect React applications?",
    multipleCorrect: true,
    options: [
      {
        id: "javascript-23-a",
        text: "The event loop is the mechanism that allows JavaScript to perform non-blocking operations despite being single-threaded",
        isCorrect: true,
        explanation: "The event loop enables JavaScript's asynchronous behavior by processing the message queue and executing callbacks when synchronous operations complete, allowing the single-threaded language to handle operations like I/O without blocking."
      },
      {
        id: "javascript-23-b",
        text: "It processes the message queue only when the call stack is empty",
        isCorrect: true,
        explanation: "The event loop checks if the call stack is empty, and if it is, takes the first event from the queue and pushes it to the call stack, which effectively runs it. This ensures that asynchronous callbacks execute only after synchronous code completes."
      },
      {
        id: "javascript-23-c",
        text: "In React, the event loop affects how state updates and re-renders are scheduled",
        isCorrect: true,
        explanation: "React batches state updates and schedules rendering through the event loop. When state is updated, React doesn't immediately re-render but schedules the update to happen in a future iteration of the event loop."
      },
      {
        id: "javascript-23-d",
        text: "The event loop allows React to process all state updates synchronously",
        isCorrect: false,
        explanation: "This is incorrect. The event loop actually enables React to process state updates asynchronously. React typically batches state updates and processes them in a future tick of the event loop, not synchronously."
      },
      {
        id: "javascript-23-e",
        text: "The event loop is a React-specific feature",
        isCorrect: false,
        explanation: "The event loop is a fundamental part of JavaScript's runtime environment (like browsers or Node.js), not a React-specific feature. React builds on this existing mechanism for its scheduling and rendering."
      }
    ],
    explanation: {
      correct: "Correct! The event loop allows JavaScript to perform non-blocking operations despite being single-threaded, processes the message queue when the call stack is empty, and affects how React schedules state updates and re-renders.",
      incorrect: "The event loop enables JavaScript's non-blocking operations and processes the message queue when the call stack is empty. It affects React's update scheduling. It doesn't process updates synchronously and isn't React-specific—it's a JavaScript runtime feature.",
      detailed: "The event loop's impact on React is significant: 1) State batching: Multiple setState calls in the same event handler typically cause only one re-render because React batches them and processes them in a future tick of the event loop; 2) Asynchronous updates: const handleClick = () => { setCount(count + 1); console.log(count); // Logs the old value because the state update hasn't processed yet }; 3) useEffect timing: Effects run after the browser has painted, in a separate tick of the event loop; 4) React 18's concurrent features: The new concurrent mode leverages the event loop to make rendering interruptible, allowing React to prioritize more urgent updates. Understanding the event loop helps explain why state updates aren't immediate and why certain patterns like useEffect's cleanup function are necessary."
    }
  },
  {
    id: "javascript-24",
    level: 1,
    topic: "javascript",
    question: "What is the difference between synchronous and asynchronous code in JavaScript?",
    multipleCorrect: true,
    options: [
      {
        id: "javascript-24-a",
        text: "Synchronous code executes line by line, blocking further execution until the current operation completes",
        isCorrect: true,
        explanation: "Synchronous code runs in sequence, with each operation completing before the next one begins. This can block the main thread if operations take a long time."
      },
      {
        id: "javascript-24-b",
        text: "Asynchronous code allows operations to be scheduled for future execution, without blocking the main thread",
        isCorrect: true,
        explanation: "Asynchronous code initiates operations that will complete at some point in the future, allowing the main thread to continue executing other code in the meantime."
      },
      {
        id: "javascript-24-c",
        text: "In React, asynchronous code is commonly used for data fetching, timers, and event handlers",
        isCorrect: true,
        explanation: "React applications frequently use asynchronous operations for tasks like API calls, setTimeout/setInterval, and handling user interactions, allowing the UI to remain responsive."
      },
      {
        id: "javascript-24-d",
        text: "Asynchronous code always executes faster than synchronous code",
        isCorrect: false,
        explanation: "Asynchronous code doesn't necessarily execute faster; it just doesn't block the main thread while waiting for operations to complete. The actual operations may take the same amount of time or longer."
      },
      {
        id: "javascript-24-e",
        text: "All JavaScript code is either synchronous or asynchronous, but never both",
        isCorrect: false,
        explanation: "JavaScript applications typically contain a mix of synchronous and asynchronous code. Even asynchronous operations have synchronous parts, and a single function can contain both types of code."
      }
    ],
    explanation: {
      correct: "Correct! Synchronous code executes line by line and blocks execution, asynchronous code schedules future operations without blocking, and React commonly uses async code for data fetching, timers, and event handlers.",
      incorrect: "Synchronous code executes sequentially and blocks, while asynchronous code schedules future operations without blocking. React uses async code for various operations. Async code isn't always faster, and JavaScript applications typically contain both sync and async code.",
      detailed: "In React, understanding the difference is crucial: 1) Synchronous operations: Most rendering logic, state updates (though the re-render is scheduled asynchronously), and component lifecycle methods; 2) Asynchronous operations: Data fetching (fetch, axios), setTimeout/setInterval, event handlers, and some React features like useEffect; 3) Common patterns: useEffect(() => { const fetchData = async () => { const response = await fetch('/api/data'); const data = await response.json(); setState(data); }; fetchData(); }, []); 4) Error handling: try/catch for synchronous code, .catch() for promises, or try/catch with async/await for asynchronous code. Using asynchronous patterns appropriately keeps React applications responsive even during time-consuming operations."
    }
  },
  {
    id: "javascript-25",
    level: 1,
    topic: "javascript",
    question: "What are JavaScript Promises and how do they work?",
    multipleCorrect: true,
    options: [
      {
        id: "javascript-25-a",
        text: "Promises represent the eventual completion or failure of an asynchronous operation",
        isCorrect: true,
        explanation: "A Promise is an object that represents an asynchronous operation that will eventually complete (resolve) or fail (reject), allowing you to handle the result or error when it's available."
      },
      {
        id: "javascript-25-b",
        text: "Promises have three states: pending, fulfilled, or rejected",
        isCorrect: true,
        explanation: "A Promise starts in the 'pending' state, and then either transitions to 'fulfilled' with a value when successful or 'rejected' with a reason (error) when unsuccessful."
      },
      {
        id: "javascript-25-c",
        text: "Promises can be chained with .then() and .catch() for handling success and error cases",
        isCorrect: true,
        explanation: "Promises provide .then() for handling successful completion and .catch() for handling errors, allowing for clean handling of asynchronous operations and easy chaining of operations."
      },
      {
        id: "javascript-25-d",
        text: "Promises automatically retry failed operations",
        isCorrect: false,
        explanation: "Promises don't automatically retry failed operations. If a Promise is rejected, it stays rejected unless explicit retry logic is implemented by the developer."
      },
      {
        id: "javascript-25-e",
        text: "Once a Promise is settled (fulfilled or rejected), its state and value/reason cannot change",
        isCorrect: true,
        explanation: "Promises are immutable once settled. Once a Promise transitions to 'fulfilled' or 'rejected', its state and value/reason are fixed and cannot be changed, even if .then() or .catch() are called again."
      }
    ],
    explanation: {
      correct: "Correct! Promises represent eventual completion/failure of async operations, have three states (pending, fulfilled, rejected), can be chained with .then()/.catch(), and are immutable once settled.",
      incorrect: "Promises represent eventual completion/failure of async operations, have three states, can be chained with .then()/.catch(), and are immutable once settled. They don't automatically retry failed operations.",
      detailed: "Promises are fundamental to modern JavaScript and React: 1) Creating Promises: const promise = new Promise((resolve, reject) => { if (success) resolve(value); else reject(error); }); 2) Consuming Promises: promise.then(value => console.log(value)).catch(error => console.error(error)); 3) Chaining: fetch('/api/data').then(response => response.json()).then(data => setData(data)).catch(error => setError(error)); 4) Promise.all for parallel operations: Promise.all([fetch('/api/users'), fetch('/api/posts')]).then(([usersResponse, postsResponse]) => ...); 5) In React effects: useEffect(() => { fetch('/api/data').then(res => res.json()).then(setData).catch(setError); }, []); Promises provide a cleaner alternative to callback-based asynchronous code, reducing 'callback hell' and making error handling more straightforward."
    }
  },
  {
    id: "javascript-26",
    level: 1,
    topic: "javascript",
    question: "What is the async/await syntax in JavaScript and how does it relate to Promises?",
    multipleCorrect: true,
    options: [
      {
        id: "javascript-26-a",
        text: "async/await is syntactic sugar built on top of Promises",
        isCorrect: true,
        explanation: "async/await doesn't introduce new functionality beyond Promises; it's just a more readable and convenient syntax for working with Promises, making asynchronous code look more like synchronous code."
      },
      {
        id: "javascript-26-b",
        text: "An async function always returns a Promise",
        isCorrect: true,
        explanation: "When a function is declared with the async keyword, it automatically returns a Promise. If the function returns a value, the Promise resolves with that value; if it throws an exception, the Promise rejects with that exception."
      },
      {
        id: "javascript-26-c",
        text: "The await keyword can only be used inside async functions",
        isCorrect: true,
        explanation: "The await keyword can only be used within functions declared with the async keyword. It cannot be used at the top level of a module or in regular functions (though this is changing with top-level await in modern JavaScript)."
      },
      {
        id: "javascript-26-d",
        text: "await converts a Promise to its resolved value and pauses execution until the Promise settles",
        isCorrect: true,
        explanation: "When await is used with a Promise, it pauses the execution of the async function until the Promise settles. If the Promise resolves, await returns the resolved value; if it rejects, await throws the rejection value."
      },
      {
        id: "javascript-26-e",
        text: "async/await completely replaces the need for .then() and .catch() methods",
        isCorrect: false,
        explanation: "While async/await often makes code cleaner than chains of .then() and .catch(), there are still cases where Promise methods are useful or necessary, such as handling multiple Promises with Promise.all() or implementing more complex Promise flows."
      }
    ],
    explanation: {
      correct: "Correct! async/await is syntactic sugar for Promises, async functions always return Promises, await can only be used in async functions, and await pauses execution until the Promise settles.",
      incorrect: "async/await is syntactic sugar for Promises, async functions always return Promises, await can only be used in async functions, and await pauses execution until the Promise settles. It doesn't completely replace .then()/.catch().",
      detailed: "async/await simplifies asynchronous code in React: 1) Data fetching in useEffect: useEffect(() => { const fetchData = async () => { try { const response = await fetch('/api/data'); const data = await response.json(); setData(data); } catch (error) { setError(error); } }; fetchData(); }, []); 2) Event handlers: const handleSubmit = async (e) => { e.preventDefault(); try { await saveData(formData); setStatus('success'); } catch (err) { setStatus('error'); } }; 3) Error handling: try/catch blocks with async/await provide more readable error handling than Promise.catch(). 4) Sequential vs parallel: For sequential operations, use multiple await statements; for parallel operations, use Promise.all with await: const [users, posts] = await Promise.all([fetchUsers(), fetchPosts()]);"
    }
  },
  {
    id: "javascript-27",
    level: 1,
    topic: "javascript",
    question: "What is the difference between 'var', 'let', and 'const' declarations in JavaScript?",
    multipleCorrect: true,
    options: [
      {
        id: "javascript-27-a",
        text: "'var' has function scope, while 'let' and 'const' have block scope",
        isCorrect: true,
        explanation: "Variables declared with 'var' are scoped to the function or globally if declared outside a function. 'let' and 'const' variables are scoped to the block (enclosed by {}) in which they are defined."
      },
      {
        id: "javascript-27-b",
        text: "'var' declarations are hoisted with an initial value of undefined",
        isCorrect: true,
        explanation: "'var' declarations are hoisted to the top of their scope during compilation, with an initial value of undefined. This means you can access a 'var' variable before its declaration, though it will be undefined."
      },
      {
        id: "javascript-27-c",
        text: "'const' variables cannot be reassigned after initialization",
        isCorrect: true,
        explanation: "Once a 'const' variable is assigned a value, that value cannot be reassigned. However, if the value is an object or array, its properties or elements can still be modified."
      },
      {
        id: "javascript-27-d",
        text: "'let' variables can be declared without initialization",
        isCorrect: true,
        explanation: "Variables declared with 'let' can be declared without being initialized (let x;), and their value will be undefined until assigned. This is true for 'var' as well, but not for 'const', which requires initialization."
      },
      {
        id: "javascript-27-e",
        text: "'const' makes values completely immutable",
        isCorrect: false,
        explanation: "'const' only prevents reassignment of the variable itself, not modification of the value it points to. If a 'const' variable holds an object or array, the object's properties or array's elements can still be changed."
      }
    ],
    explanation: {
      correct: "Correct! 'var' has function scope and is hoisted with undefined, 'let' and 'const' have block scope, 'const' prevents reassignment, and 'let' variables can be declared without initialization.",
      incorrect: "The key differences are: 'var' has function scope and is hoisted with undefined, 'let'/'const' have block scope, 'const' prevents reassignment (not modification), and 'let' can be declared without initialization.",
      detailed: "In modern React development: 1) 'const' is preferred for most variables, especially for component declarations, imports, and values that shouldn't be reassigned: const App = () => {...}; 2) 'let' is used when reassignment is needed: let count = 0; count++; 3) 'var' is generally avoided due to its function scope and hoisting behavior, which can lead to unexpected bugs; 4) Block scope with 'let' and 'const' is particularly useful in loops and conditional statements: for (let i = 0; i < 5; i++) { ... } (i is scoped to the loop); 5) With 'const' for objects: const user = { name: 'John' }; user.name = 'Jane'; // Valid, modifying property user = {}; // Invalid, reassigning variable"
    }
  },
  {
    id: "javascript-28",
    level: 1,
    topic: "javascript",
    question: "What is the purpose of the 'use strict' directive in JavaScript?",
    multipleCorrect: true,
    options: [
      {
        id: "javascript-28-a",
        text: "It enables a stricter parsing and error handling mode",
        isCorrect: true,
        explanation: "'use strict' activates strict mode, which enforces stricter parsing and error handling, catching common coding mistakes and 'unsafe' actions that might otherwise be silent errors."
      },
      {
        id: "javascript-28-b",
        text: "It prevents the use of implicitly declared variables",
        isCorrect: true,
        explanation: "In strict mode, assigning to an undeclared variable throws an error, preventing the accidental creation of global variables, which is a common source of bugs."
      },
      {
        id: "javascript-28-c",
        text: "It makes 'this' undefined in functions called without an object context",
        isCorrect: true,
        explanation: "In strict mode, when a function is called as a standalone function (not as a method), 'this' is undefined rather than the global object, helping catch incorrect uses of 'this'."
      },
      {
        id: "javascript-28-d",
        text: "It automatically fixes common JavaScript errors",
        isCorrect: false,
        explanation: "'use strict' doesn't fix errors; it makes them more visible by throwing exceptions instead of silently failing or having unexpected behavior. Developers still need to fix the errors themselves."
      },
      {
        id: "javascript-28-e",
        text: "It improves JavaScript performance by enabling compiler optimizations",
        isCorrect: true,
        explanation: "Strict mode can enable certain compiler optimizations because it eliminates some ambiguous or error-prone constructs, potentially leading to better performance in some JavaScript engines."
      }
    ],
    explanation: {
      correct: "Correct! 'use strict' enables stricter parsing and error handling, prevents implicit variable declarations, makes 'this' undefined in standalone functions, and can improve performance through compiler optimizations.",
      incorrect: "The 'use strict' directive enables stricter error handling, prevents implicit variables, changes 'this' behavior, and can improve performance. It doesn't automatically fix errors—it makes them more visible.",
      detailed: "In modern React development: 1) All JavaScript code in ES6 modules (used in most React projects) is automatically in strict mode, so explicit 'use strict' directives are often unnecessary; 2) React components defined with classes or functions inherit this strict mode behavior; 3) React also has its own <React.StrictMode> component, which is different from JavaScript's strict mode - it activates additional React-specific checks and warnings; 4) Strict mode helps catch common React mistakes like using deprecated lifecycle methods or detecting unexpected side effects; 5) The combination of JavaScript's strict mode and React's StrictMode helps create more robust and maintainable applications by catching potential issues early."
    }
  },
  {
    id: "javascript-29",
    level: 1,
    topic: "javascript",
    question: "What is the purpose of the 'typeof' operator in JavaScript?",
    multipleCorrect: true,
    options: [
      {
        id: "javascript-29-a",
        text: "It returns a string indicating the type of the unevaluated operand",
        isCorrect: true,
        explanation: "The typeof operator returns a string that represents the primitive type of a value or object, such as 'number', 'string', 'boolean', 'object', 'function', 'undefined', or 'symbol'."
      },
      {
        id: "javascript-29-b",
        text: "It can be used to check if a variable is defined without causing an error",
        isCorrect: true,
        explanation: "typeof can safely check if a variable is defined because typeof undeclaredVariable returns 'undefined' rather than throwing a ReferenceError, unlike directly accessing the variable."
      },
      {
        id: "javascript-29-c",
        text: "It has some quirks, like typeof null returning 'object'",
        isCorrect: true,
        explanation: "Due to a historical bug in JavaScript, typeof null returns 'object' instead of 'null'. This is a well-known quirk that has been preserved for backward compatibility."
      },
      {
        id: "javascript-29-d",
        text: "It can distinguish between all JavaScript data structures",
        isCorrect: false,
        explanation: "typeof cannot distinguish between all data structures. For example, it returns 'object' for arrays, null, and regular objects. Additional checks are needed to differentiate between these types."
      },
      {
        id: "javascript-29-e",
        text: "It returns the constructor name of an object",
        isCorrect: false,
        explanation: "typeof doesn't return the constructor name. It returns broad categories like 'object' or 'function'. To get the constructor name, you would use something like object.constructor.name."
      }
    ],
    explanation: {
      correct: "Correct! typeof returns a string indicating the operand's type, can safely check if variables are defined, and has quirks like typeof null returning 'object'.",
      incorrect: "typeof returns a string representing the operand's type, safely checks if variables exist, and has quirks like typeof null returning 'object'. It can't distinguish all data structures and doesn't return constructor names.",
      detailed: "In React development, typeof is useful for: 1) Prop type checking: if (typeof props.callback !== 'function') { /* handle error */ }; 2) Conditional rendering based on prop types: {typeof data === 'object' && <DataTable data={data} />}; 3) Checking for undefined props: if (typeof props.value === 'undefined') { /* use default */ }; 4) Debugging: console.log(typeof state.user); 5) For more precise type checking, consider: Array.isArray(value) for arrays, value === null for null checks, or Object.prototype.toString.call(value) for more detailed type information. In TypeScript-based React projects, much of this type checking is handled by the static type system."
    }
  },
  {
    id: "javascript-30",
    level: 1,
    topic: "javascript",
    question: "What is the difference between '==' and '===' operators in JavaScript?",
    multipleCorrect: true,
    options: [
      {
        id: "javascript-30-a",
        text: "'==' compares values with type coercion, while '===' compares both value and type without coercion",
        isCorrect: true,
        explanation: "The '==' (loose equality) operator compares values after converting them to a common type if needed, while '===' (strict equality) compares both value and type without any type conversion."
      },
      {
        id: "javascript-30-b",
        text: "'null == undefined' is true, but 'null === undefined' is false",
        isCorrect: true,
        explanation: "With loose equality (==), null and undefined are considered equal to each other. With strict equality (===), they are considered different types and values."
      },
      {
        id: "javascript-30-c",
        text: "'===' generally performs better because it doesn't need to do type conversion",
        isCorrect: true,
        explanation: "Strict equality (===) can be more efficient because it doesn't perform type coercion, which requires additional computational steps. The performance difference is usually minimal but can matter in tight loops."
      },
      {
        id: "javascript-30-d",
        text: "'==' and '===' behave the same way for primitive values of the same type",
        isCorrect: true,
        explanation: "When comparing values of the same primitive type, both operators will return the same result because no type coercion is needed. For example, 5 == 5 and 5 === 5 both return true."
      },
      {
        id: "javascript-30-e",
        text: "'===' is always more strict than '==', so if '===' returns true, '==' will also return true",
        isCorrect: true,
        explanation: "Since '===' checks both value and type without coercion, any values that are strictly equal (===) will also be loosely equal (==). The reverse is not true - values can be loosely equal but not strictly equal."
      }
    ],
    explanation: {
      correct: "Correct! '==' compares with type coercion while '===' compares without it, 'null == undefined' is true but 'null === undefined' is false, '===' can perform better, they behave the same for same-type primitives, and '===' is always more strict.",
      incorrect: "All the selected statements are correct! '==' uses type coercion while '===' doesn't, 'null == undefined' is true but 'null === undefined' is false, '===' can be more efficient, they behave the same for same-type primitives, and '===' is always stricter than '=='.",
      detailed: "In React development, strict equality (===) is generally preferred: 1) Comparing props or state: if (prevProps.id === props.id); 2) Checking for specific values: if (status === 'loading'); 3) In useEffect dependencies: useEffect(() => { ... }, [id, status]); 4) In reducer functions: if (action.type === 'INCREMENT'). Using strict equality helps avoid subtle bugs from unexpected type coercion. For example, with loose equality: '0' == 0 (true), 0 == false (true), '' == false (true), but with strict equality, all of these would be false. The React codebase itself predominantly uses strict equality for consistency and to avoid coercion bugs."
    }
  },
  {
    id: "javascript-31",
    level: 1,
    topic: "javascript",
    question: "What is the purpose of the 'instanceof' operator in JavaScript?",
    multipleCorrect: true,
    options: [
      {
        id: "javascript-31-a",
        text: "It tests if an object is an instance of a specific class or constructor function",
        isCorrect: true,
        explanation: "The instanceof operator tests whether an object has in its prototype chain the prototype property of a specified constructor, effectively checking if it was created by or inherits from that constructor."
      },
      {
        id: "javascript-31-b",
        text: "It can be used to check if an object is an array, e.g., obj instanceof Array",
        isCorrect: true,
        explanation: "instanceof can check if an object is an array by testing if it's an instance of the Array constructor. For example, [] instanceof Array returns true."
      },
      {
        id: "javascript-31-c",
        text: "It works with built-in types like Date, RegExp, and Error",
        isCorrect: true,
        explanation: "instanceof works with all built-in constructor functions like Date, RegExp, Error, etc. For example, new Date() instanceof Date returns true."
      },
      {
        id: "javascript-31-d",
        text: "It can check primitive values like strings and numbers",
        isCorrect: false,
        explanation: "instanceof doesn't work with primitive values like strings, numbers, and booleans. For example, 'hello' instanceof String returns false because string literals are not objects. However, new String('hello') instanceof String would return true."
      },
      {
        id: "javascript-31-e",
        text: "It always works correctly across different execution contexts (e.g., iframes)",
        isCorrect: false,
        explanation: "instanceof can fail when objects are passed between different execution contexts (like different frames or windows) because each context has its own set of built-in constructors. An array from one iframe is not instanceof Array in another iframe."
      }
    ],
    explanation: {
      correct: "Correct! instanceof tests if an object is an instance of a specific constructor, can check for arrays, and works with built-in types like Date and Error.",
      incorrect: "instanceof tests if an object is an instance of a constructor, works for arrays and built-in types like Date. It doesn't work with primitive values and can fail across different execution contexts.",
      detailed: "In React development, instanceof has several uses: 1) Error handling: if (error instanceof TypeError); 2) Checking custom component instances in class components: if (this.refs.child instanceof ChildComponent); 3) Validating complex objects: if (event.target instanceof HTMLInputElement); 4) Working with dates: if (props.date instanceof Date). For more reliable type checking across contexts, consider alternatives: 1) Array.isArray() for arrays; 2) typeof for primitive types; 3) Object.prototype.toString.call(value) for more detailed type information. In modern React with TypeScript, much of this type checking is handled by the static type system, reducing the need for runtime type checks."
    }
  },
  {
    id: "javascript-32",
    level: 1,
    topic: "javascript",
    question: "What are template literals in JavaScript?",
    multipleCorrect: true,
    options: [
      {
        id: "javascript-32-a",
        text: "String literals that allow embedded expressions using ${expression} syntax",
        isCorrect: true,
        explanation: "Template literals allow you to embed expressions inside strings using ${expression} syntax, making string concatenation and interpolation more readable."
      },
      {
        id: "javascript-32-b",
        text: "Defined using backticks (`) instead of single or double quotes",
        isCorrect: true,
        explanation: "Template literals are enclosed by backticks (`) rather than single or double quotes, which distinguishes them from regular string literals."
      },
      {
        id: "javascript-32-c",
        text: "Support multi-line strings without escape characters",
        isCorrect: true,
        explanation: "Template literals can span multiple lines without needing escape characters like \\n, making multi-line strings more readable and easier to write."
      },
      {
        id: "javascript-32-d",
        text: "Automatically escape HTML to prevent XSS attacks",
        isCorrect: false,
        explanation: "Template literals don't automatically escape HTML. Values are inserted as-is, which can lead to XSS vulnerabilities if user input is directly inserted into HTML. Additional escaping or sanitization is needed for security."
      },
      {
        id: "javascript-32-e",
        text: "Can be tagged with a function to customize the string interpolation",
        isCorrect: true,
        explanation: "Template literals can be 'tagged' with a function name (tag`template`), allowing custom processing of the template literal. The function receives the string parts and interpolated values as separate arguments."
      }
    ],
    explanation: {
      correct: "Correct! Template literals use ${expression} syntax in backtick-enclosed strings, support multi-line strings without escapes, and can be tagged with functions for custom processing.",
      incorrect: "Template literals use ${expression} in backtick-enclosed strings, support multi-line strings, and can be tagged with functions. They don't automatically escape HTML to prevent XSS attacks.",
      detailed: "In React development, template literals are commonly used for: 1) Dynamic class names: className={`btn ${isActive ? 'btn-active' : ''}`}; 2) Style interpolation: style={{ margin: `${spacing}px` }}; 3) URL construction: fetch(`/api/users/${userId}`); 4) Complex text content: <p>{`Welcome, ${firstName} ${lastName}!`}</p>; 5) Multi-line content: const message = `Please confirm your account details within 24 hours.`; 6) Tagged templates (less common in React, but used in libraries like styled-components): const Button = styled.button`background: ${props => props.primary ? 'blue' : 'white'};`. Template literals make string manipulation more readable and maintainable compared to traditional string concatenation."
    }
  },
  {
    id: "javascript-33",
    level: 1,
    topic: "javascript",
    question: "What is destructuring assignment in JavaScript?",
    multipleCorrect: true,
    options: [
      {
        id: "javascript-33-a",
        text: "A syntax that allows unpacking values from arrays or properties from objects into distinct variables",
        isCorrect: true,
        explanation: "Destructuring assignment is a JavaScript expression that makes it possible to extract data from arrays or objects into separate variables using a syntax that mirrors the construction of array and object literals."
      },
      {
        id: "javascript-33-b",
        text: "Can be used with array patterns: const [first, second] = array;",
        isCorrect: true,
        explanation: "Array destructuring uses square brackets on the left side of the assignment to extract values from arrays into variables based on their position."
      },
      {
        id: "javascript-33-c",
        text: "Can be used with object patterns: const { name, age } = person;",
        isCorrect: true,
        explanation: "Object destructuring uses curly braces on the left side of the assignment to extract values from objects into variables based on matching property names."
      },
      {
        id: "javascript-33-d",
        text: "Allows setting default values: const { name = 'Anonymous' } = user;",
        isCorrect: true,
        explanation: "Destructuring allows you to provide default values that will be used if the extracted value is undefined. This works for both array and object destructuring."
      },
      {
        id: "javascript-33-e",
        text: "Modifies the original array or object being destructured",
        isCorrect: false,
        explanation: "Destructuring assignment doesn't modify the original array or object. It simply creates new variables that reference values from the original data structure."
      }
    ],
    explanation: {
      correct: "Correct! Destructuring unpacks values from arrays/objects into variables, works with array and object patterns, and allows setting default values.",
      incorrect: "Destructuring unpacks values from arrays/objects into variables, works with array patterns ([a, b]) and object patterns ({a, b}), and allows default values. It doesn't modify the original data structure.",
      detailed: "In React, destructuring is extensively used: 1) Function components: function Profile({ name, age, isActive = false }) {...}; 2) Hooks: const [count, setCount] = useState(0); 3) Array methods: users.map(({ id, name }) => <User key={id} name={name} />); 4) Event handlers: const handleChange = ({ target: { value } }) => setValue(value); 5) Rest pattern: const { id, ...otherProps } = props; return <div {...otherProps}>; 6) Nested destructuring: const { user: { name, address: { city } } } = data; 7) Renaming properties: const { name: userName, age: userAge } = user;. Destructuring makes code more concise and readable by clearly indicating which properties are being used and reducing repetition of object or array references."
    }
  },
  {
    id: "javascript-34",
    level: 1,
    topic: "javascript",
    question: "What is the difference between 'for...in' and 'for...of' loops in JavaScript?",
    multipleCorrect: true,
    options: [
      {
        id: "javascript-34-a",
        text: "'for...in' iterates over the enumerable properties of an object",
        isCorrect: true,
        explanation: "The for...in loop iterates over all enumerable properties of an object, including inherited properties from the prototype chain. It's designed for iterating over object properties, not array elements."
      },
      {
        id: "javascript-34-b",
        text: "'for...of' iterates over the values of iterable objects like arrays, strings, and Maps",
        isCorrect: true,
        explanation: "The for...of loop iterates over the values of iterable objects such as Arrays, Strings, Maps, Sets, etc. It accesses the value directly rather than the property name or index."
      },
      {
        id: "javascript-34-c",
        text: "'for...in' returns property names/indices, while 'for...of' returns values",
        isCorrect: true,
        explanation: "When using for...in, the loop variable represents the property name or array index. With for...of, the loop variable represents the actual value at each iteration."
      },
      {
        id: "javascript-34-d",
        text: "'for...in' should not be used for arrays if the index order is important",
        isCorrect: true,
        explanation: "The for...in loop doesn't guarantee any specific order of iteration and includes all enumerable properties, not just numeric indices. This makes it unsuitable for arrays when the order matters or when you only want to access array elements."
      },
      {
        id: "javascript-34-e",
        text: "'for...of' can be used with regular objects by default",
        isCorrect: false,
        explanation: "Regular objects are not iterable by default, so for...of cannot be used with them unless they implement the iterable protocol. Using for...of with a non-iterable object will throw a TypeError."
      }
    ],
    explanation: {
      correct: "Correct! 'for...in' iterates over object properties, 'for...of' iterates over values in iterables, 'for...in' returns names/indices while 'for...of' returns values, and 'for...in' shouldn't be used for arrays when order matters.",
      incorrect: "The key differences are: 'for...in' iterates over object properties, 'for...of' iterates over values in iterables, they return different things (names/indices vs. values), and 'for...in' is problematic for arrays. 'for...of' cannot be used with regular objects by default.",
      detailed: "In React development: 1) 'for...of' is preferred for arrays: for (const item of items) { /* process item directly */ }; 2) 'for...in' is useful for object properties: for (const key in formErrors) { /* handle each error field */ }; 3) When using 'for...in' with objects, it's often good practice to use hasOwnProperty to filter out inherited properties: for (const key in obj) { if (obj.hasOwnProperty(key)) { /* ... */ } }; 4) In JSX, you would typically use array methods like map, filter, or reduce instead of loops: {items.map(item => <ListItem key={item.id} {...item} />)}; 5) For iterating over Map or Set objects, 'for...of' is appropriate: for (const [key, value] of myMap) { /* ... */ }."
    }
  },
  {
    id: "javascript-35",
    level: 1,
    topic: "javascript",
    question: "What are JavaScript Modules and how are they used in React applications?",
    multipleCorrect: true,
    options: [
      {
        id: "javascript-35-a",
        text: "They allow code to be split into separate files and reused across an application",
        isCorrect: true,
        explanation: "JavaScript modules enable code organization by splitting functionality into separate files that can be imported where needed, promoting reusability and maintainability."
      },
      {
        id: "javascript-35-b",
        text: "They use 'import' and 'export' statements to share code between files",
        isCorrect: true,
        explanation: "Modern JavaScript modules use 'import' to bring in functionality from other modules and 'export' to make functionality available to other modules."
      },
      {
        id: "javascript-35-c",
        text: "In React, each component is typically defined in its own module",
        isCorrect: true,
        explanation: "A common pattern in React applications is to define each component in its own file (module), which makes the codebase more maintainable and enables better code splitting."
      },
      {
        id: "javascript-35-d",
        text: "They automatically make variables global across the entire application",
        isCorrect: false,
        explanation: "Modules actually do the opposite - they create their own scope and don't make variables global. Code in a module is only available to other modules if explicitly exported."
      },
      {
        id: "javascript-35-e",
        text: "They require a bundler like Webpack or a modern browser that supports ES modules",
        isCorrect: true,
        explanation: "To use ES modules in production applications, you typically need either a bundler like Webpack, Rollup, or Parcel to convert them to a format supported by all browsers, or you need to target only modern browsers that support ES modules natively."
      }
    ],
    explanation: {
      correct: "Correct! JavaScript modules split code into separate files, use import/export statements, allow components to be defined in their own modules, and require bundlers or modern browsers.",
      incorrect: "JavaScript modules split code into files, use import/export, allow component-per-file organization, and require bundlers or modern browsers. They don't make variables global—they actually encapsulate them.",
      detailed: "In React applications, modules are fundamental: 1) Component imports: import React from 'react'; import { useState } from 'react'; import Button from './Button'; 2) Named exports: export const Button = () => {...}; export function formatDate(date) {...}; 3) Default exports: export default function App() {...}; 4) Mixed exports: export const MIN_LENGTH = 8; export default function PasswordInput() {...}; 5) Re-exporting: export { default as Button } from './Button'; export * from './utils'; 6) Dynamic imports (for code splitting): const DashboardPage = React.lazy(() => import('./DashboardPage')); 7) Type imports in TypeScript: import type { User } from './types';. Modules help organize code, enable code splitting for performance, and create clear boundaries between different parts of an application."
    }
  },
  {
    id: "javascript-36",
    level: 1,
    topic: "javascript",
    question: "What is the 'this' keyword in JavaScript and how does it behave in different contexts?",
    multipleCorrect: true,
    options: [
      {
        id: "javascript-36-a",
        text: "In a method, 'this' refers to the owner object",
        isCorrect: true,
        explanation: "When a function is called as a method of an object, 'this' refers to the object that the method belongs to. For example, in obj.method(), 'this' inside method refers to obj."
      },
      {
        id: "javascript-36-b",
        text: "In a regular function, 'this' refers to the global object (or undefined in strict mode)",
        isCorrect: true,
        explanation: "When a function is called as a standalone function (not as a method), 'this' refers to the global object (window in browsers). In strict mode, it's undefined instead."
      },
      {
        id: "javascript-36-c",
        text: "In an arrow function, 'this' is lexically bound to the surrounding scope",
        isCorrect: true,
        explanation: "Arrow functions don't have their own 'this' binding. Instead, they inherit 'this' from the enclosing scope at the time they are defined, not when they are executed."
      },
      {
        id: "javascript-36-d",
        text: "The value of 'this' is always determined by how a function is defined",
        isCorrect: false,
        explanation: "For regular functions, the value of 'this' is determined by how the function is called, not how it's defined. Only arrow functions have 'this' determined by their definition context."
      },
      {
        id: "javascript-36-e",
        text: "Methods like call(), apply(), and bind() can explicitly set the value of 'this'",
        isCorrect: true,
        explanation: "JavaScript provides methods that allow you to explicitly control what 'this' refers to: call() and apply() set 'this' for a single invocation, while bind() creates a new function with 'this' permanently set to a specific value."
      }
    ],
    explanation: {
      correct: "Correct! In methods, 'this' refers to the owner object; in regular functions, it refers to the global object (or undefined in strict mode); in arrow functions, it's lexically bound; and methods like call/apply/bind can explicitly set 'this'.",
      incorrect: "The value of 'this' depends on how a function is called for regular functions, not how it's defined. In methods it refers to the owner object, in standalone functions to the global object (or undefined in strict mode), in arrow functions it's lexically bound, and call/apply/bind can set it explicitly.",
      detailed: "In React: 1) Class components: 'this' refers to the component instance, giving access to props, state, and methods. Event handlers need binding: constructor() { this.handleClick = this.handleClick.bind(this); }; 2) Alternative binding: using class fields (handleClick = () => {}) or inline arrow functions (onClick={() => this.handleClick()}); 3) Arrow functions in class components automatically capture the correct 'this'; 4) Functional components don't use 'this' at all - they use props passed as parameters and hooks for state and effects; 5) The behavior of 'this' is one reason many developers prefer functional components, as they avoid the complexity and potential bugs associated with 'this' binding."
    }
  },
  {
    id: "javascript-37",
    level: 1,
    topic: "javascript",
    question: "What is event delegation in JavaScript and how is it useful in React?",
    multipleCorrect: true,
    options: [
      {
        id: "javascript-37-a",
        text: "It's a technique where you attach a single event listener to a parent element instead of multiple listeners on child elements",
        isCorrect: true,
        explanation: "Event delegation involves attaching an event listener to a parent element that will fire for all matching events on its children, rather than attaching separate listeners to each child element."
      },
      {
        id: "javascript-37-b",
        text: "It leverages event bubbling to handle events for multiple elements",
        isCorrect: true,
        explanation: "Event delegation works because of event bubbling, where events triggered on an element bubble up through its ancestors. The parent element can then handle events that originated from any of its descendants."
      },
      {
        id: "javascript-37-c",
        text: "It can improve performance by reducing the number of event listeners",
        isCorrect: true,
        explanation: "By using a single event listener on a parent instead of many listeners on individual elements, event delegation can significantly reduce memory usage and improve performance, especially for large lists or tables."
      },
      {
        id: "javascript-37-d",
        text: "In React, it's implemented automatically by the synthetic event system",
        isCorrect: true,
        explanation: "React's synthetic event system already uses event delegation internally. It attaches most event listeners to the document root and uses its own event system to determine which components should respond to events."
      },
      {
        id: "javascript-37-e",
        text: "It requires manually checking the event target in every event handler",
        isCorrect: false,
        explanation: "While traditional event delegation in vanilla JavaScript often involves checking the event.target, React handles this automatically. You don't need to manually check the target in your event handlers - React ensures the correct component's handler is called."
      }
    ],
    explanation: {
      correct: "Correct! Event delegation attaches a single listener to a parent instead of multiple listeners on children, leverages event bubbling, improves performance, and is implemented automatically by React's event system.",
      incorrect: "Event delegation uses a single parent listener instead of multiple child listeners, leverages bubbling, improves performance, and is built into React's event system. It doesn't require manually checking event.target in React handlers.",
      detailed: "In React applications: 1) React's synthetic event system implements event delegation automatically for most events, attaching listeners at the document level rather than to individual DOM nodes; 2) This is transparent to developers - you write event handlers as if they were attached directly to elements; 3) Benefits include better performance and memory usage, especially for long lists; 4) Example: <ul onClick={handleClick}>{items.map(item => <li key={item.id} data-id={item.id}>{item.text}</li>)}; 5) For very specific cases where you need custom event delegation, you can still access event.target in your handlers: const handleClick = (e) => { if (e.target.tagName === 'LI') { console.log('List item clicked:', e.target.dataset.id); } }; 6) React's approach ensures that event handling works consistently across browsers."
    }
  },
  {
    id: "javascript-38",
    level: 1,
    topic: "javascript",
    question: "What is the purpose of JSON.stringify() and JSON.parse() in JavaScript?",
    multipleCorrect: true,
    options: [
      {
        id: "javascript-38-a",
        text: "JSON.stringify() converts a JavaScript object to a JSON string",
        isCorrect: true,
        explanation: "JSON.stringify() serializes JavaScript objects, arrays, and primitive values into a JSON string format that can be easily transmitted or stored."
      },
      {
        id: "javascript-38-b",
        text: "JSON.parse() converts a JSON string back to a JavaScript object",
        isCorrect: true,
        explanation: "JSON.parse() deserializes a JSON string, transforming it back into JavaScript objects, arrays, and primitive values that can be used in your code."
      },
      {
        id: "javascript-38-c",
        text: "They're commonly used for storing data in localStorage or sessionStorage",
        isCorrect: true,
        explanation: "Since localStorage and sessionStorage can only store strings, JSON.stringify() is used to convert objects to strings before storage, and JSON.parse() is used to retrieve and convert them back to objects."
      },
      {
        id: "javascript-38-d",
        text: "They can handle all JavaScript data types, including functions and undefined",
        isCorrect: false,
        explanation: "JSON.stringify() cannot properly serialize functions, undefined, Symbols, or objects with circular references. Functions become null, undefined values are omitted from objects or become null in arrays, and circular references cause errors."
      },
      {
        id: "javascript-38-e",
        text: "They're used for deep cloning objects in JavaScript",
        isCorrect: true,
        explanation: "A common technique for creating a deep clone of an object is to use JSON.stringify() followed by JSON.parse(), though this only works for objects that can be fully serialized to JSON (no functions, undefined, etc.)."
      }
    ],
    explanation: {
      correct: "Correct! JSON.stringify() converts objects to JSON strings, JSON.parse() converts strings back to objects, they're used with localStorage/sessionStorage, and they can be used for deep cloning serializable objects.",
      incorrect: "JSON.stringify() and JSON.parse() convert between objects and JSON strings, are used with storage APIs, and can deep clone serializable objects. However, they can't handle all JavaScript data types—functions, undefined, Symbols, and circular references aren't properly serialized.",
      detailed: "In React applications, these methods are commonly used for: 1) Storing state in localStorage: localStorage.setItem('userData', JSON.stringify(userData)); const savedData = JSON.parse(localStorage.getItem('userData')); 2) Sending data to APIs: fetch('/api/users', { method: 'POST', body: JSON.stringify(userData) }); 3) Receiving data from APIs: response.json() (which uses JSON.parse() internally); 4) Creating independent copies of objects: const userCopy = JSON.parse(JSON.stringify(user)); 5) Debugging: console.log(JSON.stringify(complexObject, null, 2)); 6) Preserving state during development: const initialState = JSON.parse(localStorage.getItem('debugState')) || defaultState;. Remember that these methods have limitations with certain data types and can affect performance with very large objects."
    }
  },
  {
    id: "javascript-39",
    level: 1,
    topic: "javascript",
    question: "What is the purpose of the 'bind', 'call', and 'apply' methods in JavaScript?",
    multipleCorrect: true,
    options: [
      {
        id: "javascript-39-a",
        text: "They allow you to explicitly set the 'this' value for a function",
        isCorrect: true,
        explanation: "All three methods - bind, call, and apply - allow you to specify what object should be bound to 'this' when a function is invoked, giving you control over the function's execution context."
      },
      {
        id: "javascript-39-b",
        text: "'bind' returns a new function with 'this' permanently set to a specific value",
        isCorrect: true,
        explanation: "Unlike call and apply which invoke the function immediately, bind returns a new function with 'this' permanently bound to the specified value. This new function can be called later."
      },
      {
        id: "javascript-39-c",
        text: "'call' invokes a function with a specified 'this' value and arguments provided individually",
        isCorrect: true,
        explanation: "The call method invokes a function immediately with a specified 'this' value and arguments passed individually (comma-separated): func.call(thisArg, arg1, arg2, ...)."
      },
      {
        id: "javascript-39-d",
        text: "'apply' invokes a function with a specified 'this' value and arguments provided as an array",
        isCorrect: true,
        explanation: "The apply method invokes a function immediately with a specified 'this' value and arguments passed as an array (or array-like object): func.apply(thisArg, [arg1, arg2, ...])."
      },
      {
        id: "javascript-39-e",
        text: "They can only be used with arrow functions",
        isCorrect: false,
        explanation: "These methods cannot effectively change the 'this' value of arrow functions, since arrow functions have lexically bound 'this' values. They are primarily useful with regular functions."
      }
    ],
    explanation: {
      correct: "Correct! bind, call, and apply all set the 'this' value for functions; bind returns a new function with 'this' set; call invokes with individual arguments; and apply invokes with an array of arguments.",
      incorrect: "bind, call, and apply set the 'this' value for functions, with bind returning a new function and call/apply invoking immediately with different argument formats. They cannot change 'this' in arrow functions—they're primarily for regular functions.",
      detailed: "In React class components: 1) Binding event handlers: constructor() { this.handleClick = this.handleClick.bind(this); }; 2) Alternative to binding in constructor: <button onClick={this.handleClick.bind(this)}>; 3) Calling parent methods: parentMethod.call(this, arg1, arg2); 4) Invoking methods with a specific context: someMethod.apply(context, arguments); 5) Creating bound utility functions: const boundFormatter = formatter.bind(null, 'USD'); 6) In functional components, these methods are less common since 'this' binding isn't needed with hooks and arrow functions. However, they can still be useful for utility functions or when working with third-party libraries that expect specific 'this' contexts."
    }
  },
  {
    id: "javascript-40",
    level: 1,
    topic: "javascript",
    question: "What is a pure function in JavaScript and why is it important in React?",
    multipleCorrect: true,
    options: [
      {
        id: "javascript-40-a",
        text: "A function that always returns the same output for the same inputs",
        isCorrect: true,
        explanation: "Pure functions are deterministic - given the same inputs, they always produce the same output, with no randomness or variation, making their behavior predictable."
      },
      {
        id: "javascript-40-b",
        text: "A function that doesn't cause side effects (doesn't modify external state)",
        isCorrect: true,
        explanation: "Pure functions don't modify external variables or state, don't write to files, don't make network requests, and don't alter their input arguments. They work only with the values provided to them."
      },
      {
        id: "javascript-40-c",
        text: "React components should ideally be pure functions of their props and state",
        isCorrect: true,
        explanation: "React's rendering process assumes that components are pure functions of their props and state. Given the same props and state, a component should always render the same UI, which enables optimizations like memoization."
      },
      {
        id: "javascript-40-d",
        text: "Pure functions make testing and debugging easier",
        isCorrect: true,
        explanation: "Since pure functions always produce the same output for given inputs and don't have side effects, they're easier to test, debug, and reason about. You can test them in isolation without mocking external dependencies."
      },
      {
        id: "javascript-40-e",
        text: "All functions in React must be pure functions",
        isCorrect: false,
        explanation: "While React encourages pure functions, not all functions in a React application need to be pure. Event handlers, effects, and lifecycle methods often have side effects by design, such as updating state or interacting with external APIs."
      }
    ],
    explanation: {
      correct: "Correct! Pure functions always return the same output for the same inputs, don't cause side effects, make React components predictable, and make testing and debugging easier.",
      incorrect: "Pure functions return the same output for the same inputs, don't cause side effects, make React components predictable, and simplify testing. However, not all functions in React must be pure—event handlers and effects often have intentional side effects.",
      detailed: "In React, purity is a key concept: 1) Render functions should be pure: Given the same props and state, they should return the same JSX; 2) Reducer functions (for useReducer or Redux) should be pure: They should calculate the next state based only on the current state and action, without side effects; 3) Selector functions should be pure: Functions that derive data from state should return consistent results for the same state; 4) Pure components can be optimized: React.memo, shouldComponentUpdate, and useMemo rely on pure functions to work correctly; 5) Side effects belong in specific places: useEffect, event handlers, or lifecycle methods like componentDidMount, not in the render process; 6) Immutability helps maintain purity: Updating state or props immutably (creating new objects rather than modifying existing ones) helps keep functions pure."
    }
  },
  {
    id: "javascript-41",
    level: 1,
    topic: "javascript",
    question: "What is a callback function in JavaScript and how is it used in React?",
    multipleCorrect: true,
    options: [
      {
        id: "javascript-41-a",
        text: "A function passed as an argument to another function, to be executed later",
        isCorrect: true,
        explanation: "A callback function is a function that's passed as an argument to another function, allowing that function to call the callback at an appropriate time, such as when an operation completes."
      },
      {
        id: "javascript-41-b",
        text: "In React, callbacks are commonly used for event handling",
        isCorrect: true,
        explanation: "Event handlers in React are callback functions that get executed in response to user interactions like clicks, input changes, or form submissions."
      },
      {
        id: "javascript-41-c",
        text: "Callbacks allow child components to communicate with parent components",
        isCorrect: true,
        explanation: "In React's unidirectional data flow, parent components can pass callback functions to child components, allowing children to communicate back to their parents by calling these functions."
      },
      {
        id: "javascript-41-d",
        text: "Callback functions always execute synchronously",
        isCorrect: false,
        explanation: "Callback functions can execute either synchronously or asynchronously, depending on when the receiving function calls them. Many callbacks in JavaScript are asynchronous, such as those used with setTimeout or fetch."
      },
      {
        id: "javascript-41-e",
        text: "Callbacks are the only way to handle asynchronous operations in JavaScript",
        isCorrect: false,
        explanation: "While callbacks are one way to handle asynchronous operations, modern JavaScript offers alternatives like Promises and async/await syntax, which often provide more readable and maintainable code for complex asynchronous flows."
      }
    ],
    explanation: {
      correct: "Correct! Callback functions are passed as arguments to be executed later, are used for event handling in React, and allow child components to communicate with parent components.",
      incorrect: "Callback functions are passed as arguments to be executed later, are used for React event handling, and enable child-to-parent communication. They can execute asynchronously and aren't the only way to handle async operations (Promises and async/await are alternatives).",
      detailed: "In React applications, callbacks are ubiquitous: 1) Event handlers: <button onClick={() => handleClick()}>Click me</button>; 2) Child-to-parent communication: <ChildComponent onAction={handleAction} />; 3) Render props pattern: <DataProvider render={data => <DisplayComponent data={data} />} />; 4) Higher-order components: withRouter(MyComponent) uses callbacks internally; 5) Lifecycle methods and hooks: useEffect(() => { /* effect code */ return () => { /* cleanup callback */ }; }); 6) State updates with previous state: setState(prevState => ({ count: prevState.count + 1 })); 7) Callback refs: <input ref={el => this.inputRef = el} />. Understanding callbacks is essential for React development, though hooks like useCallback help manage them more effectively by preventing unnecessary re-renders caused by new callback instances."
    }
  },
  {
    id: "javascript-42",
    level: 1,
    topic: "javascript",
    question: "What is function currying in JavaScript and how can it be useful in React?",
    multipleCorrect: true,
    options: [
      {
        id: "javascript-42-a",
        text: "A technique of transforming a function that takes multiple arguments into a sequence of functions that each take a single argument",
        isCorrect: true,
        explanation: "Currying converts a function like f(a, b, c) into a function like f(a)(b)(c), where each function call takes exactly one argument and returns another function until all arguments have been provided."
      },
      {
        id: "javascript-42-b",
        text: "It allows partial application of function arguments",
        isCorrect: true,
        explanation: "Currying enables partial application, where you can fix some arguments of a function and create a new function that only needs the remaining arguments, making it more reusable in different contexts."
      },
      {
        id: "javascript-42-c",
        text: "In React, it can be used to create more specific event handlers from generic ones",
        isCorrect: true,
        explanation: "Currying is useful in React for creating specific event handlers from generic ones, such as generating handlers for specific list items or form fields without needing to use anonymous functions in render."
      },
      {
        id: "javascript-42-d",
        text: "It automatically memoizes function results for better performance",
        isCorrect: false,
        explanation: "Currying itself doesn't provide memoization (caching function results based on inputs). While you can combine currying with memoization, they are separate techniques with different purposes."
      },
      {
        id: "javascript-42-e",
        text: "It's a built-in feature of all JavaScript functions",
        isCorrect: false,
        explanation: "Currying is not a built-in feature of JavaScript functions. It's a programming technique that you implement manually or with the help of utility libraries like Lodash or Ramda."
      }
    ],
    explanation: {
      correct: "Correct! Function currying transforms multi-argument functions into sequences of single-argument functions, allows partial application, and can create specific event handlers from generic ones in React.",
      incorrect: "Function currying transforms functions to take arguments sequentially, enables partial application, and helps create specific event handlers in React. It doesn't automatically memoize results and isn't a built-in JavaScript feature.",
      detailed: "In React applications, currying can be particularly useful: 1) Event handlers for list items: const handleItemClick = id => event => { console.log('Item clicked:', id); }; return items.map(item => <li key={item.id} onClick={handleItemClick(item.id)}>); 2) Form field handlers: const handleInputChange = field => event => { setFormData(prev => ({ ...prev, [field]: event.target.value })); }; <input onChange={handleInputChange('email')} />; 3) Action creators in Redux: const updateUser = id => data => ({ type: 'UPDATE_USER', payload: { id, data } }); dispatch(updateUser(123)({ name: 'New Name' })); 4) Higher-order components: const withData = resource => Component => props => { /* fetch data */ return <Component data={data} {...props} />; }; 5) Creating specialized utility functions: const formatCurrency = currency => amount => new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount); const formatUSD = formatCurrency('USD');"
    }
  },
  
  // JSX (36 questions)
  {
    id: "jsx-1",
    level: 1,
    topic: "jsx",
    question: "What is JSX in React?",
    multipleCorrect: true,
    options: [
      {
        id: "jsx-1-a",
        text: "A syntax extension to JavaScript that looks similar to HTML",
        isCorrect: true,
        explanation: "JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files, making it easier to describe what the UI should look like."
      },
      {
        id: "jsx-1-b",
        text: "A template language that gets compiled to React.createElement() calls",
        isCorrect: true,
        explanation: "JSX is not actually run by the browser. It's compiled (usually by Babel) into regular JavaScript function calls to React.createElement()."
      },
      {
        id: "jsx-1-c",
        text: "A way to embed JavaScript expressions within markup using curly braces {}",
        isCorrect: true,
        explanation: "JSX allows you to embed JavaScript expressions within curly braces {}, enabling dynamic content and logic within your markup."
      },
      {
        id: "jsx-1-d",
        text: "A separate programming language that React requires",
        isCorrect: false,
        explanation: "JSX is not a separate programming language. It's a syntax extension to JavaScript that gets compiled to regular JavaScript before running in the browser."
      },
      {
        id: "jsx-1-e",
        text: "Identical to HTML in syntax and behavior",
        isCorrect: false,
        explanation: "While JSX looks similar to HTML, it has several differences: attributes use camelCase (className instead of class), all tags must be closed, and attribute values use JavaScript expressions in curly braces rather than string interpolation."
      }
    ],
    explanation: {
      correct: "Correct! JSX is a syntax extension to JavaScript that looks like HTML, gets compiled to React.createElement() calls, and allows embedding JavaScript expressions within markup using curly braces {}.",
      incorrect: "JSX is a syntax extension to JavaScript that resembles HTML, compiles to React.createElement() calls, and allows JavaScript expressions in curly braces. It's not a separate language and differs from HTML in several ways.",
      detailed: "JSX provides a more intuitive way to work with UI in JavaScript: 1) Basic syntax: const element = <h1>Hello, world!</h1>; 2) With JavaScript expressions: const element = <h1>Hello, {name}!</h1>; 3) With attributes: const element = <div className='container'>{content}</div>; 4) Self-closing tags: <img src={imageUrl} alt='Description' />; 5) Compiled output: React.createElement('h1', null, 'Hello, world!'); 6) Fragments: <><li>Item 1</li><li>Item 2</li></>. JSX makes React code more readable and intuitive by allowing developers to write what looks like HTML directly in JavaScript, while still providing the full power of JavaScript for dynamic content and logic."
    }
  },
  {
    id: "jsx-2",
    level: 1,
    topic: "jsx",
    question: "How do you embed JavaScript expressions in JSX?",
    multipleCorrect: true,
    options: [
      {
        id: "jsx-2-a",
        text: "By using curly braces: {expression}",
        isCorrect: true,
        explanation: "Curly braces {} in JSX create a window into JavaScript, allowing you to embed any valid JavaScript expression inside your markup."
      },
      {
        id: "jsx-2-b",
        text: "You can use expressions in attribute values: <div id={userId}>",
        isCorrect: true,
        explanation: "JSX allows JavaScript expressions in attribute values using curly braces, instead of using quotes which would make it a string literal."
      },
      {
        id: "jsx-2-c",
        text: "You can use expressions for conditional rendering: {isLoggedIn && <UserGreeting />}",
        isCorrect: true,
        explanation: "Logical operators like && can be used within curly braces for conditional rendering, where the right-hand expression is only rendered if the left-hand expression is truthy."
      },
      {
        id: "jsx-2-d",
        text: "By using string interpolation: `${expression}`",
        isCorrect: false,
        explanation: "String interpolation with backticks (`${expression}`) is a JavaScript feature, but it's not how expressions are embedded in JSX. In JSX, you use curly braces {} instead."
      },
      {
        id: "jsx-2-e",
        text: "By using double curly braces for objects: {{ key: value }}",
        isCorrect: true,
        explanation: "When you need to pass an object literal in JSX, you use double curly braces - the outer pair for the JSX expression and the inner pair for the object literal syntax."
      }
    ],
    explanation: {
      correct: "Correct! JavaScript expressions in JSX are embedded using curly braces {}, can be used in attribute values, for conditional rendering, and with double braces for object literals.",
      incorrect: "JavaScript expressions in JSX use curly braces {}, work in attributes, enable conditional rendering with && operators, and use double braces for objects. String interpolation with backticks isn't used for JSX expressions.",
      detailed: "JSX's expression embedding is powerful and flexible: 1) Simple values: <h1>{title}</h1>; 2) Calculations: <div>{2 + 2}</div>; 3) Function calls: <div>{formatName(user)}</div>; 4) Object properties: <img src={user.avatarUrl} />; 5) Inline objects: <div style={{ color: 'red', fontSize: '14px' }}></div>; 6) Conditional rendering: {isLoggedIn ? <LogoutButton /> : <LoginButton />}; 7) Array methods: <ul>{items.map(item => <li key={item.id}>{item.text}</li>)}</ul>; 8) IIFE for complex logic: {(() => { const result = complexOperation(); return <span>{result}</span>; })()}. Remember that JSX expressions can only contain expressions, not statements like if, for, while, or function declarations."
    }
  },
  {
    id: "jsx-3",
    level: 1,
    topic: "jsx",
    question: "What are the key differences between HTML and JSX?",
    multipleCorrect: true,
    options: [
      {
        id: "jsx-3-a",
        text: "JSX uses className instead of class for CSS classes",
        isCorrect: true,
        explanation: "Since 'class' is a reserved keyword in JavaScript, JSX uses 'className' instead to specify CSS classes, aligning with the DOM property name in JavaScript."
      },
      {
        id: "jsx-3-b",
        text: "JSX requires all tags to be closed, including self-closing tags like <img />",
        isCorrect: true,
        explanation: "Unlike HTML which allows some tags to remain unclosed, JSX requires all tags to be properly closed, either with a closing tag or as a self-closing tag with a slash at the end."
      },
      {
        id: "jsx-3-c",
        text: "JSX uses camelCase for attribute names (e.g., onClick instead of onclick)",
        isCorrect: true,
        explanation: "JSX uses camelCase naming convention for attributes, following JavaScript's convention for DOM properties, rather than HTML's lowercase attribute names."
      },
      {
        id: "jsx-3-d",
        text: "JSX allows embedding JavaScript expressions using curly braces {}",
        isCorrect: true,
        explanation: "JSX allows JavaScript expressions to be embedded directly within the markup using curly braces, enabling dynamic content and logic that HTML alone cannot provide."
      },
      {
        id: "jsx-3-e",
        text: "JSX elements must always have a parent element wrapping them",
        isCorrect: false,
        explanation: "While this was true in earlier versions of React, modern React allows multiple elements without a wrapper using React Fragments (<> ... </>) or by returning arrays of elements."
      }
    ],
    explanation: {
      correct: "Correct! JSX uses className instead of class, requires all tags to be closed, uses camelCase for attributes, and allows embedding JavaScript expressions with curly braces.",
      incorrect: "JSX differs from HTML by using className, requiring closed tags, using camelCase attributes, and allowing JavaScript expressions. However, JSX elements don't always need a parent wrapper thanks to Fragments.",
      detailed: "Other important differences include: 1) The 'for' attribute becomes 'htmlFor' in JSX (for labels); 2) Inline styles are specified as objects, not strings: style={{ color: 'red' }} instead of style='color: red'; 3) Comments in JSX use JavaScript comment syntax inside curly braces: {/* comment */}; 4) Some HTML entities need to be escaped or used as Unicode characters in JSX; 5) JSX prevents injection attacks by escaping values before rendering, making it safe to embed user input; 6) Event handlers in JSX receive a synthetic event object that works consistently across browsers; 7) In JSX, all custom components must start with a capital letter to distinguish them from HTML elements: <Dropdown /> vs <div>."
    }
  },
  {
    id: "jsx-4",
    level: 1,
    topic: "jsx",
    question: "How do you handle conditional rendering in JSX?",
    multipleCorrect: true,
    options: [
      {
        id: "jsx-4-a",
        text: "Using the ternary operator: {condition ? <ComponentA /> : <ComponentB />}",
        isCorrect: true,
        explanation: "The ternary operator allows for inline conditional rendering with both 'if' and 'else' branches, returning different JSX based on the condition."
      },
      {
        id: "jsx-4-b",
        text: "Using logical && operator: {condition && <Component />}",
        isCorrect: true,
        explanation: "The logical && operator is useful for conditional rendering when you only want to render something if the condition is true, with nothing rendered otherwise."
      },
      {
        id: "jsx-4-c",
        text: "Using variables to store JSX elements before the return statement",
        isCorrect: true,
        explanation: "You can use regular JavaScript if/else statements to assign different JSX to variables before the return statement, allowing for more complex conditional logic."
      },
      {
        id: "jsx-4-d",
        text: "Using if/else statements directly inside JSX curly braces",
        isCorrect: false,
        explanation: "You cannot use if/else statements directly inside JSX curly braces because they are statements, not expressions. JSX curly braces can only contain expressions that return a value."
      },
      {
        id: "jsx-4-e",
        text: "Using immediately-invoked function expressions (IIFE) for complex conditions",
        isCorrect: true,
        explanation: "For complex conditional logic, you can use an immediately-invoked function expression within curly braces to execute arbitrary code and return JSX: {(() => { /* complex logic */ return <Component />; })()}"
      }
    ],
    explanation: {
      correct: "Correct! Conditional rendering in JSX can use ternary operators, logical && operators, variables to store elements, and IIFEs for complex conditions.",
      incorrect: "JSX conditional rendering can use ternary operators, && operators, variables to store elements, and IIFEs for complex logic. However, you cannot use if/else statements directly inside JSX curly braces.",
      detailed: "Each conditional rendering approach has its use cases: 1) Ternary operator for simple if/else: {isLoggedIn ? <LogoutButton /> : <LoginButton />}; 2) Logical && for simple if with no else: {isAdmin && <AdminPanel />}; 3) Variables for more complex logic: let button; if (isLoggedIn) { button = <LogoutButton />; } else { button = <LoginButton />; }; return <div>{button}</div>; 4) Early returns for entire component conditionals: if (!user) return <Loading />; 5) Switch statements (outside JSX): switch(status) { case 'loading': return <Loading />; case 'error': return <Error />; default: return <Content />; }; 6) IIFE for complex inline logic: {(() => { const isSpecial = complex(); return isSpecial ? <Special /> : <Normal />; })()}. The approach you choose depends on readability and the complexity of your conditions."
    }
  },
  {
    id: "jsx-5",
    level: 1,
    topic: "jsx",
    question: "How do you render lists in JSX?",
    multipleCorrect: true,
    options: [
      {
        id: "jsx-5-a",
        text: "Using the map() method to transform an array of data into an array of JSX elements",
        isCorrect: true,
        explanation: "The map() method is commonly used to iterate over an array of data and return a new array of JSX elements, which React can then render."
      },
      {
        id: "jsx-5-b",
        text: "Each list item should have a unique 'key' prop to help React identify changes efficiently",
        isCorrect: true,
        explanation: "The key prop is essential for lists in React as it helps the reconciliation algorithm identify which items have changed, been added, or removed, improving performance and preventing bugs."
      },
      {
        id: "jsx-5-c",
        text: "Using array methods like filter() before map() to conditionally include items",
        isCorrect: true,
        explanation: "You can chain array methods like filter() before map() to conditionally include only certain items from your data array in the rendered list."
      },
      {
        id: "jsx-5-d",
        text: "Using for loops directly inside JSX curly braces",
        isCorrect: false,
        explanation: "You cannot use for loops directly inside JSX curly braces because they are statements, not expressions. JSX curly braces can only contain expressions that return a value."
      },
      {
        id: "jsx-5-e",
        text: "Using the forEach() method to render each item",
        isCorrect: false,
        explanation: "forEach() doesn't return anything, so it can't be used directly in JSX to render lists. map() is used instead because it returns a new array of elements."
      }
    ],
    explanation: {
      correct: "Correct! Lists in JSX are rendered using the map() method to transform data into JSX elements, with unique 'key' props for each item, and can use filter() for conditional inclusion.",
      incorrect: "Lists in JSX are rendered using map() with unique keys for each item, and can use filter() for conditional inclusion. You cannot use for loops or forEach() directly in JSX since they don't return values.",
      detailed: "List rendering patterns in React: 1) Basic mapping: {items.map(item => <li key={item.id}>{item.text}</li>)}; 2) With filtering: {items.filter(item => item.isActive).map(item => <li key={item.id}>{item.text}</li>)}; 3) With index as key (only if list is static): {items.map((item, index) => <li key={index}>{item.text}</li>)}; 4) Complex transformations: {items.map(item => { const className = item.isSpecial ? 'special' : 'normal'; return <li key={item.id} className={className}>{item.text}</li>; })}; 5) Empty list handling: {items.length > 0 ? items.map(...) : <p>No items found</p>}; 6) Lists of components: {users.map(user => <UserCard key={user.id} user={user} />)}. Remember that keys should be stable, predictable, and unique among siblings."
    }
  },
  {
    id: "jsx-6",
    level: 1,
    topic: "jsx",
    question: "What is the purpose of the 'key' prop when rendering lists in JSX?",
    multipleCorrect: true,
    options: [
      {
        id: "jsx-6-a",
        text: "To help React identify which items have changed, been added, or removed",
        isCorrect: true,
        explanation: "Keys help React's reconciliation algorithm efficiently update the DOM by identifying which list items have changed, been added, or removed."
      },
      {
        id: "jsx-6-b",
        text: "To maintain component state when list items are reordered",
        isCorrect: true,
        explanation: "When list items are reordered, stable keys help React preserve the state of components associated with each item, rather than resetting state based on item position."
      },
      {
        id: "jsx-6-c",
        text: "Keys should be unique among siblings, but don't need to be globally unique",
        isCorrect: true,
        explanation: "Keys only need to be unique among siblings in the same array, not globally unique across the entire application. The same key can be used in different arrays."
      },
      {
        id: "jsx-6-d",
        text: "Using array indices as keys is always the best practice",
        isCorrect: false,
        explanation: "Using array indices as keys is generally not recommended, especially for lists that can change order or have items added/removed in the middle, as it can lead to performance issues and bugs with component state."
      },
      {
        id: "jsx-6-e",
        text: "The key prop is accessible in the component as props.key",
        isCorrect: false,
        explanation: "The key prop is not accessible inside the component via props.key. It's a special prop used by React internally, and is not passed to the component."
      }
    ],
    explanation: {
      correct: "Correct! The key prop helps React identify changed items, maintains component state during reordering, and only needs to be unique among siblings.",
      incorrect: "The key prop helps React track items, preserve state during reordering, and only needs sibling-level uniqueness. Using array indices as keys isn't always best practice, and key isn't accessible as props.key in components.",
      detailed: "Best practices for keys: 1) Use stable, unique identifiers from your data: <li key={item.id}>; 2) If your data doesn't have IDs, generate stable ones when the data is created; 3) Use indices only for static lists that won't change: <li key={index}>; 4) Avoid using random values or non-stable values like Math.random() as keys; 5) For nested lists, include parent information in keys to ensure uniqueness: <li key={`${parentId}-${item.id}`}>; 6) Keys should be assigned to the top-level elements returned from map(), not to elements within them; 7) Missing or duplicate keys will generate console warnings in development mode. Proper key usage is crucial for both performance and correctness in React applications, especially for lists that change over time."
    }
  },
  {
    id: "jsx-7",
    level: 1,
    topic: "jsx",
    question: "How do you handle forms in JSX?",
    multipleCorrect: true,
    options: [
      {
        id: "jsx-7-a",
        text: "Use the onChange event to update component state as the user types",
        isCorrect: true,
        explanation: "The onChange event is used to capture user input in real-time and update component state, creating a controlled component where React state is the 'single source of truth'."
      },
      {
        id: "jsx-7-b",
        text: "Use the onSubmit event on the form element to handle form submission",
        isCorrect: true,
        explanation: "The onSubmit event on the form element is used to handle form submission, typically preventing the default browser behavior and processing the form data."
      },
      {
        id: "jsx-7-c",
        text: "Use the value prop on input elements to control their values from state",
        isCorrect: true,
        explanation: "In controlled components, the value prop on input elements is set from component state, making React state the source of truth for the input value."
      },
      {
        id: "jsx-7-d",
        text: "Form elements automatically update component state when changed",
        isCorrect: false,
        explanation: "Form elements do not automatically update component state. You need to explicitly handle events like onChange and update state yourself using setState or a state setter function."
      },
      {
        id: "jsx-7-e",
        text: "Use preventDefault() in the submit handler to prevent page reload",
        isCorrect: true,
        explanation: "Calling preventDefault() on the event in the submit handler prevents the browser's default behavior of reloading the page, allowing you to handle the submission with JavaScript."
      }
    ],
    explanation: {
      correct: "Correct! In JSX forms, you use onChange to update state as users type, onSubmit to handle submission, value props to control inputs, and preventDefault() to prevent page reloads.",
      incorrect: "JSX forms use onChange for input updates, onSubmit for submission handling, value props for controlled inputs, and preventDefault() to prevent reloads. Form elements don't automatically update component state.",
      detailed: "Common form patterns in React: 1) Controlled component: const [value, setValue] = useState(''); return <input value={value} onChange={e => setValue(e.target.value)} />; 2) Form submission: const handleSubmit = (e) => { e.preventDefault(); /* process form */ }; return <form onSubmit={handleSubmit}>...</form>; 3) Multiple inputs: const [formData, setFormData] = useState({ name: '', email: '' }); const handleChange = (e) => { setFormData({ ...formData, [e.target.name]: e.target.value }); }; 4) Form validation: const [errors, setErrors] = useState({}); /* validate in handleChange or handleSubmit */; 5) Checkbox handling: <input type='checkbox' checked={isChecked} onChange={e => setIsChecked(e.target.checked)} />; 6) Select handling: <select value={selected} onChange={e => setSelected(e.target.value)}>. These patterns ensure that React state remains the 'single source of truth' for form data."
    }
  },
  {
    id: "jsx-8",
    level: 1,
    topic: "jsx",
    question: "How do you add comments in JSX?",
    multipleCorrect: true,
    options: [
      {
        id: "jsx-8-a",
        text: "Using JavaScript-style comments inside curly braces: {/* This is a comment */}",
        isCorrect: true,
        explanation: "JSX comments use JavaScript's multi-line comment syntax wrapped in curly braces, allowing comments to be included within JSX code."
      },
      {
        id: "jsx-8-b",
        text: "Single-line comments work the same way: {// This is a comment}",
        isCorrect: false,
        explanation: "Single-line JavaScript comments (// comment) don't work reliably in JSX and can cause syntax errors. Multi-line comments ({/* comment */}) should be used instead."
      },
      {
        id: "jsx-8-c",
        text: "You can use regular JavaScript comments outside of the JSX",
        isCorrect: true,
        explanation: "Regular JavaScript comments (both // and /* */) can be used normally outside of JSX, such as before the return statement or between function definitions."
      },
      {
        id: "jsx-8-d",
        text: "Using HTML-style comments: <!-- This is a comment -->",
        isCorrect: false,
        explanation: "HTML-style comments (<!-- comment -->) don't work in JSX and will cause syntax errors. JSX requires JavaScript-style comments inside curly braces."
      },
      {
        id: "jsx-8-e",
        text: "Comments can span multiple lines inside the curly braces",
        isCorrect: true,
        explanation: "Multi-line comments in JSX can span multiple lines inside the curly braces, just like regular JavaScript multi-line comments."
      }
    ],
    explanation: {
      correct: "Correct! In JSX, comments use JavaScript's multi-line syntax inside curly braces ({/* comment */}), can be used normally outside JSX, and can span multiple lines inside the braces.",
      incorrect: "JSX comments use JavaScript's multi-line syntax in curly braces ({/* comment */}), work normally outside JSX, and can span multiple lines. Single-line comments in braces and HTML-style comments don't work in JSX.",
      detailed: "JSX comment examples: 1) Basic comment: return ( <div> {/* This is a comment */} <p>Content</p> </div> ); 2) Multi-line comment: {/* This comment spans multiple lines in JSX */}; 3) Commenting out JSX: return ( <div> {/* <header>Temporarily removed</header> */} <main>Content</main> </div> ); 4) Regular JS comments outside JSX: // This is fine here function Component() { // This is also fine return ( <div>{/* But here we need curly braces */}</div> ); }. Remember that all comments in the final JSX are removed during the build process and don't appear in the generated HTML, making them safe for developer notes."
    }
  },
  {
    id: "jsx-9",
    level: 1,
    topic: "jsx",
    question: "How do you apply CSS styles in JSX?",
    multipleCorrect: true,
    options: [
      {
        id: "jsx-9-a",
        text: "Using the className attribute for CSS classes",
        isCorrect: true,
        explanation: "In JSX, you use className instead of the HTML class attribute to apply CSS classes to elements, since 'class' is a reserved keyword in JavaScript."
      },
      {
        id: "jsx-9-b",
        text: "Using inline styles with the style attribute and a JavaScript object",
        isCorrect: true,
        explanation: "Inline styles in JSX are specified as JavaScript objects with camelCased property names, not as strings like in HTML: style={{ color: 'red' }} instead of style='color: red'."
      },
      {
        id: "jsx-9-c",
        text: "Inline style properties use camelCase instead of kebab-case",
        isCorrect: true,
        explanation: "CSS properties in inline styles use camelCase naming (backgroundColor) instead of kebab-case (background-color), following JavaScript's convention for object properties."
      },
      {
        id: "jsx-9-d",
        text: "Using the class attribute like in regular HTML",
        isCorrect: false,
        explanation: "The HTML 'class' attribute doesn't work in JSX because 'class' is a reserved keyword in JavaScript. You must use 'className' instead."
      },
      {
        id: "jsx-9-e",
        text: "Style values must be strings, even for numeric values",
        isCorrect: false,
        explanation: "Numeric values can be provided without quotes for properties that accept pixels (e.g., fontSize: 16 is equivalent to fontSize: '16px'). Only string values need quotes."
      }
    ],
    explanation: {
      correct: "Correct! In JSX, you apply CSS using className for classes, inline styles with JavaScript objects, and camelCase property names for inline styles.",
      incorrect: "JSX styles use className (not class), JavaScript objects for inline styles, and camelCase properties. Numeric values don't always need strings—pixels are added automatically for many properties.",
      detailed: "CSS in React has several approaches: 1) External CSS: import './styles.css'; <div className='container'>; 2) Inline styles: <div style={{ color: 'blue', fontSize: 14 }}>; 3) Dynamic classes: <div className={`box ${isActive ? 'active' : ''}`}>; 4) Conditional styles: <div style={{ display: isVisible ? 'block' : 'none' }}>; 5) Multiple classes with libraries: <div className={classNames('btn', { 'btn-primary': isPrimary, 'btn-large': isLarge })}>; 6) CSS Modules: import styles from './Button.module.css'; <button className={styles.primary}>; 7) CSS-in-JS libraries: const StyledButton = styled.button`color: ${props => props.primary ? 'blue' : 'gray'};`. Each approach has trade-offs in terms of scoping, performance, and developer experience."
    }
  },
  {
    id: "jsx-10",
    level: 1,
    topic: "jsx",
    question: "What are React Fragments and how are they used in JSX?",
    multipleCorrect: true,
    options: [
      {
        id: "jsx-10-a",
        text: "They allow returning multiple elements without adding extra nodes to the DOM",
        isCorrect: true,
        explanation: "Fragments let you group multiple elements together without adding an unnecessary wrapper div or other element to the DOM, keeping the DOM cleaner."
      },
      {
        id: "jsx-10-b",
        text: "They can be written as <React.Fragment> or the shorthand <> syntax",
        isCorrect: true,
        explanation: "Fragments can be written using the explicit <React.Fragment> syntax or the shorter <> </> syntax, which is more concise but doesn't support attributes except for key."
      },
      {
        id: "jsx-10-c",
        text: "They're useful for returning adjacent JSX elements from a component",
        isCorrect: true,
        explanation: "Fragments solve the common problem of needing to return multiple adjacent elements from a component, which wasn't possible before without wrapping them in a container element."
      },
      {
        id: "jsx-10-d",
        text: "They improve performance by reducing the number of DOM nodes",
        isCorrect: true,
        explanation: "By avoiding unnecessary wrapper elements, Fragments can improve performance slightly by reducing the number of DOM nodes created and manipulated."
      },
      {
        id: "jsx-10-e",
        text: "They can have any props just like regular DOM elements",
        isCorrect: false,
        explanation: "Fragments can only take the 'key' prop when using the explicit <React.Fragment> syntax. They don't support other props or attributes that regular DOM elements do."
      }
    ],
    explanation: {
      correct: "Correct! React Fragments allow returning multiple elements without extra DOM nodes, can be written as <React.Fragment> or <>, are useful for adjacent elements, and can improve performance.",
      incorrect: "React Fragments allow returning multiple elements without extra DOM nodes, use <React.Fragment> or <> syntax, help with adjacent elements, and improve performance. Unlike DOM elements, they only support the key prop (not any props).",
      detailed: "Fragment usage patterns: 1) Basic usage: return ( <> <h1>Title</h1> <p>Paragraph</p> </> ); 2) With the key attribute: return ( <dl> {items.map(item => ( <React.Fragment key={item.id}> <dt>{item.term}</dt> <dd>{item.description}</dd> </React.Fragment> ))} </dl> ); 3) Avoiding wrapper divs in layouts: <> <Header /> <Main /> <Footer /> </>; 4) Returning multiple elements from render methods: renderItems() { return ( <> <Item1 /> <Item2 /> </> ); }; 5) Conditional groups: {isLoggedIn && ( <> <Avatar /> <UserMenu /> </> )}. Fragments are particularly useful for component layouts, lists, and anywhere you need to group elements without affecting the DOM structure."
    }
  },
  {
    id: "jsx-11",
    level: 1,
    topic: "jsx",
    question: "How do you handle events in JSX?",
    multipleCorrect: true,
    options: [
      {
        id: "jsx-11-a",
        text: "Using camelCase event handlers like onClick, onChange, onSubmit",
        isCorrect: true,
        explanation: "JSX uses camelCase naming for event handlers (onClick instead of onclick), following JavaScript's convention for DOM properties rather than HTML's lowercase attribute names."
      },
      {
        id: "jsx-11-b",
        text: "Passing functions as event handlers, not strings",
        isCorrect: true,
        explanation: "In JSX, you pass function references as event handlers, not string expressions like in HTML. For example: onClick={handleClick} instead of onclick='handleClick()'."
      },
      {
        id: "jsx-11-c",
        text: "Event handlers receive a synthetic event object as an argument",
        isCorrect: true,
        explanation: "React wraps native browser events in a synthetic event object that works consistently across browsers and has the same interface as native events."
      },
      {
        id: "jsx-11-d",
        text: "Using inline arrow functions for handlers that need arguments",
        isCorrect: true,
        explanation: "When an event handler needs additional arguments, you can use an arrow function to wrap the call: onClick={() => handleClick(id)} rather than binding the function."
      },
      {
        id: "jsx-11-e",
        text: "Event handlers automatically have access to 'this' in class components",
        isCorrect: false,
        explanation: "Event handlers in class components don't automatically have access to 'this'. They need to be bound in the constructor, defined as arrow functions, or wrapped in arrow functions in the JSX."
      }
    ],
    explanation: {
      correct: "Correct! JSX events use camelCase handlers, take functions (not strings), receive a synthetic event object, and can use inline arrow functions for passing arguments.",
      incorrect: "JSX events use camelCase handlers, take functions (not strings), receive synthetic event objects, and can use arrow functions for arguments. However, class component handlers don't automatically have 'this' access—they need binding.",
      detailed: "Event handling patterns: 1) Basic handler: <button onClick={handleClick}>Click</button>; 2) With parameters: <button onClick={() => handleClick(id)}>Delete</button>; 3) Accessing event object with parameters: <button onClick={(e) => handleClick(id, e)}>Click</button>; 4) Form events: <form onSubmit={handleSubmit}>; 5) Input changes: <input onChange={handleChange} />; 6) In class components with binding: constructor() { this.handleClick = this.handleClick.bind(this); }; 7) Class components with property initializer: handleClick = () => { /* 'this' is automatically bound */ }; 8) Preventing default behavior: const handleSubmit = (e) => { e.preventDefault(); /* form handling */ }; 9) Stopping propagation: const handleClick = (e) => { e.stopPropagation(); /* handler code */ }."
    }
  },
  {
    id: "jsx-12",
    level: 1,
    topic: "jsx",
    question: "What is the purpose of dangerouslySetInnerHTML in React?",
    multipleCorrect: true,
    options: [
      {
        id: "jsx-12-a",
        text: "It's React's replacement for using innerHTML in the browser DOM",
        isCorrect: true,
        explanation: "dangerouslySetInnerHTML is React's equivalent to setting innerHTML in the DOM, allowing you to insert HTML directly from your code."
      },
      {
        id: "jsx-12-b",
        text: "It's named 'dangerously' to remind developers of the security risks",
        isCorrect: true,
        explanation: "The prop is intentionally named with 'dangerously' as a warning that improper use can lead to cross-site scripting (XSS) vulnerabilities if the HTML isn't properly sanitized."
      },
      {
        id: "jsx-12-c",
        text: "It takes an object with a __html property containing the HTML string",
        isCorrect: true,
        explanation: "The prop expects an object with a __html property (with double underscores) containing the HTML string, not just the string directly, as an additional safeguard."
      },
      {
        id: "jsx-12-d",
        text: "It automatically sanitizes HTML to prevent XSS attacks",
        isCorrect: false,
        explanation: "dangerouslySetInnerHTML does NOT sanitize the HTML. It's the developer's responsibility to ensure the HTML is safe before using this feature, which is why it's marked as dangerous."
      },
      {
        id: "jsx-12-e",
        text: "It's the recommended way to render dynamic content in React",
        isCorrect: false,
        explanation: "It's not the recommended way to render dynamic content. React's declarative approach with JSX is preferred for most cases. dangerouslySetInnerHTML should only be used when absolutely necessary."
      }
    ],
    explanation: {
      correct: "Correct! dangerouslySetInnerHTML is React's innerHTML replacement, is named to warn of security risks, and takes an object with a __html property.",
      incorrect: "dangerouslySetInnerHTML is React's innerHTML replacement, has a warning name, and requires an object with __html. It doesn't sanitize HTML automatically and isn't the recommended way to render dynamic content.",
      detailed: "Usage and considerations: 1) Basic usage: <div dangerouslySetInnerHTML={{ __html: htmlString }} />; 2) Security risks: Only use with trusted content that you've verified or sanitized, never with user-generated content without sanitization; 3) Sanitization libraries: Consider using DOMPurify or similar libraries when you need to clean HTML: <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(userHtml) }} />; 4) Alternatives: For most cases, React's declarative rendering is safer and more maintainable; 5) Common use cases: Rendering content from a CMS, integrating with third-party HTML-generating libraries, or displaying rich text that's been sanitized server-side; 6) Performance: Can be useful for integrating with non-React code or libraries that generate large HTML structures that would be inefficient to represent as React elements."
    }
  },
  {
    id: "jsx-13",
    level: 1,
    topic: "jsx",
    question: "How do you handle boolean attributes in JSX?",
    multipleCorrect: true,
    options: [
      {
        id: "jsx-13-a",
        text: "Setting the attribute to true: disabled={true}",
        isCorrect: true,
        explanation: "You can explicitly set a boolean attribute to true using curly braces: disabled={true}, which is equivalent to just including the attribute."
      },
      {
        id: "jsx-13-b",
        text: "Including the attribute without a value: <button disabled>",
        isCorrect: true,
        explanation: "Simply including the attribute name without a value is shorthand for setting it to true: <button disabled> is equivalent to <button disabled={true}>."
      },
      {
        id: "jsx-13-c",
        text: "Conditionally including the attribute: disabled={isDisabled}",
        isCorrect: true,
        explanation: "You can conditionally set boolean attributes by providing a boolean expression: disabled={isDisabled} will only include the attribute if isDisabled evaluates to true."
      },
      {
        id: "jsx-13-d",
        text: "Using string values: disabled=\"true\" or disabled=\"false\"",
        isCorrect: false,
        explanation: "Using string values like disabled=\"true\" doesn't work as expected in React. Any non-empty string is considered truthy in JavaScript, so disabled=\"false\" would actually enable the attribute."
      },
      {
        id: "jsx-13-e",
        text: "Omitting the attribute entirely when it should be false",
        isCorrect: true,
        explanation: "When a boolean attribute should be false, you typically omit it entirely rather than setting it to false. However, explicitly setting it to false also works: disabled={false}."
      }
    ],
    explanation: {
      correct: "Correct! Boolean attributes in JSX can be set explicitly to true, included without a value, conditionally included with expressions, or omitted entirely when false.",
      incorrect: "Boolean attributes in JSX can use explicit true values, be included without values, use conditional expressions, or be omitted when false. Using string values like disabled=\"true\" doesn't work as expected.",
      detailed: "Boolean attribute patterns: 1) Explicit true: <input required={true} />; 2) Shorthand: <input required />; 3) Conditional: <input disabled={isDisabled} />; 4) Ternary for complex conditions: <input aria-invalid={errors.email ? 'true' : 'false'} />; 5) Omitting when false: {isRequired && <input required />}; 6) Common boolean attributes: disabled, checked, readOnly, required, autoFocus, hidden, spellCheck, etc.; 7) ARIA attributes: While many ARIA attributes appear boolean, they actually expect string values 'true' or 'false': aria-hidden={isHidden.toString()}; 8) Data attributes: data-* attributes can be set like any other attribute: data-testid={`user-${id}`}. Understanding boolean attributes helps write cleaner, more idiomatic React code."
    }
  },
  {
    id: "jsx-14",
    level: 1,
    topic: "jsx",
    question: "How do you use JavaScript expressions in JSX attribute values?",
    multipleCorrect: true,
    options: [
      {
        id: "jsx-14-a",
        text: "Using curly braces: <img src={imageUrl} />",
        isCorrect: true,
        explanation: "JavaScript expressions in attribute values are enclosed in curly braces, allowing you to use variables, function calls, or any valid JavaScript expression."
      },
      {
        id: "jsx-14-b",
        text: "Combining static strings and expressions: className={`btn ${isActive ? 'active' : ''}`}",
        isCorrect: true,
        explanation: "You can combine static strings and dynamic expressions using template literals within curly braces, which is particularly useful for conditional class names."
      },
      {
        id: "jsx-14-c",
        text: "Using object expressions for style: style={{ color: textColor, fontSize: size + 'px' }}",
        isCorrect: true,
        explanation: "The style attribute takes a JavaScript object, which can contain expressions for property values. The outer curly braces are for the JSX expression, and the inner ones create the object literal."
      },
      {
        id: "jsx-14-d",
        text: "Using string interpolation: src=\"${imageUrl}\"",
        isCorrect: false,
        explanation: "String interpolation with backticks doesn't work directly in JSX attributes. You need to use curly braces to embed expressions, not string interpolation."
      },
      {
        id: "jsx-14-e",
        text: "Expressions can include statements like if/else or for loops",
        isCorrect: false,
        explanation: "JSX attribute expressions can only contain expressions that produce a value, not statements like if/else or for loops. For complex logic, compute the value before the JSX or use conditional expressions like ternaries."
      }
    ],
    explanation: {
      correct: "Correct! JavaScript expressions in JSX attributes use curly braces, can combine strings and expressions with template literals, and can use object expressions for styles.",
      incorrect: "JSX attribute expressions use curly braces, can combine strings/expressions with template literals, and use object expressions for styles. String interpolation doesn't work directly, and expressions can't include statements like if/else.",
      detailed: "Common patterns for expressions in attributes: 1) Variable references: <a href={link}>; 2) Function calls: <img src={getImageUrl(user)} />; 3) Conditional attributes: <button disabled={!isValid}>; 4) Computed property names: <input name={`field-${index}`} />; 5) Arithmetic: <div style={{ width: baseWidth * scale + 'px' }}>; 6) Object spread in props: <Component {...props} />; 7) Conditional classes with libraries: <div className={classNames('card', { 'card-active': isActive })}>; 8) Inline functions: <button onClick={() => handleClick(id)}>. Remember that all expressions must produce a value, so for complex logic, compute the value beforehand or use immediately-invoked functions if absolutely necessary."
    }
  },
  {
    id: "jsx-15",
    level: 1,
    topic: "jsx",
    question: "How do you handle HTML entities in JSX?",
    multipleCorrect: true,
    options: [
      {
        id: "jsx-15-a",
        text: "You can use Unicode characters directly: <div>Hello © 2023</div>",
        isCorrect: true,
        explanation: "JSX allows you to use Unicode characters directly in your code, which is often the simplest approach for common symbols and special characters."
      },
      {
        id: "jsx-15-b",
        text: "You can use JavaScript string escapes: <div>Hello \\u00A9 2023</div>",
        isCorrect: true,
        explanation: "Since JSX is JavaScript, you can use JavaScript Unicode escape sequences like \\u00A9 for the copyright symbol, which works for any character."
      },
      {
        id: "jsx-15-c",
        text: "You can use named entities as strings: <div>Hello {'&copy;'} 2023</div>",
        isCorrect: true,
        explanation: "You can include HTML entities as strings in curly braces, which React will render as the corresponding character. This is useful when you need to display the actual entity text."
      },
      {
        id: "jsx-15-d",
        text: "HTML entities like &copy; work directly in JSX text content",
        isCorrect: true,
        explanation: "Common HTML entities like &copy;, &amp;, &lt;, etc. can be used directly in JSX text content and will be rendered correctly as their corresponding characters."
      },
      {
        id: "jsx-15-e",
        text: "Entities in attribute values must always use JavaScript escapes",
        isCorrect: false,
        explanation: "HTML entities can be used in string attribute values just like in HTML: title=\"Copyright &copy; 2023\". JavaScript escapes are only needed for dynamic values in curly braces."
      }
    ],
    explanation: {
      correct: "Correct! In JSX, you can handle HTML entities using Unicode characters directly, JavaScript string escapes, named entities in curly braces, or standard HTML entities in text content.",
      incorrect: "JSX supports Unicode characters, JavaScript escapes, named entities in curly braces, and HTML entities in text content. Entities in string attribute values don't require JavaScript escapes—they work like regular HTML.",
      detailed: "Entity handling approaches: 1) Direct Unicode: <p>Price: €50</p>; 2) JavaScript escapes: <p>Price: \\u20AC50</p>; 3) HTML entities: <p>Price: &euro;50</p>; 4) Curly braces: <p>Price: {'&euro;'}50</p>; 5) In attributes: <abbr title=\"World Health Organization\">WHO</abbr>; 6) Dynamic content: <p dangerouslySetInnerHTML={{ __html: '&copy; ' + year }} />; 7) Special cases: To display literal curly braces, you can use {'{'} and {'}'}. Most of the time, using direct Unicode characters is the simplest approach, but entities can be useful when working with content from APIs or when you need to display the actual entity text rather than the character it represents."
    }
  },
  {
    id: "jsx-16",
    level: 1,
    topic: "jsx",
    question: "How do you use the spread operator with props in JSX?",
    multipleCorrect: true,
    options: [
      {
        id: "jsx-16-a",
        text: "To pass all properties from an object as individual props: <Component {...props} />",
        isCorrect: true,
        explanation: "The spread operator can be used to pass all properties from an object as separate props to a component, which is useful for forwarding props or applying a set of common props."
      },
      {
        id: "jsx-16-b",
        text: "To merge multiple objects of props: <Component {...defaultProps} {...userProps} />",
        isCorrect: true,
        explanation: "You can use multiple spread operators to merge different sets of props, with later spreads overriding earlier ones if there are duplicate properties."
      },
      {
        id: "jsx-16-c",
        text: "To pass all props except specific ones: const { children, ...rest } = props; return <div {...rest}>{children}</div>;",
        isCorrect: true,
        explanation: "You can use object destructuring with rest syntax to exclude specific props and then spread the remaining ones, which is useful when you want to handle some props specially."
      },
      {
        id: "jsx-16-d",
        text: "To clone an element with new props: React.cloneElement(element, {...element.props, newProp: value})",
        isCorrect: true,
        explanation: "When cloning React elements, the spread operator can be used to preserve the original props while adding or overriding specific ones."
      },
      {
        id: "jsx-16-e",
        text: "The spread operator automatically filters out non-valid HTML attributes",
        isCorrect: false,
        explanation: "The spread operator doesn't automatically filter props. When spreading props to DOM elements (not components), you need to be careful about passing non-standard HTML attributes, which will appear in the DOM."
      }
    ],
    explanation: {
      correct: "Correct! The spread operator in JSX can pass all properties as individual props, merge multiple objects of props, pass props except specific ones, and help clone elements with new props.",
      incorrect: "The spread operator in JSX passes all properties as props, merges multiple prop objects, works with rest syntax to exclude specific props, and helps clone elements. It doesn't automatically filter out non-valid HTML attributes.",
      detailed: "Common spread operator patterns: 1) Forwarding props: function Wrapper(props) { return <div className='wrapper'><Component {...props} /></div>; }; 2) Adding/overriding props: <Button {...props} disabled={isLoading} />; 3) With rest props: function FilteredComponent({ className, style, ...rest }) { return <div {...rest} className={`filtered ${className}`} />; }; 4) Conditional spreads: <div {...(isActive && activeProps)} className='base'>; 5) With DOM elements: Be careful when spreading to DOM elements, as non-standard attributes will appear in the DOM: <div {...allProps}>; 6) Order matters: In <Component {...objA} prop='value' {...objB} />, objB overrides objA, and the explicit prop overrides both if there are conflicts. The spread operator is a powerful tool for prop manipulation but should be used thoughtfully to maintain code clarity."
    }
  },
  {
    id: "jsx-17",
    level: 1,
    topic: "jsx",
    question: "What are the limitations of JSX?",
    multipleCorrect: true,
    options: [
      {
        id: "jsx-17-a",
        text: "JSX expressions must have exactly one outermost element (or use fragments)",
        isCorrect: true,
        explanation: "A JSX expression must have a single root element, or use fragments (<> </> or <React.Fragment>) to group multiple elements without adding an extra DOM node."
      },
      {
        id: "jsx-17-b",
        text: "You cannot use statements like if, for, while directly within JSX",
        isCorrect: true,
        explanation: "JSX only accepts expressions (which produce values), not statements like if, for, or while. For complex logic, you need to use expressions like ternaries or compute values outside the JSX."
      },
      {
        id: "jsx-17-c",
        text: "Some JavaScript reserved words cannot be used as prop names (like 'class' or 'for')",
        isCorrect: true,
        explanation: "Since JSX is compiled to JavaScript, you can't use JavaScript reserved words as prop names. Instead, React uses alternatives like 'className' for 'class' and 'htmlFor' for 'for'."
      },
      {
        id: "jsx-17-d",
        text: "JSX doesn't support HTML comments <!-- comment -->",
        isCorrect: true,
        explanation: "HTML-style comments don't work in JSX. You must use JavaScript comments inside curly braces: {/* comment */}."
      },
      {
        id: "jsx-17-e",
        text: "JSX cannot be used with other frameworks like Vue or Angular",
        isCorrect: false,
        explanation: "While JSX is most commonly associated with React, it's not exclusive to React. Other frameworks like Vue, Inferno, and Preact also support JSX syntax, though sometimes with slight variations."
      }
    ],
    explanation: {
      correct: "Correct! JSX limitations include requiring a single root element, not supporting direct statements, requiring alternative prop names for reserved words, and not supporting HTML comments.",
      incorrect: "JSX limitations include the single root element requirement, no direct statements, alternative prop names for reserved words, and no HTML comments. However, JSX can be used with frameworks besides React, with some adaptations.",
      detailed: "Working around JSX limitations: 1) Single root element: Use fragments (<> </>) to group multiple elements; 2) Statements: Use ternary operators for conditionals: {isLoggedIn ? <LogoutButton /> : <LoginButton />}; 3) Loops: Use array methods like map outside or inside JSX: {items.map(item => <Item key={item.id} {...item} />)}; 4) Reserved words: Use React's alternatives: className, htmlFor, etc.; 5) Complex logic: Compute values before the return statement or use immediately-invoked functions if necessary: {(() => { const result = complex(); return <div>{result}</div>; })()}; 6) Dynamic elements: Use variables to store element types: const TagName = getTagName(); return <TagName />; 7) Spread attributes carefully: When spreading props to DOM elements, be aware of non-standard attributes. Despite these limitations, JSX's benefits in readability and expressiveness generally outweigh the constraints."
    }
  },
  {
    id: "jsx-18",
    level: 1,
    topic: "jsx",
    question: "How does JSX handle whitespace?",
    multipleCorrect: true,
    options: [
      {
        id: "jsx-18-a",
        text: "JSX removes whitespace at the beginning and end of lines",
        isCorrect: true,
        explanation: "JSX trims whitespace (spaces, tabs, newlines) at the start and end of lines to avoid unintended spaces in the rendered output."
      },
      {
        id: "jsx-18-b",
        text: "Multiple whitespace characters within text are collapsed into a single space",
        isCorrect: true,
        explanation: "Similar to HTML, JSX collapses multiple consecutive spaces, tabs, and newlines within text content into a single space."
      },
      {
        id: "jsx-18-c",
        text: "You can force whitespace using explicit space entities or characters",
        isCorrect: true,
        explanation: "To preserve specific whitespace, you can use explicit space entities like &nbsp; or Unicode characters like \\u00A0 (non-breaking space)."
      },
      {
        id: "jsx-18-d",
        text: "Whitespace between JSX elements is always preserved exactly as written",
        isCorrect: false,
        explanation: "Whitespace between JSX elements is not always preserved exactly as written. JSX's whitespace handling is similar to HTML, with trimming and collapsing applied in many cases."
      },
      {
        id: "jsx-18-e",
        text: "Line breaks between elements create text nodes with spaces",
        isCorrect: true,
        explanation: "Line breaks and spaces between JSX elements can create text nodes with spaces, which might affect layout in some cases, especially with inline elements."
      }
    ],
    explanation: {
      correct: "Correct! JSX removes whitespace at line ends, collapses multiple whitespace characters into one space, allows forced whitespace with entities, and can create text nodes from line breaks between elements.",
      incorrect: "JSX trims whitespace at line ends, collapses multiple spaces into one, allows forced whitespace with entities, and can create text nodes from line breaks. Whitespace between elements isn't always preserved exactly as written.",
      detailed: "Handling whitespace in JSX: 1) Basic behavior: <div> Hello World </div> renders the same as <div>Hello World</div>; 2) Preserving spaces: <div>Hello&nbsp;World</div> or <div>Hello{' '}World</div>; 3) Multiple spaces: <div>Hello{'   '}World</div> (using a string in curly braces); 4) Line breaks in text: <p>Line 1{'\n'}Line 2</p> (note that HTML won't display the line break without CSS white-space property); 5) Avoiding unwanted text nodes: <ul>{/* No whitespace between elements */}<li>Item 1</li><li>Item 2</li></ul>; 6) Formatting JSX without affecting output: <div> {/* Comments and line breaks here don't create text nodes */} <span>Content</span> </div>. Understanding whitespace handling helps avoid layout surprises, especially with elements that are sensitive to whitespace like inline elements."
    }
  },
  {
    id: "jsx-19",
    level: 1,
    topic: "jsx",
    question: "How do you use dynamic element types in JSX?",
    multipleCorrect: true,
    options: [
      {
        id: "jsx-19-a",
        text: "Assign the element type to a capitalized variable: const MyElement = getElementType(); return <MyElement />;",
        isCorrect: true,
        explanation: "You can store an element type (string for HTML elements or component function/class) in a capitalized variable and then use that variable as a JSX element."
      },
      {
        id: "jsx-19-b",
        text: "Element types must be capitalized when they're variables",
        isCorrect: true,
        explanation: "When using a variable as an element type in JSX, it must be capitalized. Lowercase variable names are treated as HTML tags, not custom components or dynamic elements."
      },
      {
        id: "jsx-19-c",
        text: "You can use expressions to determine the element type: <{condition ? 'button' : 'a'} />",
        isCorrect: false,
        explanation: "You cannot use expressions directly as the element type in JSX. The element type must be a string literal, a capitalized variable, or a property access expression."
      },
      {
        id: "jsx-19-d",
        text: "You can use property access for element types: <components.Button />",
        isCorrect: true,
        explanation: "JSX supports using property access expressions as element types, which is useful when you have an object containing multiple components."
      },
      {
        id: "jsx-19-e",
        text: "Dynamic elements can receive props like any other element: <DynamicComponent {...props} />",
        isCorrect: true,
        explanation: "Dynamic element types can receive props just like any other JSX element, including using the spread operator to pass multiple props at once."
      }
    ],
    explanation: {
      correct: "Correct! Dynamic element types in JSX can use capitalized variables, must be capitalized when they're variables, can use property access expressions, and can receive props normally.",
      incorrect: "Dynamic element types in JSX use capitalized variables (which must be capitalized), property access expressions, and can receive props normally. You cannot use expressions directly as element types like <{condition ? 'button' : 'a'} />.",
      detailed: "Common patterns for dynamic elements: 1) Basic variable: const Element = isHeading ? 'h1' : 'p'; return <Element>Text</Element>; 2) Component mapping: const components = { Button, Card, Alert }; const ComponentToRender = components[type]; return <ComponentToRender />; 3) HTML tag selection: const Tag = level ? `h${level}` : 'p'; return <Tag>Heading</Tag>; 4) With property access: <UI.Button>Click me</UI.Button>; 5) From props: function DynamicComponent({ as: Component = 'div', children, ...rest }) { return <Component {...rest}>{children}</Component>; }; 6) Conditional rendering: const Element = condition ? FirstComponent : SecondComponent; return <Element />. Dynamic elements are powerful for creating flexible, reusable components that can adapt their rendering based on props or state."
    }
  },
  {
    id: "jsx-20",
    level: 1,
    topic: "jsx",
    question: "How do you use SVG in JSX?",
    multipleCorrect: true,
    options: [
      {
        id: "jsx-20-a",
        text: "SVG tags can be used directly in JSX, similar to HTML tags",
        isCorrect: true,
        explanation: "JSX supports SVG elements directly, allowing you to use tags like <svg>, <path>, <circle>, etc., just like you would use HTML tags."
      },
      {
        id: "jsx-20-b",
        text: "SVG attributes use camelCase in JSX, unlike HTML SVG which uses kebab-case",
        isCorrect: true,
        explanation: "In JSX, SVG attributes follow the same camelCase convention as other props, so 'stroke-width' becomes 'strokeWidth' and 'fill-opacity' becomes 'fillOpacity'."
      },
      {
        id: "jsx-20-c",
        text: "You can embed dynamic values in SVG attributes using curly braces",
        isCorrect: true,
        explanation: "Like other JSX attributes, SVG attributes can contain dynamic values using curly braces, allowing for dynamic colors, dimensions, paths, etc."
      },
      {
        id: "jsx-20-d",
        text: "SVG in JSX requires a special import or component",
        isCorrect: false,
        explanation: "SVG elements can be used directly in JSX without any special imports or components. React natively supports SVG elements in the virtual DOM."
      },
      {
        id: "jsx-20-e",
        text: "The 'class' attribute is used for CSS classes in SVG elements",
        isCorrect: false,
        explanation: "Even for SVG elements, JSX uses 'className' instead of 'class' for CSS classes, maintaining consistency with the rest of JSX."
      }
    ],
    explanation: {
      correct: "Correct! SVG in JSX can use SVG tags directly, requires camelCase attributes instead of kebab-case, and supports dynamic values in attributes with curly braces.",
      incorrect: "SVG in JSX uses tags directly, requires camelCase attributes, and supports dynamic values. It doesn't require special imports, and uses 'className' for CSS classes (not 'class'), just like HTML elements in JSX.",
      detailed: "Working with SVG in React: 1) Basic inline SVG: <svg width='100' height='100'><circle cx='50' cy='50' r='40' stroke='black' fill='red' /></svg>; 2) Dynamic attributes: <circle cx={centerX} cy={centerY} r={radius} fill={color} />; 3) Complex paths: <path d={generatePathData(points)} />; 4) Responsive SVG: <svg viewBox='0 0 100 100' preserveAspectRatio='xMidYMid meet'>; 5) CSS styling: <svg className='icon' style={{ marginRight: '10px' }}>; 6) Event handling: <circle onClick={handleClick} />; 7) External SVG files: import { ReactComponent as Logo } from './logo.svg'; <Logo className='logo' />. SVG in React is powerful for creating interactive graphics, icons, charts, and animations that can respond to state and props changes."
    }
  },
  {
    id: "jsx-21",
    level: 1,
    topic: "jsx",
    question: "How do you handle form inputs in JSX?",
    multipleCorrect: true,
    options: [
      {
        id: "jsx-21-a",
        text: "Controlled inputs use value and onChange props: <input value={value} onChange={handleChange} />",
        isCorrect: true,
        explanation: "Controlled inputs in React have their value controlled by state, with an onChange handler that updates the state when the user types, making React state the 'single source of truth'."
      },
      {
        id: "jsx-21-b",
        text: "Uncontrolled inputs use ref to access their values: <input ref={inputRef} />",
        isCorrect: true,
        explanation: "Uncontrolled inputs maintain their own state in the DOM, and you access their values using refs when needed, typically during form submission."
      },
      {
        id: "jsx-21-c",
        text: "Checkboxes use checked instead of value: <input type='checkbox' checked={isChecked} onChange={handleChange} />",
        isCorrect: true,
        explanation: "For checkbox inputs, you use the checked prop instead of value to control their state, along with an onChange handler that updates the state."
      },
      {
        id: "jsx-21-d",
        text: "Form submission is handled with onSubmit on the form element: <form onSubmit={handleSubmit}>",
        isCorrect: true,
        explanation: "The onSubmit event on the form element is used to handle form submission, where you typically prevent the default behavior and process the form data."
      },
      {
        id: "jsx-21-e",
        text: "The value prop automatically updates when the user types",
        isCorrect: false,
        explanation: "The value prop does not automatically update when the user types. You must explicitly update it in an onChange handler, otherwise the input will appear non-editable."
      }
    ],
    explanation: {
      correct: "Correct! Form inputs in JSX use value/onChange for controlled inputs, refs for uncontrolled inputs, checked for checkboxes, and onSubmit for form submission.",
      incorrect: "JSX form inputs use value/onChange for controlled components, refs for uncontrolled ones, checked for checkboxes, and onSubmit for form handling. The value prop doesn't update automatically—you must handle onChange events.",
      detailed: "Form handling patterns: 1) Basic controlled input: const [value, setValue] = useState(''); <input value={value} onChange={e => setValue(e.target.value)} />; 2) Multiple inputs: const [formData, setFormData] = useState({ name: '', email: '' }); const handleChange = e => setFormData({...formData, [e.target.name]: e.target.value}); <input name='name' value={formData.name} onChange={handleChange} />; 3) Checkboxes: const [checked, setChecked] = useState(false); <input type='checkbox' checked={checked} onChange={e => setChecked(e.target.checked)} />; 4) Select elements: <select value={selected} onChange={e => setSelected(e.target.value)}>; 5) Form submission: const handleSubmit = e => { e.preventDefault(); /* process form */ }; <form onSubmit={handleSubmit}>; 6) Uncontrolled with default value: <input defaultValue='Initial value' ref={inputRef} />. Controlled components are generally preferred in React as they make the component's behavior more predictable and easier to debug."
    }
  },
  {
    id: "jsx-22",
    level: 1,
    topic: "jsx",
    question: "How do you handle accessibility (a11y) in JSX?",
    multipleCorrect: true,
    options: [
      {
        id: "jsx-22-a",
        text: "Use semantic HTML elements whenever possible: <button> instead of <div onClick={...}>",
        isCorrect: true,
        explanation: "Semantic HTML elements have built-in accessibility features like keyboard navigation and screen reader support, making them preferable to generic elements with added event handlers."
      },
      {
        id: "jsx-22-b",
        text: "Add ARIA attributes when necessary: aria-label, aria-describedby, etc.",
        isCorrect: true,
        explanation: "ARIA (Accessible Rich Internet Applications) attributes provide additional accessibility information to assistive technologies when HTML semantics alone aren't sufficient."
      },
      {
        id: "jsx-22-c",
        text: "Ensure proper focus management for interactive elements",
        isCorrect: true,
        explanation: "Managing focus properly is essential for keyboard navigation, especially in dynamic content, modals, or custom widgets. This often involves using refs and the focus() method."
      },
      {
        id: "jsx-22-d",
        text: "JSX automatically handles all accessibility concerns",
        isCorrect: false,
        explanation: "JSX doesn't automatically handle accessibility. Developers must actively implement accessible practices, though React does provide some warnings for common accessibility issues."
      },
      {
        id: "jsx-22-e",
        text: "Use the htmlFor attribute on labels instead of 'for'",
        isCorrect: true,
        explanation: "In JSX, you use htmlFor instead of the HTML 'for' attribute to associate labels with form controls, since 'for' is a reserved word in JavaScript."
      }
    ],
    explanation: {
      correct: "Correct! Accessibility in JSX requires using semantic HTML elements, adding ARIA attributes when needed, ensuring proper focus management, and using htmlFor on labels.",
      incorrect: "JSX accessibility requires semantic HTML, ARIA attributes, proper focus management, and htmlFor on labels. JSX doesn't automatically handle all accessibility concerns—developers must implement accessible practices.",
      detailed: "Accessibility best practices: 1) Semantic structure: <nav>, <main>, <button>, <article> instead of generic <div>s; 2) Form labels: <label htmlFor='email'>Email</label><input id='email' />; 3) Image alternatives: <img src='image.jpg' alt='Description' /> or <img src='decorative.jpg' alt='' />; 4) ARIA roles: <div role='alert'>{errorMessage}</div>; 5) Screen reader text: <span className='sr-only'>Additional information</span>; 6) Keyboard navigation: tabIndex, focus management, and keyboard event handlers; 7) Color contrast: Ensure sufficient contrast between text and background; 8) Dynamic content: Announce changes with aria-live regions; 9) Testing: Use tools like axe, WAVE, or Lighthouse to audit accessibility. React provides some built-in support like autoFocus and has ESLint plugins (jsx-a11y) to catch common issues, but developers need to actively implement accessibility best practices."
    }
  },
  {
    id: "jsx-23",
    level: 1,
    topic: "jsx",
    question: "What is the purpose of React.createElement() and how does it relate to JSX?",
    multipleCorrect: true,
    options: [
      {
        id: "jsx-23-a",
        text: "JSX is compiled to React.createElement() calls",
        isCorrect: true,
        explanation: "JSX is syntactic sugar that gets transformed (usually by Babel) into React.createElement() calls during the build process. It doesn't run directly in the browser."
      },
      {
        id: "jsx-23-b",
        text: "React.createElement() creates React elements that describe what to render",
        isCorrect: true,
        explanation: "React.createElement() creates plain JavaScript objects (React elements) that describe what should appear on the screen, forming React's virtual DOM."
      },
      {
        id: "jsx-23-c",
        text: "You can use React.createElement() directly instead of JSX if preferred",
        isCorrect: true,
        explanation: "While JSX is more common and readable, you can use React.createElement() directly if you prefer or if you're in an environment where JSX transformation isn't available."
      },
      {
        id: "jsx-23-d",
        text: "React.createElement() directly modifies the DOM",
        isCorrect: false,
        explanation: "React.createElement() doesn't modify the DOM directly. It creates virtual DOM elements (plain JavaScript objects) that React later uses to determine and make the minimal necessary DOM updates."
      },
      {
        id: "jsx-23-e",
        text: "React.createElement() takes the element type, props, and children as arguments",
        isCorrect: true,
        explanation: "React.createElement() accepts at least two arguments: the element type (string for HTML elements or a component function/class) and a props object, followed by any number of children arguments."
      }
    ],
    explanation: {
      correct: "Correct! JSX compiles to React.createElement() calls, which create React elements describing what to render. You can use createElement directly, and it takes element type, props, and children as arguments.",
      incorrect: "JSX compiles to React.createElement() calls, which create React elements (not direct DOM modifications). You can use createElement directly instead of JSX, and it takes element type, props, and children as arguments.",
      detailed: "JSX transformation examples: 1) Simple element: <div>Hello</div> → React.createElement('div', null, 'Hello'); 2) With props: <button className='btn'>Click</button> → React.createElement('button', { className: 'btn' }, 'Click'); 3) Nested elements: <div><span>Text</span></div> → React.createElement('div', null, React.createElement('span', null, 'Text')); 4) Components: <MyComponent prop='value' /> → React.createElement(MyComponent, { prop: 'value' }); 5) Multiple children: <div>Hello {name}</div> → React.createElement('div', null, 'Hello ', name); 6) Self-closing: <img src='image.jpg' /> → React.createElement('img', { src: 'image.jpg' }). Understanding this transformation helps debug issues and explains why certain JSX limitations exist, like requiring a single root element (because a function can only return one value)."
    }
  },
  {
    id: "jsx-24",
    level: 1,
    topic: "jsx",
    question: "How do you use TypeScript with JSX?",
    multipleCorrect: true,
    options: [
      {
        id: "jsx-24-a",
        text: "Use .tsx file extension for TypeScript files containing JSX",
        isCorrect: true,
        explanation: "Files containing both TypeScript and JSX should use the .tsx extension, which tells the TypeScript compiler to expect and process JSX syntax."
      },
      {
        id: "jsx-24-b",
        text: "Define prop types using interfaces or type aliases: interface Props { name: string; age?: number; }",
        isCorrect: true,
        explanation: "TypeScript allows you to define the shape of props using interfaces or type aliases, providing type checking for the props your components receive."
      },
      {
        id: "jsx-24-c",
        text: "Type checking for event handlers: onChange: React.ChangeEvent<HTMLInputElement>",
        isCorrect: true,
        explanation: "TypeScript with React provides specific event types like React.ChangeEvent<T> that give you proper type checking for event handlers and their event objects."
      },
      {
        id: "jsx-24-d",
        text: "JSX automatically converts to TypeScript without any changes",
        isCorrect: false,
        explanation: "JSX doesn't automatically convert to TypeScript. You need to add type annotations, interfaces, and other TypeScript features to get the benefits of type checking."
      },
      {
        id: "jsx-24-e",
        text: "Use the FC or FunctionComponent type for function components: const MyComponent: React.FC<Props> = (props) => {...}",
        isCorrect: true,
        explanation: "React.FC (or React.FunctionComponent) is a type that represents a function component, providing proper typing for props, children, and return type."
      }
    ],
    explanation: {
      correct: "Correct! TypeScript with JSX uses .tsx extensions, defines prop types with interfaces or type aliases, provides type checking for event handlers, and offers FC/FunctionComponent types for function components.",
      incorrect: "TypeScript with JSX requires .tsx extensions, prop type interfaces/aliases, event handler types, and FC/FunctionComponent types. JSX doesn't automatically convert to TypeScript—you need to add type annotations.",
      detailed: "TypeScript + JSX patterns: 1) Basic component: interface ButtonProps { onClick: () => void; disabled?: boolean; } const Button = ({ onClick, disabled }: ButtonProps) => <button onClick={onClick} disabled={disabled}>Click</button>; 2) With React.FC: const Header: React.FC<{ title: string }> = ({ title, children }) => <header><h1>{title}</h1>{children}</header>; 3) Event typing: const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value); 4) Generic components: interface ListProps<T> { items: T[]; renderItem: (item: T) => React.ReactNode; } function List<T>({ items, renderItem }: ListProps<T>) { return <ul>{items.map(renderItem)}</ul>; }; 5) Type assertions when needed: const element = event.currentTarget as HTMLInputElement; 6) Children prop typing: interface Props { children: React.ReactNode; }. TypeScript enhances JSX by catching type errors at compile time rather than runtime, improving code quality and developer experience."
    }
  },
  {
    id: "jsx-25",
    level: 1,
    topic: "jsx",
    question: "How do you handle CSS-in-JS with JSX?",
    multipleCorrect: true,
    options: [
      {
        id: "jsx-25-a",
        text: "Using libraries like styled-components: const Button = styled.button`color: ${props => props.primary ? 'blue' : 'gray'};`",
        isCorrect: true,
        explanation: "Libraries like styled-components allow you to define styled components using tagged template literals, with support for dynamic styles based on props."
      },
      {
        id: "jsx-25-b",
        text: "Using the style prop with JavaScript objects: <div style={{ color: 'red', fontSize: '14px' }}></div>",
        isCorrect: true,
        explanation: "React's built-in style prop accepts a JavaScript object with camelCased CSS properties, allowing for inline styles directly in JSX."
      },
      {
        id: "jsx-25-c",
        text: "Using CSS modules: import styles from './Button.module.css'; <button className={styles.primary}>",
        isCorrect: true,
        explanation: "CSS Modules allow you to import CSS files as JavaScript objects, where class names are scoped locally to avoid global namespace conflicts."
      },
      {
        id: "jsx-25-d",
        text: "Using the class attribute with string values: <div class='container'>",
        isCorrect: false,
        explanation: "In JSX, you must use className instead of class for CSS classes, since 'class' is a reserved keyword in JavaScript."
      },
      {
        id: "jsx-25-e",
        text: "Using emotion's css prop: <div css={css`color: red; &:hover { color: blue }`}>",
        isCorrect: true,
        explanation: "Libraries like emotion provide a css prop that accepts CSS strings or objects, allowing for component-scoped styles with full CSS syntax including nesting and pseudo-selectors."
      }
    ],
    explanation: {
      correct: "Correct! CSS-in-JS with JSX can use styled-components with template literals, style props with JavaScript objects, CSS modules with imported styles, or emotion's css prop.",
      incorrect: "CSS-in-JS approaches include styled-components, style props with objects, CSS modules, and emotion's css prop. You must use className instead of class in JSX, as 'class' is a reserved JavaScript keyword.",
      detailed: "CSS-in-JS approaches: 1) Inline styles: <button style={{ backgroundColor: isActive ? 'blue' : 'gray', padding: '8px 16px' }}>Click</button>; 2) Styled-components: const Button = styled.button`background: ${props => props.primary ? 'blue' : 'gray'}; padding: 8px 16px;`; <Button primary>Click</Button>; 3) Emotion: <div css={css`display: flex; align-items: center;`}>; 4) CSS Modules: import styles from './Card.module.css'; <div className={`${styles.card} ${isActive ? styles.active : ''}`}>; 5) JSS: const styles = { button: { background: 'blue', '&:hover': { background: 'darkblue' } } }; <button className={classes.button}>; 6) Tailwind CSS: <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>. Each approach has trade-offs in terms of performance, developer experience, and features like server-side rendering support."
    }
  },
  {
    id: "jsx-26",
    level: 1,
    topic: "jsx",
    question: "How do you handle internationalization (i18n) in JSX?",
    multipleCorrect: true,
    options: [
      {
        id: "jsx-26-a",
        text: "Using libraries like react-intl or react-i18next",
        isCorrect: true,
        explanation: "Libraries like react-intl and react-i18next provide components and hooks for internationalization, handling translations, formatting, and locale-specific rendering."
      },
      {
        id: "jsx-26-b",
        text: "Using formatted message components: <FormattedMessage id='greeting' values={{ name }} />",
        isCorrect: true,
        explanation: "Internationalization libraries typically provide components like FormattedMessage that look up translations by ID and support variable interpolation."
      },
      {
        id: "jsx-26-c",
        text: "Using translation hooks: const { t } = useTranslation(); return <h1>{t('greeting', { name })}</h1>",
        isCorrect: true,
        explanation: "Modern i18n libraries provide hooks that return translation functions, allowing for more flexible usage within functional components."
      },
      {
        id: "jsx-26-d",
        text: "JSX has built-in internationalization features",
        isCorrect: false,
        explanation: "JSX itself doesn't have built-in internationalization features. You need to use external libraries or implement your own i18n solution."
      },
      {
        id: "jsx-26-e",
        text: "Handling right-to-left (RTL) languages with the dir attribute: <div dir='rtl'>",
        isCorrect: true,
        explanation: "The dir attribute can be used to specify text direction for RTL languages like Arabic or Hebrew, which is an important aspect of internationalization."
      }
    ],
    explanation: {
      correct: "Correct! Internationalization in JSX typically uses libraries like react-intl, formatted message components, translation hooks, and the dir attribute for RTL languages.",
      incorrect: "JSX internationalization uses libraries like react-intl, formatted message components, translation hooks, and the dir attribute for RTL languages. JSX doesn't have built-in i18n features.",
      detailed: "I18n implementation patterns: 1) Basic react-i18next: const { t } = useTranslation(); return <p>{t('welcome')}</p>; 2) With variables: <FormattedMessage id='welcome' values={{ name: user.name }} />; 3) Pluralization: {t('itemCount', { count: items.length })}; 4) Date/number formatting: <FormattedDate value={date} />; <FormattedNumber value={amount} style='currency' currency='USD' />; 5) Language selection: <select value={language} onChange={(e) => changeLanguage(e.target.value)}>; 6) RTL support: <html dir={isRtl ? 'rtl' : 'ltr'} lang={currentLanguage}>; 7) Message extraction: Most i18n libraries provide tools to extract messages from your code into translation files. Effective i18n requires planning from the start, considering not just text translation but also date formats, number formats, pluralization rules, and layout issues for languages with different text lengths or directions."
    }
  },
  {
    id: "jsx-27",
    level: 1,
    topic: "jsx",
    question: "How do you optimize performance in JSX?",
    multipleCorrect: true,
    options: [
      {
        id: "jsx-27-a",
        text: "Use React.memo() to prevent unnecessary re-renders of components",
        isCorrect: true,
        explanation: "React.memo() is a higher-order component that memoizes the result of a component render, preventing re-renders if props haven't changed, which can improve performance for expensive components."
      },
      {
        id: "jsx-27-b",
        text: "Use the key prop correctly when rendering lists",
        isCorrect: true,
        explanation: "Proper use of the key prop helps React identify which items have changed, been added, or removed, enabling more efficient updates when list items change."
      },
      {
        id: "jsx-27-c",
        text: "Avoid anonymous functions in render: onClick={() => handleClick(id)} → onClick={handleClick}",
        isCorrect: true,
        explanation: "Anonymous functions created in render create new function instances on each render, which can cause unnecessary re-renders in child components. Using bound methods or memoized callbacks is often more efficient."
      },
      {
        id: "jsx-27-d",
        text: "Use the useMemo hook to memoize expensive calculations",
        isCorrect: true,
        explanation: "useMemo memoizes the result of expensive calculations so they don't recompute on every render unless their dependencies change, improving performance for computationally intensive operations."
      },
      {
        id: "jsx-27-e",
        text: "Always use inline styles for better performance",
        isCorrect: false,
        explanation: "Inline styles in JSX can actually be less performant than external CSS or CSS-in-JS solutions that can be optimized by the browser. They should be used judiciously, not as a blanket performance strategy."
      }
    ],
    explanation: {
      correct: "Correct! JSX performance optimization includes using React.memo() to prevent unnecessary re-renders, proper key props for lists, avoiding anonymous render functions, and using useMemo for expensive calculations.",
      incorrect: "JSX performance is optimized with React.memo(), proper key props, avoiding anonymous render functions, and useMemo for calculations. Inline styles don't inherently improve performance—they can actually be less efficient.",
      detailed: "Performance optimization techniques: 1) Component memoization: const MemoizedComponent = React.memo(MyComponent); 2) Callback memoization: const handleClick = useCallback(() => { /* handler code */ }, [dependencies]); 3) Computation memoization: const sortedItems = useMemo(() => items.sort(...), [items]); 4) Virtualization for long lists: <VirtualList data={longList} renderItem={item => <ListItem {...item} />} height={300} itemHeight={30} />; 5) Code splitting: const LazyComponent = React.lazy(() => import('./LazyComponent')); 6) Avoiding reconciliation: shouldComponentUpdate or React.memo with custom comparison; 7) Using production builds: Ensure development features are stripped out; 8) Profiling: Use React DevTools Profiler to identify performance bottlenecks. Remember that premature optimization can lead to more complex, harder-to-maintain code, so measure performance first to identify actual bottlenecks."
    }
  },
  {
    id: "jsx-28",
    level: 1,
    topic: "jsx",
    question: "How do you handle errors in JSX?",
    multipleCorrect: true,
    options: [
      {
        id: "jsx-28-a",
        text: "Using Error Boundaries: <ErrorBoundary fallback={<ErrorMessage />}><MyComponent /></ErrorBoundary>",
        isCorrect: true,
        explanation: "Error Boundaries are special components that catch JavaScript errors in their child component tree, log those errors, and display a fallback UI instead of crashing the whole app."
      },
      {
        id: "jsx-28-b",
        text: "Using try/catch for event handlers and asynchronous code",
        isCorrect: true,
        explanation: "While Error Boundaries catch errors in rendering, they don't catch errors in event handlers or async code. For these, you need to use regular try/catch blocks."
      },
      {
        id: "jsx-28-c",
        text: "Conditional rendering for potentially null or undefined values: {user && <UserProfile user={user} />}",
        isCorrect: true,
        explanation: "Using conditional rendering with the logical && operator can prevent errors from trying to render components with null or undefined props."
      },
      {
        id: "jsx-28-d",
        text: "Using the onError attribute on components: <MyComponent onError={handleError} />",
        isCorrect: false,
        explanation: "There is no standard onError attribute for React components. Error handling is typically done with Error Boundaries, try/catch, or conditional rendering."
      },
      {
        id: "jsx-28-e",
        text: "Default props or fallback values: const { name = 'Guest' } = user || {}",
        isCorrect: true,
        explanation: "Providing default values for props or destructured values can prevent errors from undefined or null values, offering a graceful fallback instead of crashing."
      }
    ],
    explanation: {
      correct: "Correct! Error handling in JSX uses Error Boundaries for component errors, try/catch for event handlers and async code, conditional rendering for null values, and default props for fallbacks.",
      incorrect: "JSX error handling uses Error Boundaries, try/catch for events/async code, conditional rendering, and default props. There's no standard onError attribute for React components.",
      detailed: "Error handling strategies: 1) Error Boundaries: class ErrorBoundary extends React.Component { state = { hasError: false }; static getDerivedStateFromError() { return { hasError: true }; } componentDidCatch(error, info) { logError(error, info); } render() { return this.state.hasError ? this.props.fallback : this.props.children; } }; 2) Try/catch in handlers: const handleClick = () => { try { riskyOperation(); } catch (error) { setError(error); } }; 3) Async error handling: useEffect(() => { const fetchData = async () => { try { const data = await api.getData(); setData(data); } catch (error) { setError(error); } }; fetchData(); }, []); 4) Optional chaining: <div>{user?.profile?.name}</div>; 5) Nullish coalescing: const displayName = user?.name ?? 'Guest';. Effective error handling improves user experience by providing meaningful feedback instead of blank screens or cryptic errors."
    }
  },
  {
    id: "jsx-29",
    level: 1,
    topic: "jsx",
    question: "How do you handle routing in JSX?",
    multipleCorrect: true,
    options: [
      {
        id: "jsx-29-a",
        text: "Using libraries like React Router: <Route path='/about' element={<About />} />",
        isCorrect: true,
        explanation: "React Router is the most popular routing library for React, providing components like Route, Link, and useNavigate to handle client-side routing in single-page applications."
      },
      {
        id: "jsx-29-b",
        text: "Creating navigation links: <Link to='/about'>About</Link>",
        isCorrect: true,
        explanation: "Routing libraries provide special Link components that handle navigation without full page reloads, maintaining the single-page application experience."
      },
      {
        id: "jsx-29-c",
        text: "Accessing route parameters: useParams() hook or match.params",
        isCorrect: true,
        explanation: "Routing libraries provide ways to access URL parameters, either through hooks like useParams in functional components or props like match.params in class components."
      },
      {
        id: "jsx-29-d",
        text: "JSX has built-in routing capabilities",
        isCorrect: false,
        explanation: "JSX itself doesn't have built-in routing capabilities. You need to use external libraries like React Router or implement your own routing solution."
      },
      {
        id: "jsx-29-e",
        text: "Programmatic navigation: const navigate = useNavigate(); navigate('/dashboard')",
        isCorrect: true,
        explanation: "Modern routing libraries provide hooks or functions for programmatic navigation, allowing you to navigate to different routes from event handlers or after async operations."
      }
    ],
    explanation: {
      correct: "Correct! Routing in JSX typically uses libraries like React Router, with Link components for navigation, hooks/props for route parameters, and programmatic navigation functions.",
      incorrect: "JSX routing uses libraries like React Router, Link components, parameter access via hooks/props, and programmatic navigation. JSX doesn't have built-in routing capabilities.",
      detailed: "Common routing patterns: 1) Basic routes: <Routes><Route path='/' element={<Home />} /><Route path='/about' element={<About />} /></Routes>; 2) Nested routes: <Route path='dashboard/*' element={<Dashboard />}><Route path='profile' element={<Profile />} /></Route>; 3) Dynamic routes: <Route path='users/:userId' element={<UserProfile />} />; 4) Accessing params: const { userId } = useParams(); 5) Navigation: <Link to='/about'>About</Link>; 6) Programmatic navigation: const navigate = useNavigate(); const handleSubmit = async () => { await saveData(); navigate('/success'); }; 7) Protected routes: <Route path='/admin' element={<ProtectedRoute><AdminPanel /></ProtectedRoute>} />. Routing is essential for single-page applications, allowing them to simulate multiple pages without full browser refreshes, maintaining state and providing a smoother user experience."
    }
  },
  {
    id: "jsx-30",
    level: 1,
    topic: "jsx",
    question: "How do you handle animations in JSX?",
    multipleCorrect: true,
    options: [
      {
        id: "jsx-30-a",
        text: "Using CSS transitions or animations with className changes",
        isCorrect: true,
        explanation: "You can trigger CSS transitions or animations by changing class names based on component state, which is a simple and performant way to add basic animations."
      },
      {
        id: "jsx-30-b",
        text: "Using libraries like react-spring or framer-motion",
        isCorrect: true,
        explanation: "Animation libraries provide React components and hooks specifically designed for creating smooth, physics-based animations with declarative APIs."
      },
      {
        id: "jsx-30-c",
        text: "Using the React Transition Group library",
        isCorrect: true,
        explanation: "React Transition Group provides components for managing component states (entering, entered, exiting, exited) during transitions, making it easier to add animations to components as they mount or unmount."
      },
      {
        id: "jsx-30-d",
        text: "Using inline styles with the animate attribute: <div animate={{ opacity: 1 }}>",
        isCorrect: false,
        explanation: "There is no standard 'animate' attribute in React or HTML. Animations typically use CSS classes, style objects with transitions, or specialized animation libraries."
      },
      {
        id: "jsx-30-e",
        text: "Using the Web Animations API with refs",
        isCorrect: true,
        explanation: "For more complex animations, you can use the Web Animations API (element.animate()) with refs to directly control animations in a more imperative style."
      }
    ],
    explanation: {
      correct: "Correct! Animations in JSX can use CSS transitions with className changes, animation libraries like react-spring, React Transition Group for component transitions, or the Web Animations API with refs.",
      incorrect: "JSX animations can use CSS transitions with className changes, libraries like react-spring, React Transition Group, or the Web Animations API. There's no standard 'animate' attribute in React or HTML.",
      detailed: "Animation approaches: 1) CSS transitions: const [isExpanded, setExpanded] = useState(false); <div className={isExpanded ? 'expanded' : 'collapsed'}>; 2) React Transition Group: <CSSTransition in={isVisible} timeout={300} classNames='fade' unmountOnExit><div>Content</div></CSSTransition>; 3) react-spring: const props = useSpring({ opacity: isVisible ? 1 : 0 }); <animated.div style={props}>Content</animated.div>; 4) framer-motion: <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>Content</motion.div>; 5) Web Animations API: useEffect(() => { if (elementRef.current) { const animation = elementRef.current.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 300 }); return () => animation.cancel(); } }, [isVisible]); 6) CSS-in-JS with keyframes: const fadeIn = keyframes`from { opacity: 0; } to { opacity: 1; }`; const FadeIn = styled.div`animation: ${fadeIn} 0.3s ease-in;`."
    }
  },
  {
    id: "jsx-31",
    level: 1,
    topic: "jsx",
    question: "How do you handle data fetching in JSX?",
    multipleCorrect: true,
    options: [
      {
        id: "jsx-31-a",
        text: "Using the useEffect hook for fetching on component mount",
        isCorrect: true,
        explanation: "useEffect with an empty dependency array is commonly used to fetch data when a component mounts, with state updates to store the fetched data and loading/error states."
      },
      {
        id: "jsx-31-b",
        text: "Using libraries like React Query or SWR for advanced data fetching",
        isCorrect: true,
        explanation: "Libraries like React Query and SWR provide hooks that handle caching, background updates, refetching, and error handling, simplifying data fetching beyond what useEffect alone can do."
      },
      {
        id: "jsx-31-c",
        text: "Conditional rendering based on loading and error states",
        isCorrect: true,
        explanation: "Data fetching typically involves managing loading and error states alongside the data itself, with conditional rendering to show appropriate UI for each state."
      },
      {
        id: "jsx-31-d",
        text: "Using the useFetch hook built into React",
        isCorrect: false,
        explanation: "There is no built-in useFetch hook in React. Data fetching is typically done with useEffect or third-party libraries, or by creating your own custom hooks."
      },
      {
        id: "jsx-31-e",
        text: "Using async/await with try/catch for cleaner fetch code",
        isCorrect: true,
        explanation: "async/await with try/catch provides a cleaner way to handle asynchronous data fetching and error handling compared to promise chains with .then() and .catch()."
      }
    ],
    explanation: {
      correct: "Correct! Data fetching in JSX typically uses useEffect for component mount fetching, libraries like React Query for advanced cases, conditional rendering for states, and async/await with try/catch.",
      incorrect: "JSX data fetching uses useEffect, libraries like React Query, conditional rendering for states, and async/await with try/catch. There's no built-in useFetch hook in React.",
      detailed: "Data fetching patterns: 1) Basic useEffect: useEffect(() => { const fetchData = async () => { setLoading(true); try { const response = await fetch('/api/data'); const data = await response.json(); setData(data); setError(null); } catch (err) { setError(err); setData(null); } finally { setLoading(false); } }; fetchData(); }, []); 2) Custom hook: function useDataFetching(url) { const [data, setData] = useState(null); const [loading, setLoading] = useState(true); const [error, setError] = useState(null); useEffect(() => { /* fetch logic */ }, [url]); return { data, loading, error }; }; 3) React Query: const { data, isLoading, error } = useQuery('todos', fetchTodos); 4) Conditional rendering: {isLoading ? <Spinner /> : error ? <ErrorMessage error={error} /> : <DataDisplay data={data} />}; 5) Fetch on event: const handleRefresh = async () => { /* fetch logic */ }; <button onClick={handleRefresh}>Refresh</button>."
    }
  },
  {
    id: "jsx-32",
    level: 1,
    topic: "jsx",
    question: "How do you handle forms with validation in JSX?",
    multipleCorrect: true,
    options: [
      {
        id: "jsx-32-a",
        text: "Using controlled components with state for form values and errors",
        isCorrect: true,
        explanation: "Controlled components with state for both form values and validation errors provide complete control over the form, allowing real-time validation and custom error messages."
      },
      {
        id: "jsx-32-b",
        text: "Using libraries like Formik or react-hook-form",
        isCorrect: true,
        explanation: "Form libraries simplify complex forms by handling state management, validation, error messages, and form submission, reducing boilerplate code."
      },
      {
        id: "jsx-32-c",
        text: "Displaying validation errors next to form fields",
        isCorrect: true,
        explanation: "Showing validation errors adjacent to their respective form fields provides clear feedback to users about what needs to be corrected."
      },
      {
        id: "jsx-32-d",
        text: "Using HTML5 validation attributes like required, pattern, min, max",
        isCorrect: true,
        explanation: "HTML5 validation attributes provide simple browser-based validation with minimal code, though they offer less control over error messages and validation timing."
      },
      {
        id: "jsx-32-e",
        text: "JSX automatically validates form inputs",
        isCorrect: false,
        explanation: "JSX doesn't automatically validate form inputs. Validation must be implemented manually or through libraries, as JSX is just a syntax extension for creating elements."
      }
    ],
    explanation: {
      correct: "Correct! Form validation in JSX typically uses controlled components with state for values/errors, form libraries like Formik, error displays next to fields, and sometimes HTML5 validation attributes.",
      incorrect: "JSX form validation uses controlled components with state, libraries like Formik, error displays near fields, and HTML5 attributes. JSX doesn't automatically validate inputs—you must implement validation yourself.",
      detailed: "Form validation approaches: 1) Basic controlled validation: const [values, setValues] = useState({ email: '' }); const [errors, setErrors] = useState({}); const validate = (name, value) => { if (name === 'email' && !value.includes('@')) return 'Invalid email'; return ''; }; const handleChange = (e) => { const { name, value } = e.target; setValues({ ...values, [name]: value }); const error = validate(name, value); setErrors({ ...errors, [name]: error }); }; 2) With Formik: <Formik initialValues={{ email: '' }} validate={values => { const errors = {}; if (!values.email.includes('@')) errors.email = 'Invalid email'; return errors; }} onSubmit={handleSubmit}>{formik => (<Form>...</Form>)}</Formik>; 3) With react-hook-form: const { register, handleSubmit, errors } = useForm(); <input {...register('email', { required: 'Email is required', pattern: { value: /\S+@\S+\.\S+/, message: 'Invalid email' } })} />; 4) Combining approaches: <input required pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$' {...register('email')} />."
    }
  },
  {
    id: "jsx-33",
    level: 1,
    topic: "jsx",
    question: "How do you handle state management in JSX?",
    multipleCorrect: true,
    options: [
      {
        id: "jsx-33-a",
        text: "Using React's built-in useState and useReducer hooks for component-level state",
        isCorrect: true,
        explanation: "useState and useReducer are React's built-in hooks for managing state within components, with useState for simple state and useReducer for more complex state logic."
      },
      {
        id: "jsx-33-b",
        text: "Using Context API with useContext for sharing state between components",
        isCorrect: true,
        explanation: "React's Context API with the useContext hook allows state to be shared across components without prop drilling, providing a built-in solution for global or semi-global state."
      },
      {
        id: "jsx-33-c",
        text: "Using external libraries like Redux, MobX, or Zustand for application-wide state",
        isCorrect: true,
        explanation: "External state management libraries provide more advanced features for managing complex application state, including middleware, time-travel debugging, and optimized updates."
      },
      {
        id: "jsx-33-d",
        text: "Using the state attribute directly in JSX: <div state={{ count: 0 }}>",
        isCorrect: false,
        explanation: "There is no 'state' attribute in JSX. State is managed through hooks like useState or class component state, not through JSX attributes."
      },
      {
        id: "jsx-33-e",
        text: "Lifting state up to common ancestors for sharing between components",
        isCorrect: true,
        explanation: "Lifting state up to a common ancestor component is a core React pattern for sharing state between components that need to access or modify the same data."
      }
    ],
    explanation: {
      correct: "Correct! State management in JSX uses useState/useReducer for component state, Context API for sharing state, external libraries for app-wide state, and lifting state up to common ancestors.",
      incorrect: "JSX state management uses useState/useReducer hooks, Context API, external libraries like Redux, and lifting state up. There's no 'state' attribute in JSX—state is managed through hooks or class component state.",
      detailed: "State management approaches: 1) Component state: const [count, setCount] = useState(0); <button onClick={() => setCount(count + 1)}>Increment</button>; 2) Complex state with reducer: const [state, dispatch] = useReducer(reducer, initialState); dispatch({ type: 'INCREMENT' }); 3) Context for shared state: const CountContext = createContext(); function CountProvider({ children }) { const [count, setCount] = useState(0); return <CountContext.Provider value={{ count, setCount }}>{children}</CountContext.Provider>; }; 4) Redux: const count = useSelector(state => state.counter.value); const dispatch = useDispatch(); dispatch(increment()); 5) Zustand: const count = useStore(state => state.count); const increment = useStore(state => state.increment); 6) Lifting state up: function Parent() { const [value, setValue] = useState(''); return <><Child1 value={value} /><Child2 onValueChange={setValue} /></>; }. The best approach depends on the application's complexity, team preferences, and specific requirements."
    }
  },
  {
    id: "jsx-34",
    level: 1,
    topic: "jsx",
    question: "How do you handle code splitting in React applications with JSX?",
    multipleCorrect: true,
    options: [
      {
        id: "jsx-34-a",
        text: "Using React.lazy() for component-based code splitting",
        isCorrect: true,
        explanation: "React.lazy() enables dynamic imports of components, allowing them to be loaded only when needed, which reduces the initial bundle size and improves application load time."
      },
      {
        id: "jsx-34-b",
        text: "Using the Suspense component to show fallback content while loading",
        isCorrect: true,
        explanation: "The Suspense component works with React.lazy() to display fallback content (like loading spinners) while the lazy-loaded component is being fetched, providing a better user experience."
      },
      {
        id: "jsx-34-c",
        text: "Using dynamic import() syntax for on-demand loading of JavaScript modules",
        isCorrect: true,
        explanation: "The dynamic import() syntax (import('./Module')) allows JavaScript modules to be loaded on demand, not just components, which is useful for code that's only needed in certain situations."
      },
      {
        id: "jsx-34-d",
        text: "Using route-based code splitting with React Router",
        isCorrect: true,
        explanation: "Combining React.lazy() with React Router allows for route-based code splitting, where components are only loaded when their route is accessed, which is a common and effective code splitting strategy."
      },
      {
        id: "jsx-34-e",
        text: "Using the split attribute on components: <Component split={true} />",
        isCorrect: false,
        explanation: "There is no 'split' attribute in React for code splitting. Code splitting is implemented using React.lazy(), dynamic imports, and the Suspense component, not through JSX attributes."
      }
    ],
    explanation: {
      correct: "Correct! Code splitting in React uses React.lazy() for component splitting, Suspense for loading fallbacks, dynamic import() for module loading, and can be combined with React Router for route-based splitting.",
      incorrect: "React code splitting uses React.lazy(), Suspense for fallbacks, dynamic import(), and works with React Router. There's no 'split' attribute on components—code splitting is implemented through lazy loading and dynamic imports.",
      detailed: "Code splitting implementation: 1) Basic lazy loading: const LazyComponent = React.lazy(() => import('./LazyComponent')); function App() { return ( <Suspense fallback={<div>Loading...</div>}> <LazyComponent /> </Suspense> ); }; 2) Route-based splitting: const Dashboard = React.lazy(() => import('./Dashboard')); <Routes> <Route path='/' element={<Home />} /> <Route path='/dashboard' element={ <Suspense fallback={<Spinner />}> <Dashboard /> </Suspense> } /> </Routes>; 3) On-demand loading: const handleClick = async () => { const module = await import('./heavyCalculation'); setResult(module.calculate(data)); }; 4) Named exports: const LazyComponent = React.lazy(() => import('./Components').then(module => ({ default: module.SpecificComponent }))); 5) Error boundaries with suspense: <ErrorBoundary> <Suspense fallback={<Spinner />}> <LazyComponent /> </Suspense> </ErrorBoundary>. Code splitting is essential for optimizing larger React applications, reducing initial load times, and improving performance."
    }
  },
  {
    id: "jsx-35",
    level: 1,
    topic: "jsx",
    question: "How do you handle server-side rendering (SSR) with JSX?",
    multipleCorrect: true,
    options: [
      {
        id: "jsx-35-a",
        text: "Using frameworks like Next.js or Remix that support SSR",
        isCorrect: true,
        explanation: "Frameworks like Next.js and Remix provide built-in support for server-side rendering with React, handling the complex setup and providing optimized rendering strategies."
      },
      {
        id: "jsx-35-b",
        text: "Using ReactDOMServer.renderToString() or renderToNodeStream() for rendering on the server",
        isCorrect: true,
        explanation: "React's server rendering APIs (renderToString and renderToNodeStream) convert React components to HTML strings or streams on the server, which can then be sent to the client."
      },
      {
        id: "jsx-35-c",
        text: "Using hydration to attach event listeners to server-rendered HTML",
        isCorrect: true,
        explanation: "Hydration (ReactDOM.hydrate() or hydrateRoot()) attaches event listeners and creates the React component tree on the client to match the server-rendered HTML, making it interactive."
      },
      {
        id: "jsx-35-d",
        text: "Using the serverRender attribute on components: <App serverRender={true} />",
        isCorrect: false,
        explanation: "There is no 'serverRender' attribute in React. Server-side rendering is implemented through server rendering APIs and hydration, not through JSX attributes."
      },
      {
        id: "jsx-35-e",
        text: "Ensuring components are compatible with both server and client environments",
        isCorrect: true,
        explanation: "For successful SSR, components must work in both server and client environments, avoiding direct browser API usage and handling differences in environment capabilities."
      }
    ],
    explanation: {
      correct: "Correct! Server-side rendering with JSX uses frameworks like Next.js, ReactDOMServer APIs, hydration for interactivity, and requires components to be compatible with both environments.",
      incorrect: "JSX server-side rendering uses frameworks like Next.js, ReactDOMServer APIs, hydration, and environment-compatible components. There's no 'serverRender' attribute—SSR is implemented through server APIs and hydration.",
      detailed: "SSR implementation approaches: 1) Basic server rendering: import { renderToString } from 'react-dom/server'; const html = renderToString(<App />); res.send(`<!DOCTYPE html><html><div id='root'>${html}</div><script src='/bundle.js'></script></html>`); 2) Client hydration: import { hydrateRoot } from 'react-dom/client'; hydrateRoot(document.getElementById('root'), <App />); 3) Next.js page: export default function Page(props) { return <div>Hello {props.name}</div>; } export async function getServerSideProps() { return { props: { name: 'World' } }; }; 4) Environment checks: if (typeof window !== 'undefined') { // Browser-only code }; 5) Data fetching: Components need data available during server rendering, often through data loading functions that work on both server and client. SSR improves performance (faster initial render), SEO (content is in the initial HTML), and user experience (content visible before JavaScript loads)."
    }
  },
  {
    id: "jsx-36",
    level: 1,
    topic: "jsx",
    question: "How do you handle testing JSX components?",
    multipleCorrect: true,
    options: [
      {
        id: "jsx-36-a",
        text: "Using testing libraries like React Testing Library or Enzyme",
        isCorrect: true,
        explanation: "Libraries like React Testing Library and Enzyme provide utilities specifically designed for testing React components, making it easier to render, interact with, and assert on components."
      },
      {
        id: "jsx-36-b",
        text: "Writing unit tests for component logic and rendering",
        isCorrect: true,
        explanation: "Unit tests for components typically verify that components render correctly with different props, handle user interactions properly, and maintain the expected internal state."
      },
      {
        id: "jsx-36-c",
        text: "Using snapshot testing to detect unexpected UI changes",
        isCorrect: true,
        explanation: "Snapshot testing captures the rendered output of a component and compares it to a previously saved 'snapshot', alerting developers to any changes in the component's output."
      },
      {
        id: "jsx-36-d",
        text: "Using the test attribute on components: <Button test={true} />",
        isCorrect: false,
        explanation: "There is no 'test' attribute in React for testing. Testing is done through external testing libraries and frameworks, not through JSX attributes."
      },
      {
        id: "jsx-36-e",
        text: "Mocking dependencies and context providers for isolated component testing",
        isCorrect: true,
        explanation: "For effective testing, dependencies like API calls, context values, and redux stores are often mocked or provided with test values to isolate the component being tested."
      }
    ],
    explanation: {
      correct: "Correct! Testing JSX components involves using libraries like React Testing Library, writing unit tests for logic and rendering, using snapshot testing, and mocking dependencies for isolation.",
      incorrect: "JSX component testing uses libraries like React Testing Library, unit tests for logic/rendering, snapshot testing, and dependency mocking. There's no 'test' attribute—testing is done through external libraries, not JSX attributes.",
      detailed: "Testing approaches: 1) Component rendering: import { render, screen } from '@testing-library/react'; test('renders welcome message', () => { render(<Welcome name='John' />); expect(screen.getByText(/hello, john/i)).toBeInTheDocument(); }); 2) User interactions: import { fireEvent } from '@testing-library/react'; test('increments counter on click', () => { render(<Counter />); fireEvent.click(screen.getByText(/increment/i)); expect(screen.getByText(/count: 1/i)).toBeInTheDocument(); }); 3) Snapshot testing: expect(container).toMatchSnapshot(); 4) Context testing: const customRender = (ui, { providerProps, ...renderOptions }) => { return render(<ThemeContext.Provider value={providerProps}>{ui}</ThemeContext.Provider>, renderOptions); }; 5) Async testing: await waitFor(() => screen.getByText(/loaded/i)); 6) Mock API calls: jest.mock('./api'); api.fetchData.mockResolvedValue({ result: 'success' }); 7) Event testing: fireEvent.change(screen.getByLabelText(/username/i), { target: { value: 'testuser' } });"
    }
  },
  
  // LIFECYCLE (18 questions)
  {
    id: "lifecycle-1",
    level: 1,
    topic: "lifecycle",
    question: "What are React component lifecycle methods?",
    multipleCorrect: true,
    options: [
      {
        id: "lifecycle-1-a",
        text: "Methods that are called at different stages of a component's existence",
        isCorrect: true,
        explanation: "Lifecycle methods are special methods that React calls at different points in a component's life, from initialization to unmounting, allowing you to run code at specific times."
      },
      {
        id: "lifecycle-1-b",
        text: "Only available in class components, not functional components",
        isCorrect: true,
        explanation: "Traditional lifecycle methods (componentDidMount, componentDidUpdate, etc.) are only available in class components. Functional components use hooks like useEffect instead."
      },
      {
        id: "lifecycle-1-c",
        text: "Include methods like componentDidMount, componentDidUpdate, and componentWillUnmount",
        isCorrect: true,
        explanation: "These are some of the most commonly used lifecycle methods, handling mounting, updating, and unmounting phases respectively."
      },
      {
        id: "lifecycle-1-d",
        text: "Can be directly used in functional components with hooks",
        isCorrect: false,
        explanation: "Lifecycle methods cannot be directly used in functional components. Instead, hooks like useEffect provide similar functionality but with a different API."
      },
      {
        id: "lifecycle-1-e",
        text: "Allow you to perform actions like fetching data or setting up subscriptions",
        isCorrect: true,
        explanation: "Lifecycle methods are commonly used for side effects like data fetching, DOM manipulation, setting up subscriptions, and cleaning up resources."
      }
    ],
    explanation: {
      correct: "Correct! React lifecycle methods are called at different stages of a component's existence, are only available in class components, include methods like componentDidMount, and allow actions like data fetching.",
      incorrect: "Lifecycle methods are called at different component stages, only exist in class components (not functional ones), include methods like componentDidMount, and allow side effects like data fetching. They can't be directly used in functional components.",
      detailed: "The component lifecycle has three main phases: 1) Mounting: constructor → getDerivedStateFromProps → render → componentDidMount; 2) Updating: getDerivedStateFromProps → shouldComponentUpdate → render → getSnapshotBeforeUpdate → componentDidUpdate; 3) Unmounting: componentWillUnmount. Each method serves a specific purpose: constructor initializes state and binds methods, componentDidMount is for after the component is in the DOM, componentDidUpdate is for after re-renders, componentWillUnmount is for cleanup. In modern React, some lifecycle methods are considered 'legacy' and marked for deprecation (componentWillMount, componentWillUpdate, componentWillReceiveProps), and the React team encourages migration to newer patterns."
    }
  },
  {
    id: "lifecycle-2",
    level: 1,
    topic: "lifecycle",
    question: "What is the equivalent of componentDidMount in functional components?",
    multipleCorrect: false,
    options: [
      {
        id: "lifecycle-2-a",
        text: "useEffect(() => { ... }, [])",
        isCorrect: true,
        explanation: "useEffect with an empty dependency array runs the effect function only after the initial render, similar to componentDidMount in class components."
      },
      {
        id: "lifecycle-2-b",
        text: "useEffect(() => { ... })",
        isCorrect: false,
        explanation: "useEffect without a dependency array runs after every render, not just the first one. This would be more like a combination of componentDidMount and componentDidUpdate."
      },
      {
        id: "lifecycle-2-c",
        text: "useMount(() => { ... })",
        isCorrect: false,
        explanation: "There is no useMount hook in React. This is a common custom hook name that people create, but it's not part of React's built-in hooks."
      },
      {
        id: "lifecycle-2-d",
        text: "useLayoutEffect(() => { ... }, [])",
        isCorrect: false,
        explanation: "While useLayoutEffect with an empty array is similar to componentDidMount, it runs synchronously before the browser paints, whereas componentDidMount runs asynchronously after painting. useEffect is the closer equivalent."
      }
    ],
    explanation: {
      correct: "Correct! useEffect(() => { ... }, []) with an empty dependency array is the equivalent of componentDidMount in functional components, running the effect only after the initial render.",
      incorrect: "The equivalent of componentDidMount is useEffect(() => { ... }, []) with an empty dependency array. useEffect without dependencies runs on every render, useMount doesn't exist in React, and useLayoutEffect has different timing than componentDidMount.",
      detailed: "The empty dependency array is key: useEffect(() => { console.log('Component mounted'); // Run side effects here return () => { console.log('Cleanup before unmount'); // Optional cleanup function }; }, []); Without the empty array, the effect would run after every render. With dependencies in the array, it would run when those dependencies change. While similar, there are subtle differences between useEffect([]) and componentDidMount: 1) Timing: componentDidMount runs synchronously after the first render, while useEffect runs asynchronously after the browser has painted; 2) In Strict Mode, useEffect with [] may run twice to help detect side effects, while componentDidMount always runs once; 3) The cleanup function in useEffect is similar to componentWillUnmount but can run before every effect re-execution, not just on unmount."
    }
  },
  {
    id: "lifecycle-3",
    level: 1,
    topic: "lifecycle",
    question: "What is the equivalent of componentDidUpdate in functional components?",
    multipleCorrect: false,
    options: [
      {
        id: "lifecycle-3-a",
        text: "useEffect(() => { ... }, [dependency1, dependency2])",
        isCorrect: true,
        explanation: "useEffect with a dependency array runs the effect when any dependency changes after the initial render, similar to componentDidUpdate checking specific props or state changes."
      },
      {
        id: "lifecycle-3-b",
        text: "useEffect(() => { ... })",
        isCorrect: false,
        explanation: "useEffect without a dependency array runs after every render, which is similar to componentDidUpdate but would also include the first render (like componentDidMount), making it not an exact equivalent."
      },
      {
        id: "lifecycle-3-c",
        text: "useUpdate(() => { ... })",
        isCorrect: false,
        explanation: "There is no useUpdate hook in React. This is a name sometimes used for custom hooks, but it's not part of React's built-in hooks."
      },
      {
        id: "lifecycle-3-d",
        text: "There is no equivalent in functional components",
        isCorrect: false,
        explanation: "There is an equivalent in functional components. The useEffect hook with appropriate dependencies can replicate componentDidUpdate behavior."
      }
    ],
    explanation: {
      correct: "Correct! useEffect(() => { ... }, [dependency1, dependency2]) with a dependency array is the equivalent of componentDidUpdate in functional components, running when dependencies change.",
      incorrect: "The equivalent of componentDidUpdate is useEffect with a dependency array. useEffect without dependencies runs on every render (including first render), useUpdate doesn't exist in React, and there is an equivalent in functional components.",
      detailed: "To replicate componentDidUpdate more precisely: useEffect(() => { if (firstRender.current) { firstRender.current = false; return; } console.log('Props or state changed'); // This won't run on first render }, [prop1, prop2]); // Only run when these dependencies change. The dependency array is crucial - it tells React when to re-run the effect. If any value in the array changes between renders, the effect will run again. This is more granular than componentDidUpdate, which runs after every update unless you add condition checks. A common pattern is checking prev vs current props in componentDidUpdate: componentDidUpdate(prevProps) { if (prevProps.id !== this.props.id) { // Do something when id changes } }. With useEffect, this becomes: useEffect(() => { // Do something when id changes }, [id]);"
    }
  },
  {
    id: "lifecycle-4",
    level: 1,
    topic: "lifecycle",
    question: "What is the equivalent of componentWillUnmount in functional components?",
    multipleCorrect: false,
    options: [
      {
        id: "lifecycle-4-a",
        text: "The cleanup function returned by useEffect",
        isCorrect: true,
        explanation: "When a function is returned from useEffect, React will run it when the component unmounts, providing the same cleanup opportunity as componentWillUnmount."
      },
      {
        id: "lifecycle-4-b",
        text: "useUnmount(() => { ... })",
        isCorrect: false,
        explanation: "There is no useUnmount hook in React. This is a name sometimes used for custom hooks, but it's not part of React's built-in hooks."
      },
      {
        id: "lifecycle-4-c",
        text: "useEffect(() => { ... }, [])",
        isCorrect: false,
        explanation: "This is incomplete. The useEffect call itself doesn't handle unmounting; it's the cleanup function returned by the effect that handles unmounting."
      },
      {
        id: "lifecycle-4-d",
        text: "There is no equivalent in functional components",
        isCorrect: false,
        explanation: "There is an equivalent in functional components. The cleanup function returned by useEffect serves the same purpose as componentWillUnmount."
      }
    ],
    explanation: {
      correct: "Correct! The cleanup function returned by useEffect is the equivalent of componentWillUnmount in functional components, running when the component unmounts.",
      incorrect: "The equivalent of componentWillUnmount is the cleanup function returned by useEffect. There's no useUnmount hook in React, useEffect itself doesn't handle unmounting, and there is an equivalent in functional components.",
      detailed: "The cleanup function pattern: useEffect(() => { // Setup code (like componentDidMount) console.log('Component mounted'); // This runs after first render const timer = setTimeout(() => console.log('Timer fired'), 1000); // Cleanup function (like componentWillUnmount) return () => { console.log('Component will unmount'); clearTimeout(timer); // Clean up the timer }; }, []); // Empty array means run only on mount/unmount. The cleanup function also runs before the effect runs again if the dependencies change, not just on unmount. This makes it more powerful than componentWillUnmount, as it can clean up from the previous effect before setting up the next one. Common cleanup operations include: clearing timeouts/intervals, removing event listeners, unsubscribing from subscriptions, and aborting fetch requests."
    }
  },
  {
    id: "lifecycle-5",
    level: 1,
    topic: "lifecycle",
    question: "What is the purpose of the componentDidMount lifecycle method?",
    multipleCorrect: true,
    options: [
      {
        id: "lifecycle-5-a",
        text: "To perform side effects after the component has been rendered to the DOM",
        isCorrect: true,
        explanation: "componentDidMount is called after the component has been rendered to the DOM, making it the ideal place to perform side effects that require the DOM to be ready."
      },
      {
        id: "lifecycle-5-b",
        text: "To fetch data from an API",
        isCorrect: true,
        explanation: "Data fetching is a common use case for componentDidMount, as it allows you to start loading data after the component is initially rendered."
      },
      {
        id: "lifecycle-5-c",
        text: "To set up subscriptions or timers",
        isCorrect: true,
        explanation: "Setting up subscriptions, timers, or event listeners are common use cases for componentDidMount, as these are side effects that need to be cleaned up later."
      },
      {
        id: "lifecycle-5-d",
        text: "To initialize the component's state",
        isCorrect: false,
        explanation: "State should be initialized in the constructor or with class fields, not in componentDidMount. By the time componentDidMount runs, the component has already rendered once with the initial state."
      },
      {
        id: "lifecycle-5-e",
        text: "To directly modify the DOM before the user sees the component",
        isCorrect: false,
        explanation: "By the time componentDidMount runs, the component has already been rendered to the DOM and is visible to the user. For DOM measurements or mutations before painting, componentDidUpdate or useLayoutEffect would be more appropriate."
      }
    ],
    explanation: {
      correct: "Correct! componentDidMount is used to perform side effects after the component has been rendered to the DOM, such as fetching data from APIs and setting up subscriptions or timers.",
      incorrect: "componentDidMount performs side effects after DOM rendering, like API data fetching and setting up subscriptions/timers. It's not for initializing state (use constructor) or modifying DOM before user sees it (already visible).",
      detailed: "Common componentDidMount patterns: 1) Data fetching: componentDidMount() { fetch('/api/data') .then(response => response.json()) .then(data => this.setState({ data })) .catch(error => this.setState({ error })); }; 2) DOM manipulation: componentDidMount() { const canvas = this.canvasRef.current; const ctx = canvas.getContext('2d'); // Draw on the canvas }; 3) Subscriptions: componentDidMount() { this.subscription = someService.subscribe(data => this.setState({ data })); }; 4) Timers: componentDidMount() { this.timer = setInterval(() => this.tick(), 1000); }; 5) Third-party library initialization: componentDidMount() { const chart = new ChartLibrary(this.chartRef.current, { data: this.props.data }); this.chart = chart; }. Important note: setState in componentDidMount will trigger an extra rendering, but it happens before the browser updates the screen."
    }
  },
  {
    id: "lifecycle-6",
    level: 1,
    topic: "lifecycle",
    question: "What is the purpose of the componentDidUpdate lifecycle method?",
    multipleCorrect: true,
    options: [
      {
        id: "lifecycle-6-a",
        text: "To perform side effects after the component has updated",
        isCorrect: true,
        explanation: "componentDidUpdate is called after a component's updates are flushed to the DOM, making it the ideal place to perform side effects in response to prop or state changes."
      },
      {
        id: "lifecycle-6-b",
        text: "To fetch new data when props change",
        isCorrect: true,
        explanation: "A common use case for componentDidUpdate is to fetch new data when relevant props have changed, often by comparing current and previous props."
      },
      {
        id: "lifecycle-6-c",
        text: "To update the DOM in response to prop or state changes",
        isCorrect: true,
        explanation: "componentDidUpdate allows you to access the DOM after an update, which is useful for DOM manipulations that need to happen in response to prop or state changes."
      },
      {
        id: "lifecycle-6-d",
        text: "To prevent unnecessary re-renders",
        isCorrect: false,
        explanation: "componentDidUpdate doesn't prevent re-renders; it runs after a re-render has already occurred. To prevent unnecessary re-renders, you would use shouldComponentUpdate or React.memo."
      },
      {
        id: "lifecycle-6-e",
        text: "It's automatically called after every setState call",
        isCorrect: true,
        explanation: "componentDidUpdate is called after every update, including those triggered by setState, as long as shouldComponentUpdate (if implemented) returns true."
      }
    ],
    explanation: {
      correct: "Correct! componentDidUpdate performs side effects after updates, fetches new data when props change, updates the DOM in response to changes, and is called after every setState call.",
      incorrect: "componentDidUpdate performs side effects after updates, fetches data when props change, updates DOM in response to changes, and runs after setState calls. It doesn't prevent re-renders—it runs after them.",
      detailed: "componentDidUpdate patterns: 1) Comparing props changes: componentDidUpdate(prevProps) { if (prevProps.userId !== this.props.userId) { this.fetchData(this.props.userId); } }; 2) DOM updates: componentDidUpdate() { // Update the DOM in response to state/props changes this.chartRef.current.update(this.props.data); }; 3) Network requests: componentDidUpdate(prevProps, prevState) { if (prevState.query !== this.state.query) { this.fetchSearchResults(this.state.query); } }; 4) Scroll position: componentDidUpdate(prevProps) { if (this.props.location !== prevProps.location) { window.scrollTo(0, 0); } }. Important warnings: 1) Always check for changes before performing side effects to avoid infinite loops; 2) setState in componentDidUpdate must be wrapped in a condition, or it will cause an infinite loop; 3) componentDidUpdate doesn't run after the initial render (componentDidMount handles that case)."
    }
  },
  {
    id: "lifecycle-7",
    level: 1,
    topic: "lifecycle",
    question: "What is the purpose of the componentWillUnmount lifecycle method?",
    multipleCorrect: true,
    options: [
      {
        id: "lifecycle-7-a",
        text: "To perform cleanup before a component is removed from the DOM",
        isCorrect: true,
        explanation: "componentWillUnmount is called just before a component is unmounted and destroyed, making it the ideal place to perform cleanup to prevent memory leaks."
      },
      {
        id: "lifecycle-7-b",
        text: "To cancel network requests",
        isCorrect: true,
        explanation: "Canceling pending network requests in componentWillUnmount prevents potential state updates on unmounted components, which would cause warnings or errors."
      },
      {
        id: "lifecycle-7-c",
        text: "To remove event listeners or subscriptions",
        isCorrect: true,
        explanation: "Removing event listeners, subscriptions, or observers in componentWillUnmount prevents memory leaks by ensuring these resources are properly cleaned up when the component is no longer in use."
      },
      {
        id: "lifecycle-7-d",
        text: "To save the component's state for when it's remounted",
        isCorrect: false,
        explanation: "componentWillUnmount doesn't automatically save state for future remounts. If you need to persist state between unmounts, you would need to store it elsewhere (like in a parent component, context, or external store)."
      },
      {
        id: "lifecycle-7-e",
        text: "To clear timers and intervals",
        isCorrect: true,
        explanation: "Clearing timers and intervals in componentWillUnmount prevents them from continuing to run after the component is unmounted, which could cause memory leaks or unexpected behavior."
      }
    ],
    explanation: {
      correct: "Correct! componentWillUnmount performs cleanup before removal from DOM, including canceling network requests, removing event listeners/subscriptions, and clearing timers/intervals.",
      incorrect: "componentWillUnmount performs cleanup before DOM removal, including canceling requests, removing listeners/subscriptions, and clearing timers. It doesn't automatically save state for remounting.",
      detailed: "Common cleanup operations: 1) Clearing timers: componentWillUnmount() { clearTimeout(this.timeout); clearInterval(this.interval); }; 2) Removing event listeners: componentWillUnmount() { window.removeEventListener('resize', this.handleResize); document.removeEventListener('click', this.handleOutsideClick); }; 3) Canceling network requests: componentWillUnmount() { this.abortController.abort(); }; 4) Unsubscribing from subscriptions: componentWillUnmount() { this.subscription.unsubscribe(); }; 5) Cleaning up third-party libraries: componentWillUnmount() { this.chart.destroy(); this.map.remove(); }. Failing to clean up properly can lead to memory leaks, React warnings about updates on unmounted components, or unexpected behavior when components are conditionally rendered."
    }
  },
  {
    id: "lifecycle-8",
    level: 1,
    topic: "lifecycle",
    question: "What is the purpose of the componentDidCatch lifecycle method?",
    multipleCorrect: false,
    options: [
      {
        id: "lifecycle-8-a",
        text: "To catch JavaScript errors in children components and display fallback UI",
        isCorrect: true,
        explanation: "componentDidCatch is used to catch errors in any child component, allowing the parent to display a fallback UI instead of crashing the entire application."
      },
      {
        id: "lifecycle-8-b",
        text: "To catch network request errors",
        isCorrect: false,
        explanation: "componentDidCatch only catches rendering errors in React components, not network request errors. Those would need to be handled separately with try/catch or promise error handling."
      },
      {
        id: "lifecycle-8-c",
        text: "To handle errors in the current component",
        isCorrect: false,
        explanation: "componentDidCatch only catches errors in child components, not in the component itself where the method is defined."
      },
      {
        id: "lifecycle-8-d",
        text: "To catch all JavaScript errors in the application",
        isCorrect: false,
        explanation: "componentDidCatch only catches errors in the component's subtree, not all errors in the application. It won't catch errors in event handlers or asynchronous code."
      }
    ],
    explanation: {
      correct: "Correct! componentDidCatch is used to catch JavaScript errors in children components and display fallback UI, preventing the entire application from crashing when an error occurs.",
      incorrect: "componentDidCatch only catches rendering errors in child components, not network errors, errors in the component itself, or all errors in the application.",
      detailed: "componentDidCatch was introduced in React 16 as part of the Error Boundaries feature. It works alongside static getDerivedStateFromError() to create components that can catch JavaScript errors in their child component tree, log those errors, and display fallback UI. Error boundaries only catch errors during rendering, lifecycle methods, and constructors. They don't catch errors in event handlers, asynchronous code, or server-side rendering. A typical error boundary looks like: class ErrorBoundary extends React.Component { state = { hasError: false }; static getDerivedStateFromError(error) { return { hasError: true }; } componentDidCatch(error, info) { logErrorToService(error, info); } render() { if (this.state.hasError) { return <h1>Something went wrong.</h1>; } return this.props.children; } }"
    }
  },
  {
    id: "lifecycle-9",
    level: 1,
    topic: "lifecycle",
    question: "What is the purpose of the static getDerivedStateFromProps lifecycle method?",
    multipleCorrect: false,
    options: [
      {
        id: "lifecycle-9-a",
        text: "To update state based on changes in props",
        isCorrect: true,
        explanation: "getDerivedStateFromProps allows a component to update its state based on changes in props. It's called before every render, allowing state to be synchronized with props when needed."
      },
      {
        id: "lifecycle-9-b",
        text: "To fetch data from an API",
        isCorrect: false,
        explanation: "getDerivedStateFromProps is not meant for data fetching. It's a static method that should be pure and not cause side effects like API calls."
      },
      {
        id: "lifecycle-9-c",
        text: "To directly access the component instance",
        isCorrect: false,
        explanation: "As a static method, getDerivedStateFromProps cannot access the component instance (this). It receives props and state as arguments and should return an object to update state or null."
      },
      {
        id: "lifecycle-9-d",
        text: "To replace all other lifecycle methods",
        isCorrect: false,
        explanation: "getDerivedStateFromProps doesn't replace other lifecycle methods. It has a specific purpose of deriving state from props and works alongside other lifecycle methods."
      }
    ],
    explanation: {
      correct: "Correct! static getDerivedStateFromProps is used to update state based on changes in props. It's called before every render and allows state to be synchronized with props when needed.",
      incorrect: "getDerivedStateFromProps is for updating state based on props changes. It's not for data fetching, can't access the component instance (this), and doesn't replace other lifecycle methods.",
      detailed: "static getDerivedStateFromProps(props, state) was introduced in React 16.3 as a safer alternative to the deprecated componentWillReceiveProps. It's called before every render, including the initial render. This method should be pure with no side effects and must return an object to update state or null to indicate no state update is necessary. It's rarely needed and should be used sparingly - most components should derive values directly in render() or use memoization instead. Common use cases include: 1) Resetting internal state when a specific prop changes, 2) Implementing a controlled component with internal state, and 3) Caching calculations based on props. The React team recommends alternatives like fully controlled components or fully uncontrolled components with a key for most scenarios."
    }
  },
  {
    id: "lifecycle-10",
    level: 1,
    topic: "lifecycle",
    question: "What is the purpose of the getSnapshotBeforeUpdate lifecycle method?",
    multipleCorrect: false,
    options: [
      {
        id: "lifecycle-10-a",
        text: "To capture information from the DOM before it potentially changes",
        isCorrect: true,
        explanation: "getSnapshotBeforeUpdate allows a component to capture some information from the DOM (like scroll position) right before it's potentially changed due to the update."
      },
      {
        id: "lifecycle-10-b",
        text: "To prevent a component from updating",
        isCorrect: false,
        explanation: "getSnapshotBeforeUpdate doesn't prevent updates. To prevent updates, you would use shouldComponentUpdate, which returns a boolean indicating whether the component should update."
      },
      {
        id: "lifecycle-10-c",
        text: "To create a backup of the component's state",
        isCorrect: false,
        explanation: "While getSnapshotBeforeUpdate can capture information before an update, it's not specifically for backing up state. It's for capturing DOM information that might be changed by the update."
      },
      {
        id: "lifecycle-10-d",
        text: "To initialize the component's state",
        isCorrect: false,
        explanation: "getSnapshotBeforeUpdate doesn't initialize state. State initialization happens in the constructor or with class fields. This method is called right before updates are committed to the DOM."
      }
    ],
    explanation: {
      correct: "Correct! getSnapshotBeforeUpdate allows a component to capture information from the DOM before it potentially changes due to an update, like scroll position or selection state.",
      incorrect: "getSnapshotBeforeUpdate captures DOM information before changes occur. It doesn't prevent updates, create state backups, or initialize state.",
      detailed: "getSnapshotBeforeUpdate(prevProps, prevState) was introduced in React 16.3 and is called right before mutations are made to the DOM. It enables your component to capture some information from the DOM (e.g., scroll position) before it's potentially changed. Any value returned by this method will be passed as a parameter to componentDidUpdate(). A common use case is maintaining scroll position in a dynamic content container: getSnapshotBeforeUpdate(prevProps, prevState) { if (prevProps.list.length < this.props.list.length) { const list = this.listRef.current; return list.scrollHeight - list.scrollTop; } return null; } componentDidUpdate(prevProps, prevState, snapshot) { if (snapshot !== null) { const list = this.listRef.current; list.scrollTop = list.scrollHeight - snapshot; } }"
    }
  },
  {
    id: "lifecycle-11",
    level: 1,
    topic: "lifecycle",
    question: "What is the purpose of the static getDerivedStateFromError lifecycle method?",
    multipleCorrect: false,
    options: [
      {
        id: "lifecycle-11-a",
        text: "To update state when a descendant component throws an error",
        isCorrect: true,
        explanation: "getDerivedStateFromError is called when a descendant component throws an error, allowing the component to update its state to display fallback UI instead of crashing."
      },
      {
        id: "lifecycle-11-b",
        text: "To log errors to an error reporting service",
        isCorrect: false,
        explanation: "getDerivedStateFromError is not for logging errors. As a static method, it should be pure with no side effects. Error logging should be done in componentDidCatch instead."
      },
      {
        id: "lifecycle-11-c",
        text: "To prevent errors from occurring in components",
        isCorrect: false,
        explanation: "getDerivedStateFromError doesn't prevent errors; it responds to them after they occur. It's part of the error boundary pattern for graceful error handling."
      },
      {
        id: "lifecycle-11-d",
        text: "To handle all JavaScript errors in the application",
        isCorrect: false,
        explanation: "getDerivedStateFromError only handles errors in the rendering phase of React components in its subtree. It doesn't catch errors in event handlers, asynchronous code, or server-side rendering."
      }
    ],
    explanation: {
      correct: "Correct! static getDerivedStateFromError is used to update state when a descendant component throws an error, allowing the component to render fallback UI instead of crashing.",
      incorrect: "getDerivedStateFromError updates state when descendant components throw errors. It's not for logging errors (use componentDidCatch), doesn't prevent errors, and doesn't handle all JavaScript errors.",
      detailed: "static getDerivedStateFromError(error) is part of React's Error Boundaries feature introduced in React 16. It works alongside componentDidCatch to create components that can gracefully handle errors in their subtree. While componentDidCatch is used for side effects like logging errors, getDerivedStateFromError is used to update state based on the error. It's called during the render phase, so it must be free of side effects. A typical implementation looks like: static getDerivedStateFromError(error) { return { hasError: true }; }. Error boundaries only catch errors during rendering, lifecycle methods, and constructors of components below them in the tree. They don't catch errors in event handlers, asynchronous code, or server-side rendering."
    }
  },
  {
    id: "lifecycle-12",
    level: 1,
    topic: "lifecycle",
    question: "What is the difference between componentDidMount and useEffect(() => {}, []) in React?",
    multipleCorrect: true,
    options: [
      {
        id: "lifecycle-12-a",
        text: "componentDidMount is used in class components, while useEffect is used in functional components",
        isCorrect: true,
        explanation: "componentDidMount is a lifecycle method available only in class components, while useEffect is a hook that provides similar functionality in functional components."
      },
      {
        id: "lifecycle-12-b",
        text: "useEffect with an empty dependency array runs after the initial render and after every update",
        isCorrect: false,
        explanation: "useEffect with an empty dependency array ([]) only runs after the initial render, not after updates. This behavior is similar to componentDidMount."
      },
      {
        id: "lifecycle-12-c",
        text: "componentDidMount runs synchronously after the initial render, while useEffect runs asynchronously",
        isCorrect: true,
        explanation: "componentDidMount runs synchronously after the initial render and DOM updates, while useEffect is scheduled asynchronously after the render is committed to the screen."
      },
      {
        id: "lifecycle-12-d",
        text: "useEffect can return a cleanup function, while componentDidMount cannot",
        isCorrect: true,
        explanation: "useEffect can return a cleanup function that runs before the component unmounts, similar to componentWillUnmount. componentDidMount itself doesn't have a built-in cleanup mechanism."
      }
    ],
    explanation: {
      correct: "Correct! componentDidMount is for class components while useEffect is for functional components, componentDidMount runs synchronously while useEffect runs asynchronously, and useEffect can return a cleanup function.",
      incorrect: "componentDidMount is for class components and useEffect for functional components. useEffect with [] only runs after initial render (not updates), runs asynchronously (unlike synchronous componentDidMount), and can return a cleanup function.",
      detailed: "While useEffect(() => {}, []) is often described as the functional equivalent of componentDidMount, there are important differences: 1) Timing: componentDidMount runs synchronously right after the initial render and DOM updates, potentially blocking the browser from updating the screen. useEffect runs asynchronously after the render is committed to the screen, allowing the browser to paint first. 2) Cleanup: useEffect can return a cleanup function that runs before the component unmounts, combining aspects of both componentDidMount and componentWillUnmount in one hook. 3) Strict Mode: In development with Strict Mode, useEffect runs twice to help detect side effects, while componentDidMount only runs once. These differences can matter for certain use cases, especially those involving DOM measurements or third-party libraries that expect synchronous initialization."
    }
  },
  {
    id: "lifecycle-13",
    level: 1,
    topic: "lifecycle",
    question: "What is the difference between componentDidUpdate and useEffect(() => {}, [dependency]) in React?",
    multipleCorrect: true,
    options: [
      {
        id: "lifecycle-13-a",
        text: "componentDidUpdate is used in class components, while useEffect is used in functional components",
        isCorrect: true,
        explanation: "componentDidUpdate is a lifecycle method available only in class components, while useEffect is a hook that provides similar functionality in functional components."
      },
      {
        id: "lifecycle-13-b",
        text: "componentDidUpdate doesn't run after the initial render, while useEffect does",
        isCorrect: true,
        explanation: "componentDidUpdate only runs after updates, not after the initial render. useEffect runs after both the initial render and updates when dependencies change."
      },
      {
        id: "lifecycle-13-c",
        text: "componentDidUpdate provides previous props and state as parameters, while useEffect doesn't",
        isCorrect: true,
        explanation: "componentDidUpdate receives prevProps and prevState as parameters, making it easy to compare with current values. useEffect doesn't provide these; you need to use refs or the useRef hook to store previous values."
      },
      {
        id: "lifecycle-13-d",
        text: "useEffect with dependencies only runs when those specific dependencies change, while componentDidUpdate runs after every update",
        isCorrect: true,
        explanation: "useEffect with a dependency array only runs when the specified dependencies change. componentDidUpdate runs after every update unless you add conditional logic inside it."
      }
    ],
    explanation: {
      correct: "Correct! componentDidUpdate is for class components, doesn't run after initial render, provides previous props/state, and runs after every update. useEffect is for functional components, runs after initial render, doesn't provide previous values, and only runs when dependencies change.",
      incorrect: "All statements are correct. componentDidUpdate is for class components, doesn't run after initial render, provides previous props/state as parameters, and runs after every update. useEffect is for functional components, runs after initial render too, doesn't provide previous values, and only runs when dependencies change.",
      detailed: "useEffect with dependencies is similar to componentDidUpdate with conditions, but there are important differences: 1) Initial render: useEffect runs after the initial render and subsequent updates, while componentDidUpdate only runs after updates. 2) Specificity: useEffect with dependencies automatically only runs when those dependencies change, while componentDidUpdate requires manual comparisons: componentDidUpdate(prevProps) { if (prevProps.userId !== this.props.userId) { /* do something */ } }. 3) Previous values: componentDidUpdate receives previous props and state directly, while in useEffect you need to manually track previous values: useEffect(() => { if (prevUserIdRef.current !== userId) { /* do something */ } prevUserIdRef.current = userId; }, [userId]). 4) Timing: componentDidUpdate runs synchronously after updates, while useEffect runs asynchronously."
    }
  },
  {
    id: "lifecycle-14",
    level: 1,
    topic: "lifecycle",
    question: "What is the difference between componentWillUnmount and the cleanup function in useEffect?",
    multipleCorrect: true,
    options: [
      {
        id: "lifecycle-14-a",
        text: "componentWillUnmount is used in class components, while useEffect cleanup is used in functional components",
        isCorrect: true,
        explanation: "componentWillUnmount is a lifecycle method available only in class components, while useEffect cleanup functions provide similar functionality in functional components."
      },
      {
        id: "lifecycle-14-b",
        text: "The useEffect cleanup function runs before the component unmounts and before re-running the effect",
        isCorrect: true,
        explanation: "The cleanup function returned by useEffect runs not only before the component unmounts (like componentWillUnmount) but also before the effect runs again due to dependency changes."
      },
      {
        id: "lifecycle-14-c",
        text: "componentWillUnmount runs synchronously, while useEffect cleanup runs asynchronously",
        isCorrect: true,
        explanation: "componentWillUnmount runs synchronously during the unmounting process, while useEffect cleanup functions run asynchronously after the UI updates."
      },
      {
        id: "lifecycle-14-d",
        text: "The useEffect cleanup function can only be used once per component",
        isCorrect: false,
        explanation: "Multiple useEffect hooks can be used in a single component, each with its own cleanup function. This allows for better separation of concerns compared to putting all cleanup logic in componentWillUnmount."
      }
    ],
    explanation: {
      correct: "Correct! componentWillUnmount is for class components, while useEffect cleanup is for functional components. The cleanup function runs before unmounting and before re-running effects, and runs asynchronously (unlike synchronous componentWillUnmount).",
      incorrect: "componentWillUnmount is for class components and useEffect cleanup is for functional components. The cleanup function runs before unmounting AND before re-running effects, runs asynchronously, and can be used multiple times per component (not just once).",
      detailed: "The cleanup function in useEffect serves a similar purpose to componentWillUnmount but with important differences: 1) Multiple cleanups: You can have multiple useEffect hooks with separate cleanup functions, allowing better organization of related code. 2) Timing: The cleanup function runs not only before unmounting but also before re-running the effect when dependencies change, making it more versatile. 3) Asynchronous execution: Like the effect itself, the cleanup function runs asynchronously after the UI updates, while componentWillUnmount runs synchronously. A typical pattern looks like: useEffect(() => { const subscription = subscribe(); return () => { unsubscribe(subscription); }; }, [source]). This pattern ensures resources are properly cleaned up both when the component unmounts and when the subscription needs to change due to dependency changes."
    }
  },
  {
    id: "lifecycle-15",
    level: 1,
    topic: "lifecycle",
    question: "What is the purpose of the shouldComponentUpdate lifecycle method?",
    multipleCorrect: false,
    options: [
      {
        id: "lifecycle-15-a",
        text: "To control whether the component should re-render after state or props changes",
        isCorrect: true,
        explanation: "shouldComponentUpdate lets you decide whether a component should re-render after state or props changes. By default it returns true, but you can override it to return false when you know a render isn't needed."
      },
      {
        id: "lifecycle-15-b",
        text: "To force a component to update regardless of state or props changes",
        isCorrect: false,
        explanation: "shouldComponentUpdate doesn't force updates; it potentially prevents them. To force an update, you would use the forceUpdate() method."
      },
      {
        id: "lifecycle-15-c",
        text: "To update the component's state before rendering",
        isCorrect: false,
        explanation: "Updating state before rendering would be done in getDerivedStateFromProps or componentWillUpdate (deprecated), not shouldComponentUpdate. shouldComponentUpdate just decides whether to render."
      },
      {
        id: "lifecycle-15-d",
        text: "To handle side effects after a component updates",
        isCorrect: false,
        explanation: "Handling side effects after updates is the purpose of componentDidUpdate, not shouldComponentUpdate. shouldComponentUpdate runs before the update and just decides whether to proceed with rendering."
      }
    ],
    explanation: {
      correct: "Correct! shouldComponentUpdate lets you control whether a component should re-render after state or props changes. By returning false, you can prevent unnecessary renders, which can improve performance.",
      incorrect: "shouldComponentUpdate lets you control whether a component should re-render. It doesn't force updates, update state before rendering, or handle side effects after updates.",
      detailed: "shouldComponentUpdate(nextProps, nextState) is a performance optimization method that runs before rendering when props or state change. By default, it returns true, causing the component to re-render. By implementing this method and returning false when a render isn't needed, you can prevent unnecessary renders. It takes nextProps and nextState as arguments, which you can compare with current props and state. In modern React, you can often achieve similar optimization with React.memo for functional components or by extending PureComponent instead of Component for class components, both of which implement shallow comparison automatically. Incorrect implementations of shouldComponentUpdate can cause bugs by preventing necessary updates, so it should be used carefully."
    }
  },
  {
    id: "lifecycle-16",
    level: 1,
    topic: "lifecycle",
    question: "What is the equivalent of shouldComponentUpdate in functional components?",
    multipleCorrect: false,
    options: [
      {
        id: "lifecycle-16-a",
        text: "React.memo with an optional comparison function",
        isCorrect: true,
        explanation: "React.memo is a higher-order component that memoizes a functional component, preventing re-renders unless props change. It accepts an optional comparison function similar to shouldComponentUpdate."
      },
      {
        id: "lifecycle-16-b",
        text: "The useMemo hook",
        isCorrect: false,
        explanation: "While useMemo can help optimize expensive calculations, it's not the equivalent of shouldComponentUpdate. useMemo memoizes a value, not the entire component render."
      },
      {
        id: "lifecycle-16-c",
        text: "The useCallback hook",
        isCorrect: false,
        explanation: "useCallback memoizes callback functions, not component renders. It's useful for optimizing child components that receive function props, but it's not the equivalent of shouldComponentUpdate."
      },
      {
        id: "lifecycle-16-d",
        text: "The shouldUpdate hook",
        isCorrect: false,
        explanation: "There is no shouldUpdate hook in React. The closest equivalent to shouldComponentUpdate for functional components is React.memo."
      }
    ],
    explanation: {
      correct: "Correct! React.memo is the functional component equivalent of shouldComponentUpdate. It memoizes a component and prevents re-renders unless props change, with an optional comparison function for custom logic.",
      incorrect: "React.memo is the equivalent of shouldComponentUpdate for functional components. useMemo memoizes values (not components), useCallback memoizes functions, and there is no shouldUpdate hook in React.",
      detailed: "React.memo works similarly to PureComponent but for function components instead of classes. By default, it does a shallow comparison of props and only re-renders if they've changed. You can also provide a custom comparison function as the second argument: React.memo(MyComponent, (prevProps, nextProps) => { return prevProps.id === nextProps.id; }). Unlike shouldComponentUpdate, the comparison function for React.memo returns true when props are equal (to prevent re-rendering), while shouldComponentUpdate returns true when the component should update. React.memo is a performance optimization and shouldn't be used to prevent necessary updates. For more complex scenarios, you might combine React.memo with hooks like useMemo and useCallback to optimize specific parts of your component."
    }
  },
  {
    id: "lifecycle-17",
    level: 1,
    topic: "lifecycle",
    question: "What are the phases of the React component lifecycle?",
    multipleCorrect: false,
    options: [
      {
        id: "lifecycle-17-a",
        text: "Mounting, Updating, and Unmounting",
        isCorrect: true,
        explanation: "The React component lifecycle consists of three main phases: Mounting (when a component is created and inserted into the DOM), Updating (when a component re-renders due to changes), and Unmounting (when a component is removed from the DOM)."
      },
      {
        id: "lifecycle-17-b",
        text: "Creation, Modification, and Deletion",
        isCorrect: false,
        explanation: "While this is conceptually similar, these aren't the official names of the React lifecycle phases. The correct terms are Mounting, Updating, and Unmounting."
      },
      {
        id: "lifecycle-17-c",
        text: "Initialization, Rendering, and Destruction",
        isCorrect: false,
        explanation: "While this is conceptually similar, these aren't the official names of the React lifecycle phases. The correct terms are Mounting, Updating, and Unmounting."
      },
      {
        id: "lifecycle-17-d",
        text: "Loading, Processing, and Unloading",
        isCorrect: false,
        explanation: "These aren't the official names of the React lifecycle phases. The correct terms are Mounting, Updating, and Unmounting."
      }
    ],
    explanation: {
      correct: "Correct! The React component lifecycle consists of three main phases: Mounting (component creation and insertion), Updating (component re-rendering), and Unmounting (component removal).",
      incorrect: "The official React component lifecycle phases are Mounting, Updating, and Unmounting. The other options use different terminology that isn't standard in React.",
      detailed: "Each lifecycle phase includes specific methods: 1) Mounting: constructor(), static getDerivedStateFromProps(), render(), componentDidMount(); 2) Updating: static getDerivedStateFromProps(), shouldComponentUpdate(), render(), getSnapshotBeforeUpdate(), componentDidUpdate(); 3) Unmounting: componentWillUnmount(). There's also an Error Handling phase with static getDerivedStateFromError() and componentDidCatch(). In functional components with hooks, these phases still conceptually exist, but they're handled differently: useEffect with an empty dependency array ([]) for mounting, useEffect with dependencies for updating, and the cleanup function returned by useEffect for unmounting."
    }
  },
  {
    id: "lifecycle-18",
    level: 1,
    topic: "lifecycle",
    question: "What is the correct order of lifecycle methods during the mounting phase?",
    multipleCorrect: false,
    options: [
      {
        id: "lifecycle-18-a",
        text: "constructor → getDerivedStateFromProps → render → componentDidMount",
        isCorrect: true,
        explanation: "During mounting, React calls these methods in order: constructor (for initialization), static getDerivedStateFromProps (to derive state from props), render (to describe the UI), and finally componentDidMount (for side effects after mounting)."
      },
      {
        id: "lifecycle-18-b",
        text: "constructor → render → componentDidMount → getDerivedStateFromProps",
        isCorrect: false,
        explanation: "This order is incorrect. getDerivedStateFromProps is called before render, not after componentDidMount."
      },
      {
        id: "lifecycle-18-c",
        text: "getDerivedStateFromProps → constructor → render → componentDidMount",
        isCorrect: false,
        explanation: "This order is incorrect. The constructor is always called first during the mounting phase, before getDerivedStateFromProps."
      },
      {
        id: "lifecycle-18-d",
        text: "constructor → componentWillMount → render → componentDidMount",
        isCorrect: false,
        explanation: "This order includes the deprecated componentWillMount method. In modern React, the correct sequence uses getDerivedStateFromProps instead of componentWillMount."
      }
    ],
    explanation: {
      correct: "Correct! During the mounting phase, React calls lifecycle methods in this order: constructor, static getDerivedStateFromProps, render, and finally componentDidMount.",
      incorrect: "The correct order during mounting is: constructor → getDerivedStateFromProps → render → componentDidMount. The other options have incorrect sequences or include deprecated methods.",
      detailed: "Each method has a specific purpose during mounting: 1) constructor: Initialize state and bind methods; 2) static getDerivedStateFromProps: Update state based on props before rendering; 3) render: Describe what the UI should look like; 4) componentDidMount: Perform side effects like data fetching or DOM manipulation after the component is mounted. Understanding this order is important for proper component implementation. For example, you shouldn't try to access DOM elements in render because they don't exist yet, but you can in componentDidMount. In functional components with hooks, this sequence is conceptually similar but implemented differently, primarily through the useState hook for initialization and useEffect with an empty dependency array for post-mounting effects."
    }
  },

  // ROUTER (18 questions)
  {
    id: "router-1",
    level: 1,
    topic: "router",
    question: "What is React Router?",
    multipleCorrect: false,
    options: [
      {
        id: "router-1-a",
        text: "A standard library for routing in React applications",
        isCorrect: true,
        explanation: "React Router is the standard routing library for React applications. It enables navigation among views in a React application, allowing for a single-page application experience with navigation without page refreshes."
      },
      {
        id: "router-1-b",
        text: "A built-in React feature for handling routes",
        isCorrect: false,
        explanation: "React Router is not built into React itself. It's a third-party library that needs to be installed separately with npm or yarn."
      },
      {
        id: "router-1-c",
        text: "A server-side routing solution for React",
        isCorrect: false,
        explanation: "While React Router can work with server-side rendering, it's primarily a client-side routing solution that runs in the browser. Server-side routing would typically be handled by your backend framework."
      },
      {
        id: "router-1-d",
        text: "A tool for creating API routes in React applications",
        isCorrect: false,
        explanation: "React Router is for UI routing within a React application, not for creating API routes. API routes would typically be handled by a backend server using something like Express.js."
      }
    ],
    explanation: {
      correct: "Correct! React Router is the standard library for routing in React applications. It enables navigation between different components in a React application without full page refreshes.",
      incorrect: "React Router is a standard library for routing in React applications, not a built-in React feature. It's primarily for client-side routing, not server-side routing or API route creation.",
      detailed: "React Router provides a way to map URLs to components, allowing users to navigate through a React application as they would through a traditional multi-page website, but without the page refreshes. It maintains UI state between route changes and provides features like nested routes, route parameters, navigation guards, and more. React Router has gone through several major versions with significant API changes. The current version (v6) uses a declarative, component-based approach with components like BrowserRouter, Routes, Route, Link, NavLink, Navigate, Outlet, and hooks like useParams, useNavigate, and useLocation. It's important to check which version you're using, as the API and recommended patterns differ between versions."
    }
  },
  {
    id: "router-2",
    level: 1,
    topic: "router",
    question: "What is the purpose of the <BrowserRouter> component in React Router?",
    multipleCorrect: false,
    options: [
      {
        id: "router-2-a",
        text: "To provide routing context to the application using the HTML5 history API",
        isCorrect: true,
        explanation: "BrowserRouter uses the HTML5 history API (pushState, replaceState, and popstate event) to keep the UI in sync with the URL, providing routing context to all nested components."
      },
      {
        id: "router-2-b",
        text: "To create browser-specific routes that don't work on mobile devices",
        isCorrect: false,
        explanation: "BrowserRouter doesn't create browser-specific routes. It works on all devices including mobile, as long as the browser supports the HTML5 history API, which most modern browsers do."
      },
      {
        id: "router-2-c",
        text: "To handle server-side routing in a React application",
        isCorrect: false,
        explanation: "BrowserRouter is for client-side routing, not server-side routing. For server-side routing with React Router, you would typically use StaticRouter instead."
      },
      {
        id: "router-2-d",
        text: "To create a browser history object manually",
        isCorrect: false,
        explanation: "BrowserRouter creates and manages the history object for you automatically. If you need to create a history object manually, you would use the createBrowserHistory function from the history package and use it with Router instead."
      }
    ],
    explanation: {
      correct: "Correct! <BrowserRouter> provides routing context to the application using the HTML5 history API, keeping the UI in sync with the URL and enabling client-side routing.",
      incorrect: "BrowserRouter provides routing context using the HTML5 history API. It's not browser-specific (works on mobile too), doesn't handle server-side routing, and doesn't require you to create a history object manually.",
      detailed: "BrowserRouter is typically used at the root of your application to wrap all components that need access to routing functionality. It creates a browser history object that uses the HTML5 history API to track navigation history in the browser. This enables clean URLs without the hash (#) character that was common in older single-page applications. A typical setup looks like: <BrowserRouter><App /></BrowserRouter>. For BrowserRouter to work properly in production, your server needs to be configured to serve the same HTML file for all routes that your React application handles, allowing the client-side router to take control once the JavaScript loads. If you need more control over the history object or need to use routing outside of React components, you can use the lower-level Router component with a manually created history object."
    }
  },
  {
    id: "router-3",
    level: 1,
    topic: "router",
    question: "What is the difference between <BrowserRouter> and <HashRouter> in React Router?",
    multipleCorrect: true,
    options: [
      {
        id: "router-3-a",
        text: "<BrowserRouter> uses the HTML5 history API while <HashRouter> uses the hash portion of the URL",
        isCorrect: true,
        explanation: "BrowserRouter uses pushState, replaceState, and the popstate event from the HTML5 history API, while HashRouter uses the hash portion of the URL (everything after the #) to manage the routing state."
      },
      {
        id: "router-3-b",
        text: "<HashRouter> works without server configuration, while <BrowserRouter> requires server configuration for direct URL access",
        isCorrect: true,
        explanation: "With HashRouter, all routing is handled client-side via the hash, so the server only needs to serve the main HTML file. BrowserRouter requires server configuration to redirect all routes to the main HTML file for direct URL access to work."
      },
      {
        id: "router-3-c",
        text: "<BrowserRouter> creates cleaner URLs without the # symbol",
        isCorrect: true,
        explanation: "BrowserRouter creates URLs like example.com/about, while HashRouter creates URLs like example.com/#/about, making BrowserRouter's URLs cleaner and more conventional."
      },
      {
        id: "router-3-d",
        text: "<HashRouter> provides more features than <BrowserRouter>",
        isCorrect: false,
        explanation: "HashRouter doesn't provide more features than BrowserRouter. In fact, it has some limitations, such as not supporting location.key and location.state, which BrowserRouter does support."
      }
    ],
    explanation: {
      correct: "Correct! BrowserRouter uses the HTML5 history API for clean URLs, while HashRouter uses the hash portion of the URL and works without server configuration, though it creates URLs with the # symbol.",
      incorrect: "BrowserRouter uses the HTML5 history API for clean URLs but requires server configuration, while HashRouter uses the hash portion and works without server configuration but has # in URLs. HashRouter doesn't provide more features—it actually has some limitations compared to BrowserRouter.",
      detailed: "Choose between these routers based on your deployment environment: 1) BrowserRouter is preferred for modern applications with proper server configuration. It creates clean URLs (example.com/about) and supports all React Router features. However, it requires server configuration to handle direct URL access by serving the main HTML file for all routes. 2) HashRouter is useful for environments where you don't control the server configuration, like certain static file servers or older shared hosting. It works without special server configuration because the hash portion of the URL isn't sent to the server. However, it creates less conventional URLs (example.com/#/about) and doesn't support location.key or location.state. Most modern applications use BrowserRouter when possible for a better user experience."
    }
  },
  {
    id: "router-4",
    level: 1,
    topic: "router",
    question: "What is the purpose of the <Route> component in React Router?",
    multipleCorrect: false,
    options: [
      {
        id: "router-4-a",
        text: "To render a component when the current URL matches the route's path",
        isCorrect: true,
        explanation: "The Route component renders its element prop when the current URL matches its path prop, allowing for conditional rendering based on the URL."
      },
      {
        id: "router-4-b",
        text: "To navigate programmatically to a different URL",
        isCorrect: false,
        explanation: "Route doesn't navigate to URLs; it renders components when URLs match. For programmatic navigation, you would use the useNavigate hook or the Navigate component."
      },
      {
        id: "router-4-c",
        text: "To create a clickable link to another route",
        isCorrect: false,
        explanation: "Route doesn't create clickable links; it renders components when URLs match. For clickable links, you would use the Link or NavLink component."
      },
      {
        id: "router-4-d",
        text: "To define the root URL of the application",
        isCorrect: false,
        explanation: "Route doesn't define the root URL of the application; it matches URLs to components. The root URL is typically defined by the web server or hosting environment."
      }
    ],
    explanation: {
      correct: "Correct! The <Route> component renders its element prop when the current URL matches its path prop, enabling conditional rendering of components based on the URL.",
      incorrect: "The Route component renders components when URLs match its path. It doesn't navigate programmatically, create clickable links, or define the root URL of the application.",
      detailed: "In React Router v6, Route components are typically used inside a Routes component, which renders the first Route whose path matches the current URL. The basic syntax is: <Route path=\"/path\" element={<Component />} />. Routes can include dynamic parameters with the : syntax: <Route path=\"/users/:userId\" element={<UserProfile />} />. These parameters can then be accessed in the component using the useParams hook. Routes can also be nested to create more complex routing structures. In React Router v6, the element prop replaced the older component and render props from v5. The Routes component replaced the Switch component from v5, with improved matching capabilities that make route order less important in many cases."
    }
  },
  {
    id: "router-5",
    level: 1,
    topic: "router",
    question: "What is the purpose of the <Link> component in React Router?",
    multipleCorrect: false,
    options: [
      {
        id: "router-5-a",
        text: "To create a navigational link that doesn't reload the page",
        isCorrect: true,
        explanation: "The Link component creates an anchor tag (<a>) that navigates to a new URL without causing a full page reload, maintaining the single-page application experience."
      },
      {
        id: "router-5-b",
        text: "To conditionally render content based on the current URL",
        isCorrect: false,
        explanation: "Link doesn't conditionally render content based on the URL; it creates navigation links. For conditional rendering based on the URL, you would use the Route component."
      },
      {
        id: "router-5-c",
        text: "To redirect users to a different route programmatically",
        isCorrect: false,
        explanation: "Link is for clickable navigation, not programmatic redirection. For programmatic redirection, you would use the useNavigate hook or the Navigate component."
      },
      {
        id: "router-5-d",
        text: "To define URL parameters for a route",
        isCorrect: false,
        explanation: "Link doesn't define URL parameters; it creates navigation links. URL parameters are defined in the path prop of Route components and accessed using the useParams hook."
      }
    ],
    explanation: {
      correct: "Correct! The <Link> component creates a navigational link that changes the URL without reloading the page, maintaining the single-page application experience.",
      incorrect: "The Link component creates navigation links without page reloads. It doesn't conditionally render content, redirect programmatically, or define URL parameters.",
      detailed: "Link renders an anchor tag (<a>) but intercepts the click event to prevent the default browser navigation. Instead, it updates the URL using the history API and lets React Router handle the routing. Basic usage looks like: <Link to=\"/about\">About</Link>. Link accepts several props: 1) to: The target URL (required); 2) replace: If true, replaces the current entry in the history stack instead of adding a new one; 3) state: State to persist to the location; 4) reloadDocument: If true, acts like a traditional anchor tag with page reload. Link is one of the most commonly used React Router components and is essential for creating a navigable single-page application. For links that should be styled differently when they match the current URL, use NavLink instead, which provides active state functionality."
    }
  },
  {
    id: "router-6",
    level: 1,
    topic: "router",
    question: "What is the purpose of the <NavLink> component in React Router?",
    multipleCorrect: false,
    options: [
      {
        id: "router-6-a",
        text: "To create a link that applies special styling when it matches the current URL",
        isCorrect: true,
        explanation: "NavLink extends Link and adds styling capabilities for when the link's 'to' prop matches the current URL, making it useful for navigation menus where the active link should be highlighted."
      },
      {
        id: "router-6-b",
        text: "To create a navigation bar component automatically",
        isCorrect: false,
        explanation: "NavLink doesn't automatically create a navigation bar. It's just a single link component that can be styled when active. You would still need to create the structure of a navigation bar yourself."
      },
      {
        id: "router-6-c",
        text: "To navigate between different browser tabs",
        isCorrect: false,
        explanation: "NavLink doesn't navigate between browser tabs. Like Link, it navigates within the same tab, changing the URL without a page reload."
      },
      {
        id: "router-6-d",
        text: "To create links that only work in mobile navigation",
        isCorrect: false,
        explanation: "NavLink isn't specific to mobile navigation. It works on all devices and is used to create links that can be styled differently when active."
      }
    ],
    explanation: {
      correct: "Correct! <NavLink> creates a link that applies special styling when it matches the current URL, making it perfect for navigation menus where the active link should be highlighted.",
      incorrect: "NavLink creates links with active styling when they match the current URL. It doesn't automatically create navigation bars, navigate between browser tabs, or create mobile-specific links.",
      detailed: "NavLink is a specialized version of Link that knows whether it's 'active' or not. In React Router v6, it accepts a function as the className or style prop that receives an object with an isActive property: <NavLink className={({ isActive }) => isActive ? 'active' : ''} to=\"/about\">About</NavLink>. It also accepts an end prop to ensure it's only active when the path exactly matches the current URL, not when the current URL just starts with the link's path. This is useful for the root path ('/') which would otherwise be considered active for all routes. NavLink is commonly used in navigation menus, sidebars, and tabs where it's important to highlight the current section or page."
    }
  },
  {
    id: "router-7",
    level: 1,
    topic: "router",
    question: "How do you access URL parameters in React Router?",
    multipleCorrect: false,
    options: [
      {
        id: "router-7-a",
        text: "Using the useParams hook",
        isCorrect: true,
        explanation: "The useParams hook returns an object containing the URL parameters defined in the route path. For example, for a route path '/users/:userId', useParams would return an object like { userId: '123' } when the URL is '/users/123'."
      },
      {
        id: "router-7-b",
        text: "Using the this.props.match.params object in class components",
        isCorrect: false,
        explanation: "In React Router v6, this.props.match.params is no longer available. Class components need to use a wrapper component that uses useParams and passes the parameters as props."
      },
      {
        id: "router-7-c",
        text: "Using the useLocation hook to parse the URL manually",
        isCorrect: false,
        explanation: "While useLocation gives you access to the current URL, it doesn't parse URL parameters for you. useParams is specifically designed for accessing URL parameters defined in route paths."
      },
      {
        id: "router-7-d",
        text: "Using the getParams() method on the router object",
        isCorrect: false,
        explanation: "There is no getParams() method or router object with such a method in React Router. URL parameters are accessed using the useParams hook."
      }
    ],
    explanation: {
      correct: "Correct! In React Router v6, you access URL parameters using the useParams hook, which returns an object containing all parameters defined in the route path.",
      incorrect: "In React Router v6, URL parameters are accessed using the useParams hook. this.props.match.params is no longer available, useLocation doesn't parse parameters automatically, and there's no getParams() method.",
      detailed: "To use URL parameters: 1) Define them in your route path with a colon: <Route path=\"/users/:userId\" element={<UserProfile />} />; 2) Access them in your component: function UserProfile() { const { userId } = useParams(); return <div>User ID: {userId}</div>; }. URL parameters are always strings, so you may need to convert them to numbers or other types as needed. For optional parameters, you can use the syntax: <Route path=\"/users/:userId?\" element={<UserProfile />} />. For catch-all or wildcard parameters, use an asterisk: <Route path=\"/files/*\" element={<FileViewer />} />. If you need to use URL parameters in a class component with React Router v6, you'll need to create a wrapper component that uses useParams and passes the parameters as props."
    }
  },
  {
    id: "router-8",
    level: 1,
    topic: "router",
    question: "How do you handle programmatic navigation in React Router v6?",
    multipleCorrect: false,
    options: [
      {
        id: "router-8-a",
        text: "Using the useNavigate hook",
        isCorrect: true,
        explanation: "The useNavigate hook returns a navigate function that can be used to programmatically navigate to different routes, replace the current entry in the history stack, or even go back/forward."
      },
      {
        id: "router-8-b",
        text: "Using the this.props.history object in class components",
        isCorrect: false,
        explanation: "In React Router v6, this.props.history is no longer available. Class components need to use a wrapper component that uses useNavigate and passes the navigate function as a prop."
      },
      {
        id: "router-8-c",
        text: "Using the <Redirect> component",
        isCorrect: false,
        explanation: "The Redirect component from v5 has been replaced with the Navigate component in v6. However, for programmatic navigation in response to events, useNavigate is the recommended approach."
      },
      {
        id: "router-8-d",
        text: "Using the router.push() method",
        isCorrect: false,
        explanation: "There is no router.push() method in React Router. This syntax is similar to Next.js's router, but React Router uses useNavigate for programmatic navigation."
      }
    ],
    explanation: {
      correct: "Correct! In React Router v6, programmatic navigation is handled using the useNavigate hook, which returns a function that can be called to navigate to different routes.",
      incorrect: "In React Router v6, programmatic navigation uses the useNavigate hook. this.props.history is no longer available, the Redirect component has been replaced with Navigate, and there's no router.push() method.",
      detailed: "The useNavigate hook is used like this: function SignupForm() { const navigate = useNavigate(); const handleSubmit = async (event) => { event.preventDefault(); await submitForm(formData); navigate('/thank-you'); }; return <form onSubmit={handleSubmit}>...</form>; }. The navigate function can take several forms: 1) navigate('/path') - Navigate to a new URL; 2) navigate('/path', { replace: true }) - Replace the current history entry instead of adding a new one; 3) navigate('/path', { state: { from: 'signup' } }) - Include state data accessible via useLocation; 4) navigate(-1) - Go back one page; 5) navigate(2) - Go forward two pages. For declarative navigation in response to renders rather than events, use the Navigate component: <Navigate to=\"/login\" replace state={{ from: location }} />."
    }
  },
  {
    id: "router-9",
    level: 1,
    topic: "router",
    question: "What is the purpose of the <Outlet> component in React Router v6?",
    multipleCorrect: false,
    options: [
      {
        id: "router-9-a",
        text: "To render child routes within a parent route component",
        isCorrect: true,
        explanation: "Outlet renders the child route's element when a nested route matches. It allows parent routes to control where their children render, enabling layouts with common elements across multiple child routes."
      },
      {
        id: "router-9-b",
        text: "To create a portal for rendering content outside the normal DOM hierarchy",
        isCorrect: false,
        explanation: "Outlet doesn't create portals for rendering outside the DOM hierarchy. For that functionality, you would use React's createPortal API, which is unrelated to routing."
      },
      {
        id: "router-9-c",
        text: "To define exit points for a route when navigating away",
        isCorrect: false,
        explanation: "Outlet doesn't define exit points or handle navigation away from routes. It's specifically for rendering nested routes within parent routes."
      },
      {
        id: "router-9-d",
        text: "To provide a way to render multiple routes simultaneously",
        isCorrect: false,
        explanation: "While Outlet does enable rendering child routes within parent routes, it doesn't render multiple routes simultaneously at the same level. It renders the matching child route within the parent route."
      }
    ],
    explanation: {
      correct: "Correct! The <Outlet> component renders child routes within a parent route component, enabling nested UI structures where parent routes can provide layouts for their children.",
      incorrect: "Outlet renders child routes within parent routes. It doesn't create portals outside the DOM hierarchy, define exit points for navigation, or render multiple routes simultaneously at the same level.",
      detailed: "Outlet is central to nested routing in React Router v6. A typical setup looks like: function Layout() { return ( <div> <nav><Link to=\"/\">Home</Link> <Link to=\"/about\">About</Link></nav> <main> <Outlet /> </main> <footer>© 2023</footer> </div> ); } function App() { return ( <Routes> <Route path=\"/\" element={<Layout />}> <Route index element={<Home />} /> <Route path=\"about\" element={<About />} /> </Route> </Routes> ); }. In this example, the Layout component renders common navigation and footer elements, while the Outlet renders either Home or About based on the URL. This pattern enables consistent layouts across routes and reduces duplication. The Outlet component can also receive context using the useOutletContext hook, allowing parent routes to pass data to their children."
    }
  },
  {
    id: "router-10",
    level: 1,
    topic: "router",
    question: "How do you access query parameters in React Router v6?",
    multipleCorrect: false,
    options: [
      {
        id: "router-10-a",
        text: "Using the useSearchParams hook",
        isCorrect: true,
        explanation: "The useSearchParams hook returns an array with the current search parameters and a function to update them, similar to React's useState. It provides methods like get() and getAll() to access parameter values."
      },
      {
        id: "router-10-b",
        text: "Using the useLocation hook and URLSearchParams",
        isCorrect: false,
        explanation: "While this approach works (useLocation gives access to the search string, which can be parsed with URLSearchParams), it's not the most direct method in v6. useSearchParams is specifically designed for this purpose and provides a more convenient API."
      },
      {
        id: "router-10-c",
        text: "Using the this.props.location.query object",
        isCorrect: false,
        explanation: "this.props.location.query doesn't exist in React Router v6 or previous versions. In v6, functional components use hooks like useSearchParams, and class components need wrapper components."
      },
      {
        id: "router-10-d",
        text: "Using the useParams hook",
        isCorrect: false,
        explanation: "useParams is for route parameters defined with : in the route path (like /users/:userId), not for query parameters (like /users?userId=123). For query parameters, use useSearchParams."
      }
    ],
    explanation: {
      correct: "Correct! In React Router v6, you access query parameters using the useSearchParams hook, which provides a convenient interface similar to React's useState.",
      incorrect: "In React Router v6, query parameters are accessed using the useSearchParams hook. While useLocation with URLSearchParams works, it's less direct. this.props.location.query doesn't exist, and useParams is for route parameters, not query parameters.",
      detailed: "The useSearchParams hook is used like this: function ProductList() { const [searchParams, setSearchParams] = useSearchParams(); const category = searchParams.get('category'); const sortBy = searchParams.get('sort') || 'name'; return ( <div> <select value={category || ''} onChange={(e) => { const value = e.target.value; if (value) { searchParams.set('category', value); } else { searchParams.delete('category'); } setSearchParams(searchParams); }}> <option value=\"\">All Categories</option> <option value=\"electronics\">Electronics</option> </select> <ProductGrid category={category} sortBy={sortBy} /> </div> ); }. This hook provides a convenient way to read and update query parameters while maintaining the current URL path. The returned searchParams object is an instance of URLSearchParams, giving you access to methods like get(), getAll(), has(), set(), append(), delete(), etc."
    }
  },
  {
    id: "router-11",
    level: 1,
    topic: "router",
    question: "What is the purpose of the <Routes> component in React Router v6?",
    multipleCorrect: false,
    options: [
      {
        id: "router-11-a",
        text: "To define a group of routes and render the first one that matches the current URL",
        isCorrect: true,
        explanation: "Routes renders the first Route or other routing element whose path matches the current URL. It replaces the Switch component from v5 with improved matching capabilities."
      },
      {
        id: "router-11-b",
        text: "To create multiple separate router instances in one application",
        isCorrect: false,
        explanation: "Routes doesn't create separate router instances. For multiple router instances, you would use multiple router components like BrowserRouter, but this is rarely needed and can cause issues."
      },
      {
        id: "router-11-c",
        text: "To enable routing features in a React application",
        isCorrect: false,
        explanation: "Routes doesn't enable routing features by itself. The router components like BrowserRouter or HashRouter are what provide the routing context to the application."
      },
      {
        id: "router-11-d",
        text: "To define the available routes for a navigation menu",
        isCorrect: false,
        explanation: "Routes doesn't define routes for navigation menus. It defines routes for rendering components based on the URL. Navigation menus would typically use Link or NavLink components."
      }
    ],
    explanation: {
      correct: "Correct! The <Routes> component defines a group of routes and renders the first one that matches the current URL, replacing the Switch component from React Router v5.",
      incorrect: "Routes defines a group of routes and renders the first match. It doesn't create multiple router instances, enable routing features by itself, or define routes for navigation menus.",
      detailed: "Routes is a key component in React Router v6 that serves as a container for Route elements. It uses relative routing and matching to select which Route to render. Unlike Switch from v5, Routes has improved matching capabilities: 1) It automatically handles trailing slashes; 2) It uses relative paths by default; 3) It supports nested routes more intuitively; 4) It matches more specifically (e.g., '/users/123' is more specific than '/users/*'). A basic setup looks like: <Routes><Route path=\"/\" element={<Home />} /><Route path=\"/about\" element={<About />} /></Routes>. Routes should be used anywhere you want to render content based on the current URL. Multiple Routes components can exist in a single application, each rendering based on its own set of Route components."
    }
  },
  {
    id: "router-12",
    level: 1,
    topic: "router",
    question: "What is the purpose of the 'index' prop on a <Route> component in React Router v6?",
    multipleCorrect: false,
    options: [
      {
        id: "router-12-a",
        text: "To specify that the route should match the parent's path exactly",
        isCorrect: true,
        explanation: "The index prop indicates that the route should match when the parent's path matches exactly, without any additional segments. It's used for rendering a default child route."
      },
      {
        id: "router-12-b",
        text: "To define the order in which routes are matched",
        isCorrect: false,
        explanation: "The index prop doesn't define matching order. Routes in v6 are matched based on specificity, not the order they appear in the code."
      },
      {
        id: "router-12-c",
        text: "To create an indexed database of routes for faster matching",
        isCorrect: false,
        explanation: "The index prop doesn't create any kind of database or optimization structure. It's simply a flag that affects how the route is matched."
      },
      {
        id: "router-12-d",
        text: "To indicate that the route should be the first one in navigation menus",
        isCorrect: false,
        explanation: "The index prop has nothing to do with navigation menus or their order. It's solely for route matching behavior."
      }
    ],
    explanation: {
      correct: "Correct! The 'index' prop specifies that the route should match the parent's path exactly, without additional segments. It's used for rendering a default child route at the parent's path.",
      incorrect: "The 'index' prop specifies that a route matches the parent's path exactly. It doesn't define matching order, create a route database, or affect navigation menu ordering.",
      detailed: "Index routes are useful for parent routes that need to render a default child when no child route matches or when the URL matches the parent's path exactly. For example: <Routes> <Route path=\"/dashboard\" element={<DashboardLayout />}> <Route index element={<DashboardHome />} /> <Route path=\"profile\" element={<Profile />} /> <Route path=\"settings\" element={<Settings />} /> </Route> </Routes>. In this example, when the URL is exactly '/dashboard', the DashboardHome component renders inside the DashboardLayout (via the Outlet component). Without an index route, nothing would render in the Outlet when the URL is exactly '/dashboard'. Index routes don't have a path prop because they inherit the parent's path. They're essentially saying 'render this when the URL matches the parent route exactly'."
    }
  },
  {
    id: "router-13",
    level: 1,
    topic: "router",
    question: "What is the purpose of the useLocation hook in React Router?",
    multipleCorrect: false,
    options: [
      {
        id: "router-13-a",
        text: "To access the current URL location object",
        isCorrect: true,
        explanation: "useLocation returns the current location object, which contains information about the current URL including pathname, search, hash, and state properties."
      },
      {
        id: "router-13-b",
        text: "To determine the user's physical location for geo-targeted content",
        isCorrect: false,
        explanation: "useLocation has nothing to do with physical or geographical location. It's for accessing information about the current URL in the browser."
      },
      {
        id: "router-13-c",
        text: "To track the user's previous locations for breadcrumb navigation",
        isCorrect: false,
        explanation: "useLocation only provides the current location, not previous locations. For navigation history, you would use the useNavigate hook with a custom solution."
      },
      {
        id: "router-13-d",
        text: "To set the browser's location bar without navigation",
        isCorrect: false,
        explanation: "useLocation is for reading the current location, not setting it. To update the location, you would use useNavigate or the Navigate component."
      }
    ],
    explanation: {
      correct: "Correct! The useLocation hook returns the current location object, which contains information about the current URL including pathname, search, hash, and state properties.",
      incorrect: "useLocation provides access to the current URL location object. It doesn't determine physical location, track previous locations, or set the browser's location bar.",
      detailed: "The location object returned by useLocation has these properties: 1) pathname: The path of the URL; 2) search: The query string portion; 3) hash: The hash fragment; 4) state: State passed with navigation; 5) key: A unique identifier. useLocation is useful for: 1) Accessing query parameters: const location = useLocation(); const queryParams = new URLSearchParams(location.search); 2) Reading state passed during navigation: const location = useLocation(); const { from } = location.state || {}; 3) Tracking page views for analytics: useEffect(() => { trackPageView(location.pathname); }, [location]); 4) Conditional rendering based on the current URL: if (location.pathname.startsWith('/admin')) { return <AdminPanel />; }. The location object is immutable, so a new one is created each time the URL changes, making it useful as a dependency in hooks like useEffect."
    }
  },
  {
    id: "router-14",
    level: 1,
    topic: "router",
    question: "How do you create nested routes in React Router v6?",
    multipleCorrect: false,
    options: [
      {
        id: "router-14-a",
        text: "By nesting Route components within parent Route components and using Outlet",
        isCorrect: true,
        explanation: "In React Router v6, routes are nested by placing Route components inside parent Route components. The parent component uses the Outlet component to render the matching child route."
      },
      {
        id: "router-14-b",
        text: "By using the 'children' prop on Route components",
        isCorrect: false,
        explanation: "In React Router v6, the 'children' prop for defining nested routes has been removed. Routes are nested by actually nesting the Route components in JSX, not by using a children prop."
      },
      {
        id: "router-14-c",
        text: "By using the createNestedRouter function",
        isCorrect: false,
        explanation: "There is no createNestedRouter function in React Router. Nested routes are created by nesting Route components within parent Route components."
      },
      {
        id: "router-14-d",
        text: "By defining all routes at the root level with nested paths",
        isCorrect: false,
        explanation: "While you could define all routes at the root level with paths like '/users/:userId/posts/:postId', React Router v6 encourages actual nesting of Route components for better organization and to enable the use of Outlet."
      }
    ],
    explanation: {
      correct: "Correct! In React Router v6, you create nested routes by nesting Route components within parent Route components and using the Outlet component to render the matching child route.",
      incorrect: "Nested routes in React Router v6 are created by nesting Route components and using Outlet. The 'children' prop approach from v5 has been removed, there's no createNestedRouter function, and defining all routes at the root level is discouraged.",
      detailed: "Nested routes in v6 look like this: <Routes> <Route path=\"dashboard\" element={<Dashboard />}> <Route index element={<DashboardHome />} /> <Route path=\"team\" element={<Team />} /> </Route> </Routes>. Then in the Dashboard component: function Dashboard() { return ( <div> <h1>Dashboard</h1> <nav>...</nav> <Outlet /> </div> ); }. This approach has several benefits: 1) It keeps related routes together in the code; 2) It enables shared UI for related routes; 3) It automatically handles relative paths (e.g., 'team' is automatically resolved to 'dashboard/team'); 4) It allows parent routes to control where children render via the Outlet component. Nested routes can be as deep as needed, with each level using Outlet to render its children."
    }
  },
  {
    id: "router-15",
    level: 1,
    topic: "router",
    question: "What is the purpose of the <Navigate> component in React Router v6?",
    multipleCorrect: false,
    options: [
      {
        id: "router-15-a",
        text: "To declaratively navigate to a new location when rendered",
        isCorrect: true,
        explanation: "Navigate changes the current location when it's rendered, similar to a redirect. It's useful for declarative redirects based on conditions in your component."
      },
      {
        id: "router-15-b",
        text: "To create a navigation menu component",
        isCorrect: false,
        explanation: "Navigate doesn't create navigation menus. For navigation menus, you would typically use a combination of NavLink components within a nav element."
      },
      {
        id: "router-15-c",
        text: "To enable navigation features in a React application",
        isCorrect: false,
        explanation: "Navigate doesn't enable navigation features. The router components like BrowserRouter or HashRouter are what provide the routing context to the application."
      },
      {
        id: "router-15-d",
        text: "To track navigation history",
        isCorrect: false,
        explanation: "Navigate doesn't track navigation history. It simply changes the current location when rendered. History tracking is handled internally by the router."
      }
    ],
    explanation: {
      correct: "Correct! The <Navigate> component declaratively navigates to a new location when rendered, similar to a redirect. It's useful for conditional redirects in your component's render logic.",
      incorrect: "Navigate declaratively changes location when rendered. It doesn't create navigation menus, enable navigation features in the application, or track navigation history.",
      detailed: "Navigate replaces the Redirect component from v5 and is used for declarative navigation during render rather than in response to events. Common use cases include: 1) Authentication redirects: function ProtectedRoute() { const isAuthenticated = useAuth(); if (!isAuthenticated) { return <Navigate to=\"/login\" replace state={{ from: location }} />; } return <Outlet />; }; 2) Default route redirects: function App() { return ( <Routes> <Route path=\"/\" element={<Navigate to=\"/dashboard\" />} /> <Route path=\"/dashboard\" element={<Dashboard />} /> </Routes> ); }. The Navigate component accepts several props: 1) to: The target URL (required); 2) replace: If true, replaces the current entry in the history stack; 3) state: State to persist to the location. For programmatic navigation in response to events rather than during render, use the useNavigate hook instead."
    }
  },
  {
    id: "router-16",
    level: 1,
    topic: "router",
    question: "How do you implement route protection (protected routes) in React Router v6?",
    multipleCorrect: false,
    options: [
      {
        id: "router-16-a",
        text: "By creating a custom component that checks authentication and renders either the protected component or a redirect",
        isCorrect: true,
        explanation: "The recommended approach in v6 is to create a custom component (often called ProtectedRoute) that checks authentication status and either renders its children (or an Outlet) or navigates to a login page."
      },
      {
        id: "router-16-b",
        text: "By using the 'protected' prop on Route components",
        isCorrect: false,
        explanation: "There is no 'protected' prop on Route components in React Router. Protection needs to be implemented with custom components and logic."
      },
      {
        id: "router-16-c",
        text: "By using the useProtectedRoute hook",
        isCorrect: false,
        explanation: "There is no useProtectedRoute hook in React Router. Route protection needs to be implemented with custom components and existing hooks like useNavigate."
      },
      {
        id: "router-16-d",
        text: "By configuring protection settings in the router configuration",
        isCorrect: false,
        explanation: "React Router doesn't have a centralized configuration for protection settings. Route protection needs to be implemented with custom components and logic."
      }
    ],
    explanation: {
      correct: "Correct! In React Router v6, you implement protected routes by creating a custom component that checks authentication and either renders the protected content or redirects to a login page.",
      incorrect: "Protected routes are implemented with custom components that check authentication. There's no 'protected' prop, no useProtectedRoute hook, and no centralized protection configuration in React Router.",
      detailed: "A common implementation of protected routes in v6 looks like this: function RequireAuth({ children }) { const auth = useAuth(); const location = useLocation(); if (!auth.user) { return <Navigate to=\"/login\" state={{ from: location }} replace />; } return children; }. Then in your routes: <Routes> <Route path=\"/\" element={<PublicPage />} /> <Route path=\"/login\" element={<LoginPage />} /> <Route path=\"/dashboard\" element={ <RequireAuth> <DashboardPage /> </RequireAuth> } /> </Routes>. For nested protected routes, you can use a layout approach: <Route element={<RequireAuth />}> <Route path=\"/dashboard\" element={<Dashboard />} /> <Route path=\"/admin\" element={<Admin />} /> </Route>. In this case, RequireAuth would render an Outlet instead of children. This approach is flexible and allows for different authentication logic for different sections of your application."
    }
  },
  {
    id: "router-17",
    level: 1,
    topic: "router",
    question: "What is the difference between useNavigate and useHistory in React Router?",
    multipleCorrect: false,
    options: [
      {
        id: "router-17-a",
        text: "useNavigate is the v6 replacement for useHistory from v5",
        isCorrect: true,
        explanation: "useNavigate is the new hook in React Router v6 that replaces useHistory from v5. It provides similar functionality but with a slightly different API."
      },
      {
        id: "router-17-b",
        text: "useNavigate provides more features than useHistory",
        isCorrect: false,
        explanation: "useNavigate doesn't necessarily provide more features than useHistory. It's a replacement with a different API, but the core functionality of programmatic navigation remains similar."
      },
      {
        id: "router-17-c",
        text: "useHistory is for tracking navigation history, while useNavigate is for changing location",
        isCorrect: false,
        explanation: "Both hooks are primarily for changing location programmatically. Neither is specifically for tracking history, though both provide access to navigation functions."
      },
      {
        id: "router-17-d",
        text: "They can be used interchangeably in React Router v6",
        isCorrect: false,
        explanation: "They cannot be used interchangeably in v6. useHistory is not available in React Router v6, only useNavigate is."
      }
    ],
    explanation: {
      correct: "Correct! useNavigate is the React Router v6 replacement for useHistory from v5. It provides similar functionality for programmatic navigation but with a different API.",
      incorrect: "useNavigate replaces useHistory in v6. It doesn't necessarily have more features, both are for changing location (not specifically tracking history), and they cannot be used interchangeably in v6.",
      detailed: "The key differences between useNavigate and useHistory are: 1) API style: useHistory returned an object with methods like push, replace, go, while useNavigate returns a function that's called directly; 2) Usage: navigate('/path') vs history.push('/path'); 3) Relative paths: useNavigate supports relative paths by default, while useHistory always used absolute paths; 4) Navigation with state: navigate('/path', { state, replace }) vs history.push('/path', state) or history.replace('/path', state); 5) Going back/forward: navigate(-1) or navigate(1) vs history.go(-1) or history.go(1). When migrating from v5 to v6, all useHistory calls need to be replaced with useNavigate, and the API differences need to be accounted for."
    }
  },
  {
    id: "router-18",
    level: 1,
    topic: "router",
    question: "What is the purpose of the useRoutes hook in React Router v6?",
    multipleCorrect: false,
    options: [
      {
        id: "router-18-a",
        text: "To create routes programmatically using JavaScript objects instead of JSX",
        isCorrect: true,
        explanation: "useRoutes allows you to define your routes as JavaScript objects instead of JSX Route elements. It returns the rendered route element tree based on the current location."
      },
      {
        id: "router-18-b",
        text: "To access all defined routes in the application",
        isCorrect: false,
        explanation: "useRoutes doesn't provide access to all defined routes. It's for defining and rendering routes programmatically, not for inspecting existing routes."
      },
      {
        id: "router-18-c",
        text: "To enable routing features in components outside the router context",
        isCorrect: false,
        explanation: "useRoutes doesn't enable routing outside router context. Like all React Router hooks, it must be used within a router context (inside a BrowserRouter, etc.)."
      },
      {
        id: "router-18-d",
        text: "To optimize route rendering performance",
        isCorrect: false,
        explanation: "While useRoutes might have some performance characteristics, its primary purpose is to provide an alternative, object-based API for defining routes, not specifically to optimize performance."
      }
    ],
    explanation: {
      correct: "Correct! The useRoutes hook allows you to create routes programmatically using JavaScript objects instead of JSX Route elements, providing an alternative API for route definition.",
      incorrect: "useRoutes creates routes programmatically with JavaScript objects instead of JSX. It doesn't provide access to all defined routes, enable routing outside router context, or specifically optimize performance.",
      detailed: "useRoutes is useful when you want to define routes in a more programmatic way or when you need to generate routes dynamically. It accepts an array of route objects with a structure similar to the JSX Route components: const element = useRoutes([ { path: '/', element: <Home /> }, { path: 'dashboard', element: <Dashboard />, children: [ { index: true, element: <DashboardHome /> }, { path: 'profile', element: <Profile /> } ] }, { path: '*', element: <NotFound /> } ]); return element;. This approach can be particularly useful for: 1) Generating routes dynamically based on data; 2) Sharing route configurations between different parts of the application; 3) Creating higher-level routing abstractions; 4) Testing route configurations more easily. The route objects support all the same properties as the Route component, including path, element, children, index, etc."
    }
  },

  // STATE (24 questions)
  {
    id: "state-1",
    level: 1,
    topic: "state",
    question: "What is state in React?",
    multipleCorrect: false,
    options: [
      {
        id: "state-1-a",
        text: "Data that changes over time and affects a component's rendering",
        isCorrect: true,
        explanation: "State is component-specific data that changes over time and affects how the component renders. When state changes, React re-renders the component to reflect the new state."
      },
      {
        id: "state-1-b",
        text: "Static configuration values for a component",
        isCorrect: false,
        explanation: "Static configuration values that don't change would typically be defined as regular variables or constants, not as state. State is specifically for data that changes over time."
      },
      {
        id: "state-1-c",
        text: "The overall condition of the entire application",
        isCorrect: false,
        explanation: "While 'state' can sometimes refer to the overall application condition, in React, component state specifically refers to data managed within a component, not the entire application (though global state management is a related concept)."
      },
      {
        id: "state-1-d",
        text: "Props passed from parent components",
        isCorrect: false,
        explanation: "State is different from props. Props are passed from parent components and are read-only within the component, while state is managed within the component itself and can be changed."
      }
    ],
    explanation: {
      correct: "Correct! State in React is data that changes over time and affects a component's rendering. When state changes, React re-renders the component to reflect those changes.",
      incorrect: "State in React is data that changes over time and affects rendering. It's not static configuration values, not necessarily the entire application's condition, and not the same as props from parent components.",
      detailed: "State has several key characteristics: 1) It's component-specific and encapsulated within the component; 2) It can be modified by the component itself (unlike props); 3) Changes to state trigger re-renders; 4) It persists between renders; 5) It can be passed to child components as props. State can be managed in different ways: 1) Class components use this.state and this.setState(); 2) Functional components use the useState hook and other state hooks; 3) Application-wide state can be managed with Context API or state management libraries like Redux. Good state management is crucial for React applications, involving decisions about what data should be in state, where state should live, and how state updates should flow through the application."
    }
  },
  {
    id: "state-2",
    level: 1,
    topic: "state",
    question: "How do you declare state in a functional component?",
    multipleCorrect: false,
    options: [
      {
        id: "state-2-a",
        text: "Using the useState hook",
        isCorrect: true,
        explanation: "The useState hook is the primary way to add state to functional components. It returns the current state value and a function to update it."
      },
      {
        id: "state-2-b",
        text: "Using this.state and this.setState()",
        isCorrect: false,
        explanation: "this.state and this.setState() are used in class components, not functional components. Functional components use hooks like useState instead."
      },
      {
        id: "state-2-c",
        text: "Using the createState function",
        isCorrect: false,
        explanation: "There is no createState function in React. Functional components use the useState hook to create and manage state."
      },
      {
        id: "state-2-d",
        text: "By defining a state object as a global variable",
        isCorrect: false,
        explanation: "Defining state as a global variable would not work correctly with React's rendering model and would cause issues with component instances. State should be managed within the component using hooks."
      }
    ],
    explanation: {
      correct: "Correct! In functional components, state is declared using the useState hook, which returns the current state value and a function to update it.",
      incorrect: "State in functional components is declared using the useState hook. this.state/setState are for class components, there's no createState function, and using global variables for state would break React's component model.",
      detailed: "The useState hook is used like this: const [state, setState] = useState(initialValue);. It returns an array with two elements: the current state value and a function to update it. The array destructuring syntax makes it easy to assign these to named variables. You can call useState multiple times for multiple state variables: const [count, setCount] = useState(0); const [name, setName] = useState(''); const [isActive, setIsActive] = useState(false);. Each state variable is completely independent. This approach allows for more granular state management compared to the object-based state in class components. The initial value is only used during the first render; on subsequent renders, the current state value is used."
    }
  },
  {
    id: "state-3",
    level: 1,
    topic: "state",
    question: "How do you update state in a functional component?",
    multipleCorrect: false,
    options: [
      {
        id: "state-3-a",
        text: "By calling the state setter function returned by useState",
        isCorrect: true,
        explanation: "The useState hook returns a setter function as its second element, which you call with the new state value to update the state."
      },
      {
        id: "state-3-b",
        text: "By directly modifying the state variable",
        isCorrect: false,
        explanation: "Directly modifying the state variable (like count = count + 1) won't work in React. You must use the setter function to update state so that React knows to re-render the component."
      },
      {
        id: "state-3-c",
        text: "By calling this.setState()",
        isCorrect: false,
        explanation: "this.setState() is used in class components, not functional components. Functional components use the setter function returned by useState."
      },
      {
        id: "state-3-d",
        text: "By returning the new state from the component function",
        isCorrect: false,
        explanation: "Returning a value from the component function defines what should be rendered, not how state should be updated. State updates are done with the setter function from useState."
      }
    ],
    explanation: {
      correct: "Correct! State in functional components is updated by calling the state setter function returned by useState. This function tells React about the state change and triggers a re-render.",
      incorrect: "State in functional components is updated using the setter function from useState. You cannot directly modify the state variable, use this.setState() (that's for class components), or return new state from the component function.",
      detailed: "The state setter function can be used in two ways: 1) With a new value: setCount(5); 2) With a function that receives the previous state and returns the new state: setCount(prevCount => prevCount + 1);. The function form is recommended when the new state depends on the previous state, as React may batch multiple state updates for performance. The setter doesn't automatically merge objects like this.setState() in class components. To update an object state, you need to spread the previous state: setUser(prevUser => ({ ...prevUser, name: 'John' }));. State updates are asynchronous - the state variable won't reflect the new value immediately after calling the setter. If you need to perform an action after the state has been updated, use the useEffect hook with the state variable as a dependency."
    }
  },
  {
    id: "state-4",
    level: 1,
    topic: "state",
    question: "How do you declare state in a class component?",
    multipleCorrect: true,
    options: [
      {
        id: "state-4-a",
        text: "By initializing this.state in the constructor",
        isCorrect: true,
        explanation: "Class components can initialize state in the constructor by assigning an object to this.state after calling super(props)."
      },
      {
        id: "state-4-b",
        text: "By using class field syntax to define a state property",
        isCorrect: true,
        explanation: "Modern class components can use class field syntax to define state directly as a property of the class, without using the constructor."
      },
      {
        id: "state-4-c",
        text: "By calling useState() in the render method",
        isCorrect: false,
        explanation: "useState() is for functional components, not class components. Hooks cannot be used in class components at all."
      },
      {
        id: "state-4-d",
        text: "By defining static state = {} in the class",
        isCorrect: false,
        explanation: "Using the static keyword would create a class-level property shared by all instances, not instance-specific state. State needs to be instance-specific, not static."
      }
    ],
    explanation: {
      correct: "Correct! State in class components can be declared either by initializing this.state in the constructor or by using class field syntax to define a state property directly.",
      incorrect: "State in class components is declared using this.state in the constructor or with class field syntax. You cannot use useState() in class components (hooks are for functional components), and state shouldn't be static (it needs to be instance-specific).",
      detailed: "There are two common ways to initialize state in class components: 1) In the constructor: constructor(props) { super(props); this.state = { count: 0, name: '', isActive: false }; } 2) Using class fields (a newer syntax): state = { count: 0, name: '', isActive: false };. Both approaches achieve the same result, but class fields are more concise. Unlike functional components where each call to useState creates an independent state variable, class components have a single state object that holds all state values. This means updates to one property don't affect others, but you need to be careful to preserve the other properties when updating state (typically using the spread operator)."
    }
  },
  {
    id: "state-5",
    level: 1,
    topic: "state",
    question: "How do you update state in a class component?",
    multipleCorrect: false,
    options: [
      {
        id: "state-5-a",
        text: "By calling this.setState() with the new state or an updater function",
        isCorrect: true,
        explanation: "Class components update state using this.setState(), which can take either an object with the new state or a function that receives the previous state and props and returns the new state."
      },
      {
        id: "state-5-b",
        text: "By directly modifying this.state",
        isCorrect: false,
        explanation: "Directly modifying this.state (e.g., this.state.count = 1) is incorrect in React. You should always use this.setState() to update state so that React knows to re-render the component."
      },
      {
        id: "state-5-c",
        text: "By calling the state setter function returned by useState",
        isCorrect: false,
        explanation: "The useState hook and its setter function are for functional components, not class components. Class components use this.setState()."
      },
      {
        id: "state-5-d",
        text: "By returning the new state from the render method",
        isCorrect: false,
        explanation: "The render method should return what should be rendered, not the new state. State updates are done with this.setState(), not by returning values from render."
      }
    ],
    explanation: {
      correct: "Correct! State in class components is updated by calling this.setState() with either an object containing the new state or a function that computes the new state based on the previous state and props.",
      incorrect: "State in class components is updated using this.setState(). You should not directly modify this.state, use useState's setter (that's for functional components), or return new state from the render method.",
      detailed: "this.setState() works in two ways: 1) With an object: this.setState({ count: 5 }); 2) With a function: this.setState((prevState, props) => ({ count: prevState.count + props.increment }));. The function form is recommended when the new state depends on the previous state or props, as React may batch multiple setState calls for performance. Unlike the state setter from useState, this.setState() performs a shallow merge of the provided object with the current state. This means you only need to include the properties you want to update, not the entire state object. However, it's not a deep merge - if you're updating nested objects, you need to ensure the entire path is updated correctly, typically using the spread operator."
    }
  },
  {
    id: "state-6",
    level: 1,
    topic: "state",
    question: "What is the difference between state and props in React?",
    multipleCorrect: true,
    options: [
      {
        id: "state-6-a",
        text: "State is managed within the component, while props are passed from parent components",
        isCorrect: true,
        explanation: "State is internal to a component and managed by the component itself, while props are external and passed in from parent components."
      },
      {
        id: "state-6-b",
        text: "State can be changed by the component, while props are read-only",
        isCorrect: true,
        explanation: "Components can update their own state but cannot modify their props. Props are read-only and should be treated as immutable within the component."
      },
      {
        id: "state-6-c",
        text: "Changes to state trigger re-renders, while changes to props don't",
        isCorrect: false,
        explanation: "Both changes to state and changes to props can trigger re-renders. When a parent component passes new props to a child, the child will re-render with the new props."
      },
      {
        id: "state-6-d",
        text: "State is for data that changes over time, while props are for configuration that remains static",
        isCorrect: false,
        explanation: "While state is indeed for data that changes over time, props aren't necessarily static. Props can change when the parent component re-renders and passes different values."
      }
    ],
    explanation: {
      correct: "Correct! State is managed within the component and can be changed by the component, while props are passed from parent components and are read-only within the component.",
      incorrect: "State is internal and mutable, while props are external and read-only. However, both state and props changes trigger re-renders, and props aren't necessarily static—they can change when the parent re-renders.",
      detailed: "The key differences between state and props are: 1) Origin: State originates within the component, props come from outside; 2) Mutability: State can be updated by the component, props cannot be changed by the receiving component; 3) Control: A component controls its state, but not its props; 4) Purpose: State is for data that changes over time within a component, props are for passing data and callbacks down the component tree. Understanding this distinction is fundamental to React's unidirectional data flow. Data flows down from parent to child through props, and events flow up through callbacks passed as props. When a parent component's state changes, it may pass new props to its children, causing them to re-render. This pattern creates a predictable data flow that makes applications easier to understand and debug."
    }
  },
  {
    id: "state-7",
    level: 1,
    topic: "state",
    question: "What is the purpose of the useState hook in React?",
    multipleCorrect: false,
    options: [
      {
        id: "state-7-a",
        text: "To add state to functional components",
        isCorrect: true,
        explanation: "useState allows functional components to have local state, which was previously only possible in class components. It returns the current state value and a function to update it."
      },
      {
        id: "state-7-b",
        text: "To perform side effects after rendering",
        isCorrect: false,
        explanation: "Performing side effects is the purpose of useEffect, not useState. useState is purely for state management."
      },
      {
        id: "state-7-c",
        text: "To create a reference to a DOM element",
        isCorrect: false,
        explanation: "Creating references to DOM elements is the purpose of useRef, not useState. useState is for managing component state that triggers re-renders when changed."
      },
      {
        id: "state-7-d",
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
    id: "state-8",
    level: 1,
    topic: "state",
    question: "What is the purpose of the useReducer hook in React?",
    multipleCorrect: false,
    options: [
      {
        id: "state-8-a",
        text: "To manage complex state logic with a reducer function",
        isCorrect: true,
        explanation: "useReducer is a hook that lets you manage complex state logic using a reducer function, similar to how Redux works. It's an alternative to useState when state logic becomes complex."
      },
      {
        id: "state-8-b",
        text: "To reduce the bundle size of React applications",
        isCorrect: false,
        explanation: "useReducer has nothing to do with bundle size optimization. It's a state management hook, not a build optimization tool."
      },
      {
        id: "state-8-c",
        text: "To combine multiple components into one",
        isCorrect: false,
        explanation: "Combining components would be done through composition, not with useReducer. useReducer is specifically for state management."
      },
      {
        id: "state-8-d",
        text: "To reduce the number of re-renders automatically",
        isCorrect: false,
        explanation: "useReducer doesn't automatically reduce re-renders. It can help manage complex state transitions, but components will still re-render when state changes."
      }
    ],
    explanation: {
      correct: "Correct! useReducer is a hook for managing complex state logic with a reducer function. It's particularly useful when state transitions depend on previous state or when state logic is complex.",
      incorrect: "useReducer is used to manage complex state logic with a reducer function. It's not for reducing bundle size, combining components, or automatically reducing re-renders.",
      detailed: "useReducer is an alternative to useState that's preferable when state logic is complex, involves multiple sub-values, or depends on previous state. It takes a reducer function and initial state, returning the current state and a dispatch function. The reducer function takes the current state and an action, returning the new state based on the action type. This pattern, inspired by Redux, centralizes state update logic, making it more predictable and easier to test. useReducer is especially useful for managing form state, step wizards, or any UI with multiple ways to update state."
    }
  },
  {
    id: "state-9",
    level: 1,
    topic: "state",
    question: "What is the purpose of the useContext hook in React?",
    multipleCorrect: false,
    options: [
      {
        id: "state-9-a",
        text: "To consume values from a React Context",
        isCorrect: true,
        explanation: "useContext is a hook that lets you read and subscribe to a context in a functional component. It's a cleaner alternative to the Context.Consumer component approach."
      },
      {
        id: "state-9-b",
        text: "To create a new Context",
        isCorrect: false,
        explanation: "Creating a new Context is done with React.createContext(), not useContext. useContext is for consuming an existing context."
      },
      {
        id: "state-9-c",
        text: "To provide values to child components",
        isCorrect: false,
        explanation: "Providing values to child components is done with the Context.Provider component, not the useContext hook. useContext is for consuming context values."
      },
      {
        id: "state-9-d",
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
    id: "state-10",
    level: 1,
    topic: "state",
    question: "What is lifting state up in React?",
    multipleCorrect: false,
    options: [
      {
        id: "state-10-a",
        text: "Moving state from child components to a common ancestor to share it between components",
        isCorrect: true,
        explanation: "Lifting state up is the process of moving state from child components to their closest common ancestor, allowing multiple components to share and update the same state."
      },
      {
        id: "state-10-b",
        text: "Using animation to visually lift elements up on the screen",
        isCorrect: false,
        explanation: "Lifting state up has nothing to do with visual animations. It's a state management pattern for sharing state between components."
      },
      {
        id: "state-10-c",
        text: "Moving all component state to global state management",
        isCorrect: false,
        explanation: "While lifting state up does involve moving state to a higher level, it specifically refers to moving it to a common ancestor component, not necessarily to global state management."
      },
      {
        id: "state-10-d",
        text: "Optimizing state updates to improve performance",
        isCorrect: false,
        explanation: "Lifting state up is about component communication and sharing state, not specifically about performance optimization. In fact, it can sometimes lead to more re-renders if not implemented carefully."
      }
    ],
    explanation: {
      correct: "Correct! Lifting state up is the process of moving state from child components to their closest common ancestor, allowing multiple components to share and update the same state.",
      incorrect: "Lifting state up means moving state to a common ancestor to share it between components. It's not about visual animations, not necessarily about global state management, and not specifically about performance optimization.",
      detailed: "Lifting state up is a fundamental pattern in React for sharing state between components. The process involves: 1) Identify state that needs to be shared between components; 2) Move that state to the closest common ancestor; 3) Pass the state down as props to the components that need it; 4) Pass callback functions down as props to allow child components to update the state. This pattern maintains React's unidirectional data flow while enabling components to communicate and share data. For example, if two sibling components need to access and modify the same data, that data should live in their parent component. While this can lead to 'prop drilling' in deeper component trees, it's often the simplest solution for moderate-sized applications. For larger applications, Context API or state management libraries provide alternatives."
    }
  },
  {
    id: "state-11",
    level: 1,
    topic: "state",
    question: "What is the Context API in React?",
    multipleCorrect: false,
    options: [
      {
        id: "state-11-a",
        text: "A way to pass data through the component tree without manually passing props at every level",
        isCorrect: true,
        explanation: "The Context API provides a way to share values like themes, user data, or other global state between components without explicitly passing props through every level of the component tree."
      },
      {
        id: "state-11-b",
        text: "A way to access the DOM context of a component",
        isCorrect: false,
        explanation: "The Context API has nothing to do with DOM context. It's for sharing data between components without prop drilling."
      },
      {
        id: "state-11-c",
        text: "An API for determining the execution context of a component",
        isCorrect: false,
        explanation: "The Context API isn't about execution context. It's specifically for sharing data between components without passing props through intermediate components."
      },
      {
        id: "state-11-d",
        text: "A replacement for all component state",
        isCorrect: false,
        explanation: "While Context can be used for global state, it's not a replacement for all component state. Local component state is still appropriate for many use cases."
      }
    ],
    explanation: {
      correct: "Correct! The Context API provides a way to pass data through the component tree without manually passing props at every level, solving the 'prop drilling' problem.",
      incorrect: "The Context API passes data through the component tree without manual prop drilling. It's not for accessing DOM context, determining execution context, or replacing all component state.",
      detailed: "The Context API consists of three main parts: 1) React.createContext: Creates a context object with an optional default value; 2) Context.Provider: A component that provides the context value to its descendants; 3) Context.Consumer or useContext: Ways to consume the context value. Context is designed for data that can be considered 'global' for a tree of components, such as the current user, theme, or language preference. It's particularly useful for deeply nested component structures where prop drilling would be cumbersome. While powerful, Context should be used judiciously, as it makes component reuse more difficult and can lead to performance issues if overused. Changes to context values cause all components that consume that context to re-render, even if they only use a portion of the data."
    }
  },
  {
    id: "state-12",
    level: 1,
    topic: "state",
    question: "How do you create and provide a context in React?",
    multipleCorrect: false,
    options: [
      {
        id: "state-12-a",
        text: "Create context with React.createContext() and provide values with Context.Provider",
        isCorrect: true,
        explanation: "You create a context using React.createContext() with an optional default value, then use the returned Context.Provider component to provide values to the component tree."
      },
      {
        id: "state-12-b",
        text: "Create context with new Context() and provide values with Context.set()",
        isCorrect: false,
        explanation: "This syntax is completely incorrect. React doesn't use new Context() or Context.set(). The correct approach uses React.createContext() and Context.Provider."
      },
      {
        id: "state-12-c",
        text: "Create context with useContext() and provide values with the return value",
        isCorrect: false,
        explanation: "useContext is for consuming context, not creating it. Contexts are created with React.createContext() and provided with Context.Provider."
      },
      {
        id: "state-12-d",
        text: "Create context with React.makeContext() and provide values with Context.value",
        isCorrect: false,
        explanation: "There is no React.makeContext() method, and Context.value is not how values are provided. The correct approach uses React.createContext() and Context.Provider."
      }
    ],
    explanation: {
      correct: "Correct! You create a context using React.createContext() with an optional default value, then use the returned Context.Provider component to provide values to components in the tree.",
      incorrect: "Contexts are created with React.createContext() and provided with Context.Provider. There's no new Context(), Context.set(), useContext() isn't for creating context, and there's no React.makeContext() or Context.value.",
      detailed: "The process has two main steps: 1) Create the context: const MyContext = React.createContext(defaultValue);. The defaultValue is only used when a component consumes the context but isn't a descendant of a Provider. 2) Provide the context value: <MyContext.Provider value={someValue}>{children}</MyContext.Provider>. The Provider component accepts a value prop that will be passed to all descendants that consume this context. When the Provider's value changes, all consumers will re-render. A common pattern is to combine context with state: function ThemeProvider({ children }) { const [theme, setTheme] = useState('light'); return ( <ThemeContext.Provider value={{ theme, setTheme }}> {children} </ThemeContext.Provider> ); }. This allows consumers to both read and update the context value."
    }
  },
  {
    id: "state-13",
    level: 1,
    topic: "state",
    question: "How do you consume a context in React?",
    multipleCorrect: true,
    options: [
      {
        id: "state-13-a",
        text: "Using the useContext hook in functional components",
        isCorrect: true,
        explanation: "The useContext hook provides a clean way to consume context in functional components, returning the current context value."
      },
      {
        id: "state-13-b",
        text: "Using Context.Consumer with a render prop",
        isCorrect: true,
        explanation: "Context.Consumer can be used with a render prop pattern, where you provide a function that receives the context value and returns JSX."
      },
      {
        id: "state-13-c",
        text: "Using static contextType in class components",
        isCorrect: true,
        explanation: "Class components can use the static contextType property to consume a single context, making the value available as this.context."
      },
      {
        id: "state-13-d",
        text: "Using Context.get() to retrieve the value",
        isCorrect: false,
        explanation: "There is no Context.get() method in React. Context values are consumed using useContext, Context.Consumer, or contextType."
      }
    ],
    explanation: {
      correct: "Correct! Context can be consumed using the useContext hook in functional components, Context.Consumer with a render prop, or static contextType in class components.",
      incorrect: "Context is consumed using useContext in functional components, Context.Consumer with render props, or static contextType in class components. There is no Context.get() method.",
      detailed: "There are three ways to consume context: 1) useContext hook (functional components): const value = useContext(MyContext);. This is the cleanest and most straightforward approach for functional components. 2) Context.Consumer (any component): <MyContext.Consumer>{value => /* render something based on the context value */}</MyContext.Consumer>. This approach works in both functional and class components and allows consuming multiple contexts. 3) static contextType (class components only): static contextType = MyContext;. Then access the value with this.context. This approach is limited to consuming a single context per class. The useContext hook is generally preferred in modern React code due to its simplicity and the trend toward functional components. If you need to consume multiple contexts in a class component, you'll need to use the Context.Consumer approach."
    }
  },
  {
    id: "state-14",
    level: 1,
    topic: "state",
    question: "What is the difference between useState and useReducer?",
    multipleCorrect: true,
    options: [
      {
        id: "state-14-a",
        text: "useReducer is better for complex state logic",
        isCorrect: true,
        explanation: "useReducer is more suitable for managing complex state logic, especially when state transitions depend on previous state or when multiple sub-values are related."
      },
      {
        id: "state-14-b",
        text: "useState is simpler and sufficient for basic state management",
        isCorrect: true,
        explanation: "useState provides a simpler API that's sufficient for managing independent pieces of state that don't involve complex logic."
      },
      {
        id: "state-14-c",
        text: "useReducer centralizes state update logic in a reducer function",
        isCorrect: true,
        explanation: "With useReducer, all state update logic is centralized in a reducer function, making it easier to test and reason about complex state transitions."
      },
      {
        id: "state-14-d",
        text: "useState is faster than useReducer",
        isCorrect: false,
        explanation: "There's no significant performance difference between useState and useReducer. The choice between them should be based on the complexity of your state logic, not performance considerations."
      }
    ],
    explanation: {
      correct: "Correct! useReducer is better for complex state logic, useState is simpler for basic state management, and useReducer centralizes state update logic in a reducer function.",
      incorrect: "useReducer is better for complex state logic, useState is simpler for basic state, and useReducer centralizes update logic. There's no significant performance difference between them.",
      detailed: "useState and useReducer are both hooks for managing state in functional components, but they have different use cases. useState is simpler and good for independent pieces of state: const [count, setCount] = useState(0). useReducer is more powerful and better for complex state logic: const [state, dispatch] = useReducer(reducer, initialState). With useReducer, you dispatch actions that describe what happened, and the reducer function determines how the state should change in response. This pattern, inspired by Redux, makes it easier to manage complex state transitions, handle related state values, and test state logic independently from components."
    }
  },
  {
    id: "state-15",
    level: 1,
    topic: "state",
    question: "What is prop drilling in React and how can it be avoided?",
    multipleCorrect: false,
    options: [
      {
        id: "state-15-a",
        text: "Passing props through multiple levels of components; it can be avoided using Context or state management libraries",
        isCorrect: true,
        explanation: "Prop drilling is the process of passing props through multiple levels of nested components, even when intermediate components don't need those props. It can be avoided using Context API or state management libraries like Redux."
      },
      {
        id: "state-15-b",
        text: "A technique for optimizing props; it can be avoided by using memo or PureComponent",
        isCorrect: false,
        explanation: "Prop drilling isn't an optimization technique; it's a problem that occurs when props need to be passed through many levels. memo and PureComponent help with performance optimization, not with avoiding prop drilling."
      },
      {
        id: "state-15-c",
        text: "A way to validate props; it can be avoided using PropTypes or TypeScript",
        isCorrect: false,
        explanation: "Prop drilling has nothing to do with prop validation. PropTypes and TypeScript help with type checking and validation, not with avoiding the need to pass props through multiple levels."
      },
      {
        id: "state-15-d",
        text: "A method for creating dynamic props; it can be avoided by using static props",
        isCorrect: false,
        explanation: "Prop drilling isn't about dynamic vs. static props. It's about the problem of passing props through multiple component levels, regardless of whether those props are dynamic or static."
      }
    ],
    explanation: {
      correct: "Correct! Prop drilling is the process of passing props through multiple levels of components, even when intermediate components don't need those props. It can be avoided using Context API or state management libraries.",
      incorrect: "Prop drilling is passing props through multiple component levels. It's not an optimization technique, not about prop validation, and not about dynamic vs. static props.",
      detailed: "Prop drilling becomes a problem when components have to pass props through many levels of nesting, making the code harder to maintain and understand. There are several ways to avoid it: 1) Context API: Create a context for data needed by distant components, bypassing intermediate ones; 2) State management libraries: Redux, MobX, or Zustand provide global state that components can access directly; 3) Component composition: Sometimes restructuring your components can reduce the need for deep prop passing; 4) Custom hooks: Encapsulate and share stateful logic between components; 5) Render props or higher-order components: These patterns can also help share functionality without prop drilling. The best solution depends on the specific situation, but Context is often the simplest first step when prop drilling becomes problematic."
    }
  },
  {
    id: "state-16",
    level: 1,
    topic: "state",
    question: "What happens when you call setState in React?",
    multipleCorrect: true,
    options: [
      {
        id: "state-16-a",
        text: "React schedules a re-render of the component",
        isCorrect: true,
        explanation: "When setState is called, React schedules a re-render of the component with the updated state. The re-render isn't immediate, as React may batch multiple state updates for performance."
      },
      {
        id: "state-16-b",
        text: "The state object is updated with the new values",
        isCorrect: true,
        explanation: "setState updates the component's state object with the new values, either by merging the provided object with the current state (in class components) or by replacing the state value (in functional components with useState)."
      },
      {
        id: "state-16-c",
        text: "The state is updated synchronously",
        isCorrect: false,
        explanation: "setState is generally asynchronous. React may batch multiple state updates for performance, so the state might not be updated immediately after calling setState."
      },
      {
        id: "state-16-d",
        text: "All child components are forced to re-render regardless of their props",
        isCorrect: false,
        explanation: "When a component re-renders due to a state change, its child components will re-render by default, but they aren't forced to if they're optimized with React.memo, PureComponent, or shouldComponentUpdate."
      }
    ],
    explanation: {
      correct: "Correct! When setState is called, React schedules a re-render of the component and updates the state object with new values. The update is asynchronous, and child components re-render by default but can be optimized.",
      incorrect: "setState schedules a re-render and updates the state object. However, the update is asynchronous (not synchronous), and child components aren't forced to re-render if they're optimized.",
      detailed: "The setState process involves several steps: 1) React enqueues the state update; 2) It may batch multiple updates for performance; 3) It eventually processes the update, merging the new state with the existing state (in class components) or replacing the state value (in functional components); 4) It schedules a re-render of the component; 5) During the re-render, React computes the new virtual DOM and compares it with the previous one; 6) It updates only the necessary parts of the actual DOM. Because setState is asynchronous, you shouldn't rely on the updated state value immediately after calling setState. Instead, use the callback form of setState in class components (setState(prevState => ...)) or the functional update form in hooks (setCount(prevCount => ...)) when the new state depends on the previous state. For side effects after state updates, use the second callback parameter of setState in class components or the useEffect hook in functional components."
    }
  },
  {
    id: "state-17",
    level: 1,
    topic: "state",
    question: "What is the difference between controlled and uncontrolled components in React forms?",
    multipleCorrect: false,
    options: [
      {
        id: "state-17-a",
        text: "Controlled components store form data in React state, while uncontrolled components store it in the DOM",
        isCorrect: true,
        explanation: "In controlled components, form data is handled by React state. Every state change is handled by a React handler function. In uncontrolled components, form data is handled by the DOM itself, and you access the values using refs."
      },
      {
        id: "state-17-b",
        text: "Controlled components are faster than uncontrolled components",
        isCorrect: false,
        explanation: "There's no inherent performance difference between controlled and uncontrolled components. The choice depends on the use case, not performance considerations."
      },
      {
        id: "state-17-c",
        text: "Controlled components are class components, while uncontrolled components are functional components",
        isCorrect: false,
        explanation: "The distinction between controlled and uncontrolled has nothing to do with class vs. functional components. Both types can be implemented using either component style."
      },
      {
        id: "state-17-d",
        text: "Controlled components can't be modified by the user, while uncontrolled components can",
        isCorrect: false,
        explanation: "Both controlled and uncontrolled components can be modified by the user. The difference is in how the data is managed, not whether user input is allowed."
      }
    ],
    explanation: {
      correct: "Correct! In controlled components, form data is handled by React state, with onChange handlers updating the state. In uncontrolled components, the DOM itself handles the data, which is accessed using refs.",
      incorrect: "The key difference is that controlled components manage form data through React state, while uncontrolled components let the DOM handle it. This has nothing to do with performance, component type, or whether user modifications are allowed.",
      detailed: "Controlled components provide more control and are generally recommended for most use cases. They make form validation easier, allow immediate UI updates based on input, and make it simpler to reset or modify form values programmatically. Uncontrolled components require less code for simple cases and can be useful when integrating with non-React code. However, they make certain operations like form validation more complex. Most React applications primarily use controlled components for forms."
    }
  },
  {
    id: "state-18",
    level: 1,
    topic: "state",
    question: "How do you update state based on the previous state in React?",
    multipleCorrect: false,
    options: [
      {
        id: "state-18-a",
        text: "By passing a function to the state setter that receives the previous state",
        isCorrect: true,
        explanation: "When you need to update state based on the previous state, you should pass a function to the state setter. This function receives the previous state as its argument and returns the new state."
      },
      {
        id: "state-18-b",
        text: "By using the prevState property on the state variable",
        isCorrect: false,
        explanation: "There is no prevState property on state variables. To access the previous state, you need to use the functional form of the state setter."
      },
      {
        id: "state-18-c",
        text: "By accessing this.state directly in the update",
        isCorrect: false,
        explanation: "Directly accessing this.state during an update can lead to bugs due to the asynchronous nature of state updates. You should use the functional form of setState instead."
      },
      {
        id: "state-18-d",
        text: "By using the getPreviousState() method",
        isCorrect: false,
        explanation: "There is no getPreviousState() method in React. To access the previous state when updating, you use the functional form of the state setter."
      }
    ],
    explanation: {
      correct: "Correct! To update state based on the previous state, you pass a function to the state setter. This function receives the previous state as its argument and returns the new state.",
      incorrect: "You update state based on previous state by passing a function to the state setter. There's no prevState property, directly accessing this.state can cause bugs, and there's no getPreviousState() method.",
      detailed: "This pattern is important because React may batch multiple state updates for performance. If you use the non-functional form with the current state value, you might not be working with the most up-to-date state. In class components: this.setState(prevState => ({ count: prevState.count + 1 }));. In functional components with useState: setCount(prevCount => prevCount + 1);. For more complex state objects in functional components: setUser(prevUser => ({ ...prevUser, visits: prevUser.visits + 1 }));. This approach ensures that you're always working with the most current state value, even when updates are batched. It's particularly important for counters, toggles, or any state that depends on its previous value."
    }
  },
  {
    id: "state-19",
    level: 1,
    topic: "state",
    question: "What is the purpose of the key prop when rendering lists in React?",
    multipleCorrect: false,
    options: [
      {
        id: "state-19-a",
        text: "To help React identify which items have changed, been added, or removed",
        isCorrect: true,
        explanation: "Keys help React identify which items in a list have changed, been added, or removed. They give elements a stable identity across renders, which is essential for React's reconciliation algorithm."
      },
      {
        id: "state-19-b",
        text: "To specify the order of elements in the list",
        isCorrect: false,
        explanation: "Keys don't determine the order of elements. The order is based on how you render the list in your code, typically using array methods like map()."
      },
      {
        id: "state-19-c",
        text: "To automatically apply CSS styles to list items",
        isCorrect: false,
        explanation: "Keys don't automatically apply styles. They're used internally by React for reconciliation and don't affect styling directly."
      },
      {
        id: "state-19-d",
        text: "To make list items accessible to screen readers",
        isCorrect: false,
        explanation: "Keys don't directly impact accessibility. For accessibility in lists, you would use appropriate semantic HTML and ARIA attributes."
      }
    ],
    explanation: {
      correct: "Correct! The key prop helps React identify which items in a list have changed, been added, or removed. This allows React to update the DOM efficiently when the list changes.",
      incorrect: "The key prop helps React identify which items have changed, been added, or removed. It doesn't specify element order, apply CSS styles, or directly impact accessibility.",
      detailed: "When rendering lists in React, each item should have a unique key prop. Without keys, React doesn't know which items have changed and might re-render the entire list when only one item changes. Keys should be stable, predictable, and unique among siblings. Typically, you would use IDs from your data as keys. Using array indices as keys is not recommended if the list order can change, as it can lead to performance issues and component state bugs. Good keys enable React to minimize DOM operations when updating lists, significantly improving performance for dynamic lists."
    }
  },
  {
    id: "state-20",
    level: 1,
    topic: "state",
    question: "What is the difference between state and global variables in React?",
    multipleCorrect: true,
    options: [
      {
        id: "state-20-a",
        text: "Changes to state trigger re-renders, while changes to global variables don't",
        isCorrect: true,
        explanation: "When state changes, React automatically re-renders the component to reflect those changes. Changes to global variables don't trigger re-renders unless you explicitly call a state update function."
      },
      {
        id: "state-20-b",
        text: "State is component-specific, while global variables are accessible throughout the application",
        isCorrect: true,
        explanation: "State is scoped to the component that declares it (or its children if passed as props), while global variables are accessible from any component or function in the application."
      },
      {
        id: "state-20-c",
        text: "State persists between renders, while global variables are reset on each render",
        isCorrect: false,
        explanation: "Both state and global variables persist between renders. State is managed by React, while global variables persist naturally as part of the JavaScript environment."
      },
      {
        id: "state-20-d",
        text: "State is managed by React's reconciliation process, while global variables aren't",
        isCorrect: true,
        explanation: "React manages state updates and triggers re-renders as part of its reconciliation process. Global variables exist outside of React's control and aren't integrated with its rendering lifecycle."
      }
    ],
    explanation: {
      correct: "Correct! State changes trigger re-renders while global variable changes don't, state is component-specific while global variables are application-wide, and state is managed by React's reconciliation process while global variables aren't.",
      incorrect: "State changes trigger re-renders (global variable changes don't), state is component-specific (global variables are application-wide), and state is managed by React's reconciliation (global variables aren't). However, both state and global variables persist between renders.",
      detailed: "Using global variables for state in React is generally discouraged because: 1) It breaks component encapsulation; 2) Changes don't trigger re-renders automatically; 3) It makes testing more difficult; 4) It can lead to race conditions and hard-to-track bugs; 5) It makes code less predictable and harder to reason about. For data that needs to be accessed by multiple components, better alternatives include: 1) Lifting state up to a common ancestor; 2) Using Context API for more widely shared state; 3) Using state management libraries like Redux or MobX for complex application state. These approaches maintain React's unidirectional data flow and component model while still allowing for shared state."
    }
  },
  {
    id: "state-21",
    level: 1,
    topic: "state",
    question: "What is the purpose of using a state management library like Redux with React?",
    multipleCorrect: true,
    options: [
      {
        id: "state-21-a",
        text: "To manage global application state outside of the component tree",
        isCorrect: true,
        explanation: "Redux provides a centralized store for global application state that exists outside the React component tree, making it accessible to any component without prop drilling."
      },
      {
        id: "state-21-b",
        text: "To make state updates more predictable with a unidirectional data flow",
        isCorrect: true,
        explanation: "Redux enforces a strict unidirectional data flow and a single source of truth, making state updates more predictable and easier to reason about, especially in complex applications."
      },
      {
        id: "state-21-c",
        text: "To enable powerful debugging capabilities like time-travel debugging",
        isCorrect: true,
        explanation: "Redux's predictable state container enables powerful debugging tools, including the ability to inspect every state change and even 'time travel' back to previous states during development."
      },
      {
        id: "state-21-d",
        text: "To make React components render faster automatically",
        isCorrect: false,
        explanation: "Redux doesn't automatically make components render faster. In fact, it can sometimes introduce performance overhead if not implemented carefully. Performance optimization still requires careful consideration."
      }
    ],
    explanation: {
      correct: "Correct! State management libraries like Redux help manage global application state outside the component tree, make state updates more predictable with unidirectional data flow, and enable powerful debugging capabilities.",
      incorrect: "Redux manages global state outside the component tree, makes updates more predictable, and enables powerful debugging. It doesn't automatically make components render faster—it can even add overhead if not implemented carefully.",
      detailed: "State management libraries like Redux are particularly useful for larger applications with complex state interactions. Key benefits include: 1) Centralized state: All application state lives in a single store, creating a single source of truth; 2) Predictable updates: State can only be changed by dispatching actions, which are processed by pure reducer functions; 3) Separation of concerns: Business logic can be separated from UI components; 4) Middleware: Enables side effects, async operations, and more; 5) Developer tools: Time-travel debugging, state inspection, and action logging; 6) Testability: Pure reducers are easy to test. However, Redux adds complexity and boilerplate code, so it's not always necessary for smaller applications. Modern alternatives include React's Context API with useReducer for simpler cases, or lighter libraries like Zustand or Jotai that offer similar benefits with less boilerplate."
    }
  },
  {
    id: "state-22",
    level: 1,
    topic: "state",
    question: "What is the difference between the Context API and Redux for state management?",
    multipleCorrect: true,
    options: [
      {
        id: "state-22-a",
        text: "Redux provides middleware for handling side effects, while Context doesn't",
        isCorrect: true,
        explanation: "Redux has a middleware system that allows for handling side effects, async operations, logging, etc. Context API doesn't have built-in middleware support."
      },
      {
        id: "state-22-b",
        text: "Context is built into React, while Redux is a third-party library",
        isCorrect: true,
        explanation: "Context API is a built-in feature of React itself, while Redux is a separate third-party library that needs to be installed and integrated."
      },
      {
        id: "state-22-c",
        text: "Redux has more powerful debugging tools than Context",
        isCorrect: true,
        explanation: "Redux has extensive developer tools including time-travel debugging, action logging, and state inspection. Context doesn't have equivalent built-in debugging capabilities."
      },
      {
        id: "state-22-d",
        text: "Context is always more performant than Redux",
        isCorrect: false,
        explanation: "Context isn't always more performant than Redux. In fact, Context can cause performance issues with large state objects or frequent updates, as it can re-render all consumers when any part of the context value changes."
      }
    ],
    explanation: {
      correct: "Correct! Redux provides middleware for side effects while Context doesn't, Context is built into React while Redux is a third-party library, and Redux has more powerful debugging tools than Context.",
      incorrect: "Redux has middleware for side effects (Context doesn't), Context is built into React (Redux is third-party), and Redux has more powerful debugging tools. However, Context isn't always more performant than Redux—it can actually cause performance issues with large state or frequent updates.",
      detailed: "When choosing between Context and Redux, consider: 1) Complexity: Context is simpler and has less boilerplate, making it better for smaller applications or specific sections of an app. Redux is more structured but adds complexity. 2) Performance: Context can cause performance issues when the state changes frequently, as all consumers re-render. Redux can be more efficient with its connect function or useSelector hook, which allow components to subscribe to specific parts of the state. 3) Features: Redux offers middleware, powerful debugging, and a well-established pattern for complex state logic. Context is more basic but sufficient for many use cases. 4) Learning curve: Context has a lower learning curve as it's built into React. Redux requires learning new concepts like actions, reducers, and the store. A common approach is to use Context for simpler state needs (theme, authentication) and Redux for more complex application state."
    }
  },
  {
    id: "state-23",
    level: 1,
    topic: "state",
    question: "What is the purpose of the 'initialState' argument in useState and useReducer?",
    multipleCorrect: false,
    options: [
      {
        id: "state-23-a",
        text: "To set the initial value of the state when the component first renders",
        isCorrect: true,
        explanation: "The initialState argument provides the starting value for the state when the component mounts. It's used during the first render but ignored in subsequent renders."
      },
      {
        id: "state-23-b",
        text: "To reset the state to its original value when needed",
        isCorrect: false,
        explanation: "While you could use the same value to reset state, the initialState argument itself doesn't provide a reset mechanism. You would need to call the state setter or dispatch function to reset the state."
      },
      {
        id: "state-23-c",
        text: "To provide a fallback value when the state is undefined",
        isCorrect: false,
        explanation: "The initialState isn't a fallback for undefined state - it's the actual starting value. Once initialized, the state maintains its value between renders unless explicitly updated."
      },
      {
        id: "state-23-d",
        text: "To define the shape of the state for TypeScript type checking",
        isCorrect: false,
        explanation: "While the initialState does implicitly define the shape of the state, that's not its primary purpose. TypeScript types would typically be defined explicitly with type annotations or generics."
      }
    ],
    explanation: {
      correct: "Correct! The initialState argument sets the initial value of the state when the component first renders. It's used during the first render but ignored in subsequent renders.",
      incorrect: "The initialState argument sets the initial state value on first render. It doesn't provide a reset mechanism, isn't a fallback for undefined state, and isn't primarily for TypeScript type definitions.",
      detailed: "The initialState is only used during the component's first render. For simple values, you can pass the value directly: useState(0) or useReducer(reducer, { count: 0 }). For expensive calculations, you can use lazy initialization by passing a function: useState(() => expensiveComputation()) or useReducer(reducer, arg, init) where init is a function that computes the initial state from arg. This ensures the expensive computation only runs during the initial render, not on every render. If you need to reset state to its initial value later, you would need to store the initial value separately or call the state setter/dispatch with that value: setCount(0) or dispatch({ type: 'RESET', payload: initialState })."
    }
  },
  {
    id: "state-24",
    level: 1,
    topic: "state",
    question: "What are the potential issues with updating state directly in React?",
    multipleCorrect: true,
    options: [
      {
        id: "state-24-a",
        text: "It won't trigger a re-render",
        isCorrect: true,
        explanation: "Directly modifying state (like this.state.count = 1 or mutating a state object) won't trigger a re-render because React isn't notified of the change. You must use setState or the state setter from useState."
      },
      {
        id: "state-24-b",
        text: "It can lead to unexpected behavior due to React's asynchronous rendering",
        isCorrect: true,
        explanation: "Direct state mutations can lead to bugs with React's asynchronous rendering. State updates may be batched, so reading state immediately after a direct mutation might not reflect other pending updates."
      },
      {
        id: "state-24-c",
        text: "It breaks the principle of immutability in React",
        isCorrect: true,
        explanation: "React relies on immutability for efficient change detection and rendering optimization. Directly mutating state objects breaks this principle and can interfere with features like PureComponent or React.memo."
      },
      {
        id: "state-24-d",
        text: "It always causes a complete application crash",
        isCorrect: false,
        explanation: "While direct state mutation is discouraged and can cause bugs, it doesn't always cause a complete application crash. The issues are often more subtle, like components not re-rendering or behaving unexpectedly."
      }
    ],
    explanation: {
      correct: "Correct! Updating state directly won't trigger re-renders, can lead to unexpected behavior with async rendering, and breaks React's immutability principle.",
      incorrect: "Direct state updates won't trigger re-renders, can cause unexpected behavior with async rendering, and break immutability. However, they don't always cause complete application crashes—the issues are often more subtle.",
      detailed: "React's state update mechanism relies on proper usage of setState (in class components) or state setters from hooks (in functional components). When you bypass these mechanisms by directly modifying state, several problems can occur: 1) Missing renders: React doesn't know the state has changed, so it doesn't update the UI; 2) Race conditions: Direct mutations don't respect React's batching of updates, leading to inconsistent state; 3) Performance issues: Breaking immutability prevents optimizations like shallow comparison in PureComponent or React.memo; 4) Time-travel debugging becomes impossible; 5) Features that rely on comparing previous and current state may break. The correct approach is to always treat state as immutable and use the proper state update functions: this.setState({ count: this.state.count + 1 }) or setCount(prevCount => prevCount + 1)."
    }
  }
];

// Function to get a random subset of questions
export function getRandomizedLevel1Questions(): Question[] {
  // Create a copy of the database to avoid modifying the original
  const allQuestions = [...questionDatabase];
  
  // Shuffle the questions
  const shuffledQuestions = allQuestions.sort(() => Math.random() - 0.5);
  
  // Take the first 50 questions
  const selectedQuestions = shuffledQuestions.slice(0, 50);
  
  // Return the questions without the topic field to match the Question type
  return selectedQuestions.map(({ topic, ...question }) => question);
}

// Export level1Questions as a randomized set
export const level1Questions = getRandomizedLevel1Questions();