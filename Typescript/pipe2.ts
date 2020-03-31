import {of,interval,pipe} from 'rxjs'
import {first,filter,map} from 'rxjs/operators'

interval(1000).pipe(
    filter(num => (num %2) === 0),
    map(num => num * num)
   )
   .subscribe(
     val => {
       console.log(val)
     }
   )
