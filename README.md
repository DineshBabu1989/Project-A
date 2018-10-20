# Git-hub Dynamic Survey

The project involves a Dynamic form based on react and redux for state management. The form can have n number of pages with each page holding a single questionare. The questionare can have one of 3 input types.( 1. text field 2.select drop down 3.radio group). The form will have a final summary page which will hold all the questions along with answers. The form has navigation buttons to navigate across all pages and navigation can also be achieved via browser back / fwd buttons.A progress bar at the top helps visualise the percentage of survey completed. The Application is scalable and any number of pages can be added by modifying the PAGE DATA in actions.

## Getting Started

There are two methods for getting started with this repo.The app requires 2 terminal instances running in parallel.Terminal instance-1 can be used to install npm modules and to start the application. Terminal instance-2 can be used to watch-css changes and compile sass to css.

**if you are familar with git:**  
Checkout this repo, install dependencies, then start the gulp process with the following:

```
git clone
https://github.com/DineshBabu1989/project_a.git
```

On terminal instance -1

```
npm install
npm run build
npm start
```

On terminal instance -2

```
npm run watch-css
```

**if you are not familar with git:**

Click here then download the .zip file. Extract the contents of the zip file, then open your terminal,
change to the project directory, and:

On terminal instance -1

```
npm install
npm run build
npm start
```

On terminal instance -2

```
npm run watch-css
```

## Adding new pages

- Navigate to actions.js file
- There are 3 types of inputs
- 1.textField - generates a text field input
- 2.selectOption - generates a drop down selector
- 3.radioButton - generates a radio group

```
/* A sample page addition*/
{
      id: 3,
      question: "Can you please tell your gender",
      answer: "",
      type: "radioButton",
      options: ["male", "female", "unknown"]
    },
```

## Architecture of the application

- React on the front end to render UI and respond to front-end events
- Redux store to manage data from RESTful APIs
- Actions contain API calls to predefined API end points
- Reducers contain data from API calls in the form of objects

## Notable points about the project

- The tech stack used is Semantic HTML, React, Redux for state management,SASS, Autoprefixer.
- The concept of a single store and unidirectional data flow based redux architecture is followed.
- The project uses Semantic HTML in React using Fragment tags and BEM for naming CSS architectural naming conventions.
- The project has SASS set up with 7/1 folder structure for easing modularisation and maintainability of CSS.
- The app is fully responsive on all browsers and devices.
- The app is structured into components both functional and class-based.
- The container components bind UI events to action creators which are responsible for updating the app state by updating the corresponding reducer.
- The application state is passed as props to child components effectively rendering changes on the UI.

## Prerequisities

-You need to have node.js installed in your system.
--URL: https://nodejs.org/en/

## Built With

- React, Redux, Bootstrap-4, SASS, autoprefixer - Front-end
- node.js - The server side framework
- VsCode - Text Editor with prettier setup

## App demo

The app demo is deployed on heroku with out redux devtools extension
https://project1989.herokuapp.com/page/1

## Authors

- DINESH.B - FULL STACK DEVELOPER

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
