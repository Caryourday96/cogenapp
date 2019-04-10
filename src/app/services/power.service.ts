import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
// import { dataset } from "../dataset";

@Injectable({
  providedIn: "root"
})
export class PowerService {
  baseUrl = "";
  constructor(private db: AngularFirestore) {}

  async load() {
    const doc = await this.db.firestore
      .collection("power")
      .doc("usage")
      .get();

    if (doc.exists) {
      return doc.data();
    } else {
      console.log("doc not found");
    }
  }

  async writeData(dataset) {
    // data.forEach(async x => {
    await this.db.firestore
      .collection("power")
      .doc("usage")
      .set({ usage: dataset });
    // });
  }
}
