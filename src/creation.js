import {of, from, Observable, fromEvent, range, timer, interval} from 'rxjs'
import {scan, map} from 'rxjs/operators'

const stream$ = of('Hello', 'World')
stream$.subscribe(val => {
    console.log('Value: ', val);
})

const arr$ = from([1, 2, 3, 4]).pipe(
    scan((acc, v) => acc.concat(v), [])
)
arr$.subscribe(val => console.log(val))

