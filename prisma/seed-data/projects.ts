export const projectsSeedData = [
  {
    slug: 'ProjectReservasiRuangan',
    title: 'Project Reservasi Ruangan',
    shortDescription: 'Laravel-based Campus Facility Reservation & Reporting System manages campus assets like classrooms, labs, and equipment. Unauthenticated visitors can view schedules, while logged-in users submit requests and report damage. Officers process queue approvals, admins manage master data, and 30-minute time slots operate under role-based access control.',
    description: `Project Reservasi Ruangan adalah sistem pemesanan dan pelaporan fasilitas kampus berbasis Laravel yang mengelola aset seperti kelas, laboratorium, dan peralatan.

Fitur utama:
• Reservasi jadwal ruangan oleh pengunjung tidak terotentikasi
• Pengajuan permintaan pemesanan oleh pengguna terdaftar
• Pemrosesan antrian dan persetujuan oleh officer
• Manajemen data master oleh admin
• Akses berbasis peran dengan slot waktu 30 menit

Sistem ini menunjukkan kemahiran pengembangan full-stack dengan Laravel, MySQL, dan Tailwind CSS untuk menciptakan pengalaman pengguna yang responsif dan terorganisir.`,
    role: 'Full-Stack Developer',
    year: 2026,
    techStack: ['Laravel', 'MySQL', 'Tailwind CSS', 'Blade', 'PHP'],
    thumbnailUrl: '/images/projects/ProjectReservasiRuangan/thumbnail.png',
    demoUrl: null,
    repoUrl: 'https://github.com/adityaulyaa/ProjectReservasiRuangan',
    displayOrder: 1,
  },
  {
    slug: 'E-COMMERCE',
    title: 'E-COMMERCE',
    shortDescription: 'Single-vendor e-commerce app with a decoupled architecture. Key features: user authentication (register, login, logout via JWT), product catalog browsing with search and filters, shopping cart management, seamless checkout with flexible payment processing and retries, and detailed order history tracking.',
    description: `KAFEin AI is an intelligent recommendation system that helps Universitas Diponegoro students discover their perfect cafe match based on personalized preferences.

The system uses collaborative filtering and content-based filtering algorithms to provide tailored recommendations. It learns from user behavior and preferences to continuously improve suggestions.

Features:
• Personalized cafe recommendations
• Smart preference learning
• User rating and review system
• Integration with multiple cafe databases around campus

This project showcases machine learning implementation, recommendation algorithms, and full-stack development with modern web technologies.`,
    role: 'Full-Stack Developer',
    year: 2026,
    techStack: ['React', 'Spring Boot', 'MySQL', 'JWT', 'TypeScript', 'Vite'],
    thumbnailUrl: '/images/projects/E-COMMERCE/thumbnail.png',
    demoUrl: 'https://kafein-ai-demo.vercel.app',
    repoUrl: 'https://github.com/adityaulyaa/E-COMMERCE',
    displayOrder: 2,
  },
  {
    slug: 'WealthManagementSystem',
    title: 'Wealth Management System',
    shortDescription: 'Full-stack personal finance web app featuring user management and risk assessment. Includes a rules-engine portfolio recommender, financial goal tracking with status alerts, template insights, a what-if simulator to model income/expense changes on goal timelines, and a dynamic dashboard for portfolio summary and charts.',
    description: `Smart Cooling Management is an innovative IoT solution that optimizes air conditioning systems for energy efficiency and comfort.

The system utilizes ESP32 microcontrollers, MQTT protocol for communication, and real-time data processing to monitor and control cooling systems intelligently.

Key Components:
• IoT sensors for temperature and humidity monitoring
• Automated cooling control based on occupancy
• Real-time dashboard for system monitoring
• Historical data analysis and reporting
• Energy consumption optimization

This project demonstrates expertise in embedded systems, IoT architecture, IoT protocol implementation, and real-time data processing using ESP32 and MQTT technologies.`,
    role: 'Full-Stack Developer',
    year: 2025,
    techStack: ['React', 'Spring Boot', 'MySQL', 'JWT', 'MySQL'],
    thumbnailUrl: '/images/projects/WealthManagementSystem/thumbnail.png',
    demoUrl: null,
    repoUrl: 'https://github.com/adityaulyaa/WealthManagementSystem',
    displayOrder: 3,
  },
  {
    slug: 'investment_optimizer',
    title: 'Investment Optimizer',
    shortDescription: 'A comprehensive crypto-based risk analysis dashboard with interactive visualization and real-time market data.',
    description: `Financial Risk Analysis Dashboard is a sophisticated platform for analyzing and visualizing financial market risks, particularly focused on cryptocurrency markets.

The dashboard provides real-time risk metrics, interactive charts, and advanced analytics to help investors make data-driven decisions. It integrates with multiple data sources for comprehensive market coverage.

Features:
• Real-time cryptocurrency price tracking
• Advanced risk metrics calculation
• Interactive data visualization
• Portfolio risk analysis
• Historical performance tracking
• Predictive analytics

Built with modern web technologies and Python for backend calculations, this project showcases proficiency in data visualization, real-time data processing, and financial analytics.`,
    role: 'Full-Stack Developer',
    year: 2025,
    techStack: ['Python', 'Branch & Bound', 'Dynamic Programming', 'Genetic Algorithm', 'Tkinter GUI'],
    thumbnailUrl: '/images/projects/investment_optimizer/thumbnail.png',
    demoUrl: 'https://financial-risk-demo.vercel.app',
    repoUrl: 'https://github.com/adityaulyaa/investment_optimizer',
    displayOrder: 4,
  },
  {
    slug: 'eco-therma-ai',
    title: 'eco-therma-ai',
    shortDescription: 'React and Vite-based web app designed for integrating thermal and environmental systems via real-time MQTT protocol. Featuring a clean Tailwind CSS UI with Lucide icons, the project focuses on live monitoring and control for AI-driven, sensor-enabled devices.',
    description: `Task Management Application is a comprehensive project management tool designed for team collaboration and productivity enhancement.

The application provides intuitive task creation, assignment, tracking, and completion workflows. Real-time synchronization ensures all team members have up-to-date information.

Key Features:
• Intuitive task creation and management
• Team collaboration and role assignment
• Real-time notifications and updates
• Progress tracking and analytics
• Multiple project support
• Integration with calendar systems

This project demonstrates full-stack development capabilities including database design, real-time communication, and responsive UI development.`,
    role: 'Full-Stack Developer',
    year: 2026,
    techStack: ['React', 'MQTT', 'Vite', 'Tailwind CSS', 'IoT'],
    thumbnailUrl: '/images/projects/eco-therma-ai/thumbnail.png',
    demoUrl: 'https://task-management-demo.vercel.app',
    repoUrl: 'https://github.com/adityaulyaa/eco-therma-ai',
    displayOrder: 5,
  },
  {
    slug: 'Weather-Data-Analysis-Using-MPI',
    title: 'Weather Data Analysis Using MPI',
    shortDescription: 'Parallel C application using MPI to detect temperature anomalies in a 10,000-row weather dataset via mean ± 2×std dev. Rank 0 calculates global stats, scatters data with MPI_Scatterv for local process filtering, reduces anomaly counts, and metrics. Demonstrates MIMD architecture with distributed memory.',
    description: `E-Commerce Platform is a fully-featured online marketplace solution built for scalability and user experience.

The platform supports product browsing, shopping cart management, secure checkout, and payment processing. It includes an admin dashboard for inventory and order management.

Features:
• Product catalog with advanced filtering
• Shopping cart and wishlist functionality
• Secure payment processing
• Order tracking and management
• User account management
• Admin dashboard for sellers
• Real-time inventory updates

Built with modern web technologies, this project showcases e-commerce development expertise including payment integrations, inventory management, and scalable architecture.`,
    role: 'Full-Stack Developer',
    year: 2026,
    techStack: ['MPI_Scatterv', 'MPI_Bcast', 'MPI_Reduce', 'anomaly detection in C'],
    thumbnailUrl: '/images/projects/Weather-Data-Analysis-Using-MPI/thumbnail.png',
    demoUrl: 'https://ecommerce-demo.vercel.app',
    repoUrl: 'https://github.com/adityaulyaa/Weather-Data-Analysis-Using-MPI',
    displayOrder: 6,
  },
];
