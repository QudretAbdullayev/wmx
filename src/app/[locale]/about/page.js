import AboutPage from "@/modules/AboutPage";

const page = () => {
  const data = {
    hero: {
      title:
        "Swedish design duo niklas rosén  gustav  nordebrink who specialize in creating design experiences for renowned and.",
      banner: "/images/about-hero.png",
      hover_image: "/images/hover-image.png",
    },
    mission: {
      section_title: "School X's Mission",
      list: [
        {
          title: "Create. Learn. Lead.",
          description:
            "Authenticity is our foundation. We honor each brand's unique essence through thoughtful, meticulously crafted design. Integrity ensures timeless relevance, resonating with audiences.",
        },
        {
          title: "Think. Make. Evolve.",
          description:
            "Authenticity is our foundation. We honor each brand's unique essence through thoughtful, meticulously crafted design. Integrity ensures timeless relevance, resonating with audiences.",
        },
        {
          title: "Creativity in Action.",
          description:
            "Authenticity is our foundation. We honor each brand's unique essence through thoughtful, meticulously crafted design. Integrity ensures timeless relevance, resonating with audiences.",
        },
        {
          title: "Create. Learn. Lead.",
          description:
            "Authenticity is our foundation. We honor each brand's unique essence through thoughtful, meticulously crafted design. Integrity ensures timeless relevance, resonating with audiences.",
        },
      ],
    },
    founder: {
      section_title: "Founder",
      title: "Get to know the people\r\nthat get it all done.",
      description:
        "Mark is a former adjunct Professor of Marketing at Melbourne Business School. He has a PhD in Marketing from Lancaster University and has been a marketing professor at London Business School, MIT Sloan (visiting), and the University of Minnesota. He has been the recipient of MBA teaching awards at LBS, MIT, Singapore Management University and MBS.\r\n\r\n\r\nMark has been teaching brand management to MBA students at elite business schools and a consulting career working on some of the most successful brands on the planet such as Subaru, De Beers, Ericsson, Sephora, News Corp, Hennessy and Baxter.",
      subtitle: "Vugar Mehdiyev, a leading authority on marketing and brand",
      image: "/images/founder.png",
      name: "Vugar Mehdiyev",
      position: "CEO & Founder",
    },
    team: {
      section_title: "Our Team",
      component_title:
        "* We are a small studio\r\nwith a vast network of\r\nprofessionals..",
      photos: [
        "/images/team-1.png",
        "/images/team-2.png",
        "/images/team-3.png",
        "/images/team-4.png",
        "/images/team-5.png",
        "/images/team-6.png",
        "/images/team-7.webp",
        "/images/team-8.jpg",
      ],
      subtitle: "Example",
      title: "Global presence, remote operations—based in Toronto, Canada.",
      description:
        "xSchool is a studio at the forefront of creating identities, systems, guidelines, and toolkits for motion. As a boutique team, we offer a more collaborative and direct partnership, perfectly scaled to integrate and problem-solve alongside you—a true extension of your brand team. \r\n\r\nEach comes with a proven track record and can be easily onboarded to our team to fill any expertise gaps. With this talent at our fingertips, we offer unparalleled versatility and value to your projects.\r\n\r\nEvery solution is tailored to fit, and every project gets the best people—because that’s all we have. This approach has earned us the trust of some of the world’s biggest and boldest brands, who see us as true partners in bringing their visions to life.",
    },
    features: {
      section_title: "Features",
      list: [
        {
          title: "Design Thinking in Action",
          category: "Creative Bootcamp",
          description: "UX Design, Prototyping, Research",
          image_desktop: "/images/team-1.png",
          image_mobile: "/images/team-1.png",
        },
        {
          title: "Design Thinking in Action",
          category: "Creative Bootcamp",
          description: "UX Design, Prototyping, Research",
          image_desktop: "/images/team-2.png",
          image_mobile: "/images/team-2.png",
        },
        {
          title: "Design Thinking in Action",
          category: "Creative Bootcamp",
          description: "UX Design, Prototyping, Research",
          image_desktop: "/images/team-3.png",
          image_mobile: "/images/team-3.png",
        },
        {
          title: "Design Thinking in Action",
          category: "Creative Bootcamp",
          description: "UX Design, Prototyping, Research",
          image_desktop: "/images/team-4.png",
          image_mobile: "/images/team-4.png",
        },
        {
          title: "Design Thinking in Action",
          category: "Creative Bootcamp",
          description: "UX Design, Prototyping, Research",
          image_desktop: "/images/team-5.png",
          image_mobile: "/images/team-5.png",
        },
      ],
    },
  };
  return <AboutPage data={data} />;
};

export default page;
