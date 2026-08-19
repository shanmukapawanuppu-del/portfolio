/**
 * Portfolio Data Configuration for Shanmukapavan Uppu
 */

export const portfolioData = {
  // Personal Info
  personal: {
    name: "Shanmukapavan Uppu",
    title: "React Native Mobile App Developer | Healthcare & AI Integrations",
    tagline: "Building AI-powered, HIPAA-compliant cross-platform mobile apps for iOS & Android.",
    bio: "Results-driven React Native Mobile App Developer with 4+ years of experience building AI-powered, HIPAA-compliant healthcare applications for iOS and Android. Proven expertise in EHR/HL7 interoperability, telemedicine systems, IoMT wearable integrations, scalable mobile architecture, and translating Figma designs into pixel-perfect UI. Delivered apps with 10K+ downloads and 4.5★+ ratings.",
    location: "Hyderabad, India",
    status: "Available for Mobile & AI Development Roles",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    resumeUrl: "#",
    email: "Pavanuppu5@gmail.com",
    phone: "+91 9010569411",
  },

  // Social Links
  socials: [
    { name: "LinkedIn", icon: "linkedin", url: "https://linkedin.com/in/shanmuka-pavan-uppu-1b6a50169" },
    { name: "GitHub", icon: "github", url: "https://github.com" },
    { name: "Email", icon: "mail", url: "mailto:Pavanuppu5@gmail.com" },
    { name: "Phone", icon: "phone", url: "tel:+919010569411" },
  ],

  // Key Statistics / Achievements
  stats: [
    { label: "Years Experience", value: "4+" },
    { label: "App Downloads", value: "10K+" },
    { label: "App Store Rating", value: "4.5★+" },
    { label: "Monthly Transactions", value: "5K+" },
  ],

  // Skills Grouped by Category
  skillCategories: [
    {
      name: "Mobile Development",
      icon: "smartphone",
      skills: [
        { name: "React Native & Expo", level: 98 },
        { name: "TypeScript & JavaScript (ES6+)", level: 95 },
        { name: "iOS (Xcode) & Android (Android Studio)", level: 90 },
        { name: "Redux, Zustand & Context API", level: 92 },
        { name: "Deep Linking & Push Notifications", level: 90 },
        { name: "React Navigation v6", level: 95 }
      ]
    },
    {
      name: "Healthcare, AI & Realtime",
      icon: "cpu",
      skills: [
        { name: "AI/ML (TensorFlow.js, ML Kit)", level: 88 },
        { name: "IoMT Wearables (BLE, SPO2, Heart Rate)", level: 90 },
        { name: "HIPAA Compliance & EHR/HL7 FHIR", level: 92 },
        { name: "Twilio Video/Voice & Socket.io", level: 90 },
        { name: "OCR & Speech-to-Text APIs", level: 85 },
        { name: "Firebase Realtime DB / Firestore", level: 92 }
      ]
    },
    {
      name: "Backend, Cloud & Tools",
      icon: "server",
      skills: [
        { name: "RESTful & GraphQL APIs", level: 90 },
        { name: "Node.js & Express (basic)", level: 80 },
        { name: "Firebase & GCP Cloud", level: 88 },
        { name: "Figma (UI/UX Handoff & Auto Layout)", level: 95 },
        { name: "Razorpay & PhonePe Payments", level: 90 },
        { name: "Jest, Detox & React Native Testing", level: 85 }
      ]
    }
  ],

  // Projects Array
  projects: [
    {
      id: "project-1",
      title: "CianaHealth Platform",
      category: "Mobile",
      summary: "AI-powered, HIPAA-compliant cross-platform healthcare ecosystem (CianaHealth & CianaCare) published on App Store & Google Play with 10K+ downloads.",
      description: "Cloud-based healthcare platform for secure patient management, telemedicine, and real-time health data analytics across iOS and Android. Features AI face scan analysis extracting 21 health vitals, predictive SPO2 monitoring, and OCR/Speech-to-Text automated clinical data entry.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
      tags: ["React Native", "Node.js", "Firebase", "HL7 FHIR", "Twilio", "TensorFlow.js", "BLE", "Figma"],
      demoUrl: "https://linkedin.com/in/shanmuka-pavan-uppu-1b6a50169",
      githubUrl: "#",
      featured: true,
      highlights: [
        "Published to App Store and Google Play, reaching 10K+ downloads with 4.5★+ ratings.",
        "Integrated AI/ML Face Scan Analysis extracting 21 health vitals, SPO2 monitoring & Speech-to-Text entry.",
        "Engineered full telemedicine system with Twilio video calls and Socket.io chat, reducing consultation delays by 30%.",
        "Connected IoMT Bluetooth/BLE wearables (SPO2, heart rate) to live patient dashboards.",
        "Built HIPAA-compliant EHR/HL7 FHIR API integrations and Razorpay/PhonePe payment gateways handling 5K+ monthly transactions."
      ]
    },
    {
      id: "project-2",
      title: "NGuage Labor Management",
      category: "Web",
      summary: "Web-based labor management solution for hospitality environments with task scheduling, workforce reporting, and shift management.",
      description: "Delivered a structured reporting suite for hospitality operations, featuring House Status tracking, Labor Forecasting, Room Attendant Efficiency metrics, Time Tracking, printable outputs, and variance indicators.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      tags: ["Angular", "TypeScript", "HTML5", "CSS3", "Workforce Analytics"],
      demoUrl: "https://linkedin.com/in/shanmuka-pavan-uppu-1b6a50169",
      githubUrl: "#",
      featured: true,
      highlights: [
        "Designed task scheduling and shift management workflows for hospitality teams.",
        "Built comprehensive reporting modules for House Status, Labor Forecast, and Efficiency analytics.",
        "Integrated printable reporting outputs with variance indicators for management decision-making."
      ]
    }
  ],

  // Work Experience
  experience: [
    {
      role: "React Native Mobile App Developer",
      company: "Archents IT India Pvt Ltd",
      period: "Nov 2021 – Present",
      location: "Hyderabad, India",
      description: "Leading mobile app engineering and cross-platform healthcare product development across iOS and Android.",
      achievements: [
        "Designed and scaled healthcare apps (CianaHealth & CianaCare) published to App Store & Google Play (10K+ downloads, 4.5★+ rating).",
        "Integrated AI/ML Face Scan Analysis (21 health vitals), predictive SPO2 monitoring, and OCR/Speech-to-Text for clinical data entry.",
        "Built telemedicine video calls (Twilio), real-time chat (Socket.io), and push notifications — reducing consultation delays by 30%.",
        "Connected IoMT wearables (SPO2, heart rate) via Bluetooth/BLE protocols with live dashboards.",
        "Engineered HIPAA-compliant EHR/HL7 FHIR integrations and Razorpay/PhonePe payment gateways (5K+ monthly transactions).",
        "Optimized app performance with Redux, lazy loading, and code splitting, cutting load time by 20% and boosting retention by 15%.",
        "Automated CI/CD pipelines (Firebase App Distribution, GCP), reducing release cycle time by 25%.",
        "Mentored junior developers and conducted code reviews, increasing team delivery velocity by 30%."
      ]
    }
  ],

  // Education
  education: [
    {
      degree: "Bachelor of Engineering (B.E.) — Electronics & Communication (ECE)",
      institution: "Malla Reddy Institute of Engineering and Technology",
      period: "2015 – 2019",
      location: "Hyderabad, India"
    }
  ],

  // Certifications
  certifications: [
    { name: "React Native — Advanced Mobile Development", issuer: "Udemy / Coursera" },
    { name: "Firebase & Google Cloud Platform — Mobile Backend Essentials", issuer: "GCP & Firebase" },
    { name: "HIPAA Compliance Fundamentals for Developers", issuer: "Healthcare IT" },
    { name: "Figma for Developers — UI/UX Collaboration & Handoff", issuer: "Figma" }
  ],

  // Key Achievements Highlight
  keyAchievements: [
    "10K+ downloads & 4.5★+ ratings on App Store & Google Play for CianaHealth apps.",
    "30% reduction in patient consultation delays via Twilio telemedicine implementation.",
    "5K+ monthly payment transactions processed via Razorpay & PhonePe integrations.",
    "20% app load time reduction and 15% retention improvement through Redux & performance tuning.",
    "30% improvement in team delivery velocity through mentoring and Agile best practices."
  ]
};
