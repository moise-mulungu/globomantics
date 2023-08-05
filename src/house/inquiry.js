import { useState } from 'react'

const Inquiry = () => {
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    remarks: '',
  })
  const onChange = (e) => {
    e.preventDefault()
    setContactInfo({
      ...contactInfo,
      [e.target.name]: e.target.value,
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(contactInfo)
  }

  return (
    <form className="mt-2">
      <div className="form-group">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={contactInfo.name}
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="text"
          className="form-control"
          id="email"
          name="email"
          value={contactInfo.email}
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="remarks" className="form-label">
          Remarks
        </label>
        <input
          type="text"
          className="form-control"
          id="remarks"
          name="remarks"
          value={contactInfo.remarks}
          onChange={onChange}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        disabled={!contactInfo.name || !contactInfo.email}
        onClick={onSubmit}
      >
        Submit
      </button>
    </form>
  )
}

export default Inquiry
