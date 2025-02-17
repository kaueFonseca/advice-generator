# Advice Generator
This project was created as an exercise to practice React features and CSS. The goal was to build a small application that fetches a random piece of advice from an API and displays it on the screen. Users can click a button to generate a new piece of advice.

## Features Practiced
- **React State**: Managing and updating the state using `useState`.
- **React Effects**: Using `useEffect` to fetch data from an external API when the component mounts.
- **Event Handling**: Handling button clicks to trigger functions (in this case, fetching a new piece of advice).
- **Componentization**: Splitting the app into reusable components like `AdviceText` and `AdviceButton`.
- **CSS Styling**: Using CSS to style the app with a responsive and clean layout.
- 
## How It Works
1. On load, the app fetches a random piece of advice from the [AdviceSlip API](https://api.adviceslip.com/advice).
2. The advice is displayed along with its ID.
3. A button is provided to generate a new piece of advice when clicked, which fetches a new random piece of advice from the API and updates the displayed advice.

## Tech Stack
- **React**: JavaScript library for building user interfaces.
- **CSS**: For styling the components and the overall layout.
- **AdviceSlip API**: Free API to get random pieces of advice.

## Getting Started
To run this project locally:
1. Clone the repository:
   git clone https://github.com/SEU-USUARIO/advice-generator.git
   
3. Navigate into the project folder:
   cd advice-generator
   
5. Install the dependencies:
   npm install
   
6. Start the development server:
   npm start || npm run dev
   
Now the app should be running at http://localhost:3000.
