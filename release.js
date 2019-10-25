const scandir = require("scandir").create();
const fs = require("fs");
const config = require("./release.config");

const pices = {
  vendor: "",
  app: "",
  css: ""
};

function ensureDirSync (dirpath) {
  try {
    fs.mkdirSync(dirpath, { recursive: true })
  } catch (err) {
    if (err.code !== "EEXIST") throw err;
  }
}

scandir.on("file", function(file) {
  const source = fs.readFileSync(file).toString();

  if (file.match(/chunk-vendors/)) {
    pices.vendor = `/** ${file} **/` + "\n" + source;
  }

  if (file.match(/app.*js$/)) {
    pices.app = `/** ${file} **/` + "\n" + source;
  }

  if (file.match(/app.*css$/)) {
    pices.css = `/** ${file} **/` + "\nGM_addStyle(`" + source + "`);";
  }
});

scandir.on("end", function() {
  let match = [];
  for (let m in config.match) {
    match.push("// @match        " + config.match[m]);
  }

  let grant = [];
  for (let g in config.grant) {
    grant.push("// @grant        " + config.grant[g]);
  }

  let require = [];
  for (let r in config.require) {
    require.push("// @require      " + config.require[r]);
  }

  let output = `// ==UserScript==
// @name         ${config.name}
// @namespace    ${config.namespace}
// @version      ${config.version}
// @description  ${config.description}
// @author       ${config.author}
${match.join("\n")}
${grant.join("\n")}
${require.join("\n")}
// ==/UserScript==

`;

  output += pices.vendor + "\n\n" + pices.app + "\n\n" + pices.css;
  ensureDirSync("./release");
  fs.writeFileSync("./release/ficbook.user.js", output);
});

scandir.scan({
  dir: "./dist",
  recursive: true,
  filter: /(.*\.js$)|(.*\.css$)/
});
