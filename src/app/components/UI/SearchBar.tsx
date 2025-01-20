export default function SearchBar({handleClick, buttonText, firstInputRef, secondInputRef, className}){
    return(
        <div className={className}>
      <label htmlFor="start date">start date</label>

      {/* start date cannot be after end date */}
    <input type="date" id='start' ref={firstInputRef}/>
    <label className="px-1" htmlFor="end date"></label>
    <input type="date" id='end ' ref={secondInputRef}/>
    <button className='rounded bg-slate-500 text-lg' 
            onClick={handleClick}>
                     {buttonText}
                      </button>

    </div>
    )
}