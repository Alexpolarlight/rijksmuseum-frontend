export class Links {
  constructor(
    public self: string,
    public web: string
  ) {}

}

export class ArtObjectModel {
  constructor(
    public id: string,
    public name: string,
    public links: Links
  ) {}
}
