import { useState, useEffect, useRef, useCallback } from "react";
import cameraImg from "../assets/camera-landscape.webp";
// import p1 from "../assets/IMG_1425.webp";
import p2 from "../assets/intro-img.webp";
import p3 from "../assets/intro-img2.webp";
import p4 from "../assets/bg.webp";
// import p5 from "../assets/bg2.webp";
import p6 from "../assets/bg3.webp";
import "./PhotographyPage.scss";

// const photos = [p1, p2, p3, p4, p5, p6];
const photos = [p2, p3, p4, p6];

const INTERVAL = 8000;

export default function PhotographyPage() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((i) => (i + 1) % photos.length);
    }, INTERVAL);
  }, []);

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [resetTimer]);

  const prev = () => { setCurrent((i) => (i - 1 + photos.length) % photos.length); resetTimer(); };
  const next = () => { setCurrent((i) => (i + 1) % photos.length); resetTimer(); };

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
        <button className="photography-page__arrow photography-page__arrow--left" onClick={prev} aria-label="Previous photo">&#8249;</button>
        <button className="photography-page__arrow photography-page__arrow--right" onClick={next} aria-label="Next photo">&#8250;</button>
      </div>
    </div>
  );
}
