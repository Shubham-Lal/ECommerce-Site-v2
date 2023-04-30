import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { serverURL } from '../../server';
import { AiOutlineArrowRight, AiOutlineCamera, AiOutlineDelete } from 'react-icons/ai';
import { MdTrackChanges } from 'react-icons/md';
import styles from '../../styles/styles';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { Button } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';

const ProfileContent = ({ activeTab }) => {
  const { user } = useSelector((state) => state.user);

  return (
    user && (
      <div className="w-full">
        {activeTab === 0 && <ProfileComponent user={user} />}
        {activeTab === 1 && <OrderComponent />}
        {activeTab === 2 && <RefundComponent />}
        {activeTab === 4 && <TrackOrderComponent />}
        {activeTab === 5 && <PaymentMethodComponent />}
        {activeTab === 6 && <AddressComponent />}
      </div>
    )
  )
}

const ProfileComponent = ({ user }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");

  const handleSubmitInfo = (e) => {
    e.preventDefault();
    if (!name || !email || !phoneNumber || !zipCode || !address1 || !address2) return toast.warn("Enter all the fields to proceed!");
  };

  return (
    <>
      <div className="flex justify-center w-full">
        <div className="relative">
          <img
            className="w-[150px] h-[150px] rounded-full object-cover border-[3px] border-[#3AD132]"
            src={`${serverURL}/${user.avatar}`}
            alt="user"
          />
          <div className="absolute bottom-[3px] right-[5px] w-[30px] h-[30px] bg-[#E3E9EE] rounded-full flex items-center justify-center cursor-pointer group">
            <AiOutlineCamera className="group-hover:text-[#3AD132] group-hover:scale-125 duration-200" />
          </div>
        </div>
      </div>

      <br /><br />

      <div className="w-full px-5">
        <form onSubmit={handleSubmitInfo}>
          <div className="w-full flex pb-3">
            <div className="w-[50%]">
              <label className="block pb-2">
                *Full Name
              </label>
              <input
                type="text"
                className={`${styles.input} !w-[95%] focus:border-[#3AD132]`}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="w-[50%]">
              <label className="block pb-2">
                *Email Address
              </label>
              <input
                type="email"
                className={`${styles.input} !w-[95%] focus:border-[#3AD132]`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="w-full flex pb-3">
            <div className="w-[50%]">
              <label className="block pb-2">
                *Phone Number
              </label>
              <input
                type="number"
                placeholder="Add Phone Number"
                className={`${styles.input} !w-[95%] focus:border-[#3AD132]`}
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="w-[50%]">
              <label className="block pb-2">
                *Zip Code
              </label>
              <input
                type="number"
                placeholder="Add Zip Code"
                className={`${styles.input} !w-[95%] focus:border-[#3AD132]`}
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
              />
            </div>
          </div>

          <div className="w-full flex pb-3">
            <div className="w-[50%]">
              <label className="block pb-2">
                *Address 1
              </label>
              <input
                type="text"
                placeholder="Add your delivery address"
                className={`${styles.input} !w-[95%] focus:border-[#3AD132]`}
                value={address1}
                onChange={(e) => setAddress1(e.target.value)}
              />
            </div>
            <div className="w-[50%]">
              <label className="block pb-2">
                Address 2
              </label>
              <input
                type="text"
                placeholder="Add other address"
                className={`${styles.input} !w-[95%] focus:border-[#3AD132]`}
                value={address2}
                onChange={(e) => setAddress2(e.target.value)}
              />
            </div>
          </div>

          <button
            className={`w-[250px] h-[40px] border border-[#3A24DB] text-center text-[#3A24DB] hover:bg-[#3A24DB] hover:text-white duration-200 rounded-[3px] mt-8 cursor-pointer`}
            type="submit"
          >
            Update
          </button>
        </form>
      </div>
    </>
  )
};

const OrderComponent = () => {
  const orders = [
    {
      _id: "769893787jhhsj78374h",
      orderItems: [
        {
          name: "Iphone 14 Pro Max"
        }
      ],
      totalPrice: 1099,
      orderStatus: "Processing",
    }
  ];

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },
    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      // cellClassName: (params) => {
      //   return params.getValue(params.id, "status") === "Delivered"
      //     ? "greenColor"
      //     : "redColor";
      // },
      // cellClassName: (params) => {
      //   return params.row.status === "Delivered"
      //     ? "greenColor"
      //     : "redColor";
      // },
      cellClassName: (params) =>
        params.value === "Delivered" ? "text-[green]" : "text-[#FFAE42]",
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },
    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },
    {
      field: " ",
      flex: 1,
      minWidth: 150,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/order/${params.id}`}>
              <Button>
                <AiOutlineArrowRight size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  const row = [];

  orders && orders.forEach((item) => {
    row.push({
      id: item._id,
      itemsQty: item.orderItems.length,
      total: "US$ " + item.totalPrice,
      status: item.orderStatus
    });
  });

  return (
    <div className="pl-8 pt-1">
      <DataGrid
        rows={row}
        columns={columns}
        pageSizeOptions={[25, 50, 100]}
        disableRowSelectionOnClick
        autoHeight
      />
    </div>
  )
};

const RefundComponent = () => {
  const orders = [
    {
      _id: "769893787jhhsj78374h",
      orderItems: [
        {
          name: "Iphone 14 Pro Max"
        }
      ],
      totalPrice: 1099,
      orderStatus: "Processing",
    }
  ];

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },
    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      // cellClassName: (params) => {
      //   return params.getValue(params.id, "status") === "Delivered"
      //     ? "greenColor"
      //     : "redColor";
      // },
      // cellClassName: (params) => {
      //   return params.row.status === "Delivered"
      //     ? "greenColor"
      //     : "redColor";
      // },
      cellClassName: (params) =>
        params.value === "Delivered" ? "text-[green]" : "text-[#FFAE42]",
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },
    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },
    {
      field: " ",
      flex: 1,
      minWidth: 150,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/order/${params.id}`}>
              <Button>
                <AiOutlineArrowRight size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  const row = [];

  orders && orders.forEach((item) => {
    row.push({
      id: item._id,
      itemsQty: item.orderItems.length,
      total: "US$ " + item.totalPrice,
      status: item.orderStatus
    });
  });

  return (
    <div className="pl-8 pt-1">
      <DataGrid
        rows={row}
        columns={columns}
        pageSizeOptions={[25, 50, 100]}
        disableRowSelectionOnClick
        autoHeight
      />
    </div>
  )
};

const TrackOrderComponent = () => {
  const orders = [
    {
      _id: "769893787jhhsj78374h",
      orderItems: [
        {
          name: "Iphone 14 Pro Max"
        }
      ],
      totalPrice: 1099,
      orderStatus: "Processing",
    }
  ];

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },
    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      // cellClassName: (params) => {
      //   return params.getValue(params.id, "status") === "Delivered"
      //     ? "greenColor"
      //     : "redColor";
      // },
      // cellClassName: (params) => {
      //   return params.row.status === "Delivered"
      //     ? "greenColor"
      //     : "redColor";
      // },
      cellClassName: (params) =>
        params.value === "Delivered" ? "text-[green]" : "text-[#FFAE42]",
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },
    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },
    {
      field: " ",
      flex: 1,
      minWidth: 150,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/track/order/${params.id}`}>
              <Button>
                <MdTrackChanges size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  const row = [];

  orders &&
    orders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item.orderItems.length,
        total: "US$ " + item.totalPrice,
        status: item.orderStatus,
      });
    });

  return (
    <div className="pl-8 pt-1">
      <DataGrid
        rows={row}
        columns={columns}
        pageSizeOptions={[25, 50, 100]}
        disableRowSelectionOnClick
        autoHeight
      />
    </div>
  )
};

const PaymentMethodComponent = () => {
  return (
    <div className="w-full px-5">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-[25px] font-[600] text-[#000000ba] pb-2">
          Payment Methods
        </h1>
        <div className={`${styles.button} rounded-md hover:bg-amber-500 hover:rounded-sm duration-200`}>
          <span className="text-[#fff]">
            Add New
          </span>
        </div>
      </div>

      <br />

      <div className="w-full bg-white h-[70px] rounded-[4px] flex items-center px-3 shadow justify-between pr-10 select-none">
        <div className="flex items-center">
          <img
            src="/Visa.svg"
            alt="Visa"
          />
          <h5 className="pl-5 font-[600]">
            Shubham Lal
          </h5>
        </div>
        <div className="pl-8 flex items-center">
          <h6>
            4040 **** **** **40
          </h6>
          <h5 className="pl-6">
            12/2027
          </h5>
        </div>
        <div className="min-w-[10%] flex items-center justify-between pl-8">
          <AiOutlineDelete
            size={25}
            className="cursor-pointer hover:text-[red] duration-200"
          />
        </div>
      </div>
    </div>
  )
};

const AddressComponent = () => {
  return (
    <div className="w-full px-5">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-[25px] font-[600] text-[#000000ba] pb-2">
          My Addresses
        </h1>
        <div className={`${styles.button} rounded-md hover:bg-amber-500 hover:rounded-sm duration-200`}>
          <span className="text-[#fff]">
            Add New
          </span>
        </div>
      </div>

      <br />

      <div className="w-full bg-white h-[70px] rounded-[4px] flex items-center px-3 shadow justify-between pr-10 select-none">
        <div className="flex items-center">
          <h5 className="pl-5 font-[600]">
            Current
          </h5>
        </div>
        <div className="pl-8 flex items-center">
          <h6>
            13th Lane Vidya Sagar Park, Kolkata-700070
          </h6>
        </div>
        <div className="pl-8 flex items-center">
          <h6>
            (+91) 98765-43210
          </h6>
        </div>
        <div className="min-w-[10%] flex items-center justify-between pl-8">
          <AiOutlineDelete
            size={25}
            className="cursor-pointer hover:text-[red] duration-200"
          />
        </div>
      </div>
    </div>
  )
};

export default ProfileContent