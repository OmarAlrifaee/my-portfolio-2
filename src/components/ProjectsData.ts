import { ProjectsData } from "../Types";
import E_COMMERCE_PHOTO from "/assets/projects/e-commerce-react.jpg";
import YOUTUBE_CLONE_PHOTO from "/assets/projects/youtube-clone.jpg";
import SNAPGRAM_PHOTO from "/assets/projects/social-media.jpg";
import GYM_PHOTO from "/assets/projects/gym-app-react.jpg";
import CRUDS_PHOTO from "/assets/projects/CRUDS-APP-REACT.png";
import BANK_PHOTO from "/assets/projects/bank-react-template.png";
import TYPING_SPPED_TEST_PHOTO from "/assets/projects/typing-speed-test-js.jpg";
import DASHBOD_PHOTO from "/assets/projects/dashboard.png";
import QUIZ_REACT_PHOTO from "/assets/projects/quiz-app-react.webp";
import MEMORY_GAME_PHOTO from "/assets/projects/memory-game-js.jpeg";
import HANGMAN_PHOTO from "/assets/projects/hangman-game-js.png";
import THIRD_TEMPLATE_PHOTO from "/assets/projects/third-template.png";
import NEXT_DASHBOARD_PHOTO from "/assets/projects/next-dashboard.png";

const myProjects: ProjectsData = {
  All: [
    {
      title: "E-commerce App",
      description:
        "an e-commerce website build with an free api i found on the internet it contains a home page includes a swipes for the top 10 products and a categories swipe and you have a cart saved in the localstorage and a shop page that contains a filtering system like search and price range i build this project using react typescript and zustand for the state mangment",
      imageUrl: E_COMMERCE_PHOTO,
      link: "https://e-commerce-lilac-ten.vercel.app/",
    },
    {
      title: "Snap Gram a social media fullstack app",
      description:
        "i'ts a social media app similer to instagram you can create edit and remove posts as well as you can have a profile with auth system using appwrite platform for the backend and react with context api for auth as well as the strong shadcn ui library take a look..",
      imageUrl: SNAPGRAM_PHOTO,
      link: "https://snapgram-inky-xi.vercel.app/",
    },
    {
      title: "GYM Exercises App with Rapid Api",
      description:
        "browes alot of exercises and pick the one you liked and go to it's page to show the full guide and a youtube videos to learn you how to do it, i build this project using react and sass for the styling as well as rapid api",
      imageUrl: GYM_PHOTO,
      link: "https://omaralrifaee.github.io/gym/",
    },
    {
      title: "Next Dashboard",
      description:
        "a full stack admin dashboard where you can add update and delete users and products with an auth system using nextjs server actions with mongooDB and mongoose you can login as an admin using these \n email: admin@gmail.com \n password: admin",
      imageUrl: NEXT_DASHBOARD_PHOTO,
      link: "https://next-dashboard-black-three-57.vercel.app/",
    },
    {
      title: "YouTube Clone With youtube api v3",
      description:
        "a simple youtube clone with a responcive disign using tailwindcss and react as well as redux toolkit you can watch search and see the recommanded videos for that video you are watching",
      imageUrl: YOUTUBE_CLONE_PHOTO,
      link: "https://omaralrifaee.github.io/youtube-clone-react",
    },
    {
      title: "Quiz App",
      description:
        "a quiz app about techs and programming lanuages you have a timer for each qustion if it ends you lost at the end of the quiz you can see the right answers to learn from it, this project build using react and css",
      imageUrl: QUIZ_REACT_PHOTO,
      link: "https://omaralrifaee.github.io/quiz-app/",
    },
    {
      title: "CRUDS App",
      description:
        "create read update and delete your product that well be saved in your local storage so your data does'nt go as well as searching system you can search by title or category",
      imageUrl: CRUDS_PHOTO,
      link: "https://omaralrifaee.github.io/react-cruds/",
    },
    {
      title: "Typing Speed Test",
      description:
        "test your typing speed with this app that build using html css and pure javascript with a difficulty level system to make it more chanlleging",
      imageUrl: TYPING_SPPED_TEST_PHOTO,
      link: "https://omaralrifaee.github.io/js-typing-speed-quiz/",
    },
    {
      title: "Memory Game",
      description:
        "play with your friend a mamory vhallenge game with animals photos and a score system for each player to see who is the winner, this project build using html css and pure javascript",
      imageUrl: MEMORY_GAME_PHOTO,
      link: "https://omaralrifaee.github.io/memory-game/",
    },
    {
      title: "Hangman Game",
      description:
        "hangman game with a category system if you guess a wronge word the man will take a step closer to death so try to think more than you type, this project build using html css and pure javascript",
      imageUrl: HANGMAN_PHOTO,
      link: "https://omaralrifaee.github.io/hangman-game/",
    },
    {
      title: "Bank Tamplate",
      description:
        "it's a simple and responcive bank template build using react and tailwindcss",
      imageUrl: BANK_PHOTO,
      link: "https://omaralrifaee.github.io/bank/",
    },
    {
      title: "Template",
      description:
        "a responcive template with the power of javascript show info on scroll and some animation with css, build using html css and js",
      imageUrl: THIRD_TEMPLATE_PHOTO,
      link: "https://omaralrifaee.github.io/third-tamplate/",
    },
    {
      title: "Dashboard",
      description: "responcive dashboard template build using html css",
      imageUrl: DASHBOD_PHOTO,
      link: "https://omaralrifaee.github.io/dashboard-tamplate",
    },
  ],
  Best: [
    {
      title: "Snap Gram a social media fullstack app",
      description:
        "i'ts a social media app similer to instagram you can create edit and remove posts as well as you can have a profile with auth system using appwrite platform for the backend and react with context api for auth as well as the strong shadcn ui library take a look..",
      imageUrl: SNAPGRAM_PHOTO,
      link: "https://snapgram-inky-xi.vercel.app/",
    },
  ],
};
export default myProjects;
