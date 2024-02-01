# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

//The Link component is used for navigating between different routes in a React application. It's similar to an anchor <a> tag in HTML but specifically designed for React router usage. When a Link is clicked, it changes the URL in the browser without causing a full page reload, thereby providing a seamless single-page application experience.

////The NavLink component is a special type of Link component provided by react-router-dom. It's used to render navigation links in your application, and it adds additional styling to the rendered element when it matches the current URL. This styling typically includes adding an "active" class to the link, making it easy to highlight the currently active route in your navigation bar.

//The Outlet component is used as a placeholder where the content of the currently matched route should be rendered. It's typically used in the layout of the application to define where the nested route components will be rendered.

//Why is useLoaderData useful?
Here are some of the benefits of using the useLoaderData hook:
Improved performance: By fetching data for your routes before they are rendered, you can improve the performance of your application by reducing the number of network requests that are made.
Prevented empty states: By making data available to your components before they are rendered, you can prevent empty states from being displayed to your users.
Better user experience: By providing your users with data as soon as possible, you can improve the user experience of your application.

//What is useNavigate?
The useNavigate hook is a new addition to React Router 6. It's a replacement for the useHistory and useLocation hooks in previous versions of React Router. The useNavigate hook provides a simple and intuitive API for navigating between pages in your React application. It's designed to be used with functional components and hooks, and it simplifies the process of handling URL changes in your application.

//useNavigation
This hook tells you everything you need to know about a page navigation to build pending navigation indicators and optimistic UI on data mutations. Things like:
Global loading indicators
Disabling forms while a mutation is happening
Adding busy indicators to submit buttons
Optimistically showing a new record while it's being created on the server
Optimistically showing the new state of a record while it's being updated
