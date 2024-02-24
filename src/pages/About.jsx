import React from "react";
import { SectionTitle } from "../components";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <SectionTitle title="Về chúng tôi" path="Trang chủ | Về chúng tôi" />
      <div className="about-content text-center max-w-2xl mx-auto mt-5">
      <h2 className="text-6xl text-center mb-10 max-sm:text-3xl text-accent-content">Chúng tôi yêu các bạn!</h2>
      <p className="text-lg text-center max-sm:text-sm max-sm:px-2 text-accent-content">
      Công ty Trách nhiệm hữu hạn Hương Sao thành lập năm 2020 nhằm đáp ứng nhu cầu chăm sóc sức khỏe của cộng đồng . Lấy tiêu chí sức khỏe của khách hàng đặt lên hàng đầu, các dòng sản phẩm của Hương Sao được bào chế hoàn toàn từ thảo dược thiên nhiên an toàn, lành tính giúp người bệnh khỏe mạnh và hạnh phúc hơn.
Mang khao khát “chắp cánh cho thương hiệu Việt” chiếm lĩnh thị trường, Hương Sao luôn nỗ lực nghiên cứu, sản xuất, cho ra đời  các dòng sản phẩm chăm sóc sức khỏe chất lượng cao đến con người
      </p>
      <Link to="/contact" className="btn btn-wide bg-blue-600 hover:bg-blue-500 text-white mt-5">Liên hệ chúng tôi</Link>
      </div>
    </div>
  );
};

export default About;
