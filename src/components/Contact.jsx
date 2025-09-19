const Contact = () => {
    return(
        <div className="w-full h-auto bg-skin pb-2 max-sm:bg-violet-200 "> 
            <h1 className="heading outfit-sans max-sm:text-4xl ">Contact ME</h1>
            <div className="max-md:p-4 flex justify-evenly max-md:flex-col md:flex-col md:p-10 flex-row max-md:-mt-15 max-lg:-mt-15 lg:-mt-16"> 
            <div className="w-[40vw] max-sm:w-full  border-l-8 pl-8 mt-12 box-border">
                <h1 className="font-mono text-4xl mb-2 mt-4 max-sm:text-lg">Name:</h1>
                <p className="font-mono text-4xl mb-2 text-gray-700 max-sm:text-lg">Mohit</p>
                <h1 className="font-mono text-4xl mb-2 max-sm:text-lg">Phone Number:</h1>
                <p className="font-mono text-4xl mb-2 text-gray-700 max-sm:text-lg">9472941443</p>
                <h1 className="font-mono text-4xl mb-2 max-sm:text-2xl">Gmail:</h1>
                <p className="font-mono text-4xl mb-2 text-gray-700 max-sm:text-[16px]  ">mohit.model1@gmail.com</p>
            </div>
            </div>
        </div>
    )
}

export default Contact
