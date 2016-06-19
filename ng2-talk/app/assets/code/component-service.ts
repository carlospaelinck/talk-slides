@Component({
  selector: 'user-view',
  providers: [ UserService ],
  template: `
    <div>
      {{ (user | async)?.name }}
    </div>
  `
})

class UserViewComponent {
  user: Observable<any>
  subscriber: Subscriber

  constructor(
    private userService: UserService
  ) {
    this.user = userService.downloadUser()
  }

  alertUserOfLogin() {
    this.subscriber
      = this.user.subscribe(user => {
        alert(`${user.name} logged in.`)
      })
  }

  refeshUser(sender: HTMLElement) {
    this.user = userService.downloadUser()
  }

  ngOnDestory() {
    this.subscriber.unsubscribe()
  }
}
