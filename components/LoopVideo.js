export default function LoopVideo({ src, poster, label, className = "" }) {
  return (
    <video
      className={`loop-video ${className}`}
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={label}
    />
  );
}
