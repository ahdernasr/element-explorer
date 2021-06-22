## Element-Explorer

Element-Explorer is an interactive periodic table made with React.js that shows the usual information of a periodic table but in a more visual manner.

It is also displays additional specific information on each element (i.e. density, atomic radius, etc.), as well as certain periodic trends (i.e. electronegativity, melting point, etc.)

This is AhuNasr#0113's submission for Timathon 2021 (June - July)

## How to use

`Hovering`

Hover over any element to magnify it in the preview box, and to see quick information in the information box.

`Key`

Click on the key which is directly under the label for group 13 to switch between the color key showing what group blocks the colors represent (i.e. halogens, transition metals, etc.) and a table showing information/data on the element. 

`Clicking Elements`

Click on any element to redirect to a page with more information on the chosen element.

You can also directly do:

https://link.com/info/{element-name}

or if you're locally hosting it

http://localhost:3000/info/{element-name}

`Trends`

Click on the trends menu at the right side of the navigation bar. Different chemical trends will appear, and simply select any of them to explore the different trends on the periodic table.

## Todo

- Better trend colours
- More info on element info page 
- Better responsiveness

## Dependencies

- @testing-library/jest-dom: ^5.11.4
- @testing-library/react: ^11.1.0
- @testing-library/user-event: ^12.1.10
- periodic-table: ^0.0.8
- react: ^17.0.2
- react-dom: ^17.0.2
- react-router-dom: ^5.2.0
- react-scripts: 4.0.3"
- web-vitals: ^1.0.1


## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.