import Container from "../Container";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b bg-slate-900">
      <Container designs="flex justify-between p-5">
        <div className="flex gap-10">
          <h1 className="font-bold text-white text-xl">HotelSs</h1>

          <nav className="flex gap-5 items-center text-white">
            <Link className=" hover:text-orange-500" to="/">
              Oteller
            </Link>
            <Link className="max-md:hidden  hover:text-orange-500" to="/">
              Popüler
            </Link>
            <Link className=" hover:text-orange-500" to="/admin/create">
              Oluştur
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <button className="border bg-white  rounded-full hover:bg-slate-200 py-1 px-5 max-md:hidden">
            Kayıt Ol
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full py-1 px-5">
            Giriş Yap
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
