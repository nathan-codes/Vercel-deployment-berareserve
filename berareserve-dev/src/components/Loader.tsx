import { Audio } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0  flex justify-center items-center bg-black/50 ">
      <Audio height="80" width="80" color="yellow" ariaLabel="loading" />
    </div>
  );
};

export default Loader;
