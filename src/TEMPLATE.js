// MUI: Icons
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GithubIcon from "@mui/icons-material/GitHub";

// Data object that contains all of the data for the template.
const data = {
  profile: {
    name: "Mohammedbrhan Abdelkadr",
    address: "Addis Ababa, Ethiopia",
    avatar: "profile-photo.png",
    summary:
      "I am a Fullstack Web Developer with 6+ years of work Experience in Analyzing, Designing, Developing and Integrating Front-End & Back-End based applications. I am capable of developing Back-End applications and APIs using PHP and MySQL. I also have Experience in developing Front-End applications and API clients using HTML, CSS, JavaScript, and Bootstrap. Currently, I am Learning and working with Laravel, Drupal, ReactJs, Nodejs, and ExpressJs heading towards the MERN-Stack. ",
    contacts: [
      { icon: PhoneIcon, label: "Phone", value: "(+251) 927 73 45 04" },
      { icon: EmailIcon, label: "Email", value: "eakmsa@gmail.com" },
      {
        icon: HomeIcon,
        label: "Address",
        value: "Kolfe Keraniyo, Addis Ababa, Ethiopia",
      },
    ],
    skills: [
      {
        category: "Programming Languages:",
        skills: "PHP, Java, Python, JavaScript, Node.js",
      },
      { category: "Databases:", skills: "MySQL, Sqlite, MongoDB" },
      { category: "Operating Systems:", skills: "Unix/Linux, Windows" },
      { category: "Frontend:", skills: "HTML, CSS, JavaScript" },
      {
        category: "Web Development Frameworks:",
        skills:
          "Laravel, Drupal, Django, Spring, Express.js, React.js, Vue.js, Material UI, Bootstrap CSS",
      },
      {
        category: "Tools:",
        skills:
          "VS Code, XAMPP, Phpmyadmin, Navicat-MySQL client, Postman, Composer, NPM, Git (GitHub), Docker, CPanel, Trello",
      },
      {
        category: "Soft skills:",
        skills:
          "Communication, Teamwork, Critical Thinking, Positive Attitude, Work Ethic",
      },
    ],
    socialMedia: [
      { icon: FacebookIcon, link: "#" },
      { icon: InstagramIcon, link: "#" },
      { icon: TwitterIcon, link: "#" },
      {
        icon: LinkedInIcon,
        link: "https://www.linkedin.com/in/mohammedbrhan-abdelkadr/",
      },
      { icon: GithubIcon, link: "https://github.com/github-eakmsa" },
    ],
    education: [
      {
        degree: "M.Sc. - in Data and Web Engineering in Computer Science",
        date: "Sep 2018 - Oct 2021",
        school: "Addis Ababa University - Addis Ababa, Ethiopia",
        // gpa: "Overall GPA: 3.33, GPA in Major: 3.50"
      },
      {
        degree: "B.Sc. - in Computer Science",
        date: "Sep 2013 - Jul 2016",
        school: "Mekelle University - Mekelle, Ethiopia",
        gpa: "Overall GPA: 3.33, GPA in Major: 3.50",
      },
    ],
    experience: [
      {
        title:
          "Remote Software Engineer / AddWeb Solution private limited - Ahmedabad, India",
        date: "Aug 2022 - Feb 2024",
        description:
          "Backend, frontend, REST API, Microservices using Laravel, Drupal",
      },
      {
        title:
          "Software Developer / Al-Afia Share Company - Addis Ababa, Ethiopia",
        date: "July 2020 - Aug 2022",
        description:
          "Full stack Web development, training, technical support, and maintenance.",
      },
      {
        title:
          "Contract Web Developer / Al-Afia Share Company - Addis Ababa, Ethiopia",
        date: "Aug 2019 - July 2020",
        description:
          "Full stack Web development, backend logic using PHP, database design and development using MySQL, Frontend development using HTML, CSS, Javascript, and Bootstrap CSS.",
      },
    ],
    certifications: [
      {
        title: "JavaScript Tutorial Course / #1024-12400479 / Sololearn",
        date: "2019",
        description: "",
      },
      {
        title: "PHP Tutorial Course / #1059-12400479 / Sololearn",
        date: "2019",
        description: "",
      },
      {
        title: "Java Tutorial Course / #1059-12400479 / Sololearn",
        date: "2019",
        description: "",
      },
    ],
    awards: [
      {
        title: "Certificate of Completion for Student Information Management System development / Al-Afia Share Company ",
        date: "2021",
        description: "",
      },
      {
        title: "Certificate of Completion for Share Holder Information Management System development / Al-Afia Share Company ",
        date: "2021",
        description: "",
      },
      {
        title: "Certificate of Completion for Video Production Management System development / Al-Habesha Media and Communication",
        date: "2020",
        description: "",
      },
    ],
  },

  posts: {
    name: "Mohammedbrhan Abdelkadr",
    avatar: "profile-photo.png",
    background_image: "https://source.unsplash.com/random?wallpapers",
    post_data: [
      {
        id: 1,
        timestamp: "2 hours ago",
        description: "Enjoying a sunny day at the beach!",
        image: "https://source.unsplash.com/random?wallpapers",
      },
      {
        id: 2,
        timestamp: "5 hours ago",
        description: "Just finished reading this amazing book.",
        type: "note",
      },
      {
        id: 3,
        timestamp: "2 hours ago",
        description: "Enjoying a sunny day at the beach!",
        image: "https://source.unsplash.com/random?wallpapers",
      },
      {
        id: 4,
        timestamp: "5 hours ago",
        description: "Just finished reading this amazing book.",
        type: "note",
      },
      {
        id: 5,
        author: "John Doe",
        avatar: "/path-to-avatar1.jpg",
        timestamp: "2 hours ago",
        description: "Enjoying a sunny day at the beach!",
        image: "https://source.unsplash.com/random?wallpapers",
      },
    ],
  },
};

// Exporting the data object so that the App.js file can import it.
export default data;
