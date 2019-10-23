import axios from "axios";

// const _bookmarks = [
//   {
//     _id: { $oid: "5da5849c5d0e65595ef52482" },
//     bookTitle:
//       "Рыцарь-неудачник (Матэо) — фанфик по фэндому «Fate/Stay Night», «Fate/Apocrypha», «Fate/stay night: Unlimited Blade Works»",
//     bookId: 8157529,
//     partId: 22214088,
//     status: "в процессе",
//     part_date: "2 часа и 47 минут назад",
//     is_last: true,
//     hash: "line75",
//     updated: { $date: "2019-10-19T06:57:45.388Z" }
//   }
// ];

const MLAB_URL = "https://api.mlab.com/api/1/databases/ficbook/collections/bmt/";
const MLAB_KEY = "l2ERBtXn1gCyWyYesGZbyoSSEXD6pm22";

export default {
  getBookmarks() {
    return axios
      .get(MLAB_URL, { params: { apiKey: MLAB_KEY } })
      .then(res => res.data);
  },

  removeBookmark(bookmark) {
    return axios.delete(MLAB_URL + bookmark._id.$oid + "?apiKey=" + MLAB_KEY);
  },

  updateBookmark(bookmark) {
    return axios
      .post(MLAB_URL + "?apiKey=" + MLAB_KEY, bookmark)
      .then(res => res.data);
  },

  addBookmark(bookmark) {
    return axios
      .post(MLAB_URL + "?apiKey=" + MLAB_KEY, bookmark)
      .then(res => res.data);
  }
};
