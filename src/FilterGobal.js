const FilterGobal = ({ filter, setFilter }) => {
    return (  
        <span className="search">
            Search: {''}
            <input value={filter || ''} onChange={(e) => setFilter(e.target.value)} />
        </span>
    );
}
 
export default FilterGobal;