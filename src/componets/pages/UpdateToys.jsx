import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const UpdateToys = () => {
  useTitle("Update-toy");
  const loadedToys = useLoaderData();
  const {
    _id,
    toyName,
    img,
    sellerName,
    sellerEmail,
    category,
    Price,
    Rating,
    quantity,
    description,
    brand,
    color,
    weight,
    material,
  } = loadedToys;

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    fetch(`https://funko-fanfare.vercel.app/added-toys/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Toy Updated Successfully",
            icon: "success",
            confirmButtonText: "ok",
          });
        }
      });
  };
  return (
    <div className="container mb-12 mx-auto">
      <h2 className="text-center py-6 text-3xl">Update Toy</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-6 mb-6 lg:grid-cols-2">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900  ">
              Toy Name
            </label>
            <input
              {...register("toyName")}
              placeholder="Type here"
              className="input input-bordered w-full"
              defaultValue={toyName}
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900  ">
              Image URL
            </label>
            <input
              {...register("img")}
              placeholder="Type here"
              className="input input-bordered w-full"
              defaultValue={img}
            />
          </div>
          <div>
            <label
              htmlFor="company"
              className="block mb-2 text-sm font-medium text-gray-900  "
            >
              category
            </label>
            <select
              className="select select-bordered w-full"
              {...register("category")}
              defaultValue={category}
            >
              <option value="marvel">Marvel</option>
              <option value="dc">DC</option>
              <option value="star-wars">Star-Wars</option>
              <option value="anime">Anime</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900  ">
              Price
            </label>
            <input
              {...register("Price")}
              placeholder="price"
              className="input input-bordered w-full"
              defaultValue={Price}
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900  ">
              Seller Name
            </label>
            <input
              {...register("sellerName")}
              defaultValue={sellerName}
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900  ">
              Seller Email
            </label>
            <input
              {...register("sellerEmail")}
              defaultValue={sellerEmail}
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900  ">
              Brand
            </label>
            <select
              className="select select-bordered w-full"
              {...register("brand")}
              defaultValue={brand}
            >
              <option value="Funko">Funko</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900  ">
              Color
            </label>
            <select
              className="select select-bordered w-full"
              {...register("color")}
              defaultValue={color}
            >
              <option value="Multicolor">Multicolor</option>
              <option value="singleColor">singleColor</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900  ">
              Rating
            </label>
            <select
              className="select select-bordered w-full"
              {...register("Rating")}
              defaultValue={Rating}
            >
              <option value="5">5 Star</option>
              <option value="4">4 Star</option>
              <option value="3">3 Star</option>
              <option value="2">2 Star</option>
              <option value="1">1 Star</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900  ">
              Quantity
            </label>
            <input
              {...register("quantity")}
              placeholder="Quantity"
              className="input input-bordered w-full"
              defaultValue={quantity}
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900  ">
              Weight
            </label>
            <select
              className="select select-bordered w-full"
              {...register("weight")}
              defaultValue={weight}
            >
              <option value="5 ounces">5 Ounces</option>
              <option value="4 ounces">4 Ounces</option>
              <option value="3 ounces">3 Ounces</option>
              <option value="2 ounces">2 Ounces</option>
              <option value="1 ounces">1 Ounces</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900  ">
              Material
            </label>
            <select
              className="select select-bordered w-full"
              {...register("material")}
              defaultValue={material}
            >
              <option value="Vinyl">Vinyl</option>
              <option value="plastic">plastic</option>
              <option value="wood">Wood</option>
            </select>
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="confirm_password"
            className="block mb-2 text-sm font-medium text-gray-900  "
          >
            Description
          </label>
          <textarea
            defaultValue={description}
            {...register("description")}
            className="textarea w-full textarea-bordered"
            placeholder="Description"
          ></textarea>
        </div>
        <input type="submit" value="Update toy" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default UpdateToys;
