import logo from "./logo.jpeg";
import video_banner from "./home-page-banner.mp4";

export const assests = {
  logo,
  video_banner,
};

// steps for the background removal
export const steps = [
  {
    step: "Step 1",
    title: "Select an image",
    description: `First, choose the image you want to remove background from by clicking on "Start from a photo".
  Your image format can be PNG or JPG.
  We support all image dimensions.`,
  },
  {
    step: "Step 2",
    title: "Automatic background removal",
    description: `Once the image is uploaded, our AI will automatically detect and remove the background.
  This process takes just a few seconds.
  No manual effort needed!`,
  },
  {
    step: "Step 3",
    title: "Download your result",
    description: `After the background is removed, you can preview and download the final image.
  Choose from standard or high-resolution formats.
  It’s that simple!`,
  },
];


// categories for the background removal
export const categories = ["People", "Product", "Animal", "Cars", "Graphics"];