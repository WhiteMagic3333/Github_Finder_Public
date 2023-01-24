import UserResults from "../components/Users/UserResults";
import UserSearch from "../components/Users/UserSearch";

function Home() {
  return (
    <>
      {/* search component */}
      <UserSearch />
      <UserResults />
    </>
  );
}

export default Home;
