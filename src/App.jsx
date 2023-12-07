import { useState } from "react";
import "./App.css";
import PostObject from "./components/PostObject";
import SideBar from "./components/SideBar";
import SidebarItem from "./components/SidebarItem";
import WritePost from "./components/WritePost";
import MyGroups from "./components/MyGroups";
import {
  LayoutDashboard,
  UserCircle,
  Boxes,
  Package,
  Receipt,
  Settings,
  LifeBuoy,
  Home,
  Contact,
  Bookmark,
} from "lucide-react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-56 grid grid-flow-col auto-cols-auto gap-4 content-start">
      <div className="sticky top-0">

      <SideBar>
        {/* <SidebarItem icon={<Home size={20} />} text="Users" /> */}
        <SidebarItem icon={<LayoutDashboard size={20} />} text="Feed" active />
        <SidebarItem icon={<Contact size={20} />} text="Friends" alert />
        <SidebarItem icon={<Bookmark size={20} />} text="Bookmarks" />
        <SidebarItem icon={<Boxes size={20} />} text="Groups" />
        <hr className="my-3" />
        <SidebarItem icon={<Settings size={20} />} text="Settings" />
        <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
      </SideBar>
      </div>
      <div className="flex flex-col mt-4">
        <div className="">
        <WritePost />
        </div>
        
        <div className="h-56 grid grid-cols-1 gap-2 mr-2 ">
          <PostObject
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
            objurl={"https://ui-avatars.com/api/?background=F89880&color=fff&name=Thomas+James"}
            objname={"Thomas James"}
            likes={"5.7k"}
          />
          <PostObject
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus in hendrerit gravida rutrum. Vitae purus faucibus ornare suspendisse sed nisi. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio."
            }
            objurl={"https://ui-avatars.com/api/?background=15C466&color=fff&name=Eli+Manson"}
            objname={"Eli Manson"}
            likes={"2.3k"}
          />
          <PostObject
            text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
            likes={"893"}
          />
          <PostObject
            text={
              "Lorem ipsum dolor sit amet lol Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            }
            likes={"234"}
          />
        </div>
      </div>
      <div className="w-96">
            <MyGroups />
      </div>
    </div>
  );
}

export default App;
