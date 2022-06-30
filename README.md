# Getting Started with client side setup

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) TS template.

## Available Scripts

In the project directory, you can run:

```bash
$ cd client
$ npm install
$ npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

# Getting Started with server side setup

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ cd server
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## License

Nest is [MIT licensed](LICENSE).

# Getting Started with database setup

## In this we are using MongoDB. Please check this [Link](https://www.mongodb.com/docs/manual/administration/install-community/) to setup your mongodb locally

### Run MongoDB Community Edition on Ubuntu

#### 1. Start MongoDB.
```bash
sudo service mongod start
```

#### 2. Verify that MongoDB has started successfully
```bash
sudo service mongod status
```

#### 3. Stop MongoDB.
```bash
sudo service mongod stop
```

#### 4. Restart MongoDB.
```bash
sudo service mongod restart
```

### Connection URI
```bash
mongodb://localhost:27017
```

### Database Name: moviedb

### Setup Dummy Data using MongoDB Compass
```bash
1. cd db
2. import movies and users collection using MongoDB Compass
```
### Or you can add initial user using below API
```bash
url: http://localhost:5000/users/signup
method: POST
body: {
    "username":"Admin",
    "password":"123456"
}
```

### Then you can add movies from [UI](http://localhost:3000/movies/add)


