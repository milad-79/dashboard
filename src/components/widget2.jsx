import "../styles/widget2.css";
import Progess from "./progessbar";
import { 
     MoreVert,
     KeyboardArrowDown,
     KeyboardArrowUp
} from "@mui/icons-material";
import ChartDashbord from "./chart";

function Widget2() {
  return (
    <div className="widget2">
      <div className="left">
        <div className="wid2-left-haed">
          <h5>Total Revenue</h5>
          <MoreVert
            style={{
              color: "var(--text)",
              cursor: "pointer",
            }}
          ></MoreVert>
        </div>
        <div className="progess">
          <Progess />
        </div>
        <div className="total">
          <h5>Total sales made today</h5>
          <h3>$420</h3>
          <p>
            Pevious transactions processing.Last payments may note be included
          </p>
        </div>
        <div className="target">
             <div className="items">
                  <h5>Target</h5>
                  <div className="icons-progess red">
                    <KeyboardArrowDown fontSize="small"/>
                    <div>$12.4K</div>
                  </div>
             </div>
             <div className="items">
                  <h5>Last Week</h5>
                  <div className="icons-progess green">
                    <KeyboardArrowUp fontSize="small"/>
                    <div>$12.4K</div>
                  </div>
             </div>
             <div className="items">
                  <h5>Last Month</h5>
                  <div className="icons-progess green">
                    <KeyboardArrowUp fontSize="small"/>
                    <div>$12.4K</div>
                  </div>
             </div>
        </div>
      </div>
      <div className="right">
          <div className="wid2-right-haed">
               <h5>Last Four Month</h5>
               <ChartDashbord/>
          </div>
      </div>
    </div>
  );
}

export default Widget2;
