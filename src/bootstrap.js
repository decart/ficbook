const content = document.getElementById("content")?.innerHTML;

if (content) {
  prepareContent();
}

function clearLine(line) {
  if (!line) return false;
  if (Array.isArray(line)) line = line[0];
  const pureText = line.replace(/(&nbsp;|\s|\n)/gm, "").trim();

  return pureText === "" ? "" : line.trim();
}

function prepareContent() {
  const re = /^.*$/gm;
  const matches = [...content.matchAll(re)];
  let newContent = "";

  for (let i = 0; i < matches.length; i++) {
    let prevLine = clearLine(matches[i - 1]);
    let nextLine = clearLine(matches[i + 1]);
    let topPadding = "0.5em";
    let bottomPadding = "0.5em";
    let lineContent = clearLine(matches[i]);

    if (prevLine && prevLine == "") {
      topPadding = "0";
    }

    if (nextLine && nextLine == "") {
      bottomPadding = "0";
    }

    if (lineContent == "") {
      bottomPadding = "0";
      topPadding = "0";
    }

    // eslint-disable-next-line prettier/prettier
    newContent += `<div id="line${i + 1}" class="line-wrapper" style="padding: ${topPadding} 0 ${bottomPadding} 0;">${lineContent}</div>`;
  }

  document.getElementById("content").innerHTML = newContent;

  // Scroll to line
  if (window.location.hash && window.location.hash != "#line0") {
    scrollTo(window.location.hash);
  } else {
    scrollTo(".title-area");
  }

  function scrollTo(selector) {
    setTimeout(() => {
      console.log("FICBOOK USERSCIPT [SCROLL TO]: ", selector);
      const elm = document.querySelector(selector);
      elm.scrollIntoView(true);
    }, 500);
  }
}
