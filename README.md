# react-node-yugabyte-template
A complete template to set up React with NodeJS and YugabyteDB

## Usage

To start the backend, run 

```
cd ./service
npm install
node ./index.js
```

To run the React app, run 

```
cd ./web
npm install
npm start
```

By default, the server runs on http://localhost:3001. This can be edited as needed in the api.json file in the root directory. 

Edit the ./service/ycql-access.json to lead to your instance of the Yugabyte DB, either locally, in a Docker container or in the cloud. Use credentials as required.

