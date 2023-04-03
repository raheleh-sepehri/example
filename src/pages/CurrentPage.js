import Layout from "../Layout/Layout";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiRun } from "react-icons/bi";
import { TfiCreditCard } from "react-icons/tfi";
import { TbDiscount2 } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import ProgressBar from "@ramonak/react-progress-bar";
import { useEffect, useState } from "react";
const CurrentPage = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => prevProgress + 10);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <div className=" w-full px-3 rounded-lg border border-[#cadada]  shadow-inner shadow-[#cadada] pb-8 mt-5">
        {/* profile */}
        <div className="flex border-b items-center justify-center py-4 ">
          <div className="rounded-full overflow-hidden w-30 h-20 ml-3">
            <img
              className="rounded-full object-cover "
              alt="profile"
              src="/images/profile.jpg"
            />
          </div>
          <div className="flex flex-col w-full justify-center gap-y-6">
            <h2 className="font-black font-[IransanssBold] text-md">
              محمد مهدی مهدی پورسمند
            </h2>
            <div className="flex gap-x-3 justify-between  w-full">
              <button className="flex font-bold text-md border-2 rounded-3xl text-primary border-primary px-4 py-1 items-center justify-center gap-x-2">
                <BsFillTelephoneFill />
                <span>تماس با متخصص</span>
              </button>
              <button className="text-primary text-md font-black">
                لغو سفارش
              </button>
            </div>
          </div>
        </div>

        {/* dtail */}
        <div className="flex justify-between border-y-2 py-3">
          <span className="font-[Iransans] font-bold text-gray-500 text-md">
            تعمیر اتو
          </span>
          <button className="font-[Iransans] font-bold text-primary text-md">
            جزییات سفارش
          </button>
        </div>

        {/* waitTime */}
        <div className=" py-4 flex flex-col gap-y-3">
          <div className="flex gap-x-4 items-end ">
            <span style={{ transform: "scaleX(-1)" }}>
              <BiRun className="w-10 h-10" />
            </span>
            <span className="font-[Iransans] font-bold text-md">
              در انتظار رسیدن متخصص
            </span>
          </div>
          <ProgressBar
            completed={20}
            height="8px"
            borderRadius="10px"
            bgColor="#009dac"
            isLabelVisible="false"
            dir="rtl"
            labelClassName="hidden"
          />
        </div>

        {/* price */}

        <div className="mt-4 py-4 flex justify-between">
          <div className="flex gap-x-2 items-center">
            <span>
              <TfiCreditCard className="w-8 h-8" />
            </span>
            <span className="font-[Iransans] font-bold text-md">
              هزینه کارشناسی:70,000
            </span>
            <span className="font-[Iransans] font-bold text-md text-gray-500">
              تومان
            </span>
          </div>
          <div className="flex items-center gap-x-1 text-primary">
            <span className="font-[Iransans] font-bold text-md text-primary">
              جزئیات
            </span>
            <span>
              <IoIosArrowDown />
            </span>
          </div>
        </div>

        {/* desc */}

        <div className="mt-10">
          <p className="text-red-500 leading-8 text-sm	">
            هزینه نهایی بعد از حضور متخصص مشخص می شود درصورت توافق برای انجام
            .کار،هزینه عیب بابی رایگان خواهد بود
          </p>
        </div>

        {/* discount */}
        <div className="mt-10 flex gap-x-2 items-center">
          <span>
            <TbDiscount2 className="w-8 h-8 text-primary" />
          </span>
          <span className="font-[Iransans] font-bold text-md text-primary">
            کد تخفیف
          </span>
        </div>
      </div>
    </Layout>
  );
};

export default CurrentPage;
