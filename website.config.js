// const fetch = require("node-fetch");

module.exports = /*async*/ () => {
  //   const contact_info = await fetch(
  //     "https://raw.githubusercontent.com/JulesFouchy/JulesFouchy/main/contact.json"
  //   ).then((res) => res.json());
  const contact_info = {
    discord_user_id: "372812330742054914",
    email: "jules.fouchy@ntymail.com",
  }
  const classes = [
    {
      name: "C++ and Dev Practices",
      url: "https://julesfouchy.github.io/Learn--Cpp-And-Dev-Practices/",
    },
    {
      name: "Generative Art",
      url: "https://julesfouchy.github.io/Learn--Generative-Art",
    },
    {
      name: "Math for Art and Computer Graphics",
      url: "https://julesfouchy.github.io/Learn--Math-for-Art-and-Computer-Graphics",
    },
  ]
  return {
    github_account: "JulesFouchy",
    repo: "Learn--Math-for-Art-and-Computer-Graphics",
    title: "Math for Art and Computer Graphics",
    docusaurus_config: {
      tagline: "Making 🎨 with 👩‍💻",
      // Override any parts of docusaurus.config.js you want
    },
    main_page_link: "lessons",
    navbar_items: [
      {
        type: "doc",
        docId: "lessons/introduction",
        position: "left",
        label: "Lessons",
      },
      {
        type: "doc",
        docId: "exercises/introduction",
        position: "left",
        label: "Exercises",
      },
      //   { to: "/resources", label: "Resources", position: "left" },
      //   { to: "/inspirations", label: "Inspirations", position: "left" },
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
    classes: classes,
    extra_copyright: "",
    syntax_highlight_for: ["typescript"],
    //   path_to_content: "../../content", uncomment this to change the path to the docs folder expected by Docusaurus. The path should be relative to Teaching-Toolbox/website
  }
}
