
export enum ImageThumbSize {
  Small = 'w200',
  Medium = 'w400',
  Hd = 'w1080',
  FullHd = 'w1920',
  FullHdPlus = 'w2560',
}

export class Image {

  get small(): string {
    return this.thumbs.get(ImageThumbSize.Small);
  }

  get medium(): string {
    return this.thumbs.get(ImageThumbSize.Medium);
  }

  get hd(): string {
    return this.thumbs.get(ImageThumbSize.Hd);
  }

  get fullHd(): string {
    return this.thumbs.get(ImageThumbSize.FullHd);
  }

  get fullHdPlus(): string {
    return this.thumbs.get(ImageThumbSize.FullHdPlus);
  }

  constructor(public readonly alt: string, private thumbs: Map<ImageThumbSize, string>) {
  }
}
