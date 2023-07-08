import { FiAirplay } from "react-icons/fi";
import { AiFillBulb } from "react-icons/ai";
import { CiAlarmOn } from "react-icons/ci";
import axios from "axios";
import { useState, useEffect } from "react";

function Content() {
  const [stateData, setStateData] = useState([]);
  const [dataCondition, setDataCondition] = useState(0);
  const [dataRelay1, setDataRelay1] = useState(0);
  const [dataRelay2, setDataRelay2] = useState(0);
  const [dataRelay3, setDataRelay3] = useState(0);
  const [dataStartTime, setDataStartTime] = useState(0);
  const [dataEndTime, setDataEndTime] = useState(0);

  const handleSubmit = async (event: React.FormEvent) => {
    console.log("Data Condition : " + dataCondition);
    console.log("Data dataRelay1 : " + dataRelay1);
    console.log("Data dataRelay2 : " + dataRelay2);
    console.log("Data dataRelay3 : " + dataRelay3);
    console.log("Data dataStartTime : " + dataStartTime);
    console.log("Data dataEndTime : " + dataEndTime);

    const post = {
      condition: dataCondition,
      relay1: dataRelay1,
      relay2: dataRelay2,
      relay3: dataRelay3,
      startTime: dataStartTime,
      endTime: dataEndTime,
    };
    try {
      const res = await axios.post(
        "https://api-iot-zeta.vercel.app/chicken/post",
        post
      );
      console.log(res.data);
    } catch (e) {
      alert(e);
    }
  };

  const getUsers = async () => {
    try {
      let response = await axios.get(
        "https://api-iot-zeta.vercel.app/chicken/getLatest"
      );
      console.log(response.data);
      setStateData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div className="container background_content">
        <h1 className="heading_website">Website Monitoring Kandang Ayam</h1>
        <div className="row condition_status">
          <h3 className="mb-5">Current State</h3>
          {stateData.map((data, index) => {
            return (
              <div key={index}>
                <div className="row p-4">
                  <div className="col-md-3">
                    <h4>
                      <FiAirplay /> State : {data["condition"]}
                    </h4>
                  </div>
                  <div className="col-md-3">
                    <h4>
                      <AiFillBulb />
                      Bulb 1 : {data["relay1"]}
                    </h4>
                  </div>
                  <div className="col-md-3">
                    <h4>
                      <AiFillBulb />
                      Bulp 2 : {data["relay2"]}
                    </h4>
                  </div>
                  <div className="col-md-3">
                    <h4>
                      <AiFillBulb />
                      Bulp 3 : {data["relay3"]}
                    </h4>
                  </div>
                </div>
                <div className="row p-4 justify-content-center">
                  <div className="col-md-3">
                    <h4>
                      <CiAlarmOn /> Start Time : {data["startTime"]}
                    </h4>
                  </div>
                  <div className="col-md-3">
                    <h4>
                      <CiAlarmOn />
                      End Time : {data["endTime"]}
                    </h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="row mt-4 post_data justify-content-center">
            <h3 className="mb-4">Setting Data</h3>

            <div className="col-md-3">
              <h4>
                <FiAirplay />
                State
              </h4>
              <div className="form-check form-switch">
                <input
                  onChange={(e) => setDataCondition(parseInt(e.target.value))}
                  value="1"
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckDefault"
                >
                  Set To Automatic
                </label>
              </div>
            </div>

            <div className="col-md-3">
              <h4>
                {" "}
                <AiFillBulb />
                Bulb 1
              </h4>
              <div className="form-check form-switch">
                <input
                  onChange={(e) => setDataRelay1(parseInt(e.target.value))}
                  value="1"
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckDefault"
                >
                  Turn On
                </label>
              </div>
            </div>

            <div className="col-md-3">
              <h4>
                {" "}
                <AiFillBulb /> Bulb 2
              </h4>
              <div className="form-check form-switch">
                <input
                  onChange={(e) => setDataRelay2(parseInt(e.target.value))}
                  value="1"
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckDefault"
                >
                  Turn On
                </label>
              </div>
            </div>

            <div className="col-md-3">
              <h4>
                {" "}
                <AiFillBulb />
                Bulb 3
              </h4>
              <div className="form-check form-switch">
                <input
                  onChange={(e) => setDataRelay3(parseInt(e.target.value))}
                  value={1}
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckDefault"
                >
                  Turn On
                </label>
              </div>
            </div>

            <div className="col-md-3">
              <h4>
                {" "}
                <CiAlarmOn />
                Start Time
              </h4>
              <select
                onChange={(e) => setDataStartTime(parseInt(e.target.value))}
                className="form-select"
                aria-label="Default select example"
                defaultValue={dataStartTime}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
              </select>
            </div>

            <div className="col-md-3">
              <h4>
                {" "}
                <CiAlarmOn /> End Time
              </h4>
              <select
                onChange={(e) => setDataEndTime(parseInt(e.target.value))}
                className="form-select"
                aria-label="Default select example"
                defaultValue={dataEndTime}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
              </select>
            </div>
          </div>
          <div className="row">
            <button className="mt-4 btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Content;
