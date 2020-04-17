import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import colors from "../utils/colors";

export default function TabBar({ links, value, onItemClick }) {
  return (
    <Bar>
      {links.map((link) => (
        <NavItem
          key={link.label}
          active={value === link.label}
          onClick={() => onItemClick(link.label)}
        >
          <link.Icon active={value === link.label} />
          {link.label}
        </NavItem>
      ))}
    </Bar>
  );
}
TabBar.propTypes = {
  links: PropTypes.array,
  value: PropTypes.string,
  onItemClick: PropTypes.func,
};

const Bar = styled.ul`
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: ${colors.background};
  width: 100%;
  position: fixed;
  bottom: 0;
  list-style: none;
`;

const NavItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  min-width: 80px;
  max-width: 168px;
  cursor: pointer;
  color: ${(props) => (props.active ? colors.gradientOne : colors.primaryText)};
`;
