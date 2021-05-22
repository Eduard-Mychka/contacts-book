export default function SearchContact({onSearchChange, searchValue}) {

  const onSearch = (e) => onSearchChange(e.target.value);

  return (
    <div className="ls_search">
      <input 
        className="form-control" 
        type="search" 
        name="search" 
        placeholder="Search your contacts..."
        value={searchValue}
        onChange={onSearch}/>
    </div>
  )
}
