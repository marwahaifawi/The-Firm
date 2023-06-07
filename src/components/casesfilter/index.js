import React, { useState, useEffect } from "react";
import { Stack, Grid, Container } from "@mui/material";
import ButtonApp from "../../shared/button";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import CaseCard from "../casecard";
import api from "../../api/api";

const CasesFilter = () => {
  const [clicked, setClicked] = useState(0);
  const filters = ["Show All", "Coaching", "Digital Partners", "SEO"];
  const [cases, setCases] = useState([]);
  const [filteredCases, setFilteredCases] = useState([]); // State for filtered cases
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const getCases = async () => {
    const response = await api.get("/cases");
    return response.data;
  };

  useEffect(() => {
    const getAllCases = async () => {
      const allCases = await getCases();
      if (allCases) {
        setCases(allCases);
        setFilteredCases(allCases); // Set initial filtered cases to all cases
      }
    };
    getAllCases();
  }, []);

  useEffect(() => {
    if (clicked === 0) {
      // Show All filter selected, set filtered cases to all cases
      setFilteredCases(cases);
    } else {
      // Filter cases based on the selected solution
      const filtered = cases.filter(
        (item) => item.solution === filters[clicked]
      );
      setFilteredCases(filtered);
    }
  }, [clicked, cases]);

  useEffect(() => {
    // Filter cases based on search query
    const filtered = cases.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCases(filtered);
  }, [searchQuery, cases]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Stack alignItems="center" p={5}>
      <Stack
        spacing={{ lg: 10, md: 10, sm: 5 }}
        direction={{ lg: "row", md: "row", sm: "row" }}
      >
        {filters.map((item, index) => (
          <ButtonApp
            key={index}
            variant={index === clicked ? "contained" : "outlined"}
            onClick={() => setClicked(index)}
          >
            {item}
          </ButtonApp>
        ))}
        <TextField
          label="Search"
          value={searchQuery}
          onChange={handleSearchChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      <Container>
        <Grid
          mt={4}
          container
          alignItems={{
            xs: "center",
            sm: "center",
            md: "stretch",
            lg: "stretch",
          }}
          direction={{ md: "row", lg: "row" }}
          spacing={5}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {filteredCases.map((item) => (
            <Grid item xs={4} key={item.id}>
              <CaseCard
                image={item.image}
                description={item.description}
                title={item.title}
                caseID={item.id}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Stack>
  );
};

export default CasesFilter;
