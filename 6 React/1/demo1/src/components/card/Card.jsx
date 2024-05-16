export default function Card(){
    return(
        <>
        <div className="bg-white w-1/5 shadow-md rounded-md">
            <img src="https://images.unsplash.com/photo-1492176273113-2d51f47b23b0?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-100"/>
            <div className="p-5">
                <h1 className="text-lg font-bold">card title</h1>
                <h5 className="text-sm font-semibold">category</h5>
                <p className="text-gray-500 my-2">Description</p>
                <button className="bg-red-600 text-white px-3 py-1 rounded text-base uppercase mx-auto w-full">Delete</button>
            </div>
        </div>
        </>
    )
}