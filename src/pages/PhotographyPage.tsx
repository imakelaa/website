import "./PhotographyPage.scss";

// Pull in every image in the uploads folder at build time.
// Drop a new file in there and it shows up automatically — no code edits needed.
const modules = import.meta.glob<string>(
  "../assets/photography/photography-uploads/*.{jpg,JPG,jpeg,JPEG,png,PNG,webp}",
  { eager: true, query: "?url", import: "default" }
);

// Sort by filename "naturally" so img2 comes before img10.
const photos = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, url]) => url);

export default function PhotographyPage() {
  return (
    <div className="photography-page">
      <div className="photography-page__grid">
        {photos.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`Photo ${i + 1}`}
            loading="lazy"
            decoding="async"
            className="photography-page__photo"
          />
        ))}
      </div>
    </div>
  );
}
