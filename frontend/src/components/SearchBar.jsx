function SearchBar() {
  return (
    <div className="w-full bg-white flex items-center gap-x-4 px-8 h-12 rounded-md shadow-md">
      <img src="/images/search-icon-1.png" className="h-[50%]" />
      <input
        className="w-full focus:outline-none placeholder-[#b3b3b3]"
        placeholder="Search"
      />
    </div>
  );
}

export default SearchBar;
