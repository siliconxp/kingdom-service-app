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
import 'rxjs/add/operator/take';
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

   
    
    // this._members.subscribe(s => {this.processData();this.groupMembers()});
    // this._groups.subscribe(s => this.processData());
    
    this._members.subscribe(s => {this.groupMembers()});
    this._groups.subscribe(s => {this.groupMembers()});

    this.member$.subscribe(m=>this._members.next(m))
    this.group$.subscribe(g=>this._groups.next(g))

    //this.processData();





  }


  groupMembers() {

    //console.log("Start group process");



    this.data.groups.forEach(

      group => {
        // console.log("Called process ... group");
        let g = this.data.groupMembers.find((g: any) => g.id === group.id);
        //console.log("group search ...", g);

        if (g) {
          g.name = group.name;
        } else {
          group.members = [];
          this.data.groupMembers.push(group)
          // console.log("groups added here", group);

        }


      });

      console.log("this.data.groupMembers=>",this.data.groupMembers);

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


console.log('called grouping')
    Observable.from(this._members.value)
      .groupBy(p => p.group,p=>p)
      .flatMap((group$) => group$.reduce((acc, cur) => [...acc, cur], ["" + group$.key]))
      .map(arr => ({ 'id': parseInt(arr[0]), 'members': arr.slice(1) }))
      .subscribe(p => console.log(p));



      this._members.value.forEach(
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
              
            );


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
