import React from "react";
import logo from '../assets/logo.png'
import "./Sidebar.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
{/* <RxCross2 /> */}
{/* <RxHamburgerMenu /> */}

const Sidebar = ({
  searchId,
  setSearchId,
  searchName,
  setSearchName,
  searchCity,
  setSearchCity,
  sortOrder,
  setSortOrder,
  filterGender,
  setFilterGender
}) => {

  return (

    <div className="sidebar-container">
      {/* Logo & Title */}
      <div className="sidebar-header">
        <img src={logo} alt="Logo" className="sidebar-logo" />
        <h1 className="sidebar-title">DATA TABLE</h1>
        <div className="sidebar-toggle">
          {/* <RxHamburgerMenu className="hamburger-icon" /> */}
          <RxCross2
  className="cross-icon"
  onClick={() => {
    document.querySelector('.sidebar-container').classList.toggle('active');
  }}
/>

          {/* <RxCross2 className="cross-icon" /> */}
      </div>
      </div>

      {/* Filter Section */}
      <div className="filter-section">
        <h3>FILTER</h3>
        <div className="filter-options">
          <label>
            <input type="checkbox" value="" checked={filterGender === ''} onChange={() => setFilterGender('')} /> All
          </label>
          <label>
            <input type="checkbox" value="male" checked={filterGender === "male"} onChange={() => setFilterGender("male")} /> Male
          </label>
          <label>
            <input type="checkbox" value="female" checked={filterGender === "female"} onChange={() => setFilterGender("female")} /> Female
          </label>
        </div>
      </div>

      {/* Sort Section */}
      <div className="sort-section">
        <h3>SORT</h3>
        <div className="sort-options">
          <label>
             <input
              type="radio"
              name="sort"
              value="id"
              checked={sortOrder === 'id'}
              onChange={() => setSortOrder('id')}
            /> ID
          </label>
          <label>
            <input
              type="radio"
              name="sort"
              value="asc"
              checked={sortOrder === 'asc'}
              onChange={() => setSortOrder('asc')}
            /> A–Z
          </label>
          
          <label>
            <input
              type="radio"
              name="sort"
              value="desc"
              checked={sortOrder === 'desc'}
              onChange={() => setSortOrder('desc')}
            /> Z–A
          </label>
        </div>
      </div>
      <div className="sort-section">
        <h3>Search</h3>
        <div className="sort-options">
          <label>
            <input type="text" name="search" placeholder="Search by ID" value={searchId} onChange={(e) => setSearchId(e.target.value)} /> ID
          </label>
          <label>
            <input type="text" name="search" placeholder="Search by Name" value={searchName} onChange={(e) => setSearchName(e.target.value)} /> Name
          </label>
          <label>
            <input type="text" name="search" placeholder="Search by City" value={searchCity} onChange={(e) => setSearchCity(e.target.value)} /> City
          </label>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
