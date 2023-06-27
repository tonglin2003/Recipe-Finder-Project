import {React, useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

export default function FilterThroughTags( {applyFilter} )
{
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const [selectedTag, setselectedTag] = useState('');
    const navigate = useNavigate();

    const handleTagApply = (tag) => {
        setselectedTag(tag);
        applyFilter(selectedTag);
      };

    return(
        <>
        <div className="dropdown">
            <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded={isDropDownOpen ? "true" : "false"}
            onClick={() => setIsDropDownOpen(!isDropDownOpen)}
            >
            Dropdown button
            </button>
            <div
            className={`dropdown-menu${isDropDownOpen ? " show" : ""}`}
            aria-labelledby="dropdownMenuButton"
            >
            <a
                className="dropdown-item"
                onClick={() => handleTagApply("dog")}
            >
                Dog
            </a>
            <a
                className="dropdown-item"
                onClick={() => handleTagApply("cat")}
            >
                Cat
            </a>
            </div>
        </div>
        </>
    );
}