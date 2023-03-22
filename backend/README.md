# Back end

...

## Available scripts

- `npm run build` (build project and send js code do `dist/`)
- `npm run start` (run builded application)
- `npm run dev` (watch/compile typescript files)

## Available endpoints:

- `http://localhost:8080/api/:locations`

  - `:locations` can receive: `worlds`, `neighborhoods` or `lots`
  - returns list of locations in that category

- `http://localhost:8080/api/:locations/:id`

  - `:id` can receive: the id of an especific location
  - returns details related to that location

- `http://localhost:8080/search?q=:query`
  - ...

## References:

- [How to setup TypeScript with Node.js and Express](https://blog.logrocket.com/how-to-set-up-node-typescript-express/)

## Some key steps

- `npm init`

- `npm i express`

  - create `.env` file and add the content:

    ```
    PORT=8080
    ```

- `npm i --D typescript`

  - `npx tsc --init` to generate a `tsconfig.json` file

    - add the following line to the file:

      ```
      "outdir": "./dist"`
      ```

  - `npm i --D @types/express @types/node`

  - `npm install -D concurrently nodemon`

  - add the following content to the list of `scripts` in `package.json`:

    ```
    "build": "npx tsc",
    "start": "node dist/index.js",
    "dev": "concurrently \"npx tsc --watch\" \"nodemon -q dist/index.js\""
    ```
