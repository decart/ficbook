const _ = (a, b) => (a ? a : b);

const makeBookmark = () => {
  const $ = window.$;
  const title = $("title")
    .text()
    .replace(/(\r\n|\n|\r)/gm, "")
    .replace(/ {2,}/gm, " ")
    .trim();

  const bookInfo = document.location.href.match(
    /http.*?\/readfic\/(\d*)\/(\d*)/i
  );
  if (!bookInfo) return null;

  const status = $('dt:contains("Статус:")')
    .next("dd")
    .text()
    .trim();
  const has_next = $("a.btn-next")[0] != undefined;
  const part_date = $(".part-date")
    .text()
    .trim();

  return {
    bookTitle: title,
    bookId: parseInt(bookInfo[1]),
    partId: parseInt(bookInfo[2]),
    status: status,
    is_last: !has_next,
    part_date: part_date,
    hash: getLineHash(),
    updated: { $date: new Date() }
  };
};

function getLineHash() {
  const $ = window.$;
  const offset = $(window).scrollTop();
  let fistVisible = "";
  let ln = 0;

  $("#content > .line-wrapper").each(function() {
    let line = $(this);
    if (line.offset().top > offset && fistVisible === "") {
      fistVisible = "line" + ln;
    }

    ln++;
  });

  return fistVisible;
}

export { _, makeBookmark };
