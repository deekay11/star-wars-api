import "./App.css";
import FetchData from "./Components/FetchData";
import ResultDisplay from "./Components/ResultDisplay";
import { StarWarsCharacter } from "./Components/StarWarsCharacter";
import { ApiBase } from "./Components/ApiBase";
function App() {
  const { data, error, isFetching, status } = FetchData<{ name: string }>(
    `${ApiBase}/people/1/`
  );

  return (
    <div className="App">
      <h1>
        {isFetching ? (
          "Fetching..."
        ) : (
          <>
            <ResultDisplay data={data} status={status} error={error as Error | undefined} />

            {data && <StarWarsCharacter name={data.name} />}
          </>
        )}
      </h1>
    </div>
  );
}

export default App;
