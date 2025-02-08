
const form = () => {

const handleSubmit=(e)=>{
  e.preventDefault();
console.log("hello world")

}




  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-50 rounded-lg shadow-md">
    <form className="space-y-4">
      <div className="flex flex-col space-y-2">
        <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
          Name:
        </label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          placeholder="Enter your name"
        />
         <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
          Email:
        </label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          placeholder="Enter your email"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
      >
        Submit
      </button>
    </form>
  </div>

  )
}

export default form
