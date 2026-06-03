import { useState, useEffect } from "react";
import cameraImg from "../assets/camera-landscape.webp";
import p1 from "../assets/IMG_1425.webp";
import p2 from "../assets/intro-img.webp";
import p3 from "../assets/intro-img2.webp";
import p4 from "../assets/bg.webp";
import p5 from "../assets/bg2.webp";
import p6 from "../assets/bg3.webp";
import "./PhotographyPage.scss";

const photos = [p1, p2, p3, p4, p5, p6];

export default function PhotographyPage() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((i) => (i + 1) % photos.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="photography-page">
      <div className="photography-page__camera-wrap">
        <img src={cameraImg} alt="camera" className="photography-page__camera" />
        <div className="photography-page__screen">
          {photos.map((p, i) => (
            <img
              key={i}
              src={p}
              alt=""
              className={`photography-page__slide${i === current ? " photography-page__slide--active" : ""}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
