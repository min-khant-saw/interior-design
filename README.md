# React Js

## Components

# Navbar

The `Navbar` component is a React functional component that renders a responsive navigation bar with a hamburger menu icon that toggles a sidebar menu.

## Example

The following example demonstrates how to use the `Navbar` component:

`<Navbar />`

When rendered, this will display a navigation bar with a hamburger menu icon that toggles a sidebar menu. The sidebar menu includes links to Home, Shop, About Us, Contact us, Services, Blog, Login, and Sign Up pages.

## Sing in

This is a React functional component that handles the login functionality of a website. It uses the `useReducer`, `useState`, and `useMemo` hooks from React.

### Reducer, useState & useMemo

The component first defines a reducer function that takes in the current state and an action to perform on it. The initial state for the `login` object is defined with empty email and password fields using the `useReducer` hook.

The component also sets up state for toggling password visibility using the `useState` hook.

The `useMemo` hook is used to memoize a function that makes a GET request to the server to check if the user is already logged in, and if so, redirects them to the home page.

### SingIn function

The `signIn` function is defined to handle the login functionality. It first creates a new instance of the FormData object and adds the email and password to it. It then makes a POST request to the server with the FormData object as the payload. If the request is successful, the user is redirected to the home page.

The component returns a form with inputs for email and password, with icons and labels. The `onChange` event handler for the email input field calls the reducer function to update the email field in the `login` object. The password input field is a bit more complex, with an icon for toggling password visibility and logic for showing or hiding the password. The form also includes a submit button that calls the `signIn` function on submit.

## Register

This is a React component for a registration form that allows users to sign up for an account.

### useState, useMemo & useReducer

The component uses several React hooks, including `useReducer`, `useState`, and `useMemo`.

`useReducer` is used to manage state for the form inputs. The initial state is set with empty strings for the first name, last name, email, password, and password confirmation. The `reducer` function is used to update the state based on specific actions.

`useState` is used to manage state for any errors that occur during form submission. The initial state is set to an empty string.

`useMemo` is used to memoize a function that makes an HTTP request to the server to check if the user is already authenticated. The function is only re-evaluated if the value of the `localStorage.getItem("token")` changes.

### singUp function & jsx

The `singUp` function is defined to handle form submission. It prevents the default form submission behavior, creates a new instance of `FormData` to store the form data, adds the form data to the `FormData` object, and makes a POST request to register the user with the server. If there are any errors, the `setErr` function is called to update the error state variable.

The JSX code renders a form with input fields for the first name, last name, email, password, and password confirmation. The input fields are bound to the state variables using the `value` attribute and the `onChange` attribute is used to call the `setUser` function to update the state. When the form is submitted, the `singUp` function is called. If there are any errors, the `err` variable is displayed to the user.

# Laravel

## Controller

## RegisterController

This controller is responsible for handling user registration.

### Methods

#### `__construct()`

Constructor method.

#### `register(Request $request)`

Handle a registration request for the application.

##### Parameters

-   `$request` (`Illuminate\Http\Request`): The HTTP request instance.

##### Returns

-   `Illuminate\Http\JsonResponse`: A JSON response containing a message indicating if the registration was successful, the user data, and an authentication token.

## LoginController

The `LoginController` class is responsible for handling the authentication process for users.

### Methods:

-   `__construct()` - Constructor for the `LoginController` class.
-   `login(Request $request)` - Authenticate a user and generate a token.

Both methods are described in detail below.

#### `__construct()`

Constructor for the `LoginController` class.

#### `login(Request $request)`

This method authenticates a user by checking the provided email and password, and generates a token for the user upon successful authentication.

##### Parameters

-   `$request` - The incoming request object.

##### Return Value

A `JsonResponse` object containing a success/failure message, user data, and token information.

# Logout Controller

This PHP code defines a controller named `LogoutController` that handles user logout functionality in a web application. The code is defined in the `App\Http\Controllers\Auth` namespace.

## Methods

### \_\_construct()

The `__construct()` method is left empty intentionally, and it is used to instantiate the `LogoutController` class.

### logout()

The `logout()` method handles the user logout functionality. It takes an instance of the `Request` class as an argument, which represents the incoming HTTP request.

The method first uses the `Auth` facade to get the currently authenticated user and deletes their current access token by calling the `currentAccessToken()` method and then the `delete()` method on it.
