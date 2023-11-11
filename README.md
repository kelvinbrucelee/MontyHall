# Monty Hall

![Image Alt Text](./assets/img/start-monty-hall.png)
![Image Alt Text](./assets/img/start-door.png)

The basic situation of the game is as follows:
1. The participant chooses one of the doors closed to him.
2. The host, Monty Hall, who knows where the prize is, opens one of the other two doors to reveal a door with no prize.
3. The participant then has the option of keeping the original door selected or switching to another door that is still closed. The point is: the participant has a statistical advantage if they choose to change doors.

# Getting Started

>**Note**: Project Monty Hall created in [NextJs](https://nextjs.org/docs).


## Step 1: Install Node Modules

```bash
# using npm
npm install node
```

## Step 2: Start Project

```bash
# using npm
npm run dev
```

## Congratulations! :tada:

Congratulations, you successfully executed the MontyHall project! :partying_face:

- The development server will start at [http://localhost:3000](http://localhost:3000).

## project structure

```MontyHall/
|-- .next/
|-- assets/
|   |-- img/
|-- node_modules/
|-- public/
|-- src/
|   |-- components/
|   |   |-- Card.tsx
|   |   |-- Door.tsx
|   |   |-- Gift.tsx
|   |   |-- NumericInput.tsx
|   |-- functions/
|   |   |-- doors.ts
|   |-- model/
|   |   |-- Door.ts
|   |-- pages/
|   |   |-- api/
|   |   |-- game/
|   |   |   |-- [door]/
|   |   |   |   |-- [giftDoor]/
|   |   |   |   |   |-- index.jsx
|   |   |-- _app.js
|   |   |-- index.jsx
|   |-- styles/
|   |   |-- Card.module.css
|   |   |-- Door.module.css
|   |   |-- Form.module.css
|   |   |-- Game.module.css
|   |   |-- Gift.module.css
|   |   |-- global.module.css
|   |   |-- NumericInput.module.css
|   |-- animation.json
|   |-- index.js
|-- .gitignore
|-- jsconfig.json
|-- next-env.d.ts
|-- next.config.js
|-- package-lock.json
|-- package.json
|-- README.md
|-- tsconfig.json
```