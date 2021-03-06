import React from 'react'

const Table = (props) => {
    return(
      <div>
        <table className="table table-striped">
            <thead className="bg-green-primary text-white">
              <tr>
                <th scope="col">Tweets Raw</th>
                <th scope="col">Sentiment</th>
                <th scope="col">Positive</th>
                <th scope="col">Neutral</th>
                <th scope="col">Negatif</th>
              </tr>
            </thead>
            <tbody>
                {props.data.map((data,i)=>(
                    <tr key={i}>
                        <td style={{textAlign:'left'}}>{data.raw}</td>
                        <td>{data.sentiment}</td>
                        <td>{data.pos}%</td>
                        <td>{data.neu}%</td>
                        <td>{data.neg}%</td>
                    </tr>
                ))}
              
            </tbody>
          </table>
          </div>
    )
}

export default Table