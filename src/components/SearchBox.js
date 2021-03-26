import React from 'react'

//we are destructuring here, it allows us to grab the prop and then
//the state of that prop
const SearchBox = ({searchField,searchChange}) => {
    return (
        <div className="pa2">
            <input
                className="pa3 ba b--green bg-lightest-blue"
                type="search"
                placeholder="search robots"
                onChange = {searchChange}
            />
        </div>
    );
}
export default SearchBox;