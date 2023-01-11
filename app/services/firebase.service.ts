import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';

@Injectable()
export class FirebaseService {
  constructor(private af: AngularFireDatabase) {}

  addItem(itemType: string, newItem: any) {
    console.log('2.1');
    return this.af
      .list(itemType)
      .push(newItem)
      .then((ref) => {
        console.log('2.2');
        ref.update({ id: ref.key });
      });
  }

  getList(path: string) {
    return this.af.list(path);
  }

  deleteItem(itemType: string, path: string, itemId: string) {
    this.af.object(path).remove();
  }

  updateItem(itemType: string, itemId: string, updatedItem: any) {
    this.af.object(itemType + '/' + itemId).update(updatedItem);
  }
}
