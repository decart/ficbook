import firebase from "firebase";

// const _bookmarks = [
//   {
//     _id: "5da5849c5d0e65595ef52482",
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

firebase.initializeApp({
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_PROJECT_ID
});

const db = firebase.firestore();

export default {
  async getBookmarks() {
    const snapshot = await db.collection("ficbook").get();
    const res = [];
    snapshot.forEach(doc => res.push({ ...doc.data(), _id: doc.id }));

    return res;
  },

  async removeBookmark(bookmark) {
    return await db
      .collection("ficbook")
      .doc(bookmark._id)
      .delete();
  },

  async updateBookmark(bookmark) {
    const id = bookmark._id.slice();
    delete bookmark._id;

    console.log(id, bookmark);
    const docRef = db.collection("ficbook").doc(id);

    return await docRef.update(bookmark);
  },

  async addBookmark(bookmark) {
    return await db.collection("ficbook").add(bookmark);
  }
};
