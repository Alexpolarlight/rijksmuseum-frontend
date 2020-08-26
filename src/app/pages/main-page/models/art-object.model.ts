export class Links {
  constructor(
    public self: string,
    public web: string
  ) {}

}

export class ArtObjectsDto {
  constructor(
    public artObjects: ArtObjectModel,
    public count: number
  ) {}
}

export class WebImage {
  constructor(
    public guid: string,
    public url: string
  ) {}
}

export class ArtObjectModel {
  constructor(
    public id: string,
    public title: string,
    public longTitle: string,
    public webImage: WebImage,
    public links: Links
  ) {}
}
