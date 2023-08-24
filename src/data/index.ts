import Component01Image1 from "../assets/component-01/Image-01.jpg";
import Component01Image1Enlarge from "../assets/component-01/Image-01@2x.jpg";
import Component01Image2 from "../assets/component-01/Image-02.jpg";
import Component01Image2Enlarge from "../assets/component-01/Image-02@2x.jpg";
import Component01Image3 from "../assets/component-01/Image-03.jpg";
import Component01Image3Enlarge from "../assets/component-01/Image-03@2x.jpg";
import Component02Image1 from "../assets/component-02/Image-01.jpg";
import Component02Image1Enlarge from "../assets/component-02/Image-01@2x.jpg";
import Component02Image2 from "../assets/component-02/Image-02.jpg";
import Component02Image2Enlarge from "../assets/component-02/Image-02@2x.jpg";
import Component02Image3 from "../assets/component-02/Image-03.jpg";
import Component02Image3Enlarge from "../assets/component-02/Image-03@2x.jpg";
import { BlogType } from "./types";

export const mainSectionData: BlogType = {
  title: "ANSWER YOUR BODY'S NEEDS",
  intro:
    "Sourcing local or organic food is a good way to start being more mindful about what you're cooking and eating.",
  description:
    "The way ingredients are sourced affects the way we nourish our bodies. Author Mark Schatzer believes our body naturally develops an appetite for the foods and nutrients it needs to be healthy, but the artificial flavourings are getting in the way. This can be reversed by focusing on high-quality ingredients and being mindful as your appetite guides you to consume according to your body's needs.",
  images: [
    {
      src: Component01Image1,
      enlargeSrc: Component01Image1Enlarge,
      alt: "Image 1",
    },
    {
      src: Component01Image2,
      enlargeSrc: Component01Image2Enlarge,
      alt: "Image 2",
    },
    {
      src: Component01Image3,
      enlargeSrc: Component01Image3Enlarge,
      alt: "Image 3",
    },
  ],
};

export const latestBlogsSectionData: BlogType[] = [
  {
    title: "Summer Lunch Menu by Mark Best",
    intro:
      "AEG ambassador Mark Best's summer eats are guaranteed to help you make the most of the warmer weather and entertaining at home.",
    images: [
      {
        src: Component02Image1,
        enlargeSrc: Component02Image1Enlarge,
        alt: "Image 4",
      },
    ],
  },
  {
    title: "A Traditional Christmas Eve, Mark Best Style",
    intro:
      "One of Australia's best chefs and AEG ambassador, Mark Best, shares his favourite Christmas Eve menu which is sure to impress your guests.",
    images: [
      {
        src: Component02Image2,
        enlargeSrc: Component02Image2Enlarge,
        alt: "Image 5",
      },
    ],
  },
  {
    title: "Taking Taste Further",
    intro:
      "This exclusive cookbook gives you all the know-how you need. We've designed it to make sure you get the most out of our products - and the best out of your food.",
    images: [
      {
        src: Component02Image3,
        enlargeSrc: Component02Image3Enlarge,
        alt: "Image 6",
      },
    ],
  },
];
