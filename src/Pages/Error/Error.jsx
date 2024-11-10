import Errors from "../../assets/Error_404.jpg";
function Error() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F6F4EB]">
      <div className="text-center sm:w-[80%]">
        <h1 className="text-4xl md:text-5xl font-bold text-red-600">Error</h1>
        <img
          src={Errors}
          alt=""
          className="sm:w-[35%] w-[80%] mx-auto mix-blend-darken"
        />
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mt-4">
          Something went wrong. Please try again later.
        </p>
      </div>
    </div>
  );
}

export default Error;
