import React from "react";
import styled from "styled-components";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SearchIcon from "@mui/icons-material/Search";

export const SearchBar = ({
  searchValue,
  setSearchValue,
  profileType,
  setProfileType,
}) => {
  const [stateFilter, setStateFilter] = React.useState(false);
  const onSearchValueChanged = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <>
      <div className="container-Search-and-filters">
        <div className="conteiner-SearchBar_DashboardAdmins">
          <div className="icon-search">
            <span>
              <SearchIcon />
            </span>
          </div>
          <input
            value={searchValue}
            type="text"
            onChange={onSearchValueChanged}
            placeholder="Buscar por nombre"
            className="searchBar"
          />
          <div
            className="button-filters_DashboardAdmins"
            onClick={() => setStateFilter(!stateFilter)}
          >
            <div className="icon-filter_DashboardAdmins">
              <FilterAltIcon />
              <div>
                <p>Filtros</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container-filters_DashboardAdmins"
        id={stateFilter ? "filters-active" : ""}
      >
        <button
          id={profileType == 1 ? "active" : ""}
          className="btn-filter_DashboardAdmins"
          onClick={
            profileType != 1 ? () => setProfileType(1) : () => setProfileType(3)
          }
        >
          Admin
        </button>
        <button
          className="btn-filter_DashboardAdmins"
          id={profileType == 2 ? "active" : ""}
          onClick={
            profileType != 2 ? () => setProfileType(2) : () => setProfileType(3)
          }
        >
          Super Admin
        </button>
      </div>
    </>
  );
};
