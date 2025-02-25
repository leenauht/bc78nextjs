import { searchProduct } from "@/server/actions/productApi";
import { Shoe } from "@/types/shoe";
import Image from "next/image";
import Link from "next/link";

export default async function Search({ searchParams }: any) {
  const { keyword } = await searchParams;
  console.log(keyword);

  const data: Shoe[] = await searchProduct(keyword);
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
