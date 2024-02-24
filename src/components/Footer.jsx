import React from "react";
import { Link } from "react-router-dom";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareYoutube } from "react-icons/fa6";
import { useSelector } from "react-redux";

const Footer = () => {
  const loginState = useSelector((state) => state.auth.isLoggedIn);
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded mt-10 max-md:px-0">
      <nav className="grid grid-flow-col max-sm:grid-flow-row gap-4">
        <Link to="/" className="link link-hover text-2xl max-md:text-xl text-accent-content" onClick={() => window.scrollTo(0, 0)}>
          Trang chủ
        </Link>
        <Link to="/shop" className="link link-hover text-2xl max-md:text-xl text-accent-content" onClick={() => window.scrollTo(0, 0)}>
          Cửa hàng
        </Link>
        <Link to="/about" className="link link-hover text-2xl max-md:text-xl text-accent-content" onClick={() => window.scrollTo(0, 0)}>
          Về chúng tôi
        </Link>
        <Link to="/contact" className="link link-hover text-2xl max-md:text-xl text-accent-content" onClick={() => window.scrollTo(0, 0)}>
          Liên hệ
        </Link>
        {!loginState && (
          <>
            <Link
              to="/login"
              className="link link-hover text-2xl max-md:text-xl text-accent-content"
              onClick={() => window.scrollTo(0, 0)}
            >
              Đăng nhập
            </Link>
            <Link
              to="/register"
              className="link link-hover text-2xl max-md:text-xl text-accent-content"
              onClick={() => window.scrollTo(0, 0)}
            >
              Đăng kí
            </Link>
          </>
        )}
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <FaSquareXTwitter className="text-6xl max-sm:text-4xl text-accent-content" />
          <FaSquareFacebook className="text-6xl max-sm:text-4xl text-accent-content" />
          <FaSquareInstagram className="text-6xl max-sm:text-4xl text-accent-content" />
          <FaSquareYoutube className="text-6xl max-sm:text-4xl text-accent-content" />
        </div>
      </nav>
      <aside>
        <p className="text-2xl max-sm:text-sm text-accent-content">
          Bản quyền © 2023 - Tất cả các quyền thuộc về Tinh dầu Hương Sao
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
