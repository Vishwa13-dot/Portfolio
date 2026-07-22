import portfolioImg from "../assets/portfolio.png";
import keepImg from "../assets/keep.png";
import diamondImg from "../assets/diamond.jpg";
import sentimentImg from "../assets/sentiment.jpg";
import resortImg from "../assets/resort.png";

const projectsFallback = [
  {
    id: 1,
    title: "Portfolio Website",
    image: portfolioImg,
    category: "Web Development",
    description:
      "Responsive personal portfolio built with React and Tailwind CSS.",
    technologies: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "React Router",
    ],
    github: "https://github.com/Vishwa13-dot/Portfolio",
    live: "https://vishwa--portfolio.vercel.app/",
  },
  {
    id: 5,
    title: "Green Heaven Resort",
    image: resortImg,
    category: "Web Development",
    description:
      "A modern and fully responsive resort booking website featuring elegant UI, room listings, amenities, gallery, and contact section.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
    ],
    github: "https://github.com/Vishwa13-dot/Resort-Website",
    live: "https://gh--resort.vercel.app/",
  },
  {
    id: 2,
    title: "Google Keep Clone",
    image: keepImg,
    category: "Web Development",
    description:
      "Google Keep Clone using React, Tailwind CSS, Formik and Yup.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Formik",
      "Yup",
    ],
    github: "https://github.com/Vishwa13-dot/G-Keep-Clone",
    live: "https://g-keep-clone-two.vercel.app/",
  },
  {
    id: 3,
    title: "Diamond Price Prediction",
    image: diamondImg,
    category: "Machine Learning",
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
    category: "Natural Language Processing",
    description:
      "NLP-based sentiment analysis using NLTK.",
    technologies: [
      "Python",
      "NLTK",
      "Machine Learning",
    ],
    github: "https://github.com/Vishwa13-dot/SENTIMENT-ANALYSIS-ON-MOVIE-REVIEW",
    live: "",
  },
];

export default projectsFallback;