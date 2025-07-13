import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        i < fullStars ? (
          <AiFillStar key={i} className="text-yellow-400" />
        ) : hasHalfStar && i === fullStars ? (
          <AiFillStar key={i} className="text-yellow-300 opacity-50" />
        ) : (
          <AiOutlineStar key={i} className="text-yellow-400" />
        )
      ))}
    </div>
  );
};
