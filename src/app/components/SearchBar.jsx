import React from 'react'

function SearchBar() {
  return (
    <div>
         <div>
        <div>
        <input type="text" placeholder='Ask Ai Anything' />
        </div>
        <div>
          <Image
          src={"/search.svg"} // Path to your image inside the public folder
          width={18}
          height={18}
          alt="Search icon"
          />
        </div>
        <Button>Search</Button>
      </div>
    </div>
  )
}

export default SearchBar
