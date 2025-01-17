import Search from "../icons/SearchSvg"


const SearchInput = (props) => {
    const {
        searchValue, onChange, filteredData, handleClickCtiy
    }=props 
    return (   
        <>
               <div className="flex rounded-[50px] bg-[white] w-[400px] gap-[20px] items-center z-10 px-[5px] py-[5px]">
        <Search />
        <input
          className=" top-[100px] z-10  text-[30px] rounded-[50px] border-none outline-none p-[5px]"
          value={searchValue}
          onChange={onChange}
          placeholder="Search"
          />
      </div>
                    <div className="absolute top-[70px] z-10 text-black w-[400px] rounded-[30px] mt-2.5 rounded-3xl bg-white/80 shadow-lg backdrop-blur-md">
                    {filteredData.map((el) => (
                      <p
                        className="p-2 cursor-pointer hover:bg-gray-200 rounded-[30px]"
                        onClick={() => handleClickCtiy(el)}
                        key={el}
                      >
                        {el}
                      </p>
                    ))}
                  </div>
          </>
      )
} 
export default SearchInput