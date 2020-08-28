export class ArtObjectsDto {
  constructor(
    public artObjects: ArtObjectModel,
    public count: number
  ) {}
}

export class HeaderImage {
  constructor(
    public guid: string,
    public url: string
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
    public objectNumber: string,
    public title: string,
    public longTitle: string,
    public headerImage: HeaderImage,
    public webImage: WebImage,
  ) {}
}
