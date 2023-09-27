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
import "./Tag.scss";
import {
  TagStatusUpdate,
  createTag,
  deleteTag,
  updateTag,
} from "../../features/Product/ProductApiSlice";
const Tag = () => {
  const dispatch = useDispatch();
  const { error, message, tag, loader } = useSelector(getAllProductState);

  const [search, setSearch] = useState("");
  const [DataId, setDataId] = useState(null);
  const { input, handleInput, setInput } = useFormFields({ name: "" });
  //=============handle Tag logo

  const handleTagCreate = (e) => {
    e.preventDefault();

    dispatch(createTag({ name: input.name }));
    setInput({
      name: "",
    });
  };
  //==================================input

  const handleEditInput = (e) => {
    console.log(e.target.value);
    setInput({ name: e.target.value });
  };
  //   ======================= edit
  const handleTagEdit = (id) => {
    const singleTag = tag.find((item) => item._id === id);
    setDataId(id);
    setInput({ name: singleTag.name });
  };
  //=================== handle edit update
  const handleEditUpdate = (e) => {
    e.preventDefault();

    dispatch(updateTag({ name: input.name, DataId }));
    setInput({
      name: "",
    });
  };
  //=================== handle edit update
  const handleTagStatus = (id, status) => {
    dispatch(TagStatusUpdate({ id, status }));
  };
  // delete Tag
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
        dispatch(deleteTag(id));
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
  }, [error, message, dispatch, tag]);
  const cols = [
    {
      name: "Tag Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Tag Slug",
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
            onChange={() => handleTagStatus(row?._id, row?.status)}
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
      name: "Action",
      selector: (row) => (
        <div className="d-flex justify-content-center align-items-center">
          <button
            data-target="#TagEdit"
            data-toggle="modal"
            onClick={() => handleTagEdit(row._id)}
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
      <PageHeader title={"Tag"} />
      <button
        data-target="#TagModel"
        data-toggle="modal"
        className="btn btn-primary my-2"
      >
        {loader ? "...Creating" : " Add new Tag"}
      </button>
      <div className="row">
        <PopupModel action="Add" name="Tag" target="TagModel">
          <form onSubmit={handleTagCreate}>
            <div className="my-3">
              <label htmlFor="">Tag Name</label>
              <input
                onChange={handleInput}
                name="name"
                value={input.name}
                type="text"
                className="form-control my-3"
              />

              <button
                data-target="#TagModel"
                data-toggle="modal"
                className="btn btn-primary btn-block"
              >
                Add new Tag
              </button>
            </div>
          </form>
        </PopupModel>
        <PopupModel action="Edit" name="Tag" target="TagEdit">
          <form onSubmit={handleEditUpdate}>
            <div className="my-3">
              <label htmlFor="">Tag Name</label>
              <input
                onChange={handleEditInput}
                name="name"
                value={input.name}
                type="text"
                className="form-control my-3"
              />

              <button className="btn btn-primary btn-block">
                Edit new Tag
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
                  title="All Tags List"
                  columns={cols}
                  data={tag ? tag : []}
                  selectableRows
                  highlightOnHover
                  pagination
                  pointerOnHover
                  fixedHeader
                  subHeader
                  subHeaderComponent={
                    <input
                      className="form-control w-100"
                      placeholder="Search Tag..."
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

export default Tag;
