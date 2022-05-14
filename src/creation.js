import {of, from, Observable, fromEvent, range, timer, interval} from 'rxjs'
import {scan, map} from 'rxjs/operators'

const stream$ = of('Hello', 'World')
stream$.subscribe(val => {
    console.log('Value: ', val);
})
