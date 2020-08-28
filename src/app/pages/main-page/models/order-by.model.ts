export class SortByType {
  constructor(
    public id: string,
    public type: string
  ) {}
}

export const RELEVANCE = new SortByType('relevance', 'Relevance');
export const OBJECT_TYPE = new SortByType('objecttype', 'ObjectType');
export const CHRONOLOGIC = new SortByType('chronologic', 'Chronologic');
export const ACHRONOLOGIC = new SortByType('achronologic', 'Achronologic');
export const ARTIST = new SortByType('artist', 'Results on artist (a-z)');
export const ARTISTDESC = new SortByType('artistdesc', 'Results on artist (z-a)');

export const ORDER_BY: SortByType[] = [RELEVANCE, OBJECT_TYPE, CHRONOLOGIC, ACHRONOLOGIC, ARTIST, ARTISTDESC];
