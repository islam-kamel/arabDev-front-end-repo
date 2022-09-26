# ArabiansDevWorld (_Frontend_)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## How to add path alise

```javascript
module.exports = {
  webpack: {
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      pages: path.resolve(__dirname, 'src/pages'),
      new_alise: path.resolve(__dirname, 'path'),
    },
  },
}
```

Now You Can Import components From Anywhere Just Type `'components/<your-component>'`

---

## How to Create Button

```jsx
import CreateButton from 'components/buttons/CreateButton'
;<CreateButton text="Added SomeText" />
```

### Attribute

#### **className**

You Can Add Custom CSS Classes
such `className="login-with-google-btn md:w-[90%] w-[60%] justify-center mx-auto mt-9"`

---

#### **icon**

You Can Add Path For Icon Or FortAwesome Icon
such `icon={faGithub}`
if using FortAwesome set `fontAwesomeIcon={true}`

```jsx
<CreateButton text="Hello, Icon" icon={faGithub} fontAwesomeIcon={true} />
```

#### **alt**

If Using Icon From Path or HyperLink You Can Set `alt={"Your Text"}`

---

#### **href**

If You Need Added HyperLink In You Button Use `href="Your Link"`

---

#### **onClick**

Support onClick Event

---

#### **type**

You Can Set Custom Type, Value `button` by default
