import { Subject, BehaviorSubject, ReplaySubject } from 'rxjs'

document.addEventListener('click', () => {
    const stream$ = new Subject()

    stream$.subscribe(v => console.log('Value:', v))

    stream$.next('Subject')
    stream$.next('Subject')

})
document.addEventListener('click', () => {
    const stream$ = new BehaviorSubject('First!')

    stream$.subscribe(v => console.log('Value:', v))

    stream$.next('BehaviorSubject')
    stream$.next('BehaviorSubject')
})
document.addEventListener('click', () => {
    const stream$ = new ReplaySubject(5)

    //stream$.subscribe(v => console.log('Value:', v))

    stream$.next('ReplaySubject')
    stream$.next('ReplaySubject')

    stream$.subscribe(v => console.log('Value:', v))
})

