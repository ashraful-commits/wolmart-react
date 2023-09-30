import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

import { Link } from "react-router-dom";
import PageHeader from "../../components/PageHeader/PageHeader";
import { useDispatch, useSelector } from "react-redux";

import { Toastify } from "../../helper/Toastify";
import { setMessageEmpty } from "../../features/user/userSlice";

import { getTimeAgo } from "../../helper/TimeAgofunc";
import swal from "sweetalert";

import { getAllProductState } from "../../features/Product/ProductSlice";
import "./Products.scss";
import {
  ProductStatusUpdate,
  deleteProduct,
} from "../../features/Product/ProductApiSlice";

const Product = () => {
  const dispatch = useDispatch();
  const { error, message, product, loader } = useSelector(getAllProductState);
  console.log(product);
  const [search, setSearch] = useState("");

  //=================== handle edit update
  const handleProductStatus = (id, status) => {
    dispatch(ProductStatusUpdate({ id, status }));
  };
  // delete Product
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
        dispatch(deleteProduct(id));
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
  }, [error, message, dispatch, Product]);
  const cols = [
    {
      name: "Product Photo",
      selector: (row) => <img style={{ width: "30px" }} src={row.photo} />,
    },
    {
      name: "Product Name",
      selector: (row) => row.name,
      sortable: true,
    },

    {
      name: "Product Slug",
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
            onChange={() => handleProductStatus(row?._id, row?.status)}
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
            data-target="#ProductEdit"
            data-toggle="modal"
            onClick={() => handleProductEdit(row._id)}
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
      <PageHeader title={"Product"} />
      <Link to="/create-product" className="btn btn-primary my-2">
        {loader ? "...Creating" : " Add new Product"}
      </Link>
      <div className="row">
        <div className="col-md-12">
          {/* <!-- Recent Orders --> */}
          <div className="card card-table">
            <div className="card-body">
              <div className="table-responsive">
                <DataTable
                  className="shadow-sm"
                  title="All Products List"
                  columns={cols}
                  data={product ? product : []}
                  selectableRows
                  highlightOnHover
                  pagination
                  pointerOnHover
                  fixedHeader
                  subHeader
                  subHeaderComponent={
                    <input
                      className="form-control w-100"
                      placeholder="Search Product..."
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

export default Product;
