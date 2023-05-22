import { useEffect, useState } from "react";
import Repository from "./Repository";
import "./repository.css";
import ErrorHttp from "./ErrorHttp";
import RotatingLines from "../../UI/Atoms/LoaderRotating";

function ListRepository() {
  const token = "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";
  const [repositories, setRepositories] = useState([]);
  const [loader, setloader] = useState(true);
  const [shoError, setshowError] = useState(false)


  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await fetch("https://api.github.com/user/repos", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        // console.log(response);

        if (response.ok) {
          const repositoriesData = await response.json();
          console.log(repositoriesData);
          setloader(false);
          setRepositories(repositoriesData);
        } else if(response.status === 401) {
          console.log("No existen permisos.");
          setloader(false);
          setshowError(true)
        }else{
          console.log("Hubo un problema.");
        }
      } catch (error) {
        console.error("Error al realizar la solicitud:", error);
      }
    };

    fetchRepositories();
  }, [token]);



  return (
    <div className="container">
      {shoError? <ErrorHttp/>:''}
      {loader ? <RotatingLines /> : ""}
      <div className="row">
        {repositories.map((repository, i) => (
          <Repository key={i} repository={repository} />
        ))}
      </div>
    </div>
  );
}

export default ListRepository;
