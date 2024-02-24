import Profile from "./components/Profile/Profile";
import userData from "./userData.json";
import friends from "./friends.json";
import transactions from "./transactions.json";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";

const App = () => {
  return (
    <>
      {/* <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} /> */}
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <Profile
              name={userData.username}
              tag={userData.tag}
              location={userData.location}
              image={userData.avatar}
              stats={userData.stats}
            />
          }
        />
        <Route path="FriendList" element={<FriendList friends={friends} />} />
        <Route
          path="TransactionHistory"
          element={<TransactionHistory items={transactions} />}
        />
      </Routes>
    </>
  );
};

export default App;
