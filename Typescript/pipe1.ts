import {of,interval,pipe} from 'rxjs'
import {first,filter,map} from 'rxjs/operators'


const st:any = of(1,2,3,4,5)
        const pr = pipe(
      filter((n: number) => n % 2 == 0),
      map(n => n * n)
    );
    const obs = pr(st)
    obs.subscribe( v1 => {
      console.log(v1)
    })
