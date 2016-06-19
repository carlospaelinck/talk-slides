@Injectable()
export class UserService {
  baseUrl: string = 'http://api.myapp.com'

  constructor(
    @Inject(Http) private http: Http
  ) {}

  downloadUser(): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/user`)
      .catch(() => Observable.throw())
      .map(response => {
        if (response.statusCode === 200) {
          return response.json()
        } else {
          throw new Error()
        }
      })
  }
}
