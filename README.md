# React Challenge

This repository contains my solution to the React challenge given by newscorp.au. The challenge is to build a list of news articles that is taken from a JSON feed (simulated from  Content API (CAPI) data).

## Installation Instructions

To run this project locally, follow these steps:

1. Make sure you have Node.js installed (version 12 or above)

2. Clone this repository to your local machine using the following command:
    
    __git clone__ https://github.com/priyankajakob/newscorpau-fe-code-test-master.git
    
3. Navigate to the project directory : 
   __cd newscorpau-fe-code-test-master__
   
4. Switch to the __main__ branch 

5. Install the dependencies using npm :
   __npm install__

6. Start the development server :
   __npm start__
   

The application will be running at [http://localhost:3000](http://localhost:3000).

Note : Currently only "/" and "/articles" relative path are supported to show list of articles. Navigating to any other path will give an error. 

## Project Structure

The project follows the following structure:

```
- src
      - api
      - app
      - components
      - constants
      - pages
      - routes
- public
      - index.html
      - capi.json
      ....(other assets)

```
- The `components` directory contains reusable components used in the application.
- The `List` component renders the list of articles.
- The `ListSection` component represents an individual list(/article) item.
- This `ListSection` component reuses other reusable components.
- There are more components present like Header, Content, Error, Thumbnail etc.
- The `pages` directory contains react components used for rendering the pages in the application. Currently it contains react component for rendering the articles page.
- The `api` directory contains the api service calls. 
- The `routes` directory holds the routing structure/flow defined for the applciation.
- The `constants` directory contains the constants (like error messages etc.) used in the application.

## Features

- View News Articles 

For each article an Headline, Standfirst, Thumbnail, Byline, Date (__live date__ of the article) are shown in UI.

- Clicking on the __headline__ of any article will navigate to the newscorp.au individual article page (redirects to article's canonical link)

- Navigate to other __pages__ to view more articles

Four articles at a time are currently rendered to screen - this is configurable by changing the value in constants file. 


__Additional__
- Show error message on navigating to incorrect urls
- Show error message in case if any issue occured while loading the articles from the mocked json
- Show no records found message in case no articles are present in the mocked json

__Note : Currently the mocked json is read as an api. This could help to easily integrate the UI with any api call in future.__

![Articles_List_Screenshot](https://github.com/priyankajakob/newscorpau-fe-code-test-master/assets/50093965/c8294507-e04b-4065-8cfc-8015ab398b5a)

## Code Architecture and Design Choices

- The project follows a __component-based architecture__, separating the UI into reusable components for better maintainability and reusability.
- I used __React hooks__ (e.g., `useState`, `useEffect`) to manage state and side effects.
- For styling, I utilized __Material UI__ for styling Headers, __Pagination__, Text etc. and added styles for component-specific styles
- For images, I have used __react-lazy-load-image-component__ npm package for lazy loading the images

## Testing

I have included unit tests using the __Jest framework and react testing library__ to ensure the correctness of the components and their behavior. To run the tests, use the following command: 
* __npm test__


## Contact Information

If you have any questions or feedback, please reach out to me at [here](mailto:priyanka.jacob93@gmail.com).

