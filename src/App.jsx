import Profile from "./components/profile/profile";
import user from "./user.json";
import "./App.css";
import Statistics from "./components/statistics/statistics";
import data from "./data.json";
import FriendList from "./components/friendList/FriendList";
import friends from "./friends.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactions from "./transactions.json";

function App() {
  return (
    <>
      {}
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      {}
      <Statistics title="Upload stats" stats={data} />

      {}
      <FriendList friends={friends} />

      {}
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
