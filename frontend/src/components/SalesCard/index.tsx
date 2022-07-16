import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Sales } from "../../models/sales";
import { BASE_URL } from "../../utils/request";

import { NotificationButton } from "../NotificationButton";
import "./styles.css";

export function SalesCard() {
    const min = new Date(new Date().setDate(new Date().getDate() - 365));

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(new Date());

    const [sales, setSales] = useState<Sales[]>([]);

    useEffect(() => {
        axios.get(`${BASE_URL}/sales`)
            .then(response => {
                setSales(response.data.content);
            })
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
              {sales.map((sale) => {
                return (
                    <tr key={sale.id}>
                        <td className="active645">{sale.id}</td>
                        <td className="mobile">{new Date(sale.date).toLocaleDateString()}</td>
                        <td>{sale.sellerName}</td>
                        <td className="active645">{sale.visited}</td>
                        <td className="active645">{sale.deals}</td>
                        <td>{sale.amount.toFixed(2)}</td>
                        <td className="notification">
                            <NotificationButton />
                        </td>
                    </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
