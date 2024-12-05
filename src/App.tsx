import { useEffect, useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import User from "./components/User";

function App() {
  const [theme, setTheme] = useState(true);
  const [user, setUser] = useState("octocat");

  const githubData = async (userName: string | null) => {
    if (!userName) return;

    try {
      const response = await fetch(`https://api.github.com/users/${userName}`);

      if (!response.ok) {
        throw new Error("No results!");
      }
      const person = await response.json();
      setUser(person);
      return person;
    } catch (error) {
      console.log("Something went wrong.");
    }
  };

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setUser(inputValue);
  };

  useEffect(() => {
    githubData(user);
  }, []);

  console.log(handleUserInput);
  console.log(user);

  return (
    <div className={`${theme ? "bg-[#f6f8ff]" : "bg-[#141d2f]"}`}>
      <Header theme={theme} setTheme={setTheme} />
      <div className="flex flex-col items-center">
        <Search
          theme={theme}
          user={user}
          setUser={setUser}
          handleUserInput={handleUserInput}
          githubData={githubData}
        />
        <User theme={theme} user={user} />
      </div>
    </div>
  );
}

export default App;
