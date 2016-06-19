@Injectable()
export class AuthenticationGuard {
  constructor(
    @Inject(UserService) private
      userService: UserService,
    private router: Router
  ) {}

  protectRoute(
    candidate: TraversalCandidate
  ): Observable<boolean> {

    const { uuid } = candidate.routeParams

    return this.userService.currentUser()
      .pluck<Array<string>>('photos')
      .map(photos => {
        if (photos.includes(uuid)) {
          return true
        }

        this.router.go('/')
        return false
      })
  }
}
