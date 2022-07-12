import { NotificationButton } from "../NotificationButton";
import "./styles.css";

export function SalesCard() {
    return (
        <>
            <div className="card">
                    <h2>Vendas</h2>
                    <div className="input-form">
                        <div>
                            <input type="text" name="" id="" placeholder="01/01/2022"/>
                        </div>
                        <div>
                            <input type="text" name="" id="" placeholder="31/01/2022"/>
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
    )
}