import React, { useState } from "react";
import Headers from "../component/Home/Header";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import carousalImage from "../assets/bgcarousal.svg";
import car1 from "../assets/car2.svg";
import car2 from "../assets/car3.svg";
import car3 from "../assets/car4.svg";
import car4 from "../assets/car5.svg";
import Rightarrow from "../assets/arrow-right.svg";
import bgCarousel from "../assets/bg-carousel.png";

import Search from "../assets/search.svg";
import property from "../assets/property.svg";
import { Tabs } from "antd";
import "./Home.css";
import Cards from "../component/carscard/Cards";
import AdsComponent from "../component/AdsComponent";
import mobile from "../assets/mobile1.svg";
import mobile2 from "../assets/mobile2.svg";
import mobile3 from "../assets/mobile3.svg";
import mobile4 from "../assets/mobile4.svg";
import property3 from "../assets/property1.svg";
import property1 from "../assets/property2.svg";
import property2 from "../assets/property3.svg";
const { TabPane } = Tabs;

const responsives = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const carData = {
  Luxury: [
    {
      id: 1,
      url:  car1,
      type: 'Luxury Car',
      image: 'luxury-car-1.jpg',
      brand: 'Mercedes-Benz',
      model: 'S-Class',
      price: '$100,000',
      features: ['Leather Seats', 'Advanced Safety', 'Luxurious Interior'],
    },
    {
      id: 2,
      url:  car2,
      type: 'Luxury Car',
      image: 'luxury-car-2.jpg',
      brand: 'BMW',
      model: '7 Series',
      price: '$95,000',
      features: ['Premium Sound System', 'Adaptive Cruise Control'],
    },
    {
      id: 22,
      url:  car3,
      type: 'Luxury Car',
      image: 'luxury-car-2.jpg',
      brand: 'BMW',
      model: '7 Series',
      price: '$95,000',
      features: ['Premium Sound System', 'Adaptive Cruise Control'],
    },
    {
      id:32,
      url:  car4,
      type: 'Luxury Car',
      image: 'luxury-car-2.jpg',
      brand: 'BMW',
      model: '7 Series',
      price: '$95,000',
      features: ['Premium Sound System', 'Adaptive Cruise Control'],
    },
    {
      id: 42,
      url:  car3,
      type: 'Luxury Car',
      image: 'luxury-car-2.jpg',
      brand: 'BMW',
      model: '7 Series',
      price: '$95,000',
      features: ['Premium Sound System', 'Adaptive Cruise Control'],
    },
    // Add more luxury car objects...
  ],
  Hatchback: [
    {
      id: 3,
      type: "Hatchback",
      image: "hatchback-1.jpg",
      brand: "Volkswagen",
      model: "Golf",
      price: "$25,000",
      features: ["Compact Size", "Fuel Efficient"],
    },
    {
      id: 4,
      type: "Hatchback",
      image: "hatchback-2.jpg",
      brand: "Ford",
      model: "Focus",
      price: "$23,000",
      features: ["Easy Maneuverability", "Tech-Friendly Interior"],
    },
    // Add more hatchback car objects...
  ],
  Sedan: [
    {
      id: 5,
      type: "Sedan",
      image: "sedan-1.jpg",
      brand: "Toyota",
      model: "Camry",
      price: "$28,000",
      features: ["Reliable Performance", "Comfortable Ride"],
    },
    {
      id: 6,
      type: "Sedan",
      image: "sedan-2.jpg",
      brand: "Honda",
      model: "Accord",
      price: "$26,500",
      features: ["Fuel-Efficient Engine", "Spacious Interior"],
    },
    // Add more sedan car objects...
  ],
  SUV: [
    {
      id: 7,
      type: "SUV",
      image: "suv-1.jpg",
      brand: "Jeep",
      model: "Grand Cherokee",
      price: "$35,000",
      features: ["Off-Road Capability", "Versatile Interior"],
    },
    {
      id: 8,
      type: "SUV",
      image: "suv-2.jpg",
      brand: "Toyota",
      model: "RAV4",
      price: "$33,000",
      features: ["Advanced Safety Tech", "Generous Cargo Space"],
    },
    // Add more SUV car objects...
  ],
  MUV: [
    {
      id: 9,
      type: "MUV",
      image: "muv-1.jpg",
      brand: "Kia",
      model: "Carnival",
      price: "$30,000",
      features: ["Spacious Seating", "Entertainment System"],
    },
    {
      id: 10,
      type: "MUV",
      image: "muv-2.jpg",
      brand: "Chrysler",
      model: "Pacifica",
      price: "$28,500",
      features: ["Family-Friendly Features", "Stow 'n Go Seating"],
    },
    // Add more MUV car objects...
  ],
};
// const carData2 = {
//   Luxury: [
//     {
//       id: 1,
//       url: { url: mobile },
//       type: "Luxury Car",
//       image: "luxury-car-1.jpg",
//       brand: "Mercedes-Benz",
//       model: "S-Class",
//       price: "$100,000",
//       features: ["Leather Seats", "Advanced Safety", "Luxurious Interior"],
//     },
//     {
//       id: 2,
//       url: { url: mobile2 },
//       type: "Luxury Car",
//       image: "luxury-car-2.jpg",
//       brand: "BMW",
//       model: "7 Series",
//       price: "$95,000",
//       features: ["Premium Sound System", "Adaptive Cruise Control"],
//     },
//     {
//       id: 22,
//       url: { url: mobile3 },
//       type: "Luxury Car",
//       image: "luxury-car-2.jpg",
//       brand: "BMW",
//       model: "7 Series",
//       price: "$95,000",
//       features: ["Premium Sound System", "Adaptive Cruise Control"],
//     },
//     {
//       id: 32,
//       url: { url: mobile4 },
//       type: "Luxury Car",
//       image: "luxury-car-2.jpg",
//       brand: "BMW",
//       model: "7 Series",
//       price: "$95,000",
//       features: ["Premium Sound System", "Adaptive Cruise Control"],
//     },
//     {
//       id: 42,
//       url: { url: mobile },
//       type: "Luxury Car",
//       image: "luxury-car-2.jpg",
//       brand: "BMW",
//       model: "7 Series",
//       price: "$95,000",
//       features: ["Premium Sound System", "Adaptive Cruise Control"],
//     },
//     {
//       id: 52,
//       type: "Luxury Car",
//       image: "luxury-car-2.jpg",
//       brand: "BMW",
//       model: "7 Series",
//       price: "$95,000",
//       features: ["Premium Sound System", "Adaptive Cruise Control"],
//     },
//     // Add more luxury car objects...
//   ],
//   Hatchback: [
//     {
//       id: 3,
//       type: "Hatchback",
//       image: "hatchback-1.jpg",
//       brand: "Volkswagen",
//       model: "Golf",
//       price: "$25,000",
//       features: ["Compact Size", "Fuel Efficient"],
//     },
//     {
//       id: 4,
//       type: "Hatchback",
//       image: "hatchback-2.jpg",
//       brand: "Ford",
//       model: "Focus",
//       price: "$23,000",
//       features: ["Easy Maneuverability", "Tech-Friendly Interior"],
//     },
//     // Add more hatchback car objects...
//   ],
//   Sedan: [
//     {
//       id: 5,
//       type: "Sedan",
//       image: "sedan-1.jpg",
//       brand: "Toyota",
//       model: "Camry",
//       price: "$28,000",
//       features: ["Reliable Performance", "Comfortable Ride"],
//     },
//     {
//       id: 6,
//       type: "Sedan",
//       image: "sedan-2.jpg",
//       brand: "Honda",
//       model: "Accord",
//       price: "$26,500",
//       features: ["Fuel-Efficient Engine", "Spacious Interior"],
//     },
//     // Add more sedan car objects...
//   ],
//   SUV: [
//     {
//       id: 7,
//       type: "SUV",
//       image: "suv-1.jpg",
//       brand: "Jeep",
//       model: "Grand Cherokee",
//       price: "$35,000",
//       features: ["Off-Road Capability", "Versatile Interior"],
//     },
//     {
//       id: 8,
//       type: "SUV",
//       image: "suv-2.jpg",
//       brand: "Toyota",
//       model: "RAV4",
//       price: "$33,000",
//       features: ["Advanced Safety Tech", "Generous Cargo Space"],
//     },
//     // Add more SUV car objects...
//   ],
//   MUV: [
//     {
//       id: 9,
//       type: "MUV",
//       image: "muv-1.jpg",
//       brand: "Kia",
//       model: "Carnival",
//       price: "$30,000",
//       features: ["Spacious Seating", "Entertainment System"],
//     },
//     {
//       id: 10,
//       type: "MUV",
//       image: "muv-2.jpg",
//       brand: "Chrysler",
//       model: "Pacifica",
//       price: "$28,500",
//       features: ["Family-Friendly Features", "Stow 'n Go Seating"],
//     },
//     // Add more MUV car objects...
//   ],
// };
// const carData3 = {
//   Luxury: [
//     {
//       id: 1,
//       url: { url: property3 },
//       type: "Luxury Car",
//       image: "luxury-car-1.jpg",
//       brand: "Mercedes-Benz",
//       model: "S-Class",
//       price: "$100,000",
//       features: ["Leather Seats", "Advanced Safety", "Luxurious Interior"],
//     },
//     {
//       id: 2,
//       url: { url: property1 },
//       type: "Luxury Car",
//       image: "luxury-car-2.jpg",
//       brand: "BMW",
//       model: "7 Series",
//       price: "$95,000",
//       features: ["Premium Sound System", "Adaptive Cruise Control"],
//     },
//     {
//       id: 22,
//       url: { url: property2 },
//       type: "Luxury Car",
//       image: "luxury-car-2.jpg",
//       brand: "BMW",
//       model: "7 Series",
//       price: "$95,000",
//       features: ["Premium Sound System", "Adaptive Cruise Control"],
//     },
//     {
//       id: 32,
//       url: { url: property },
//       type: "Luxury Car",
//       image: "luxury-car-2.jpg",
//       brand: "BMW",
//       model: "7 Series",
//       price: "$95,000",
//       features: ["Premium Sound System", "Adaptive Cruise Control"],
//     },
//     {
//       id: 42,
//       url: { url: property2 },
//       type: "Luxury Car",
//       image: "luxury-car-2.jpg",
//       brand: "BMW",
//       model: "7 Series",
//       price: "$95,000",
//       features: ["Premium Sound System", "Adaptive Cruise Control"],
//     },
//     {
//       id: 52,
//       type: "Luxury Car",
//       image: "luxury-car-2.jpg",
//       brand: "BMW",
//       model: "7 Series",
//       price: "$95,000",
//       features: ["Premium Sound System", "Adaptive Cruise Control"],
//     },
//     // Add more luxury car objects...
//   ],
//   Hatchback: [
//     {
//       id: 3,
//       type: "Hatchback",
//       image: "hatchback-1.jpg",
//       brand: "Volkswagen",
//       model: "Golf",
//       price: "$25,000",
//       features: ["Compact Size", "Fuel Efficient"],
//     },
//     {
//       id: 4,
//       type: "Hatchback",
//       image: "hatchback-2.jpg",
//       brand: "Ford",
//       model: "Focus",
//       price: "$23,000",
//       features: ["Easy Maneuverability", "Tech-Friendly Interior"],
//     },
//     // Add more hatchback car objects...
//   ],
//   Sedan: [
//     {
//       id: 5,
//       type: "Sedan",
//       image: "sedan-1.jpg",
//       brand: "Toyota",
//       model: "Camry",
//       price: "$28,000",
//       features: ["Reliable Performance", "Comfortable Ride"],
//     },
//     {
//       id: 6,
//       type: "Sedan",
//       image: "sedan-2.jpg",
//       brand: "Honda",
//       model: "Accord",
//       price: "$26,500",
//       features: ["Fuel-Efficient Engine", "Spacious Interior"],
//     },
//     // Add more sedan car objects...
//   ],
//   SUV: [
//     {
//       id: 7,
//       type: "SUV",
//       image: "suv-1.jpg",
//       brand: "Jeep",
//       model: "Grand Cherokee",
//       price: "$35,000",
//       features: ["Off-Road Capability", "Versatile Interior"],
//     },
//     {
//       id: 8,
//       type: "SUV",
//       image: "suv-2.jpg",
//       brand: "Toyota",
//       model: "RAV4",
//       price: "$33,000",
//       features: ["Advanced Safety Tech", "Generous Cargo Space"],
//     },
//     // Add more SUV car objects...
//   ],
//   MUV: [
//     {
//       id: 9,
//       type: "MUV",
//       image: "muv-1.jpg",
//       brand: "Kia",
//       model: "Carnival",
//       price: "$30,000",
//       features: ["Spacious Seating", "Entertainment System"],
//     },
//     {
//       id: 10,
//       type: "MUV",
//       image: "muv-2.jpg",
//       brand: "Chrysler",
//       model: "Pacifica",
//       price: "$28,500",
//       features: ["Family-Friendly Features", "Stow 'n Go Seating"],
//     },
//     // Add more MUV car objects...
//   ],
// };
const carData2 = {
  Luxury: [
    {
      id: 1,
      url:  mobile,
      type: 'Luxury Car',
      image: 'luxury-car-1.jpg',
      brand: 'Mercedes-Benz',
      model: 'S-Class',
      price: '$100,000',
      features: ['Leather Seats', 'Advanced Safety', 'Luxurious Interior'],
    },
    {
      id: 2,
      url:  mobile2,
      type: 'Luxury Car',
      image: 'luxury-car-2.jpg',
      brand: 'BMW',
      model: '7 Series',
      price: '$95,000',
      features: ['Premium Sound System', 'Adaptive Cruise Control'],
    },
    {
      id: 22,
      url: mobile3,
      type: 'Luxury Car',
      image: 'luxury-car-2.jpg',
      brand: 'BMW',
      model: '7 Series',
      price: '$95,000',
      features: ['Premium Sound System', 'Adaptive Cruise Control'],
    },
    {
      id:32,
      url: mobile4,
      type: 'Luxury Car',
      image: 'luxury-car-2.jpg',
      brand: 'BMW',
      model: '7 Series',
      price: '$95,000',
      features: ['Premium Sound System', 'Adaptive Cruise Control'],
    },
    {
      id: 42,
      url:  mobile,
      type: 'Luxury Car',
      image: 'luxury-car-2.jpg',
      brand: 'BMW',
      model: '7 Series',
      price: '$95,000',
      features: ['Premium Sound System', 'Adaptive Cruise Control'],
    },
    {
      id: 52,
      type: 'Luxury Car',
      image: 'luxury-car-2.jpg',
      brand: 'BMW',
      model: '7 Series',
      price: '$95,000',
      features: ['Premium Sound System', 'Adaptive Cruise Control'],
    },
    // Add more luxury car objects...
  ],
  Hatchback: [
    {
      id: 3,
      type: 'Hatchback',
      image: 'hatchback-1.jpg',
      brand: 'Volkswagen',
      model: 'Golf',
      price: '$25,000',
      features: ['Compact Size', 'Fuel Efficient'],
    },
    {
      id: 4,
      type: 'Hatchback',
      image: 'hatchback-2.jpg',
      brand: 'Ford',
      model: 'Focus',
      price: '$23,000',
      features: ['Easy Maneuverability', 'Tech-Friendly Interior'],
    },
    // Add more hatchback car objects...
  ],
  Sedan: [
    {
      id: 5,
      type: 'Sedan',
      image: 'sedan-1.jpg',
      brand: 'Toyota',
      model: 'Camry',
      price: '$28,000',
      features: ['Reliable Performance', 'Comfortable Ride'],
    },
    {
      id: 6,
      type: 'Sedan',
      image: 'sedan-2.jpg',
      brand: 'Honda',
      model: 'Accord',
      price: '$26,500',
      features: ['Fuel-Efficient Engine', 'Spacious Interior'],
    },
    // Add more sedan car objects...
  ],
  SUV: [
    {
      id: 7,
      type: 'SUV',
      image: 'suv-1.jpg',
      brand: 'Jeep',
      model: 'Grand Cherokee',
      price: '$35,000',
      features: ['Off-Road Capability', 'Versatile Interior'],
    },
    {
      id: 8,
      type: 'SUV',
      image: 'suv-2.jpg',
      brand: 'Toyota',
      model: 'RAV4',
      price: '$33,000',
      features: ['Advanced Safety Tech', 'Generous Cargo Space'],
    },
    // Add more SUV car objects...
  ],
  MUV: [
    {
      id: 9,
      type: 'MUV',
      image: 'muv-1.jpg',
      brand: 'Kia',
      model: 'Carnival',
      price: '$30,000',
      features: ['Spacious Seating', 'Entertainment System'],
    },
    {
      id: 10,
      type: 'MUV',
      image: 'muv-2.jpg',
      brand: 'Chrysler',
      model: 'Pacifica',
      price: '$28,500',
      features: ['Family-Friendly Features', 'Stow \'n Go Seating'],
    },
    // Add more MUV car objects...
  ],
};
const carData3 = {
  Luxury: [
    {
      id: 1,
      url: property3,
      type: 'Luxury Car',
      image: 'luxury-car-1.jpg',
      brand: 'Mercedes-Benz',
      model: 'S-Class',
      price: '$100,000',
      features: ['Leather Seats', 'Advanced Safety', 'Luxurious Interior'],
    },
    {
      id: 2,
      url:  property1,
      type: 'Luxury Car',
      image: 'luxury-car-2.jpg',
      brand: 'BMW',
      model: '7 Series',
      price: '$95,000',
      features: ['Premium Sound System', 'Adaptive Cruise Control'],
    },
    {
      id: 22,
      url:  property2,
      type: 'Luxury Car',
      image: 'luxury-car-2.jpg',
      brand: 'BMW',
      model: '7 Series',
      price: '$95,000',
      features: ['Premium Sound System', 'Adaptive Cruise Control'],
    },
    {
      id:32,
      url:  property,
      type: 'Luxury Car',
      image: 'luxury-car-2.jpg',
      brand: 'BMW',
      model: '7 Series',
      price: '$95,000',
      features: ['Premium Sound System', 'Adaptive Cruise Control'],
    },
    {
      id: 42,
      url: property2,
      type: 'Luxury Car',
      image: 'luxury-car-2.jpg',
      brand: 'BMW',
      model: '7 Series',
      price: '$95,000',
      features: ['Premium Sound System', 'Adaptive Cruise Control'],
    },
    {
      id: 52,
      type: 'Luxury Car',
      image: 'luxury-car-2.jpg',
      brand: 'BMW',
      model: '7 Series',
      price: '$95,000',
      features: ['Premium Sound System', 'Adaptive Cruise Control'],
    },
    // Add more luxury car objects...
  ],
  Hatchback: [
    {
      id: 3,
      type: 'Hatchback',
      image: 'hatchback-1.jpg',
      brand: 'Volkswagen',
      model: 'Golf',
      price: '$25,000',
      features: ['Compact Size', 'Fuel Efficient'],
    },
    {
      id: 4,
      type: 'Hatchback',
      image: 'hatchback-2.jpg',
      brand: 'Ford',
      model: 'Focus',
      price: '$23,000',
      features: ['Easy Maneuverability', 'Tech-Friendly Interior'],
    },
    // Add more hatchback car objects...
  ],
  Sedan: [
    {
      id: 5,
      type: 'Sedan',
      image: 'sedan-1.jpg',
      brand: 'Toyota',
      model: 'Camry',
      price: '$28,000',
      features: ['Reliable Performance', 'Comfortable Ride'],
    },
    {
      id: 6,
      type: 'Sedan',
      image: 'sedan-2.jpg',
      brand: 'Honda',
      model: 'Accord',
      price: '$26,500',
      features: ['Fuel-Efficient Engine', 'Spacious Interior'],
    },
    // Add more sedan car objects...
  ],
  SUV: [
    {
      id: 7,
      type: 'SUV',
      image: 'suv-1.jpg',
      brand: 'Jeep',
      model: 'Grand Cherokee',
      price: '$35,000',
      features: ['Off-Road Capability', 'Versatile Interior'],
    },
    {
      id: 8,
      type: 'SUV',
      image: 'suv-2.jpg',
      brand: 'Toyota',
      model: 'RAV4',
      price: '$33,000',
      features: ['Advanced Safety Tech', 'Generous Cargo Space'],
    },
    // Add more SUV car objects...
  ],
  MUV: [
    {
      id: 9,
      type: 'MUV',
      image: 'muv-1.jpg',
      brand: 'Kia',
      model: 'Carnival',
      price: '$30,000',
      features: ['Spacious Seating', 'Entertainment System'],
    },
    {
      id: 10,
      type: 'MUV',
      image: 'muv-2.jpg',
      brand: 'Chrysler',
      model: 'Pacifica',
      price: '$28,500',
      features: ['Family-Friendly Features', 'Stow \'n Go Seating'],
    },
    // Add more MUV car objects...
  ],
};

const PropertyData = {
  bh: [
    {
      id: 1,
      url: { url: property },
      type: "Luxury Car",
      image: "luxury-car-1.jpg",
      brand: "Mercedes-Benz",
      model: "S-Class",
      price: "$100,000",
      features: ["Leather Seats", "Advanced Safety", "Luxurious Interior"],
    },
    {
      id: 2,
      url: { url: property },
      type: "Luxury Car",
      image: "luxury-car-2.jpg",
      brand: "BMW",
      model: "7 Series",
      price: "$95,000",
      features: ["Premium Sound System", "Adaptive Cruise Control"],
    },
    {
      id: 22,
      url: { url: property },
      type: "Luxury Car",
      image: "luxury-car-2.jpg",
      brand: "BMW",
      model: "7 Series",
      price: "$95,000",
      features: ["Premium Sound System", "Adaptive Cruise Control"],
    },
    {
      id: 32,
      url: { url: property },
      type: "Luxury Car",
      image: "luxury-car-2.jpg",
      brand: "BMW",
      model: "7 Series",
      price: "$95,000",
      features: ["Premium Sound System", "Adaptive Cruise Control"],
    },
    {
      id: 42,
      url: { url: property },
      type: "Luxury Car",
      image: "luxury-car-2.jpg",
      brand: "BMW",
      model: "7 Series",
      price: "$95,000",
      features: ["Premium Sound System", "Adaptive Cruise Control"],
    },
    {
      id: 52,
      type: "Luxury Car",
      image: "luxury-car-2.jpg",
      brand: "BMW",
      model: "7 Series",
      price: "$95,000",
      features: ["Premium Sound System", "Adaptive Cruise Control"],
    },
    // Add more luxury car objects...
  ],
  nh: [
    {
      id: 3,
      type: "Hatchback",
      image: "hatchback-1.jpg",
      brand: "Volkswagen",
      model: "Golf",
      price: "$25,000",
      features: ["Compact Size", "Fuel Efficient"],
    },
    {
      id: 4,
      type: "Hatchback",
      image: "hatchback-2.jpg",
      brand: "Ford",
      model: "Focus",
      price: "$23,000",
      features: ["Easy Maneuverability", "Tech-Friendly Interior"],
    },
    // Add more hatchback car objects...
  ],
  nng: [
    {
      id: 5,
      type: "Sedan",
      image: "sedan-1.jpg",
      brand: "Toyota",
      model: "Camry",
      price: "$28,000",
      features: ["Reliable Performance", "Comfortable Ride"],
    },
    {
      id: 6,
      type: "Sedan",
      image: "sedan-2.jpg",
      brand: "Honda",
      model: "Accord",
      price: "$26,500",
      features: ["Fuel-Efficient Engine", "Spacious Interior"],
    },
    // Add more sedan car objects...
  ],
  ng: [
    {
      id: 7,
      type: "SUV",
      image: "suv-1.jpg",
      brand: "Jeep",
      model: "Grand Cherokee",
      price: "$35,000",
      features: ["Off-Road Capability", "Versatile Interior"],
    },
    {
      id: 8,
      type: "SUV",
      image: "suv-2.jpg",
      brand: "Toyota",
      model: "RAV4",
      price: "$33,000",
      features: ["Advanced Safety Tech", "Generous Cargo Space"],
    },
    // Add more SUV car objects...
  ],
  ng: [
    {
      id: 9,
      type: "MUV",
      image: "muv-1.jpg",
      brand: "Kia",
      model: "Carnival",
      price: "$30,000",
      features: ["Spacious Seating", "Entertainment System"],
    },
    {
      id: 10,
      type: "MUV",
      image: "muv-2.jpg",
      brand: "Chrysler",
      model: "Pacifica",
      price: "$28,500",
      features: ["Family-Friendly Features", "Stow 'n Go Seating"],
    },
    // Add more MUV car objects...
  ],
};
function Home() {
  const tabs = Object.keys(carData);
  const propertytabs = Object.keys(PropertyData);
  console.log(propertytabs);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  const responsive = {
    singleItem: {
      breakpoint: { max: 3000, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="bg-[#FCFCFD]">
      <Headers />
      <div className="container mx-auto carousal">
        <Carousel
          responsive={responsive}
          showDots
          infinite
          arrows={false}
          customDot={<CustomDot />} // Replace with your custom dot component
        >
          <div className="w-full">
            <img src={bgCarousel} alt="" className="w-full" />
          </div>
          <div>Item 2</div>
          <div>Item 3</div>
          <div>Item 3</div>
          {/* Add more items as needed */}
        </Carousel>
        <div className="my-10 top-search py-10 px-5">
          <h1>Top searched cars</h1>
          {/* <div className="car-tabs">
      <Tabs defaultActiveKey={activeTab} onChange={handleTabChange}>
        {tabs.map((tab) => (
          <TabPane tab={tab} key={tab}>
          <Carousel
          responsive={responsives}
>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</Carousel>;
          </TabPane>
        ))}
      </Tabs>
    </div> */}

<div className="custom-tabs">
      <div className="tabs flex-wrap">
        {tabs.map((tab) => (
          <div
            key={tab}
            className={`tab text-sm :md-text-lg py-1 px-3 ${activeTab === tab ? 'active' : ''}`}
            onClick={() => handleTabChange(tab)}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className="">
        <Carousel responsive={responsives}>
          {carData[activeTab].map((car) => (
            <div key={car.id} className="mr-5">
               <Cards url={car.url} />
            </div>
          ))}
        
          
        </Carousel>
      </div>
    </div>
    <div className='text-SkyColor font-normal flex gap-1 cursor-pointer'>
      <h1>View All</h1>
      <img src={Rightarrow} alt="" />
    </div>
    </div>
    <AdsComponent/>
    <div className='my-10 top-search py-5 px-5'>
      <div className='flex gap-2'>
      <img src={Search} alt="" />
      <h1 className='text-textColor font-semibold text-md'>Recent search</h1>
      </div>
      <div className='mt-4 flex gap-4 flex-wrap'>
        <div className='border border-[#D0D5DD] py-1 px-4 rounded-xl w-fit'>
          <h1>Luxury Car</h1>
        </div>
        <div className='border border-[#D0D5DD] py-1 px-4 rounded-xl w-fit'>
          <h1>iPad pro</h1>
        </div>
        <div className='border border-[#D0D5DD] py-1 px-4 rounded-xl w-fit'>
          <h1>BMW sports bike</h1>
        </div>
        <div className='border border-[#D0D5DD] py-1 px-4 rounded-xl w-fit'>
          <h1>Audi</h1>
        </div>
      </div>
    </div>

        <div className="my-10 top-search py-10 px-5">
          <h1>Property for sale</h1>

<div className="custom-tabs">
<div className='mt-4 flex gap-4 flex-wrap'>
        <div className='border border-[#D0D5DD] py-1 px-4 rounded-xl w-fit'>
          <h1>2 BHK</h1>
        </div>
        <div className='border border-[#D0D5DD] py-1 px-4 rounded-xl w-fit'>
          <h1>3 BHK</h1>
        </div>
        <div className='border border-[#D0D5DD] py-1 px-4 rounded-xl w-fit'>
          <h1>Pent House</h1>
        </div>
        <div className='border border-[#D0D5DD] py-1 px-4 rounded-xl w-fit'>
          <h1>Villa/House</h1>
        </div>
      </div>
      <div className="mt-10">
      <Carousel responsive={responsives}>
          {carData3[activeTab].map((car) => (
            <div key={car.id} className="mr-5">
               <Cards url={car.url} />
            </div>
          ))}
        
          
        </Carousel>
      </div>
    </div>
    <div className='text-SkyColor font-normal flex gap-1 cursor-pointer'>
      <h1>View All</h1>
      <img src={Rightarrow} alt="" />
    </div>
    </div>

    <div className='my-10 top-search py-5 px-5'>
      <div className='flex gap-2'>
      <img src={Search} alt="" />
      <h1 className='text-textColor font-semibold text-md'>Are you looking for?</h1>
      </div>
      <div className='mt-4 flex gap-4 flex-wrap'>
        <div className='border border-[#D0D5DD] py-1 px-4 rounded-xl w-fit'>
          <h1>Luxury Car</h1>
        </div>
        <div className='border border-[#D0D5DD] py-1 px-4 rounded-xl w-fit'>
          <h1>iPad pro</h1>
        </div>
        <div className='border border-[#D0D5DD] py-1 px-4 rounded-xl w-fit'>
          <h1>BMW sports bike</h1>
        </div>
        <div className='border border-[#D0D5DD] py-1 px-4 rounded-xl w-fit'>
          <h1>Audi</h1>
        </div>
      </div>
    </div>

        <AdsComponent />

        <div className="my-10 top-search py-10 px-5">
          <h1>Mobile phone</h1>

<div className="custom-tabs">
<div className='mt-4 flex gap-4 flex-wrap'>
        <div className='border border-[#D0D5DD] py-1 px-4 rounded-xl w-fit'>
          <h1>iPhone</h1>
        </div>
        <div className='border border-[#D0D5DD] py-1 px-4 rounded-xl w-fit'>
          <h1>Samsung</h1>
        </div>
        <div className='border border-[#D0D5DD] py-1 px-4 rounded-xl w-fit'>
          <h1>Huawei</h1>
        </div>
        <div className='border border-[#D0D5DD] py-1 px-4 rounded-xl w-fit'>
          <h1>Vivo</h1>
        </div>
      </div>
      <div className="mt-10">
      <Carousel responsive={responsives}>
          {carData2[activeTab].map((car) => (
            <div key={car.id} className="mr-5">
               <Cards url={car.url} />
            </div>
          ))}
        
          
        </Carousel>
      </div>
    </div>
    <div className='text-SkyColor font-normal flex gap-1 cursor-pointer'>
      <h1>View All</h1>
      <img src={Rightarrow} alt="" />
    </div>
    </div>


    </div>
    
      </div>
  )
}

const CustomDot = ({ onClick, ...props }) => {
  console.log(props.active);
  return (
    <button
      onClick={onClick}
      className={`custom-dot ${props.active === true ? "active" : ""}`}
    />
  );
};

export default Home;
