import { CustomFilter, Home, SearchBar } from "./components";

export default function App() {
  return (
    <main className="overflow-hidden">
      <Home />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter
            // title="fuel" options
            />
            <CustomFilter
            // title="year" options
            />
          </div>
        </div>
      </div>
    </main>
  );
}
