const $ = window.jQuery;
const content = $("#content").html();

if (content) {
  prepareContent();
}

function prepareContent() {
  const re = /^.*$/gm;
  const matches = [...content.matchAll(re)];
  let newContent = "";

  for (let i = 0; i < matches.length; i++) {
    let prevLine = matches[i - 1];
    let nextLine = matches[i + 1];
    let topPadding = "0.5em";
    let bottomPadding = "0.5em";

    if (prevLine && prevLine[0] == "") {
      topPadding = "0";
    }

    if (nextLine && nextLine[0] == "") {
      bottomPadding = "0";
    }

    // eslint-disable-next-line prettier/prettier
    newContent += `<div id="line${i + 1}" class="line-wrapper" style="padding: ${topPadding} 0 ${bottomPadding} 0;">${matches[i][0]}</div>`;
  }

  $("#content").html(newContent);

  // Scroll to line
  $(window).load(() => {
    if (window.location.hash && window.location.hash != "#line0") {
      scrollTo(window.location.hash);
    } else {
      scrollTo(".title-area");
    }
  });

  function scrollTo(selector) {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $(selector).offset().top
      },
      500
    );
  }
}
