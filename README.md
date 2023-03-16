## Copyright

© 2023 Interior Design | All Rights Reserved

-   [Privacy Policy](#)

-   [Cookie Policy](#)

-   [Terms of Use](#)

Develope by - [**Min Khant Saw**](https://www.facebook.com/min.k.saw.4)

## Tech Stack

**Client:** React, ReduxToolkit, TailwindCSS, ReactQuery

**Server:** Laravel

## Installation

Install project with npm and composer

```bash
php artisan migrate

php artisan queue:work

composer i && php artisan serve

cd  interior-design/frontend

npm i && npm run dev
```

# React Js

## Components

# Navbar

The `Navbar` component is a React functional component that renders a responsive navigation bar with a hamburger menu icon that toggles a sidebar menu.

## Example

The following example demonstrates how to use the `Navbar` component:

`<Navbar />`

When rendered, this will display a navigation bar with a hamburger menu icon that toggles a sidebar menu. The sidebar menu includes links to Projects, Shop, About Us, Contact us, Services, Blog, Login, and Sign Up pages.

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

## Main Component

This component is a functional component that displays a subscription form and an image preview.

### Props

-   `setSubscribelog`: A function to set the subscription log message.

### State

-   `error`: A string to hold an error message, if any.

-   `email`: A string to hold the email address entered by the user.

### Hooks

-   `useMemo`: This hook is used to perform a GET request when the token in local storage changes.

### Functions

-   `subscribe`: This function is called when the user submits the email subscription form. It appends the email to a `FormData` object and sends a POST request to the `/subscribe` endpoint with the form data.

### Rendered Output

The component returns a `div` element containing conditional rendering based on the `error` state. If the error is equal to `"Request failed with status code 401"`, it displays a message asking the user to sign up and a button to redirect the user to the registration page.

Below that, there is a `form` element containing an input field to capture the email address and a button to submit the email subscription. When the user submits the form, the `subscribe` function is called. Finally, there is an image preview displayed on the right side of the screen, which is hidden on smaller screens.

## Code Description

This is a React functional component named `Main`. It renders a subscription form and an image preview based on the state of the Redux store.

## Component Structure

-   The `Main` component consists of two main parts:

    1.  A conditional block that renders a message and a "Sign Up" button if the `validUser` property in the Redux store equals `"Request failed with status code 401"`.
    2.  A `Subscribe` component and an image preview.

-   The `Subscribe` component receives custom font sizes through the `fz_1` and `fz_2` props.
-   The image preview is only shown on smaller screens (`max-lg:hidden`) and is positioned to the right of the `Subscribe` component using `ml-auto` and `translate-x-60`.

## Header Component

This component represents the header section of the website. It is responsible for displaying an image along with text overlay on top of it. The text overlay consists of a title, description, and a "See more" button. The image is loaded lazily using the `LazyLoadImage` component from the `react-lazy-load-image-component` library.

### Props

-   `data`: An object that contains information about the header section, such as the image URL, title, and description.

## Mix Component

The Mix component displays a section with a title "in the mix" and a grid of designs fetched from a data source. Each design has an image, title, and short description.

### Props

-   `data`: an object that contains an array of pages, each of which contains an array of designs. The design array has properties like `image`, `title`, and `description`.

### Rendering

The Mix component will render a section with the following structure:

-   A title "in the mix"
-   A grid of designs fetched from the `data` source, with each design having:
    -   An image
    -   A title (clickable)
    -   A short description

The grid is responsive, with 3 columns on larger screens, 2 columns on medium screens, and 1 column on small screens.

## TopDesign Component

This component displays the most recent top design.

### Props

-   `data`: object - object containing data to be rendered

### Returns

-   `JSX.Element`

## Project Component

This component displays an image with a text overlay and a "See more" button. It uses the `useInfiniteQuery` hook from the `react-query` library to fetch data from an API endpoint and display it.

The component starts by defining the `project` function which makes a GET request to the API endpoint for the data. This function is passed to `useInfiniteQuery` as the `queryFn` parameter, which tells `react-query` how to fetch the data. `useInfiniteQuery` returns an object containing information about the state of the query, including the `data`, `error`, `fetchNextPage`, `hasNextPage`, `isFetching`, `isFetchingNextPage`, and `status` properties.

The `ImageOverlay` component also defines a `containerRef` using the `useRef` hook, which is used to observe when the user scrolls to the bottom of the page and trigger a new data fetch.

In the `useEffect` hook, the `data` object is checked to see if it contains a `next_page_url` property. If it does, an `IntersectionObserver` is created to observe the `containerRef` and trigger a new data fetch when the user scrolls to the bottom of the page.

The `ImageOverlay` component then renders the container for the image and text overlay, as well as the "See more" button. If the query is still loading, it displays a loading spinner, and if there's an error, it displays the error message.

Overall, the `ImageOverlay` component is responsible for fetching and displaying data from an API endpoint using `react-query`.

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

## Logout Controller

This PHP code defines a controller named `LogoutController` that handles user logout functionality in a web application. The code is defined in the `App\Http\Controllers\Auth` namespace.

## Methods

### \_\_construct()

The `__construct()` method is left empty intentionally, and it is used to instantiate the `LogoutController` class.

### logout()

The `logout()` method handles the user logout functionality. It takes an instance of the `Request` class as an argument, which represents the incoming HTTP request.

The method first uses the `Auth` facade to get the currently authenticated user and deletes their current access token by calling the `currentAccessToken()` method and then the `delete()` method on it.

# Subscribe Mail

This is a Laravel mailable class for sending subscription confirmation emails.

## Methods

### `envelope()`

This method returns an Envelope instance, which represents the message envelope. It contains information about the email's recipient, sender, subject, etc.

### `content()`

This method returns a Content instance, which represents the message content. In this case, it's a markdown template that will be used to render the email's body.

### `attachments()`

This method returns an array of Attachment instances. Attachments can be files or other resources that are attached to the email message. In this case, there are no attachments, so an empty array is returned.

# Subscribe Controller

This is a Laravel controller for handling subscription requests.

## Methods

### `__construct()`

This is the constructor for the `SubscribeController` class. In this case, it's empty because there's no initialization code that needs to be run.

### `subscribe(Request $request)`

This method handles the "subscribe" endpoint. It accepts a POST request with an "email" parameter, validates it, creates a new "subscribe" record in the database, and then dispatches a job to send a confirmation email to the subscriber.

The method contains the following steps:

1.  Validate the request input data. It should contain an "email" parameter that is a string with a maximum length of 255 characters, and it should not already exist in the "subscribes" table.
2.  If the input data is valid, create a new "subscribe" record in the database using the "Subscrebe" model, which represents the "subscribes" table in the database.
3.  Dispatch a new job to send a confirmation email to the subscriber using the "SubscribeJob" class. The job takes the subscriber's email as its only parameter.
4.  Return a JSON response indicating that the request was successful.

# Subscribe Job

This is a Laravel job that sends a confirmation email to a subscriber.

## Properties

### `$mail`

This property holds the email address of the subscriber.

## Methods

### `__construct($mail)`

This is the constructor for the `SubscribeJob` class. It takes the subscriber's email address as its only parameter and stores it in the `$mail` property.

### `handle()`

This method is called when the job is executed. It sends a confirmation email to the subscriber using the `Mail` facade and the `SubscribeMail` Mailable class.

The method contains the following steps:

1.  Retrieve the `$mail` property to get the email address of the subscriber.
2.  Send a confirmation email to the subscriber using the `Mail::to()` method, passing in the email address and a new instance of the `SubscribeMail` Mailable class as arguments.

## PHP Room Design Controller

This PHP class is a Laravel controller that handles requests related to creating and retrieving room designs. It provides two methods:

-   `addNewDesign()`: This method validates a request to add a new room design and saves the uploaded image to a Dropbox disk. It then creates a new `RoomDesign` model with the uploaded image filename and returns it in the response.
-   `getDesign()`: This method retrieves all room designs from the database, including their associated user information. It then maps the image URL for each design and returns them in the response.

The `RoomDesignController` class also has a constructor, which is currently empty.
