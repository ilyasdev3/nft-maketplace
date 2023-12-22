import CustomRoute from "./config/routes.config";
import routes from "./routes/routes";

const App = () => {
  return (
    <section>
      <CustomRoute routes={routes} />
    </section>
  );
};

export default App;
