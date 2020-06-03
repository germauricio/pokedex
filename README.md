# pokedex
A pokedex app made with React and consuming PokeAPI

# How to Run this app

Clone this repo
```
git clone https://github.com/germauricio/pokedex.git
```
Then you get into the repo folder with the following command
```
cd pokedex
```

## Run with Docker

Build the docker image 
```
sudo docker build -t pokedex .
```

Run the image
```
sudo docker run -it -p 8080:80 pokedex 
```

It will work on your network, so when the terminal shows something like
```
Compiled successfully!

You can now view pokedex in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://172.17.0.2:3000

Note that the development build is not optimized.
To create a production build, use npm run build.
```

Ctrl+Click on http://172.17.0.2:3000 will work!

## Without Docker

### Requisites

Node version: 12.16.2

Npm version: 6.14.4

## Install and Run
```
npm i
npm start
```

# How to run tests
This app uses React Testing Library. To run tests use the following command
```
npm test
```
Now using CircleCI!
