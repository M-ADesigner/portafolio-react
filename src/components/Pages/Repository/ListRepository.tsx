import { useEffect, useState } from "react";
import Repository from "./repository";
import "./repository.css";
import LoaderFetch from "./Loader";

function ListRepository() {
  const token = "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";
  const [repositories, setRepositories] = useState([]);
  const [loader, setloader] = useState(true);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await fetch("https://api.github.com/user/repos", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const repositoriesData = await response.json();
          setloader(false);
          setRepositories(repositoriesData);
        } else {
          console.log("Error al obtener la lista de repositorios.");
        }
      } catch (error) {
        console.error("Error al realizar la solicitud:", error);
      }
    };

    fetchRepositories();
  }, [token]);

  return (
    <div className="container">
      {loader ? <LoaderFetch /> : ""}
      <div className="row">
        {repositories.map((repository, i) => (
          <Repository key={i} repository={repository} />
        ))}
      </div>
    </div>
  );
}

export default ListRepository;
