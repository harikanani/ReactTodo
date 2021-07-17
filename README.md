![Logo](images/logo.png)

# Todo App

A Simple Todo App build using ReactJS and Hosted on Firebase.
It uses firestore for database.
it uses firebase hosting to host this app.

## Installation

Clone this Repository Locally

```bash
  git clone https://github.com/harikanani/ReactTodo.git
  cd ReactTodo
```

#### Install Dependencies

```bash
  npm install
```

#### configure changes

rename `firebase.config.example.js` file with `firebase.config.js`

and replace your config in `firebase.config.js` file.

#### Run Project Locally

```bash
    npm run start
        OR
    yarn start
```

## Tech Stack

**Client:** React, MaterialUI

**Server:** Firebase

## Demo

[![Watch the video](images/firebase-todo.mp4)](images/firebase-todo.mp4)

## Support

For support, email harikanani2003@gmail.com

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Deployment

To deploy this project run

```bash
  yarn build
  firebase login
  firebase init
  firebase deploy
```
