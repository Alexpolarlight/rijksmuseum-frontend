export class WebImage {
  constructor(
    public guid: string,
    public url: string
  ) {}
}

export class Classification {
  constructor(
    public iconClassDescription: string[]
  ) {}
}

export class ArtObject {
  constructor(
    public id: string,
    public webImage: WebImage,
    public title: string,
    public longTitle: string,
    public description: string,
    public plaqueDescriptionEnglish: string,
    public classification: Classification,
    public objectTypes: string[],
  ) {}
}

export class ArtObjectDetailsDto {
  constructor(
    public artObject: ArtObject
  ) {}
}
