import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

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

  data: any;

  constructor(private readonly afs: AngularFirestore) {
    console.log('Hello DataServiceProvider Provider');

    this.data={};
    this.data.groups=[];
  


    this.groupCollectionRef = this.afs.collection<any>('domains/1/groups');   
    this.group$ = this.groupCollectionRef.snapshotChanges().map(actions => {
      return actions.map(action => {
        const data = action.payload.doc.data();
         console.log("group=>",data);
        const id = action.payload.doc.id;
        return { id, ...data };
      });
    });
    

    this.memberCollectionRef = this.afs.collection<any>('domains/1/members', ref => ref.orderBy("lname").orderBy("fname"));
    this.member$ = this.memberCollectionRef.snapshotChanges().map(actions => {
      return actions.map(action => {
        const data = action.payload.doc.data();
        console.log("member->",data);
        const id = action.payload.doc.id;
        return { id, ...data };
      });
    });

    this.member$.subscribe(s => this.processData());
    this.group$.subscribe(s => this.processData());

    this.processData();
   

    
    

  }


  processData() {   

    console.log("Start group process");
    this.group$.forEach(

      groups => {
        groups.forEach(group => {
          console.log("Called process ... group");
          let g = this.data.groups.find((g: any) => g.id === group.id);
          console.log("group search ...", g);

          if (g) {
            g.name = group.name;
          } else {
            group.members = [];
            this.data.groups.push(group)
            console.log("groups added here", group);

          }


        });


      }

    );

    console.log("Start member process");

    this.member$.forEach(members => {
      
      
      members.forEach(
        member => {
          console.log("process member called");

          var group
          console.log("group member process ... ", member.group);
          if (member.group) {
            group = this.data.groups.find((g: any) => g.id === member.group.toString());

          } else {
            group = this.data.groups.find((g: any) => g.id === null);
          }

          console.log("member group result ...", group);
          if (group) {


            group.members = group.members.filter(e => (e.fname !== member.fname) && (e.lname !== member.lname));

            console.log("members:filered", group.members);

            /*
                        let m = group.members.find((m: any) => m.id.toString() === member.id.toString());
                        if(m)
                        {
                          const index = group.members.indexOf(m);
                          group.members.splice(index, 1);
                        }*/


            group.members.push(member)
            console.log("members:after filered", group.members);


          } else {


            if (member.group) {
              group = { id: member.group.toString(), members: [] };

            } else {
              group = { id: null, name: "Unallocated", members: [] };
            }


            group.members.push(member);
            console.log("members:groups added here", group);
            this.data.groups.push(group)



          }

          

        }
      )
    });



    return this.data;
  }


  getGroups()
  {
     return this.data.groups;
  }

  getData(){
    return Observable.of(this.data);
  }





}
