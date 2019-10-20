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
  },
  {
    _id: { $oid: "5d85415d1f6e4f1e2e7f5375" },
    bookTitle:
      "Наёмник — фанфик по фэндому «Роулинг Джоан «Гарри Поттер»», «Vampire: The Masquerade – Bloodlines», «The Gamer»",
    bookId: 5705967,
    partId: 14665413,
    status: "закончен",
    part_date: "3 июля 2017, 21:49",
    is_last: false,
    updated: { $date: "2019-09-22T15:10:05.121Z" }
  },
  {
    _id: { $oid: "5d878a0d1f6e4f1e2e876ab2" },
    bookTitle: "Рудольфус — фанфик по фэндому «Роулинг Джоан «Гарри Поттер»»",
    bookId: 4622246,
    partId: 12305230,
    status: "в процессе",
    part_date: "13 сентября 2016, 23:47",
    is_last: false,
    updated: { $date: "2019-09-24T17:58:02.011Z" }
  },
  {
    _id: { $oid: "5d94ea7c5d0e65595e735f75" },
    bookTitle: "Уголёк — фанфик по фэндому «One Piece»",
    bookId: 7863576,
    partId: 20553974,
    status: "в процессе",
    part_date: "5 апреля 2019, 01:41",
    is_last: false,
    updated: { $date: "2019-10-06T10:33:45.851Z" },
    hash: ""
  },
  {
    _id: { $oid: "5a608bcac2ef16715ee67ec4" },
    bookTitle:
      "Зависимый — фанфик по фэндому «Роулинг Джоан «Гарри Поттер»», «Гарри Поттер»",
    bookId: 6337958,
    partId: 16530761,
    status: "заморожен",
    is_last: true,
    part_date: "2 февраля 2018, 19:48"
  },
  {
    _id: { $oid: "5a608ce1bd966f2c95498bd8" },
    bookTitle:
      "На крючке у Фортуны (бывш. Поймай меня, Дамблдор!) — фанфик по фэндому «Роулинг Джоан «Гарри Поттер»»",
    bookId: 3689553,
    partId: 12110038,
    status: "закончен",
    is_last: false,
    part_date: "18 августа 2016, 05:01",
    updated: { $date: "2019-09-23T15:35:21.871Z" }
  },
  {
    _id: { $oid: "5a608cfac2ef16715ee68bb8" },
    bookTitle:
      "Непокобелимый — фанфик по фэндому «Роулинг Джоан «Гарри Поттер»», «Гарри Поттер»",
    bookId: 4787184,
    partId: 13852709,
    status: "закончен",
    is_last: false,
    part_date: "27 марта 2017, 17:14"
  },
  {
    _id: { $oid: "5a61bafac2ef163c87313157" },
    bookTitle: "Еретик. Дефектный Гомункул. — фанфик по фэндому «One Piece»",
    bookId: 4874936,
    partId: 12961289,
    status: "заморожен",
    is_last: false,
    part_date: "14 декабря 2016, 13:59"
  }
];

export default {
  getBookmarks(cb) {
    setTimeout(() => cb(_bookmarks), 3000);
  },

  removeBookmark(bookmark) {
    return new Promise((resolve, reject) => {
      // Rest delete bookmark
      _bookmarks.filter(b => {
        b.bookId === bookmark.bookId;
      });

      setTimeout(() => {
        if (Math.random() < 0.5) {
          resolve({ status: "ok" });
        } else {
          reject({ status: "error" });
        }
      }, 3000);
    });
  },

  makeBookmark() {
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
    const is_last = $("a.btn-next");
    const part_date = $(".part-date")
      .text()
      .trim();

    return {
      bookTitle: title,
      bookId: bookInfo[1],
      partId: bookInfo[2],
      status: status,
      is_last: !!is_last,
      part_date: part_date
    };
  }
};
