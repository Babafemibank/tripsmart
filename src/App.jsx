import Layout   from "./components/layout/Layout";
import Overview from "./components/pages/Overview";
import Trends from "./components/pages/Trends"
import Analytics from "./components/pages/Analytics"
function App() {
  return (
  
<Layout>
  {(activePage) => {
    if (activePage === "overview") return <Overview />;
    if (activePage === "analytics") return <Analytics />;
    if (activePage === "trends") return <Trends />;
  }}
</Layout>
  );
}

export default App;
