// Write your code here

const listProfile = props => {
  const {eachDrawn} = props
  const {id, value} = eachDrawn

  return (
    <li>
      <button type="button">{value}</button>
    </li>
  )
}

export default listProfile
