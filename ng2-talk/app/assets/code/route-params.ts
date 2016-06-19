/**
 * photoapp.com/photos/abc-123-xyz
 */

export class PhotoView {
  uuid: Observable<string>
  photoData: Observable<string>
  subscriber: Subscription

  constructor(
    private routeParams: RouteParams,
    private photoService: PhotoService
  ) {
    this.uuid =
      routeParams.pluck<string>('uuid')

    this.downloadPhotoData()
  }

  downloadPhotoData() {
    this.uuid.subscribe(uuid => {
      this.photoData = this.photoService
        .downloadDataForUuid(uuid)
    })
  }
}
