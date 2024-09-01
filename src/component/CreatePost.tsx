import { useRef, useState } from "react"

interface ICreatePost {
  handle: (status:boolean) => void
}

const CreatePost = ({ handle }: ICreatePost) => {
  const [input, setInput] = useState<Record<string, string>>({})
  const formRef = useRef(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const obj = {
      'PostBy': input.name,
      'PostTitle': input.title,
      'PostContent': input.content,
    }
    const getLocalData = localStorage.getItem('posts')
    const parseData = getLocalData && JSON.parse(getLocalData) || []
    parseData.push(obj)
    localStorage.setItem('posts', JSON.stringify(parseData))
    if (formRef.current) formRef?.current?.reset()
    handle(true)
  }

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput((prev: Record<string, string>) => ({ ...prev, [name]: value }))
  }

  return (
    <form ref={formRef}
      onSubmit={handleSubmit} className='form' >
      <div className="form-header"><h1>Create Post</h1></div>
      <div className="form-box">
        <div>
          <h4>Enter Your Name</h4>
          <input id="name" name="name" type="text" placeholder="Enter Your Name" onChange={handleInput} required />
        </div>
        <div>
          <h4>Enter Post Title</h4>
          <input id="title" name="title" type="text" placeholder="Enter Post Title" onChange={handleInput} required /></div>
        <div>
          <h4>Type Your Post Here</h4>
          <textarea id="content" name="content" rows={5} placeholder="Enter Post Content Here..." onChange={handleInput} required /></div>
        <div className="form-box-action"><button >Submit</button></div>
      </div>
    </form>

  )
}

export default CreatePost