import React from "react";
import { SectionTitle, WishItem } from "../components";
import { useDispatch, useSelector } from "react-redux";


const Wishlist = () => {
    const { wishItems } = useSelector((state) => state.wishlist); 
    const dispatch = useDispatch();
  return (
    <>
      <SectionTitle title="Danh sách giỏ hàng" path="Trang chủ | Danh sách giỏ hàng" />
      <div className="max-w-7xl mx-auto">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th className="text-accent-content">Tên</th>
                <th className="text-accent-content">Kich cỡ</th>
                <th className="text-accent-content">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              { wishItems.map((item, index) => (
                <WishItem item={item} key={index} counter={index} />
              )) }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
