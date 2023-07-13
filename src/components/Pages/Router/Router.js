import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Fullstack from "../Fullstack";
import Cybersecurity from "../Cybersecurity";
import Datascience from "../Datascience";
import Career from "../Career";
import All from "./All";
import Bcardcrea from "../Scardcrea/Bcardcrea";
import guvi from "./Images/guvi.png";
import blogHead from "./Images/blogHead.png";

let array = [
  [
    {
      id: 1,
      link: "/Bcardcrea/1",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp1mGJoG2jdFHneX6PBxp5kksM14ERrRp5vHev2ttBzzBZUSqYi896VmOYjwOx4Ry7-Xo&usqp=CAU",
      name: "Business Analyst – An Insight into Their Life",
      Desc: "Have you ever wondered how business tends to maintain everything in proper order despite having",
      subDesc:
        "Apache is the most widely used web server in the world, powering over 40% of all websites on the internet. It is an open-source, cross-platform web server that is maintained by the Apache Software Foundation. ",
    },
    {
      id: 2,
      link: "/Bcardcrea/2",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvIY_qeVjQu1mDTlkGUlMp7ukUhXRkbr8zLl3JdB5xSpbbbRQ2XluSLHlvDysPN3A12Gk&usqp=CAU",
      name: "10 Best Corporate Training Programs for Employees in 2023",
      Desc: "Are you looking to supercharge your workforce and leverage its true power? Look no further",
      subDesc:
        "Apache is the most widely used web server in the world, powering over 40% of all websites on the internet. It is an open-source, cross-platform web server that is maintained by the Apache Software Foundation. ",
    },
    {
      id: 3,
      link: "/Bcardcrea/3",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE5uCHfrubE9D7oHCE-wNFceDeUc2ha9R4ZRAA9OfcniV0CAMTrf1g6ilB0Cq4r-_GNMY&usqp=CAU",
      name: "Top Statistical Programming Languages of 2023",
      Desc: "In this ever-growing vast field of technology, programming languages play a pivotal role in its",
      subDesc:
        "Apache is the most widely used web server in the world, powering over 40% of all websites on the internet. It is an open-source, cross-platform web server that is maintained by the Apache Software Foundation. ",
    },
  ],

  [
    {
      id: 4,
      link: "/Bcardcrea/4",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfSPAljr9lvfWYdEcFgGuKjS8DkpC7isk8q2RjSJuy_kyCsboJ7xshIV_nY-dQMumFSgQ&usqp=CAU",
      name: "How does Apache work? A detailed introduction to Apache",
      Desc: "Apache is the most widely used web server in the world, powering over 40% of all websites on the internet.",
      subDesc:
        "Apache is the most widely used web server in the world, powering over 40% of all websites on the internet. It is an open-source, cross-platform web server that is maintained by the Apache Software Foundation. ",
    },
    {
      id: 5,
      link: "/Bcardcrea/5",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx5Y-CCgWk2cr-yiziy9uODKuwJV5OxM3yeBgTK5D7vhpYMA2X1c1N75c18thS843Vd9g&usqp=CAU",
      name: "Do you want to become a full stack developer? If yes, you must definitely know",
      Desc: "Apache is the most widely used web server in the world, powering over 40% of all websites on the internet.",
      subDesc:
        "With their versatile skill set and ability to navigate both technical and non-technical aspects, full stack developers contribute to the success of diverse software projects in today’s fast-paced and evolving digital landscape. Without much ado, let’s take a dive deep into each aspects of becoming a full stack developer in 2023.",
    },
    {
      id: 6,
      link: "/Bcardcrea/6",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvNGA9IwjjpnnK44RY9sPdKPJ4b74paslmKcgLfLRdABX1nNDH2fPRFV8AfCCGZu8cioQ&usqp=CAU",
      name: "Software development is set to grow at the rate of 25% between 2021-2031. An illustrious",
      Desc: "Apache is the most widely used web server in the world, powering over 40% of all websites on the internet.",
      subDesc:
        "Software development is set to grow at the rate of 25% between 2021-2031. An illustrious software development career requires you to get an early and strong start. Bagging a prestigious software developer internship can prove to be a solid launchpad for your career to take off. Many big product companies and brilliant startups provide software developer summer internship programs and internships from time to time.",
    },
  ],
  [
    {
      id: 7,
      link: "/Bcardcrea/7",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnwzl3JMeU3z6_EB8a09AtBXHN1g0GSavdj3w2argphZhi6reFVtGTA-LcyjdekGjkXfA&usqp=CAU",
      name: "In today’s fast-paced world, where technology is evolving at an unprecedented rate, virtualization has emerged",
      Desc: "From optimizing our search history on Amazon to providing us with the best Netflix movie",
      subDesc:
        "In today’s fast-paced world, where technology is evolving at an unprecedented rate, virtualization has emerged as a game-changing concept in software development and IT infrastructure. It has revolutionized how we deploy, manage, and utilize computing resources, making it an indispensable tool in the modern digital landscape. Virtualization has become the norm for software and operating system testing",
    },
    {
      id: 8,
      link: "/Bcardcrea/8",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV-GSn_Bv5iqVc0krg99HTcz5XL_G7urEj8_AxcAvCEZeOv2qFqJHm1eMHAH-3ag9GPpQ&usqp=CAU",
       name: "In today’s fast-paced world, where technology is evolving at an unprecedented rate, virtualization has emerged",
      Desc: "From optimizing our search history on Amazon to providing us with the best Netflix movie",
      subDesc:
        "In today’s fast-paced world, where technology is evolving at an unprecedented rate, virtualization has emerged as a game-changing concept in software development and IT infrastructure. It has revolutionized how we deploy, manage, and utilize computing resources, making it an indispensable tool in the modern digital landscape. Virtualization has become the norm for software and operating system testing",
    },
    {
      id: 9,
      link: "/Bcardcrea/9",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQciTr-XTUERTMI7PaeBsE76IKdB7PjxTD-7XiMADalT_GpX-UNoODmCpSuhgTZrpZqZPU&usqp=CAU",
      name: "6 Tips & Tricks to Crack Data Science Interviews",
      Desc: "From optimizing our search history on Amazon to providing us with the best Netflix movie",
      subDesc:
        "Data science is one of the world’s top lucrative career choices. How hard it is to crack Data Science Interviews? & Why so much demand? It is because – Data Science enables organizations to understand gigantic data from multiple sources efficiently & helps derive valuable insights to make smarter data-driven decisions.",
    },
  ],
  [
    {
      id: 10,
      link: "/Bcardcrea/10",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEG13MKfIvNibfuxuOaqNRFwV7uIKmzelzkgPQzi4oNoV6iLyB0Nlf_2tG-wjpy1lD6_Y&usqp=CAU",
      name: "Top 10 Ethical Hacking Books for Beginner to Advanced",
      Desc: "Did you know that according to the University of Maryland hackers attack every 39 seconds",
      subDesc:
        "Before jumping into the list of the top 10 ethical hacking books, let’s speak a bit about cybersecurity. I’m sure you already know “what cybersecurity is” but here’s a refresher. Cyber security refers to the practice of protecting networks, programs, computer systems, and their components from unauthorized digital access and attacks.",
    },
    {
      id: 11,
      link: "/Bcardcrea/11",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeo4y9wCl9CKWofCIwry3X9vn7AHvn_E5GFuJwDDL4dipkQC-vVOlbDU4JmRiQQ-uFmS4&usqp=CAU",
      name: "What is Cybersecurity? Importance and its uses & the growing challenges in 2023!",
      Desc: "Look around today, you will witness that we are more reliant on technology and devices",
      subDesc:
        "Look around today, you will witness that we are more reliant on technology and devices than ever before. Benefits of this trend range from getting rid of Yellowbook, and having near-instant access to information on the internet o the modern conveniences provided by smart home automation technology and concepts like IoT devices. ",
    },
    {
      id: 12,
      link: "/Bcardcrea/12",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGWQIFONmCDChVcOI6GLciqNk8GuEPWARs4h2N5kofqV5TbsoMDlo2c9u-hNg3VtOeDgw&usqp=CAU",
      name: "Many people ask how important is coding for cybersecurity, and the lawyerly answer is: Well,",
      Desc: "Data science is one of the world’s top lucrative career choices.",
      subDesc:
        "Data science is one of the world’s top lucrative career choices. How hard it is to crack Data Science Interviews? & Why so much demand? It is because – Data Science enables organizations to understand gigantic data from multiple sources efficiently & helps derive valuable insights to make smarter data-driven decisions.",
    },
  ],
  [
    {
      id: 13,
      link: "/Bcardcrea/13",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqrgY04k0pl7KG-vy88u-EyiCJqMPkQtNAMIm-WhxIUxcDWPoysI9EPJSNfFUgLhoQRc4&usqp=CAU",
      name: "What is Production Management | The Ultimate Guide",
      Desc: "In today’s constantly evolving business landscape, production managers are essential to the success of any",
      subDesc:
        "In today’s constantly evolving business landscape, production managers are essential to the success of any organization. Their skills in optimizing production processes, resource utilization, and maintaining high quality ensure that goods and services are delivered seamlessly.",
    },
    {
      id: 14,
      link: "/Bcardcrea/14",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcMM7UAuSskmF3jItR1b9nVbGfvlZoj-LUZB1vh7XM3hBW6o3veNwHek6sdHEc4EYyYFE&usqp=CAU",
      name: "Top Career Options in India in 2023",
      Desc: "In today’s rapidly changing world, career choices carry immense significance. As the job market undergoes",
      subDesc:
        "In today’s rapidly changing world, career choices carry immense significance. As the job market undergoes a transformation fueled by technological advancements and the growing need for sustainable practices, it’s essential to navigate the shifting landscape strategically. ",
    },
    {
      id: 15,
      link: "/Bcardcrea/15",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdOHm65yRInCE-xVuI-IrlWjva7kt2pjQmie6VDOuJyoRTXsZrPS0_LcBS46rvKBjzSrY&usqp=CAU",
      name: "What is TCS NQT | Everything You Need to Know",
      Desc: "As a fresh graduate, your goal is to join a reputable company and start your",
      subDesc:
        "As a fresh graduate, your goal is to join a reputable company and start your career strong. Having your first job with a well-established organization ensures you gain valuable experiences and sets you on a path of consistent professional growth. Tata Consultancy Services (TCS) is one such company.",
    },
  ],
];

function Router() {
  return (
    <div>
      {/* NavBar */}
      <nav
        style={{ backgroundColor: "white" }}
        className="navbar navbar-expand-lg "
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={guvi} alt="" style={{ width: "105px", height: "50px" }} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <b>Courses</b>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <b> Live Classes</b>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <b>Practices</b>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      CodeKata
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      WebKata
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      IDE - Online Compiler
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Front card with Navigtion */}

      <div className="mt-1">
        <div className="card text-center mb-3" id="frontCard">
          <img
            src={blogHead}
            alt=""
            style={{ width: "75%", marginLeft: "12%" }}
            className="img-fluid mt-3"
          />

          <ul className="position mt-5">
            <li>
              <NavLink to="/" style={{ textDecoration: "none" }}>
                All
              </NavLink>
            </li>
            <li>
              <NavLink to="/Fullstack" style={{ textDecoration: "none" }}>
                Full Stack Development
              </NavLink>
            </li>
            <li>
              <NavLink to="/Cybersecurity" style={{ textDecoration: "none" }}>
                Cyber Security
              </NavLink>
            </li>
            <li>
              <NavLink to="/Datascience" style={{ textDecoration: "none" }}>
                Data Science
              </NavLink>
            </li>
            <li>
              <NavLink to="/Career" style={{ textDecoration: "none" }}>
                Career
              </NavLink>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/" element={<All data={array[0]} />} />
          <Route path="/Fullstack" element={<Fullstack data={array[1]} />} />
          <Route
            path="/Cybersecurity"
            element={<Cybersecurity data={array[3]} />}
          />
          <Route
            path="/Datascience"
            element={<Datascience data={array[2]} />}
          />
          <Route path="/Career" element={<Career data={array[4]} />} />
          <Route path="/Bcardcrea/:Product" Component={Bcardcrea} />
        </Routes>
      </div>
    </div>
  );
}

export default Router;
