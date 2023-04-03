import {RiArrowUpSLine} from 'react-icons/ri'


const PayDtail = () => {
  return (
    <div className=" relative flex  items-center w-full px-3 justify-between py-4 bg-white border-t shadow-inner ">
      <div className="flex gap-y-2 flex-col">
        <div className="flex gap-x-2 items-center">
          <span className="font-[Iransans] font-bold text-md">
            مبلغ قابل پرداخت:280,000
          </span>
          <span className="font-[Iransans] font-bold text-md text-gray-500">
            تومان
          </span>
        </div>
        <span className="font-[Iransans] font-bold text-sm text-gray-500">
          موجودی ناکافی
        </span>
      </div>
      <div>
        <button className="bg-primary text-white text-xs font-bold rounded-3xl px-6 py-3">پرداخت</button>
      </div>
      <div className='rounded-full z-10 bg-white p-3 text-primary absolute -top-5 left-1/2  shadow-inner '>
        <RiArrowUpSLine/>
      </div>
    </div>
  );
};

export default PayDtail;
