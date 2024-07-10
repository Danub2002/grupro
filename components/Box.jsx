
export default function Box({title,topics}) {
    const [isOpen, setIsOpen] = useState(false);

    const handleIsOpenChange = () => {
      setIsOpen(!isOpen);
    }
    return (
      <div className="">
        <h1>{title}</h1>

        {topics.map((topic,id) => {
          
        })}
      </div>
    )
}
