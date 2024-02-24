import { Link } from "react-router-dom";
import "../styles/Hero.css";
const Hero = () => {
  return (
    <div className="hero bg-base-200 bg-blend-overlay">
    <div className="hero-content text-center">
      <div className="max-w-xl">
        <h1 className="text-6xl font-bold max-md:text-4xl text-accent-content">Sự lựa chọn tốt nhất!</h1>
        <p className="py-6 text-2xl max-md:text-lg text-accent-content">
          Các sản phẩm của chúng tôi phong phú đa dạng về mẫu mã và đặc biệt mọi người 
          khi dùng sẽ yên tâm về chất lượng.
        </p>
        <Link to="/shop" className="btn btn-wide bg-blue-600 hover:bg-blue-500 text-white">Tìm kiếm</Link>
      </div>
    </div>
  </div>
  )
}

export default Hero