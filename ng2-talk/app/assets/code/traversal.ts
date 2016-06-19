@Component({
  selector: 'photos-view',
  template: `
    <a linkTo="/settings">
      Settings
    </a>

    <a [linkTo]="'/photos/' + photoUuid">
      View Photo
    </a>
  `
})
export class PhotosView {
  photoUuid: string = 'abc-123-xyz'

  constructor(
    private router: Router
  ) {}

  viewPhoto() {
    this.router.go(`/photos/${photoUuid}`)
  }

  viewSettings() {
    this.router.replace('/settings')
  }

  goBack() {
    this.router.back()
  }
}
