document.addEventListener('DOMContentLoaded', () => {
    const experienceData = [
        {
            title: "DevOps Engineer Intern",
            company: "GajaTech",
            location: "Beveren, Belgium",
            date: "Feb 2024 – Jul 2024",
            points: [
                "Streamlined deployments for multiple software projects by developing a flexible CI/CD pipeline, reducing manual efforts and accelerating release cycles",
                "Implemented automated test execution and real-time reporting via a web-based dashboard, ensuring rapid feedback and higher code quality",
                "Demonstrated reliability by integrating Java, SQLite, and embedded systems into the pipeline, enabling consistent builds and efficient process automation"
            ]
        },
        {
            title: "Embedded Systems Engineer Intern",
            company: "Entrepreneurship Incubator",
            location: "Mahdia, Tunisia",
            date: "Jul 2023 – Aug 2023",
            points: [
                "Designed an electronic board for smart home automation systems, enhancing home management capabilities",
                "Proficiently used Altium and ISIS Proteus for circuit design, and Arduino IDE for programming various sensors involved in the home automation project"
            ]
        },
        {
            title: "Software Engineer Intern",
            company: "Anypli",
            location: "Monastir, Tunisia",
            date: "Aug 2022 – Aug 2022",
            points: [
                "Engaged in an internship aimed at enhancing coding skills and gaining exposure to mobile development",
                "Utilized Android Studio and Java for mobile app development, incorporating version control with Git to manage and collaborate on project codebases"
            ]
        }
    ];

    const projectData = [
        {
            title: "Ultimate CI/CD Pipeline (Java Applications)",
            date: "Oct 2024",
            tech: ["Java", "Docker", "Kubernetes", "SonarQube", "Trivy", "Prometheus"],
            points: [
                "Built a CI/CD pipeline to automate builds, artifact management, and deployments for Java applications",
                "Deployed containerized services with Docker and Kubernetes",
                "Integrated SonarQube, Trivy, and Prometheus for code quality, security, and monitoring"
            ],
            github: "https://github.com/Moetez-belaid/Ultimate-CICD"
        },
        {
            title: "Microservices CI/CD Pipeline (E-Commerce Platform)",
            date: "Nov 2024",
            tech: ["Jenkins", "AWS EKS", "Kubernetes"],
            points: [
                "Automated build, test, and deployment for an 11-microservice e-commerce platform using Jenkins",
                "Deployed Kubernetes-based architecture on AWS EKS",
                "Enabled independent scaling of microservices"
            ],
            github: "https://github.com/Moetez-belaid/Microservice-CICD"
        },
        {
            title: "Three-Tier Full Stack Pipeline",
            date: "Dec 2024",
            tech: ["Jenkins", "AWS EKS", "Kubernetes", "SonarQube", "Trivy"],
            points: [
                "Automated integration, testing, and deployment of three-tier full-stack application",
                "Leveraged AWS EKS and Kubernetes for scalable orchestration",
                "Reinforced security with SonarQube and Trivy"
            ],
            github: "https://github.com/Moetez-belaid/3-Tier-Full-Stack-Pipeline"
        }
    ];

    const skillsData = {
        "Programming": ["Python", "Go", "Java", "Bash", "SQL", "NoSQL", "OOP", "Git"],
        "DevOps & Cloud": ["CI/CD", "Jenkins", "Docker", "Kubernetes", "Terraform", "Ansible", "AWS", "IaC"],
        "Testing & QA": ["Jira", "Selenium", "ISTQB Fundamentals"],
        "Languages": ["English (Proficient)", "French (Proficient)", "German (Conversational)", "Arabic (Native/Bilingual)"]
    };

    const awardsData = [
        "10x National Robotics Competition Winner",
        "Senior Member - ENISO Robotics Team",
        "IEEE Design Manager"
    ];

    const educationData = [
        {
            date: "Sep 2021 – Jun 2024",
            location: "Sousse, Tunisia",
            degree: "Engineer’s Degree in Industrial Electronics Engineering",
            school: "National Engineering School of Sousse"
        },
        {
            date: "Sep 2019 – Jun 2021",
            location: "Monastir, Tunisia",
            degree: "Preparatory Cycle in Physics-Technology",
            school: "Preparatory Institute for Engineering Studies"
        }
    ];

    // DOM Elements
    const experienceGrid = document.querySelector('.experience-grid');
    const projectGrid = document.querySelector('.project-grid');
    const skillsContainer = document.querySelector('.skills-container');
    const awardsGrid = document.querySelector('.awards-grid');
    const timeline = document.querySelector('.timeline');

    // Render Functions
    function renderExperiences() {
        experienceData.forEach(exp => {
            const card = document.createElement('div');
            card.className = 'experience-card';
            card.innerHTML = `
                <h3>${exp.title}</h3>
                <div class="company-highlight">
                    <span class="company-name">${exp.company}</span>
                    <span class="company-location">${exp.location}</span>
                </div>
                <p class="date">${exp.date}</p>
                <ul>
                    ${exp.points.map(point => `<li>${point}</li>`).join('')}
                </ul>
            `;
            experienceGrid.appendChild(card);
        });
    }

    function renderProjects() {
        projectData.forEach(project => {
            const card = document.createElement('div');
            card.className = 'experience-card';
            card.innerHTML = `
                <h3>${project.title}</h3>
                <div class="project-header">
                    <p class="date">${project.date}</p>
                    <a href="${project.github}" target="_blank" class="github-link">
                        <i class="fab fa-github"></i>
                    </a>
                </div>
                <div class="tech-stack">
                    ${project.tech.map(t => `<span class="skill-pill">${t}</span>`).join('')}
                </div>
                <ul class="project-points">
                    ${project.points.map(point => `<li>${point}</li>`).join('')}
                </ul>
            `;
            projectGrid.appendChild(card);
        });
    }

    function renderSkills() {
        for (const [category, items] of Object.entries(skillsData)) {
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'skill-category';
            categoryDiv.innerHTML = `
                <h4>${category}</h4>
                ${items.map(item => `<span class="skill-pill">${item}</span>`).join('')}
            `;
            skillsContainer.appendChild(categoryDiv);
        }
    }

    function renderAwards() {
        awardsData.forEach(award => {
            const awardItem = document.createElement('div');
            awardItem.className = 'experience-card';
            awardItem.innerHTML = `<h3>🏆 ${award}</h3>`;
            awardsGrid.appendChild(awardItem);
        });
    }

    function renderEducation() {
        educationData.forEach(edu => {
            const item = document.createElement('div');
            item.className = 'timeline-item';
            item.innerHTML = `
                <div class="education-header">
                    <span class="education-date">${edu.date}</span>
                    <span class="education-location">${edu.location}</span>
                </div>
                <p class="education-degree">${edu.degree}</p>
                <p class="education-school">${edu.school}</p>
            `;
            timeline.appendChild(item);
        });
    }

    // Initial Render
    renderExperiences();
    renderProjects();
    renderSkills();
    renderEducation();
    renderAwards();

    // Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.experience-card, .timeline-item').forEach(el => {
        observer.observe(el);
    });

    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const icon = themeToggle.querySelector('i');
        icon.classList.toggle('fa-moon');
        icon.classList.toggle('fa-sun');
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // Active Navigation
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
                const id = section.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                });
            }
        });
    });
});