import React from "react";
import { FaStar } from "react-icons/fa";
const reviews = [
  {
    id: 1,
    name: "John Doe",
    rating: 5,
    comment:
      "The coffee is very delicious! I spend a lot of time here with my friends plus the wifi runs fast! Thank you Roots Supply ID!",
  },
  {
    id: 2,
    name: "Jane Smith",
    rating: 4,
    comment:
      "I really like all the menus here, in fact I have tried them all, I don't miss a single one!",
  },
  {
    id: 3,
    name: "Alice Johnson",
    rating: 5,
    comment:
      "Thank you for bringing coffee that makes me excited to get through my day, I become more energetic when I work thanks to this magical coffee.",
  },
  {
    id: 4,
    name: "Angelina & Bobby",
    rating: 4,
    comment:
      "I got a valuable experience when my lover proposed to me at this coffee shop! the employees helped my lover so that the plan went well, they were all very friendly and very kind! until it succeeded in making me cry with emotion!",
  },
];

const Review = ({ name, rating, comment, id }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md ">
      <div className="flex items-center mb-4 ">
        <img
          src={`/reviews/reviews${id}.jpg`}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="ml-4">
          <h2 className="text-lg font-semibold">{name}</h2>
          <div className="flex items-center">
            <div className="flex mr-1 text-yellow-400">
              {[...Array(rating)].map((_, index) => (
                <FaStar key={index} className="text-red" />
              ))}
            </div>
            <span className="text-gray-600">{rating}/5</span>
          </div>
        </div>
      </div>
      <p className="text-navy">{comment}</p>
    </div>
  );
};

const Reviews = () => {
  return (
    <div className="p-10 bg-cream">
      <h1 className="text-navy text-3xl font-semibold mb-4 text-center">
        Our Honest Reviews
        <br />
        <br />
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
        {reviews.map((review) => (
          <Review key={review.id} {...review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
