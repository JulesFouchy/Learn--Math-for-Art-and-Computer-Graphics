// const fetch = require("node-fetch");

module.exports = /*async*/ () => {
  //   const contact_info = await fetch(
  //     "https://raw.githubusercontent.com/JulesFouchy/JulesFouchy/main/contact.json"
  //   ).then((res) => res.json());
  const contact_info = {
    discord_user_id: "372812330742054914",
    email: "jules.fouchy@ntymail.com",
  };
  return {
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
        to: `https://discord.com/users/${contact_info.discord_user_id}`,
      },
      {
        label: "E-Mail",
        to: `mailto:${contact_info.email}`,
      },
      {
        label: "GitHub",
        to: "https://github.com/JulesFouchy/JulesFouchy/issues",
      },
    ],
    classes: [
      {
        label: "Math for Art and Computer Graphics",
        to: "https://julesfouchy.github.io/Learn--Math-for-Art-and-Computer-Graphics",
      },
      {
        label: "C++ and Dev Practices",
        to: "https://julesfouchy.github.io/Learn--Cpp-And-Dev-Practices/",
      },
    ],
    extra_copyright: "",
    syntax_highlight_for: ["typescript"],
    //   path_to_docs: "../../docs", uncomment this to change the path to the docs folder expected by Docusaurus. The path should be relative to Teaching-Toolbox/website
  };
};
// console.log(contact.discord_user_id);
