const fetch = require("node-fetch")

module.exports = async () => {
  const contact_info = await fetch(
    "https://raw.githubusercontent.com/JulesFouchy/JulesFouchy/main/contact.json"
  ).then((res) => res.json())
  const classes = await fetch(
    "https://raw.githubusercontent.com/JulesFouchy/JulesFouchy/main/my-classes.json"
  ).then((res) => res.json())
  return {
    github_account: "JulesFouchy",
    repo: "Learn--Math-for-Art-and-Computer-Graphics",
    title: "Math for Art and Computer Graphics",
    docusaurus_config: {
      tagline: "Understanding ⚙️ shape, 🎨 color and 💨 movement",
      // Override any parts of docusaurus.config.js you want
    },
    main_page_link: "lessons",
    navbar_items: [
      { to: "/lessons", label: "Lessons", position: "left" },
      { to: "/exercises", label: "Exercises", position: "left" },
    ],
    should_sort_lessons_by_priority: false,
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
    lessons_allowed_tags: [],
  }
}
