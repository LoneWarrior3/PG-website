import "./Menu.css";

const MenuCard = () => {
  const menu = [
    {
      day: "Sunday",
      breakfast: "Chapathi, Aloo Curry",
      lunch: "Chicken Dum Biriyani, Veg Biriyani, Mirchi ka Salan, Raitha",
      dinner: "Rice, Veg Curry, Rasam, Curd",
    },
    {
      day: "Monday",
      breakfast: "Idly, Chutney, Sambar",
      lunch: "Sambar, Rice, Fry, Curd",
      dinner: "Rice, Chapathi, Veg Curry, Rasam, Curd",
    },
    {
      day: "Tuesday",
      breakfast: "Dosa, Chutney",
      lunch: "Veg Pulav, Veg Kurma, Fry, Curd",
      dinner: "Rice, Chapathi, Veg Curry, Egg Curry, Sambar, Curd",
    },
    {
      day: "Wednesday",
      breakfast: "Poori, Aloo Curry",
      lunch: "Rice, Dal, Fry, Curd",
      dinner: "Chicken Curry, Bagara Rice, Mushroom/Paneer Curry, Raitha",
    },
    {
      day: "Thursday",
      breakfast: "Uthappam, Chutney",
      lunch: "Pulihora, Fry, Curd",
      dinner: "Rice, Chapathi, Veg Curry, Sambar, Curd",
    },
    {
      day: "Friday",
      breakfast: "Bonda, Chutney",
      lunch: "Rice, Dal, Fry, Curd",
      dinner: "Egg Fried Rice, Veg Fried Rice, Raitha",
    },
    {
      day: "Saturday",
      breakfast: "Idly, Chutney",
      lunch: "Rice, Dal, Fry, Papad, Curd",
      dinner: "Rice, Chapathi, Sambar, Gutti Vankaya, Sweet, Curd",
    },
  ];

  return (
    <div id="menu" className="my-5 py-5 ">
      <div className="menu-container">
        <h2 className="menu-title">📅 Weekly PG Menu 🍽️</h2>
        <table className="menu-table">
          <thead>
            <tr>
              <th>Day</th>
              <th>Breakfast</th>
              <th>Lunch</th>
              <th>Dinner</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, index) => (
              <tr key={index}>
                <td className="day-cell">{item.day}</td>
                <td>{item.breakfast}</td>
                <td>{item.lunch}</td>
                <td>{item.dinner}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MenuCard;
