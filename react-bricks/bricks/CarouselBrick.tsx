import React, { useEffect, useState } from "react";
import { Repeater, types } from "react-bricks/frontend";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";
import Slider from "react-slick";
import { bgColors } from "./layout/color";
import Container, { Size } from "./layout/Container";
import Section, { Border } from "./layout/Section";
import styled from "styled-components";
import {
  BackgroundColorsSideEditProps,
  ContainerSizeSideEditProps,
} from "./layout/LayoutSideProps";
import blockNames from "./layout/blockNames";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ArrowProps {
  onClick?: () => void;
}

interface ImageCarouselProps {
  bg?: { color: string; className: string };
  width?: Size;
  slidesToRender: string;
  scrollSlides: string;
  isPlaying: string;
  speed: string;
  className: string;
  gap: string;
}

const CarouselBrick: types.Brick<ImageCarouselProps> = ({
  bg,
  width,
  slidesToRender,
  scrollSlides,
  isPlaying,
  speed,
  gap,
}) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    draggable: true,
    autoplay: isPlaying === "true" ? true : false,
    autoplaySpeed: parseInt(speed) * 1000,
    touchThreshold: 1000,
    slidesToShow: parseInt(slidesToRender),
    slidesToScroll: parseInt(scrollSlides),
    accessibility: true,
  };

  const repeaterElement = Repeater({ propName: "singleImage" });
  const [hasMount, setHasMount] = useState(false);
  useEffect(() => {
    setHasMount(true);
  }, []);

  if (!hasMount) {
    return null;
  }

  return (
    <Section bg={bg}>
      <Container size={width}>
        <style>{`

        .dark div div ul li button:before{
          color:white
        }
        .dark div div ul li.slick-active button:before{
          color:white
        }
        .slick-track{
          display:flex;
          gap:${gap};
        }
        
    `}</style>

        <Slider {...settings}>
          {/* @ts-ignore */}
          {repeaterElement?.props?.children?.map((child, index) => {
            return (
              <div key={index} className="p-0 overflow-hidden ">
                {child}
              </div>
            );
          })}
        </Slider>
      </Container>
    </Section>
  );
};

CarouselBrick.schema = {
  name: "CarouselBrick",
  label: "carousel",
  category: "rb-ui website",
  getDefaultProps: () => ({
    slidesToRender: 1,
    scrollSlides: 1,
    isPlaying: "true",
    speed: 3,
    gap: "30px",

    singleImage: [
      {
        image: {
          src: "https://images.reactbricks.com/original/8309ea05-d105-4f50-9d54-ba86ebddcfbe.jpg",
          placeholderSrc:
            "https://images.reactbricks.com/placeholder/8309ea05-d105-4f50-9d54-ba86ebddcfbe.jpg",
          srcSet:
            "https://images.reactbricks.com/src_set/8309ea05-d105-4f50-9d54-ba86ebddcfbe-2400.jpg 2400w,\nhttps://images.reactbricks.com/src_set/8309ea05-d105-4f50-9d54-ba86ebddcfbe-1800.jpg 1800w,\nhttps://images.reactbricks.com/src_set/8309ea05-d105-4f50-9d54-ba86ebddcfbe-1200.jpg 1200w,\nhttps://images.reactbricks.com/src_set/8309ea05-d105-4f50-9d54-ba86ebddcfbe-600.jpg 600w,\nhttps://images.reactbricks.com/src_set/8309ea05-d105-4f50-9d54-ba86ebddcfbe-300.jpg 300w",
          width: 3385,
          height: 1693,
          alt: "altText",
          seoName: "",
        },
      },
    ],
  }),
  repeaterItems: [
    {
      name: "singleImage",
      itemType: blockNames.SingleImage,
      itemLabel: "Image",
      min: 1,
      max: 5,
    },
  ],
  sideEditProps: [
    {
      groupName: "Layout",
      defaultOpen: true,
      props: [BackgroundColorsSideEditProps, ContainerSizeSideEditProps],
    },
    {
      groupName: "carousel",
      props: [
        {
          name: "slidesToRender",
          label: "slides number",
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: 1, label: "1" },
              { value: 2, label: "2" },
              { value: 3, label: "3" },
              { value: 4, label: "4" },
            ],
          },
        },
        {
          name: "scrollSlides",
          label: "slides to scroll",
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: 1, label: "1" },
              { value: 2, label: "2" },
              { value: 3, label: "3" },
              { value: 4, label: "4" },
            ],
          },
        },
        {
          name: "isPlaying",
          label: "Play carousel",
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Radio,
            options: [
              { value: "true", label: "yes" },
              { value: "false", label: "no" },
            ],
          },
        },
        {
          name: "speed",
          label: "speed",
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: 1, label: "1 s" },
              { value: 2, label: "2 s" },
              { value: 3, label: "3 s" },
              { value: 4, label: "4 s" },
              { value: 5, label: "5 s" },
            ],
          },
        },
        {
          name: "gap",
          label: "gap",
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: "0px", label: "none" },
              { value: "15px", label: "small" },
              { value: "30px", label: "medium" },
              { value: "50px", label: "large" },
            ],
          },
        },
      ],
    },
  ],
};

export default CarouselBrick;
