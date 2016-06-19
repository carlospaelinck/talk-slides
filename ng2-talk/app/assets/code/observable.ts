const observable = Observable.of('dog')

const subscriber =
  observable.subscribe(response => {
    console.debug(response)
  })

subscriber.next('cat')

subscriber.unsubscribe()
