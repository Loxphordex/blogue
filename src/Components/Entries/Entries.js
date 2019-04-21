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

  render() {

    let content = []
    const mainEntries = this.props.mainEntries

    if (mainEntries.length > 0) {
      mainEntries.map(entry => {
        for (let i = 0; i < mainEntries.length; i++) {
          let { id, title, body, date_created } = entry
          let tempObj =  { id, title, body, date_created } 
          content.push(tempObj)
        }
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
              <div>{Moment(`${element.date_created}`, 'YYYY/MM/DD HH:mm', false).format('YYYY/MM/DD')}</div>
            </div>
          )
        })}
      </div>
    )
  }
}