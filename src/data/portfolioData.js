/**
 * Portfolio Data Configuration for Shanmukapavan Uppu
 */

export const portfolioData = {
  // Personal Info
  personal: {
    name: "Shanmukapavan Uppu",
    title: "Senior React Native Developer | Telemedicine & Cross-Platform Specialist",
    tagline: "Architecting resilient, HIPAA-aligned mobile platforms and real-time healthcare systems for iOS & Android.",
    bio: "React Native developer with 5+ years of experience architecting and owning production mobile applications end-to-end. Specialized in telemedicine infrastructure (Twilio video/voice, Socket.io chat), offline-resilient local sync queues, HIPAA-aligned payments (Razorpay, PhonePe), Redux performance optimization, and automated CI/CD pipelines.",
    location: "Hyderabad, India",
    status: "Available for Mobile & Lead React Native Roles",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    resumeUrl: "#",
    email: "Shanmukapawanuppu@gmail.com",
    phone: "+91 9010569411",
  },

  // Social Links
  socials: [
    { name: "LinkedIn", icon: "linkedin", url: "https://linkedin.com/in/shanmuka-pavan-uppu-1b6a50169" },
    { name: "GitHub", icon: "github", url: "https://github.com" },
    { name: "Email", icon: "mail", url: "mailto:Shanmukapawanuppu@gmail.com" },
    { name: "Phone", icon: "phone", url: "tel:+919010569411" },
  ],

  // Key Statistics / Achievements
  stats: [
    { label: "Years Experience", value: "5+" },
    { label: "Production Apps", value: "2 Live" },
    { label: "Platforms", value: "iOS & Android" },
    { label: "App Store Rating", value: "4.5★+" },
  ],

  // Skills Grouped by Category
  skillCategories: [
    {
      name: "Mobile Ecosystem",
      icon: "smartphone",
      skills: [
        { name: "React Native & Expo", level: 98 },
        { name: "TypeScript & JavaScript (ES6+)", level: 95 },
        { name: "React Navigation v6", level: 95 },
        { name: "Redux Toolkit & Zustand", level: 94 },
        { name: "iOS (Xcode) & Android (Studio)", level: 90 },
        { name: "Offline Sync & Local Storage", level: 92 }
      ]
    },
    {
      name: "Real-time & Interoperability",
      icon: "cpu",
      skills: [
        { name: "Twilio Video & Voice SDK", level: 94 },
        { name: "Socket.io & WebSockets", level: 92 },
        { name: "Firebase (Firestore, Cloud Functions)", level: 90 },
        { name: "Push Notifications (FCM / APNs)", level: 92 },
        { name: "HIPAA-Aligned Data Practices", level: 90 },
        { name: "REST & GraphQL APIs", level: 92 }
      ]
    },
    {
      name: "DevOps, Payments & Tools",
      icon: "server",
      skills: [
        { name: "Firebase App Distribution & GCP Build", level: 92 },
        { name: "Razorpay & PhonePe Payments", level: 90 },
        { name: "React DevTools & Profiling", level: 95 },
        { name: "Jest, Postman & Git", level: 90 },
        { name: "Agile & Technical Mentorship", level: 90 },
        { name: "Code Splitting & Lazy Loading", level: 88 }
      ]
    }
  ],

  // Projects Array
  projects: [
    {
      id: "project-1",
      title: "CianaHealth & CianaCare Ecosystem",
      category: "Mobile",
      summary: "Cross-platform healthcare applications (CianaHealth & CianaCare) live on the App Store and Google Play.",
      description: "End-to-end telemedicine platform connecting patients to healthcare providers through real-time HD video/voice, persistent live chat with offline fallback, push notification engine, and HIPAA-compliant payment processing.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
      tags: ["React Native", "TypeScript", "Twilio Video/Voice", "Socket.io", "Redux", "Firebase", "Razorpay", "PhonePe"],
      demoUrl: "https://linkedin.com/in/shanmuka-pavan-uppu-1b6a50169",
      githubUrl: "#",
      featured: true,
      highlights: [
        "Managed full product lifecycle for 2 cross-platform apps on App Store & Google Play.",
        "Architected Twilio video/voice consultations, Socket.io chat, and Firebase push notification routing across iOS & Android.",
        "Engineered an offline-fallback local queue with auto-replay on reconnect, ensuring 0% loss of call state or chat history.",
        "Integrated HIPAA-aligned payment processing via Razorpay & PhonePe for in-app subscriptions and transactions.",
        "Eliminated Redux re-render bottlenecks using React DevTools profiling, refactoring selectors and adding code-splitting for route transitions."
      ]
    },
    {
      id: "project-2",
      title: "NGuage Hospitality Workforce Platform",
      category: "Web",
      summary: "Hospitality workforce management platform featuring real-time labor forecasting and room attendant tracking.",
      description: "Analytics and reporting suite for hospitality operations, enabling house status tracking, labor forecasting, room-attendant efficiency analysis, and printable PDF variance reports.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "TypeScript", "Workforce Analytics", "Export Engine", "REST API"],
      demoUrl: "https://linkedin.com/in/shanmuka-pavan-uppu-1b6a50169",
      githubUrl: "#",
      featured: true,
      highlights: [
        "Engineered house-status dashboards, labor forecasting algorithms, and efficiency metrics using React and TypeScript.",
        "Delivered exportable, printable PDF/Excel reports with visual variance indicators for operational decision making.",
        "Collaborated directly with stakeholders to define report schemas, export data structures, and user workflows."
      ]
    }
  ],

  // Work Experience
  experience: [
    {
      role: "React Native Developer",
      company: "Archents IT India Pvt. Ltd.",
      period: "2022 – Present",
      location: "Hyderabad, India",
      description: "Leading mobile app engineering and cross-platform healthcare product development across iOS and Android.",
      achievements: [
        "Owned CianaHealth & CianaCare end-to-end, driving product lifecycle from code to App Store and Google Play releases.",
        "Architected patient-to-provider telemedicine infrastructure: HD Twilio video/voice, Socket.io live chat, and Firebase push notifications.",
        "Designed an offline-fallback message queue with seamless replay on reconnection, ensuring zero state loss during dropped connectivity.",
        "Implemented HIPAA-aligned payment gateways (Razorpay, PhonePe) handling in-app subscriptions and secure billing history.",
        "Diagnosed and resolved critical Redux re-render bottlenecks using React DevTools profiling, refactoring selectors and implementing route-level code splitting.",
        "Built automated CI/CD pipelines via Firebase App Distribution and GCP Cloud Build, shortening merge-to-test build delivery cycles.",
        "Mentored junior engineers through pair debugging, code reviews, and state management best practices."
      ]
    },
    {
      role: "Frontend Developer (React / TypeScript)",
      company: "NGuage Labor",
      period: "2021 – 2022",
      location: "Hyderabad, India",
      description: "Developed workforce scheduling and analytical reporting features for hospitality management platforms.",
      achievements: [
        "Built house-status dashboards, labor forecasting models, and room-attendant efficiency trackers using React and TypeScript.",
        "Delivered exportable, printable reporting modules with variance indicators enabling data-driven daily operational decisions.",
        "Partnered with product stakeholders to define custom report schemas, API response structures, and export formats."
      ]
    }
  ],

  // Education
  education: [
    {
      degree: "B.Tech, Electronics & Communication Engineering (ECE)",
      institution: "Malla Reddy Institute of Engineering and Technology",
      period: "2015 – 2019",
      location: "Hyderabad, India"
    }
  ],

  // Certifications
  certifications: [
    { name: "React Native — Advanced Mobile Architecture", issuer: "Meta / Expo Ecosystem" },
    { name: "Firebase & GCP Cloud Build Automation", issuer: "Google Cloud Platform" },
    { name: "HIPAA-Aligned Mobile Data Security", issuer: "Healthcare IT" }
  ],

  // Key Achievements Highlight
  keyAchievements: [
    "Delivered 2 live healthcare apps on iOS App Store & Google Play.",
    "Architected zero-data-loss telemedicine engine with Twilio video & offline sync queue.",
    "Eliminated Redux re-render bottlenecks through React DevTools profiling & route code-splitting.",
    "Automated CI/CD pipeline reducing build release cycle using Firebase App Distribution & GCP.",
    "Built HIPAA-aligned payment infrastructure with Razorpay and PhonePe."
  ]
};
