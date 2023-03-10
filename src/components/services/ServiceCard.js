
function ServiceCard({data, index}){
    return(
        <div className="w-full relative p-8 h-96 lg:h-[200pm] bg-white hover:-translate-y-1 transition duration-300 ease-in-out"
            onMouseEnter={()=>{
                const title_element = document.getElementById(index)
                title_element.classList.add('text-blue-button')
            }} 
            onMouseLeave={()=>{
                const title_element = document.getElementById(index)
                title_element.classList.remove('text-blue-button')
            }}>
            <div className="w-full ">
                <img src={data.img} className='w-10 h-10'></img>
                <h2 className="text-xl font-semibold text-gray-900 pt-8">{data.title}</h2>
                <p className="text-lg font-regular text-gray-500 pt-4">{data.description}</p>
                </div>
            <div className="aboslute bottom-0 left-0 p-0">
                <h2 id={index} className="text-xl font-semibold pt-8">Learn More</h2>
            </div>
        </div>
    )
}

export default ServiceCard