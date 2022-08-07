# Week 3 Assessment

(This is a markdown .MD file, if you are reading this in vs-code, right click the file and select `Open Preview`)

#### Rules for this assessment

See `RULES.md`

#### Start time:

START_TIME

#### Deadline:

DEADLINE

#### How to make and submit your homework

- client repo
  - use `create-react-app` to scaffold a new react app
  - `create-react-app` will initialize a git repository for you, so don't make one yourself
  - Go to `github.com`
  - create a new `private` repository
  - make sure **NOT** to initialize with a readme / .gitignore as it will give you errors when you will try to push
  - use the SSH link to connect to GitHub with `git remote add origin`.
  - Push the initial version of your app created by `create-react-app` (to test)
- server repo
  - Go to `github.com`
  - create a new `private` repository
  - make sure **NOT** to initialize with a readme / .gitignore as it will give you errors when you will try to push
  - copy the git url it looks like: git@github.com:YOUR_USERNAME/YOUR_PROJECT_NAME.git
  - create a new project directory and intialize a new repository inside with `git init`.
  - use the SSH link to connect to GitHub with `git remote add origin`.
  - ignore the `node_modules` with a `.gitignore`
  - create a `package.json` using `npm init`
  - push the intial files to GitHub
  - start programming and building your server

## Learning goals & some tips

For transparency and clarity, these are the learning goals we will be testing:

- Creating components
- Composing components and passing them data via props
- Using `event listeners` and `event handlers`
- Designing and managing component local state with `useState` hook
- Using the `useEffect` hook to fetch data
- Using `react-router-dom` to make static and dynamic routes
- Lifting state to a parent component, and passing callback props to children
- Making controlled forms
- Mapping, filtering, finding & sorting arrays of objects
- Making an express server that serves JSON
- Using npm to install packages, run scripts and write your own npm scripts (e.g. npm run dev)
- Basic git usage, making commits, adding remote & pushing to master

If this sounds like a large list, it is, and it's because you've learned a tremendous amount of things these past week! Don't let it scare or overwhelm you though, you have seen all these things. Don't hesitate to use the reader, Google (Stack overflow), or the documentation links we provide below.

**TIP: Read the assignment carefully!** It is easy to accidentally deviate from an assignment, resulting in a frustrating homework experience. Taking the time to read the exercise can save you time and effort.

**TIP: Don't get stuck!** If you feel stuck, try taking a small walk, continuing on to a next step, or talking out loud about the problem you're facing (programmers call this "rubber-ducking"). Everybody can get stuck, but don't let it stop you.

## What are we building?

We are building a webapp for a real estate agency office called `reel estate`. It has 4 main pages

- A homepage with buttons and language options
- A page where customers can book a viewing of a property
- A page where customers can view and filter listings
- A page about the real estate agents with contact details

In addition we build the JSON api using express so our listings / agents data can be requested from a server.

## Api

The data for this app is already available through an api. This way you can build your entire app without having to have a working api yourself.

Overview of the entire api

https://my-json-server.typicode.com/Codaisseur/listings-agents-data/

Endpoints:

GET /agents

https://my-json-server.typicode.com/Codaisseur/listings-agents-data/agents

GET /listings

https://my-json-server.typicode.com/Codaisseur/listings-agents-data/listings

A JSON with all the data:

https://my-json-server.typicode.com/Codaisseur/listings-agents-data/db

## Wireframe

You will be provided with a wireframe that shows an overview of the app along with this README

## Features

### 1. As a customer I want to be able to navigate to different pages so I can find the information I am looking for

- The app should have navigation on all pages so customers can easily find what they are looking for
- The pages `Home`, `Listings` and `Schedule viewing` are static Routes
- The page `About us` has a dynamic route, it contains a route parameter for `language`

| Criteria                                                                 | Points |
| ------------------------------------------------------------------------ | ------ |
| 3 Static Routes are implemented using react router                       | 1      |
| There is 1 dynamic route implemented with a route parameter for language | 1      |
| Each route renders a different component                                 | 1      |
| A navbar can be used to navigate on all pages                            | 1      |
| The navbar indicates what page you are on                                | 1      |
| Total                                                                    | 5      |

Hint: to indicate what page a user is on use the `<NavLink />` component

https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/NavLink.md

**Note:** If you are unable to implement routing in the app, you may put (render) the components for all the other features in App.js without using Routing at all.

### 2. As an International customer I want to be able to select my language, so I can understand where to go

- The home page has 2 buttons
  - See listings: should link to the listings page
  - About us: should link to the about us page
- The homepage has a `select` input where customer can choose between 4 languages: English, Dutch, German & Spanish
- When the page loads, the buttons should have English text
- When a user selects a language, the text on the two buttons changes to the correct translation
- The button `About us` links to the about us page, the path depends on the current language selected
- Using the navigation bar to go to the about page will navigate to /about/English path

| Language Selected | See listings       | About us       | path of link to about page |
| ----------------- | ------------------ | -------------- | -------------------------- |
| English           | See listings       | About us       | /about/English             |
| Dutch             | Bekijk woningen    | Over ons       | /about/Dutch               |
| German            | Immobilienangebote | Über uns       | /about/German              |
| Spanish           | Venta propiedades  | Sobre nosotras | /about/Spanish             |

| Criteria                                                                           | Points |
| ---------------------------------------------------------------------------------- | ------ |
| 2 Buttons link to the correct pages                                                | 1      |
| A select input is displayed on the page, with 4 options for languages              | 1      |
| Selecting an option changes the text on the buttons                                | 1      |
| Translation of the buttons works correctly for all 4 languages                     | 1      |
| The `About us` button links to a different path depending on the language selected | 2      |
| Total                                                                              | 6      |

**Note:** Only the text of the buttons needs to be translated, other content on the page, e.g. title does not need to be translated

### 3. As a customer I want know who am I doing business with, so I can contact them

- There should be an `About us` page
- On the about page we display the real estate agents who work for `reel estate`
- There are two buttons linking to the `See Listings` and `Schedule viewing` pages
- Depending on which language a user has selected:
  - We only display agents that speak this language
  - The text of the button is translated into that language
- The data regarding the real estate agents is available through api

| path           | See listings       | Schedule a viewing     | agents        |
| -------------- | ------------------ | ---------------------- | ------------- |
| /about/English | See listings       | Schedule a viewing     | Clemmy, Helga |
| /about/Dutch   | Bekijk woningen    | Bezichtiging aanvragen | Helga         |
| /about/German  | Immobilienangebote | Exposé anforden        | Helga         |
| /about/Spanish | Venta viviendas    | Programe una cita      | Clemmy        |

GET /agents

https://my-json-server.typicode.com/Codaisseur/listings-agents-data/agents

| Criteria                                                                      | Points |
| ----------------------------------------------------------------------------- | ------ |
| Agents are displayed with their name, image, motto and email                  | 1      |
| The data for agents is fetched from the api, not hardcoded                    | 2      |
| Only agents that speak the language specified in the path are displayed       | 2      |
| Which agents to display is determined using Array.filter, not hardcoded       | 2      |
| The buttons link to the correct pages                                         | 1      |
| The text on the 2 buttons is translated to the language specified in the path | 1      |
| The value of the language is hardcoded, not dynamically taken from the path   | -1     |
| Total                                                                         | 9      |

**Note:** If you are unable to determine the for language in the path using the route parameter, hardcode a value for language and implement the behaviour that way

**Note:** Only the text of the buttons needs to be translated, other content on the page, e.g. title does not need to be translated

### 4. As a customer I want to be able to schedule a viewing, so I can see the property in real life before I buy it

- On our schedule a viewing page customers can fill in a form to schedule a viewing
- Once the form is submitted we want to give the user some confirmation everything went well
- We will not actually store the data, console.logging the data from the form to console is good enough for now
- The data for listings addresses is available through api

GET /listings

https://my-json-server.typicode.com/Codaisseur/listings-agents-data/listings

| Criteria                                                                   | Points |
| -------------------------------------------------------------------------- | ------ |
| A form is displayed on the schedule a view page                            | 1      |
| The form has inputs for name, email, phone                                 | 0.5    |
| The form has a select input for listing address, and a date input for date | 0.5    |
| The state of the form is controlled using React useState hook(s)           | 2      |
| When the form is submitted, the user input for all form fields is logged   | 2      |
| When the form has been submitted, we show a success message to the user    | 2      |
| The options for listing addresses are fetched from the api, not hardcoded  | 2      |
| The success message is an alert, prompt or confirm popup                   | -1     |
| There is a warning in the console regarding "key" props                    | -1     |
| Submitting the form refreshes the page                                     | -2     |
| Total                                                                      | 10     |

### 5. As a customer I want to be able to view and filter property listings, so I can find a property according to my needs

- We want to display the listings we have available with their details
- The listings are sorted by price from cheap to expensive
- In order to make it easy for users to find properties within their budget and space needs, there are 2 sliders for `budget` (refers to priceEuro in the listings) and `floor space` (refers to m2 in the listings).
- The value of the `budget` slider is the `maximum` budget for the user. We should filter out all listings that are more expensive than the value of the slider.
- The value of the `floor space` slider is the `minimum` floor space for this user. We should filter out all listings that have less m2 than the value of the slider.
- The minimum and maximum values for both sliders should depend on the data we have. For example, if the cheapest property 161000, the minimum value of the budget slider should be 161000. If the biggest property is 103 m2 the maximum value of the floor space slider should be 103.
- Ideally these minimum and maximum values are not hardcoded but depend on the data we have fetched from the api.

**Hint:** Make the sliders using `<input type="range">`, documentation on it can be found on [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range)

**Hint:** You might have to google how get minimum and maximum values using javascript

| Criteria                                                             | Points |
| -------------------------------------------------------------------- | ------ |
| The address, price, m2, bedRooms, is displayed for all listings      | 1      |
| The data for each listing is displayed using a separate component    | 2      |
| The data is displayed using .map                                     | 1      |
| There is a warning in the console regarding "key" props              | -1     |
| Listings are sorted by priceEuro                                     | 1      |
| The data is fetched from the api, not hardcoded                      | 1      |
| There are 2 sliders, one for budget & one for floor space            | 1      |
| The slider for budget has a min and max value                        | 0.5    |
| The slider for floor space has a min and max value                   | 0.5    |
| Moving a slider for budget filters listings which are too expensive  | 2      |
| Moving a slider for floor space filters listings which are too small | 2      |
| The properties are filtered using something other than .filter       | -2     |
| The min and max values for the sliders are dynamic, not hardcoded    | 3      |
| Total                                                                | 15     |

### 6. Express server

- So far we've been using the api which is already online. We can also create this api ourselves using express.
- Your React can make use of the api which is already online, your React app does not have to fetch data from your own api.
- Your own express api should return the same data as the one that is already online.
- All api endpoints should respond with JSON (not HTML)
- The entire set of data from the api is available from the following api endpoint:

https://my-json-server.typicode.com/Codaisseur/listings-agents-data/db

- We want to implement one extra route that is not part of the online api: `/agents/:language`, which responds which agents that speak that language

Example:

- request: http://localhost:4000/agents/Catalan
- response:

```json
[
  {
    "id": 1,
    "firstName": "Clemmy",
    "lastName": "Soulsby",
    "email": "csoulsby@reelestate.nl",
    "phoneNumber": "+7 269 520 0268",
    "languages": ["English", "Catalan", "Spanish", "French"],
    "motto": "envisioneer mission-critical interfaces",
    "imageUrl": "https://azbigmedia.com/wp-content/uploads/2018/11/real-estate-agent.jpg"
  }
]
```

- request: http://localhost:4000/agents/English
- response:

```json
[
  {
    "id": 1,
    "firstName": "Clemmy",
    "lastName": "Soulsby",
    "email": "csoulsby@reelestate.nl",
    "phoneNumber": "+7 269 520 0268",
    "languages": ["English", "Catalan", "Spanish", "French"],
    "motto": "envisioneer mission-critical interfaces",
    "imageUrl": "https://azbigmedia.com/wp-content/uploads/2018/11/real-estate-agent.jpg"
  },
  {
    "id": 2,
    "firstName": "Helga",
    "lastName": "Spracklin",
    "email": "hspracklin@reelestate.nl",
    "phoneNumber": "+56 413 467 0171",
    "languages": ["English", "Dutch", "Bislama", "German"],
    "motto": "deliver next-generation synergy",
    "imageUrl": "https://homezlog.com/wp-content/uploads/2019/07/realtor.jpg"
  }
]
```

- request: http://localhost:4000/agents/Swedish
- reponse:

```json
[]
```

| Criteria                                                                                                       | Points |
| -------------------------------------------------------------------------------------------------------------- | ------ |
| There is a file called server.js & a package.json, in your server repository                                   | 0.5    |
| package.json contains a script called `server`, which runs the server.js file with node                        | 0.5    |
| package.json contains a script called `server-dev`, which runs the server.js file with nodemon                 | 0.5    |
| running server.js starts an express server which listens on port 4000                                          | 1      |
| Requests to http://localhost:4000/listings get a response of an array with 10 listings                         | 1      |
| Requests to http://localhost:4000/agents get a response of an array of 2 agents                                | 1      |
| Requests to http://localhost:4000/agents/:language get a response of an array of agents speaking that language | 2.5    |
| More than 1 route is used to implement http://localhost:4000/agents/:language                                  | -1     |
| Total                                                                                                          | 7      |

### 7. Styling

- Apply some styling to this app using CSS to make it look better

| Criteria                                                               | Points |
| ---------------------------------------------------------------------- | ------ |
| Student has applied at least 5 style rules                             | 1      |
| Styles are split up across at least 2 css files created by the student | 1      |
| Total                                                                  | 2      |

### 8. Finishing up

- Self assess:
  - Make a file called `ASSESSMENT.md`
  - Copy the rubric below into it
  - Score your assessment in the column `Self`
  - Leave room for the evaluator to fill in the `Evaluator` column
- Write a reflection about this assessment & your learning process in `REFLECTION.md`:
  - What did you do well, process wise
  - What would you do differently next time to improve, process wise
- Commit your code and use messages when you commit, push it to your repository using `git push origin master`

| Criteria                                                                         | Points |
| -------------------------------------------------------------------------------- | ------ |
| Student performed an accurate self assessment (within 7 points of the evaluator) | 2      |
| Student can reflect on their process by writing a reflection of ~200 words       | 2      |
| Student has committed at least once per section                                  | 1      |
| Student has pushed their repository using git                                    | 1      |
| Total                                                                            | 6      |

### Self assessment

| Section             | Max Points | Self | Evaluator |
| ------------------- | ---------- | ---- | --------- |
| 1 Navigation        | 5          | 0/5  | 0/5       |
| 2 Home page buttons | 6          | 0/6  | 0/6       |
| 3 About us          | 9          | 0/9  | 0/9       |
| 4 Book viewing      | 10         | 0/10 | 0/10      |
| 5 View listings     | 15         | 0/15 | 0/15      |
| 6 Express server    | 7          | 0/7  | 0/7       |
| 7 Styling           | 2          | 0/2  | 0/2       |
| 8 Finishing up      | 6          | 0/6  | 0/6       |
| Total               | 60         | 0/60 | 0/60      |

| 1. Navigation - Criteria                                                 | Points | Self | Evaluator |
| ------------------------------------------------------------------------ | ------ | ---- | --------- |
| 3 Static Routes are implemented using react router                       | 1      |
| There is 1 dynamic route implemented with a route parameter for language | 1      |
| Each route renders a different component                                 | 1      |
| A navbar can be used to navigate on all pages                            | 1      |
| The navbar indicates what page you are on                                | 1      |
| Total                                                                    | 5      |

| 2. Home page buttons - Criteria                                                    | Points | Self | Evaluator |
| ---------------------------------------------------------------------------------- | ------ | ---- | --------- |
| 2 Buttons link to the correct pages                                                | 1      |      |           |
| A select input is displayed on the page, with 4 options for languages              | 1      |      |           |
| Selecting an option changes the text on the buttons                                | 1      |      |           |
| Translation of the buttons works correctly for all 4 languages                     | 1      |      |           |
| The `About us` button links to a different path depending on the language selected | 2      |      |           |
| Total                                                                              | 6      |      |           |

| 3. About us - Criteria                                                        | Points | Self | Evaluator |
| ----------------------------------------------------------------------------- | ------ | ---- | --------- |
| Agents are displayed with their name, image, motto and email                  | 1      |      |           |
| The data for agents is fetched from the api, not hardcoded                    | 2      |      |           |
| Only agents that speak the language specified in the path are displayed       | 2      |      |           |
| Which agents to display is determined using Array.filter, not hardcoded       | 2      |      |           |
| The buttons link to the correct pages                                         | 1      |      |           |
| The text on the 2 buttons is translated to the language specified in the path | 1      |      |           |
| There is a warning in the console regarding "key" props                       | -1     |      |           |
| The value of the language is hardcoded, not dynamically taken from the path   | -1     |      |           |
| Total                                                                         | 9      |      |           |

| 4. Book viewing - Criteria                                                 | Points | Self | Evaluator |
| -------------------------------------------------------------------------- | ------ | ---- | --------- |
| A form is displayed on the schedule a view page                            | 1      |      |           |
| The form has inputs for name, email, phone                                 | 0.5    |      |           |
| The form has a select input for listing address, and a date input for date | 0.5    |      |           |
| The state of the form is controlled using React useState hook(s)           | 2      |      |           |
| When the form is submitted, the user input for all form fields is logged   | 2      |      |           |
| When the form has been submitted, we show a success message to the user    | 2      |      |           |
| The options for listing addresses are fetched from the api, not hardcoded  | 2      |      |           |
| The success message is an alert, prompt or confirm popup                   | -1     |      |           |
| There is a warning in the console regarding "key" props                    | -1     |      |           |
| Submitting the form refreshes the page                                     | -2     |      |           |
| Total                                                                      | 10     |      |           |

| 5. View listings - Criteria                                          | Points | Self | Evaluator |
| -------------------------------------------------------------------- | ------ | ---- | --------- |
| The address, price, m2, bedRooms, is displayed for all listings      | 1      |      |           |
| The data for each listing is displayed using a separate component    | 2      |      |           |
| The data is displayed using .map                                     | 1      |      |           |
| There is a warning in the console regarding "key" props              | -1     |      |           |
| Listings are sorted by priceEuro                                     | 1      |      |           |
| The data is fetched from the api, not hardcoded                      | 1      |      |           |
| There are 2 sliders, one for budget & one for floor space            | 1      |      |           |
| The slider for budget has a min and max value                        | 0.5    |      |           |
| The slider for floor space has a min and max value                   | 0.5    |      |           |
| Moving a slider for budget filters listings which are too expensive  | 2      |      |           |
| Moving a slider for floor space filters listings which are too small | 2      |      |           |
| The properties are filtered using something other than .filter       | -2     |      |           |
| The min and max values for the sliders are dynamic, not hardcoded    | 3      |      |           |
| Total                                                                | 15     |      |           |

| 6. Express server - Criteria                                                                                   | Points | Self | Evaluator |
| -------------------------------------------------------------------------------------------------------------- | ------ | ---- | --------- |
| There is a file called server.js & a package.json, in your server repository                                   | 0.5    |      |           |
| package.json contains a script called `server`, which runs the server.js file with node                        | 0.5    |      |           |
| package.json contains a script called `server-dev`, which runs the server.js file with nodemon                 | 0.5    |      |           |
| running server.js starts an express server which listens on port 4000                                          | 1      |      |           |
| Requests to http://localhost:4000/listings get a response of an array with 10 listings                         | 1      |      |           |
| Requests to http://localhost:4000/agents get a response of an array of 2 agents                                | 1      |      |           |
| Requests to http://localhost:4000/agents/:language get a response of an array of agents speaking that language | 2.5    |      |           |
| More than 1 route is used to implement http://localhost:4000/agents/:language                                  | -1.5   |      |           |
| Total                                                                                                          | 7      |      |           |

| 7. Styling - Criteria                                                  | Points | Self | Evaluator |
| ---------------------------------------------------------------------- | ------ | ---- | --------- |
| Student has applied at least 5 style rules                             | 1      |      |           |
| Styles are split up across at least 2 css files created by the student | 1      |      |           |
| Total                                                                  | 2      |      |           |

| 8. Finishing up - Criteria                                                       | Points | Self | Evaluator |
| -------------------------------------------------------------------------------- | ------ | ---- | --------- |
| Student performed an accurate self assessment (within 7 points of the evaluator) | 2      |      |           |
| Student can reflect on their process by writing a reflection of ~200 words       | 2      |      |           |
| Student has committed at least once per section                                  | 1      |      |           |
| Student has pushed their repository using git                                    | 1      |      |           |
| Total                                                                            | 6      |      |           |
