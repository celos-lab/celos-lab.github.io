// Site text. The site is a single English page; Korean is added inline where the
// original Notion page (celos.super.site) had it. Inline markup: see lib/emph.ts.
export const ui = {
  'site.title': 'CELOS Lab | Control, Estimation, and Learning for Optimal Systems | 한양대학교 CELOS 연구실',
  'site.description':
    'CELOS Lab (한양대학교 CELOS 연구실) at Hanyang University researches learning-based optimal control and estimation for autonomous vehicles and robots: sampling-based MPC, reinforcement learning, and sensor fusion with radar, LiDAR, camera and IMU.',
  'nav.about': 'About',
  'nav.news': 'News',
  'nav.pi': 'Member (P.I.)',
  'nav.members': 'Members',
  'nav.achievements': 'Achievements',
  'nav.projects': 'Projects',
  'nav.join': 'Join us',
  'nav.menu': 'Menu',
  'hero.school': 'School of Electrical Engineering',
  'hero.title': 'Learning-based optimal control for autonomous systems',
  'about.label': 'About CELOS',
  'about.body':
    'The CELOS Lab. conducts research on learning-based optimal control and estimation, covering the control of autonomous vehicles/robots, and the sensor fusion system used in autonomous systems, such as Radar/LiDAR/Camera/IMU.',
  'about.bodyKo':
    'CELOS 연구실은 __학습 기반 최적 제어 및 추정을 연구__합니다. __자율주행차량과 자율로봇의 제어__ 뿐만 아니라, 자율시스템에 들어가는 Radar, LiDAR, Camera, IMU 등의 __다양한 센서를 융합한 시스템을 설계__합니다.',
  'about.keywords': 'Keywords',
  'about.pi': 'Principal Investigator',
  'about.welcome': 'Welcome to the CELOS Laboratory!',
  'about.pi.title': 'Assistant Professor, Electrical Engineering and Mechanical Engineering (joint appointment), Hanyang University',
  'about.office': 'Office',
  'about.office.value': 'Room 402, Engineering Building 3 (제3공학관 402호)',
  'research.title': 'Research Goals',
  'research.more': 'You can find more information about our research topics below',
  'history.title': 'etc.',
  'history.subtitle': 'Previous projects',
  'news.title': 'Lab news',
  'news.featured': 'Featured',
  'news.featured.title': 'Winner, International Robotics Competition at the IEEE IROS 2025 Workshop (Wheel-Legged Robot)',
  'news.featured.titleKo': 'IEEE IROS 2025 워크숍 국제 로보틱스 대회 우승 (휠-족형 로봇)',
  'news.tag': 'Tag',
  'news.item': 'News',
  'members.title': 'Members',
  'members.pi': 'Professor (Principal Investigator)',
  'members.current': 'Current members',
  'members.alumni': 'Alumni',
  'members.seeMore': 'See more',
  'achievements.title': 'Achievements',
  'pubs.title': 'Publications',
  'pubs.international': 'International',
  'pubs.domestic': 'Domestic',
  'pubs.ip': 'Patents and technology transfer',
  'pubs.review': 'papers under review',
  'pubs.showAll': 'Show all',
  'pubs.showLess': 'Show less',
  'awards.title': 'Awards',
  'talks.title': 'Invited seminars and workshops',
  'cv.title': 'Prof. Seungho Han',
  'cv.description':
    'Seungho Han, Assistant Professor at Hanyang University and principal investigator of the CELOS Lab: research experience, education, academic service, invited talks and lectures.',
  'cv.topics': 'Research Topics',
  'cv.topics.value': 'Optimal control, Reinforcement learning-based control, Autonomous vehicle/robot',
  'cv.profile': 'Research profile',
  'cv.talks': 'Invited Seminar/Workshop/Talk',
  'cv.back': 'Back to CELOS Lab',
  'projects.title': 'Ongoing projects',
  'projects.period': 'Period',
  'projects.name': 'Project name',
  'projects.budget': 'Budget [KRW]',
  'partners.label': 'Academic Partners',
  'partners.domestic': 'Domestic',
  'partners.international': 'International',
  'join.label': 'Recruiting',
  'join.title': 'Join the CELOS Lab',
  'join.bodyKo':
    '진로면담을 희망하거나, 석박사과정 진학/학부인턴 희망자는 **__설문지를 클릭하여 작성__**해주세요. (5분)',
  'join.body':
    'If you would like to schedule a meeting with the advisor, **__please click the survey link and complete it__**. (5 mins)',
  'join.cta.ko': '설문조사 링크 (한국어)',
  'join.cta.en': 'Survey link (English)',
  'footer.address': 'Room 402, Engineering Building 3, Hanyang University, 55 Hanyangdaehak-ro, Sangnok-gu, Ansan, Gyeonggi-do, Korea (제3공학관 402호)',
} as const;

export type UiKey = keyof typeof ui;
export const t = (key: UiKey) => ui[key];

export const joinForm = {
  en: 'https://forms.gle/M7eCk1PAXrW9emQTA',
  ko: 'https://forms.gle/aQwKu1ECgoNGQ5PA8',
};

export const links = {
  cv: '/members/seungho-han/',
  orcid: 'https://orcid.org/0000-0002-6821-326X',
  scholar: 'https://scholar.google.co.kr/citations?user=9Npz-lkAAAAJ&hl=ko',
  linkedin: 'https://www.linkedin.com/in/seungho-han-sk/',
  youtube: 'https://www.youtube.com/@celos_lab',
  blog: 'https://calos-lab.tistory.com/',
  email: 'seunghohan@hanyang.ac.kr',
};
