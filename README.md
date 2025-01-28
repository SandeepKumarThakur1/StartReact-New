# React Js
- React.js is a JavaScript library for building fast, interactive user interfaces. It uses reusable components to create modern web apps and updates only the parts of a webpage that change, making it fast and efficient.

### Why we use React Js?
- We use React because it’s fast, reusable, and efficient for building dynamic, user-friendly web apps. It updates only what’s needed, saves time, and is supported by a large community.

### How it is Work?
- React works by using components to build the UI and a Virtual DOM to update only the changed parts, making it fast and efficient.

### Why we install npm.
- We install npm to manage React’s tools, libraries, and scripts, making it easy to set up and run React projects.

### What is NPM ?
- npm (Node Package Manager) is a tool that helps manage JavaScript packages and libraries. It lets you easily install, update, and manage the dependencies (tools and libraries) needed for your projects. It’s commonly used in React and other JavaScript frameworks.

### What is NPX ? 
- npx lets you run npm packages without installing them globally. It’s useful for one-time uses, like creating a React app, saving time and space.

### Difference B/t NPM and NPX
| Feature         | npm                                     | npx                                   |
|-----------------|-----------------------------------------|---------------------------------------|
| **Purpose**     | Installs and manages packages           | Runs packages without installing them |
| **Usage**       | `npm install <package>`                 | `npx <command>`                       |
| **Example**     | `npm install react`                     | `npx create-react-app my-app`         |
| **Installation**| Installs packages globally or locally   | Runs packages without installation    |
| **Use Case**    | Managing dependencies for your project  | Running one-time commands or tools   |

### Create-react-app
- create-react-app is a command-line tool that sets up a new React project with a ready-to-use development environment. It configures all the necessary files, tools, and settings (like Webpack, Babel, etc.) so you can start building a React app immediately without manual setup.

### Webpack:
- **What it is**: A module bundler for JavaScript.
- **What it does**: It bundles your JavaScript files (and other assets like images, CSS) into one or more optimized files that can be loaded in the browser.
- **Why it's important**: Webpack helps in splitting code, optimizing load times, and managing dependencies in a project.

### Babel:
- **What it is**: A JavaScript compiler.
- **What it does**: It converts modern JavaScript (like ES6/ES7) code into backward-compatible JavaScript that works on older browsers.
- **Why it's important**: Babel allows you to use the latest JavaScript features without worrying about browser compatibility.

### Vite
- Vite is a fast development tool for building JavaScript apps. It starts quickly, updates changes instantly, and creates smaller, optimized production builds. It’s designed to be faster and more efficient than older tools like create-react-app.

### Why We Use Vite Instead of create-react-app:

- **Faster Builds**: Vite is much faster in development, with instant server start and quick updates.
- **Smaller Bundles**: Vite produces smaller production bundles, improving performance.
- **Modern Features**: Vite supports modern tools like TypeScript and JSX right out of the box.
- **Better for Large Projects**: Vite handles large apps more efficiently.

### DOM
- The DOM (Document Object Model) is a way for browsers to represent the structure of an HTML or XML document as a tree. Each part of the page (like elements, attributes, or text) is a "node" in this tree.

**With JavaScript, you can interact with the DOM to:**
- Change the content of the page.
- Add or remove elements.
- Modify styles and respond to user actions (like clicks).

### Virtual DOM
- The Virtual DOM (VR DOM) is a copy of the real DOM. It helps make web apps faster by updating the virtual version first instead of the real DOM directly.

**Here’s how it works:**
- React updates the Virtual DOM when there's a change in the app state or data.
- React then compares the updated Virtual DOM with the previous version of the Virtual DOM.
- React calculates the differences (called "diffing") between the two Virtual DOMs.
- Finally, React updates the real DOM with only the differences (the minimal changes), rather than re-rendering the entire DOM.

### Diffing
- Diffing is the process React uses to compare the old and new versions of the Virtual DOM to find out what has changed. React then applies only the necessary changes to the real DOM.

### Reconciliation
- Reconciliation is the broader process in React that includes diffing. It’s the algorithm that decides how to update the real DOM based on the differences found between the old and new Virtual DOM.

| **Concept**        | **Diffing**                                      | **Reconciliation**                                    |
|--------------------|--------------------------------------------------|------------------------------------------------------|
| **What it is**      | The process of comparing the old and new Virtual DOM. | The overall process that includes diffing and updating the real DOM. |
| **What it does**    | Finds the differences between the two Virtual DOMs. | Uses the diffing results to efficiently update the real DOM. |
| **Goal**            | Identify what changed in the Virtual DOM.         | Apply the minimal updates to the real DOM based on the diffing results. |

### React Fiber
- React Fiber is the new reconciliation algorithm that was introduced in React 16. It improves the rendering performance by breaking the work into chunks and allowing React to work asynchronously.

**Key Features:**
- More responsive UI by prioritizing updates.
- Enabling features like Concurrent Mode and Suspense.

### React DevTools
- React DevTools is a Chrome and Firefox extension that allows you to inspect the React component tree, state, props, and hooks.

**Key Features:**
- Visualizes the component tree for easier debugging.
- Inspect and modify the state/props of components directly in the browser.
- Offers hooks support, helping you debug custom hooks and useState/useEffect behavior.

| **Concept**                | **Reconciliation (Pre-Fiber)**                                    | **React Fiber**                                                    |
|----------------------------|--------------------------------------------------------------------|--------------------------------------------------------------------|
| **Rendering**               | Synchronous: All work is done in one go, blocking the thread.      | Asynchronous: Work is split into smaller units and can be paused/resumed. |
| **Performance**             | Slower for complex updates or large applications.                  | Faster due to prioritization, time-slicing, and concurrency.       |
| **Update Prioritization**   | No prioritization (all updates are handled the same).              | Updates are prioritized based on urgency (e.g., animations, user inputs). |
| **Interruptible Updates**   | Updates can't be interrupted.                                      | Updates can be interrupted, allowing React to work on more urgent updates first. |
| **Handling Large Apps**     | Poor handling of large or complex applications with many updates.  | Optimized for large apps with efficient handling of complex updates. |
| **UI Responsiveness**       | Poor UI responsiveness in case of heavy updates.                  | Improved responsiveness, even during heavy updates.               |


### Thread
A thread is the smallest unit of execution within a process in computer science. It is a sequence of instructions that can be executed independently by a computer’s central processing unit (CPU). Threads are the building blocks of multitasking in modern operating systems, allowing multiple operations to run concurrently.

Thread = Small task or instruction.
Process = A larger task that can contain many threads.
CPU = The brain that handles these tasks.

#### Types of Threads:
- `Main Thread`: The primary thread where the program starts. Most of the time, user interaction and other major tasks happen here.
- `Worker Threads`: Additional threads that can be created to perform tasks concurrently, such as background work, without blocking the main thread.
