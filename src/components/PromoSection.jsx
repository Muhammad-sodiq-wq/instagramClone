import React from "react";
import inst from './../assets/Instagram.png';
const PromoSection = () => {
  return (
    <div className="flex flex-col items-center text-center max-w-sm">
      <img src={inst} alt="" className="rounded-lg shadow-md mb-4"
      />
      <p className="text-gray-700">
        Посмотрите, какими моментами из жизни поделились ваши близкие друзья.
      </p>
    </div>
  );
};

export default PromoSection;