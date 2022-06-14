import "../styles/widget.css";
import {
  PersonOutlined,
  ShoppingCartOutlined,
  CurrencyExchangeOutlined,
  CategoryOutlined,
  KeyboardArrowUpOutlined,
} from "@mui/icons-material";

function Widget() {
  return (
    <div className="widget-body">
      <div className="widget">
        <div className="widget-hader">
          <h5>USERS</h5>
          <div className="persent">
            <KeyboardArrowUpOutlined></KeyboardArrowUpOutlined>
            <p>33</p>
            <p>%</p>
          </div>
        </div>
        <div className="widget-main">
          <h4>400</h4>
        </div>
        <div className="widget-footer">
          <a>See all users</a>
          <span
            style={{
              background: "#c7f9cc",
            }}
          >
            <PersonOutlined
              className="per-out"
            ></PersonOutlined>
          </span>
        </div>
      </div>

      <div className="widget">
        <div className="widget-hader">
          <h5>PRODUCTS</h5>
          <div className="persent">
            <KeyboardArrowUpOutlined></KeyboardArrowUpOutlined>
            <p>0</p>
            <p>%</p>
          </div>
        </div>
        <div className="widget-main">
          <h4>100</h4>
        </div>
        <div className="widget-footer">
          <a>View all product</a>
          <span
            style={{
              background: "#e0aaff",
            }}
          >
            <CategoryOutlined
              className='cat-out'
            ></CategoryOutlined>
          </span>
        </div>
      </div>

      <div className="widget">
        <div className="widget-hader">
          <h5>ORDERS</h5>
          <div className="persent">
            <KeyboardArrowUpOutlined></KeyboardArrowUpOutlined>
            <p>0</p>
            <p>%</p>
          </div>
        </div>
        <div className="widget-main">
          <h4>100</h4>
        </div>
        <div className="widget-footer">
          <a>View all orders</a>
          <span
            style={{
              background: "#fcefb4",
            }}
          >
            <ShoppingCartOutlined
              className="shop-card-out"
            ></ShoppingCartOutlined>
          </span>
        </div>
      </div>

      <div className="widget">
        <div className="widget-hader">
          <h5>EARNINGS</h5>
          <div className="persent">
            <KeyboardArrowUpOutlined></KeyboardArrowUpOutlined>
            <p>34</p>
            <p>%</p>
          </div>
        </div>
        <div className="widget-main">
          <h4>$ 5600</h4>
        </div>
        <div className="widget-footer">
          <a>Veiw net earnings</a>
          <span
            style={{
              background: "#f4978e",
            }}
          >
            <CurrencyExchangeOutlined
              className="curr-ex-out"
            ></CurrencyExchangeOutlined>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Widget;
