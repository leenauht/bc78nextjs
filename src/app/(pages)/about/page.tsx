import Image from "next/image";
import Link from "next/link";
import { Shoe } from "@/types/shoe";

export const metadata = {
  title: "Shoes App - Home",
  description:
    "Explore our wide range of shoes with the best prices and quality.",
  openGraph: {
    title: "Shoes App - Home",
    description:
      "Explore our wide range of shoes with the best prices and quality.",
    url: "https://shoesshopbc70.vercel.app",
    images: [
      {
        url: "https://apistore.cybersoft.edu.vn/images/van-old-school.png",
        width: 800,
        height: 600,
        alt: "Shoes App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shoes App - Home",
    description:
      "Explore our wide range of shoes with the best prices and quality.",
    images: ["https://apistore.cybersoft.edu.vn/images/van-old-school.png"],
  },
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Store",
    name: "Shoes App",
    url: "https://yourwebsite.com",
    description:
      "Explore our wide range of shoes with the best prices and quality.",
    image: "https://yourwebsite.com/images/og-image.jpg",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://yourwebsite.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  },
};

export default async function About() {
  const fetchShoe = async () => {
    try {
      const reponse = await fetch(
        "https://apistore.cybersoft.edu.vn/api/Product"
      );
      const data = await reponse.json();
      return data.content;
    } catch (error) {
      console.log(error);
    }
  };

  const data = await fetchShoe();
  console.log(data);

  const renderListShoes = () => {
    return data?.map((shoe: Shoe) => {
      return (
        <div
          key={shoe.id}
          className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
        >
          <a href="#">
            <Image
              className="rounded-t-lg"
              src={shoe.image}
              alt={shoe.alias}
              width={500}
              height={500}
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {shoe.name}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {shoe.description}
            </p>
            <Link
              href={`detail/${shoe.id}`}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Detail
            </Link>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="container mx-auto grid grid-cols-4 gap-4">
      {renderListShoes()}
    </div>
  );
}
