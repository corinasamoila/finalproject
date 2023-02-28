import "./Universities.css";
import { useEffect, useState } from "react";
import University from "./University";
import Grid from "@mui/material/Grid";
import uuid from "react-uuid";
import Form from "react-bootstrap/Form";
import NavbarSec from "../Navbar/NavbarSec";
import {
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import places from "./places.json";

const Universities = (props) => {
  const [initialUniversities, setInitialUniversities] = useState([]);
  const [universities, setUniversities] = useState([]);
  const [category, setCategory] = useState("art");
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState(allData);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("http://universities.hipolabs.com/search?country=Romania")
      .then((response) => response.json())
      .then((data) => {
        const newArray = [];
        const filteredData = {};
        for (let i in data) {
          const dataName = data[i]["name"];
          filteredData[dataName] = data[i];
        }
        for (let i in filteredData) {
          newArray.push(filteredData[i]);
        }
        setInitialUniversities(newArray);
        setUniversities(newArray);
      })
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    setAllData(places);
    setFilteredData(places.filter((place) => place.category === category));
  }, [category]);

  useEffect(() => {
    const newUniversities = filteredData.filter((input) =>
      input.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setUniversities(newUniversities);
  }, [searchQuery, filteredData]);

  const handleClick = (search) => {
    setSearchQuery(search.toLowerCase());
  };

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <>
      {props.children}
      <NavbarSec />
      <div className="container-universities">
        <Form className="form-search">
          <div className="search-container">
            <Form.Control
              type="search"
              placeholder="Search"
              className="text-center search-btn"
              aria-label="Search"
              onChange={(e) => handleClick(e.target.value)}
            />
            <FormControl className="category">
              {/* <InputLabel>Category</InputLabel> */}
              <Select value={category} onChange={handleChange}>
                <MenuItem value="art">Art</MenuItem>
                <MenuItem value="engineering">Engineering</MenuItem>
                <MenuItem value="economy">Economy</MenuItem>
                <MenuItem value="architecture">Architecture</MenuItem>
                <MenuItem value="medicine">Medicine</MenuItem>
                <MenuItem value="military">Military</MenuItem>
                <MenuItem value="agronomy">Agronomy</MenuItem>
                <MenuItem value="sport">Sport</MenuItem>
                <MenuItem value="general">General</MenuItem>
                <MenuItem value="law">Juridical Science</MenuItem>
              </Select>
            </FormControl>
          </div>
        </Form>
        <ul className="universities">
          <Grid
            className="grid"
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {universities.map((university) => (
              <University
                key={uuid()}
                name={university.name}
                web_pages={university.web_pages}
              ></University>
            ))}
          </Grid>
        </ul>
      </div>
    </>
  );
};
export default Universities;
