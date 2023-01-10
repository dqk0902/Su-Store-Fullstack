import React, { ChangeEvent, useState } from "react";
import { useAppDispatch } from "../../hooks/reduxHook";
import { createProduct } from "../../redux/reducer/productReducer";

export interface createProduct {
  title: string;
  description: string;
  price: number;
  categoryId: number;
  images: string[];
}
const CreateProduct = () => {
  const dispatch = useAppDispatch();
  const [product, setProduct] = useState<createProduct>({
    title: "",
    description: "",
    price: 0,
    categoryId: 0,
    images: [],
  });
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setProduct((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  const imagesChange = (e: ChangeEvent<HTMLInputElement>) => {
    setProduct((prev) => {
      return {
        ...prev,
        [e.target.name]: [e.target.value],
      };
    });
  };
  console.log(product);
  const onSubmit = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    dispatch(createProduct(product));
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-center overflow-hidden mt-12">
        <div className="w-full p-6 bg-white rounded-md shadow-xl lg:max-w-xl ">
          <h1 className="text-3xl font-semibold text-center text-pink-300 uppercase">
            Create Product
          </h1>
          <form className="mt-6">
            <div className="mb-2">
              <label className="block text-sm font-semibold text-gray-800">
                Title
              </label>
              <input
                onChange={onChange}
                type="title"
                name="title"
                className="block w-full px-4 py-2 mt-2 text-pink-300 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-semibold text-gray-800">
                Price
              </label>
              <input
                onChange={onChange}
                type="price"
                name="price"
                className="block w-full px-4 py-2 mt-2 text-pink-300 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-semibold text-gray-800">
                Description
              </label>
              <input
                onChange={onChange}
                type="description"
                name="description"
                className="block w-full h-32 px-4 py-2 mt-2 text-pink-300 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-semibold text-gray-800">
                Category Id
              </label>
              <input
                onChange={onChange}
                type="categoryId"
                name="categoryId"
                className="block w-full px-4 py-2 mt-2 text-pink-300 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-semibold text-gray-800">
                Image link
              </label>
              <input
                onChange={imagesChange}
                type="images"
                name="images"
                className="block w-full px-4 py-2 mt-2 text-pink-300 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mt-6">
              <button
                onClick={onSubmit}
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-pink-300 rounded-md hover:bg-pink-400 focus:outline-none focus:bg-pink-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
