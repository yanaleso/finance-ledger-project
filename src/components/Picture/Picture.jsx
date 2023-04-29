const Picture = ({
  jpg1x,
  jpg2x,
  webp1x,
  webp2x,
}) => {
  return (
    <picture>
      <source srcSet={`${webp1x} 1x, ${webp2x} 2x`} type="image/webp" />
      <source srcSet={`${jpg1x} 1x, ${jpg2x} 2x`} />
      <img src={jpg1x} alt=" "/>
    </picture>
  )
}

export default Picture;