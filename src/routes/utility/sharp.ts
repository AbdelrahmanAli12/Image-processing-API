import sharp from 'sharp';

async function image(
  filename: string,
  width: number,
  height: number
): Promise<void> {
  await sharp(`assets/full/${filename}.jpg`)
    .resize(width, height, {
      fit: 'contain',
    })
    .toFile(`assets/thumb/${filename}-${width}-${height}_thumb.jpg`);
}

export default image;
