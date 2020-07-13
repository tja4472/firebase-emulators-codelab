import * as firebase from "@firebase/testing";
import * as fs from "fs";

const TEST_FIREBASE_PROJECT_ID = "test-firestore-rules-project";
const rules = fs.readFileSync("../firestore.rules", "utf8");
const aliceAuth = {
  uid: "alice",
  email: "alice@example.com",
};

function getFirestore(auth: any) {
  return firebase
    .initializeTestApp({ projectId: TEST_FIREBASE_PROJECT_ID, auth })
    .firestore();
}

describe("app test", () => {
  it("true test 1", () => {
    expect(true).toBeTruthy();
  });
});

describe("test security rules", () => {
  beforeAll(async () => {
    // Load the content of the "firestore.rules" file into the emulator before running the
    // test suite. This is necessary because we are using a fake Project ID in the tests,
    // so the rules "hot reloading" behavior which works in the Web App does not apply here.
    await firebase.loadFirestoreRules({
      projectId: TEST_FIREBASE_PROJECT_ID,
      rules,
    });
  });

  it("true test 2", () => {
    expect(true).toBeTruthy();
  });

  // Unit test the security rules
  describe("shopping carts", () => {
    it("can be created by the cart owner", async () => {
      const db = getFirestore(aliceAuth);

      await firebase.assertSucceeds(
        db.doc("carts/alicesCart").set({
          ownerUID: "alice",
          total: 0,
        })
      );
    });
  });
});
