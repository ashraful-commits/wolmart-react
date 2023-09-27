import { createProduct } from "../../features/Product/ProductApiSlice";
import { useEffect, useState } from "react";
import { Toastify } from "../../helper/Toastify";
import {
  getAllProductState,
  setMessageEmpty,
} from "../../features/Product/ProductSlice";
import { Link } from "react-router-dom";
import PageHeader from "../../components/PageHeader/PageHeader";
import useFormFields from "../../hooks/useFormFields";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";

const Create = () => {
  const dispatch = useDispatch();
  const { error, message, product, category, brand, tag, loader } =
    useSelector(getAllProductState);

  const [photo, setPhoto] = useState([]);

  const [Tags, setTags] = useState([]);
  const [Category, setCategory] = useState([]);

  const [photoPreview, setPhotoPreview] = useState([]);
  const { input, handleInput, setInput } = useFormFields({
    name: "",
    productType: "simple",
    shortDesc: "",
    longDesc: "",
    specification: "",
    sku: "",
    categories: "",
    brand: "",
    regularPrice: "",
    salePrice: "",
    stock: "",
    colors: "",
    size: "",
    link: "",
  });
  //=============handle Product logo

  const handleProductPhoto = (e) => {
    const PhotoFile = e.target.files;
    setPhoto([...PhotoFile]);
    // setPhotoPreview(URL.createObjectURL(PhotoFile));
  };

  //=============================== tost and message and error
  useEffect(() => {
    if (error) {
      Toastify(error, "error");
      dispatch(setMessageEmpty());
    }
    if (message) {
      Toastify(message, "success");
      dispatch(setMessageEmpty());
    }
  }, [error, message, dispatch, product]);

  const TagOption = [];
  tag?.forEach((item) => {
    TagOption.push({ value: item._id, label: item.name });
  });
  const handleCategory = (e) => {
    const CatId = e.target.value;
    console.log(CatId);
    if (Category.find((item) => item === CatId)) {
      setCategory([...Category.filter((item) => item !== CatId)]);
    } else {
      setCategory((prev) => [...prev, CatId]);
    }
  };
  //======================
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", input.name);
    formData.append("productType", input.productType);
    formData.append("simpleProduct", {
      regularPrice: input.regularPrice,
      salePrice: input.salePrice,
      stock: input.stock,
    });
    formData.append("longDesc", input.longDesc);
    formData.append("shortDesc", input.shortDesc);
    formData.append("photo", photo);
    dispatch(createProduct(formData));
  };
  return (
    <>
      <PageHeader title={"Product"} />
      <Link to="/products" className="btn btn-primary my-2">
        {loader ? "...Creating" : " All Products"}
      </Link>
      <form className="py-10" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-xl-6 d-flex">
            <div className="card flex-fill">
              <div className="card-header">
                <h4 className="card-title">Create New Product</h4>
              </div>
              <div className="card-body">
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label">
                    Product Name
                  </label>
                  <div className="col-lg-9">
                    <input
                      name="name"
                      placeholder="Product Name"
                      value={input.name}
                      onChange={handleInput}
                      type="text"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label">
                    Product Type
                  </label>
                  <div className="col-lg-9">
                    <select
                      className="form-control"
                      defaultValue={"simple"}
                      name="productType"
                      onChange={handleInput}
                      value={input.ProductType}
                    >
                      <option>...</option>
                      <option value={"simple"}>Simple Product</option>
                      <option value={"variable"}>Variable Product</option>
                      <option value={"group"}>Group Product</option>
                      <option value={"external"}>External Product</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label">
                    Regular Price
                  </label>
                  <div className="col-lg-9">
                    <input
                      type="number"
                      placeholder="Regular Price"
                      name="regularPrice"
                      value={input.regularPrice}
                      onChange={handleInput}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label">Sale Price</label>
                  <div className="col-lg-9">
                    <input
                      type="number"
                      name="salePrice"
                      placeholder="Sale Price"
                      onChange={handleInput}
                      value={input.salePrice}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label">
                    Short Description
                  </label>
                  <div className="col-lg-9">
                    <input
                      type="text"
                      name="shortDesc"
                      placeholder="Short description"
                      value={input.shortDesc}
                      className="form-control"
                      onChange={handleInput}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label">
                    Long Description
                  </label>
                  <div className="col-lg-9">
                    <input
                      type="text"
                      placeholder="Long description"
                      name="longDesc"
                      value={input.longDesc}
                      className="form-control"
                      onChange={handleInput}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label">Stock</label>
                  <div className="col-lg-9">
                    <input
                      type="number"
                      name="stock"
                      onChange={handleInput}
                      value={input.stock}
                      placeholder="Stock"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label">
                    Specification
                  </label>
                  <div className="col-lg-9">
                    <input
                      type="text"
                      name="specification"
                      placeholder="Specification"
                      value={input.specification}
                      onChange={handleInput}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label">sku</label>
                  <div className="col-lg-9">
                    <input
                      type="text"
                      name="sku"
                      value={input.sku}
                      onChange={handleInput}
                      placeholder="Sku"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label">Categories</label>
                  <div className="col-lg-9">
                    {category?.map((item, index) => {
                      return (
                        <label className="m-1 flex" key={index}>
                          <input
                            onChange={handleCategory}
                            value={item._id}
                            checked={Category.some((cat) => cat === item._id)}
                            type="checkbox"
                          />
                          <label className="mx-1" htmlFor="">
                            {item.name}
                          </label>
                        </label>
                      );
                    })}
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label">Brand</label>
                  <div className="col-lg-9">
                    <select
                      name="brand"
                      value={input.brand}
                      onChange={handleInput}
                      className="form-control"
                      id=""
                    >
                      <option value="">...</option>
                      {brand?.map((item, index) => {
                        return (
                          <option value={item._id} key={index}>
                            {item.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label">Tags</label>
                  <div className="col-lg-9">
                    <Select onChange={setTags} isMulti options={TagOption} />
                  </div>
                </div>

                <div className="form-group row">
                  <label className="col-lg-3 col-form-label">
                    Product Photos
                  </label>
                  <div className="col-lg-9">
                    <input
                      onChange={handleProductPhoto}
                      type="file"
                      multiple
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {input.productType === "simple" && (
            <div className="col-xl-6 d-flex">
              <div className="card flex-fill">
                <div className="card-header">
                  <h4 className="card-title">Simple Product</h4>
                </div>
                <div className="card-body"></div>
              </div>
            </div>
          )}
          {input.productType === "variable" && (
            <div className="col-xl-6 d-flex">
              <div className="card flex-fill">
                <div className="card-header">
                  <h4 className="card-title">Variable Product</h4>
                </div>
                <div className="card-body">
                  <div className="form-group row">
                    <label className="col-lg-3 col-form-label">Color</label>
                    <div className="col-lg-9">
                      <input type="color" multiple className="form-control" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-lg-3 col-form-label">Size</label>
                    <div className="col-lg-9">
                      <input type="text" multiple className="form-control" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {input.productType === "group" && (
            <div className="col-xl-6 d-flex">
              <div className="card flex-fill">
                <div className="card-header">
                  <h4 className="card-title">Group Product</h4>
                </div>
                <div className="card-body"></div>
              </div>
            </div>
          )}

          {input.productType === "external" && (
            <div className="col-xl-6 d-flex">
              <div className="card flex-fill">
                <div className="card-header">
                  <h4 className="card-title">External Product</h4>
                </div>
                <div className="card-body">
                  <div className="form-group row">
                    <label className="col-lg-3 col-form-label">Link</label>
                    <div className="col-lg-9">
                      <input type="text" multiple className="form-control" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="row w-100">
          <div className=" col w-100">
            <button type="submit" className="w-100 btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Create;
