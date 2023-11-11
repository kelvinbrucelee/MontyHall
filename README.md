# Monty Hall

![Image Alt Text](./assets/img/start-monty-hall.png)
![Image Alt Text](./assets/img/start-door.png)

```The Monty Hall Game is a mathematical problem and a probability-based game derived from a television show called "Let's Make a Deal," hosted by Monty Hall. The game became famous for challenging people's intuition and illustrating probability concepts.

The basic situation of the game is as follows:

1 - The participant chooses one of three closed doors.
2 - The host, Monty Hall, who knows where the prize (usually a car) and where the goats are, opens one of the other two doors to reveal a goat.
3 - The participant is then given the option to stick with the original door or switch to the other still-closed door.
The question is: does the participant have a statistical advantage if they choose to switch doors?

The answer is yes, and the logic behind it is based on probabilities. When the participant makes the initial choice, they have a 1/3 chance of picking the door with the car and a 2/3 chance of selecting a door with a goat. When the host reveals a goat behind one of the unchosen doors, the probability doesn't change, but the information does.

If the participant chooses to switch doors after the revelation, they are effectively trading their initial choice for a 2/3 chance of winning the car. If they opt to stick with the original choice, their probability remains at 1/3.

The logic may be counterintuitive for many people but is demonstrated through simulations and probability calculations. This problem is known as the "Monty Hall Paradox" and is often used to illustrate probability concepts in educational contexts.
```

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