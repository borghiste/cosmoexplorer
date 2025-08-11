export default function FiieldSetandRadioGroup({options, legend, 
                                                onClick,
                                                onChange,
                                                nameRadio,
                                                clickState}){

    return(
        <div className="flex justify-between  items-center flex-col">

            
                  
        <fieldset id="field-levels">
            <legend className="text-xl text-black">{legend}</legend>


    {options.map((option) => (
        <>
        <div className="rounded-full w-[11rem] border-2 border-[var(--blue)] m-2 bg-gray-400">

        <input onChange={()=>{onChange(option)}}
                onClick={onClick}
                type="radio" name={nameRadio} value={option}/>
    <label className="text-md">{option}</label>
        </div>
        </>
))}
</fieldset>

<button 
onClick={onClick}
className="justify-end bg-[var(--blue)] rounded-full w-[5rem]">start</button>
   
    </div>
    )
}