import { getProductById } from "@/server/actions/productApi";
import { Shoe } from "@/types/shoe";
import Image from "next/image";

export async function generateMetadata({ params }: any) {
  const prodDetail = await getProductById(params.id);

  return {
    title: `${prodDetail.name} - Product Detail`,
    description: prodDetail.description,
    openGraph: {
      title: prodDetail.name,
      description: prodDetail.description,
      url: `https://yourwebsite.com/products/${params.id}`,
      images: [
        {
          url: prodDetail.image,
          width: 500,
          height: 500,
          alt: prodDetail.alias,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: prodDetail.name,
      description: prodDetail.description,
      images: [prodDetail.image],
    },
  };
}

export default async function Detail({ params }: any) {
  const { id } = await params;
  const data: Shoe = await getProductById(id);
  console.log(data);

  return (
    <div>
      <h1>Detail Page</h1>
      <Image src={data.image} alt="" width={500} height={500} />
      <h3>{data.name}</h3>
      <p>{data.description}</p>
    </div>
  );
}
