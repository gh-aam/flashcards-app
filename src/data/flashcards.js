// Q/A for flash cards

export const flashcards = [
  {
    question: "What is the difference between var, let, and const?",
    answer:
      "In JavaScript programming language, var is function-scoped and can be re-declared; let and const are block-scoped, with let allowing re-assignment and const preventing it. However, const objects can have their contents modified."
  },
  {
    question: "What is a closure in JavaScript?",
    answer:
      "A closure is a function that has access to its outer function scope even after the outer function has returned."
  },
  {
    question: "What is the difference between == and ===?",
    answer:
      "== compares values with type coercion, while === compares both value and type without coercion."
  },
  {
    question: "Explain event bubbling in JavaScript.",
    answer:
      "Event bubbling is when an event starts at the most specific element and flows outward to the least specific one (i.e., up the DOM tree)."
  },
  {
    question: "What is the use of the 'useState' hook in React?",
    answer:
      "'useState' is a React hook that lets you add state to functional components."
  },
  {
    question: "What is JSX?",
    answer:
      "JSX is a syntax extension for JavaScript that looks similar to HTML and is used in React to describe UI elements."
  },
  {
    question: "How does the virtual DOM work?",
    answer:
      "The virtual DOM is a lightweight copy of the real DOM. React updates it first, then calculates the most efficient way to apply changes to the real DOM."
  },
  {
    question: "What are props in React?",
    answer:
      "Props (short for properties) are read-only inputs to React components used to pass data."
  },
  {
    question: "What is the difference between state and props?",
    answer:
      "Props are passed to a component, while state is managed within the component."
  },
  {
    question: "What are React fragments?",
    answer:
      "Fragments let you group multiple elements without adding extra nodes to the DOM."
  },
  {
    question: "What does useEffect do?",
    answer:
      "'useEffect' performs side effects in function components, like fetching data or updating the DOM."
  },
  {
    question: "How do you conditionally render in React?",
    answer:
      "Using if-else, ternary operators, or logical && to render elements conditionally."
  },
  {
    question: "What are keys in React lists?",
    answer:
      "Keys help React identify which items have changed, are added, or removed; they should be unique among siblings."
  },
  {
    question: "What is Tailwind CSS?",
    answer:
      "Tailwind CSS is a utility-first CSS framework for rapidly building custom designs."
  },
  {
    question: "How do you apply styles using Tailwind?",
    answer:
      "You apply utility classes directly in the class attribute of HTML/JSX elements."
  },
  {
    question: "What is component-based architecture?",
    answer:
      "It’s a design approach where the UI is broken into reusable, self-contained components."
  },
  {
    question: "What is a controlled component in React?",
    answer:
      "A controlled component is an input element whose value is controlled by React state."
  },
  {
    question: "What is lifting state up in React?",
    answer:
      "It refers to moving state to a common ancestor so that multiple components can share and sync state."
  },
  {
    question: "How do you pass data from child to parent in React?",
    answer:
      "By passing a callback function from parent to child and calling it with data in the child."
  },
  {
    question: "What is the purpose of keys in a list?",
    answer:
      "They improve performance by helping React quickly identify changes in the list."
  }
];