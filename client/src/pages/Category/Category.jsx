import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import PopupModel from "../../components/PopupModel/PopupModel";

import PageHeader from "../../components/PageHeader/PageHeader";
import { useDispatch, useSelector } from "react-redux";
import useFormFields from "../../hooks/useFormFields";

import { Toastify } from "../../helper/Toastify";
import { setMessageEmpty } from "../../features/user/userSlice";

import { getTimeAgo } from "../../helper/TimeAgofunc";
import swal from "sweetalert";

import { getAllProductState } from "../../features/Product/ProductSlice";
import "./category.scss";
import {
  CategoryStatusUpdate,
  createCategory,
  deleteCategory,
  getAllCategory,
  updateCategory,
} from "../../features/Product/ProductApiSlice";

const Category = () => {
  const dispatch = useDispatch();
  const { error, message, category, loader } = useSelector(getAllProductState);
  console.log(category);
  const [search, setSearch] = useState("");
  const [DataId, setDataId] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const { input, handleInput, setInput } = useFormFields({
    name: "",
    parentCategory: "",
    icon: "",
  });
  //=============handle category logo

  const handleCategoryPhoto = (e) => {
    const PhotoFile = e.target.files[0];
    setPhoto(PhotoFile);
    setPhotoPreview(URL.createObjectURL(PhotoFile));
  };
  const handleCategoryCreate = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", input.name);
    formData.append("parentCategory", input.parentCategory);
    formData.append("icon", input.icon);
    formData.append("photo", photo);

    dispatch(createCategory(formData));
    setInput({
      name: "",
      parentCategory: "",
      icon: "",
    });
    setPhotoPreview(null);
    setPhoto(null);
  };
  //==================================input
  console.log(input.name, input.parentCategory, input.icon);
  //   ======================= edit
  const handleCategoryEdit = (id) => {
    const singleCategory = category.find((item) => item._id === id);

    setDataId(id);
    setInput({
      name: singleCategory.name,
      icon: singleCategory.icon,
      parentCategory: singleCategory.parentCategory?._id
        ? singleCategory.parentCategory?._id
        : "",
    });
  };
  //=================== handle edit update
  const handleEditUpdate = (e) => {
    e.preventDefault();
    console.log(input.parentCategory, input.icon, input.name);
    const formData = new FormData();
    formData.append("name", input.name);
    formData.append("parentCategory", input.parentCategory);
    formData.append("icon", input.icon);
    if (photo) {
      formData.append("photo", photo);
    }
    setPhotoPreview(null);
    setPhoto(null);
    dispatch(updateCategory({ formData, DataId }));
    setInput({
      name: "",
      parentCategory: "",
      icon: "",
    });
  };
  //=================== handle edit update
  const handleCategoryStatus = (id, status) => {
    dispatch(CategoryStatusUpdate({ id, status }));
  };
  // delete category
  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Poof!  file has been deleted!", {
          icon: "success",
        });
        dispatch(deleteCategory(id));
      } else {
        swal(" file is safe!");
      }
    });
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
  }, [error, message, dispatch, category]);
  const cols = [
    {
      name: "category Icon",
      selector: (row) => <i className={row.icon}></i>,
      sortable: true,
    },
    {
      name: "category Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Parent Category",
      selector: (row) => row.parentCategory?.name,
      sortable: true,
    },
    {
      name: "category Slug",
      selector: (row) => row.slug,
      sortable: true,
    },
    {
      name: "Sub Category",
      selector: (row) => (
        <ul>
          {row?.subCategory?.map((item, index) => {
            return <li key={index}>{item.name}</li>;
          })}
        </ul>
      ),
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => (
        <div className="status-toggle">
          <input
            type="checkbox"
            // className="check"
            checked={row?.status ? true : false}
            onChange={() => handleCategoryStatus(row?._id, row?.status)}
          />
          {/* <label htmlFor={row.name} className="checktoggle">
            checkbox
          </label> */}
        </div>
      ),
    },
    {
      name: "CreatedAt",
      selector: (row) => getTimeAgo(row.createdAt),
    },
    {
      name: "category Photo",
      selector: (row) => <img style={{ width: "30px" }} src={row.photo} />,
    },
    {
      name: "Action",
      selector: (row) => (
        <div className="d-flex justify-content-center align-items-center">
          <button
            data-target="#categoryEdit"
            data-toggle="modal"
            onClick={() => handleCategoryEdit(row._id)}
            className="btn btn-warning mx-2"
          >
            <i className="fa fa-edit"></i>
          </button>
          <button
            onClick={() => handleDelete(row._id)}
            className="btn btn-danger"
          >
            <i className="fa fa-trash"></i>
          </button>
        </div>
      ),
    },
  ];
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <PageHeader title={"category"} />
      <button
        data-target="#categoryModel"
        data-toggle="modal"
        className="btn btn-primary my-2"
      >
        {loader ? "...Creating" : " Add new category"}
      </button>
      <div className="row">
        <PopupModel action="Add" name="Category" target="categoryModel">
          <form onSubmit={handleCategoryCreate}>
            <div className="my-3">
              <label htmlFor="">category Name</label>
              <input
                onChange={handleInput}
                name="name"
                value={input.name}
                type="text"
                className="form-control my-3"
              />
              <label htmlFor="">category Icon</label>
              <input
                onChange={handleInput}
                name="icon"
                value={input.icon}
                type="text"
                className="form-control my-3"
              />
              <label htmlFor="">parent Category Name</label>
              <select
                onChange={handleInput}
                className="form-control my-3"
                name="parentCategory"
                id=""
              >
                <option value="">...</option>
                {category?.map((item, index) => {
                  return (
                    <option value={item._id} key={index}>
                      {item.name}
                    </option>
                  );
                })}
              </select>

              <label htmlFor="">Photo</label>
              <label htmlFor="">
                <img className="w-100" src={photoPreview} />
              </label>
              <input
                onChange={handleCategoryPhoto}
                type="file"
                id=""
                className="form-control my-3"
              />
              <button type="submit" className="btn btn-primary btn-block">
                Add new category
              </button>
            </div>
          </form>
        </PopupModel>
        <PopupModel action="Edit" name="Category" target="categoryEdit">
          <form onSubmit={handleEditUpdate}>
            <div className="my-3">
              <label htmlFor="">category Name</label>
              <input
                onChange={handleInput}
                name="name"
                value={input.name}
                type="text"
                className="form-control my-3"
              />
              <label htmlFor="">category Icon</label>
              <input
                onChange={handleInput}
                name="icon"
                value={input.icon}
                type="text"
                className="form-control my-3"
              />
              <label htmlFor="">parent Category Name</label>
              <select
                onChange={handleInput}
                className="form-control my-3"
                name="parentCategory"
              >
                <option value="">...</option>
                {category?.map((item, index) => {
                  return (
                    <option
                      value={item._id}
                      selected={
                        item.parentCategory?._id === input.parentCategory
                          ? true
                          : false
                      }
                      key={index}
                    >
                      {item.name}
                    </option>
                  );
                })}
              </select>

              <label htmlFor="">Photo</label>
              <label htmlFor="">
                <img className="w-100" src={photoPreview} />
              </label>
              <input
                onChange={handleCategoryPhoto}
                type="file"
                id=""
                className="form-control my-3"
              />
              <button type="submit" className="btn btn-primary btn-block">
                Edit category
              </button>
            </div>
          </form>
        </PopupModel>
        <div className="col-md-12">
          {/* <!-- Recent Orders --> */}
          <div className="card card-table">
            <div className="card-body">
              <div className="table-responsive">
                <DataTable
                  className="shadow-sm"
                  title="All categorys List"
                  columns={cols}
                  data={category ? category : []}
                  selectableRows
                  highlightOnHover
                  pagination
                  pointerOnHover
                  fixedHeader
                  subHeader
                  subHeaderComponent={
                    <input
                      className="form-control w-100"
                      placeholder="Search category..."
                      type="search"
                      value={search}
                      onChange={handleSearch}
                    />
                  }
                />
              </div>
            </div>
          </div>
          {/* <!-- /Recent Orders --> */}
        </div>
      </div>
    </>
  );
};

export default Category;
