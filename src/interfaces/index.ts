export interface IArtData {
  id: number;
  painting: string;
  author: string;
  title: string;
  photo: string;
  removed: boolean;
}
export interface IArtsData {
  pictures: IArtData;
}
export interface IPaginationProps {
  setArtPAge: React.Dispatch<React.SetStateAction<number>>;
  ArtPage: number;
  pageCount: number;
}
