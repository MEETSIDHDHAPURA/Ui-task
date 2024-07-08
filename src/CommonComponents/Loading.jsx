import { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import Notfound from "../assets/Notfound.gif";

const Loading = ({ filteredData }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [filteredData]);

  return (
    <>
      {isLoading ? (
        <div className="loading">
          <ReactLoading
            type="spinningBubbles"
            color="#007bff"
            height={50}
            width={50}
          />
        </div>
      ) : (
        <div>
          {filteredData.length > 0 ? null : <img alt="" src={Notfound} className="size-28"></img>}
        </div>
      )}
    </>
  );
};

export default Loading;
