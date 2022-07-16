import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { NotificationButton } from "../NotificationButton";
import "./styles.css";

export function SalesCard() {
    const min = new Date(new Date().setDate(new Date().getDate() - 365));

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(new Date());

    useEffect(() => {
        axios.get("http://localhost:8080/sales")
            .then(response => console.log(response.data.content))
    }, [])


  return (
    <>
      <div className="card">
        <h2>Vendas</h2>
        <div className="input-form">
          <div>
            <DatePicker
              selected={minDate}
              onChange={(date: Date) => setMinDate(date)}
              className="dsmeta-form-control"
              dateFormat="dd/MM/yyyy"
            />
          </div>
          <div>
            <DatePicker
              selected={maxDate}
              onChange={(date: Date) => setMaxDate(date)}
              className="dsmeta-form-control"
              dateFormat="dd/MM/yyyy"
            />
          </div>
        </div>
        <div>
          <table className="sales-table">
            <thead>
              <tr>
                <th className="active645">ID</th>
                <th className="mobile">Data</th>
                <th>Vendedor</th>
                <th className="active645">Visitas</th>
                <th className="active645">Vendas</th>
                <th>total</th>
                <th>Notificar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="active645">#001</td>
                <td className="mobile">20/02/2022</td>
                <td>Eduardo Marra</td>
                <td className="active645">20</td>
                <td className="active645">15</td>
                <td>563.543,52</td>
                <td className="notification">
                  <NotificationButton />
                </td>
              </tr>
              <tr>
                <td className="active645">#001</td>
                <td className="mobile">20/02/2022</td>
                <td>Eduardo Marra</td>
                <td className="active645">20</td>
                <td className="active645">15</td>
                <td>563.543,52</td>
                <td className="notification">
                  <NotificationButton />
                </td>
              </tr>
              <tr>
                <td className="active645">#001</td>
                <td className="mobile">20/02/2022</td>
                <td>Eduardo Marra</td>
                <td className="active645">20</td>
                <td className="active645">15</td>
                <td>563.543,52</td>
                <td className="notification">
                  <NotificationButton />
                </td>
              </tr>
              <tr>
                <td className="active645">#001</td>
                <td className="mobile">20/02/2022</td>
                <td>Eduardo Marra</td>
                <td className="active645">20</td>
                <td className="active645">15</td>
                <td>563.543,52</td>
                <td className="notification">
                  <NotificationButton />
                </td>
              </tr>
              <tr>
                <td className="active645">#001</td>
                <td className="mobile">20/02/2022</td>
                <td>Eduardo Marra</td>
                <td className="active645">20</td>
                <td className="active645">15</td>
                <td>563.543,52</td>
                <td className="notification">
                  <NotificationButton />
                </td>
              </tr>
              <tr>
                <td className="active645">#001</td>
                <td className="mobile">20/02/2022</td>
                <td>Eduardo Marra</td>
                <td className="active645">20</td>
                <td className="active645">15</td>
                <td>563.543,52</td>
                <td className="notification">
                  <NotificationButton />
                </td>
              </tr>
              <tr>
                <td className="active645">#001</td>
                <td className="mobile">20/02/2022</td>
                <td>Eduardo Marra</td>
                <td className="active645">20</td>
                <td className="active645">15</td>
                <td>563.543,52</td>
                <td className="notification">
                  <NotificationButton />
                </td>
              </tr>
              <tr>
                <td className="active645">#001</td>
                <td className="mobile">20/02/2022</td>
                <td>Eduardo Marra</td>
                <td className="active645">20</td>
                <td className="active645">15</td>
                <td>563.543,52</td>
                <td className="notification">
                  <NotificationButton />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
