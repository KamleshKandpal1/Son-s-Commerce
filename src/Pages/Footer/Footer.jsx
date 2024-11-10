import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="w-full h-auto bg-[#1f1f1f] py-2 text-center">
        <p className="text-[#817c7c] text-sm sm:text-base lg:text-lg">
          Copyright <FontAwesomeIcon icon={faCopyright} /> 2024 All Right
          Reserved{" "}
          <a
            href="http://github.com/KamleshKandpal1/Son-s-Commerce"
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-500 hover:text-[#454745]"
          >
            Kamlesh Kandpal
          </a>
        </p>
        {/* <p className="text-[#817c7c] text-xs sm:text-sm lg:text-base">
          Design Inspired by{" "}
          <Link to="https://yard-sale-store.vercel.app/#anchor-categories-menu">
            <span className="hover:text-violet-500">Yard Sale</span>
          </Link>
        </p> */}
      </div>
    </>
  );
}

export default Footer;
