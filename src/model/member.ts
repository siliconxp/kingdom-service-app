
import {Observable} from "rxjs/Rx";




export class Member {

    constructor(
        public $key:string,
        public fname:string,
        public lname:string,
        public gender: string,
        ) {

    }

    static fromJson({$key, fname, lname, gender}) {
        return new Member($key, fname, lname, gender);
    }

    static fromJsonArray(json : any[]) : Member[] {
        return json.map(Member.fromJson);
    }


}