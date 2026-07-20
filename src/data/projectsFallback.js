import portfolioImg from "../assets/portfolio.png";
import keepImg from "../assets/keep.png";
import diamondImg from "../assets/diamond.jpg";
import sentimentImg from "../assets/sentiment.jpg";

const projectsFallback = [
  {
    id: 1,
    title: "Portfolio Website",
    image: portfolioImg,
    description:
      "Responsive personal portfolio built with React and Tailwind CSS.",
    technologies: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "React Router",
    ],
    github: "https://github.com/yourusername/portfolio",
    live: "https://yourportfolio.netlify.app",
  },
  {
    id: 2,
    title: "Google Keep Clone",
    image: keepImg,
    description:
      "Google Keep Clone using React, Tailwind CSS, Formik and Yup.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Formik",
      "Yup",
    ],
    github: "https://github.com/yourusername/google-keep-clone",
    live: "",
  },
  {
    id: 3,
    title: "Diamond Price Prediction",
    image: diamondImg,
    description:
      "Machine Learning project using XGBoost and Streamlit.",
    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "XGBoost",
    ],
    github: "",
    live: "",
  },
  {
    id: 4,
    title: "Movie Review Sentiment Analysis",
    image: sentimentImg,
    description:
      "NLP-based sentiment analysis using NLTK.",
    technologies: [
      "Python",
      "NLTK",
      "Machine Learning",
    ],
    github: "",
    live: "",
  },
];

export default projectsFallback;