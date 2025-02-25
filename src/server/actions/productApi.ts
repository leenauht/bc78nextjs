export const getProductById = async (id: number) => {
  try {
    const reponse = await fetch(
      `https://apistore.cybersoft.edu.vn/api/Product/getbyid?id=${id}`,
      {
        next: { revalidate: 10 },
      }
    );
    const data = await reponse.json();
    return data.content;
  } catch (error) {
    console.log(error);
  }
};

export const searchProduct = async (keyword: string) => {
  try {
    const reponse = await fetch(
      `https://apistore.cybersoft.edu.vn/api/Product?keyword=${keyword}`
    );
    const data = await reponse.json();
    return data.content;
  } catch (error) {
    console.log(error);
  }
};
