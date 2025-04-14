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
  }
];

// Convert QuestionWithCategory to Question by removing topic
export const questions: Question[] = questionDatabase.map(({ topic, ...question }) => question);
