import React, { useState } from "react";
import { useAppDispatch } from "../../hooks/reduxHook";
import { UpdateProduct } from "../../types/product";
import { updateProduct } from "../../redux/reducer/productReducer";
import { useNavigate } from "react-router-dom";
export interface IProps {
  productId: number;
  productImage: string | undefined;
  productCategoryId: number | undefined;
}
const EditProduct: React.FC<IProps> = ({
  productId,
  productCategoryId,
  productImage,
}) => {
  const dispatch = useAppDispatch();
  const [editProduct, setEditProduct] = useState<UpdateProduct>({
    title: "",
    description: "",
    price: 0,
    categoryId: productCategoryId,
    image: productImage,
    orderId: 1,
    id: productId,
  });

  const onChange = (e: any) => {
    setEditProduct((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  const nav = useNavigate();
  const onSubmit = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    dispatch(updateProduct(editProduct));
    nav("/products");
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-center overflow-hidden mt-12">
        <div className="w-full p-6 bg-white rounded-md shadow-xl lg:max-w-xl ">
          <h1 className="text-2xl font-semibold text-center text-pink-300 uppercase">
            Update Product
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
                className="text xs block w-full px-4 py-2 mt-2 text-pink-300 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
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
                className="text xs block w-full px-4 py-2 mt-2 text-pink-300 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-semibold text-gray-800">
                Description
              </label>
              <textarea
                onChange={onChange}
                name="description"
                className="text xs block w-full h-32 px-4 py-2 mt-2 text-pink-300 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-semibold text-gray-800">
                Image
              </label>
              <input
                alt=""
                onChange={onChange}
                type="images"
                name="image"
                className="text xs block w-full px-4 py-2 mt-2 text-pink-300 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mt-6">
              <button
                onClick={onSubmit}
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-pink-300 rounded-md hover:bg-pink-400 focus:outline-none focus:bg-pink-300"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
