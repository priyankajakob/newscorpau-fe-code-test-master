# React Challenge

This repository contains my solution to the React challenge given by newscorp.au. The challenge is to build a list of news articles that is taken from a JSON feed (simulated from Content API (CAPI) data).

## Installation Instructions

To run this project locally, follow these steps:

1. Make sure you have Node.js installed (version 12 or above)

2. Clone this repository to your local machine using the following command:

   **git clone** https://github.com/priyankajakob/newscorpau-fe-code-test-master.git

3. Navigate to the project directory :
   **cd newscorpau-fe-code-test-master**

4. Install the dependencies using npm :
   **npm install**

5. Start the development server :
   **npm start**

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

For each article an Headline, Standfirst, Thumbnail, Byline, Date (**live date** of the article) are shown in UI.

- Clicking on the **headline** of any article will navigate to the newscorp.au individual article page (redirects to article's canonical link)

- Clicking on "...read more..." will show a brief introduction of the articles

- Navigate to other **pages** to view more articles

Four articles at a time are currently rendered to screen - this is configurable by changing the value in constants file.

**Additional**

- Show error message on navigating to incorrect urls
- Show error message in case if any issue occured while loading the articles from the mocked json
- Show no records found message in case no articles are present in the mocked json

**Note : Currently the mocked json is read as an api. This could help to easily integrate the UI with any api call in future.**

## Article List (Modified)

![Screenshot 2023-06-15 at 5 55 11 PM](https://github.com/priyankajakob/newscorpau-fe-code-test-master/assets/50093965/3df695e8-6ccb-4738-8581-a1fbd78166d3)

## Code Architecture and Design Choices

- The project follows a **component-based architecture**, separating the UI into reusable components for better maintainability and reusability.
- I used **React hooks** (e.g., `useState`, `useEffect`) to manage state and side effects.
- For styling, I utilized **Material UI** for styling Headers, **Pagination**, Text etc. and added styles for component-specific styles
- For images, I have used **react-lazy-load-image-component** npm package for lazy loading the images

## Testing

I have included unit tests using the **Jest framework and react testing library** to ensure the correctness of the components and their behavior. To run the tests, use the following command:

- **npm test**

## Contact Information

If you have any questions or feedback, please reach out to me at [here](mailto:priyanka.jacob93@gmail.com).
