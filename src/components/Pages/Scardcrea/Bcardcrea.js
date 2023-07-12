import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shopcart from "./Shopcart";

let array = [
  {
    id: 1,
    link: "/Bcardcrea/1",
    src: "https://www.guvi.in/blog/wp-content/uploads/2023/07/feature-image-Business-Analyst-An-Insight-into-Their-Life.jpg",
    name: "Business Analyst – An Insight into Their Life",
    Desc: "Have you ever wondered how business tends to maintain everything in proper order despite having",
    subDesc:
      "Apache is the most widely used web server in the world, powering over 40% of all websites on the internet. It is an open-source, cross-platform web server that is maintained by the Apache Software Foundation. ",
  },
  {
    id: 2,
    link: "/Bcardcrea/2",
    src: "https://www.guvi.in/blog/wp-content/uploads/2023/07/Corporate-Training-programs-2-1200x675.jpg",
    name: "10 Best Corporate Training Programs for Employees in 2023",
    Desc: "Are you looking to supercharge your workforce and leverage its true power? Look no further",
    subDesc:
      "Apache is the most widely used web server in the world, powering over 40% of all websites on the internet. It is an open-source, cross-platform web server that is maintained by the Apache Software Foundation. ",
  },
  {
    id: 3,
    link: "/Bcardcrea/3",
    src: "https://www.guvi.in/blog/wp-content/uploads/2023/07/feature-image-Business-Analyst-Interview-Questions-With-Answers-1.jpg",
    name: "Top Statistical Programming Languages of 2023",
    Desc: "In this ever-growing vast field of technology, programming languages play a pivotal role in its",
    subDesc:
      "Apache is the most widely used web server in the world, powering over 40% of all websites on the internet. It is an open-source, cross-platform web server that is maintained by the Apache Software Foundation. ",
  },

  {
    id: 4,
    link: "/Bcardcrea/4",
    src: "https://www.guvi.in/blog/wp-content/uploads/2023/02/1_6rDcIgFJQldloIERiUSmzw.png",
    name: "How does Apache work? A detailed introduction to Apache",
    Desc: "Apache is the most widely used web server in the world, powering over 40% of all websites on the internet.",
    subDesc:
      "Apache is the most widely used web server in the world, powering over 40% of all websites on the internet. It is an open-source, cross-platform web server that is maintained by the Apache Software Foundation. ",
  },
  {
    id: 5,
    link: "/Bcardcrea/5",
    src: "https://www.guvi.in/blog/wp-content/uploads/2023/07/roles_and_responsibilities_of_full_stack_developer_1x.webp",
    name: "Do you want to become a full stack developer? If yes, you must definitely know",
    Desc: "Apache is the most widely used web server in the world, powering over 40% of all websites on the internet.",
    subDesc:
      "With their versatile skill set and ability to navigate both technical and non-technical aspects, full stack developers contribute to the success of diverse software projects in today’s fast-paced and evolving digital landscape. Without much ado, let’s take a dive deep into each aspects of becoming a full stack developer in 2023.",
  },
  {
    id: 6,
    link: "/Bcardcrea/6",
    src: "https://www.guvi.in/blog/wp-content/uploads/2023/06/software-engineering-internships.png",
    name: "Software development is set to grow at the rate of 25% between 2021-2031. An illustrious",
    Desc: "Apache is the most widely used web server in the world, powering over 40% of all websites on the internet.",
    subDesc:
      "Software development is set to grow at the rate of 25% between 2021-2031. An illustrious software development career requires you to get an early and strong start. Bagging a prestigious software developer internship can prove to be a solid launchpad for your career to take off. Many big product companies and brilliant startups provide software developer summer internship programs and internships from time to time.",
  },
  {
    id: 7,
    link: "/Bcardcrea/7",
    src: "https://www.guvi.in/blog/wp-content/uploads/2023/06/VMWARE-Vs-VIRTUAL-BOX-1536x864.png",
    name: "In today’s fast-paced world, where technology is evolving at an unprecedented rate, virtualization has emerged",
    Desc: "From optimizing our search history on Amazon to providing us with the best Netflix movie",
    subDesc:
      "In today’s fast-paced world, where technology is evolving at an unprecedented rate, virtualization has emerged as a game-changing concept in software development and IT infrastructure. It has revolutionized how we deploy, manage, and utilize computing resources, making it an indispensable tool in the modern digital landscape. Virtualization has become the norm for software and operating system testing",
  },
  {
    id: 8,
    link: "/Bcardcrea/8",
    src: "https://www.guvi.in/blog/wp-content/uploads/2022/07/5.-Top-Data-Science-applications-and-use-cases-for-businesses.png",
    name: "Top 7 Data Science Applications & Use Cases For Businesses",
    Desc: "From optimizing our search history on Amazon to providing us with the best Netflix movie",
    subDesc:
      "In today’s fast-paced world, where technology is evolving at an unprecedented rate, virtualization has emerged as a game-changing concept in software development and IT infrastructure. It has revolutionized how we deploy, manage, and utilize computing resources, making it an indispensable tool in the modern digital landscape. Virtualization has become the norm for software and operating system testing",
  },
  {
    id: 9,
    link: "/Bcardcrea/9",
    src: "https://www.guvi.in/blog/wp-content/uploads/2022/08/Data-Science-interviews-1200x675.jpg",
    name: "6 Tips & Tricks to Crack Data Science Interviews",
    subDesc:
      "Data science is one of the world’s top lucrative career choices. How hard it is to crack Data Science Interviews? & Why so much demand? It is because – Data Science enables organizations to understand gigantic data from multiple sources efficiently & helps derive valuable insights to make smarter data-driven decisions.",
  },
  {
    id: 10,
    link: "/Bcardcrea/10",
    src: "https://www.guvi.in/blog/wp-content/uploads/2022/11/Blue-Purple-Futuristic-Virus-Hacks-Youtube-Thumbnail-1200x675.png",
    name: "Top 10 Ethical Hacking Books for Beginner to Advanced",
    Desc: "Did you know that according to the University of Maryland hackers attack every 39 seconds",
    subDesc:
      "Before jumping into the list of the top 10 ethical hacking books, let’s speak a bit about cybersecurity. I’m sure you already know “what cybersecurity is” but here’s a refresher. Cyber security refers to the practice of protecting networks, programs, computer systems, and their components from unauthorized digital access and attacks.",
  },
  {
    id: 11,
    link: "/Bcardcrea/11",
    src: "https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif",
    name: "What is Cybersecurity? Importance and its uses & the growing challenges in 2023!",
    Desc: "Look around today, you will witness that we are more reliant on technology and devices",
    subDesc:
      "Look around today, you will witness that we are more reliant on technology and devices than ever before. Benefits of this trend range from getting rid of Yellowbook, and having near-instant access to information on the internet o the modern conveniences provided by smart home automation technology and concepts like IoT devices. ",
  },
  {
    id: 12,
    link: "/Bcardcrea/12",
    src: "https://www.guvi.in/blog/wp-content/uploads/2022/06/8bfd01c18be1b5059bc0d7770d9dabf1.gif",
    name: "Many people ask how important is coding for cybersecurity, and the lawyerly answer is: Well,",
    Desc: "Data science is one of the world’s top lucrative career choices.",
    subDesc:
      "Data science is one of the world’s top lucrative career choices. How hard it is to crack Data Science Interviews? & Why so much demand? It is because – Data Science enables organizations to understand gigantic data from multiple sources efficiently & helps derive valuable insights to make smarter data-driven decisions.",
  },
  {
    id: 13,
    link: "/Bcardcrea/13",
    src: "https://www.guvi.in/blog/wp-content/uploads/2023/06/what-is-production-management.jpg",
    name: "What is Production Management | The Ultimate Guide",
    Desc: "In today’s constantly evolving business landscape, production managers are essential to the success of any",
    subDesc:
      "In today’s constantly evolving business landscape, production managers are essential to the success of any organization. Their skills in optimizing production processes, resource utilization, and maintaining high quality ensure that goods and services are delivered seamlessly.",
  },
  {
    id: 14,
    link: "/Bcardcrea/14",
    src: "https://www.guvi.in/blog/wp-content/uploads/2023/06/top-career-options-in-india-1536x864.jpg",
    name: "Top Career Options in India in 2023",
    Desc: "In today’s rapidly changing world, career choices carry immense significance. As the job market undergoes",
    subDesc:
      "In today’s rapidly changing world, career choices carry immense significance. As the job market undergoes a transformation fueled by technological advancements and the growing need for sustainable practices, it’s essential to navigate the shifting landscape strategically. ",
  },
  {
    id: 15,
    link: "/Bcardcrea/15",
    src: "https://www.guvi.in/blog/wp-content/uploads/2023/06/TCS-NQT-EXAM-2023.jpg",
    name: "What is TCS NQT | Everything You Need to Know",
    Desc: "As a fresh graduate, your goal is to join a reputable company and start your",
    subDesc:
      "As a fresh graduate, your goal is to join a reputable company and start your career strong. Having your first job with a well-established organization ensures you gain valuable experiences and sets you on a path of consistent professional growth. Tata Consultancy Services (TCS) is one such company.",
  },
];

const Bcardcrea = () => {
  let params = useParams();
  const [arr, setarr] = useState([]);
  useEffect(() => {
    let Array = [...arr];
    Array = array.filter((d, i) => d.id == params.Product);

    setarr(Array);
  }, [params]);

  return (
    <div>
      {arr.map((e, f) => (
        <Shopcart key={f} data={e} />
      ))}
    </div>
  );
};
export default Bcardcrea;
