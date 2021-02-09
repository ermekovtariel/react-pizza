import React from "react";
import ContentLoader from "react-content-loader"

function LoadingBlock() {
  return (
    <ContentLoader
      className='pizza-block'
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="126" cy="130" r="115" />
      <rect x="0" y="261" rx="6" ry="6" width="276" height="39" />
      <rect x="0" y="306" rx="6" ry="6" width="276" height="74" />
      <rect x="0" y="391" rx="6" ry="6" width="86" height="39" />
      <rect x="109" y="391" rx="34" ry="34" width="166" height="39" />
    </ContentLoader>
  );
}

export default LoadingBlock;
