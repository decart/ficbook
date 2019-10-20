const _bookmarks = [
  {
    _id: { $oid: "5a872e3ec2ef16267cbafb2c" },
    bookTitle:
      "Искусство войны — фанфик по фэндому «Звездные Войны», «Звездные войны: Войны клонов»",
    bookId: 4414377,
    partId: 17423001,
    status: "в процессе",
    is_last: false,
    part_date: "13 мая 2018, 12:14"
  },
  {
    _id: { $oid: "5da5849c5d0e65595ef52482" },
    bookTitle:
      "Рыцарь-неудачник (Матэо) — фанфик по фэндому «Fate/Stay Night», «Fate/Apocrypha», «Fate/stay night: Unlimited Blade Works»",
    bookId: 8157529,
    partId: 22214088,
    status: "в процессе",
    part_date: "2 часа и 47 минут назад",
    is_last: true,
    hash: "line75",
    updated: { $date: "2019-10-19T06:57:45.388Z" }
  }
];

export default {
  getBookmarks(cb) {
    setTimeout(() => cb(_bookmarks), 3000);
  }
};
