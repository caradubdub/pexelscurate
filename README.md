Welcome! This is Pexels CurateApp, a curated photo app leveraging the Pexels API.
This app uses NextJS for rapid server-side rendered interfaces, and doesn't have many dependencies apart from styled-components used for styling, React, and fontawesome icons libraries.

## Getting Started

First install dependencies:

```bash
npm install
```

Get a pexels API key:
This will be required to get info from the Pexels API.
Follow instructions to sign up [https://www.pexels.com/onboarding](here) and copy your API key. Create a file at the root level called .env.local and add the api key like so:

```javascript
NEXT_PUBLIC_PEXELS = "your key in string here";
```

You can run the development server with:

```bash
npm run dev
```

...and open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To create an optimized production build, run:

```bash
npm run build
```

To start, run:

```bash
npm run start
```

To build and launch the on the local server in one step, run:

```bash
npm run launch
```

## Justification

Some justifications for the development choices I made:

-**NextJS**: I chose NextJS as the project brief required server side rendering and excellent app responsiveness and NextJS provides this "out of the box" allowing me to build quickly according to the specifications. While NextJS may have limitations for scalability, it definitely fit the bill for this project.

-**styled-components**: I used styled-components as it's my preferred way to spin up modular components styled with CSS. It's an easy way to use CSS in JavaScript with greater readability, and doesn't limit creativity (if I had the time to employ some for this project!)

## If I had more time...

There would be a few features I would implement if I had more time:

-Improve styling and the appearances of the images
-Add [https://typicode.github.io/husky/#/](husky) and leverage pre-commit hooks to format and test code before each commit.
-Add more tests for greater coverage, especially data received from API and every prop.
