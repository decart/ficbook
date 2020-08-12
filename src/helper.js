const _ = (a, b) => (a ? a : b);

const makeBookmark = () => {
  const title = document
    .querySelector("title")
    .innerText.replace(/(\r\n|\n|\r)/gm, "")
    .replace(/ {2,}/gm, " ")
    .trim();

  const bookInfo = document.location.href.match(
    /http.*?\/readfic\/(\d*)\/(\d*)/i
  );
  if (!bookInfo) return null;

  const status = document
    .querySelector(
      ".badge-status-in-progress, .badge-status-finished, .badge-status-frozen"
    )
    .innerText.trim();

  const has_next = !!document.querySelector("a.btn-next");
  const part_date = document.querySelector(".part-date").innerText.trim();

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
  const lines = document.querySelectorAll("#content > .line-wrapper");
  let hash = "";

  for (let line of lines) {
    const top = line.getBoundingClientRect().top;
    if (top > 0) {
      hash = line.id;
      break;
    }
  }

  console.log("FICBOOK USERSCIPT [LINE HASH]: ", hash);
  return hash;
}

export { _, makeBookmark };
