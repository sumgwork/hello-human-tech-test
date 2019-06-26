# The Movie Test, aka Cruise Strikes Back

## SCROLL DOWN FOR SOLUTION NOTES

![Cruisey](https://cdn1.thr.com/sites/default/files/imagecache/scale_crop_768_433/2017/06/risky_business_1983_05_-_h_2017.jpg)

## The Scenario

John Johnson hosts a weekly movie event with his local Tom Cruise Fan club called "John Johnsons Cruisey Movie Monday". He's asked you to build a website where he can either search for a specific movie or display a list of Tom Cruise's movies for his audience to select from.

## What we need you to do

1. Read the above for what's needed
2. Setup your react project. Feel free to pick the tools you'd want to use
3. Build a search component that connects to https://112qaej5y9.execute-api.ap-southeast-2.amazonaws.com/dev/graphql and can either search for a specific movie or display a list to match the criteria above
4. Push source code to this repo

### What we're looking for

1. Ability to build a React component from scratch
2. Integration with an API endpoint
3. Ability to style the component (without Bootstrap) feel free to style it how you want
4. Any cool things you feel like adding is a nice bonus

### Tech details

- GraphQL Endpoint: https://112qaej5y9.execute-api.ap-southeast-2.amazonaws.com/dev/graphql
- GraphQL Playground: https://fireql.dev/?url=https://112qaej5y9.execute-api.ap-southeast-2.amazonaws.com/dev/graphql
- Note: The MovieDB endpoint only allows 40 requests every 10 seconds

---

# Solution

## Setup

Clone the repo, and perform an npm install or yarn install to download the dependencies. To execute the application on local environment, please issue npm start or yarn start command.

## Tech Stack

### Scaffolding

This project has been bootstraped with create-react-app cli.

### Main Libraries

1. React
2. React Router DOM (for routing)
3. Apollo client (for GraphQL queries)
4. Styled Components (for theming and styling)

### Helper Libraries

downshift (search component from AirBnB)
lodash.debounce (for inducing delay between subsequent API calls)
moment (date function)
helmet (SEO)

## Highlights

1. Only functional components, no class based approach
2. Higher order functional component used for fetching GraphQL data
3. Search component uses useState hook for state management, wasn't there much scope of using other/custom hooks
4. No CSS file created, used CSS in JS approach
5. Layout based approach for structure and theming of the app
6. Demonstration of third party library Downshift from Airbnb, for search component. Eases with accessibility and keyboard controls.

## What's not been covered / What can be improved

Since the scope of project wasn't too elaborated, have tried to cover basic stuff while being cautious of time.

1. Test coverage for the application is yet to be done.
2. Have done only basic styling and slight responsiveness.
3. Server side rendering of the webpages not considered for this demo.
