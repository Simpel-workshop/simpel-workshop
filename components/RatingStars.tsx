type Props = {
  rating: number;
};

export default function RatingStars({ rating }: Props) {
  const rounded = Math.round(rating);

  return (
    <div className="flex gap-1 text-2xl text-yellow-500">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>{i < rounded ? "★" : "☆"}</span>
      ))}
    </div>
  );
}
