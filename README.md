# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Excercise

1. Clone the `task/exercise-start` branch.

```
git clone --branch task/exercise-start git@github.com:andylangridge/github-actions-demo.git
```

2. [Create your own GitHub repo](https://docs.github.com/en/get-started/quickstart/create-a-repo) and point the newly cloned project at your repository.

```
git remote set-url origin <your_github_repository_url>
git branch -m main
```

3. Create a `.github/workflows` directory at the root of the project.
4. Add a simple `pipeline.yml` file which does the following:
    1. Runs on pushes to branch `main`
    2. Includes a build/test job and a deployment job
    3. Builds the app
    4. Runs linting
    5. Runs tests
    6. Passes the build artifact from the build/test job to the deployment job
    7. Deploys the app\
       *Note:* To simplify things you may wish to use the pre-built GitHub Action to do the deployment, or else npm runs into authentication issues - https://github.com/peaceiris/actions-gh-pages
5. Pushing code to `main` should trigger the pipeline and deploy to your GitHub Pages URL - `http://<gh_username>.github.io/<gh_repository_name>`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run lint`

Launches the linting tool ESlint, which will analyse the code and identify and report on patterns with the goal of making code more consistent and avoiding bugs.\
See [the documentation](https://eslint.org/docs/user-guide/getting-started) for more information.

The tool is configured in the `.eslintrc.json` file.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run deploy`

Deploys the app to GitHub pages using the `homepage` key in the `package.json` file. Uses the `gh-pages` cli tool./
See [the documentation](https://www.npmjs.com/package/gh-pages) for more information.

User must have write permissions to the repo and GitHub Pages site specified in the `homepage` key.

For more information on GitHub Pages see [the documentation](https://pages.github.com/).

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
