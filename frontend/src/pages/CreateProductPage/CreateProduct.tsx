import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/reduxHook";
import { createProduct } from "../../redux/reducer/productReducer";
import { CreateProductType } from "../../types/product";

const CreateProduct = () => {
  const dispatch = useAppDispatch();
  const [product, setProduct] = useState<CreateProductType>({
    title: "",
    description: "",
    price: 0,
    categoryId: 0,
    image: "",
    orderId: 1,
  });
  const nav = useNavigate();

  const onChange = (e: any) => {
    const value = e.target.value;
    const name = e.target.name;
    setProduct((prev) => {
      let updatedValue = value;
      if (name === "categoryId" || name === "price") {
        updatedValue = parseFloat(value);
      }
      return {
        ...prev,
        [name]: updatedValue,
      };
    });
  };

  const onSubmit = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    dispatch(createProduct(product));
    console.log(product);
    nav("/products");
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
              <textarea
                onChange={onChange}
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
                onChange={onChange}
                alt="Image not found"
                type="images"
                name="image"
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
