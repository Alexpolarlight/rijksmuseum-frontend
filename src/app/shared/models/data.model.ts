export class LinkDto {
  constructor(
    public readonly href: string
  ) { }
}

export class LinksDto {
  constructor(
    public readonly self: LinkDto,
    public readonly next?: LinkDto,
    public readonly last?: LinkDto
  ) { }
}

export class MetaDto {
  constructor(
    public currentPage: number,
    public pageCount: number,
    public perPage: number,
    public totalCount: number
  ) { }
}

export class DataDto<T, R = MetaDto> {
  constructor(
    public data: T[],
    public links: LinksDto,
    public meta: R
  ) { }
}
