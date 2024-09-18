import MessageBox from "@/components/MessageBox";
import MessageList from "@/components/MessageList";
import Navbar from "@/components/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <MessageList />
      <MessageBox />
    </div>
  );
};

export default Main;
