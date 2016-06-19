@Component({
  selector: 'main-view',
  styles: [ require('./main.view.scss') ],
  template: require('./main.view.html'),
  directives: [ UserInfoComponent ],
  providers: [ PostService ]
})

export class MainViewComponent {
  title: string = "Main View"
  posts: Array<string> = []

  constructor(
    private postService: PostService
  ) {
    this.postService.getPosts()
      .then(posts => this.posts = posts)
  }
}
