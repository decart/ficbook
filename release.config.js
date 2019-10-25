module.exports = {
  name: "FicBook bookmarks",
  version: "2.0",
  author: "mansur",
  description: "Bookmarks system for Ficbook",
  namespace: "https://github.com/decart/ChromePluginsData/raw/master/Scripts/Ficbook.user.js",

  match: ["https://ficbook.net/*"],
  grant: ["GM_addStyle"],
  require: ["http://code.jquery.com/jquery-1.12.4.min.js"]
};
