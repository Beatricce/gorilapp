# General Instructions & Overview
This app was created to show a dashboard that allows you to input some data about a new investment then the app returns a graph showing the percents of said data.

To run the app locally, clone it then read the instructions in 'React Instructions'. The remote version is in https://master.d1n3yyhx60ys1r.amplifyapp.com (Don't overrun it pls, I'm paying for this ;-;)

There's a login page, the super secret user is {username: "admin, pass: "asenhamaisfacildomundo"}

The gorilapp_back folder has the code for the creation of an api that allows me to create, get and remove an investment. For running it locally, change the config.js file to your localhost + the docker port for MongoDB (usually it is 27017). Run it with 'yarn start' too.

Happy hacking!

![Screenshot] (screenshot.png)


# React Intructions

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
