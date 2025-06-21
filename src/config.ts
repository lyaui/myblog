export const SITE = {
  website: "https://cyanze.vercel.app/",
  author: "Iris Huang",
  profile: "",
  desc: "This is where I capture my thoughts and moments through development notes, reading, and daily life.",
  title: "Cyanze",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: false,
  postPerIndex: 3,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: false,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Suggest Changes",
    url: "https://github.com/satnaing/astro-paper/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "zh-hant",
  timezone: "Asia/Taipei", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
