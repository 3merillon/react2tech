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
  }
];

// Convert QuestionWithCategory to Question by removing topic
export const questions: Question[] = questionDatabase.map(({ topic, ...question }) => question);
