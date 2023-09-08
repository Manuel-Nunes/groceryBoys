import {
  styled
} from 'styled-components';

interface ImgProps {
  $height: string,
  $width: string,
  $src: string,
  $padding: string,
  $margin: string
}

const Img = styled.div<ImgProps>`
${
  ( {
    $height,
    $width,
    $src,
    $margin,
    $padding
  } ) => `
    width: ${ $width };
    height: ${ $height };
    background-image: url(${ $src });
    ${ $margin && `margin: ${ $margin };` }
    ${ $padding && `margin: ${ $padding };` }
  `
}
  background-position: center;
  background-size: 100% 100%;
`;

interface ImageProps{
  width?: string,
  height?: string,
  src?: string,
  padding?: string,
  margin?: string
}

export default function Image( {
  height = '50px',
  width = '50px',
  src = '',
  padding = '',
  margin = ''
}: ImageProps
):JSX.Element {
  return (
    <Img
      $height={height}
      $width={width}
      $src={src}
      $padding={padding}
      $margin={margin}
    />
  );
}
