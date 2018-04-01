

import { Injectable } from '@angular/core';


import * as firebase from 'firebase/app';
import { Observable } from "rxjs/Observable";

import { catchError, map, tap, switchMap } from 'rxjs/operators';




@Injectable()
export class MemberDatax {
    // db is plan firestore / no angularfire
    db: firebase.firestore.Firestore;

    loadMembers() {
        const memberRef = this.db.collection('chats');
        return this.observeCollection(memberRef).
            map(members => {
                return members.map(member => {
                    return {
                        member,
                        reports$: this.observeCollection(member.ref.collection('reports'))
                    };
                })
            });
    }

    // Takes a reference and returns an array of documents
    // with the id and reference
    private observeCollection(ref) {
        return Observable.create((observer) => {
            const unsubscribeFn = ref.onSnapshot(
                snapshot => {
                    observer.next(snapshot.docs.map(doc => {
                        const data = doc.data();
                        console.log(doc.ref)
                        return {
                            ...doc.data(),
                            id: doc.id,
                            ref: doc.ref
                        };
                    }));
                },
                error => observer.error(error),
            );

            return unsubscribeFn;
        });
    }
}
