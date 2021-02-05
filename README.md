### Welcome!

Hello! This is a very basic MERN template I use when building applications. There are some projects which suit this style of template, and others that don't. I often completely re-write it, and wouldn't in a commercial setting, but it's a useful starting point for me and might be for you too :)

### Things to note

- This template uses Create React App (CRA)
- This template uses Mongoose, and assumes a connection to mongo ATLAS defined in _.env_. If you haven't used Atlas before, here's a useful [guide](https://docs.atlas.mongodb.com/getting-started)
- Remember to add .env to the .gitignore file
- a _.projectile_ file is included as I develop in Emacs
- Winston is used for logging on the server. Logs are stored in _server/logs_

### Running the code

- simpy clone the repo, go to the root directory and run _npm update && cd client && npm update_ to install packages
- **running full app (prod)**: _npm run start_ at project root
- **running full app (dev)**: _npm run build-and-start_ at project root
- **running individually (dev)**: _npm run start-alternate_ at project root, _npm start_ in client
