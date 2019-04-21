import React from 'react'
import EntriesApiServices from '../../Services/entries-api-services'
import Moment from 'moment'

export default class Entries extends React.Component {

  componentDidMount() {
    EntriesApiServices.getAllEntries()
      .then(res => {
        this.props.populateEntries(res)
      })
  }

  formatDate(dateString) {
    const baseFormat = Moment(dateString, 'YYYY/MM/DD HH:mm', false).format('YYYY/MM/DD')

    const year = baseFormat.slice(0, 4)
    const month = baseFormat.slice(5, 7)
    const day = baseFormat.slice(8, 10)

    return `Created ${month} ${day}, ${year}`
  }

  render() {

    let content = []
    const mainEntries = this.props.mainEntries

    if (mainEntries.length > 0) {
      mainEntries.map(entry => {
        let { id, title, body, date_created } = entry
        let tempObj =  { id, title, body, date_created } 
        content.unshift(tempObj)
      })
    }

    return(
      <div className='entries'>
        {content.length === 0 && ''}
        {content.length > 0 && content.map(element => {
          return (
            <div key={element.id}>
              <h2>{element.title}</h2>
              <p>{element.body}</p>
              <div className='entry-date'>{this.formatDate(`${element.date_created}`)}</div>
            </div>
          )
        })}
      </div>
    )
  }
}