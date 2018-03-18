import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
//import {Todo} from "../Todo";
import { List } from 'immutable';
//import {asObservable} from "./asObservable";
import { BehaviorSubject } from "rxjs/Rx";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import * as firebase from 'firebase/app';


import { Member } from '../model/member'

// types

type CollectionPredicate<T> = string | AngularFirestoreCollection<T>;
type DocPredicate<T> = string | AngularFirestoreDocument<T>;

/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataServiceProvider {

  groupCollectionRef: AngularFirestoreCollection<any>;
  group$: Observable<any[]>;
  memberCollectionRef: AngularFirestoreCollection<any>;
  member$: Observable<any[]>;

  private _groups: BehaviorSubject<any[]> = new BehaviorSubject([]);
  private _members: BehaviorSubject<any[]> = new BehaviorSubject([]);


  data: any;

  constructor(private readonly afs: AngularFirestore) {


    this.data = {};
    this.data.groups = [];
    this.data.members = [];
    this.data.groupMembers = [];




    this.groupCollectionRef = this.afs.collection<any>('domains/1/groups');


    this.group$ = this.groupCollectionRef.snapshotChanges().map(actions => {

      let groups = actions.map(action => {
        const data = action.payload.doc.data();

        const $key = action.payload.doc.id;
        return { $key, ...data };
      });

      console.log("groups=>", groups);

      //this._groups.next(groups)

      this.data.groups = groups;


      return groups;


    });









    this.memberCollectionRef = this.afs.collection<any>('domains/1/members', ref => ref.orderBy("lname").orderBy("fname"));
    this.member$ = this.memberCollectionRef.snapshotChanges().map(actions => {

      let members = actions.map(action => {
        const data = action.payload.doc.data();
        // console.log("member->", data);
        const $key = action.payload.doc.id;

        //return new Member($key,data.fname,data.lname,data.gender);
        return { $key, ...data };
      });



      console.log("members=>", members);

      this.data.members = members


      return members;


    });



    this.memberCollectionRef.snapshotChanges().map(actions => {

      let members = actions.map(action => {
        const data = action.payload.doc.data();
        // console.log("member->", data);
        const $key = action.payload.doc.id;

        //return new Member($key,data.fname,data.lname,data.gender);
        return { $key, ...data };
      });
      this.data.members = members

      return members;


    }).subscribe(
      m => this._members.next(m)
      )



    // this._members.subscribe(s => {this.processData();this.groupMembers()});
    // this._groups.subscribe(s => this.processData());

    this._members.subscribe(s => { this.groupMembers() });
    this._groups.subscribe(s => { this.groupMembers() });

    //this.member$.subscribe(m => this._members.next(m))
    this.group$.subscribe(g => this._groups.next(g))

    //this.processData();





  }


  groupMembers() {

    //console.log("Start group process");



    this.data.groups.forEach(

      group => {
        // console.log("Called process ... group");
        let g = this.data.groupMembers.find((g: any) => g.id === group.id);
        var i = this.data.groupMembers.findIndex((o => o.id === group.id));
        console.log("group search ...", i);

        if (g) {
          console.log("Before group update: ", this.data.groupMembers[i].id, this.data.groupMembers[i].name, this.data.groupMembers[i].members.length)
          g.name = group.name;
          g.$key = group.$key;
          //this.data.groupMembers[i].name = group.name;
          this.data.groupMembers.slice(i, 1, g)
          console.log("after group update: ", this.data.groupMembers[i].id, this.data.groupMembers[i].name, this.data.groupMembers[i].members.length)

        } else {
          group.members = [];
          //g = { id: group.id,name:group.name, members: [] };
          this.data.groupMembers.push(group)
          i = this.data.groupMembers.findIndex((o => o.id === group.id));
          console.log("groups added here:", i);

        }
        //console.log("resulting group=>", group.id, group.name);


      });

    //console.log("this.data.groupMembers=>", this.data.groupMembers);

    /*
           Observable.of({id: 1, name: 'aze1'},
                              {id: 2, name: 'sf2'},
                              {id: 2, name: 'dg2'},
                              {id: 1, name: 'erg1'},
                              {id: 1, name: 'df1'},
                              {id: 2, name: 'sfqfb2'},
                              {id: 3, name: 'qfs1'},
                              {id: 2, name: 'qsgqsfg2'}
                             )
               .groupBy(p => p.id, p => p.name)
               .flatMap( (group$) => group$.reduce((acc, cur) => [...acc, cur], ["" + group$.key]))
               .map(arr => ({'id': parseInt(arr[0]), 'values': arr.slice(1)}))
               .subscribe(p => console.log(p));*/


    console.log('calling grouping')
    Observable.from(this._members.value)
      .groupBy(p => p.group, p => p)
      .flatMap((group$) => group$.reduce((acc, cur) => [...acc, cur], ["" + group$.key]))
      .map(arr => ({ 'id': arr[0], 'members': arr.slice(1) }))
      .subscribe(p => {

        //Find index of specific object using findIndex method.   
        var group
        var i = this.data.groupMembers.findIndex((o => o.id === p.id));
        if (i >= 0) {
          //console.log("Before update: ", JSON.stringify(this.data.groupMembers[objIndex]))
          console.log("Before member update: ", this.data.groupMembers[i].id, this.data.groupMembers[i].name, this.data.groupMembers[i].members.length)

          group = this.data.groupMembers[i]
          group.members = p.members
          this.data.groupMembers.slice(i, 1, group)

          console.log("after member update: ", this.data.groupMembers[i].id, this.data.groupMembers[i].name, this.data.groupMembers[i].members.length)


          //Update object's name property.
          //this.data.groupMembers[objIndex].name = "Laila"
          //Log object to console again.
          // console.log("After update: ", JSON.stringify(this.data.groupMembers[objIndex]))
        } else {
          console.log('not found:', p.id)
          group = {}
          group.id = p.id
          group.members = p.members
          group = { id: p.id, members: p.members };
          this.data.groupMembers.push(group)
          i = this.data.groupMembers.findIndex((o => o.id === p.id));
          console.log("after member add: ", this.data.groupMembers[i].id, this.data.groupMembers[i].name, this.data.groupMembers[i].members.length)

          // console.log(`adding group=>`, this.data.groupMembers)

        }
        // var group = this.data.groupMembers.find(g => g.id == p.id)
        // console.log(`found group=>`, group)

        // if (group) {
        //   group.members = p.members
        // } else {
        //   group = { id: p.id, members: p.members };
        //   this.data.groupMembers.push(group)
        //   console.log(`group added=>${group.id}`)
        // }

        // console.log(`processed group=>${group.name}`)


      }

      );

    // console.log('this.data.groupMembers=>',JSON.stringify(this.data.groupMembers))



    // this._members.value.forEach(
    //   member => {
    //     //console.log("process member called");

    //     var group
    //     // console.log("group member process ... ", member.group);
    //     if (member.group) {
    //       group = this.data.groups.find((g: any) => g.id === member.group.toString());

    //     } else {
    //       group = this.data.groups.find((g: any) => g.id === null);
    //     }

    //     //console.log("member group result ...", group);
    //     if (group) {

    //       if (!group.members) {
    //         group.members = []
    //       }


    //       group.members = group.members.filter(e => (e.fname !== member.fname) && (e.lname !== member.lname));

    //       //console.log("members:filered", group.members);

    //       /*
    //                   let m = group.members.find((m: any) => m.id.toString() === member.id.toString());
    //                   if(m)
    //                   {
    //                     const index = group.members.indexOf(m);
    //                     group.members.splice(index, 1);
    //                   }*/


    //       group.members.push(member)
    //       //console.log("members:after filered", group.members);


    //     } else {


    //       if (member.group) {
    //         group = { id: member.group.toString(), members: [] };

    //       } else {
    //         group = { id: null, name: "Unallocated", members: [] };
    //       }


    //       group.members.push(member);
    //       // console.log("members:groups added here", group);
    //       this.data.groups.push(group)



    // }



    //}

    // );


    return this.data;
  }


  processData() {

    //console.log("Start group process");
    this.group$.forEach(

      groups => {
        groups.forEach(group => {
          // console.log("Called process ... group");
          let g = this.data.groups.find((g: any) => g.id === group.id);
          //console.log("group search ...", g);

          if (g) {
            g.name = group.name;
          } else {
            group.members = [];
            this.data.groups.push(group)
            // console.log("groups added here", group);

          }


        });


      }

    );

    //console.log("Start member process");

    this.member$.forEach(members => {


      members.forEach(
        member => {
          //console.log("process member called");

          var group
          // console.log("group member process ... ", member.group);
          if (member.group) {
            group = this.data.groups.find((g: any) => g.id === member.group.toString());

          } else {
            group = this.data.groups.find((g: any) => g.id === null);
          }

          //console.log("member group result ...", group);
          if (group) {

            if (!group.members) {
              group.members = []
            }


            group.members = group.members.filter(e => (e.fname !== member.fname) && (e.lname !== member.lname));

            //console.log("members:filered", group.members);

            /*
                        let m = group.members.find((m: any) => m.id.toString() === member.id.toString());
                        if(m)
                        {
                          const index = group.members.indexOf(m);
                          group.members.splice(index, 1);
                        }*/


            group.members.push(member)
            //console.log("members:after filered", group.members);


          } else {


            if (member.group) {
              group = { id: member.group.toString(), members: [] };

            } else {
              group = { id: null, name: "Unallocated", members: [] };
            }


            group.members.push(member);
            // console.log("members:groups added here", group);
            this.data.groups.push(group)



          }



        }
      )
    });
    return this.data;
  }


  getGroups() {
    return this.data.groups;
  }

  getData() {
    return Observable.of(this.data);
  }

  updateMember(ref: string, data: any) {
    return this.afs.collection('domains/1/members').doc(ref).update({
      ...data,
      updatedAt: this.timestamp
    });

  }

  addMember(data: any) {
    const timestamp = this.timestamp
    return this.memberCollectionRef.add({
      ...data,
      updatedAt: timestamp,
      createdAt: timestamp
    })
  }

  getMember($key: any) {
    return this.afs.doc(`domains/1/members/${$key}`).snapshotChanges().map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data();
        const id = action.payload.id;
        return { id, ...data };
      }
    });
  }

  getMemberReports($key: string) {
    return this.afs.collection(`domains/1/members/${$key}/reports`).snapshotChanges().map(

      changes => {
        return changes.map(
          a => {
            const data = a.payload.doc.data();
            const $key = a.payload.doc.id;
            console.log( a.payload.doc.ref)
            return { $key, ...data };
          }
        )
      }
    )
  }


  // *** Code

  get timestamp() {
    return firebase.firestore.FieldValue.serverTimestamp()
  }
  get groups() {
    return this._groups.asObservable();
  }



  /*
  update<T>(ref: DocPredicate<T>, data: any) {
    return this.doc(ref).update({
      ...data,
      updatedAt: this.timestamp
    })
  }
  
  set<T>(ref: DocPredicate<T>, data: any) {
    const timestamp = this.timestamp
    return this.doc(ref).set({
      ...data,
      updatedAt: timestamp,
      createdAt: timestamp
    })
  }
  
  add<T>(ref: CollectionPredicate<T>, data) {
    const timestamp = this.timestamp
    return this.col(ref).add({
      ...data,
      updatedAt: timestamp,
      createdAt: timestamp
    })
  }
  
  upsert<T>(ref: DocPredicate<T>, data: any) {
    const doc = this.doc(ref).snapshotChanges().take(1).toPromise()
  
    return doc.then(snap => {
      return snap.payload.exists ? this.update(ref, data) : this.set(ref, data)
    })
  }*/


}
