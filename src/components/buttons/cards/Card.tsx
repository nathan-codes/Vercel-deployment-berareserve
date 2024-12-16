interface CardProps {
  title: string;
  value: string;
  conversion: string | null;
}

const Card = ({ title, value, conversion }: CardProps) => {
  return (
    <div className="w-[220px] h-[220px] lg:w-[180px] lg:h-[180.21px]  bg-[url('./assets/images/cardbgnew.svg')]  bg-no-repeat bg-contain  flex flex-col items-center justify-center">
      <div className=" flex-col justify-center items-center gap-1 inline-flex max-w-[140px] text-center  ">
        <h3 className="text-white text-sm font-normal  leading-tight">
          {title}
        </h3>
        <p className="text-center text-[#F1F5F9] text-base font-bold   ">
          {value} {conversion}
        </p>
      </div>
    </div>
  );
};

export default Card;
