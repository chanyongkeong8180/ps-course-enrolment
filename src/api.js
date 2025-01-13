const diplomas = [
  {
    name: "Cybersecurity & Digital Forensics",
    id: "R55",
    module: [
      {
        name: "Application Security",
        id: "C371",
        desc: "Students will learn the necessary hands-on skills required to design, build and test secure applications.",
        chair: "Low Ee Mien"
      },
      {
        name: "Ethical Hacking",
        id: "C374",
        desc: "Students will learn and practise the five different stages of penetration testing consisting of reconnaissance, scanning, gaining access, maintaining access, and documenting.",
        chair: "Gibbsen Omar"
      },
    ],
  },

  {
    name: "Enterprise Cloud Computing & Management",
    id: "R12",
    module: [
      {
        name: "DevOps Fundamentals",
        id: "C270",
        desc: "Students will work with front-end deployment and back-end codes and manage hosts for both monitoring and scaling.",
        chair: "Bernard Leong"
      },
      {
        name: "Internetworking",
        id: "C326",
        desc: "Students will be introduced to issues behind the linking of networks, network communication / routing protocols, network hardware, network software / operating systems, and the integration of disparate networks.",
        chair: "Ivan Wee"
      },
    ],
  },

  {
    name: "Financial Technology",
    id: "R18",
    module: [
      {
        name: "Payment Technologies",
        id: "C372",
        desc: "Students will learn to apply or integrate these payment technologies and systems via a web application.",
        chair: "Magdalene Lim"
      },
    ],
  },

  {
    name: "Information Technology",
    id: "R47",
    module: [
      {
        name: "Digital Marketing and eCommerce",
        id: "B239",
        desc: "Students will learn to develop and manage digital marketing strategy and eCommerce platforms, and discover the role of online reputation and sentiments management as a critical component of an effective digital marketing strategy.",
        chair: "Carol Danker"
      },
      {
        name: "UI/UX Design for Apps",
        id: "C218",
        desc: "Students will be equipped with knowledge in User Experience (UX) design in areas such as requirement gathering, creating and analysis of the User Interfaces (UI) in this module.",
        chair: "Azhar Kamar"
      },
      {
        name: "Software Testing and Analytics",
        id: "C339",
        desc: "Students will be exposed to various testing strategies. Students will also learn to implement analytics upon deployment, as well as how to plan for new features.",
        chair: "Gerald Lim"
      },
    ],
  },
];

export function getModule({ moduleId, diplomaId }) {
  return diplomas
    .find(({ id }) => id === diplomaId)
    .module.find(({ id }) => id === moduleId);
}

export function getDiploma(diplomaId) {
  return diplomas.find(({ id }) => id === diplomaId);
}

export function getDiplomas() {
  return diplomas.map(({ name, id }) => ({ name, id }));
}
