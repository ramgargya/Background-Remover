import logo from "./logo.jpeg";
import video_banner from "./home-page-banner.mp4";
import people from "./people.png";
import people_org from "./people-org.jpg";
import credits from "./credits.png";

export const assests = {
  logo,
  video_banner,
  people,
  people_org,
  credits
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

// pricing plans

export const plans = [
  {
    id: "basic",
    name: "Basic Package",
    price: 499,
    credits: "100 credits",
    description: "Best for personal use",
    popular: false,
  },
  {
    id: "premium",
    name: "Premium Package",
    price: 899,
    credits: "250 credits",
    description: "Ideal for small businesses",
    popular: true, // Marked as popular
  },
  {
    id: "ultimate",
    name: "Ultimate Package",
    price: 1499,
    credits: "1000 credits",
    description: "Perfect for enterprises",
    popular: false,
  },
];

// testimonials

export const testimonials = [
   {
    id: 1,
    quote:
      "This tool saved me so much time! The background removal was seamless and incredibly accurate.",
    author: "Emily Davis",
    handle: "@emilydavis",
  },
  
  {
    id: 2,
    quote:
      "I was amazed at how easy it was to use. The results were professional and exceeded my expectations!",
    author: "Jane Smith",
    handle: "@janesmith",
  },
  {
    id: 3,
    quote:
      "Highly recommend this tool for anyone who needs quick and accurate background removal.",
    author: "Michael Lee",
    handle: "@michaellee",
  },
];

// footer links

export const FOOTER_CONSTRANTS = [
  {
    url: "https://www.facebook.com",
    logo: "https://img.icons8.com/ios-filled/50/000000/facebook.png",
  },
  {
    url: "https://www.twitter.com",
    logo: "https://img.icons8.com/ios-filled/50/000000/twitter.png",
  },
  {
    url: "https://www.instagram.com",
    logo: "https://img.icons8.com/ios-filled/50/000000/instagram-new.png",
  },
  {
    url: "https://www.linkedin.com",
    logo: "https://img.icons8.com/ios-filled/50/000000/linkedin.png",
  },
];