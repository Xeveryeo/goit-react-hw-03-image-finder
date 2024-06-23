import React, { Component } from "react";
import { SearchbarStyled } from "./StyledComponents/Searchbar";
import { SearchFormStyled } from "./StyledComponents/Searchbar";
import { SearchFormButtonStyled } from "./StyledComponents/Searchbar";
import { SearchFormButtonLabel } from "./StyledComponents/Searchbar";
import { SearchForInput } from "./StyledComponents/Searchbar";
import PropTypes from 'prop-types';

export class Searcher extends Component {
  render() {
    const { onChangeImageName, onSubmit, imageName } = this.props;

    return (
      <SearchbarStyled className="searchbar">
        <SearchFormStyled className="form" onSubmit={onSubmit}>
          <SearchFormButtonStyled type="submit" className="button">
            <SearchFormButtonLabel className="button-label">Search</SearchFormButtonLabel>
          </SearchFormButtonStyled>

          <SearchForInput
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={imageName} 
            onChange={onChangeImageName} 
          />
        </SearchFormStyled>
      </SearchbarStyled>
    );
  }
}

Searcher.propTypes = {
  onChangeImageName: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  imageName: PropTypes.string.isRequired, 
};
