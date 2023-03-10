import './index.css'

const TabItem = props => {
  const {tabDetails, thisClickTab, isActive} = props
  const {displayText, tabId} = tabDetails
  const onTabItemClick = () => {
    thisClickTab(tabId)
  }
  const activeBtnTabClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeBtnTabClassName}`}
        onClick={onTabItemClick}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
