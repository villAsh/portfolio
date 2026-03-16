import StarRating from "@/components/labs/component-star-rating";
import React from "react";

const page = () => {
  return (
    <main className="relative h-[calc(100vh-60px)] w-full overflow-hidden bg-background flex flex-col items-center justify-center">
      <header>
        <h1 className="text-xl font-serif">Star Rating</h1>
      </header>
      <section>
        <StarRating />
      </section>
    </main>
  );
};

export default page;
