import eduLaptopImage from "../assets/edulaptop.png";
import mindWatchImage from "../assets/MindWatch.png";
import mindWatchPipeline from "../assets/pipline_mindwatch.png";
import dust_Area_Detection from "../assets/Dust_Area_Detection.png";
import biLSTMMindWatchImage from "../assets/BiLSTM__mindwatch.png";
import robotImage from "../assets/robot.png";
import ewsImage from "../assets/ews.png";
import cnnMindWatchImage from "../assets/CNN_mindwatch.png";
import dustAreaDetectionImage from "../assets/Dust_Area_Detection.png";

import mersadImage from "../assets/mersad.png";
import newsNlpImage from "../assets/News_nlp.png";
import orbImage from "../assets/orb.png";
import signImage from "../assets/sign.png";
import marioImage from "../assets/mario.png";
import rssImage from "../assets/rss.png";

export type Project = {
  slug: string;
  title: string;
  description: string;
  category: string;
  year: string;
  tags: string[];
  featured: boolean;
  accent: string;
  image?: string;

  metrics?: {
    value: string;
    label: string;
  }[];

  sections?: {
    title: string;
    body?: string[];
    bullets?: string[];
    image?: string;
  }[];

  stackedCards?: {
    id: string;
    title: string;
    description: string;
    iconColor: string;
    media?: {
      type: "image" | "video";
      src: string;
      alt?: string;
    };
  }[];

  cards: {
    idea: string;
    problem: string;
    build: string;
    impact: string;
  };
  github?: string;
};

export const projects: Project[] = [
{slug: "mind-watch",
  title: "Mind Watch",
  image: mindWatchImage,
  description:
    "Multimodal seizure prediction framework using EEG, ECG, EMG, and motion signals with CNN-BiLSTM modeling.",
  category: "Healthcare AI",
  year: "2025",
  tags: ["Healthcare AI", "Deep Learning", "CNN", "BiLSTM", "Multimodal Signals"],
  featured: true,
  accent: "from-pink-300 to-purple-400",

  metrics: [
     { value: "+30M", label: "People Affected Worldwide" },
    { value: "+11,000", label: "Hours of Physiological Data" },
    { value: "0.98", label: "Balanced Accuracy" },
    { value: "0.90", label: "Macro F1 Score" },
  ],

  cards: {
    idea:
      "A multimodal AI framework for predicting seizure-related patterns using physiological and motion signals.",
    problem:
      "EEG-only systems can be affected by noise, motion artifacts, and high false-alarm rates in real-world environments.",
    build:
      "Combined CNN-based feature extraction with BiLSTM temporal modeling across EEG, ECG, EMG, and motion signals.",
    impact:
      "Improved balanced accuracy from 0.9057 to 0.9799 and reduced pre-ictal false positive rate from 0.1572 to 0.0323.",
  },

  sections: [
    {
      title: "Project Overview",
      body: [
        "Built a multimodal seizure prediction framework that analyzes EEG, ECG, EMG, and motion signals to identify pre-ictal, ictal, and post-ictal patterns.",
      ],
    },
    {
      title: "The Problem",
      body: [
        "EEG-only seizure prediction systems are often affected by noise, motion artifacts, and high false-alarm rates, limiting their reliability in real-world environments.",
      ],
    },
    {
      title: "The Solution",
      body: [
        "Mind Watch combines four physiological modalities with CNN-based feature extraction and BiLSTM temporal modeling to capture both spatial and temporal seizure-related patterns.",
        "The system also applies advanced imbalance-handling techniques to improve minority-class detection and reduce false alarms.",
      ],
    },
    {
      title: "Key Results",
      bullets: [
        "Balanced Accuracy improved from 0.9057 to 0.9799.",
        "Macro F1 Score improved from 0.6814 to 0.8970.",
        "Pre-ictal False Positive Rate decreased from 0.1572 to 0.0323.",
      ],
    },
    {

  title: "Models & Technologies",
  body: [
    "Multimodal Deep Learning: Combined EEG, ECG, EMG, and motion signals within one seizure-prediction framework.",
    "Model Architecture: CNN for physiological feature extraction and BiLSTM for temporal pattern modeling.",
    "Class Imbalance Handling: LDAM-DRW, Weighted Random Sampling, Weighted Cross-Entropy, and Focal Loss.",
  ],
  bullets: [
    "Python",
    "PyTorch",
    "MNE",
    "NumPy",
    "Pandas",
    "Scikit-learn",
  ],
},
  ],

  stackedCards: [
    {
      id: "model-comparison",
      title: "Model Comparison",
      description:
        "A comparison between the EEG-only baseline and the multimodal CNN-BiLSTM model, showing improvements in balanced accuracy, macro F1, and false positive rate.",
      iconColor: "#c4b5fd",
      media: {
        type: "image",
        src: "/projects/mindwatch-models.png",
        alt: "Mind Watch model comparison",
      },
    },
    {
      id: "pipeline",
      title: "Multimodal Pipeline",
      description:
        "The pipeline fuses EEG, ECG, EMG, and motion signals, extracts CNN features, models temporal patterns with BiLSTM, and evaluates seizure-stage predictions.",
      iconColor: "#93c5fd",
      media: {
        type: "image",
        src: mindWatchPipeline,
        alt: "Mind Watch multimodal pipeline",
      },
    },
  ],
},
  {slug: "dust-area-detection",
    title: "Dust Area Detection",
     image:dust_Area_Detection,
    description:
      "Satellite image processing system for detecting dust areas using MSG GeoTIFF imagery.",
    category: "Geospatial AI",
    year: "2024",
    tags: ["Computer Vision", "Geospatial AI", "OpenCV", "Rasterio", "Folium", "GeoJSON"],
    featured: true,
    accent: "from-amber-300 to-purple-400",
    cards: {
      idea: "Read the sky from space — turn raw satellite tiles into living maps of dust movement.",
      problem: "Dust storms disrupt health, travel and infrastructure, yet most regions lack accessible real-time tracking.",
      build: "Pipeline on MSG GeoTIFF imagery using OpenCV + Rasterio, exporting GeoJSON layers visualized through Folium.",
      impact: "An interactive map any analyst can open — turning meteorological data into something you can actually see.",
    },
  },
  {slug: "ews-chatbot",
    title: "EWS Chatbot",
      image: ewsImage ,
    description:
      "Arabic RAG chatbot for active weather alerts using LLMs and vector search.",
    category: "NLP",
    year: "2025",
    tags: ["NLP", "RAG", "Gemini", "PGVector", "Streamlit", "Arabic AI"],
    featured: true,
    accent: "from-blue-400 to-purple-400",
    cards: {
      idea: "An Arabic-first assistant that speaks weather — calmly, clearly, and in your language.",
      problem: "Active alerts are scattered across portals; most Arabic users get them late, fragmented, or not at all.",
      build: "Retrieval-Augmented Generation with Gemini + PGVector, surfaced through a friendly Streamlit interface.",
      impact: "Accessible, conversational weather safety — designed for the people who need it first.",
    },
  },
{slug: "edulaptop-advisor",
  title: "EduLaptop Advisor",
  image: eduLaptopImage,
  description:
    "Hybrid RAG system that recommends laptops based on academic needs, technical constraints, and budget using grounded LLM generation.",
  category: "Education AI",
  year: "2024",
  tags: ["RAG", "LLM", "Recommendation System", "Streamlit", "NLP"],
  featured: true,
  accent: "from-emerald-300 to-purple-400",

  metrics: [
    { value: "0.83", label: "Average RAGAS Score" },
    { value: "0.98", label: "Faithfulness Score" },
    { value: "+20.3%", label: "RAGAS Improvement" },
    { value: "900+", label: "Laptop Records Indexed" },
  ],

  cards: {
    idea:
      "An intelligent advisor that helps students find the right laptop based on their major, workload, and budget.",
    problem:
      "Students often struggle to compare hundreds of laptop models and identify which specifications truly match their academic needs.",
    build:
      "Built a hybrid RAG pipeline combining query expansion, constraint extraction, TF-IDF retrieval, cosine similarity ranking, and grounded LLM responses.",
    impact:
      "Improved average RAGAS score from 0.69 to 0.83 and achieved up to 0.98 faithfulness for AI-focused recommendation queries.",
  },


 sections: [
  {
    title: "Project Overview",
    body: [
      "Built a hybrid RAG system that recommends laptops based on academic needs, budget, and technical requirements.",
    ],
  },
  {
    title: "The Problem",
    body: [
      "Students often struggle to compare laptop specifications and identify devices that match their academic use cases.",
    ],
  },
  {
    title: "The Solution",
    body: [
      "EduLaptop Advisor combines smart filtering, TF-IDF retrieval, and grounded LLM generation to return relevant recommendations with prices in Saudi Riyal.",
    ],
  },
  {
    title: "Key Results",
    body: [
      "Improved the average RAGAS score from 0.69 to 0.83, achieving up to 1.00 Context Precision and 0.98 Faithfulness.",
    ],
  },
  {
    title: "Models & Technologies",
    body: [
      "Llama 3.3 70B was used to generate grounded recommendations based only on the retrieved laptop data.",
      "TF-IDF and Cosine Similarity powered the retrieval layer by ranking the most relevant laptop records for each query.",
      "Groq API handled structured constraint extraction and fast LLM inference.",
      "RAGAS evaluated Context Precision, Answer Relevancy, and Faithfulness.",
      "Streamlit was used to build the interactive interface, while Python, scikit-learn, and Pandas supported preprocessing, filtering, and retrieval.",
    ],
  },
],


  stackedCards: [
    {
      id: "personalized-recommendations",
      title: "Personalized Recommendations",
      description:
        "A structured comparison of the most suitable laptops, including specifications, prices, and the reason each device matches the user's needs.",
      iconColor: "#c4b5fd",
    },
    {
      id: "retrieved-sources",
      title: "Retrieved Sources",
      description:
        "Displays the Top-5 laptop records used by the model to generate the final recommendation.",
      iconColor: "#93c5fd",
    },
    {
      id: "ragas-evaluation",
      title: "Live RAGAS Evaluation",
      description:
        "Shows Context Precision, Answer Relevancy, Faithfulness, and the overall RAGAS score for each query.",
      iconColor: "#a7f3d0",
    },
    {
      id: "knowledge-base-dashboard",
      title: "Knowledge Base Dashboard",
      description:
        "Visualizes laptop brands, GPU types, RAM distributions, operating systems, categories, and dataset statistics.",
      iconColor: "#f9a8d4",
    },
  ],
  
},
  {slug: "mersad",
    title: "Mersad",
      image: mersadImage,
    description:
      "AI-based safety equipment monitoring system for detecting PPE compliance.",
    category: "Computer Vision",
    year: "2024",
    tags: ["Computer Vision", "YOLOv8", "Object Detection", "Safety AI"],
    featured: true,
    accent: "from-rose-400 to-purple-500",
    cards: {
      idea: "A vigilant eye on every worksite — gentle reminders that protect people.",
      problem: "PPE violations are a leading cause of preventable workplace injury; manual auditing doesn't scale.",
      build: "Real-time YOLOv8 detection of helmets, vests and goggles, with compliance dashboards.",
      impact: "Faster intervention, safer sites, and human-friendly monitoring instead of punitive oversight.",
    },
  },
  {slug: "arabic-news-nlp",
    title: "Arabic News NLP System",
      image: newsNlpImage ,
    description:
      "Arabic NLP system for news classification, summarisation, and structured 5W information extraction.",
    category: "Arabic NLP",
    year: "2024",
    tags: ["Arabic NLP", "Classification", "Summarization", "Information Extraction"],
    featured: true,
    accent: "from-violet-400 to-fuchsia-400",
    cards: {
      idea: "Read every Arabic headline at once — and pull out who, what, when, where and why.",
      problem: "Arabic NLP tooling lags behind English; newsrooms and researchers lack structured analysis at scale.",
      build: "Classification + summarization models combined with a 5W extraction layer tuned for Arabic morphology.",
      impact: "A research-grade lens on Arabic media — surfacing patterns that were previously buried in volume.",
    },
  },
  {slug: "sign-language-recognition",
    title: "Sign Language Recognition",
     image: signImage,
    description:
      "AI-based sign language recognition system focused on accessibility.",
    category: "Accessibility AI",
    year: "2023",
    tags: ["Computer Vision", "Deep Learning", "Accessibility AI"],
    featured: false,
    accent: "from-teal-300 to-purple-400",
    cards: {
      idea: "Give technology a way to listen with its eyes.",
      problem: "Communication barriers between deaf and hearing communities remain everyday friction.",
      build: "Vision pipeline recognising signed gestures in real time, mapped to natural text.",
      impact: "Small but real steps toward an inclusive interface for everyone.",
    },
  },
  {slug: "smart-autonomous-vehicle",
    title: "Smart Autonomous Vehicle",
      image: robotImage ,
    description:
      "Robotics car using sensors for movement, obstacle detection, and autonomous behavior.",
    category: "Robotics",
    year: "2023",
    tags: ["Robotics", "Arduino", "ESP32", "Sensors", "Embedded Systems"],
    featured: false,
    accent: "from-cyan-300 to-purple-400",
    cards: {
      idea: "Teach a small machine to feel its way through the world.",
      problem: "Autonomous logic is invisible — students rarely get to physically build the loop from sensor to motion.",
      build: "ESP32 + ultrasonic and IR sensors with embedded control logic for navigation and obstacle avoidance.",
      impact: "A tangible, joyful entry point into robotics that I still love returning to.",
    },
  },
  {slug: "mario-platformer-game",
    title: "Mario Platformer Game",
    image: marioImage,
    description:
      "A Unity-based platformer game inspired by Mario with custom level design and gameplay logic.",
    category: "Game Dev",
    year: "2023",
    tags: ["Unity", "Game Development", "C#", "OOP"],
    featured: false,
    accent: "from-pink-300 to-purple-400",
    cards: {
      idea: "A love letter to the games that made me curious about systems.",
      problem: "Translating intuition into mechanics — feel, physics, level pacing — is harder than it looks.",
      build: "Unity + C# with custom OOP design, hand-crafted levels and tuned game-feel.",
      impact: "A small playable world, and a real lesson in iteration.",
    },
  },
  {slug: "orbscope",
    title: "OrbScope",
     image: orbImage,
    
    description:
      "A space-focused interactive prototype developed for the NASA Space Apps Hackathon.",
    category: "Space Tech",
    year: "2024",
    tags: ["NASA Space Apps", "Space Tech", "Prototype", "Earth Observation"],
    featured: false,
    accent: "from-indigo-300 to-purple-400",
    cards: {
      idea: "Look up — and let the data look back.",
      problem: "Earth observation data is rich but rarely playful or approachable for non-experts.",
      build: "Interactive prototype built under hackathon constraints, exploring orbital data visually.",
      impact: "A reminder that good interfaces can make even space feel close.",
    },
  },
  { slug: "recommendation-system",
    title: "Recommendation System",
    image: rssImage ,
    description:
      "A recommender system project focused on personalized suggestions and intelligent filtering.",
    category: "Machine Learning",
    year: "2023",
    tags: ["Recommender Systems", "Machine Learning", "Personalization"],
    featured: false,
    accent: "from-fuchsia-300 to-purple-400",
    cards: {
      idea: "Recommendation as quiet, thoughtful curation.",
      problem: "Most systems optimise for engagement; few optimise for what actually serves the person.",
      build: "Collaborative + content-based filtering models with tunable personalization signals.",
      impact: "A foundation I keep returning to as I think about user-respecting AI.",
    },
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);