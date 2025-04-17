import logo from "./assets/logo-codante.svg";
import CardProduct from "./components/CardProduct";

function App() {
  return (
    <>
      <header className="container mx-auto text-center space-y-10.5">
        <img className="inline" src={logo} alt="" />
        <p className="text-white text-xl sm:text-[2.125rem]">
          <strong>Mini projeto</strong> | Card de produto com Tailwind
        </p>
      </header>
      <main className="container mx-auto sm:bg-[#F3F4F6] rounded-2xl py-11 mt-11">
        <CardProduct />
      </main>
    </>
  );
}

export default App;
