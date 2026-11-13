export default function Wordmark({ className = "", as: Tag = "span" }) {
  return (
    <Tag className={`wordmark ${className}`}>
      Perfetto
    </Tag>
  );
}
