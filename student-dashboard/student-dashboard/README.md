# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



# README Questions

### What is a React component?
A React component is a reusable piece of the user interface. It can contain HTML-like JSX and JavaScript logic.

### What is the difference between props and state?
Props are values passed from a parent component to a child component. State is data managed inside a component that can change over time and cause the component to re-render.

### What event does your counter use?
The counter uses the `onClick` event. The `+` button increases the count, the `-` button decreases it, and the `Reset` button sets the count back to 0.

### Which components did you create?
I created the StudentProfile and Announcement components. I also used the existing Header, CourseList, Course, ActivityCounter, and Footer components.

### How are your components composed?
The components are composed inside the App component. App acts as the parent and renders Header, StudentProfile, Announcement, CourseList, ActivityCounter, and Footer. CourseList also contains Course components.

### What was the most difficult part of the activity?
The most difficult part was understanding how to pass props between components and correctly import, export, and render the components.