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
import {
  brandStatusUpdate,
  createBrand,
  deleteBrand,
  updateBrand,
} from "../../features/Product/ProductApiSlice";
import { getAllProductState } from "../../features/Product/ProductSlice";
import "./Brand.scss";
const Brand = () => {
  const dispatch = useDispatch();
  const { error, message, brand, loader } = useSelector(getAllProductState);

  const [logo, setLogo] = useState(null);
  const [preview, setPreview] = useState(null);
  const [search, setSearch] = useState("");
  const [DataId, setDataId] = useState(null);
  const { input, handleInput, setInput } = useFormFields({ name: "" });
  //=============handle brand logo
  const handleBrandLogo = (e) => {
    const logoFile = e.target.files[0];
    setLogo(logoFile);
    setPreview(URL.createObjectURL(logoFile));
  };
  const handleBrandCreate = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", input.name);
    formData.append("logo", logo);
    console.log(logo);
    dispatch(createBrand(formData));
    setInput({
      name: "",
    });
    setPreview(null);
  };
  //==================================input

  const handleEditInput = (e) => {
    console.log(e.target.value);
    setInput({ name: e.target.value });
  };
  //   ======================= edit
  const handleBrandEdit = (id) => {
    const singleBrand = brand.find((item) => item._id === id);
    setDataId(id);
    setInput({ name: singleBrand.name });
    setPreview(singleBrand.logo);
  };
  //=================== handle edit update
  const handleEditUpdate = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", input.name);

    if (logo) {
      formData.append("logo", logo);
    }

    dispatch(updateBrand({ formData, DataId }));
    setInput({
      name: "",
    });
    setPreview(null);
  };
  //=================== handle edit update
  const handleBrandStatus = (id, status) => {
    dispatch(brandStatusUpdate({ id, status }));
  };
  // delete brand
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
        dispatch(deleteBrand(id));
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
  }, [error, message, dispatch, brand]);
  const cols = [
    {
      name: "Brand Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Brand Slug",
      selector: (row) => row.slug,
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
            onChange={() => handleBrandStatus(row._id, row.status)}
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
      name: "Brand Logo",
      selector: (row) => <img style={{ width: "30px" }} src={row.logo} />,
    },
    {
      name: "Action",
      selector: (row) => (
        <div className="d-flex justify-content-center align-items-center">
          <button
            data-target="#brandEdit"
            data-toggle="modal"
            onClick={() => handleBrandEdit(row._id)}
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
      <PageHeader title={"Brand"} />
      <button
        data-target="#brandModel"
        data-toggle="modal"
        className="btn btn-primary my-2"
      >
        {loader ? "...Creating" : " Add new Brand"}
      </button>
      <div className="row">
        <PopupModel action="Add" name="Brand" target="brandModel">
          <form onSubmit={handleBrandCreate}>
            <div className="my-3">
              <label htmlFor="">Brand Name</label>
              <input
                onChange={handleInput}
                name="name"
                value={input.name}
                type="text"
                className="form-control my-3"
              />
              <label htmlFor="">Brand Logo</label>
              <label htmlFor="">
                <img className="w-100" src={preview} alt="" />
              </label>
              <input
                onChange={handleBrandLogo}
                name="logo"
                type="file"
                className="form-control my-3"
              />

              <button
                data-target="#brandModel"
                data-toggle="modal"
                className="btn btn-primary btn-block"
              >
                Add new Brand
              </button>
            </div>
          </form>
        </PopupModel>
        <PopupModel action="Edit" name="Brand" target="brandEdit">
          <form onSubmit={handleEditUpdate}>
            <div className="my-3">
              <label htmlFor="">Brand Name</label>
              <input
                onChange={handleEditInput}
                name="name"
                value={input.name}
                type="text"
                className="form-control my-3"
              />
              <label htmlFor="">Brand Logo</label>
              <img src={preview} className="w-100" alt="" />
              <input
                onChange={handleBrandLogo}
                name="logo"
                type="file"
                className="form-control my-3"
              />
              <button className="btn btn-primary btn-block">
                Edit new Brand
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
                  title="All Brands List"
                  columns={cols}
                  data={brand ? brand : []}
                  selectableRows
                  highlightOnHover
                  pagination
                  pointerOnHover
                  fixedHeader
                  subHeader
                  subHeaderComponent={
                    <input
                      className="form-control w-100"
                      placeholder="Search brand..."
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

export default Brand;
