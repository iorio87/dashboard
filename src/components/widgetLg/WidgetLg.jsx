import "./widgetLg.scss";

function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Ultimas Operaciones</h3>
      <table className="widgetLgTable">
        <tbody>
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Cliente</th>
          <th className="widgetLgTh">Fecha</th>
          <th className="widgetLgTh">Monto</th>
          <th className="widgetLgTh">Estado</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Roberto Garcia</span>
          </td>
          <td className="widgetLgDate">22 de Sep de 2022</td>
          <td className="widgetLgDate">$200</td>
          <td className="widgetLgDate">
            <Button type="Approved"></Button>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Juan Gomez</span>
          </td>
          <td className="widgetLgDate">24 de Sep de 2022</td>
          <td className="widgetLgDate">$300</td>
          <td className="widgetLgDate">
            <Button type="Declined"></Button>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Miguel Perez</span>
          </td>
          <td className="widgetLgDate">20 de Ago de 2022</td>
          <td className="widgetLgAmount">$400</td>
          <td className="widgetLgStatus">
            <Button type="Pending"></Button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  );
}

export default WidgetLg;
