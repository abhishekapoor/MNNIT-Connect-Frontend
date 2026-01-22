import { PlaceHolderImages } from './placeholder-images';

const getImage = (id) => PlaceHolderImages.find((img) => img.id === id) || { imageUrl: '', imageHint: '' };

export const courses = ['B.Tech', 'M-Tech', 'MBA', 'MCA', 'Ph.D'];

export const clubs = [
  {
    id: '1',
    name: 'Application Club',
    description: 'Build amazing applications and learn software development.',
    members: 145,
    info: 'We meet every Tuesday to work on collaborative projects and share our coding experiences.',
    imageUrl: '/clubs/application club.jpg',
  },
  {
    id: '2',
    name: 'Computer Coding Club',
    description: 'Master programming languages and solve challenging algorithms.',
    members: 89,
    info: 'Join us for competitive programming contests and coding workshops every week.',
    imageUrl: '/clubs/coding club.jpg',
  },
  {
    id: '3',
    name: 'Dramatic Society',
    description: 'Express yourself through theatre and dramatic arts.',
    members: 62,
    info: 'We perform plays, conduct acting workshops, and explore the world of drama.',
    imageUrl: '/clubs/Dramatics club.jpg',
  },
  {
    id: '4',
    name: 'Media Club',
    description: 'Create content and tell stories through photography and videography.',
    members: 104,
    info: 'Learn film making, photography, and digital content creation with industry experts.',
    imageUrl: '/clubs/media club.jpg',
  },
  {
    id: '5',
    name: 'Quiz Club',
    description: 'Test your knowledge and compete in academic quizzes.',
    members: 78,
    info: 'Participate in weekly quizzes, national competitions, and knowledge-building sessions.',
    imageUrl: '/clubs/literature club.jpg', // (quiz ki image nahi thi, closest use ki)
  },
  {
    id: '6',
    name: 'Literary Club',
    description: 'Explore literature, poetry, and creative writing.',
    members: 55,
    info: 'Monthly book club meetings, poetry recitations, and writing workshops.',
    imageUrl: '/clubs/literature club.jpg',
  },
  {
    id: '7',
    name: 'Dance Club',
    description: 'Express yourself through dance and rhythm.',
    members: 92,
    info: 'Learn various dance forms including contemporary, Bollywood, and classical dance.',
    imageUrl: '/clubs/Dance club.jpg',
  },
  {
    id: '8',
    name: 'Green Club',
    description: 'Promote environmental sustainability and eco-friendly practices.',
    members: 67,
    info: 'Organize tree planting drives, awareness campaigns, and sustainable living workshops.',
    imageUrl: '/clubs/green club.jpg',
  },
  {
    id: '9',
    name: 'Robotic Club',
    description: 'Build and program robots for innovation challenges.',
    members: 83,
    info: 'Design and build robots, participate in robotics competitions and hackathons.',
    imageUrl: '/clubs/Robotics Club.jpg',
  },
  {
    id: '10',
    name: 'Athletic Club',
    description: 'Excel in sports and physical fitness activities.',
    members: 156,
    info: 'Train together, participate in inter-college sports events, and maintain fitness.',
    imageUrl: '/clubs/Athletic club.jpg',
  },
  {
    id: '11',
    name: 'Lifting Club',
    description: 'Build strength and master weightlifting techniques.',
    members: 71,
    info: 'Train under expert guidance, participate in strength competitions and fitness challenges.',
    imageUrl: '/clubs/lifting club.jpg',
  },
];

export const events = [
  { id: '1', title: 'Application Club Hackathon', date: new Date().toISOString().split('T')[0], startTime: '14:00', endTime: '16:00', location: 'Tech Building, Lab 1', description: 'Build your dream app in this exciting hackathon.', club: 'Application Club' },
  { id: '2', title: 'Coding Competition', date: new Date().toISOString().split('T')[0], startTime: '18:00', endTime: '19:30', location: 'Computer Lab, Block A', description: 'Solve algorithmic challenges and compete with peers.', club: 'Computer Coding Club' },
  { id: '3', title: 'Drama Night Showcase', date: new Date(new Date().setDate(new Date().getDate() + 2)).toISOString().split('T')[0], startTime: '19:00', endTime: '21:00', location: 'Main Auditorium', description: 'Watch amazing dramatic performances on stage.', club: 'Dramatic Society' },
  { id: '4', title: 'Media Workshop', date: new Date(new Date().setDate(new Date().getDate() + 3)).toISOString().split('T')[0], startTime: '15:00', endTime: '17:00', location: 'Media Studio', description: 'Learn professional video editing and photography.', club: 'Media Club' },
  { id: '5', title: 'Weekly Quiz Night', date: new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split('T')[0], startTime: '17:00', endTime: '18:30', location: 'Seminar Hall', description: 'Test your general knowledge with peers.', club: 'Quiz Club' },
  { id: '6', title: 'Poetry Recitation', date: new Date(new Date().setDate(new Date().getDate() + 4)).toISOString().split('T')[0], startTime: '18:00', endTime: '19:30', location: 'Library Hall', description: 'Share and listen to beautiful poetry.', club: 'Literary Club' },
];

export const resources = [
    { id: '1', title: 'Calculus I - Final Exam Study Guide', category: 'Study Guide', uploaded: '2024-05-10', fileUrl: '#' },
    { id: '2', title: 'Introduction to Python - Lecture Slides', category: 'Lecture Notes', uploaded: '2024-05-08', fileUrl: '#' },
    { id: '3', title: 'Organic Chemistry Lab Manual', category: 'Lab Manual', uploaded: '2024-05-05', fileUrl: '#' },
    { id: '4', title: 'History of Modern Art - Essay Prompts', category: 'Assignments', uploaded: '2024-05-02', fileUrl: '#' },
];

export const timetables = {
  'B.Tech': {
    '1': [
      { id: '1', day: 'Monday', startTime: '10:00', endTime: '11:00', courseCode: 'CS101', courseName: 'Programming Basics', location: 'Tech Hall 101', lecturer: 'Dr. Smith' },
      { id: '2', day: 'Monday', startTime: '13:00', endTime: '15:00', courseCode: 'MA101', courseName: 'Calculus I', location: 'Math Building 302', lecturer: 'Prof. Jones' },
      { id: '3', day: 'Tuesday', startTime: '09:00', endTime: '11:00', courseCode: 'PHY101', courseName: 'Physics I', location: 'Science Wing 105', lecturer: 'Dr. Evans' },
      { id: '4', day: 'Wednesday', startTime: '11:00', endTime: '12:00', courseCode: 'EN101', courseName: 'English Communication', location: 'Tech Hall 103', lecturer: 'Dr. Smith' },
      { id: '5', day: 'Wednesday', startTime: '14:00', endTime: '16:00', courseCode: 'CS102', courseName: 'Programming Lab', location: 'Lab 101', lecturer: 'Prof. Davis' },
      { id: '6', day: 'Thursday', startTime: '10:00', endTime: '12:00', courseCode: 'PHY102', courseName: 'Physics Lab', location: 'Lab 102', lecturer: 'Dr. Evans' },
      { id: '7', day: 'Friday', startTime: '13:00', endTime: '15:00', courseCode: 'MA102', courseName: 'Mathematics Lab', location: 'Lab 103', lecturer: 'Prof. Jones' },
    ],
    '2': [
      { id: '1', day: 'Monday', startTime: '10:00', endTime: '11:00', courseCode: 'CS201', courseName: 'Data Structures', location: 'Tech Hall 101', lecturer: 'Dr. Smith' },
      { id: '2', day: 'Monday', startTime: '13:00', endTime: '15:00', courseCode: 'CS202', courseName: 'Web Development', location: 'Tech Hall 102', lecturer: 'Prof. Jones' },
      { id: '3', day: 'Tuesday', startTime: '09:00', endTime: '11:00', courseCode: 'MA201', courseName: 'Calculus II', location: 'Math Building 301', lecturer: 'Dr. Evans' },
      { id: '4', day: 'Wednesday', startTime: '11:00', endTime: '12:00', courseCode: 'CS201', courseName: 'Data Structures Lab', location: 'Lab 201', lecturer: 'Dr. Smith' },
      { id: '5', day: 'Wednesday', startTime: '14:00', endTime: '16:00', courseCode: 'CS203', courseName: 'Database Basics', location: 'Lab 202', lecturer: 'Prof. Davis' },
      { id: '6', day: 'Thursday', startTime: '10:00', endTime: '12:00', courseCode: 'MA202', courseName: 'Linear Algebra', location: 'Math Building 302', lecturer: 'Prof. Evans' },
      { id: '7', day: 'Friday', startTime: '13:00', endTime: '15:00', courseCode: 'CS204', courseName: 'Web Dev Lab', location: 'Lab 203', lecturer: 'Prof. Jones' },
    ],
    '3': [
      { id: '1', day: 'Monday', startTime: '10:00', endTime: '11:00', courseCode: 'CS301', courseName: 'Algorithms', location: 'Tech Hall 201', lecturer: 'Dr. Smith' },
      { id: '2', day: 'Monday', startTime: '13:00', endTime: '15:00', courseCode: 'CS302', courseName: 'Operating Systems', location: 'Tech Hall 202', lecturer: 'Prof. Jones' },
      { id: '3', day: 'Tuesday', startTime: '09:00', endTime: '11:00', courseCode: 'CS303', courseName: 'Discrete Mathematics', location: 'Math Building 201', lecturer: 'Dr. Evans' },
      { id: '4', day: 'Wednesday', startTime: '11:00', endTime: '12:00', courseCode: 'CS301', courseName: 'Algorithms Lab', location: 'Lab 301', lecturer: 'Dr. Smith' },
      { id: '5', day: 'Wednesday', startTime: '14:00', endTime: '16:00', courseCode: 'CS304', courseName: 'Database Design', location: 'Lab 302', lecturer: 'Prof. Davis' },
      { id: '6', day: 'Thursday', startTime: '10:00', endTime: '12:00', courseCode: 'CS305', courseName: 'Software Engineering', location: 'Tech Hall 203', lecturer: 'Prof. Wilson' },
      { id: '7', day: 'Friday', startTime: '13:00', endTime: '15:00', courseCode: 'CS302', courseName: 'OS Lab', location: 'Lab 303', lecturer: 'Prof. Jones' },
    ],
    '4': [
      { id: '1', day: 'Monday', startTime: '10:00', endTime: '11:00', courseCode: 'CS401', courseName: 'Computer Networks', location: 'Tech Hall 301', lecturer: 'Dr. Smith' },
      { id: '2', day: 'Monday', startTime: '13:00', endTime: '15:00', courseCode: 'CS402', courseName: 'Web Security', location: 'Tech Hall 302', lecturer: 'Prof. Jones' },
      { id: '3', day: 'Tuesday', startTime: '09:00', endTime: '11:00', courseCode: 'CS403', courseName: 'Compiler Design', location: 'Tech Hall 303', lecturer: 'Dr. Evans' },
      { id: '4', day: 'Wednesday', startTime: '11:00', endTime: '12:00', courseCode: 'CS401', courseName: 'Networks Lab', location: 'Lab 401', lecturer: 'Dr. Smith' },
      { id: '5', day: 'Wednesday', startTime: '14:00', endTime: '16:00', courseCode: 'CS404', courseName: 'Mobile Development', location: 'Lab 402', lecturer: 'Prof. Davis' },
      { id: '6', day: 'Thursday', startTime: '10:00', endTime: '12:00', courseCode: 'CS405', courseName: 'Cloud Computing', location: 'Tech Hall 304', lecturer: 'Prof. Wilson' },
      { id: '7', day: 'Friday', startTime: '13:00', endTime: '15:00', courseCode: 'CS403', courseName: 'Compiler Lab', location: 'Lab 403', lecturer: 'Prof. Jones' },
    ],
    '5': [
      { id: '1', day: 'Monday', startTime: '10:00', endTime: '11:00', courseCode: 'CS501', courseName: 'Machine Learning', location: 'Tech Hall 401', lecturer: 'Dr. Smith' },
      { id: '2', day: 'Monday', startTime: '13:00', endTime: '15:00', courseCode: 'CS502', courseName: 'Artificial Intelligence', location: 'Tech Hall 402', lecturer: 'Prof. Jones' },
      { id: '3', day: 'Tuesday', startTime: '09:00', endTime: '11:00', courseCode: 'CS503', courseName: 'Big Data Analytics', location: 'Tech Hall 403', lecturer: 'Dr. Evans' },
      { id: '4', day: 'Wednesday', startTime: '11:00', endTime: '12:00', courseCode: 'CS501', courseName: 'ML Lab', location: 'Lab 501', lecturer: 'Dr. Smith' },
      { id: '5', day: 'Wednesday', startTime: '14:00', endTime: '16:00', courseCode: 'CS504', courseName: 'Data Science', location: 'Lab 502', lecturer: 'Prof. Davis' },
      { id: '6', day: 'Thursday', startTime: '10:00', endTime: '12:00', courseCode: 'CS505', courseName: 'Deep Learning', location: 'Tech Hall 404', lecturer: 'Prof. Wilson' },
      { id: '7', day: 'Friday', startTime: '13:00', endTime: '15:00', courseCode: 'CS503', courseName: 'Big Data Lab', location: 'Lab 503', lecturer: 'Prof. Jones' },
    ],
    '6': [
      { id: '1', day: 'Monday', startTime: '10:00', endTime: '11:00', courseCode: 'CS601', courseName: 'Advanced ML', location: 'Tech Hall 501', lecturer: 'Dr. Smith' },
      { id: '2', day: 'Monday', startTime: '13:00', endTime: '15:00', courseCode: 'CS602', courseName: 'Cybersecurity', location: 'Tech Hall 502', lecturer: 'Prof. Jones' },
      { id: '3', day: 'Tuesday', startTime: '09:00', endTime: '11:00', courseCode: 'CS603', courseName: 'IoT Systems', location: 'Tech Hall 503', lecturer: 'Dr. Evans' },
      { id: '4', day: 'Wednesday', startTime: '11:00', endTime: '12:00', courseCode: 'CS601', courseName: 'Advanced ML Lab', location: 'Lab 601', lecturer: 'Dr. Smith' },
      { id: '5', day: 'Wednesday', startTime: '14:00', endTime: '16:00', courseCode: 'CS604', courseName: 'Blockchain', location: 'Lab 602', lecturer: 'Prof. Davis' },
      { id: '6', day: 'Thursday', startTime: '10:00', endTime: '12:00', courseCode: 'CS605', courseName: 'Edge Computing', location: 'Tech Hall 504', lecturer: 'Prof. Wilson' },
      { id: '7', day: 'Friday', startTime: '13:00', endTime: '15:00', courseCode: 'CS603', courseName: 'IoT Lab', location: 'Lab 603', lecturer: 'Prof. Jones' },
    ],
    '7': [
      { id: '1', day: 'Monday', startTime: '10:00', endTime: '11:00', courseCode: 'CS701', courseName: 'Advanced Algorithms', location: 'Tech Hall 601', lecturer: 'Dr. Smith' },
      { id: '2', day: 'Monday', startTime: '13:00', endTime: '15:00', courseCode: 'CS702', courseName: 'Quantum Computing', location: 'Tech Hall 602', lecturer: 'Prof. Jones' },
      { id: '3', day: 'Tuesday', startTime: '09:00', endTime: '11:00', courseCode: 'CS703', courseName: 'Computer Vision', location: 'Tech Hall 603', lecturer: 'Dr. Evans' },
      { id: '4', day: 'Wednesday', startTime: '11:00', endTime: '12:00', courseCode: 'CS701', courseName: 'Algorithms Lab', location: 'Lab 701', lecturer: 'Dr. Smith' },
      { id: '5', day: 'Wednesday', startTime: '14:00', endTime: '16:00', courseCode: 'CS704', courseName: 'NLP', location: 'Lab 702', lecturer: 'Prof. Davis' },
      { id: '6', day: 'Thursday', startTime: '10:00', endTime: '12:00', courseCode: 'CS705', courseName: 'Robotics', location: 'Tech Hall 604', lecturer: 'Prof. Wilson' },
      { id: '7', day: 'Friday', startTime: '13:00', endTime: '15:00', courseCode: 'CS703', courseName: 'Vision Lab', location: 'Lab 703', lecturer: 'Prof. Jones' },
    ],
    '8': [
      { id: '1', day: 'Monday', startTime: '10:00', endTime: '11:00', courseCode: 'CS801', courseName: 'Final Year Project', location: 'Tech Hall 701', lecturer: 'Dr. Smith' },
      { id: '2', day: 'Monday', startTime: '13:00', endTime: '15:00', courseCode: 'CS802', courseName: 'Capstone Design', location: 'Tech Hall 702', lecturer: 'Prof. Jones' },
      { id: '3', day: 'Tuesday', startTime: '09:00', endTime: '11:00', courseCode: 'CS803', courseName: 'Industry Internship', location: 'External', lecturer: 'Dr. Evans' },
      { id: '4', day: 'Wednesday', startTime: '11:00', endTime: '12:00', courseCode: 'CS801', courseName: 'Project Review', location: 'Lab 801', lecturer: 'Dr. Smith' },
      { id: '5', day: 'Wednesday', startTime: '14:00', endTime: '16:00', courseCode: 'CS804', courseName: 'Thesis Seminar', location: 'Lab 802', lecturer: 'Prof. Davis' },
      { id: '6', day: 'Thursday', startTime: '10:00', endTime: '12:00', courseCode: 'CS805', courseName: 'Project Presentation', location: 'Tech Hall 703', lecturer: 'Prof. Wilson' },
      { id: '7', day: 'Friday', startTime: '13:00', endTime: '15:00', courseCode: 'CS806', courseName: 'Final Evaluation', location: 'Tech Hall 704', lecturer: 'Prof. Jones' },
    ],
    'Other': [
      { id: '1', day: 'Monday', startTime: '10:00', endTime: '11:00', courseCode: 'ELEC1', courseName: 'Elective Course 1', location: 'Tech Hall 801', lecturer: 'Dr. Smith' },
      { id: '2', day: 'Tuesday', startTime: '13:00', endTime: '15:00', courseCode: 'ELEC2', courseName: 'Elective Course 2', location: 'Tech Hall 802', lecturer: 'Prof. Jones' },
      { id: '3', day: 'Wednesday', startTime: '09:00', endTime: '11:00', courseCode: 'ELEC3', courseName: 'Elective Course 3', location: 'Tech Hall 803', lecturer: 'Dr. Evans' },
      { id: '4', day: 'Thursday', startTime: '11:00', endTime: '12:00', courseCode: 'ELEC4', courseName: 'Elective Course 4', location: 'Lab 804', lecturer: 'Prof. Davis' },
    ],
  },
  'M-Tech': {
    '1': [
      { id: '1', day: 'Monday', startTime: '10:00', endTime: '12:00', courseCode: 'MTECH501', courseName: 'Advanced Computing', location: 'Tech Hall 501', lecturer: 'Prof. Sharma' },
      { id: '2', day: 'Monday', startTime: '13:00', endTime: '15:00', courseCode: 'MTECH502', courseName: 'Research Methods', location: 'Tech Hall 502', lecturer: 'Dr. Kumar' },
      { id: '3', day: 'Tuesday', startTime: '09:00', endTime: '11:00', courseCode: 'MTECH503', courseName: 'Machine Learning', location: 'Tech Hall 503', lecturer: 'Prof. Patel' },
      { id: '4', day: 'Wednesday', startTime: '14:00', endTime: '16:00', courseCode: 'MTECH504', courseName: 'Cloud Technologies', location: 'Lab 501', lecturer: 'Dr. Singh' },
      { id: '5', day: 'Thursday', startTime: '10:00', endTime: '12:00', courseCode: 'MTECH505', courseName: 'Distributed Systems', location: 'Tech Hall 504', lecturer: 'Prof. Verma' },
      { id: '6', day: 'Friday', startTime: '13:00', endTime: '15:00', courseCode: 'MTECH506', courseName: 'Lab Work', location: 'Lab 502', lecturer: 'Dr. Gupta' },
    ],
    '2': [
      { id: '1', day: 'Monday', startTime: '10:00', endTime: '12:00', courseCode: 'MTECH601', courseName: 'Advanced AI', location: 'Tech Hall 601', lecturer: 'Prof. Sharma' },
      { id: '2', day: 'Monday', startTime: '13:00', endTime: '15:00', courseCode: 'MTECH602', courseName: 'Big Data Systems', location: 'Tech Hall 602', lecturer: 'Dr. Kumar' },
      { id: '3', day: 'Tuesday', startTime: '09:00', endTime: '11:00', courseCode: 'MTECH603', courseName: 'Cybersecurity', location: 'Tech Hall 603', lecturer: 'Prof. Patel' },
      { id: '4', day: 'Wednesday', startTime: '14:00', endTime: '16:00', courseCode: 'MTECH604', courseName: 'Deep Learning', location: 'Lab 601', lecturer: 'Dr. Singh' },
      { id: '5', day: 'Thursday', startTime: '10:00', endTime: '12:00', courseCode: 'MTECH605', courseName: 'IoT & Edge', location: 'Tech Hall 604', lecturer: 'Prof. Verma' },
      { id: '6', day: 'Friday', startTime: '13:00', endTime: '15:00', courseCode: 'MTECH606', courseName: 'Project Work', location: 'Lab 602', lecturer: 'Dr. Gupta' },
    ],
    '3': [
      { id: '1', day: 'Monday', startTime: '10:00', endTime: '12:00', courseCode: 'MTECH701', courseName: 'Advanced Research', location: 'Tech Hall 701', lecturer: 'Prof. Sharma' },
      { id: '2', day: 'Monday', startTime: '13:00', endTime: '15:00', courseCode: 'MTECH702', courseName: 'Blockchain', location: 'Tech Hall 702', lecturer: 'Dr. Kumar' },
      { id: '3', day: 'Tuesday', startTime: '09:00', endTime: '11:00', courseCode: 'MTECH703', courseName: 'Quantum Computing', location: 'Tech Hall 703', lecturer: 'Prof. Patel' },
      { id: '4', day: 'Wednesday', startTime: '14:00', endTime: '16:00', courseCode: 'MTECH704', courseName: 'Seminar', location: 'Lab 701', lecturer: 'Dr. Singh' },
      { id: '5', day: 'Thursday', startTime: '10:00', endTime: '12:00', courseCode: 'MTECH705', courseName: 'Elective 1', location: 'Tech Hall 704', lecturer: 'Prof. Verma' },
      { id: '6', day: 'Friday', startTime: '13:00', endTime: '15:00', courseCode: 'MTECH706', courseName: 'Thesis Work', location: 'Lab 702', lecturer: 'Dr. Gupta' },
    ],
    '4': [
      { id: '1', day: 'Monday', startTime: '10:00', endTime: '12:00', courseCode: 'MTECH801', courseName: 'Thesis Part 2', location: 'Lab 801', lecturer: 'Prof. Sharma' },
      { id: '2', day: 'Tuesday', startTime: '09:00', endTime: '11:00', courseCode: 'MTECH802', courseName: 'Research Publication', location: 'Lab 802', lecturer: 'Dr. Kumar' },
      { id: '3', day: 'Wednesday', startTime: '14:00', endTime: '16:00', courseCode: 'MTECH803', courseName: 'Thesis Seminar', location: 'Lab 803', lecturer: 'Prof. Patel' },
      { id: '4', day: 'Thursday', startTime: '10:00', endTime: '12:00', courseCode: 'MTECH804', courseName: 'Final Evaluation', location: 'Tech Hall 801', lecturer: 'Dr. Singh' },
    ],
    'Other': [
      { id: '1', day: 'Monday', startTime: '10:00', endTime: '12:00', courseCode: 'MTECHELEC1', courseName: 'Specialization 1', location: 'Tech Hall 901', lecturer: 'Prof. Sharma' },
      { id: '2', day: 'Wednesday', startTime: '14:00', endTime: '16:00', courseCode: 'MTECHELEC2', courseName: 'Specialization 2', location: 'Tech Hall 902', lecturer: 'Dr. Kumar' },
    ],
  },
  'MBA': {
    '1': [
      { id: '1', day: 'Monday', startTime: '10:00', endTime: '12:00', courseCode: 'MBA501', courseName: 'Business Strategy', location: 'MBA Hall 201', lecturer: 'Prof. Anderson' },
      { id: '2', day: 'Monday', startTime: '13:00', endTime: '15:00', courseCode: 'MBA502', courseName: 'Financial Management', location: 'MBA Hall 202', lecturer: 'Dr. Wilson' },
      { id: '3', day: 'Tuesday', startTime: '09:00', endTime: '11:00', courseCode: 'MBA503', courseName: 'Marketing Management', location: 'MBA Hall 203', lecturer: 'Prof. Taylor' },
      { id: '4', day: 'Wednesday', startTime: '11:00', endTime: '13:00', courseCode: 'MBA504', courseName: 'Organizational Behavior', location: 'MBA Hall 204', lecturer: 'Dr. Brown' },
      { id: '5', day: 'Wednesday', startTime: '14:00', endTime: '16:00', courseCode: 'MBA505', courseName: 'Operations Management', location: 'MBA Hall 205', lecturer: 'Prof. Miller' },
      { id: '6', day: 'Thursday', startTime: '10:00', endTime: '12:00', courseCode: 'MBA506', courseName: 'Business Analytics', location: 'Lab 301', lecturer: 'Dr. Martin' },
      { id: '7', day: 'Friday', startTime: '13:00', endTime: '15:00', courseCode: 'MBA507', courseName: 'Business Law', location: 'MBA Hall 206', lecturer: 'Prof. Anderson' },
    ],
    '2': [
      { id: '1', day: 'Monday', startTime: '10:00', endTime: '12:00', courseCode: 'MBA601', courseName: 'Advanced Finance', location: 'MBA Hall 301', lecturer: 'Prof. Anderson' },
      { id: '2', day: 'Monday', startTime: '13:00', endTime: '15:00', courseCode: 'MBA602', courseName: 'Supply Chain Mgmt', location: 'MBA Hall 302', lecturer: 'Dr. Wilson' },
      { id: '3', day: 'Tuesday', startTime: '09:00', endTime: '11:00', courseCode: 'MBA603', courseName: 'International Business', location: 'MBA Hall 303', lecturer: 'Prof. Taylor' },
      { id: '4', day: 'Wednesday', startTime: '11:00', endTime: '13:00', courseCode: 'MBA604', courseName: 'HR Strategy', location: 'MBA Hall 304', lecturer: 'Dr. Brown' },
      { id: '5', day: 'Wednesday', startTime: '14:00', endTime: '16:00', courseCode: 'MBA605', courseName: 'Project Management', location: 'MBA Hall 305', lecturer: 'Prof. Miller' },
      { id: '6', day: 'Thursday', startTime: '10:00', endTime: '12:00', courseCode: 'MBA606', courseName: 'Digital Marketing', location: 'Lab 302', lecturer: 'Dr. Martin' },
      { id: '7', day: 'Friday', startTime: '13:00', endTime: '15:00', courseCode: 'MBA607', courseName: 'Thesis Work', location: 'MBA Hall 306', lecturer: 'Prof. Anderson' },
    ],
    '3': [
      { id: '1', day: 'Monday', startTime: '10:00', endTime: '12:00', courseCode: 'MBA701', courseName: 'Strategic Management', location: 'MBA Hall 401', lecturer: 'Prof. Anderson' },
      { id: '2', day: 'Tuesday', startTime: '09:00', endTime: '11:00', courseCode: 'MBA702', courseName: 'Consulting Project', location: 'MBA Hall 402', lecturer: 'Dr. Wilson' },
      { id: '3', day: 'Wednesday', startTime: '14:00', endTime: '16:00', courseCode: 'MBA703', courseName: 'Capstone Course', location: 'Lab 303', lecturer: 'Prof. Taylor' },
      { id: '4', day: 'Thursday', startTime: '10:00', endTime: '12:00', courseCode: 'MBA704', courseName: 'Elective Course', location: 'MBA Hall 403', lecturer: 'Dr. Brown' },
    ],
    '4': [
      { id: '1', day: 'Monday', startTime: '10:00', endTime: '12:00', courseCode: 'MBA801', courseName: 'Final Thesis', location: 'Lab 401', lecturer: 'Prof. Anderson' },
      { id: '2', day: 'Wednesday', startTime: '14:00', endTime: '16:00', courseCode: 'MBA802', courseName: 'Thesis Submission', location: 'MBA Hall 501', lecturer: 'Dr. Wilson' },
      { id: '3', day: 'Friday', startTime: '13:00', endTime: '15:00', courseCode: 'MBA803', courseName: 'Evaluation', location: 'Lab 402', lecturer: 'Prof. Taylor' },
    ],
    'Other': [
      { id: '1', day: 'Monday', startTime: '10:00', endTime: '12:00', courseCode: 'MBAELEC1', courseName: 'Specialization 1', location: 'MBA Hall 601', lecturer: 'Prof. Anderson' },
      { id: '2', day: 'Wednesday', startTime: '14:00', endTime: '16:00', courseCode: 'MBAELEC2', courseName: 'Specialization 2', location: 'MBA Hall 602', lecturer: 'Dr. Wilson' },
    ],
  },
  'MCA': {
    '1': [
      { id: '1', day: 'Monday', startTime: '10:00', endTime: '11:30', courseCode: 'MCA601', courseName: 'Advanced Algorithms', location: 'CS Lab 401', lecturer: 'Dr. Kumar' },
      { id: '2', day: 'Monday', startTime: '13:00', endTime: '15:00', courseCode: 'MCA602', courseName: 'Machine Learning', location: 'CS Lab 402', lecturer: 'Prof. Sharma' },
      { id: '3', day: 'Tuesday', startTime: '09:00', endTime: '11:00', courseCode: 'MCA603', courseName: 'Cloud Computing', location: 'CS Lab 403', lecturer: 'Dr. Patel' },
      { id: '4', day: 'Wednesday', startTime: '11:00', endTime: '12:30', courseCode: 'MCA604', courseName: 'AI & Neural Networks', location: 'CS Lab 404', lecturer: 'Prof. Singh' },
      { id: '5', day: 'Wednesday', startTime: '14:00', endTime: '16:00', courseCode: 'MCA605', courseName: 'Cybersecurity', location: 'CS Lab 405', lecturer: 'Dr. Verma' },
      { id: '6', day: 'Thursday', startTime: '10:00', endTime: '12:00', courseCode: 'MCA606', courseName: 'Big Data Analytics', location: 'Lab 406', lecturer: 'Prof. Gupta' },
      { id: '7', day: 'Friday', startTime: '13:00', endTime: '15:00', courseCode: 'MCA607', courseName: 'Software Architecture', location: 'CS Lab 401', lecturer: 'Dr. Nair' },
    ],
    '2': [
      { id: '1', day: 'Monday', startTime: '10:00', endTime: '11:30', courseCode: 'MCA701', courseName: 'Advanced ML', location: 'CS Lab 501', lecturer: 'Dr. Kumar' },
      { id: '2', day: 'Monday', startTime: '13:00', endTime: '15:00', courseCode: 'MCA702', courseName: 'Blockchain Tech', location: 'CS Lab 502', lecturer: 'Prof. Sharma' },
      { id: '3', day: 'Tuesday', startTime: '09:00', endTime: '11:00', courseCode: 'MCA703', courseName: 'IoT Systems', location: 'CS Lab 503', lecturer: 'Dr. Patel' },
      { id: '4', day: 'Wednesday', startTime: '11:00', endTime: '12:30', courseCode: 'MCA704', courseName: 'Deep Learning', location: 'CS Lab 504', lecturer: 'Prof. Singh' },
      { id: '5', day: 'Wednesday', startTime: '14:00', endTime: '16:00', courseCode: 'MCA705', courseName: 'Edge Computing', location: 'CS Lab 505', lecturer: 'Dr. Verma' },
      { id: '6', day: 'Thursday', startTime: '10:00', endTime: '12:00', courseCode: 'MCA706', courseName: 'Computer Vision', location: 'Lab 506', lecturer: 'Prof. Gupta' },
      { id: '7', day: 'Friday', startTime: '13:00', endTime: '15:00', courseCode: 'MCA707', courseName: 'Project Work', location: 'CS Lab 501', lecturer: 'Dr. Nair' },
    ],
    '3': [
      { id: '1', day: 'Monday', startTime: '10:00', endTime: '11:30', courseCode: 'MCA801', courseName: 'NLP', location: 'CS Lab 601', lecturer: 'Dr. Kumar' },
      { id: '2', day: 'Monday', startTime: '13:00', endTime: '15:00', courseCode: 'MCA802', courseName: 'Quantum Computing', location: 'CS Lab 602', lecturer: 'Prof. Sharma' },
      { id: '3', day: 'Tuesday', startTime: '09:00', endTime: '11:00', courseCode: 'MCA803', courseName: 'Advanced Crypto', location: 'CS Lab 603', lecturer: 'Dr. Patel' },
      { id: '4', day: 'Wednesday', startTime: '14:00', endTime: '16:00', courseCode: 'MCA804', courseName: 'Seminar', location: 'Lab 607', lecturer: 'Prof. Singh' },
      { id: '5', day: 'Thursday', startTime: '10:00', endTime: '12:00', courseCode: 'MCA805', courseName: 'Elective', location: 'CS Lab 604', lecturer: 'Dr. Verma' },
      { id: '6', day: 'Friday', startTime: '13:00', endTime: '15:00', courseCode: 'MCA806', courseName: 'Project Phase 1', location: 'Lab 608', lecturer: 'Prof. Gupta' },
    ],
    '4': [
      { id: '1', day: 'Monday', startTime: '10:00', endTime: '11:30', courseCode: 'MCA901', courseName: 'Advanced Project', location: 'CS Lab 701', lecturer: 'Dr. Kumar' },
      { id: '2', day: 'Tuesday', startTime: '09:00', endTime: '11:00', courseCode: 'MCA902', courseName: 'Research Methods', location: 'CS Lab 702', lecturer: 'Prof. Sharma' },
      { id: '3', day: 'Wednesday', startTime: '14:00', endTime: '16:00', courseCode: 'MCA903', courseName: 'Project Seminar', location: 'Lab 709', lecturer: 'Dr. Patel' },
      { id: '4', day: 'Thursday', startTime: '10:00', endTime: '12:00', courseCode: 'MCA904', courseName: 'Project Presentation', location: 'CS Lab 703', lecturer: 'Prof. Singh' },
    ],
    '5': [
      { id: '1', day: 'Monday', startTime: '10:00', endTime: '11:30', courseCode: 'MCA1001', courseName: 'Project Phase 2', location: 'Lab 801', lecturer: 'Dr. Kumar' },
      { id: '2', day: 'Wednesday', startTime: '14:00', endTime: '16:00', courseCode: 'MCA1002', courseName: 'Thesis Seminar', location: 'Lab 802', lecturer: 'Prof. Sharma' },
      { id: '3', day: 'Friday', startTime: '13:00', endTime: '15:00', courseCode: 'MCA1003', courseName: 'Project Work', location: 'Lab 803', lecturer: 'Dr. Patel' },
    ],
    '6': [
      { id: '1', day: 'Monday', startTime: '10:00', endTime: '11:30', courseCode: 'MCA1101', courseName: 'Final Project', location: 'Lab 901', lecturer: 'Dr. Kumar' },
      { id: '2', day: 'Wednesday', startTime: '14:00', endTime: '16:00', courseCode: 'MCA1102', courseName: 'Final Evaluation', location: 'Lab 902', lecturer: 'Prof. Sharma' },
      { id: '3', day: 'Friday', startTime: '13:00', endTime: '15:00', courseCode: 'MCA1103', courseName: 'Project Defense', location: 'Lab 903', lecturer: 'Dr. Patel' },
    ],
    'Other': [
      { id: '1', day: 'Monday', startTime: '10:00', endTime: '11:30', courseCode: 'MCAELEC1', courseName: 'Specialization 1', location: 'CS Lab 801', lecturer: 'Dr. Kumar' },
      { id: '2', day: 'Wednesday', startTime: '14:00', endTime: '16:00', courseCode: 'MCAELEC2', courseName: 'Specialization 2', location: 'CS Lab 802', lecturer: 'Prof. Sharma' },
    ],
  },
  'Ph.D': {
    '1': [
      { id: '1', day: 'Monday', startTime: '10:00', endTime: '12:00', courseCode: 'PHD801', courseName: 'Research Methods', location: 'Research Center 801', lecturer: 'Prof. Research Lead' },
      { id: '2', day: 'Monday', startTime: '13:00', endTime: '15:00', courseCode: 'PHD802', courseName: 'Advanced Topics', location: 'Research Center 802', lecturer: 'Dr. Expert 1' },
      { id: '3', day: 'Tuesday', startTime: '09:00', endTime: '11:00', courseCode: 'PHD803', courseName: 'Thesis Seminar', location: 'Research Center 803', lecturer: 'Prof. Guide' },
      { id: '4', day: 'Wednesday', startTime: '11:00', endTime: '13:00', courseCode: 'PHD804', courseName: 'Literature Review', location: 'Research Center 804', lecturer: 'Dr. Expert 2' },
      { id: '5', day: 'Wednesday', startTime: '14:00', endTime: '16:00', courseCode: 'PHD805', courseName: 'Research Ethics', location: 'Research Center 805', lecturer: 'Prof. Ethics Officer' },
      { id: '6', day: 'Thursday', startTime: '10:00', endTime: '12:00', courseCode: 'PHD806', courseName: 'Advanced Lab Work', location: 'Lab 801', lecturer: 'Dr. Lab Head' },
      { id: '7', day: 'Friday', startTime: '13:00', endTime: '15:00', courseCode: 'PHD807', courseName: 'Thesis Work', location: 'Research Center 806', lecturer: 'Prof. Research Lead' },
    ],
    '2': [
      { id: '1', day: 'Monday', startTime: '10:00', endTime: '12:00', courseCode: 'PHD901', courseName: 'Research Paper Review', location: 'Research Center 901', lecturer: 'Prof. Research Lead' },
      { id: '2', day: 'Monday', startTime: '13:00', endTime: '15:00', courseCode: 'PHD902', courseName: 'Specialized Research', location: 'Research Center 902', lecturer: 'Dr. Expert 1' },
      { id: '3', day: 'Tuesday', startTime: '09:00', endTime: '11:00', courseCode: 'PHD903', courseName: 'Innovative Methods', location: 'Research Center 903', lecturer: 'Prof. Guide' },
      { id: '4', day: 'Wednesday', startTime: '11:00', endTime: '13:00', courseCode: 'PHD904', courseName: 'Publishing Skills', location: 'Research Center 904', lecturer: 'Dr. Expert 2' },
      { id: '5', day: 'Wednesday', startTime: '14:00', endTime: '16:00', courseCode: 'PHD905', courseName: 'Thesis Presentation', location: 'Research Center 905', lecturer: 'Prof. Ethics Officer' },
      { id: '6', day: 'Thursday', startTime: '10:00', endTime: '12:00', courseCode: 'PHD906', courseName: 'Collaborative Research', location: 'Lab 902', lecturer: 'Dr. Lab Head' },
      { id: '7', day: 'Friday', startTime: '13:00', endTime: '15:00', courseCode: 'PHD907', courseName: 'Thesis Finalization', location: 'Research Center 906', lecturer: 'Prof. Research Lead' },
    ],
    'Other': [
      { id: '1', day: 'Monday', startTime: '10:00', endTime: '12:00', courseCode: 'PHDELEC1', courseName: 'Research Domain 1', location: 'Research Center 1001', lecturer: 'Prof. Research Lead' },
      { id: '2', day: 'Wednesday', startTime: '14:00', endTime: '16:00', courseCode: 'PHDELEC2', courseName: 'Research Domain 2', location: 'Research Center 1002', lecturer: 'Dr. Expert 1' },
    ],
  },
};

// Default timetable for backward compatibility
export const timetable = timetables['B.Tech']['1'];

export const foundItems = [
  { id: '1', name: 'Black Leather Wallet', description: 'A standard black leather wallet containing some cash and credit cards. Found near the library entrance.', dateFound: '2024-05-12', locationFound: 'Library', ...getImage('found-item-1') },
  { id: '2', name: 'Silver Key Set', description: 'A set of three keys on a silver keyring with a small bottle opener attached.', dateFound: '2024-05-11', locationFound: 'Student Cafeteria', ...getImage('found-item-2') },
  { id: '3', name: 'Blue Hydro Flask', description: 'A large blue water bottle (Hydro Flask) with a few stickers on it. One sticker is of a mountain range.', dateFound: '2024-05-10', locationFound: 'Gym', ...getImage('found-item-3') },
];
