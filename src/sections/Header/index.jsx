import "./header.css";
import { UserCartHeader } from "../../components/UserCartHeader";
import { AmountHeader } from "../../components/AmountHeader";

export const Header = () => {
  return (
    <div className="header">
      <section className="header-navbar-container">
        <UserCartHeader />
      </section>
      <AmountHeader />
    </div>
  );
};
