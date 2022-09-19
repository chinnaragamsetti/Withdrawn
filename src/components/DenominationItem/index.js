const ListProfile = props => {
  const {eachDrawn} = props
  const {value} = eachDrawn

  onDeduct = () => {
    onDeduction(value)
  }

  return (
    <li>
      <button type="button" onClick={onDeduct}>
        {value}
      </button>
    </li>
  )
}

export default ListProfile

