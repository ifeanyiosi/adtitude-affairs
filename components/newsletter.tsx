import React from "react";
import NewsletterButton from "../components/newsletter-button";

export default function NewsLetter() {
  return (
    <div className="bg-white  ">
      <div className="mx-auto max-w-2xl flex items-center justify-center px-4 py-8 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[32px]">Be the first to know</h1>
          <p className="text-gray-500 ">
            Join our email list to learn about exclusive showings and new
            collections.
          </p>

          <NewsletterButton />
        </div>
      </div>
    </div>
  );
}
