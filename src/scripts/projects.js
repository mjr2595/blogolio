const projects = {
  blorc: {
    name: "Blorc",
    image: {
      url: "https://i.imgur.com/d7BCijk.png",
      alt: 'Screenshot of the blorc website. it is a black background with text saying "Latest Blog Posts from Torc Community Members" and below is a list of blog post titles and summaries',
    },
    links: {
      github: "https://github.com/mjr2595/blorc",
      live: "https://blorc.netlify.app/",
    },
    description:
      "A list of the latest blog posts from members of the Torc Community. Aggregates RSS feeds and displays the latest 25 posts. Created with Astro and Netlify server-side functions.",
  },
  taygo: {
    name: "Taygo",
    image: {
      url: "https://i.imgur.com/c36ZurU.png",
      alt: "Screenshot of taygo. it is a bingo game with a grid of words and phrases.",
    },
    links: {
      github: "https://github.com/mjr2595/taygo",
      live: "https://taygo.netlify.app/",
    },
    description:
      "An interactive bingo-style game designed to be played while watching Taylor Desseyn's Guidance Counselor 2.0 podcast. Very silly, very Torc. HTML, CSS, JS.",
  },
  nuron: {
    name: "Nuron",
    image: {
      url: "https://i.imgur.com/7WUeR5T.png",
      alt: "image of Nuron app on a tablet, phone, and laptop. Caption says 'rewrite your story'",
    },
    links: {
      landing_page: "https://thenuronway.com/",
      live: "https://chataiden.com/",
    },
    description:
      "Flutter application with a focus on self-empowerment and productivity. Written in Dart with BLoC architecture and AWS Amplify backend. Available on iOS, Android, macOS, Windows.",
  },
  gamehub: {
    name: "Game Hub",
    image: {
      url: "https://i.imgur.com/bc9Sv9f.png",
      alt: "Screenshot of Game Hub app showing game library with search bar and filters. Below is a grid of game cards with cover images and ratings.",
    },
    links: {
      github: "https://github.com/mjr2595/game-hub",
      live: "https://game-hub-mjr2595.vercel.app/",
    },
    description:
      "Video game discovery web app leveraging the rawg.io API. Built with React, TypeScript, Chakra UI, Axios, React Query, React Router, and Zustand.",
  },
  linksync: {
    name: "Link Sync",
    image: {
      url: "https://i.imgur.com/XMhEweo.png",
      alt: "Screenshot of Link Sync site showing a list of links with icons and copy button.",
    },
    links: {
      github: "https://github.com/mjr2595/link-sync",
      live: "https://mjr2595.github.io/link-sync/",
    },
    description: "All my links in a simple list. HTML, CSS, JS.",
  },
  barkbook: {
    name: "Barkbook",
    image: {
      url: "https://i.imgur.com/ldfa1QJ.png",
      alt: "Screenshot of Barkbook social media app showing feed with posts, comments, and likes. Profile sidebar shows user avatar, name, and bio.",
    },
    links: {
      github: "https://github.com/mjr2595/borker",
      demo: "https://www.youtube.com/watch?v=cskBOrNxFP4",
    },
    description:
      "Social media for dogs. MERN Stack application for Nucamp Coding Bootcamp Honors certificate.",
  },
};

export default projects;
