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
  visualKey?: string;
  showDescription?: boolean;
  media?: {
    type: "image" | "video";
    src: string;
    alt?: string;
  };
  
}[];
links?: { label: string; href: string; type: "github" | "demo" | "paper"; }[];
};

export const projects: Project[] = [
{slug: "mind-watch",
  title: "MindWatch",
  image: mindWatchImage,
  description:
     "AI-powered multimodal seizure prediction using physiological signals.",
  category: "Healthcare AI",
  year: "2026",
tags: [
  "Healthcare AI",
  "Deep Learning",
  "Multimodal Learning",
  "Time Series",
],
  featured: true,
  accent: "from-pink-300 to-purple-400",

  metrics: [
     { value: "+30M", label: "People Affected Worldwide" },
    { value: "+11,000", label: "Hours of Physiological Data" },
    { value: "0.98", label: "Balanced Accuracy" },
    { value: "0.90", label: "Macro F1 Score" },
  ],


  sections: [
    {
      title: "Project Overview",
      body: [
        "MindWatch is a multimodal deep learning framework that analyzes EEG, ECG, EMG, and motion signals to classify three seizure-related states: normal, pre-ictal, and ictal.",
        "The system combines CNN-based feature extraction with BiLSTM temporal modeling to learn discriminative physiological features and temporal patterns across multimodal signals.",
      ],
    },
    {
      title: "The Problem",
      body: [ "Patients with drug-resistant epilepsy continue to experience unpredictable seizures despite treatment. EEG-only prediction systems may miss important physiological changes and remain vulnerable to noise, motion artifacts, and false alarms, limiting their reliability in real-world use."
      ]
    },
    {
      title: "The Solution",
      body: [
      "MindWatch integrates EEG, ECG, EMG, and motion signals to capture complementary physiological changes that EEG alone may miss.",
      "Dedicated CNN encoders learn modality-specific features, while BiLSTM models their temporal progression. LDAM-DRW with Weighted Random Sampling improves minority-class detection and reduces false alarms.",
    ],

    },
    {
      title: "Key Results",
      bullets: [
            "Balanced Accuracy: 90.6% → 98.0%",
            "Macro F1: 68.1% → 89.7%",
            "Pre-ictal false alarms: 15.7% → 3.2%",
      ],
    },
    {

  title: "Models and Technologies",
  body: [
    "Multimodal Deep Learning: Combined EEG, ECG, EMG, and motion signals within one seizure-prediction framework.",
    "Model Architecture: CNN for physiological feature extraction and BiLSTM for temporal pattern modeling.",
    "Class Imbalance Handling: Combined LDAM-DRW with Weighted Random Sampling after evaluating multiple imbalance-control strategies.",
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
    id: "performance-comparison",
    title: "EEG-only vs Multimodal",
    description:"",
    iconColor: "#c4b5fd",
    visualKey: "mindwatch-performance",
      showDescription: false,
  },
{
  id: 'multimodal-architecture',
  title: 'Multimodal Architecture',
  description: '',
  iconColor: '#93c5fd',
  visualKey: 'mindwatch-architecture',
  showDescription: false,
},
  {
    id: "imbalance-strategy",
    title: "Class Imbalance Strategy",
    description:"",
    iconColor: "#f9a8d4",
    visualKey: "mindwatch-imbalance",
          showDescription: false,
  },
],
links: [
  {
    label: "GitHub Repository",
    href: "https://github.com/imrealjo37/MindWatch-Seizure-Prediction",
    type: "github",
  },
  {
    label: "Open Live Demo",
    href: "https://mindwatch-main-neon.vercel.app/",
    type: "demo",
  },
  {
    label: "View Research Papers",
    href: "https://drive.google.com/drive/folders/1LGJ7E3PXxXcbZUugIkfLN6gj30o11bf5?usp=sharing",
    type: "paper",
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


},
  {slug: "mersad",
    title: "Mersad",
      image: mersadImage,
    description:
      "AI-powered PPE monitoring for safer industrial environments.",
    category: "Computer Vision",
    year: "2024",
    tags: ["Computer Vision", "YOLOv8", "Object Detection", "Safety AI"],
    featured: true, accent: "from-amber-500/30 via-orange-500/20 to-red-500/20",


  metrics: [
    {
      value: "395M+",
      label: "Non-Fatal Work Injuries Annually",
    },
    {
      value: "10",
      label: "PPE & Safety Classes",
    },
    {
      value: "Real-Time",
      label: "Safety Monitoring",
    },
  ],

  sections: [
    {
      title: "Project Overview",
      body: [
        "MERSAD is an AI-powered industrial safety monitoring system that combines automatic image denoising with YOLOv8-based personal protective equipment detection.",
        "The system supports both live camera monitoring and uploaded-image analysis, enabling safety equipment compliance to be evaluated across different industrial conditions.",
      ],
    },

    {
      title: "The Problem",
      body: [
        "Industrial environments require workers to consistently wear personal protective equipment, yet manual safety monitoring can be slow, inconsistent, and difficult to scale.",
        "Camera images may also contain Gaussian noise, salt-and-pepper noise, or mixed noise, reducing visual quality and making safety equipment harder to detect reliably.",
      ],
    },

    {
      title: "The Solution",
      body: [
        "MERSAD automatically estimates the noise condition of an uploaded image and applies a K-Means-based denoising pipeline before sending the cleaned image to YOLOv8 for PPE detection.",
        "The system highlights compliant equipment using green bounding boxes and safety violations using red bounding boxes, while also displaying detection statistics, confidence scores, and recent alerts.",
      ],
    },

    {
      title: "Key Capabilities",
      bullets: [
        "Live PPE detection using a webcam.",
        "Uploaded-image analysis through a Flask web interface.",
        "Automatic classification of clean, Gaussian, salt-and-pepper, and mixed-noise images.",
        "Detection of compliant and non-compliant safety equipment.",
        "Detection statistics, alert history, and saved snapshots.",
        "SQLite-based storage for detection records.",
      ],
    },

    {
      title: "Models and Technologies",
      body: [
        "Object Detection: YOLOv8 detects workers, protective equipment, machinery, vehicles, and safety violations.",
        "Image Denoising: K-Means-based processing reduces Gaussian, salt-and-pepper, and mixed noise before detection.",
        "Compliance Monitoring: Rule-based logic separates compliant PPE from missing safety equipment and generates visual warnings.",
        "Web Application: Flask provides live-camera detection, image uploads, result visualization, and alert review.",
      ],
      bullets: [
        "Python",
        "YOLOv8",
        "OpenCV",
        "K-Means",
        "Flask",
        "SQLite",
        "NumPy",
        "Scikit-learn",
      ],
    },
  ],

  stackedCards: [
    {
      id: "noise-processing",
      title: "Automatic Image Denoising",
      description:
        "The system estimates whether an image contains Gaussian, salt-and-pepper, mixed noise, or no noise, then applies the appropriate K-Means-based denoising process.",
      iconColor: "#772cb8",
      visualKey: "mersad-denoising",
      showDescription: true,
    },

    {
      id: "ppe-detection",
      title: "PPE Detection",
      description:
        "YOLOv8 analyzes the processed image to detect workers, protective equipment, machinery, vehicles, and missing PPE.",
      iconColor: "#e69de2",
      visualKey: "mersad-detection",
      showDescription: true,
    },

    {
      id: "safety-monitoring",
      title: "Safety Compliance Monitoring",
      description:
        "Compliant equipment is highlighted in green, while missing hardhats, masks, or safety vests generate red visual warnings and detection records.",
      iconColor: "#89c4e9",
      visualKey: "mersad-monitoring",
      showDescription: true,
    },
  ],

  links: [
    {
      label: "GitHub Repository",
      href: "https://github.com/imrealjo37/AI-Based-Safety-Equipment-Monitoring",
      type: "github",
    },
  ],
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

  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);