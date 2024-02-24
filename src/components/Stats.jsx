import "../styles/Stats.css";
const Stats = () => {
  return (
    <div className="container flex flex-col mx-auto">
      <div className="w-full draggable">
        <div className="container flex flex-col items-center gap-16 mx-auto my-10">
          <div className="grid w-full grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-y-8">
            <div className="flex flex-col items-center">
              <h3 className="text-5xl font-extrabold leading-tight text-center text-accent-content">
                <span>3</span>+
              </h3>
              <p className="text-base font-medium leading-7 text-center text-dark-grey-600">
              Năm có mặt trên thị trường
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-5xl font-extrabold leading-tight text-center text-accent-content">
                <span>120</span>tr
              </h3>
              <p className="text-base font-medium leading-7 text-center text-accent-content">
              Tăng trưởng doanh thu hàng năm
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-5xl font-extrabold leading-tight text-center text-accent-content">
                <span id="countto3" data-decimal="1">300</span>+
              </h3>
              <p className="text-base font-medium leading-7 text-center text-accent-content">
                Đối tác
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-5xl font-extrabold leading-tight text-center text-accent-content">
                <span id="countto4">4000</span>+
              </h3>
              <p className="text-base font-medium leading-7 text-center text-dark-grey-600 text-accent-content">
              Khách truy cập trang web hàng ngày
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
