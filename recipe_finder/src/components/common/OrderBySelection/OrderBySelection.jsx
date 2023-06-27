import {React, useState, useEffect} from "react"
export default function OrderBySelection( {applyOrderBy} )
{
    const [trend, setTrend] = useState('');

    const handleOrderClick = (event) => {
        setTrend(event.target.value);    }

    useEffect(() => {
        applyOrderBy(trend);
      }, [trend]);

    return(
            <>
                <select className="form-select w-25" value={trend} onChange={handleOrderClick}>
                    <option value="">Order by: </option>
                    <option value="popularity">Popularity</option>
                    <option value="rate">Rate</option>
                </select>
            </>
    );
}