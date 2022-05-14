import { interval, fromEvent } from "rxjs";
import { map, filter, tap, take, takeLast, takeWhile, scan, reduce, switchMap } from "rxjs/operators";

// I: click on document to call
fromEvent(document, 'click').pipe(
    switchMap(event => {
        return interval(300).pipe(
            tap(v => console.log('Tap: ', v)),
            take(10),
            reduce((acc, v) => acc + v, 0)
        )
    })
)
.subscribe({
    next: v => console.log('Next: ', v),
    complete: () => console.log('Complete')
})

// II: auto call
const stream$ = interval(300).pipe(
    tap(v => console.log('Tap: ', v)),
    // map(v => v * 3),
    // filter(v => v % 2 === 0),
    take(10),
    //takeLast(3),
    //takeWhile(v => v < 7)
    //scan((acc, v) => acc + v, 0), 
    reduce((acc, v) => acc + v, 0),
)
stream$.subscribe({
    next: v => console.log('Next: ', v),
    complete: () => console.log('Complete')
})