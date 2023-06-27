import {React, useState, useEffect} from "react";

export default function FilterThroughTags( {applyFilter} )
{
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    // const navigate = useNavigate();

    const handleTagApply = (tag) => {
        applyFilter(tag);
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
            Filter by Tag
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