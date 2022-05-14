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

const streamObservable$ = new Observable(observer => {
    observer.next('First value')
    setTimeout(() => observer.next('After 1000ms'), 1000)
    setTimeout(() => observer.complete, 2000)           // comment complete() to move forward
    setTimeout(() => observer.error('Something went wrong'), 3000)  // comment erroe() to move forward
    setTimeout(() => observer.next('After 3000ms'), 4000)
})
// I: 3 callback, one by one
streamObservable$.subscribe(
    (val) => console.log('Val:', val),
    (err) => console.log(err),
    () => console.log('I: Complete'),
)
// II: using object keys
streamObservable$.subscribe({
    next(val) {
        console.log(val);
    }, 
    error(err) {
        console.log(err);
    }, 
    complete() {
        console.log('II: Complete');
    }
})

fromEvent(document.querySelector('canvas'), 'mousemove')
.pipe(
    map(e => ({
        x: e.offsetX,
        y: e.offsetY,
        ctx: e.target.getContext('2d')
    }))
)
.subscribe(pos => {
    pos.ctx.fillRect(pos.x, pos.y, 2, 2)
})

const clear$ = fromEvent(document.getElementById('clear'), 'click')
clear$.subscribe(() => {
    const canvas = document.querySelector('canvas')
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
})

const sub = interval(500).subscribe(v => console.log(v))
setTimeout(() => {
    sub.unsubscribe()
}, 4000)

timer(2500).subscribe(v => console.log(v))

range(42, 10).subscribe(v => console.log(v))