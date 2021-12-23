module.exports = {
  github_account: "JulesFouchy",
  repo: "Learn--Math-for-Art-and-Computer-Graphics",
  title: "Mathematics for Art",
  docusaurus_config: {
    tagline: "Making 🎨 with 👩‍💻",
    // Override any parts of docusaurus.config.js you want
  },
  navbar_items: [
    {
      type: "doc",
      docId: "lessons/introduction",
      position: "left",
      label: "Lessons",
    },
    { to: "/resources", label: "Resources", position: "left" },
    { to: "/inspirations", label: "Inspirations", position: "left" },
  ],
  //   footer: {}, // Uncomment this to override the hardcoded footer in docusaurus.config.js
  contact_info: [
    {
      label: "Discord",
      to: "https://discord.com/users/372812330742054914",
    },
    {
      label: "E-Mail",
      to: "mailto:jules.fouchy@ntymail.com",
    },
    {
      label: "GitHub",
      to: "https://github.com/JulesFouchy/JulesFouchy/issues",
    },
  ],
  extra_copyright: "",
  syntax_highlight_for: ["typescript"],
  //   path_to_docs: "../../docs", uncomment this to change the path to the docs folder expected by Docusaurus. The path should be relative to Teaching-Toolbox/website
};
