const LocalizedString = (ko, en) => ({ ko, en });

export const CV_DATA = {
    owner: LocalizedString("홍길동", "Hong Gil-dong"),
    title: LocalizedString("소프트웨어 엔지니어 홍길동의 온라인 이력서", "Online CV of Hong Gil-dong, Software Engineer"),
    contact: {
        email: "hong.gildong@example.com",
        phone: "+82-10-1234-5678",
        location: LocalizedString("서울특별시, 대한민국", "Seoul, South Korea")
    },
    profileImage: "assets/images/profile.png",
    tagline: LocalizedString("혁신적인 소프트웨어 솔루션을 개발하는 열정적인 엔지니어", "Passionate engineer developing innovative software solutions"),
    keywords: [
        LocalizedString("웹 개발", "Web Development"),
        LocalizedString("프론트엔드", "Frontend"),
        LocalizedString("백엔드", "Backend"),
        LocalizedString("JavaScript", "JavaScript"),
        LocalizedString("React", "React"),
        LocalizedString("Node.js", "Node.js"),
        LocalizedString("클라우드", "Cloud")
    ],
    qualificationsSummary: LocalizedString(
        "소프트웨어 공학 석사 및 정보처리기사 자격증 보유",
        "Master of Software Engineering & Certified Information Processing Engineer"
    ),
    externalLinks: {
        github: "https://github.com/honggildong",
        linkedin: "https://linkedin.com/in/honggildong",
        blog: "https://honggildong.blog"
    },
    sections: {
        introduction: {
            selfIntro: LocalizedString(
                "안녕하세요. 소프트웨어 엔지니어 홍길동입니다. 저는 사용자에게 가치를 제공하는 혁신적인 웹 솔루션 개발에 깊은 관심을 가지고 있습니다. 컴퓨터공학 학사 및 소프트웨어공학 석사 학위를 통해 탄탄한 이론적 기반을 다졌으며, 다수의 프로젝트 경험을 통해 실질적인 문제 해결 능력을 키웠습니다. 새로운 기술 습득에 대한 열정과 끊임없는 자기 계발을 통해 더 나은 결과물을 만들어내고자 노력합니다. 특히 사용자 경험(UX)을 중요하게 생각하며, 효율적이고 유지보수 가능한 코드를 작성하는 것을 목표로 합니다. 팀원들과의 원활한 소통과 협업을 통해 시너지를 창출하고, 주어진 과업을 성공적으로 완수하는 데 기여하고 싶습니다. 저의 기술 스택은 주로 프론트엔드와 백엔드를 아우르며, 최신 웹 기술 트렌드에 발맞춰 지속적으로 학습하고 적용하고 있습니다. 이력서를 통해 저의 역량과 경험을 더 자세히 보여드릴 수 있기를 바랍니다.",
                "Hello, I'm Hong Gil-dong, a software engineer. I'm deeply passionate about developing innovative web solutions that deliver value to users. With a Bachelor's degree in Computer Science and a Master's degree in Software Engineering, I've built a strong theoretical foundation. Through numerous project experiences, I've honed my practical problem-solving skills. My passion for learning new technologies and continuous self-improvement drives me to create better outcomes. I particularly value user experience (UX) and aim to write efficient, maintainable code. I strive to create synergy through smooth communication and collaboration with team members and to successfully complete assigned tasks. My technical stack primarily spans both frontend and backend development, and I continuously learn and apply the latest web technology trends. I hope this CV provides a comprehensive overview of my capabilities and experiences."
            ),
            goals: LocalizedString(
                "저는 사용자 중심의 고품질 웹 애플리케이션을 개발하여 사회에 긍정적인 영향을 미치는 것을 목표로 합니다. 특히, 최신 프레임워크와 기술 스택을 활용하여 확장성 있고 안정적인 시스템을 구축하는 데 기여하고 싶습니다. 장기적으로는 아키텍처 설계와 기술 리딩 역할을 수행하며, 주니어 개발자들의 성장을 돕는 멘토가 되고자 합니다. 빠르게 변화하는 IT 환경 속에서 지속적으로 학습하고 발전하며, 새로운 도전에 두려워하지 않고 기꺼이 임하는 자세로 임할 것입니다. 복잡한 문제를 단순하고 명확하게 해결하는 솔루션을 제공하는 데 집중하며, 끊임없이 기술적 깊이를 더해 나갈 것입니다. 또한, 오픈소스 프로젝트 참여를 통해 커뮤니티에 기여하고, 다양한 배경을 가진 사람들과 협력하며 시야를 넓히고 싶습니다. 궁극적으로는 제가 개발한 소프트웨어가 많은 사람들의 삶을 더 편리하고 풍요롭게 만드는 데 일조하기를 바랍니다.",
                "My goal is to develop high-quality, user-centric web applications that positively impact society. Specifically, I aim to contribute to building scalable and stable systems using the latest frameworks and technology stacks. In the long term, I aspire to take on roles in architecture design and technical leadership, mentoring junior developers in their growth. In the rapidly evolving IT environment, I am committed to continuous learning and development, eagerly embracing new challenges. I will focus on providing simple and clear solutions to complex problems, constantly deepening my technical expertise. Furthermore, I wish to contribute to the community through open-source projects and broaden my perspective by collaborating with people from diverse backgrounds. Ultimately, I hope the software I develop contributes to making many people's lives more convenient and enriched."
            )
        },
        education: [
            {
                degree: LocalizedString("소프트웨어공학 석사", "Master of Software Engineering"),
                institution: LocalizedString("한국대학교", "Korea University"),
                period: LocalizedString("2023.03 - 2025.02", "Mar. 2023 - Feb. 2025"),
                description: LocalizedString("인공지능 기반 소프트웨어 개발 연구", "Research on AI-based software development")
            },
            {
                degree: LocalizedString("컴퓨터공학 학사", "Bachelor of Computer Science"),
                institution: LocalizedString("서울대학교", "Seoul National University"),
                period: LocalizedString("2017.03 - 2021.02", "Mar. 2017 - Feb. 2021"),
                description: LocalizedString("데이터 구조, 알고리즘, 운영체제 등 학습", "Studied data structures, algorithms, operating systems, etc.")
            }
        ],
        experience: [
            {
                position: LocalizedString("선임 프론트엔드 개발자", "Senior Frontend Developer"),
                company: LocalizedString("ABC 테크", "ABC Tech"),
                period: LocalizedString("2024.01 - 현재", "Jan. 2024 - Present"),
                mainTasks: [
                    LocalizedString("반응형 웹 서비스 UI/UX 개발 및 개선", "Developed and improved responsive web service UI/UX"),
                    LocalizedString("React.js 기반 컴포넌트 라이브러리 구축", "Built React.js-based component library"),
                    LocalizedString("웹 성능 최적화 및 코드 리팩토링", "Optimized web performance and refactored code")
                ],
                projects: [
                    LocalizedString("사용자 대시보드 리뉴얼 프로젝트", "User Dashboard Renewal Project"),
                    LocalizedString("신규 서비스 런칭 프론트엔드 개발", "Frontend Development for New Service Launch")
                ]
            },
            {
                position: LocalizedString("주니어 백엔드 개발자", "Junior Backend Developer"),
                company: LocalizedString("XYZ 솔루션", "XYZ Solutions"),
                period: LocalizedString("2021.03 - 2023.12", "Mar. 2021 - Dec. 2023"),
                mainTasks: [
                    LocalizedString("Node.js 기반 RESTful API 개발 및 유지보수", "Developed and maintained Node.js-based RESTful APIs"),
                    LocalizedString("MySQL 데이터베이스 설계 및 관리", "Designed and managed MySQL databases"),
                    LocalizedString("클라우드 기반 서비스 배포 및 운영", "Deployed and operated cloud-based services")
                ],
                projects: [
                    LocalizedString("사내 업무 자동화 시스템 개발", "In-house Task Automation System Development"),
                    LocalizedString("고객 관리 시스템 백엔드 구축", "Customer Management System Backend Construction")
                ]
            }
        ],
        projects: [
            {
                name: LocalizedString("스마트 가계부 앱", "Smart Household Budget App"),
                description: LocalizedString(
                    "개인 재정 관리를 돕는 웹 기반 가계부 애플리케이션. 수입/지출 기록, 통계 분석, 예산 설정 기능 제공.",
                    "Web-based household budget application to help personal finance management. Provides income/expense tracking, statistical analysis, and budgeting features."
                ),
                technologies: ["React", "Node.js", "Express", "MongoDB"],
                period: LocalizedString("2024.03 - 2024.06", "Mar. 2024 - Jun. 2024"),
                thumbnail: "assets/images/project1.jpg",
                links: {
                    github: "https://github.com/honggildong/smart-budget-app",
                    demo: "https://smart-budget-app.honggildong.com"
                },
                details: LocalizedString(
                    "사용자 친화적인 인터페이스와 실시간 데이터 동기화를 강점으로, 효율적인 재정 관리를 지원합니다. 차트 라이브러리를 활용한 시각화와 강력한 검색 필터링 기능을 구현했습니다.",
                    "With a user-friendly interface and real-time data synchronization as strengths, it supports efficient financial management. Implemented visualization using chart libraries and powerful search filtering functions."
                )
            },
            {
                name: LocalizedString("온라인 식료품 배달 플랫폼", "Online Grocery Delivery Platform"),
                description: LocalizedString(
                    "지역 식료품점과 소비자를 연결하는 온라인 배달 플랫폼. 주문, 배송 추적, 결제 시스템 통합.",
                    "Online delivery platform connecting local grocery stores with consumers. Integrated order, delivery tracking, and payment systems."
                ),
                technologies: ["Vue.js", "Spring Boot", "PostgreSQL", "AWS S3"],
                period: LocalizedString("2023.09 - 2024.02", "Sep. 2023 - Feb. 2024"),
                thumbnail: "assets/images/project2.jpg",
                links: {
                    github: "https://github.com/honggildong/grocery-delivery-platform",
                    demo: "https://grocery-delivery.honggildong.com"
                },
                details: LocalizedString(
                    "사용자 및 상점 관리자 기능을 분리하여 개발하였으며, RESTful API를 통해 유연한 데이터 교환을 구현했습니다. 지도 API를 활용한 배송 경로 최적화 기능을 추가했습니다.",
                    "Developed separate functions for users and store managers, and implemented flexible data exchange via RESTful API. Added delivery route optimization using map APIs."
                )
            },
            {
                name: LocalizedString("인공지능 기반 뉴스 요약 서비스", "AI-Powered News Summarization Service"),
                description: LocalizedString(
                    "최신 뉴스를 자동으로 크롤링하여 핵심 내용을 요약해주는 서비스. 자연어 처리 기술 활용.",
                    "Service that automatically crawls latest news and summarizes key content. Utilizes Natural Language Processing technology."
                ),
                technologies: ["Python", "Flask", "TensorFlow", "BeautifulSoup"],
                period: LocalizedString("2023.01 - 2023.06", "Jan. 2023 - Jun. 2023"),
                thumbnail: "assets/images/project3.jpg",
                links: {
                    github: "https://github.com/honggildong/ai-news-summarizer",
                    demo: "https://news-summarizer.honggildong.com"
                },
                details: LocalizedString(
                    "뉴스 기사 URL을 입력하면 텍스트를 추출하고, 딥러닝 모델을 사용하여 핵심 문장을 요약하는 기능을 구현했습니다. BERT 모델을 활용하여 요약 품질을 높였습니다.",
                    "Implemented a feature that extracts text from a news article URL and summarizes key sentences using a deep learning model. Improved summarization quality using the BERT model."
                )
            },
             {
                name: LocalizedString("커뮤니티 기반 여행 정보 플랫폼", "Community-Based Travel Information Platform"),
                description: LocalizedString(
                    "사용자들이 여행 경험과 정보를 공유하고 교류하는 플랫폼. 포스팅, 댓글, 좋아요 기능 포함.",
                    "Platform where users share and exchange travel experiences and information. Includes posting, commenting, and liking features."
                ),
                technologies: ["Next.js", "Firebase", "Tailwind CSS"],
                period: LocalizedString("2022.07 - 2022.12", "Jul. 2022 - Dec. 2022"),
                thumbnail: "assets/images/project4.jpg",
                links: {
                    github: "https://github.com/honggildong/travel-community",
                    demo: "https://travel-community.honggildong.com"
                },
                details: LocalizedString(
                    "서버 사이드 렌더링(SSR)을 통해 초기 로딩 속도를 최적화하고 SEO 친화적으로 구현했습니다. Firebase Authentication을 사용하여 사용자 인증 시스템을 구축했습니다.",
                    "Optimized initial loading speed and implemented SEO-friendly features through Server-Side Rendering (SSR). Built a user authentication system using Firebase Authentication."
                )
            },
            {
                name: LocalizedString("실시간 채팅 애플리케이션", "Real-time Chat Application"),
                description: LocalizedString(
                    "웹소켓을 활용한 실시간 1:1 및 그룹 채팅 애플리케이션. 이모티콘, 파일 공유 기능 지원.",
                    "Real-time 1:1 and group chat application using WebSockets. Supports emojis and file sharing features."
                ),
                technologies: ["Socket.IO", "React Native", "Node.js", "Redis"],
                period: LocalizedString("2022.01 - 2022.06", "Jan. 2022 - Jun. 2022"),
                thumbnail: "assets/images/project5.jpg",
                links: {
                    github: "https://github.com/honggildong/realtime-chat-app",
                    demo: "https://chat-app.honggildong.com"
                },
                details: LocalizedString(
                    "클라이언트와 서버 간의 양방향 통신을 위해 웹소켓을 구현하고, 메시지 전달의 신뢰성을 확보했습니다. AWS EC2에 배포하여 서비스 안정성을 높였습니다.",
                    "Implemented WebSockets for bidirectional communication between client and server, ensuring reliable message delivery. Deployed on AWS EC2 to enhance service stability."
                )
            },
            {
                name: LocalizedString("ToDo 리스트 관리 웹 서비스", "ToDo List Management Web Service"),
                description: LocalizedString(
                    "사용자의 할 일 목록을 효율적으로 관리할 수 있는 웹 서비스. 드래그앤드롭, 기한 설정 기능.",
                    "Web service for efficient management of user's to-do lists. Features drag-and-drop and due date setting."
                ),
                technologies: ["Vanilla JavaScript", "HTML5", "CSS3", "Local Storage"],
                period: LocalizedString("2021.09 - 2021.12", "Sep. 2021 - Dec. 2021"),
                thumbnail: "assets/images/project6.jpg",
                links: {
                    github: "https://github.com/honggildong/simple-todo-app",
                    demo: "https://todo.honggildong.com"
                },
                details: LocalizedString(
                    "별도의 프레임워크 없이 바닐라 자바스크립트로 구현하여 웹 개발의 기본기를 다졌습니다. 로컬 스토리지를 활용하여 사용자 데이터를 브라우저에 저장했습니다.",
                    "Built with vanilla JavaScript without any frameworks to solidify web development fundamentals. Utilized local storage to save user data in the browser."
                )
            },
             {
                name: LocalizedString("온라인 포트폴리오 빌더", "Online Portfolio Builder"),
                description: LocalizedString(
                    "사용자가 자신의 포트폴리오를 온라인으로 쉽게 만들고 공유할 수 있는 플랫폼.",
                    "A platform allowing users to easily create and share their portfolios online."
                ),
                technologies: ["React", "Redux", "Firebase", "Material-UI"],
                period: LocalizedString("2024.01 - 2024.05", "Jan. 2024 - May 2024"),
                thumbnail: "assets/images/project7.jpg",
                links: {
                    github: "https://github.com/honggildong/portfolio-builder",
                    demo: "https://portfolio-builder.honggildong.com"
                },
                details: LocalizedString(
                    "다양한 템플릿과 커스터마이징 옵션을 제공하여 사용자가 쉽게 자신만의 포트폴리오를 구성할 수 있도록 했습니다. 실시간 미리보기 기능을 구현하여 편의성을 높였습니다.",
                    "Provided various templates and customization options for users to easily build their own portfolios. Implemented a real-time preview feature to enhance convenience."
                )
            },
            {
                name: LocalizedString("주식 트래커 대시보드", "Stock Tracker Dashboard"),
                description: LocalizedString(
                    "실시간 주식 가격 및 차트를 제공하고, 관심 종목을 관리할 수 있는 대시보드.",
                    "Dashboard providing real-time stock prices and charts, allowing management of watchlisted stocks."
                ),
                technologies: ["Vue.js", "Chart.js", "Node.js", "WebSocket API"],
                period: LocalizedString("2023.07 - 2023.11", "Jul. 2023 - Nov. 2023"),
                thumbnail: "assets/images/project8.jpg",
                links: {
                    github: "https://github.com/honggildong/stock-tracker",
                    demo: "https://stock-tracker.honggildong.com"
                },
                details: LocalizedString(
                    "금융 API를 연동하여 실시간 주식 데이터를 가져오고, Chart.js를 사용하여 직관적인 차트를 구현했습니다. 사용자 인증을 통해 개인화된 관심 종목 관리가 가능하도록 했습니다.",
                    "Integrated financial APIs to fetch real-time stock data and implemented intuitive charts using Chart.js. Enabled personalized watchlist management through user authentication."
                )
            }
        ],
        skills: {
            languages: [
                { name: "JavaScript (ES6+)", level: 90 },
                { name: "Python", level: 80 },
                { name: "Java", level: 70 },
                { name: "HTML5", level: 95 },
                { name: "CSS3", level: 90 }
            ],
            frontend: [
                { name: "React", level: 90 },
                { name: "Vue.js", level: 80 },
                { name: "Next.js", level: 75 },
                { name: "Webpack", level: 70 },
                { name: "Responsive Design", level: 90 }
            ],
            backend: [
                { name: "Node.js (Express)", level: 85 },
                { name: "Spring Boot", level: 70 },
                { name: "RESTful API", level: 85 },
                { name: "Database (SQL/NoSQL)", level: 80 }
            ],
            devops: [
                { name: "Git", level: 95 },
                { name: "Docker", level: 60 },
                { name: "AWS (EC2, S3)", level: 65 }
            ]
        },
        research: [
            {
                title: LocalizedString("딥러닝 기반 이미지 분류 성능 향상 연구", "Research on Improving Deep Learning-based Image Classification Performance"),
                publisher: LocalizedString("한국 인공지능 학회", "Korean Artificial Intelligence Society"),
                date: "2024.11",
                link: "http://sol-link.com/ai-research"
            },
            {
                title: LocalizedString("분산 시스템에서의 데이터 일관성 보장 기법 연구", "Research on Data Consistency Assurance Techniques in Distributed Systems"),
                publisher: LocalizedString("대한 컴퓨터공학회", "Korean Institute of Computer Science and Engineering"),
                date: "2023.05",
                link: "http://sol-link.com/distributed-systems-research"
            }
        ],
        awards: [
            {
                name: LocalizedString("정보처리기사", "Certified Information Processing Engineer"),
                issuer: LocalizedString("한국산업인력공단", "Human Resources Development Service of Korea"),
                date: "2021.08"
            },
            {
                name: LocalizedString("전국 대학생 프로그래밍 경진대회 우수상", "National University Student Programming Contest Excellence Award"),
                issuer: LocalizedString("과학기술정보통신부", "Ministry of Science and ICT"),
                date: "2020.11"
            }
        ]
    }
};
