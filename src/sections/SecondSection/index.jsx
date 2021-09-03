import "./secondSection.css";

export const SecondSection = () => {
  return (
    <section>
      <h2 id="history-table" className="main-table-title">
        Últimos Pedidos
      </h2>
      <section className="tables-container-slider">
        <section className="main-tables-container">
          <div className="main-historical-table">
            <div className="historical-table-container">
              <table>
                <tr>
                  <td className="table__top-left">19/05/2021</td>
                  <td className="table__top-right table__right">$118.200</td>
                </tr>
                <tr>
                  <td>05/03/2021</td>
                  <td className=" table__right">$139.400</td>
                </tr>
                <tr>
                  <td>28/02/2021</td>
                  <td className=" table__right">$88.647</td>
                </tr>
                <tr>
                  <td>16/02/2021</td>
                  <td className=" table__right">$27.670</td>
                </tr>
                <tr>
                  <td className="table__bottom-left">10/02/2021</td>
                  <td className="table__bottom-right table__right">$50.490</td>
                </tr>
              </table>
            </div>
          </div>
        </section>
        <section className="main-tables-container">
          <div className="main-historical-table">
            <div className="historical-table-container">
              <table>
                <tr>
                  <td className="table__top-left">27/01/2021</td>
                  <td className="table__top-right table__right">$15.300</td>
                </tr>
                <tr>
                  <td>15/01/2021</td>
                  <td className=" table__right">$45.800</td>
                </tr>
                <tr>
                  <td>09/01/2021</td>
                  <td className=" table__right">$42.200</td>
                </tr>
                <tr>
                  <td>27/12/2020</td>
                  <td className=" table__right">$65.330</td>
                </tr>
                <tr>
                  <td className="table__bottom-left">21/12/2020</td>
                  <td className="table__bottom-right table__right">$29.300</td>
                </tr>
              </table>
            </div>
          </div>
        </section>
        <section className="main-tables-container">
          <div className="main-historical-table">
            <div className="historical-table-container">
              <table>
                <tr>
                  <td className="table__top-left">15/12/2020</td>
                  <td className="table__top-right table__right">$17.800</td>
                </tr>
                <tr>
                  <td>7/12/2020</td>
                  <td className=" table__right">$12.600</td>
                </tr>
                <tr>
                  <td>13/11/2020</td>
                  <td className=" table__right">$64.200</td>
                </tr>
                <tr>
                  <td>7/11/2020</td>
                  <td className=" table__right">$27.500</td>
                </tr>
                <tr>
                  <td className="table__bottom-left">28/10/2020</td>
                  <td className="table__bottom-right table__right">$34.200</td>
                </tr>
              </table>
            </div>
          </div>
        </section>
      </section>
      <div className="historical-table-date">
        <p>
          <b>
            <b>Actualizado:</b>
          </b>{" "}
          10 junio a las 22:40
        </p>
      </div>
    </section>
  );
};
