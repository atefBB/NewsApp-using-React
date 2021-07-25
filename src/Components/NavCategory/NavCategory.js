import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./NavCategory.css";

export class NavCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: [
        { type: "Home", categoryUrl: "/home/feed" },
        { type: "World News", categoryUrl: "/news/world/feed" },
        { type: "Health", categoryUrl: "/lifestyle/health/feed" },
        { type: "Technology", categoryUrl: "/technology/feed" },
        { type: "COVID-19", categoryUrl: "/latest-news/covid-19/feed" },
      ],
      selectedCategory: "/home/feed",
    };
  }

  ClickHandler = (url) => {
    this.setState({
      selectedCategory: url,
    });
  };

  render() {
    let categories = this.state.category.map((c) => (
      <li key={c.type}>
        <NavLink
          onClick={this.props.clicked}
          to={{
            pathname: `/${c.type}`,
            state: `${c.categoryUrl}`,
          }}
        >
          {c.type}
        </NavLink>
      </li>
    ));

    return (
      <div>
        <ul className="ullist">{categories}</ul>

        {/* <Newslist selectedCategory={this.state.selectedCategory} /> */}
      </div>
    );
  }
}

export default NavCategory;
