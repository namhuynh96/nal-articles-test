import { useEffect, useState } from "react";

import classes from "./ImageContainer.module.css";

interface IImageContainerProps {
  src: string;
  alt: string;
  mobileWidth: string;
  imageRatio: number;
  desktopWidth?: string;
  breakpoint?: number;
}

const ImageContainer: React.FC<IImageContainerProps> = ({
  src,
  alt,
  mobileWidth,
  breakpoint,
  desktopWidth,
  imageRatio,
}) => {
  const [width, setWidth] = useState(
    breakpoint
      ? window.innerWidth > breakpoint
        ? desktopWidth
        : mobileWidth
      : mobileWidth
  );

  useEffect(() => {
    if (breakpoint) {
      const resizeFunction = () => {
        setWidth(window.innerWidth > breakpoint ? desktopWidth : mobileWidth);
      };
      window.addEventListener("resize", resizeFunction);

      return () => {
        window.removeEventListener("resize", resizeFunction);
      };
    }
  }, [desktopWidth, mobileWidth, breakpoint]);

  return (
    <div
      style={{
        width,
      }}
    >
      <div
        className={classes.ImageLoading}
        style={{ paddingTop: `${imageRatio}%` }}
      >
        <img src={src} className={classes.Image} alt={alt} />
      </div>
    </div>
  );
};

export default ImageContainer;
