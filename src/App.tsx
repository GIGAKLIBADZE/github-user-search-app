import { useEffect, useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import User from "./components/User";

export interface Information {
  avatar_url: string | null;
  bio: string | null;
  blog: string | null;
  company: null;
  created_at: string | null;
  email: string | null;
  events_url: string | null;
  followers: number | null;
  followers_url: string | null;
  following: number | null;
  following_url: string | null;
  gists_url: string | null;
  gravatar_id: string | null;
  hireable: string | null;
  html_url: string | null;
  id: number | null;
  location: string | null;
  login: string | null;
  name: string | null;
  node_id: string | null;
  organizations_url: string | null;
  public_gists: number | null;
  public_repos: number | null;
  received_events_url: string | null;
  repos_url: string | null;
  site_admin: boolean;
  starred_url: string | null;
  subscriptions_url: string | null;
  twitter_username: null;
  type: string | null;
  updated_at: string | null;
  url: string | null;
  user_view_type: string | null;
}

function App() {
  const [theme, setTheme] = useState(true);
  const [user, setUser] = useState<string>("octocat");
  const [data, setData] = useState<Information | null | undefined>(null);
  const [error, setError] = useState(false);

  const githubData = async (userName: string | Information) => {
    if (!userName) return;

    try {
      const response = await fetch(`https://api.github.com/users/${userName}`);

      if (!response.ok) {
        throw new Error("No results!");
      }
      const person = await response.json();
      setData(person);
      setError(false);
    } catch (error) {
      console.log("Something went wrong.");
      // setData(undefined);
      setError(true);
    }
  };

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setUser(inputValue);
  };

  useEffect(() => {
    if (typeof user === "string") {
      githubData(user);
    }
  }, []);

  return (
    <div className={theme ? "bg-[#f6f8ff]" : "bg-[#141d2f]"}>
      <Header theme={theme} setTheme={setTheme} />
      <div className="flex flex-col items-center">
        <Search
          theme={theme}
          user={user}
          handleUserInput={handleUserInput}
          githubData={githubData}
          data={data}
          error={error}
        />
        <User theme={theme} user={data} />
      </div>
    </div>
  );
}

export default App;
