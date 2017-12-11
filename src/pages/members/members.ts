import { Component } from '@angular/core';
import { IonicPage, NavController, App, NavParams } from 'ionic-angular';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the MembersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-members',
  templateUrl: 'members.html',
})
export class MembersPage {

  groupCollectionRef: AngularFirestoreCollection<any>;
  group$: Observable<any[]>;
  memberCollectionRef: AngularFirestoreCollection<any>;
  member$: Observable<any[]>;

  data: any;

  private membersCollection: AngularFirestoreCollection<any>;
  members: Observable<any>;

  constructor(public app: App, public navCtrl: NavController, public navParams: NavParams, private readonly afs: AngularFirestore) {
    this.membersCollection = afs.collection('members', ref => ref.orderBy('lname').orderBy('fname'));
    this.members = this.membersCollection.valueChanges();

    this.data = {};
    this.data.groups = [];
    this.groupCollectionRef = this.afs.collection<any>('domains/1/groups');
    //this.group$ = this.groupCollectionRef.valueChanges();
    this.group$ = this.groupCollectionRef.snapshotChanges().map(actions => {
      return actions.map(action => {
        const data = action.payload.doc.data();
        //console.log(data);
        const id = action.payload.doc.id;
        return { id, ...data };
      });
    });

    this.memberCollectionRef = this.afs.collection<any>('members', ref => ref.orderBy("lname").orderBy("fname"));
    this.member$ = this.memberCollectionRef.valueChanges();

    this.member$.subscribe(s => { this.processData(); console.log(s.values.length); });
    this.group$.subscribe(s => { this.processData(); console.log(s.values.length); });

  }

  ionViewDidLoad() {
    this.app.setTitle('Members');
    this.processData();
  }

  processData() {

    console.log("Called process ...A");
    //this.data={};

    //this.data.groups = [];

    this.group$.forEach(

      groups => {
        groups.forEach(group => {
          console.log("Called process ... group");
          let g = this.data.groups.find((g: any) => g.id === group.id);
          console.log("group result ...", g);

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

    this.member$.forEach(members => {

      members.forEach(
        member => {

          var group
          console.log("group member process ... ", member.group);
          if (member.group) {
            group = this.data.groups.find((g: any) => g.id === member.group.toString());

          } else {
            group = this.data.groups.find((g: any) => g.id === null);
          }

          console.log("member group result ...", group);
          if (group) {
            

            group.members = group.members.filter(e => (e.fname !== member.fname)&&(e.lname !== member.lname));

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
              group = { id: member.group.toString() ,members:[]};
             
            } else {
              group = { id: null, name: "Unallocated",members:[] };
            }

            
            group.members.push(member);
            console.log("members:groups added here", group);
            this.data.groups.push(group)



          }

          console.log(JSON.stringify(group));

        }
      )
    });


  }

  processData2() {

    console.log("Called process ...Old");
    //this.data={};

    //this.data.groups = [];

    this.group$.forEach(

      groups => {
        groups.forEach(group => {

          let g = this.data.groups.find((g: any) => g.id === group.id);
          console.log("Called process ...");

          if (g) {
            console.log("groups already here", g);
            g.name = group.name;

          } else {
            group.members = [];
            this.data.groups.push(group)
            console.log("groups added here", group);

          }


        });


      }

    );

    this.member$.forEach(members => {

      members.forEach(
        member => {
          let group = null;
          if (member.group) {
            group = this.data.groups.find((g: any) => {
              if (g.id) {
                return g.id.toString() === member.group.toString()

              } else {
                return false

              }


            });
          }
          else {
            group = this.data.groups.find((g: any) => g.id === null);
          }

          if (group) {
            console.log("members:groups already here", group);

            group.members = group.members.filter(e => e.id !== member.id);

            /*
                        let m = group.members.find((m: any) => m.id.toString() === member.id.toString());
                        if(m)
                        {
                          const index = group.members.indexOf(m);
                          group.members.splice(index, 1);
                        }*/


            group.members.push(member)
          } else {

            if (member.group) {
              group = { id: member.group.toString(), name: member.group.toString() };
            } else {
              group = { id: null, name: 'Unallocated' };
            }

            group.members = [];
            group.members.push(member);
            console.log("members:groups added here", group);
            this.data.groups.push(group)



          }

          console.log(JSON.stringify(group));

        }
      )
    });


  }


}
