import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getAllProducts } from '../../redux/actions/product';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { AiOutlineDelete, AiOutlineEye } from 'react-icons/ai';
import Loader from '../../styles/Loader';
import { DataGrid } from '@mui/x-data-grid';
import styles from '../../styles/styles';

const AllProducts = () => {
  const dispatch = useDispatch();
  const { seller } = useSelector((state) => state.seller);
  const { isLoading, products } = useSelector((state) => state.products);

  const handleProductDelete = (id) => {
    dispatch(deleteProduct(id));
    window.location.reload(true);
  };

  const columns = [
    { field: "id", headerName: "Product Id", minWidth: 150, flex: 0.7 },
    {
      field: "name",
      headerName: "Name",
      minWidth: 180,
      flex: 1.4,
    },
    {
      field: "price",
      headerName: "Price",
      minWidth: 100,
      flex: 0.6,
    },
    {
      field: "stock",
      headerName: "Stock",
      type: "number",
      minWidth: 80,
      flex: 0.5,
    },
    {
      field: "sold",
      headerName: "Sold out",
      minWidth: 130,
      flex: 0.6,
    },
    {
      field: "preview",
      headerName: "Preview",
      type: "number",
      minWidth: 100,
      flex: 0.6,
      sortable: false,
      renderCell: (params) => {
        const d = params.row.name;
        const product_name = d.replace(/\s+/g, "-");
        return (
          <>
            <Link to={`/product/${product_name}`}>
              <Button>
                <AiOutlineEye size={20} />
              </Button>
            </Link>
          </>
        )
      }
    },
    {
      field: "delete",
      headerName: "Delete",
      type: "number",
      minWidth: 120,
      flex: 0.8,
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Button onClick={() => handleProductDelete(params.id)}>
              <AiOutlineDelete size={20} />
            </Button>
          </>
        )
      }
    },
  ];
  const row = [];
  products && products.forEach((item) => {
    row.push({
      id: item._id,
      name: item.name,
      price: "₹ " + item.discountPrice,
      stock: item.stock,
      sold: 10,
    });
  });

  useEffect(() => {
    dispatch(getAllProducts(seller._id));
  }, [dispatch, seller._id]);

  return (
    <>
      {isLoading
        ? <Loader />
        : (
          <div className="w-full mx-8 pt-1 800px:mt-10 bg-white">
            <div className="w-full flex items-center justify-between px-3">
              <h5 className="text-[25px] 800px:text-[30px] font-Poppins text-center">
                Products
              </h5>
              <Link to="/dashboard-add-product" className={`${styles.button2} !h-[45px] hover:bg-amber-500 hover:rounded-sm duration-200 mb-3`}>
                <span className="text-white">
                  Add Product
                </span>
              </Link>
            </div>
            <DataGrid
              rows={row}
              columns={columns}
              pageSizeOptions={[25, 50, 100]}
              disableRowSelectionOnClick
              autoHeight
            />
          </div>
        )
      }
    </>
  )
}

export default AllProducts