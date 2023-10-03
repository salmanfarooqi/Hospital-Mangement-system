<table className="uk ue">
  {/* <!-- Table header --> */}
  <thead className="gh gv gm text-slate-500 pi cl co border-slate-200">
    <tr>
      <th className="vu ww wq vx lg">
        <div className="gv gn">Order</div>
      </th>
      <th className="vu ww wq vx lg">
        <div className="gv gn">Email</div>
      </th>
      <th className="vu ww wq vx lg">
        <div className="gv gn">Location</div>
      </th>
      <th className="vu ww wq vx lg">
        <div className="gv">Orders</div>
      </th>
      <th className="vu ww wq vx lg">
        <div className="gv gn">Last order</div>
      </th>
      <th className="vu ww wq vx lg">
        <div className="gv gn">Total spent</div>
      </th>
      <th className="vu ww wq vx lg">
        <div className="gv">Refunds</div>
      </th>
      <th className="vu ww wq vx lg">
        <span className="d">Menu</span>
      </th>
    </tr>
  </thead>
  {/* <!-- Table body --> */}
  <tbody className="text-sm ln li">
    {/* <!-- Row --> */}
    <tr>
      <td className="vu ww wq vx lg">
        <div className="flex items-center">
          <div className="of sl uw mr-2 _j">
            <img
              className="rounded-full"
              src="../images/patients/michael.png"
              width="40"
              height="40"
              alt="User 01"
            ></img>
          </div>
          <div className="gp text-slate-800">Patricia Semklo</div>
        </div>
      </td>
      <td className="vu ww wq vx lg">
        <div className="gn">patricia.semklo@app.com</div>
      </td>
      <td className="vu ww wq vx lg">
        <div className="gn">🇬🇧 London, UK</div>
      </td>
      <td className="vu ww wq vx lg">
        <div className="gr">24</div>
      </td>
      <td className="vu ww wq vx lg">
        <div className="gn gp yk">#123567</div>
      </td>
      <td className="vu ww wq vx lg">
        <div className="gn gp yo">$2,890.66</div>
      </td>
      <td className="vu ww wq vx lg">
        <div className="gr">-</div>
      </td>
      <td className="vu ww wq vx lg ut">
        <button className="be xg rounded-full">
          <span className="d">Menu</span>
          <svg className="ok sk da" viewBox="0 0 32 32">
            <circle cx="16" cy="16" r="2"></circle>
            <circle cx="10" cy="16" r="2"></circle>
            <circle cx="22" cy="16" r="2"></circle>
          </svg>
        </button>
      </td>
    </tr>
  </tbody>
</table>;
