

const FormInput = () => {
  return (
    <div className="flex flex-col gap-y-1">
        <label className="text-sm text-start">Username</label>
        <input type="text" placeholder="Your Name" className="text-start border-gray-900 pl-2" />
        <label className="text-sm text-start">Email</label>
        <input type="text" placeholder="Your Mail" className="text-start border-gray-900 pl-2" />
        <label className="text-sm text-start">Phone Number</label>
        <input type="text" placeholder="Phone Number" className="text-start border-gray-900 pl-2" />
        <label className="text-sm text-start">Birth Day</label>
        <input type="date" placeholder="Birth Day" className="text-start border-gray-900 pl-2" />
        <label className="text-sm text-start">Password</label>
        <input type="text" className="border-gray-900 pl-2" />
        <label className="text-sm">Lorem ipsum dolor sit. <br /> 
        <input type="checkbox" /> <a href="#" className="text-sm">Read, Approve</a>
        </label>
    </div>
  )
}




export default FormInput