# 🚗 Car Craft App 

Realised with `MERN` Stack
 
This is a car application where you can upload your cars and view other user's cars.

Accessing cars can be done by clicking on pages `Home`, `Catalog`and if you are a registered user, you'll be able to view your created cars from the `My Account` page.

The project has `Register`/`Login` functionality.<br/>

Non registered visitors can access the pages: `Home`, `Catalog`, `About`, `Contacts`.

If the visitor creates an account, he'll become user. The user can access the pages: `Home`, `Catalog`, `About`, `Contacts`, `Create Car`, `My Account`, `Edit`, `Delete` (`Edit` and `Delete` function only if the user is the creator of the car).

On the `Home` and `Catalog` page cars are displayed in card , containing information for the `model`, `make`,`year`, `category`, `engine` and `price` of the car.

The `Catalog` page also provides `Search` functionality where you can search by the make, model, year, category or engine.

In order to look more dynamic, the `Home` page shows 6 randomly chosen vehicles each time you click on it.

`Catalog`and `My cars` work almost the same.
Both visitors and users can see the `Details` button which redirects to the `Details` page of the certain car. If you are the creator of the car, you will see the `Edit` and `Delete` buttons.

Once registered, using the `Create Car` page takes you to a form which you can submit only after all the required information has been entered. There is a validation check if the make is a number.The year is a number between 1800 and the current year and the price is also a number. <br/>
`Edit` page lets you edit all the information and if its correct, gets you back on the `Details` page of the car.<br/>
If you wish to delete the car, just click on `Delete`.

The site takes you to the `Not Found` page if you try to access a non-existent url.

 ## ⚒  Built With <br/>

 #### `React - Frontend` <br/>
 ### `Node JS - Backend` <br/>
 ### `Mongo DB(Authentication)` <br/>
 ### `Express.js` <br/>
 ### `React Router v5`  <br/>
 ### `Fluent UI for the spinner`  <br/>
 ### `React Hooks`  <br/>
 ### `Context API (Keeping User Data)` <br/>
 ### `Custom HTML and CSS` <br/>
 ### `Error handling  and form data validation with React Toastify library`<br/>


## How to run the App

### `npm install` in the client and back-end directories

## Available Scripts

In the client directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## 

In the server directory, you can run:

### `npm start`

Runs the server on http://localhost:9999

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
