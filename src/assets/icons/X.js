const X = ({ images = [], currentImageIndex = 0, ...props }) => {
  return (
    <svg {...props} width="522" height="441" viewBox="0 0 522 441" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id="x-clip">
          <path d="M517.083 0L352.37 215.582L522 441H338.44L259.771 336.898L180.283 441H0L170.449 218.041L6.55573 0H190.936L263.049 96.7249L337.62 0H517.083Z" />
        </clipPath>
      </defs>
      
      {images.map((image, index) => (
        <image
          key={index}
          href={image}
          x="0"
          y="0"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
          clipPath="url(#x-clip)"
          opacity={index === currentImageIndex ? 1 : 0}
        />
      ))}
      
      <path d="M517.083 0L352.37 215.582L522 441H338.44L259.771 336.898L180.283 441H0L170.449 218.041L6.55573 0H190.936L263.049 96.7249L337.62 0H517.083Z" fill="none" />
    </svg>
  );
};

export default X;
