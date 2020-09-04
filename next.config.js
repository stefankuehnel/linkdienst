module.exports = {
  async redirects() {
    return [
      // Development
      {
        source: "/github",
        destination: "https://github.com/stefankuehnel",
        permanent: true,
      },
      {
        source: "/codepen",
        destination: "https://codepen.io/stefankuehnel/",
        permanent: true,
      },
      {
        source: "/devto",
        destination: "https://dev.to/stefankuehnel",
        permanent: true,
      },
      // Videos & Streaming
      {
        source: "/youtube",
        destination: "https://youtube.com/channel/UCWMnKN0XvtxPRBdMIEwIxug",
        permanent: true,
      },
      {
        source: "/twitch",
        destination: "https://twitch.tv/stefankuehnel",
        permanent: true,
      },
      // Design & Showcase
      {
        source: "/instagram",
        destination: "https://instagram.com/stefankuehnelofficial",
        permanent: true,
      },
      {
        source: "/behance",
        destination: "https://behance.net/stefankuehnel",
        permanent: true,
      },
      {
        source: "/producthunt",
        destination: "https://producthunt.com/@bloggerstefan",
        permanent: true,
      },
      // Microblogging
      {
        source: "/twitter",
        destination: "https://twitter.com/BloggerStefan",
        permanent: true,
      },
      {
        source: "/mastodon",
        destination: "https://mastodon.online/@stefankuehnel",
        permanent: true,
      },

      // Other
      {
        source: "/t3n",
        destination: "https://t3n.de/pioneers/profile/stefan-kuehnel/",
        permanent: true,
      },
    ];
  },
};
